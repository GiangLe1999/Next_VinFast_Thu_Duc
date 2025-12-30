"use client";

import { FC, useEffect, useState } from "react";
import FinalPriceForm from "./FinalPriceForm";
import { formatPrice } from "@/lib/formatData";
import { getCarRegistrationData } from "@/queries/car.query";
import { useFetchCarLines } from "@/hooks/useFetchCarLines";

interface Props {
  lines?: any[];
  registration?: number;
  carNameArr?: string[];
  isInstallmentPage?: boolean;
}

const CarPriceSection: FC<Props> = ({
  lines,
  registration,
  carNameArr,
  isInstallmentPage,
}) => {
  const [choseCarLine, setChoseCarLine] = useState("");
  const [choseCarName, setChoseCarName] = useState("");
  const [choseCarData, setChoseCarData] = useState({
    registration: 0,
  });
  const [choseProvince, setChoseProvince] = useState("hcm");

  const allCarLines = useFetchCarLines();
  let carLines = [] as any[];

  let currentLine = lines?.find((line) => line.name === choseCarLine) as any;

  if (isInstallmentPage && choseCarName) {
    carLines =
      allCarLines.find((item: any) => item.name === choseCarName)?.carLines ||
      [];
    currentLine = carLines?.find((line) => line.name === choseCarLine) as any;
  }

  const currentListPrice = currentLine?.price;

  const fetchCarDataByName = async () => {
    const carData = (await getCarRegistrationData(choseCarName)) as any;

    setChoseCarData(carData);
  };

  useEffect(() => {
    if (isInstallmentPage && choseCarName) {
      fetchCarDataByName();
      setChoseCarLine("");
    }
  }, [choseCarName]);

  return (
    <section className="space-y-8">
      <div className="cal-price-wrapper">
        {!isInstallmentPage && (
          <div className="mb-10">
            <h2 className="cal-price-title mb-6">BẢNG GIÁ NIÊM YẾT</h2>

            <div className="bg-white overflow-hidden">
              <div className="border-b border-gray-200 pb-3 flex justify-between items-center text-sm font-semibold text-gray-400">
                <span>Phiên bản</span>
                <span>Giá từ</span>
              </div>

              <div className="divide-y">
                {lines?.map((line, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-4"
                  >
                    <div>
                      <span className="text-gray-700 text-sm md:text-base">
                        {line.name}
                      </span>
                    </div>

                    <div>
                      <span className="flex items-center font-bold text-gray-500 text-base md:text-lg">
                        {formatPrice(line.price)}VNĐ
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Calculation Form Section */}
        <div className="bg-white">
          <FinalPriceForm
            lines={isInstallmentPage ? carLines : lines}
            choseCarLine={choseCarLine}
            setChoseCarLine={setChoseCarLine}
            registration={
              isInstallmentPage
                ? (choseCarData?.registration as number)
                : (registration as number)
            }
            currentLine={currentLine}
            currentListPrice={currentListPrice}
            carNameArr={carNameArr}
            choseCarName={choseCarName}
            setChoseCarName={setChoseCarName}
            choseProvince={choseProvince}
            setChoseProvince={setChoseProvince}
            isInstallmentPage={isInstallmentPage}
            isProductPage={!isInstallmentPage}
          />
        </div>
      </div>
    </section>
  );
};

export default CarPriceSection;
