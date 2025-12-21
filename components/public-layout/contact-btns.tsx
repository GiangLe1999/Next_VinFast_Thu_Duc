/* eslint-disable @next/next/no-img-element */
"use client";

import { BsHeadset } from "react-icons/bs";

const common =
  "relative w-16 h-16 rounded-full grid place-items-center group relative z-[49]";
const tooltipCommon =
  "absolute z-[-1] left-0 top-1 px-4 py-1 text-lg h-[50px] rounded-[27px] sm:top-[10%] flex justify-end items-center invisible opacity-0 sm:visible sm:opacity-100 sm:left-[45%] transition-fadeIn text-white";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const handleZaloClick = (): void => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-16578092263/Pk1hCLrfxP8ZEOe5huE9", // ID chuyển đổi Zalo
    });
  }
};

const handlePhoneClick = (): void => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-16578092263/IgNQCOXUxP8ZEOe5huE9",
    });
  }
};

const ContactBtns = () => {
  return (
    <div className="fixed max-[844px]:bottom-16 bottom-3 left-4 flex flex-col gap-2 z-50">
      <div className={`${common} bg-tertiary`}>
        <a
          href="https://zalo.me/0938295905"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-full h-auto z-50 grid place-items-center group"
          aria-label="Zalo contact button"
          onClick={handleZaloClick}
        >
          <img
            src="/images/home/zalo-icon.jpg"
            alt="Zalo icon"
            className="w-16"
          />
          <span className={`${tooltipCommon} bg-tertiary min-w-[150px]`}>
            Liên hệ Zalo
          </span>
        </a>
      </div>

      <a
        href="tel:0938295905"
        className={`${common} bg-red-700`}
        aria-label="Hotline button"
        onClick={handlePhoneClick}
      >
        <div className="absolute top-[10px] left-[7px] w-[70%] h-[70%] animate-ping bg-red-700 rounded-full"></div>
        <BsHeadset color="white" size={30} className="z-30" />
        <span className={`${tooltipCommon} bg-red-700 min-w-[170px]`}>
          0938.295.905
        </span>
      </a>
    </div>
  );
};

export default ContactBtns;
