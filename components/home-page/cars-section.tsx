import { FC } from "react";
import SectionTitle from "./section-title";
import CarCard from "./car-card";

interface Props {
  cars: any[];
}

const CarsSection: FC<Props> = ({ cars }) => {
  return (
    <section>
      <div className="container pt-10 pb-20">
        <p className="text-textColor text-center font-bold text-sm mb-2">
          DÒNG XE KHÁC TẠI
        </p>
        <SectionTitle title="VinFast Thủ Đức" />

        <div className="mt-6 grid grid-cols-3 gap-6 py-8 max-[982px]:grid-cols-2 max-[680px]:grid-cols-1">
          {cars?.slice(4)?.map((car) => (
            <CarCard car={car} key={car._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarsSection;
