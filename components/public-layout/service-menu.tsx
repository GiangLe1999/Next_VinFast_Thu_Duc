import { FC } from "react";
import Link from "next/link";
import { linkConstants } from "@/data/constants";

interface Props {
  showServiceMenu: boolean;
}

const ServiceMenu: FC<Props> = ({ showServiceMenu }) => {
  return (
    <ul
      className={`text-gray-900 text-sm font-medium absolute w-[200px] md:w-[250px] top-[110%] right-0 md:left-0 z-50 bg-white px-2 py-1 transition-all rounded-md shadow-xl origin-top border-t border-gray-100 duration-200 ease-in-out ${
        showServiceMenu
          ? "opacity-100 scale-y-100 visible"
          : "opacity-0 scale-y-0 invisible"
      }`}
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
    >
      <li>
        <Link
          href={linkConstants.charge_car}
          className="block text-left py-3 px-3 hover:text-primary hover:bg-gray-50 rounded-sm transition duration-200"
        >
          Pin & Trạm sạc Ô tô điện
        </Link>
      </li>
      <li>
        <Link
          href={linkConstants.charge_motorbike}
          className="block text-left py-3 px-3 hover:text-primary hover:bg-gray-50 rounded-sm border-t border-gray-100 transition duration-200"
        >
          Pin & Trạm sạc Xe máy điện
        </Link>
      </li>
      <li>
        <Link
          href={linkConstants.warranty}
          className="block text-left py-3 px-3 hover:text-primary hover:bg-gray-50 rounded-sm border-t border-gray-100 transition duration-200"
        >
          Chính sách bảo hành
        </Link>
      </li>
    </ul>
  );
};

export default ServiceMenu;
