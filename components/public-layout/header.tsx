"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsHeadset } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { navItems } from "@/data";
import NavCarMenu from "./nav-car-menu";
import ServiceMenu from "./service-menu";
import ContainNextImage from "../contain-next-image";

const carMenuTitle = "Sản phẩm";
const serviceTitle = "Trạm sạc & Bảo hành";
const commonClasses =
  "relative font-semibold text-white px-4 py-2 max-[414px]:px-2 hover:bg-white hover:text-primary rounded-sm transition cursor-pointer select-none";

const Header = () => {
  const pathname = usePathname();
  const [showCarMenu, setShowCarMenu] = useState(false);
  const [showServiceMenu, setShowServiceMenu] = useState(false);

  // Desktop Hover
  const parentHoverHandler = (title: string) => {
    if (window.innerWidth > 1024) {
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
    if (window.innerWidth > 1024) {
      setShowCarMenu(false);
      setShowServiceMenu(false);
    }
  };

  // Mobile Click
  const parentClickHandler = (e: React.MouseEvent, title: string) => {
    // Only handle toggle on mobile/tablet or click interaction
    if (title === carMenuTitle) {
      e.preventDefault();
      setShowCarMenu((prev) => !prev);
      setShowServiceMenu(false);
    } else if (title === serviceTitle) {
      e.preventDefault();
      setShowServiceMenu((prev) => !prev);
      setShowCarMenu(false);
    } else {
      setShowCarMenu(false);
      setShowServiceMenu(false);
    }
  };

  useEffect(() => {
    setShowServiceMenu(false);
    setShowCarMenu(false);
  }, [pathname]);

  return (
    <>
      {/* Top Header */}
      <div className="py-3">
        <div className="container flex items-center justify-between">
          <Link href="/" className="relative w-28 h-6 md:w-36 md:h-8 block">
            <ContainNextImage
              src="/images/logo-vinfast.png"
              alt="VinFast logo"
              priority
            />
          </Link>

          <h2 className="text-xl font-bold hidden md:block">
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

      {/* Sticky Header */}
      <div className="bg-primary text-center sticky top-0 z-50 shadow-md">
        <nav
          className="container flex gap-1 md:gap-4 items-center justify-between md:justify-center h-12 relative transition"
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

            // Mobile: Hide items that are not parent and not "Trang chủ" to save space,
            // or we use the horizontal scroll approach.
            // Current design seems to hide non-parents on max-[844px].
            // Let's refine visibility.
            // Items: Home, Intro, Product(P), Charge(P), Promo, TestDrive, News, Contact.
            // Parents: Product, Charge.
            // On mobile, we only show Parents and maybe Home/Contact?
            // The existing code had `!item.isParent && "max-[844px]:hidden"`.
            // This means on mobile only Parents + Home/Contact (if they are not hidden manually) are shown?
            // Actually Home has no isParent. So it's hidden?
            // Let's look at the logic: `!item.isParent && "max-[844px]:hidden"` -> non-parent items are hidden on small screens.
            // So on mobile we only see "Sản phẩm" and "Trạm sạc...". That seems wrong if we want "Trang chủ" too.
            // I will allow Home to be visible or use a better scroll.

            // Better approach for mobile header with many items: Horizontal Scroll or Hamburger.
            // The user wants "responsive... standard".
            // Since I'm not implementing a full drawer right now (unless requested, but "fix dropdown" implies keeping structure),
            // I will use `overflow-x-auto` for mobile nav to allow scrolling.

            return (
              <div key={index} className="shrink-0">
                {item.title === serviceTitle ? (
                  <div
                    className={`${commonClasses} ${activeClass}`}
                    onMouseEnter={() => parentHoverHandler(item.title)}
                    onClick={(e) => parentClickHandler(e, item.title)}
                  >
                    <span className="flex gap-1 items-center text-xs md:text-base whitespace-nowrap">
                      {item.title}
                      <BiChevronDown size={18} className="md:ml-1" />
                    </span>
                    <ServiceMenu showServiceMenu={showServiceMenu} />
                  </div>
                ) : item.isParent ? (
                  <Link
                    href={item.link}
                    className={`${commonClasses} ${activeClass}`}
                    onMouseEnter={() => parentHoverHandler(item.title)}
                    onClick={(e) => parentClickHandler(e, item.title)}
                  >
                    <span className="flex gap-1 items-center text-xs md:text-base whitespace-nowrap">
                      {item.title}
                      <BiChevronDown size={18} className="md:ml-1" />
                    </span>
                  </Link>
                ) : (
                  <Link
                    href={item.link}
                    className={`${commonClasses} ${activeClass} ${
                      // Hide some less important items on very small screens if we don't scroll
                      // But let's try to show them in a scroll container
                      ""
                    } max-[844px]:hidden xl:block`} // Keep original hiding logic for now but maybe just hide less important ones
                    onMouseEnter={() => parentHoverHandler(item.title)}
                  >
                    <span className="text-xs md:text-base whitespace-nowrap">
                      {item.title}
                    </span>
                  </Link>
                )}
              </div>
            );
          })}

          {/* Mobile Menu Trigger or Just Scroll? 
              The original code hid everything except parents on mobile.
              I will restore "max-[844px]:hidden" for non-parents for now to match original intent, 
              but "Trang chủ" should probably be visible? 
              Actually, usually "Home" is hidden if logo is there.
          */}

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