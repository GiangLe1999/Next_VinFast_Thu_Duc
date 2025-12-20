import CarListPageContent from "@/components/car-list-page/car-list-page-content";
import { linkConstants } from "@/data/constants";
import { getAllCarsForHomepage } from "@/queries/car.query";

export const generateMetadata = () => {
  return {
    title: "Bảng Giá Xe VinFast 2025 Cập Nhật Tại VinFast Thủ Đức",
    description:
      "Cập nhật bảng giá xe VinFast 2025 mới nhất tại VinFast Thủ Đức. Thông tin chi tiết về các dòng xe, giá bán, ưu đãi và chương trình khuyến mãi hấp dẫn.",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}${linkConstants.quote}`,
    },
  };
};

const Page = async () => {
  const initialCars = await getAllCarsForHomepage();

  return <CarListPageContent initialCars={initialCars} />;
};

export default Page;
