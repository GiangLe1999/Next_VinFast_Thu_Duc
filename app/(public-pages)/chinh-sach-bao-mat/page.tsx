import FirstBanner from "@/components/first-banner";
import StyledAccordion from "@/components/styled-accordion";
import { linkConstants } from "@/data/constants";
import { privacyData } from "@/data/privacy";

export const generateMetadata = () => {
  return {
    title:
      "Chính Sách Bảo Mật VinFast Quận 2 - Cam Kết Bảo Vệ Thông Tin Khách Hàng",
    description:
      "Tìm hiểu chính sách bảo mật của VinFast Quận 2. Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn với các tiêu chuẩn an toàn cao nhất.",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}${linkConstants.privacyPolicy}`,
    },
  };
};

const Page = () => {
  return (
    <div>
      <FirstBanner
        heading="CHÍNH SÁCH BẢO MẬT"
        subHeading="Thông tin chi tiết về chính sách bảo mật thông tin tại VinFast Quận 2."
        bgImg="/images/first-banners/bang-gia-xe-vinfast.webp"
        bgClasses="!bg-cover"
      />

      <div className="container my-12">
        <h2 className="text-center font-bold text-primary text-3xl pb-8">
          CHI TIẾT CHÍNH SÁCH BẢO MẬT
        </h2>
        <StyledAccordion data={privacyData} initialOpened={0} />
      </div>
    </div>
  );
};

export default Page;
