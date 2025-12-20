import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

const SupportBuyersSection = () => {
  return (
    <section
      id="support-buyers"
      className="xl:h-[160px] h-auto bg-primary flex items-center py-8"
    >
      <div className="flex items-center xl:justify-between justify-center text-white container gap-x-20 gap-y-10 flex-wrap">
        <div>
          <h3 className="font-bold sm:text-3xl text-2xl text-center xl:text-right mb-2">
            Hỗ trợ mua xe VinFast trả góp đến 90%
          </h3>
          <h4 className="sm:text-lg text-base mt-2 text-center xl:text-right">
            Lãi suất thấp - Thủ tục nhanh chóng
          </h4>
        </div>
        <Link
          href="tel:0822220088"
          className="flex items-center gap-x-2 py-3 px-6 shadow-lg bg-white text-primary sm:text-2xl text-lg font-bold !gap-2 !rounded-md sm:w-fit w-full"
        >
          <FaPhoneAlt className="w-5 h-5" />
          0938 295 905
        </Link>
      </div>
    </section>
  );
};

export default SupportBuyersSection;
