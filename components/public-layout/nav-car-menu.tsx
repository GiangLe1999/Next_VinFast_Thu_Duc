"use client";

import { navCarMenu } from "@/data";
import { FC, SetStateAction, Dispatch } from "react";
import Image from "next/image";
import { AiFillCloseSquare } from "react-icons/ai";
import { useRouter } from "next/navigation";

interface Props {
  showCarMenu: boolean;
  setShowCarMenu: Dispatch<SetStateAction<boolean>>;
  setShowServiceMenu: Dispatch<SetStateAction<boolean>>;
}

const NavCarMenu: FC<Props> = ({
  showCarMenu,
  setShowCarMenu,
  setShowServiceMenu,
}) => {
  const router = useRouter();

  const onClickChild = (link: string) => {
    setShowCarMenu(false);
    setShowServiceMenu(false);
    router.push(`/${link}`);
  };

  return (
    <div
      className={`absolute w-full top-full left-0 z-50 bg-white p-4 md:p-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-4 md:gap-y-6 gap-x-2 rounded-md shadow-xl transition-all origin-top duration-300 ease-in-out border-t border-gray-100 ${
        showCarMenu
          ? "opacity-100 scale-y-100 visible"
          : "opacity-0 scale-y-0 invisible"
      }`}
    >
      {navCarMenu.map((car, index) => (
        <div
          key={index}
          className="text-center cursor-pointer hover:bg-gray-50 hover:-translate-y-2 duration-500 p-2 rounded-lg transition-all group"
          onClick={() => onClickChild(car.link)}
        >
          <div className="relative h-4 md:h-5 mb-2 mx-auto w-[20%]">
            <Image
              src={car.logo}
              alt={`Logo ${car.name}`}
              style={{ objectFit: "contain" }}
              fill
            />
          </div>
          <div className="relative w-full aspect-video mb-2 mx-auto">
            <Image
              style={{ objectFit: "contain" }}
              fill={true}
              src={car.img}
              alt={car.name}
            />
          </div>

          <p className="text-xs md:text-sm font-semibold text-gray-800">
            Từ{" "}
            <span className="font-bold text-primary">{car.price}.000.000</span>{" "}
            VNĐ
          </p>
        </div>
      ))}

      <button
        onClick={() => setShowCarMenu(false)}
        className="text-primary absolute top-2 right-2 flex items-center gap-1 hover:text-red-700 transition-colors md:hidden"
      >
        <AiFillCloseSquare size={24} />
      </button>
    </div>
  );
};

export default NavCarMenu;
