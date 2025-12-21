"use client";

import Swal from "sweetalert2";
import { ImSpinner3 } from "react-icons/im";
import { useQuery } from "@tanstack/react-query";
import { FormEvent, useEffect, useState } from "react";
import { getAllCarsNameVsSlug } from "@/queries/car.query";
import NextImage from "../next-image";
import { createQuickConsult } from "@/actions/quick-consult.actions";

const QuickConsultForm = () => {
  const { data: cars, isPending } = useQuery({
    queryKey: ["get-car-names-for-modal"],
    queryFn: getAllCarsNameVsSlug,
  });

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [choseCar, setChoseCar] = useState("");
  const [loading, setLoading] = useState(false);

  const resetFormHandler = () => {
    setName("");
    setPhone("");
    setEmail("");
    setChoseCar("");
    setLoading(false);
  };

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    if (!name?.trim() || !phone?.trim() || !choseCar?.trim()) {
      Swal.fire({
        icon: "error",
        title: "Không hợp lệ!",
        text: "Vui lòng nhập đầy đủ Họ tên, Số điện thoại và chọn Dòng xe quan tâm.",
        confirmButtonColor: "#C4161C",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await createQuickConsult({
        name,
        phone,
        email,
        choseCar,
      });

      if (response.success) {
        Swal.fire({
          icon: "success",
          title: "Thành công!",
          text: "Chúng tôi sẽ liên hệ đến Anh (Chị) trong thời gian sớm nhất.",
          confirmButtonColor: "green",
        });

        resetFormHandler();
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      console.error("Lỗi gửi form:", error);
      Swal.fire({
        icon: "error",
        title: "Lỗi gửi yêu cầu!",
        text:
          error instanceof Error
            ? error.message
            : "Đã xảy ra lỗi, vui lòng thử lại.",
        confirmButtonColor: "#C4161C",
      });
    }

    setLoading(false);
  };

  useEffect(() => {
    const el = document.getElementById("need-scroll-to");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []); // chỉ chạy khi component mount

  const inputClasses =
    "w-full py-2.5 px-4 rounded-md bg-[#f5f5f5] outline-none border focus:border-primary focus:bg-white transition-colors";

  return (
    <form
      className="bg-white relative rounded-md space-y-3 border shadow-md overflow-hidden"
      onSubmit={submitHandler}
    >
      <div
        className="w-full aspect-[2.3] relative rounded-t-md overflow-hidden"
        id="need-scroll-to"
      >
        <NextImage
          src="/images/home/popup-banner.webp"
          alt="Home Popup banner"
        />
      </div>

      <div className="p-4 md:p-8 pt-4 space-y-4 md:space-y-6">
        <div>
          <h5 className="text-center text-primary font-bold text-2xl md:text-3xl mb-2">
            Đăng ký nhận báo giá
          </h5>
          <p className="text-center text-base md:text-lg text-gray-600 mb-3">
            Vui lòng cung cấp thông tin, chúng tôi sẽ liên hệ Anh/Chị ngay!
          </p>
        </div>

        <div className="form-input-wrapper">
          <label htmlFor="name" className="text-sm font-bold mb-1 block">
            Họ tên <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            placeholder="Nguyễn Văn A"
            className={inputClasses}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-input-wrapper">
            <label htmlFor="phone" className="text-sm font-bold mb-1 block">
              Số điện thoại <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="0938 295 905"
              className={inputClasses}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form-input-wrapper">
            <label htmlFor="email" className="text-sm font-bold mb-1 block">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className={inputClasses}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="form-input-wrapper">
          <label htmlFor="car" className="text-sm font-bold mb-1 block">
            Dòng xe quan tâm <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              id="car"
              className={`${inputClasses} appearance-none cursor-pointer`}
              value={choseCar}
              onChange={(e) => setChoseCar(e.target.value)}
              disabled={isPending}
            >
              <option value="">-- Chọn dòng xe -- </option>
              {cars?.map((car: any, index: number) => (
                <option value={car.name} key={index} className="uppercase">
                  {car.name}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        <button
          disabled={loading}
          type="submit"
          className="bg-secondary rounded-md w-full text-white uppercase py-3 font-bold flex items-center justify-center gap-2 hover:bg-red-700 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300"
        >
          {loading ? (
            <>
              <ImSpinner3 size={20} className="animate-spin" />
              Đang gửi...
            </>
          ) : (
            "Đăng ký ngay"
          )}
        </button>
      </div>
    </form>
  );
};

export default QuickConsultForm;