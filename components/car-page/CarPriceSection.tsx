"use client";

import { FC, useEffect, useState } from "react";
import FinalPriceForm from "./FinalPriceForm";
import { formatPrice } from "@/lib/formatData";
import { getCarRegistrationData } from "@/queries/car.query";

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
  const [, setChoseCarData] = useState({
    registration: 0,
  });
  const [choseProvince, setChoseProvince] = useState("ag");

  const currentLine = lines?.find((line) => line.name === choseCarLine) as any;

  const currentListPrice = currentLine?.price;

  const fetchCarDataByName = async () => {
    const carData = (await getCarRegistrationData(choseCarName)) as any;

    setChoseCarData(carData);
  };

  useEffect(() => {
    fetchCarDataByName();
    setChoseCarLine("");
  }, [choseCarName]);

  return (
    <section className="space-y-6">
      <div className="cal-price-wrapper">
        {!isInstallmentPage && (
          <>
            <h2 className="cal-price-title">PHIÊN BẢN</h2>
            {lines?.map((line, index) => (
              <tr key={index}>
                <td>{line.name}</td>
                <td className="text-right font-bold">
                  {formatPrice(line.price)} VNĐ
                </td>
              </tr>
            ))}
          </>
        )}

        {/* Table 2 */}
        <FinalPriceForm
          lines={lines}
          choseCarLine={choseCarLine}
          setChoseCarLine={setChoseCarLine}
          registration={registration as number}
          currentLine={currentLine}
          currentListPrice={currentListPrice}
          carNameArr={carNameArr}
          choseCarName={choseCarName}
          setChoseCarName={setChoseCarName}
          choseProvince={choseProvince}
          setChoseProvince={setChoseProvince}
          isProductPage
        />
      </div>
    </section>
  );
};

export default CarPriceSection;
