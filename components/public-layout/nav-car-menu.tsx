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
    router.push(link);
  };

  return (
    <div
      className={`absolute w-full top-full left-0 z-50 bg-white p-5 grid grid-cols-5 gap-y-6 gap-x-2 rounded-sm shadow-md transition origin-top max-[822px]:grid-cols-4 max-[638px]:grid-cols-3 max-[638px]:pt-8 ${
        showCarMenu ? "scale-3d-1" : "scale-3d-0"
      }`}
    >
      {navCarMenu.map((car, index) => (
        <div
          key={index}
          className="text-center cursor-pointer hover:scale-110 transition-transform duration-500"
          onClick={() => onClickChild(car.link)}
        >
          <Image
            src={car.logo}
            alt={`Logo ${car.name}`}
            style={{ objectFit: "contain" }}
            width={40}
            height={11}
            className="mx-auto mb-2"
          />
          <div className="relative w-[90%] aspect-video mb-2 mx-auto">
            <Image
              style={{ objectFit: "contain" }}
              fill={true}
              src={car.img}
              alt={car.name}
            />
          </div>

          <p className="text-sm font-semibold">
            Từ <span className="font-black">{car.price}.000.000</span> VNĐ
          </p>
        </div>
      ))}

      <button
        onClick={() => setShowCarMenu(false)}
        className="text-primary absolute top-2 right-2 flex items-center gap-1 hover:scale-110 transition-transform duration-500"
      >
        <span className="underline font-bold">Đóng</span>
        <AiFillCloseSquare size={25} />
      </button>
    </div>
  );
};

export default NavCarMenu;
