import FirstBanner from "@/components/first-banner";
import StyledAccordion from "@/components/styled-accordion";
import { linkConstants } from "@/data/constants";
import { paymentData } from "@/data/payment";

export const generateMetadata = () => {
  return {
    title: "Chính Sách Thanh Toán Xe Tại VinFast Thủ Đức",
    description:
      "Tìm hiểu chính sách thanh toán khi mua xe VinFast tại VinFast Thủ Đức. Hỗ trợ nhiều phương thức thanh toán linh hoạt, an toàn và tiện lợi.",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}${linkConstants.paymentPolicy}`,
    },
  };
};

const Page = () => {
  return (
    <div>
      <FirstBanner
        heading="CHÍNH SÁCH THANH TOÁN"
        subHeading="Thông tin chi tiết về quy trình thanh toán tại VinFast Thủ Đức."
        bgImg="/images/first-banners/bang-gia-xe-vinfast.webp"
        bgClasses="!bg-cover"
      />

      <div className="container my-12">
        <h2 className="text-center font-bold text-primary text-3xl pb-8">
          CHI TIẾT CHÍNH SÁCH THANH TOÁN
        </h2>
        <StyledAccordion data={paymentData} initialOpened={0} />
      </div>
    </div>
  );
};

export default Page;
