import FirstBanner from "@/components/first-banner";
import NextImage from "@/components/next-image";
import TestDriveForm from "@/components/test-drive-page/test-drive-form";
import { linkConstants } from "@/data/constants";
import { getAllCarLines } from "@/queries/car.query";

export const generateMetadata = () => {
  return {
    title: "Đăng Ký Lái Thử Xe VinFast - Trải Nghiệm Tại VinFast Thủ Đức",
    description:
      "Đăng ký lái thử xe VinFast tại VinFast Thủ Đức để trải nghiệm thực tế các dòng xe điện hiện đại. Hỗ trợ đăng ký nhanh chóng, hoàn toàn miễn phí.",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}${linkConstants.testDrive}`,
    },
  };
};

const Page = async () => {
  const carLines = await getAllCarLines();

  return (
    <div>
      <FirstBanner
        heading="ĐĂNG KÝ LÁI THỬ"
        subHeading="Đăng ký và nhận bảng báo giá mới nhất cho dòng xe mà bạn quan tâm."
        bgImg="/images/first-banners/bang-gia-xe-vinfast.webp"
        bgClasses="!bg-[50%_50%] !bg-cover"
      />

      <div className="container my-12">
        <div className="customer-form-wrapper">
          <div className="relative w-full h-full">
            <NextImage
              src="/images/test-drive/lai-thu-vinfast-vf8-tai-vinfast-an-giang.webp"
              alt="Lái thử VinFast"
            />
          </div>

          <TestDriveForm carLines={carLines} />
        </div>
      </div>
    </div>
  );
};

export default Page;
