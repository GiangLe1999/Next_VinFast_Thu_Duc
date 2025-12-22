// import StyledAccordion from "@/components/styled-accordion";
import WarrantyPolicyPageContent from "@/components/warranty-policy-page/warranty-policy-page-content";
import { linkConstants } from "@/data/constants";
// import { warrantyData } from "@/data/warranty";

export const generateMetadata = () => {
  return {
    title: "Chính Sách Bảo Hành Xe VinFast 2025 - Cập Nhật Mới Nhất",
    description:
      "Tìm hiểu chi tiết chính sách bảo hành xe VinFast 2025: VinFast VF e34, VF 5, VF 6, VF 7, VF 8, VF 9,... tại VinFast Hồ Chí Minh. Thông tin đầy đủ, chính xác và mới nhất.",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}${linkConstants.warranty}`,
    },
  };
};

const Page = () => {
  return <WarrantyPolicyPageContent />;
};

export default Page;
