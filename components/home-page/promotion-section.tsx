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
            <HiReceiptTax size={20} color="#025eda" /> ƯU ĐÃI XE VINFAST 2025
          </p>
          <ul className="text-sm text-textColor leading-7">
            <li>
              <b>VinFast VF 3</b>: Xe được bảo hành <b>7 năm</b>, pin bảo hành{" "}
              <b>8 năm</b>, miễn phí sạc tại trạm V-GREEN trong <b>2 năm</b>.
              Giá chỉ từ <b className="text-primary">299 Triệu</b>.
            </li>
            <li>
              <b>VinFast VF 5</b>: Được miễn 100% phí trước bạ, và hưởng ưu đãi
              miễn phí sạc đến <b>30/06/2027</b>. Giá chỉ từ{" "}
              <b className="text-primary">529 Triệu</b>.
            </li>
            <li>
              <b>VinFast VF 6</b>: Miễn 100% phí trước bạ, miễn phí sạc đến{" "}
              <b>30/06/2027</b>. Giá chỉ từ{" "}
              <b className="text-primary">694 Triệu</b>.
            </li>
            <li>
              <b>VinFast VF 7</b>: Miễn phí trước bạ 100%, miễn phí sạc đến{" "}
              <b>30/06/2027</b>. Giá chỉ từ{" "}
              <b className="text-primary">799 Triệu</b>.
            </li>
            <li>
              <b>VinFast VF 8</b>: Ưu đãi miễn phí phí trước bạ 100%, miễn phí
              sạc đến <b>30/06/2027</b>. Giá chỉ từ{" "}
              <b className="text-primary">1.019 tỷ</b>.
            </li>
            <li>
              <b>VinFast VF 9</b>: Miễn 100% phí trước bạ, miễn phí sạc đến{" "}
              <b>30/06/2027</b>. Giá chỉ từ{" "}
              <b className="text-primary">1.499 tỷ</b>.
            </li>
          </ul>
        </div>

        <div>
          <p className="text-primary text-base font-bold mb-2 flex items-center gap-1">
            <FaUsersCog size={20} color="#025eda" /> TRẢ GÓP – LÃI SUẤT ƯU ĐÃI
          </p>
          <p className="text-sm text-textColor leading-7 mt-2 mb-4">
            VinFast mang đến chính sách trả góp linh hoạt, giúp khách hàng dễ
            dàng sở hữu xe mà không cần thanh toán toàn bộ chi phí ban đầu. Với
            sự hợp tác cùng các ngân hàng hàng đầu, khách hàng có thể vay lên
            đến <strong className="text-primary">90% giá trị xe</strong>, thời
            gian trả góp lên đến 8 năm, kèm theo lãi suất ưu đãi chỉ từ 0% trong
            năm đầu tiên.
          </p>
          <p className="text-sm text-textColor leading-7">
            Đặc biệt, VinFast còn hỗ trợ miễn phí phí trả nợ trước hạn trong{" "}
            <strong className="text-primary">3 năm đầu</strong> đối với các dòng
            xe điện. Chỉ với khoản trả trước{" "}
            <strong className="text-primary">từ 20%</strong>, khách hàng có thể
            nhận xe ngay và tận hưởng những công nghệ hiện đại cùng chính sách
            hậu mãi tốt nhất.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;
