import { FaUsersCog } from "react-icons/fa";
import SectionTitle from "./section-title";
import { HiReceiptTax } from "react-icons/hi";

const PromotionSection = () => {
  return (
    <section className="pt-28 pb-10 container">
      <p className="text-textColor text-center font-bold text-sm mb-2">
        CHƯƠNG TRÌNH
      </p>
      <SectionTitle title="KHUYẾN MÃI VINFAST" />

      <div className="grid grid-cols-2 gap-x-12 gap-y-6 py-8 max-[738px]:grid-cols-1 mt-3">
        <div>
          <p className="text-primary text-base font-bold mb-2 flex items-center gap-1">
            <HiReceiptTax size={20} color="#025eda" /> Khuyến mãi VinFast
            12/2025
          </p>
          <ul className="list-disc list-outside pl-4 text-sm text-textColor leading-7 marker:text-gray-300">
            <li>
              <b className="text-red-700">
                Khuyến mãi & Giảm giá VinFast tháng 12/2025
              </b>{" "}
              tại Vinfast Hồ Chí Minh. Cơ hội vàng mua xe VinFast với giá tốt
              nhất từ trước đến nay
            </li>
            <li>
              Giảm trực tiếp <b className="text-red-700">4% giá bán</b>, áp dụng
              cho tất cả các dòng xe điện VinFast.
            </li>
            <li>
              Chiết khấu thêm <b className="text-red-700">3% trên giá bán</b>{" "}
              cho khách hàng đang phục vụ trong ngành công an và quân đội. (Áp
              dụng đến hết 31/12/2025)
            </li>
            <li>
              Tặng thêm <b className="text-red-700">2 năm bảo hiểm thân vỏ</b>{" "}
              hoặc quy đổi thành giảm giá tiền mặt lên đến{" "}
              <b className="text-red-700">15.000.000đ</b>. (Áp dụng đến hết
              31/12/2025)
            </li>
            <li>
              Gói vay ưu đãi hỗ trợ <b className="text-red-700">3% lãi suất</b>{" "}
              trả góp cố định trong 3 năm đầu
            </li>
            <li>
              Trả trước <b className="text-red-700">0đ</b>, hỗ trợ vay{" "}
              <b className="text-red-700">100% giá trị xe</b>. Chạy dịch vụ
              không cần vốn đầu tư mua xe.
            </li>
            <li>
              Chương trình thu xe xăng, đổi xe điện VinFast: Tặng ngay tiền mặt
              đến <b className="text-red-700">100.000.000đ</b>.
            </li>
            <li>
              Tặng đến <b className="text-red-700">70.000.000</b> vào ví Vinclub
              đối với khách hàng TP.HCM theo chính sách Sài Gòn Xanh (áp dụng KH
              mua tiền mặt)
            </li>
            <li>
              <b className="text-red-700">Miễn phí sạc Pin</b> đến 30/06/2027.
              Bảo hành đến 10 năm hoặc 200.000 km.
            </li>
            <li>
              Chương trình cho khách hàng mượn trụ sạc 7.4kW và 11kW trong vòng
              <b className="text-red-700">10 năm</b>. Lắp đặt & sạc tại nhà miễn
              phí.
            </li>
            <li>Xe đủ phiên bản và màu sắc sẵn sàng giao ngay.</li>
            <li>
              Tặng phim cách nhiệt + Tặng camera hành trình + Tặng thảm lót sàn…
              và quà tặng tết từ Vinfast
            </li>
          </ul>
        </div>

        <div>
          <p className="text-primary text-base font-bold mb-2 flex items-center gap-1">
            <FaUsersCog size={20} color="#025eda" /> Trả góp - Lãi suất ưu đãi
          </p>
          <ul className="list-disc list-inside text-sm text-textColor leading-7 marker:text-gray-300">
            <li className="text-sm text-textColor leading-7 mt-2 mb-4">
              <b className="text-red-700">VinFast Hồ Chí Minh</b> mang đến chính
              sách trả góp linh hoạt, giúp khách hàng dễ dàng sở hữu xe mà không
              cần thanh toán toàn bộ chi phí ban đầu. Với sự hợp tác cùng các
              ngân hàng hàng đầu, khách hàng có thể vay lên đến{" "}
              <b className="text-red-700">90% giá trị xe</b>, thời gian trả góp
              lên đến <b className="text-red-700">8 năm</b>, kèm theo hỗ trợ đến
              <b className="text-red-700">3% lãi suất đến 3 năm</b>.
            </li>
            <li className="text-sm text-textColor leading-7">
              Đặc biệt, VinFast còn hỗ trợ trả trước{" "}
              <b className="text-red-700">0 đồng</b> khi KH mua{" "}
              <b className="text-red-700">VF5, Herio Green</b>
              với hỗ trợ lãi suất vay với khoản vay 5 năm tối đa{" "}
              <b className="text-red-700">
                9.8 triệu/tháng cho Herio Green
              </b> và{" "}
              <b className="text-red-700">10.6 triệu/tháng đối với VF5</b>,
              khách hàng chạy độc quyền cho GSM còn được hỗ trợ thêm
              <b className="text-red-700">700.000/tháng trong 3 năm đầu</b>.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;
