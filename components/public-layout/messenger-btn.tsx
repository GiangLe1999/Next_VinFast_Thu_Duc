/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";

// Khai báo global để tránh lỗi TypeScript khi gọi window.gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

// Hàm xử lý sự kiện click vào nút Messenger
const handleMessengerClick = (): void => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-16578092263/tMVQCKvTyf8ZEOe5huE9", // ID chuyển đổi Messenger
    });
  }
};

const MessengerBtn = () => {
  return (
    <div className="fixed bottom-4 right-3 md:right-4 flex flex-col gap-2 z-50">
      <a
        href="https://www.facebook.com/profile.php?id=61564349647261#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Messenger contact button"
        onClick={handleMessengerClick} // Gọi sự kiện khi nhấn vào liên kết Messenger
        className="block transition-transform duration-300 hover:scale-110"
      >
        <img
          className="w-12 h-12 md:w-16 md:h-16 drop-shadow-lg"
          src="/images/home/messenger.png"
          alt="Messenger icon"
          aria-label="Messenger button"
        />
      </a>
    </div>
  );
};

export default MessengerBtn;