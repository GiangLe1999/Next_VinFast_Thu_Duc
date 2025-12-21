import MotorbikeBatteryChargingContent from "@/components/battery-charging-page/motorbike-battery-charging-content";

export const generateMetadata = () => {
  return {
    title: "Dịch vụ Pin & Trạm sạc Xe máy điện VinFast | VinFast Thủ Đức",
    description:
      "Cập nhật chính sách thuê pin, giá đổi pin và hệ thống trạm sạc xe máy điện VinFast mới nhất.",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/pin-va-tram-sac-xe-may-dien`,
    },
  };
};

const MotorbikeBatteryChargingPage = () => {
  return <MotorbikeBatteryChargingContent />;
};

export default MotorbikeBatteryChargingPage;
