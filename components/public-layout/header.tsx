"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsHeadset } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { navItems } from "@/data";
import BuyCarMenu from "./buy-car-menu";
import NavCarMenu from "./nav-car-menu";
import ServiceMenu from "./service-menu";
import ContainNextImage from "../contain-next-image";

const buyCarTitle = "mua xe";
const carMenuTitle = "giá xe vinfast";
const serviceTitle = "dịch vụ";
const commonClasses =
  "relative font-semibold text-white px-4 py-2 max-[414px]:px-2 hover:bg-white hover:text-primary rounded-sm transition";

const Header = () => {
  const pathname = usePathname();
  const [showCarMenu, setShowCarMenu] = useState(false);
  const [showBuyMenu, setShowBuyMenu] = useState(false);
  const [showServiceMenu, setShowServiceMenu] = useState(false);

  const parentHoverHandler = (title: string) => {
    if (title === carMenuTitle) {
      setShowCarMenu(true);
    } else if (title === buyCarTitle) {
      setShowBuyMenu(true);
    } else if (title === serviceTitle) {
      setShowServiceMenu(true);
    }

    if (showCarMenu === true && title !== carMenuTitle) {
      setShowCarMenu(false);
    } else if (showBuyMenu === true && title !== buyCarTitle) {
      setShowBuyMenu(false);
    } else if (showServiceMenu === true && title !== serviceTitle) {
      setShowServiceMenu(false);
    }
  };

  const parentUnHoverHandler = (): void => {
    setShowCarMenu(false);
    setShowBuyMenu(false);
    setShowServiceMenu(false);
  };

  useEffect(() => {
    setShowServiceMenu(false);
  }, [pathname]);

  return (
    <>
      {/* Top Header */}
      <div className="py-3">
        <div className="container flex items-center justify-between">
          <Link href="/" className="relative w-36 h-8 block">
            <ContainNextImage
              src="/images/logo-vinfast.png"
              alt="VinFast logo"
              priority
            />
          </Link>

          <h2 className="text-xl text-gray-800 font-bold max-[500px]:hidden">
            <Link href="/">VinFast Thủ Đức</Link>
          </h2>

          <a
            href="tel:0938295905"
            className="flex items-center gap-2 hover:scale-105 duration-500 will-change-transform transform-gpu"
          >
            <div className="bg-primary text-white rounded-full w-9 h-9 grid place-items-center">
              <BsHeadset className="w-5 h-5" />
            </div>

            <div className="font-semibold">
              <p className="text-xs text-gray-700 mb-[1px]">Hotline:</p>
              <p className="text-base">0938 295 905</p>
            </div>
          </a>
        </div>
      </div>

      {/* Sticky Header */}
      <div className="bg-primary text-center sticky top-0 z-50">
        <nav
          className="container flex gap-4 items-center justify-center h-12 relative transition max-[500px]:justify-between max-[500px]:gap-0"
          onMouseLeave={parentUnHoverHandler}
        >
          {navItems.map((item, index) => {
            if (item.title === buyCarTitle) {
              return (
                <div
                  key={index}
                  className={`${commonClasses} ${
                    pathname === item.link && "bg-white !text-primary"
                  }`}
                  onMouseEnter={() => parentHoverHandler(item.title)}
                >
                  <span className="font-bold flex gap-2 items-center max-[500px]:text-sm">
                    {item.title}
                    <BiChevronDown
                      size={20}
                      className="-mr-2 max-[413px]:hidden"
                    />
                  </span>
                  {item.title === buyCarTitle && (
                    <BuyCarMenu showBuyMenu={showBuyMenu} />
                  )}
                </div>
              );
            }

            return (
              <Link
                key={index}
                href={item.link}
                className={`${commonClasses} ${
                  !item.isParent && "max-[844px]:hidden"
                } ${pathname === item.link && "bg-white !text-primary"} ${
                  showCarMenu &&
                  item.title === carMenuTitle &&
                  "bg-white !text-primary"
                } ${
                  showServiceMenu &&
                  item.title === serviceTitle &&
                  "bg-white !text-primary"
                }`}
                onMouseEnter={() => parentHoverHandler(item.title)}
              >
                {item.isParent ? (
                  <span className="flex gap-2 items-center max-[500px]:text-xs">
                    {item.title}
                    <BiChevronDown
                      size={20}
                      className="-mr-2 max-[413px]:hidden"
                    />
                  </span>
                ) : (
                  item.title
                )}
              </Link>
            );
          })}

          <NavCarMenu
            showCarMenu={showCarMenu}
            setShowCarMenu={setShowCarMenu}
            parentUnHoverHandler={parentUnHoverHandler}
          />
          <ServiceMenu showServiceMenu={showServiceMenu} />
        </nav>
      </div>
    </>
  );
};

export default Header;
