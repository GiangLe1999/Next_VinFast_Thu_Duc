import { homeOptions } from "@/data";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import BtnWithIcon from "../btn-with-icon";
import HtmlParser from "../html-parser";

const MainOptions = () => {
  return (
    <section className="mt-10 container grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-7">
      {homeOptions.map((option, index) => {
        return (
          <Link
            key={index}
            href={option.link}
            className="bg-white p-4 w-full flex flex-col items-center justify-center gap-2 rounded-md hover:scale-105 shadow-md hover:shadow-lg border transition duration-500 will-change-transform transform-gpu"
          >
            {option.icon({ size: 30, color: "#025eda" })}
            <p className="uppercase text-sm font-bold text-primary mt-2">
              {option.title}
            </p>
            <p className="text-center text-[13px] leading-6 my-2">
              <HtmlParser content={option.des} />
            </p>
            <BtnWithIcon
              customClasses="bg-primary text-sm text-white"
              content="Chi tiết"
              icon={MdArrowForward}
            />
          </Link>
        );
      })}
    </section>
  );
};

export default MainOptions;
