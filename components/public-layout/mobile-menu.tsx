"use client";

import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { navItems } from "@/data";
import { linkConstants } from "@/data/constants";
import { formatPrice } from "@/lib/formatData";

interface Props {
  cars: any[];
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: FC<Props> = ({ cars, isOpen, onClose }) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (title: string) => {
    setExpandedItems((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 left-0 w-[85%] max-w-[320px] bg-white z-[70] shadow-xl transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="p-4 border-b flex items-center justify-between bg-primary text-white">
          <Link href="/" onClick={onClose} className="relative w-28 h-6 block">
            <Image
              src="/images/logo-vinfast.png"
              alt="VinFast Logo"
              fill
              className="object-contain brightness-0 invert"
            />
          </Link>
          <button onClick={onClose} className="p-1 hover:bg-white/10 rounded">
            <AiOutlineClose size={24} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto py-2">
          <nav className="flex flex-col">
            {navItems.map((item, index) => {
              const isExpanded = expandedItems.includes(item.title);
              const hasChildren =
                item.title === "Sản phẩm" || item.title === "Trạm sạc & Bảo hành";

              return (
                <div key={index} className="border-b border-gray-100 last:border-0">
                  {hasChildren ? (
                    <div>
                      <div
                        className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors"
                        onClick={() => toggleExpand(item.title)}
                      >
                        <span className="font-semibold text-gray-800">
                          {item.title}
                        </span>
                        {isExpanded ? (
                          <AiOutlineMinus size={18} className="text-primary" />
                        ) : (
                          <AiOutlinePlus size={18} className="text-gray-400" />
                        )}
                      </div>

                      {/* Submenu */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isExpanded
                            ? "max-h-[1000px] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="bg-gray-50 pb-2">
                          {item.title === "Sản phẩm" ? (
                            <div className="grid grid-cols-2 gap-2 p-2">
                              {cars.map((car, carIndex) => (
                                <Link
                                  key={carIndex}
                                  href={`/${car.slug}`}
                                  onClick={onClose}
                                  className="bg-white p-2 rounded border border-gray-100 flex flex-col items-center text-center shadow-sm"
                                >
                                  <div className="relative w-full aspect-video mb-1">
                                    <Image
                                      src={car.avatar.url}
                                      alt={car.name}
                                      fill
                                      className="object-contain"
                                    />
                                  </div>
                                  <span className="text-xs font-bold text-gray-800">
                                    {car.name}
                                  </span>
                                  <span className="text-[10px] text-primary font-bold">
                                    Từ {formatPrice(car.priceFrom)}đ
                                  </span>
                                </Link>
                              ))}
                            </div>
                          ) : (
                            // Trạm sạc & Bảo hành Submenu
                            <ul className="pl-4 pr-2 space-y-1 py-1">
                              <li>
                                <Link
                                  href={linkConstants.charge_car}
                                  onClick={onClose}
                                  className="block px-4 py-2 text-sm text-gray-600 hover:text-primary border-l-2 border-transparent hover:border-primary transition-colors"
                                >
                                  Pin & Trạm sạc Ô tô
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href={linkConstants.charge_motorbike}
                                  onClick={onClose}
                                  className="block px-4 py-2 text-sm text-gray-600 hover:text-primary border-l-2 border-transparent hover:border-primary transition-colors"
                                >
                                  Pin & Trạm sạc Xe máy
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href={linkConstants.warranty}
                                  onClick={onClose}
                                  className="block px-4 py-2 text-sm text-gray-600 hover:text-primary border-l-2 border-transparent hover:border-primary transition-colors"
                                >
                                  Chính sách bảo hành
                                </Link>
                              </li>
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.link}
                      onClick={onClose}
                      className="block px-4 py-3 font-semibold text-gray-800 hover:bg-gray-50 hover:text-primary transition-colors"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* Footer Info */}
        <div className="p-4 bg-gray-50 border-t text-xs text-gray-500 text-center space-y-2">
          <p>
            Hotline:{" "}
            <a href="tel:0938295905" className="text-primary font-bold text-sm">
              0938 295 905
            </a>
          </p>
          <p>70 Lương Định Của, P. An Khánh, Thủ Đức</p>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
