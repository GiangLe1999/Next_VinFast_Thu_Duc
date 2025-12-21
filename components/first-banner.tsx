import { FC } from "react";

interface Props {
  heading: string;
  subHeading: string;
  bgImg: string;
  bgClasses?: string;
}

const FirstBanner: FC<Props> = ({ heading, subHeading, bgImg, bgClasses }) => {
  return (
    <div
      className={`relative flex flex-col justify-center items-center gap-2 text-white min-h-[180px] md:aspect-[5] py-8 md:py-0 px-4 text-center ${bgClasses} before:absolute before:inset-0 before:bg-black before:opacity-50`}
      style={{
        background: `url('${bgImg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="font-bold uppercase text-2xl md:text-3xl relative z-10 leading-tight">
        {heading}
      </h1>
      <span className="text-base md:text-lg relative z-10 max-w-[90%] md:max-w-[80%] opacity-90">
        {subHeading}
      </span>
    </div>
  );
};

export default FirstBanner;