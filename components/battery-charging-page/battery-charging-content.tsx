"use client";

import SectionTitle from "@/components/home-page/section-title";
import {
  FaCheckCircle,
  FaChargingStation,
  FaMapMarkedAlt,
  FaList,
} from "react-icons/fa";

const BatteryChargingContent = () => {
  return (
    <div className="pb-20 pt-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <SectionTitle title="DỊCH VỤ PIN & TRẠM SẠC" />
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Hệ sinh thái trạm sạc rộng khắp và chính sách pin linh hoạt giúp bạn
            an tâm trên mọi hành trình cùng VinFast.
          </p>
        </div>

        {/* 1. CHÍNH SÁCH THUÊ PIN */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            <div className="mb-8">
              <h3 className="cal-price-title mb-4">Lợi ích của thuê pin</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  "Tiết kiệm chi phí sửa chữa, bảo dưỡng pin.",
                  "Sử dụng điều hòa / sưởi tiết kiệm hơn xe xăng.",
                  "Chi phí hàng tháng thấp hơn cho khách hàng đi nhiều.",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                  >
                    <FaCheckCircle className="text-primary mt-1 shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
              <p className="font-bold text-yellow-800">Thông báo quan trọng:</p>
              <p className="text-yellow-700 text-sm mt-1">
                Kể từ ngày 01/03/2025, VinFast dừng dịch vụ cho thuê pin Ô tô
                điện. Các khách hàng đang sử dụng dịch vụ thuê pin có thể chuyển
                sang hình thức mua pin hoặc tiếp tục sử dụng dịch vụ thuê pin
                theo nhu cầu.
              </p>
            </div>

            <div className="overflow-x-auto custom-scrollbar">
              <h3 className="cal-price-title mb-4">
                Bảng giá thuê pin (Áp dụng từ 01/01/2025)
              </h3>
              <table className="w-full border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-3 text-left border border-primary-dark">
                      Dòng xe
                    </th>
                    <th className="p-3 text-center border border-primary-dark">
                      Gói thuê pin
                      <br />
                      <span className="text-xs font-normal">(VNĐ/tháng)</span>
                    </th>
                    <th className="p-3 text-center border border-primary-dark">
                      Phí cọc thuê pin
                      <br />
                      <span className="text-xs font-normal">(VNĐ)</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {/* VF 3 */}
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 border border-gray-200 font-bold">
                      VF 3
                    </td>
                    <td className="p-3 border border-gray-200">
                      <div className="flex justify-between py-1 border-b border-gray-100">
                        <span>Dưới 1.500 km:</span>{" "}
                        <span className="font-bold">900.000</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-gray-100">
                        <span>1.500 - 2.500 km:</span>{" "}
                        <span className="font-bold">1.200.000</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span>Trên 2.500 km:</span>{" "}
                        <span className="font-bold">2.000.000</span>
                      </div>
                    </td>
                    <td className="p-3 border border-gray-200 text-center font-bold">
                      Không yêu cầu
                    </td>
                  </tr>

                  {/* VF 5 */}
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 border border-gray-200 font-bold">
                      VF 5 Plus
                    </td>
                    <td className="p-3 border border-gray-200">
                      <div className="flex justify-between py-1 border-b border-gray-100">
                        <span>Dưới 1.500 km:</span>{" "}
                        <span className="font-bold">1.200.000</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-gray-100">
                        <span>1.500 - 3.000 km:</span>{" "}
                        <span className="font-bold">1.600.000</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span>Trên 3.000 km:</span>{" "}
                        <span className="font-bold">2.700.000</span>
                      </div>
                    </td>
                    <td className="p-3 border border-gray-200 text-center font-bold">
                      15.000.000
                    </td>
                  </tr>

                  {/* VF 6 */}
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 border border-gray-200 font-bold">
                      VF 6
                    </td>
                    <td className="p-3 border border-gray-200">
                      <div className="flex justify-between py-1 border-b border-gray-100">
                        <span>Dưới 1.500 km:</span>{" "}
                        <span className="font-bold">1.400.000</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-gray-100">
                        <span>1.500 - 3.000 km:</span>{" "}
                        <span className="font-bold">1.800.000</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span>Trên 3.000 km:</span>{" "}
                        <span className="font-bold">3.000.000</span>
                      </div>
                    </td>
                    <td className="p-3 border border-gray-200 text-center font-bold">
                      25.000.000
                    </td>
                  </tr>

                  {/* VF 7 / VF 8 / VF 9 - Simplified for demo */}
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 border border-gray-200 font-bold">
                      VF 7 / VF 8 / VF 9
                    </td>
                    <td className="p-3 border border-gray-200 text-center italic text-gray-500">
                      Vui lòng liên hệ để biết chi tiết theo từng phiên bản
                    </td>
                    <td className="p-3 border border-gray-200 text-center font-bold">
                      Theo chính sách hiện hành
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 text-xs text-gray-500 italic">
              * Mức phí trên đã bao gồm VAT. Giá trị có thể thay đổi tùy theo
              thời điểm và chính sách của VinFast.
            </div>
          </div>
        </section>

        {/* 2. TRẠM SẠC */}
        <section>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Col: Info */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="cal-price-title mb-4">Quy hoạch trạm sạc</h3>
                <p className="text-gray-600 mb-4 text-justify">
                  Hệ thống trạm sạc VinFast có mặt tại 63/63 tỉnh thành, trên
                  các tuyến quốc lộ, cao tốc, trung tâm thương mại, chung cư, và
                  bãi đỗ xe công cộng.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Bãi đỗ xe, Bến xe",
                    "Trạm dừng nghỉ",
                    "Cây xăng",
                    "TTTM / Chung cư",
                    "Cao tốc / Quốc lộ",
                    "Địa điểm công cộng khác",
                  ].map((loc, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm font-medium text-gray-700"
                    >
                      <span className="w-2 h-2 bg-secondary rounded-full"></span>
                      {loc}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="cal-price-title mb-4">
                  Chi phí sạc (Cập nhật 19/03/2024)
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="text-gray-600">Đơn giá sạc:</span>
                    <span className="font-bold text-lg text-primary">
                      3.858 VNĐ / kWh
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p className="font-bold mb-1">
                      Phí quá giờ (Sau khi sạc đầy):
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Phút 1 - 10: Miễn phí</li>
                      <li>Phút 11 - 60: 1.000 đ/phút</li>
                      <li>Từ phút 61: 2.000 - 4.000 đ/phút</li>
                    </ul>
                    <p className="mt-2 italic text-xs text-gray-400">
                      * Đơn giá đã bao gồm VAT
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Charger Types */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="cal-price-title mb-4">
                Các loại trụ sạc công cộng
              </h3>
              <div className="space-y-6">
                {[
                  {
                    type: "DC 250kW",
                    name: "Trụ sạc Siêu nhanh",
                    desc: "Dành cho các dòng xe cao cấp, sạc siêu tốc trên cao tốc.",
                  },
                  {
                    type: "DC 150kW",
                    name: "Trụ sạc Siêu nhanh",
                    desc: "Trang bị tại các trạm dừng nghỉ, TTTM lớn.",
                  },
                  {
                    type: "DC 60kW",
                    name: "Trụ sạc Nhanh",
                    desc: "Phổ biến tại các cây xăng, bãi đỗ xe công cộng.",
                  },
                  {
                    type: "DC 30kW",
                    name: "Trụ sạc Nhanh (Tủ/Treo)",
                    desc: "Phù hợp điểm đỗ xe nhỏ, thời gian đỗ trung bình.",
                  },
                  {
                    type: "AC 11kW",
                    name: "Trụ sạc Tiêu chuẩn",
                    desc: "Sạc qua đêm hoặc đỗ xe thời gian dài tại chung cư, công sở.",
                  },
                ].map((charger, idx) => (
                  <div key={idx} className="flex gap-4 items-start group">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center font-bold text-primary text-sm text-center p-1 shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      {charger.type}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 group-hover:text-primary transition-colors">
                        {charger.name}
                      </h4>
                      <p className="text-sm text-gray-500">{charger.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }
      `}</style>
    </div>
  );
};

export default BatteryChargingContent;
