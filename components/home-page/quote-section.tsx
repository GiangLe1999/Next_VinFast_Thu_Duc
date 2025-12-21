import { linkConstants } from "@/data/constants";
import BtnWithIcon from "../btn-with-icon";

const QuoteSection = () => {
  return (
    <section className="bg-[#e7e7e7]">
      <div className="mazda-bg">
        <div className="container">
          <div className="grid grid-cols-2 gap-3 max-[932px]:grid-cols-1">
            <div className="py-8 text-textColor space-y-6">
              <p className="text-center font-bold text-xl md:text-2xl uppercase md:normal-case">
                Bảng tính giá lăn bánh
              </p>
              <p className="text-justify text-sm md:text-base leading-7">
                Xin chào Quý Khách, đây là bảng dự toán chi phí giá xe lăn bánh
                tại các tỉnh thành cũng như tại TP. Hồ Chí Ming. Hiện tại, nếu
                biết giá lăn bánh cụ thể, đi kèm khuyến mãi hiện hành ở thời
                điểm quý khách đang xem như thể nào, xin mời quý khách liên hệ
                <a href="tel:0938295905" className="font-bold text-primary"> 0938 295 905</a> ( Ghi chú: Giá xe Lăn Bánh có thể thay đổi tùy vào
                khu vực, tất cả chi phí trên chưa bao gồm phí dịch vụ làm biển
                số liên hệ để biết giá xe lăn bánh tại từng khu vực ).
              </p>

              <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-white max-[457px]:grid-cols-1">
                <BtnWithIcon
                  to={linkConstants.finalPrice}
                  content="Tính giá lăn bánh"
                  customClasses="bg-primary font-semibold !text-sm md:!text-base"
                />
                <BtnWithIcon
                  to={linkConstants.installment}
                  content="Thủ tục trả góp"
                  customClasses="!bg-red-700 font-semibold !text-sm md:!text-base"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;