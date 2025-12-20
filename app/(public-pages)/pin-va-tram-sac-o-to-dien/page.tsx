import BatteryChargingContent from "@/components/battery-charging-page/battery-charging-content";

export const generateMetadata = () => {
  return {
    title: "Dịch vụ Pin & Trạm sạc Ô tô điện VinFast | VinFast Thủ Đức",
    description:
      "Thông tin chi tiết về chính sách thuê pin, giá mua pin và hệ thống trạm sạc xe điện VinFast trên toàn quốc.",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/pin-va-tram-sac-o-to-dien`,
    },
  };
};

const BatteryChargingPage = () => {
  return <BatteryChargingContent />;
};

export default BatteryChargingPage;
