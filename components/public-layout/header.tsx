"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsHeadset } from "react-icons/bs";
import { BiChevronDown, BiMenu } from "react-icons/bi";
import { navItems } from "@/data";
import NavCarMenu from "./nav-car-menu";
import ServiceMenu from "./service-menu";
import ContainNextImage from "../contain-next-image";
import MobileMenu from "./mobile-menu";

const carMenuTitle = "Sản phẩm";
const serviceTitle = "Trạm sạc & Bảo hành";
const commonClasses =
  "relative font-semibold text-white px-4 py-2 hover:bg-white hover:text-primary rounded-sm transition cursor-pointer select-none shrink-0";

const Header = () => {
  const pathname = usePathname();
  const [showCarMenu, setShowCarMenu] = useState(false);
  const [showServiceMenu, setShowServiceMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Desktop Hover
  const parentHoverHandler = (title: string) => {
    if (window.innerWidth >= 1024) {
      if (title === carMenuTitle) {
        setShowCarMenu(true);
        setShowServiceMenu(false);
      } else if (title === serviceTitle) {
        setShowServiceMenu(true);
        setShowCarMenu(false);
      } else {
        setShowCarMenu(false);
        setShowServiceMenu(false);
      }
    }
  };

  const parentUnHoverHandler = (): void => {
    if (window.innerWidth >= 1024) {
      setShowCarMenu(false);
      setShowServiceMenu(false);
    }
  };

  useEffect(() => {
    setShowServiceMenu(false);
    setShowCarMenu(false);
    setShowMobileMenu(false);
  }, [pathname]);

  return (
    <>
      <MobileMenu
        isOpen={showMobileMenu}
        onClose={() => setShowMobileMenu(false)}
      />

      {/* Top Header - Fixed on Mobile, Static on Desktop */}
      <div className="fixed top-0 left-0 right-0 w-full lg:static z-40 bg-white shadow-md lg:shadow-none py-2 md:py-3 transition-all">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden text-gray-700 hover:text-primary transition-colors"
              onClick={() => setShowMobileMenu(true)}
              aria-label="Menu"
            >
              <BiMenu size={32} />
            </button>

            <Link href="/" className="relative w-28 h-6 md:w-36 md:h-8 block">
              <ContainNextImage
                src="/images/logo-vinfast.png"
                alt="VinFast logo"
                priority
              />
            </Link>
          </div>

          <h2 className="text-xl font-bold hidden lg:block">
            <Link href="/">VinFast Quận 2</Link>
          </h2>

          <a
            href="tel:0938295905"
            className="flex items-center gap-2 hover:scale-105 duration-500 will-change-transform transform-gpu"
          >
            <div className="bg-primary text-white rounded-full w-8 h-8 md:w-9 md:h-9 grid place-items-center">
              <BsHeadset className="w-4 h-4 md:w-5 md:h-5" />
            </div>

            <div className="font-semibold">
              <p className="text-[10px] md:text-xs text-gray-700 mb-[1px]">
                Hotline:
              </p>
              <p className="text-sm md:text-base">0938 295 905</p>
            </div>
          </a>
        </div>
      </div>

      {/* Spacer to prevent content overlap on mobile due to fixed header */}
      <div className="h-[50px] lg:hidden"></div>

      {/* Sticky Header (Desktop Only) */}
      <div className="bg-primary text-center sticky top-0 z-50 shadow-md hidden lg:block">
        <nav
          className="container flex gap-4 items-center justify-center h-12 relative transition"
          onMouseLeave={parentUnHoverHandler}
        >
          {navItems.map((item, index) => {
            const isActive =
              pathname === item.link ||
              (showCarMenu && item.title === carMenuTitle) ||
              (showServiceMenu && item.title === serviceTitle);

            const activeClass = isActive
              ? "bg-white !text-primary"
              : "text-white";

            return (
              <div key={index} className="shrink-0 relative">
                {item.title === serviceTitle ? (
                  <div
                    className={`${commonClasses} ${activeClass}`}
                    onMouseEnter={() => parentHoverHandler(item.title)}
                  >
                    <span className="flex gap-1 items-center text-base whitespace-nowrap">
                      {item.title}
                      <BiChevronDown size={18} className="ml-1" />
                    </span>
                    <ServiceMenu showServiceMenu={showServiceMenu} />
                  </div>
                ) : item.isParent ? (
                  <Link
                    href={item.link}
                    className={`${commonClasses} ${activeClass}`}
                    onMouseEnter={() => parentHoverHandler(item.title)}
                  >
                    <span className="flex gap-1 items-center text-base whitespace-nowrap">
                      {item.title}
                      <BiChevronDown size={18} className="ml-1" />
                    </span>
                  </Link>
                ) : (
                  <Link
                    href={item.link}
                    className={`${commonClasses} ${activeClass}`}
                    onMouseEnter={() => parentHoverHandler(item.title)}
                  >
                    <span className="text-base whitespace-nowrap">
                      {item.title}
                    </span>
                  </Link>
                )}
              </div>
            );
          })}

          <NavCarMenu
            showCarMenu={showCarMenu}
            setShowCarMenu={setShowCarMenu}
            setShowServiceMenu={setShowServiceMenu}
          />
        </nav>
      </div>
    </>
  );
};

export default Header;
