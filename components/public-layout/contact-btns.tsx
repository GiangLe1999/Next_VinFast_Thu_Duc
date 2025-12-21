/* eslint-disable @next/next/no-img-element */
"use client";

import { BsHeadset } from "react-icons/bs";

const common =
  "relative w-12 h-12 md:w-16 md:h-16 rounded-full grid place-items-center group relative z-[49] transition-all duration-300";
const tooltipCommon =
  "absolute z-[-1] left-0 top-1 px-4 py-1 text-sm md:text-lg h-[40px] md:h-[50px] rounded-[27px] sm:top-[10%] flex justify-end items-center invisible opacity-0 sm:visible sm:opacity-100 sm:left-[45%] transition-fadeIn text-white whitespace-nowrap";

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
    <div className="fixed bottom-4 left-3 md:left-4 flex flex-col gap-3 z-50">
      <div className={`${common} bg-tertiary shadow-lg shadow-tertiary/30`}>
        <a
          href="https://zalo.me/0938295905"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-full h-full z-50 grid place-items-center group"
          aria-label="Zalo contact button"
          onClick={handleZaloClick}
        >
          <img
            src="/images/home/zalo-icon.jpg"
            alt="Zalo icon"
            className="w-12 h-12 md:w-16 md:h-16 rounded-full"
          />
          <span className={`${tooltipCommon} bg-tertiary min-w-[150px]`}>
            Liên hệ Zalo
          </span>
        </a>
      </div>

      <a
        href="tel:0938295905"
        className={`${common} bg-red-700 shadow-lg shadow-red-700/30`}
        aria-label="Hotline button"
        onClick={handlePhoneClick}
      >
        <BsHeadset className="z-30 text-white w-6 h-6 md:w-8 md:h-8" />
        <span className={`${tooltipCommon} bg-red-700 min-w-[170px]`}>
          0938.295.905
        </span>
      </a>
    </div>
  );
};

export default ContactBtns;
