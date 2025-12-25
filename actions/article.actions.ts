"use server";

import { editCloudinaryImage } from "@/lib/cloudinary";
import dbConnect from "@/lib/db";
import Article from "@/model/Article";
import User from "@/model/User";
import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";

export const createArticle = async (data: any) => {
  try {
    await dbConnect();

    const { slug, thumbnail, author } = data;

    // Kiểm tra dữ liệu đầu vào
    if (!slug || !thumbnail || !author) {
      throw new Error("Thiếu dữ liệu đầu vào cần thiết");
    }

    // Kiểm tra xem bài viết đã tồn tại chưa
    const existedArticle = await Article.findOne({ slug });
    if (existedArticle) {
      throw new Error("Bài viết đã tồn tại");
    }

    // Xử lý hình ảnh thumbnail
    let savedThumbnail = { public_id: "", url: "" };
    if (thumbnail) {
      const processedImage = await editCloudinaryImage(thumbnail);
      if (processedImage) {
        savedThumbnail = {
          public_id: processedImage.public_id,
          url: processedImage.secure_url,
        };
      }
    }

    // Tạo bài viết mới
    const article = await Article.create({
      ...data,
      thumbnail: savedThumbnail,
      author,
    });

    // Cập nhật danh sách bài viết của user
    const updatedUser = await User.findByIdAndUpdate(
      author,
      { $push: { articles: article._id } },
      { new: true, select: "articles" }
    );

    if (!updatedUser) {
      throw new Error("Không tìm thấy user để cập nhật bài viết");
    }

    revalidatePath("/tin-tuc");
    revalidatePath("/");

    return true;
  } catch (error) {
    console.error("Lỗi khi tạo bài viết:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Lỗi không xác định khi tạo bài viết"
    );
  }
};

export const editArticle = async (data: any) => {
  try {
    await dbConnect();

    console.log(data);

    // Kiểm tra xem ID có tồn tại không
    if (!data.id) {
      throw new Error("Thiếu ID bài viết cần chỉnh sửa");
    }

    // Tìm bài viết cần sửa
    const article = await Article.findById(data.id);
    if (!article) {
      throw new Error("Bài viết không tồn tại");
    }

    // Kiểm tra xem ảnh có thay đổi không, nếu có thì cập nhật
    const newThumbnail = await editCloudinaryImage(
      data.thumbnail,
      article.thumbnail
    );
    if (newThumbnail) {
      article.thumbnail = {
        public_id: newThumbnail.public_id,
        url: newThumbnail.secure_url,
      };
    }

    await Article.findByIdAndUpdate(
      data.id,
      { ...data, thumbnail: article.thumbnail },
      { new: true }
    );

    revalidatePath("/tin-tuc");
    revalidatePath(`/tin-tuc/${article.slug}`);
    revalidatePath("/");

    return true;
  } catch (error) {
    console.error("Lỗi khi chỉnh sửa bài viết:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Lỗi không xác định khi chỉnh sửa bài viết"
    );
  }
};

export const deleteArticle = async (id: string) => {
  try {
    await dbConnect();

    // Tìm bài viết và lấy luôn thông tin author (chỉ cần _id và articles)
    const article = await Article.findById(id).populate({
      path: "author",
      select: "articles",
    });

    if (!article) {
      throw new Error("Bài viết không tồn tại");
    }

    // Xóa ảnh trên Cloudinary nếu có
    if (article.thumbnail?.public_id) {
      await cloudinary.v2.uploader.destroy(article.thumbnail.public_id);
    }

    // Xóa bài viết khỏi danh sách của user bằng $pull (tối ưu hơn splice)
    await User.updateOne(
      { _id: article.author._id },
      { $pull: { articles: article._id } }
    );

    // Xóa bài viết khỏi database
    await Article.deleteOne({ _id: id });

    revalidatePath("/tin-tuc");
    revalidatePath("/");

    return true;
  } catch (error) {
    console.error("Lỗi khi xóa bài viết:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Lỗi không xác định khi xóa bài viết"
    );
  }
};
