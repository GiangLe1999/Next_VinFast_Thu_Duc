import FirstBanner from "@/components/first-banner";
import StyledAccordion from "@/components/styled-accordion";
import { linkConstants } from "@/data/constants";
import { deliveryData } from "@/data/delivery";

export const generateMetadata = () => {
  return {
    title:
      "Chính Sách Giao Nhận & Vận Chuyển Xe VinFast Tại VinFast Hồ Chí Minh",
    description:
      "Tìm hiểu chính sách giao nhận và vận chuyển xe VinFast tại VinFast Hồ Chí Minh. Hỗ trợ giao xe tận nơi, nhanh chóng, an toàn và đảm bảo đúng hẹn.",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}${linkConstants.deliveryPolicy}`,
    },
  };
};

const Page = () => {
  return (
    <div>
      <FirstBanner
        heading="CHÍNH SÁCH GIAO NHẬN - VẬN CHUYỂN"
        subHeading="Thông tin chi tiết về chính sách Giao nhận - Vận chuyển tại VinFast Hồ Chí Minh."
        bgImg="/images/first-banners/bang-gia-xe-vinfast.webp"
        bgClasses="!bg-cover"
      />

      <div className="container my-12">
        <h2 className="text-center font-bold text-primary text-3xl pb-8">
          CHI TIẾT CHÍNH SÁCH GIAO NHẬN - VẬN CHUYỂN
        </h2>
        <StyledAccordion data={deliveryData} initialOpened={0} />
      </div>
    </div>
  );
};

export default Page;
