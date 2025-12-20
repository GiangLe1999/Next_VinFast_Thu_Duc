import CarPriceSection from "@/components/car-page/CarPriceSection";
import FirstBanner from "@/components/first-banner";
import { linkConstants } from "@/data/constants";
import { getAllCarsName } from "@/queries/car.query";

export const generateMetadata = () => {
  return {
    title: "Tính Phí Lăn Bánh Xe VinFast 2025 - Cập Nhật Chi Tiết Mới Nhất",
    description:
      "Công cụ tính phí lăn bánh xe VinFast giúp bạn ước tính chi phí chính xác bao gồm giá xe, thuế, phí trước bạ, đăng ký, bảo hiểm,... Cập nhật mới nhất tại VinFast Quận 2.",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}${linkConstants.finalPrice}`,
    },
  };
};

const Page = async () => {
  const carNameArr = await getAllCarsName();

  return (
    <div>
      <FirstBanner
        heading="TÍNH PHÍ LĂN BÁNH VINFAST 2025"
        subHeading="Cập nhật chính xác nhất giá lăn bánh các dòng xe của VinFast"
        bgImg="/images/first-banners/bang-gia-xe-vinfast.webp"
        bgClasses="!bg-cover"
      />

      <div className="container py-12">
        <CarPriceSection
          carNameArr={carNameArr.map((car: any) => car.name)}
          isInstallmentPage
        />
      </div>
    </div>
  );
};

export default Page;
