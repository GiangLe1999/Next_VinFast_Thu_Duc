import { FC } from "react";

import { FaEdit } from "react-icons/fa";
import { linkConstants } from "@/data/constants";
import parse from "html-react-parser";
import BtnWithIcon from "../btn-with-icon";

interface Props {
  content: string;
  name: string;
}

const PromotionSection: FC<Props> = ({ content, name }) => {
  return (
    <div className="text-textColor bg-[#f7fafc] rounded-md p-6 wrapper-shadow">
      <p className="font-bold text-center">KHUYẾN MÃI MUA XE</p>
      <h1 className="text-center text-primary font-bold text-2xl mt-1 mb-3">
        VinFast {name}
      </h1>

      <div className="prose prose-ul:space-y-1 prose-strong:text-primary text-[15px]">
        {parse(content)}
      </div>

      <div>
        <BtnWithIcon
          customClasses="bg-primary w-full font-bold text-white mt-4"
          content="Đăng ký lái thử"
          icon={FaEdit}
          iconSize={16}
          to={linkConstants.requireQuotation}
        />
      </div>
    </div>
  );
};

export default PromotionSection;
