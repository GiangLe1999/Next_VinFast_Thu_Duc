import Link from "next/link";
import { FC } from "react";
import { formatPrice } from "@/lib/formatData";
import ContainNextImage from "../contain-next-image";

interface Props {
  car: any;
}

const CarCard: FC<Props> = ({ car }) => {
  return (
    <Link
      href={`/${car.slug}`}
      className="transition-transform duration-500 hover:-translate-y-2 rounded-md pt-8 pb-4"
    >
      <div className="block relative w-full aspect-video p-10">
        <ContainNextImage src={car.avatar.url} alt={car.name} />
      </div>

      <div className="p-4">
        <h4 className="text-lg font-bold text-gray-800 text-center">
          VINFAST {car.name.toUpperCase()}
        </h4>
        <div className="mt-1 text-center">
          <span className="font-bold text-red-700">
            Giá từ: {formatPrice(car?.priceFrom)}
            <u>đ</u>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CarCard;
