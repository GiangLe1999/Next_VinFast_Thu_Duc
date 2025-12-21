import { FC } from "react";
import Link from "next/link";
import { linkConstants } from "@/data/constants";

interface Props {
  showServiceMenu: boolean;
}

const ServiceMenu: FC<Props> = ({ showServiceMenu }) => {
  return (
    <ul
      className={`text-gray-900 text-sm font-medium absolute w-[250px] top-[calc(100%+2px)] left-0 z-50 bg-white px-2 py-1 transition rounded-sm shadow-md origin-top ${
        showServiceMenu ? "scale-3d-1" : "scale-3d-0"
      }`}
    >
      <li>
        <Link
          href={linkConstants.charge_car}
          className="block text-left py-3 px-2 hover:text-white hover:bg-primary rounded-sm transition duration-400"
        >
          Pin & Trạm sạc Ô tô điện
        </Link>
      </li>
      <li>
        <Link
          href={linkConstants.charge_motorbike}
          className="block text-left py-3 px-2 hover:text-white hover:bg-primary rounded-sm border-t transition duration-400"
        >
          Pin & Trạm sạc Xe máy điện
        </Link>
      </li>
      <li>
        <Link
          href={linkConstants.warranty}
          className="block text-left py-3 px-2 hover:text-white hover:bg-primary rounded-sm border-t transition duration-400"
        >
          Chính sách bảo hành
        </Link>
      </li>
    </ul>
  );
};

export default ServiceMenu;
