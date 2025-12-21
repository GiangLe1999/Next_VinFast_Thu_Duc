"use client";

import SectionTitle from "@/components/home-page/section-title";
import { FaCheckCircle } from "react-icons/fa";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";

const MotorbikeBatteryChargingContent = () => {
  return (
    <div className="pb-20 pt-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <SectionTitle title="DỊCH VỤ PIN & TRẠM SẠC XE MÁY ĐIỆN" />
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Giải pháp năng lượng linh hoạt, tiết kiệm và tiện lợi cho người dùng
            xe máy điện VinFast.
          </p>
        </div>

        {/* 1. LỢI ÍCH */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: "Tiết kiệm chi phí",
              desc: "Không mất chi phí mua pin ban đầu, giảm áp lực tài chính.",
            },
            {
              title: "An tâm tuyệt đối",
              desc: "VinFast chịu trách nhiệm bảo dưỡng, sửa chữa và thay thế pin khi hỏng hóc/xuống cấp.",
            },
            {
              title: "Tiện lợi tối đa",
              desc: "Hệ thống trạm sạc phủ khắp 63 tỉnh thành, sạc mọi lúc mọi nơi.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                <FaCheckCircle size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* 2. CHÍNH SÁCH THUÊ PIN */}
        <section className="mb-16">
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <h2 className="cal-price-title mb-4">Chính sách thuê pin</h2>

            <div className="p-2">
              <Accordion transition transitionTimeout={250}>
                {/* Mới nhất */}
                <AccordionItem
                  header="Khách hàng đặt cọc từ 26/11/2024 (Mới nhất)"
                  initialEntered
                >
                  <table className="w-full text-sm border-collapse mb-4">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="p-3 border text-left">Gói cước</th>
                        <th className="p-3 border text-center">
                          Giá thuê (VNĐ/tháng)
                        </th>
                        <th className="p-3 border text-center">
                          Giới hạn quãng đường
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border">Gói 1</td>
                        <td className="p-3 border text-center font-bold">
                          150.000
                        </td>
                        <td className="p-3 border text-center">≤ 500 km</td>
                      </tr>
                      <tr>
                        <td className="p-3 border">Gói 2</td>
                        <td className="p-3 border text-center font-bold">
                          250.000
                        </td>
                        <td className="p-3 border text-center">
                          &lt; 1.000 km
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border">Gói 3</td>
                        <td className="p-3 border text-center font-bold">
                          350.000
                        </td>
                        <td className="p-3 border text-center">
                          &lt; 2.000 km
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border">Gói 4</td>
                        <td className="p-3 border text-center font-bold">
                          990.000
                        </td>
                        <td className="p-3 border text-center">
                          Không giới hạn
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-800">
                    <strong>Lưu ý:</strong> Hệ thống tự động nâng gói (tối đa 2
                    lần/năm) nếu đi quá giới hạn. Nếu vượt quá 3 lần/năm, khách
                    hàng buộc phải lên gói cao hơn.
                  </div>
                </AccordionItem>

                <AccordionItem header="Khách hàng đặt cọc từ 10/04/2024">
                  <div className="p-4">
                    <table className="w-full text-sm border-collapse">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="p-3 border text-left">Gói cước</th>
                          <th className="p-3 border text-center">
                            Giá thuê (VNĐ/tháng)
                          </th>
                          <th className="p-3 border text-center">
                            Giới hạn quãng đường
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-3 border">Gói 1</td>
                          <td className="p-3 border text-center font-bold">
                            250.000
                          </td>
                          <td className="p-3 border text-center">≤ 1.000 km</td>
                        </tr>
                        <tr>
                          <td className="p-3 border">Gói 2</td>
                          <td className="p-3 border text-center font-bold">
                            350.000
                          </td>
                          <td className="p-3 border text-center">
                            1.000 - 2.000 km
                          </td>
                        </tr>
                        <tr>
                          <td className="p-3 border">Gói 3</td>
                          <td className="p-3 border text-center font-bold">
                            990.000
                          </td>
                          <td className="p-3 border text-center">
                            Không giới hạn
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </AccordionItem>

                <AccordionItem header="Khách hàng đặt cọc từ 08/11/2023 (Evo200, Feliz S, Klara S 2022, Vento S, Theon S)">
                  <div className="p-4">
                    <table className="w-full text-sm border-collapse">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="p-3 border text-left">Gói cước</th>
                          <th className="p-3 border text-center">
                            Giá thuê (VNĐ/tháng)
                          </th>
                          <th className="p-3 border text-center">
                            Giới hạn quãng đường
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-3 border">Gói 1</td>
                          <td className="p-3 border text-center font-bold">
                            350.000
                          </td>
                          <td className="p-3 border text-center">
                            &lt; 2.000 km
                          </td>
                        </tr>
                        <tr>
                          <td className="p-3 border">Gói 2</td>
                          <td className="p-3 border text-center font-bold">
                            990.000
                          </td>
                          <td className="p-3 border text-center">≥ 2.000 km</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </AccordionItem>

                <AccordionItem header="Dòng xe Pin LFP (Đặt cọc trước 22/10/2022)">
                  <div className="p-4 space-y-4">
                    <div>
                      <h4 className="font-bold mb-2">
                        Gói linh hoạt (Giới hạn km)
                      </h4>
                      <ul className="list-disc pl-5 text-sm text-gray-700">
                        <li>
                          Giá thuê: <strong>189.000đ - 249.000đ/tháng</strong>{" "}
                          (tùy dòng xe)
                        </li>
                        <li>Phí phụ trội: 374đ - 480đ/km</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">
                        Gói cố định (Không giới hạn km)
                      </h4>
                      <ul className="list-disc pl-5 text-sm text-gray-700">
                        <li>
                          Đa số các dòng xe: <strong>350.000đ/tháng</strong>
                        </li>
                        <li>
                          Theon S: <strong>399.000đ/tháng</strong>
                        </li>
                      </ul>
                    </div>
                  </div>
                </AccordionItem>

                <AccordionItem header="Dòng xe thế hệ cũ (Ludo, Impes, Klara S, Theon - Trước 16/12/2022)">
                  <div className="p-4">
                    <p className="mb-2 text-sm">
                      <strong>Phí đặt cọc pin:</strong> 1.200.000 VNĐ/pin
                    </p>
                    <table className="w-full text-sm border-collapse">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="p-3 border text-left">Gói cước</th>
                          <th className="p-3 border text-center">1 Pin</th>
                          <th className="p-3 border text-center">2 Pin</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-3 border">
                            Siêu tiết kiệm (≤ 300km)
                          </td>
                          <td className="p-3 border text-center font-bold">
                            149.000đ
                          </td>
                          <td className="p-3 border text-center font-bold">
                            299.000đ
                          </td>
                        </tr>
                        <tr>
                          <td className="p-3 border">
                            Tiêu chuẩn (Không giới hạn)
                          </td>
                          <td className="p-3 border text-center font-bold">
                            220.000đ
                          </td>
                          <td className="p-3 border text-center font-bold">
                            350.000đ
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* 3. TRẠM SẠC & QUY ĐỊNH */}
        <div className="grid lg:grid-cols-2 gap-8">
          <section>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full">
              <div className="mb-6">
                <h2 className="cal-price-title mb-4">Trạm sạc công cộng</h2>

                <p>Chi phí sạc (Từ 19/03/2024)</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-gray-800">
                    3.858
                  </span>
                  <span className="text-gray-500">VNĐ / kWh</span>
                </div>
                <p className="text-xs text-gray-400 mt-1 italic">
                  * Đã bao gồm VAT
                </p>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-bold text-gray-800 mb-3">
                  Thông số kỹ thuật trụ sạc
                </h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex justify-between border-b border-dashed pb-2">
                    <span>Loại trụ:</span> <span>Tủ đứng</span>
                  </li>
                  <li className="flex justify-between border-b border-dashed pb-2">
                    <span>Điện áp:</span> <span>220 VAC ± 5%</span>
                  </li>
                  <li className="flex justify-between border-b border-dashed pb-2">
                    <span>Công suất:</span> <span>≥ 1.2 kW/cổng</span>
                  </li>
                  <li className="flex justify-between border-b border-dashed pb-2">
                    <span>Số lượng cổng:</span> <span>2 hoặc 4 cổng/trụ</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Thời gian sạc đầy:</span>{" "}
                    <span>~ 4 giờ (Tiêu chuẩn)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cột phải: Quy định & Đền bù */}
          <section>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full">
              <div className="space-y-6">
                <div>
                  <h2 className="cal-price-title mb-4">Quy định & Đền bù</h2>

                  <p className="text-sm text-gray-600 text-justify">
                    VinFast chịu trách nhiệm sửa chữa, bảo dưỡng thay thế pin
                    miễn phí trong suốt quá trình thuê nếu có lỗi từ nhà sản
                    xuất hoặc dung lượng pin giảm dưới 70%.
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                  <h3 className="font-bold text-red-700 mb-2">
                    Chi phí đền bù (Nếu làm mất/hỏng)
                  </h3>
                  <ul className="space-y-2 text-sm text-red-600">
                    <li className="flex justify-between">
                      <span>Thay pin mới (B1/P1):</span>{" "}
                      <strong>8.600.000 đ/pin</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>Vỏ pin bị biến dạng:</span>{" "}
                      <strong>770.000 đ/bộ phận</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MotorbikeBatteryChargingContent;
