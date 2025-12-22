import FirstBanner from "@/components/first-banner";
import FilterList from "@/components/news-page/filter-list";
import { linkConstants } from "@/data/constants";

export const generateMetadata = () => {
  return {
    title: "Tin Tức VinFast - Cập Nhật Mới Nhất Về Xe & Công Nghệ",
    description:
      "Tổng hợp tin tức mới nhất về VinFast: xe điện, công nghệ, chính sách bán hàng, chương trình khuyến mãi và sự kiện nổi bật. Cập nhật liên tục tại VinFast Hồ Chí Minh.",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}${linkConstants.news}`,
    },
  };
};

const Page = () => {
  return (
    <div>
      <FirstBanner
        heading="TIN TỨC & ƯU ĐÃI"
        subHeading="Thông tin mới nhất về các dòng xe của VinFast"
        bgImg="/images/first-banners/bang-gia-xe-vinfast.webp"
        bgClasses="!bg-cover"
      />

      <div className="container mx-auto px-8 xl:px-0 pt-7">
        <FilterList />
      </div>
    </div>
  );
};

export default Page;
