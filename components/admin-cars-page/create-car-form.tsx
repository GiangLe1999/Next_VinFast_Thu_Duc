"use client";

import { ChangeEvent, useState } from "react";
import { TiArrowBack } from "react-icons/ti";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { MdFileUpload } from "react-icons/md";
import AdminBtnWithLoading from "../admin-btn-with-loading";
import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import { linkConstants } from "@/data/constants";
import AdminBtnWithIcon from "../admin-btn-with-icon";
import { blobToBase64 } from "@/lib/blobToBase64";
import NextImage from "../next-image";
import AdminFormInput from "../admin-form-input";
import TextEditor from "../text-editor";
import { createCar } from "@/actions/car.actions";

const schema: any = Yup.object({
  name: Yup.string().required("Vui lòng nhập tên xe"),
  avatar: Yup.string().required("Vui lòng chọn ảnh đại diện cho xe"),
  slug: Yup.string().required("Vui lòng nhập đường dẫn của xe"),
  priceFrom: Yup.string().required("Vui lòng nhập giá thấp nhất của xe"),
  installmentPrice: Yup.string().required("Vui lòng nhập giá trả góp của xe"),
  registration: Yup.string().required("Vui lòng nhập registration của xe"),
});

interface FormValues {
  name: string;
  avatar: string;
  slug: string;
  priceFrom: number;
  installmentPrice: number;
  registration: number;
  brochure: string;
  colors: { color: string; colorImg: string }[];
  carLines: { name: string; price: number; tax: string; discount: number }[];
}

const CreateCarForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const [content, setContent] = useState("");
  const [saleContent, setSaleContent] = useState("");
  const [exterior, setExterior] = useState("");
  const [interior, setInterior] = useState("");
  const [specifications, setSpecifications] = useState("");

  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      avatar: "",
      slug: "",
      priceFrom: 0,
      installmentPrice: 0,
      registration: 0,
      brochure: "",
      colors: [],
      carLines: [],
    },
    resolver: yupResolver(schema),
  });

  const { register, handleSubmit, formState, setValue, control, watch } = form;

  const { errors } = formState;

  const { fields, append, remove } = useFieldArray({
    name: "carLines",
    control,
  });

  const {
    fields: fields_colors,
    append: append_color,
    remove: remove_color,
  } = useFieldArray({
    name: "colors",
    control,
  });

  const uploadAvatarHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files?.length) {
      return;
    }

    const file = files[0];

    if (file.size > 1024 * 1024 * 3) {
      setValue("avatar", "");
      return toast.error("Ảnh phải dưới 3MB");
    }

    const base64: any = await blobToBase64(file);
    setValue("avatar", base64);
  };

  const uploadColorAvatarHandler = async (
    e: ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const files = e.target.files;
    if (!files?.length) {
      return;
    }

    const file = files[0];

    if (file.size > 1024 * 1024 * 3) {
      setValue(`colors.${id}.colorImg`, "");
      return toast.error("Ảnh phải dưới 3MB");
    }

    const base64: any = await blobToBase64(file);
    setValue(`colors.${id}.colorImg`, base64);
  };

  const onSubmit = async (formData: FormValues) => {
    if (!content) {
      return toast.error("Vui lòng nhập thông tin chi tiết về xe");
    }

    const bodyRequest = {
      ...formData,
      content,
      saleContent,
      exterior,
      interior,
      specifications,
    };

    setIsLoading(true);

    try {
      const result = await createCar(bodyRequest);
      if (result) {
        toast.success("Tạo xe thành công!");
      }
    } catch (error) {
      console.error("Lỗi khi tạo xe:", error);
      toast.error(
        error instanceof Error ? error.message : "Có lỗi xảy ra khi tạo xe"
      );
    } finally {
      setIsLoading(false);
      router.push(linkConstants.admin_cars);
    }
  };

  return (
    <>
      <div className="admin-card-body relative !pb-24">
        <div className="text-right mb-4">
          <AdminBtnWithIcon
            content="Trở về trang trước"
            icon={TiArrowBack}
            iconSize={22}
            onClick={() => router.push(linkConstants.admin_cars)}
          />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex-1">
          <div className="grid grid-cols-2 gap-10 items-center mb-6">
            <label
              htmlFor="avatar"
              className="w-full mt-2 relative aspect-video rounded-md flex flex-col justify-center items-center border border-dashed border-admin_primary cursor-pointer"
            >
              {watch("avatar") ? (
                <NextImage
                  src={watch("avatar")}
                  alt="Ảnh đại diện xe"
                  className="rounded-md overflow-hidden w-full h-full"
                />
              ) : (
                <>
                  <MdFileUpload size={50} className="text-admin_primary" />
                  <span className="text-admin_primary font-semibold">
                    Chọn ảnh đại diện cho xe
                  </span>
                  <span className="mt-1 text-slate-700">
                    ( Tỷ lệ ảnh: 16/9 )
                  </span>
                </>
              )}

              <input
                type="file"
                id="avatar"
                hidden
                {...register("avatar", { onChange: uploadAvatarHandler })}
              />
            </label>

            <div className="flex flex-col justify-between space-y-4">
              <AdminFormInput
                id="name"
                label="Tên xe"
                register={register("name")}
                errorMsg={errors.name?.message}
                placeholder="VD: VF3, VF5, VF6, ..."
              />

              <AdminFormInput
                id="slug"
                label="Đường dẫn"
                register={register("slug")}
                errorMsg={errors.slug?.message}
                placeholder="VD: vf3, vf5, vf6, ..."
              />

              <AdminFormInput
                id="priceFrom"
                type="number"
                label="Giá thấp nhất"
                register={register("priceFrom", { valueAsNumber: true })}
                errorMsg={errors.priceFrom?.message}
              />

              <AdminFormInput
                id="installmentPrice"
                type="number"
                label="Giá trả góp"
                register={register("installmentPrice", { valueAsNumber: true })}
                errorMsg={errors.installmentPrice?.message}
              />

              <AdminFormInput
                id="registration"
                label="Phần trăm phí trước bạ"
                register={register("registration", { valueAsNumber: true })}
                errorMsg={errors.registration?.message}
              />

              <AdminFormInput
                id="brochure"
                label="Link Brochure"
                register={register("brochure")}
                placeholder="VD: https://vinfast.vn/brochure/vf3.pdf"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-1 mb-4">
            <div>
              {fields.map((field, index) => (
                <div
                  key={field.id}
                  className="relative rounded-lg border shadow-md mb-4"
                >
                  <div className="flex items-center justify-between font-bold rounded-t-lg admin-main-gradient text-white py-2 px-4">
                    <span>Dòng xe {index + 1}</span>

                    <button
                      type="button"
                      className="font-bold flex items-center gap-1 text-xs text-white"
                      onClick={() => remove(index)}
                    >
                      <BiMinusCircle />
                      Xóa dòng xe {index + 1}
                    </button>
                  </div>

                  <div className="flex flex-col p-4">
                    <AdminFormInput
                      id={`carLine_${index}_name`}
                      label={`Tên dòng xe ${index + 1}`}
                      register={register(`carLines.${index}.name` as const)}
                      placeholder={`VD: New Morning MT, New Morning Premium, ...`}
                    />

                    <AdminFormInput
                      id={`carLine_${index}_price`}
                      label={`Giá dòng xe ${index + 1}`}
                      register={register(`carLines.${index}.price` as const, {
                        valueAsNumber: true,
                      })}
                      placeholder={`VD: 349, 399, ...`}
                    />

                    <AdminFormInput
                      id={`carLine_${index}_tax`}
                      label={`Thuế dòng xe ${index + 1}`}
                      register={register(`carLines.${index}.tax` as const, {
                        valueAsNumber: true,
                      })}
                      placeholder={`VD: 35.9, 40.9, ...`}
                    />

                    <AdminFormInput
                      id={`carLine_${index}_discount`}
                      label={`Ưu đãi dòng xe ${index + 1}`}
                      register={register(`carLines.${index}.discount` as const, {
                        valueAsNumber: true,
                      })}
                      placeholder={`VD: 0, 10000000, ...`}
                    />
                  </div>
                </div>
              ))}
              <button
                type="button"
                className="font-bold flex items-center gap-1 mb-4 text-xs admin-main-gradient text-white rounded-md shadow-md w-fit p-2 mt-4"
                onClick={() => append({ name: "", price: 0, tax: "", discount: 0 })}
              >
                <BiPlusCircle /> Thêm dòng xe
              </button>
            </div>

            <div>
              {fields_colors.map((field, index) => (
                <div
                  key={field.id}
                  className="relative rounded-lg border shadow-md mb-4"
                >
                  <div className="flex items-center justify-between font-bold rounded-t-lg admin-main-gradient text-white py-2 px-4">
                    <span>Màu xe {index + 1}</span>

                    <button
                      type="button"
                      className="font-bold flex items-center gap-1 text-xs text-white"
                      onClick={() => remove_color(index)}
                    >
                      <BiMinusCircle />
                      Xóa màu xe {index + 1}
                    </button>
                  </div>

                  <div className="flex flex-col p-4">
                    <AdminFormInput
                      id={`color_${index}_color`}
                      label={`Mã màu xe ${index + 1}`}
                      register={register(`colors.${index}.color` as const)}
                      placeholder={`VD: #2b3c7f, #8d1018, ...`}
                    />

                    <label
                      htmlFor={`color_avatar_${index}`}
                      className="w-full mt-2 relative aspect-video rounded-md flex flex-col justify-center items-center border border-dashed border-admin_primary cursor-pointer"
                    >
                      {watch(`colors.${index}.colorImg`) ? (
                        <NextImage
                          src={watch(`colors.${index}.colorImg`)}
                          alt="Ảnh đại diện cho màu xe"
                          className="rounded-md overflow-hidden w-full h-full"
                        />
                      ) : (
                        <>
                          <MdFileUpload
                            size={50}
                            className="text-admin_primary"
                          />
                          <span className="text-admin_primary font-semibold">
                            Chọn ảnh đại diện cho xe
                          </span>
                          <span className="mt-1 text-slate-700">
                            ( Tỷ lệ ảnh: 16/9 )
                          </span>
                        </>
                      )}

                      <input
                        type="file"
                        id={`color_avatar_${index}`}
                        hidden
                        {...register(`colors.${index}.colorImg`, {
                          onChange: (e) => uploadColorAvatarHandler(e, index),
                        })}
                      />
                    </label>
                  </div>
                </div>
              ))}
              <button
                type="button"
                className="font-bold flex items-center gap-1 mb-4 text-xs admin-main-gradient text-white rounded-md shadow-md w-fit p-2 mt-4"
                onClick={() => append_color({ color: "", colorImg: "" })}
              >
                <BiPlusCircle /> Thêm màu xe
              </button>
            </div>
          </div>

          <label className="admin-form-input-label !mb-1 block">
            Thông tin khuyến mãi
          </label>
          <div className="small-text-editor mb-6">
            <TextEditor content={saleContent} setContent={setSaleContent} />
          </div>

          <label className="admin-form-input-label !mb-1 block">
            Ngoại thất
          </label>
          <div className="small-text-editor mb-6">
            <TextEditor content={exterior} setContent={setExterior} />
          </div>

          <label className="admin-form-input-label !mb-1 block">
            Nội thất
          </label>
          <div className="small-text-editor mb-6">
            <TextEditor content={interior} setContent={setInterior} />
          </div>

          <label className="admin-form-input-label !mb-1 block">
            Thông số kỹ thuật
          </label>
          <div className="small-text-editor mb-6">
            <TextEditor content={specifications} setContent={setSpecifications} />
          </div>

          <label className="admin-form-input-label !mb-1 block">
            Thông tin chi tiết xe
          </label>
          <TextEditor content={content} setContent={setContent} />

          <AdminBtnWithLoading
            content="Tạo xe"
            isLoading={isLoading}
            type="submit"
            customClasses="!absolute bottom-7 right-5"
          />
        </form>
      </div>
    </>
  );
};

export default CreateCarForm;
