import InstallmentPageContent from "@/components/installment-page/installment-page-content";
import { linkConstants } from "@/data/constants";
import { getAllCarsName } from "@/queries/car.query";

export const generateMetadata = () => {
  return {
    title: "Thủ Tục Trả Góp Xe VinFast - Hướng Dẫn Chi Tiết",
    description:
      "Tìm hiểu thủ tục trả góp xe VinFast tại VinFast Thủ Đức. Hỗ trợ vay ngân hàng, lãi suất ưu đãi, hồ sơ đơn giản, duyệt nhanh chóng.",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}${linkConstants.installment}`,
    },
  };
};

const Page = async () => {
  const carNameArr = await getAllCarsName();

  return (
    <InstallmentPageContent
      carNameArr={carNameArr.map((car: any) => car.name)}
    />
  );
};

export default Page;
