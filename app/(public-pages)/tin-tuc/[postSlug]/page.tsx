import Link from "next/link";
import { IoReturnUpBackSharp } from "react-icons/io5";
import { linkConstants } from "@/data/constants";
import { formatLongDate } from "@/lib/formatData";
import NewsContent from "@/components/news-page/news-content";
import {
  getAllArticlesForAdmin,
  getArticleBySlug,
  getArticleBySlugAndIncreaseViews,
} from "@/queries/article.query";
import RelatedArticles from "@/components/news-page/related-articles";

export async function generateStaticParams() {
  const articles = await getAllArticlesForAdmin();

  const articlesSlugs = articles?.map((article: any) => ({
    postSlug: article.slug,
  })) as any;

  return articlesSlugs;
}

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ postSlug: string }>;
}) => {
  try {
    const slug = (await params).postSlug;

    const data = await getArticleBySlug(slug);

    return {
      title: data?.name,
      description: data?.description,
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_BASE_URL}${linkConstants.news}/${slug}`,
      },
      openGraph: {
        title: data?.name,
        description: data?.description,
        url: `${process.env.NEXT_PUBLIC_BASE_URL}${linkConstants.news}/${slug}`,
        images: [
          {
            url: data?.thumbnail?.url,
            width: 1200,
            height: 630,
            alt: data?.name,
          },
        ],
        type: "article",
        publishedTime: data?.createdAt,
        authors: ["Admin"],
      },
      twitter: {
        card: "summary_large_image",
        title: data?.name,
        description: data?.description,
        images: [data?.thumbnail?.url],
      },
    };
  } catch (error) {
    console.log(error);
  }
};

export default async function Page({
  params,
}: {
  params: Promise<{ postSlug: string }>;
}) {
  const slug = (await params).postSlug;

  const data = (await getArticleBySlugAndIncreaseViews(slug)) as any;

  return (
    <div className="container my-12 text-textColor">
      <Link
        href={linkConstants.news}
        className="flex items-center w-fit gap-1 mb-10 text-sm hover:text-primary hover:-translate-x-4 transition"
      >
        <IoReturnUpBackSharp size={20} /> Quay lại trang tin tức
      </Link>

      <p className="mb-4">
        Đăng vào ngày{" "}
        <span className="font-bold">{formatLongDate(data?.createdAt)}</span> bởi{" "}
        <span className="font-bold uppercase">Admin</span>
      </p>

      <h1 className="font-bold text-2xl text-primary mb-8">{data?.name}</h1>
      <div className="border-[1px] border-dashed mb-8"></div>
      <NewsContent content={data?.content} />

      <RelatedArticles currentId={data?._id} currentCate={data?.category} />
    </div>
  );
}
