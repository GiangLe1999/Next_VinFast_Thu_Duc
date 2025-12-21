import { FC } from "react";
import ContainNextImage from "../contain-next-image";

interface Props {
  title: string;
}

const SectionTitle: FC<Props> = ({ title }) => {
  return (
    <div className="text-center">
      <h3 className="font-bold text-primary text-xl md:text-[26px] uppercase mb-1">
        {title}
      </h3>
      <div className="w-full h-[5px] md:h-[7px] relative text-center">
        <ContainNextImage src="/images/home/divider.png" alt="Divider line" />
      </div>
    </div>
  );
};

export default SectionTitle;