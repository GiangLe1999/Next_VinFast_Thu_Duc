// import StyledAccordion from "@/components/styled-accordion";
import AccessoriesPageContent from "@/components/accessories-page/accessories-page-content";
import { linkConstants } from "@/data/constants";

export const generateMetadata = () => {
  return {
    title: "Phụ Kiện Chính Hãng Xe VinFast 2025 - Cập Nhật Mới Nhất",
    description:
      "Phụ kiện xe VinFast 2025 chính hãng mới nhất: đầy đủ mẫu mã cho VF e34, VF 5, VF 6, VF 7, VF 8, VF 9... tại VinFast Hồ Chí Minh. Chất lượng đảm bảo, giá tốt, hỗ trợ lắp đặt chuyên nghiệp.",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}${linkConstants.accessories}`,
    },
  };
};

const Page = () => {
  return <AccessoriesPageContent />;
};

export default Page;
