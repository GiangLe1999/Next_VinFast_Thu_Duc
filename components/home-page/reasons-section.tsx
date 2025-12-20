import SectionTitle from "./section-title";
import NextImage from "../next-image";
import CustomerSwiper from "./customer-swiper";
import { BsFillGiftFill, BsTagsFill, BsChatHeartFill } from "react-icons/bs";
import { SiAdguard } from "react-icons/si";

const ReasonsSection = () => {
  return (
    <section className="container pt-6 pb-24">
      <p className="text-textColor text-center font-bold text-sm mb-2">
        TẠI SAO NÊN MUA XE TẠI
      </p>
      <SectionTitle title="VinFast Thủ Đức" />

      <div className="grid grid-cols-2 mt-12 gap-6 max-[1100px]:grid-cols-1">
        <ul className="space-y-5 text-sm leading-7">
          <li>
            <p className="flex items-center gap-2 text-primary font-bold text-lg mb-1">
              <BsTagsFill size={16} /> Giá cả ưu đãi - Giao xe sớm
            </p>
            <p>
              VinFast Thủ Đức luôn cam kết mang lại mức giá ưu đãi nhất cho quý
              khách với thời gian giao xe nhanh nhất trong 1 ngày.
            </p>
          </li>

          <li>
            <p className="flex items-center gap-2 text-primary font-bold text-lg mb-1">
              <SiAdguard size={16} /> Bảo hành theo tiêu chuẩn toàn quốc
            </p>
            <p>
              Anh chị sẽ yên tâm khi mua xe tại VinFast Thủ Đức, vì chúng tôi
              luôn bảo hành, bảo dưỡng và sửa chữa theo tiêu chuẩn chất lượng
              của VinFast trên toàn quốc. BẢO HÀNH ĐẾN 5 NĂM.
            </p>
          </li>

          <li>
            <p className="flex items-center gap-2 text-primary font-bold text-lg mb-1">
              <BsFillGiftFill size={16} /> Khuyến mãi nhiều nhất
            </p>
            <p>
              Với hoạt động bán hàng sôi nổi, chúng tôi luôn cập nhật sớm nhất
              các chương trình khuyến mãi của hãng và đại lý
            </p>
          </li>

          <li>
            <p className="flex items-center gap-2 text-primary font-bold text-lg mb-1">
              <BsChatHeartFill size={16} /> Hết lòng vì khác hàng
            </p>
            <p>
              Đội ngũ tư vấn bán hàng luôn sẵn lòng giúp tư vấn để tìm ra chiếc
              xe ưng ý cho quý khách hàng. Hỗ trợ 24/7 tận tâm, nhiệt tình, có
              trách nhiệm.
            </p>
          </li>
        </ul>

        <div className="relative w-full aspect-[1.52] rounded-md overflow-hidden">
          <NextImage
            src="/images/home/tai-sao-nen-mua-vinfast.webp"
            alt="Tại sao nên mua xe VinFast?"
          />
        </div>
      </div>

      <CustomerSwiper />
    </section>
  );
};

export default ReasonsSection;
