import { MdMail, MdPhone } from "react-icons/md";
import { linkConstants } from "@/data/constants";
import NextImage from "../next-image";
import BtnWithIcon from "../btn-with-icon";

const SalerCard = () => {
  return (
    <div className="w-[20%] sticky top-14 max-h-screen max-[1100px]:w-0">
      <div className="rounded-lg overflow-hidden max-[1100px]:border-none max-[1100px]:shadow-none border shadow-md">
        <div className="w-full aspect-square relative">
          <NextImage
            src="/images/gioi-thieu/saler-card-vinfast-an-giang.png"
            alt="Phòng kinh doanh VinFast Hồ Chí Minh"
          />
        </div>

        <div className="text-white pt-3 pb-8 px-6">
          <p className="text-center font-bold text-base my-3 text-gray-800">
            PHÒNG KINH DOANH
          </p>

          <BtnWithIcon
            href="tel:0938295905"
            customClasses="bg-primary w-full mb-4 font-bold text-sm"
            content="0938 295 905"
            icon={MdPhone}
            iconSize={16}
          />

          <BtnWithIcon
            customClasses="bg-red-700 w-full font-bold text-sm"
            content="Báo giá nhanh"
            icon={MdMail}
            iconSize={16}
            to={linkConstants.requireQuotation}
          />
        </div>
      </div>
    </div>
  );
};

export default SalerCard;
