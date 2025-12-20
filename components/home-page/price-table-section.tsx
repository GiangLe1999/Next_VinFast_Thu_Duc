import { FC } from "react";
import SectionTitle from "./section-title";
import { formatPrice } from "@/lib/formatData";
import ContainNextImage from "../contain-next-image";
import Link from "next/link";
import { FaTag, FaRegCreditCard } from "react-icons/fa";

interface Props {
  cars: any[];
}

const PriceTableSection: FC<Props> = ({ cars }) => {
  return (
    <section className="h-full flex flex-col">
      <div className="container pt-4 pb-20">
        <div className="mb-4">
          <p className="text-textColor text-center font-bold text-sm mb-2 uppercase tracking-wide">
            Cập nhật mới nhất
          </p>
          <SectionTitle title="Bảng Giá Xe 2025" />
        </div>

        <div className="mt-8 flex-1 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden flex flex-col">
          {/* Table Header - Fixed/Sticky Feel */}
          <div className="bg-primary text-white grid grid-cols-12 py-4 px-4 text-sm font-bold uppercase tracking-wider">
            <div className="col-span-5 md:col-span-4 pl-2">Dòng Xe</div>
            <div className="col-span-3 md:col-span-4 text-center">
              Giá Niêm Yết
            </div>
            <div className="col-span-4 md:col-span-4 text-right pr-4">
              Trả Góp Từ
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto custom-scrollbar flex-1 max-h-[800px] xl:max-h-none">
            <div className="divide-y divide-gray-100">
              {cars.map((car, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 items-center p-4 hover:bg-gray-50 transition-colors duration-200 group"
                >
                  {/* Car Info Column */}
                  <div className="col-span-5 md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-3">
                    <Link
                      href={`/${car.slug}`}
                      className="block relative w-20 md:w-28 aspect-video shrink-0 rounded-lg overflow-hidden border border-gray-100 bg-white"
                    >
                      <ContainNextImage src={car.avatar.url} alt={car.name} />
                    </Link>
                    <div className="flex flex-col">
                      <Link
                        href={`/${car.slug}`}
                        className="font-bold text-gray-800 group-hover:text-primary transition-colors text-sm md:text-base"
                      >
                        VinFast {car.name}
                      </Link>
                      <span className="text-[10px] md:text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full w-fit mt-1 hidden md:block">
                        {index < 5 ? "Dòng xe dịch vụ" : "Dòng xe điện"}
                      </span>
                    </div>
                  </div>

                  {/* Price Column */}
                  <div className="col-span-3 md:col-span-4 flex flex-col justify-center items-center">
                    <div className="flex items-center gap-1.5 text-gray-700 font-semibold text-sm md:text-base">
                      <FaTag className="text-gray-400 text-xs md:hidden" />
                      <div>
                        <span>{formatPrice(car?.priceFrom)}</span>
                        <span className="text-xs underline align-top hidden md:inline">
                          đ
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Installment Column */}
                  <div className="col-span-4 md:col-span-4 flex flex-col justify-center items-end pr-2 md:pr-4">
                    <div className="text-right">
                      <div className="flex items-center justify-end gap-1.5 text-red-600 font-bold text-sm md:text-base">
                        <FaRegCreditCard className="text-primary/50 text-xs md:hidden" />
                        <div>
                          {formatPrice(car?.installmentPrice)}
                          <span className="text-xs underline align-top hidden md:inline">
                            đ
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] text-gray-400 italic mt-0.5 hidden md:block">
                        /tháng
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Note */}
          <div className="bg-gray-50 p-3 text-center border-t border-gray-100">
            <p className="text-[11px] text-gray-500 italic">
              * Giá trên đã bao gồm VAT, chưa bao gồm các khuyến mãi khác.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceTableSection;
