"use client";

import { createQuickConsult } from "@/actions/quick-consult.actions";
import { getAllCarsNameVsSlug } from "@/queries/car.query";
import { useQuery } from "@tanstack/react-query";
import { FormEvent, useState } from "react";
import { ImSpinner3 } from "react-icons/im";
import Swal from "sweetalert2";

const FooterForm = () => {
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
          title: "Đăng ký thành công!",
          text: "Cảm ơn quý khách. Chúng tôi sẽ liên hệ tư vấn trong thời gian sớm nhất.",
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

  const inputClasses =
    "w-full px-4 py-2.5 text-sm text-gray-800 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all placeholder:text-gray-400";
  const labelClasses = "block text-white text-sm font-medium mb-1.5 ml-1";

  return (
    <form
      className="w-full bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-xl space-y-4"
      onSubmit={submitHandler}
    >
      <h3 className="text-white font-bold text-lg text-center uppercase mb-2">
        Đăng ký nhận báo giá
      </h3>

      <div>
        <label htmlFor="footer-name" className={labelClasses}>
          Họ tên <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          id="footer-name"
          placeholder="Nhập họ và tên..."
          className={inputClasses}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="footer-phone" className={labelClasses}>
          Số điện thoại <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          id="footer-phone"
          placeholder="Nhập số điện thoại..."
          className={inputClasses}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="footer-email" className={labelClasses}>
          Email
        </label>
        <input
          type="email"
          id="footer-email"
          placeholder="Nhập email (nếu có)..."
          className={inputClasses}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="footer-car" className={labelClasses}>
          Dòng xe quan tâm <span className="text-red-400">*</span>
        </label>
        <div className="relative">
          <select
            id="footer-car"
            className={`${inputClasses} appearance-none cursor-pointer`}
            value={choseCar}
            onChange={(e) => setChoseCar(e.target.value)}
            disabled={isPending}
          >
            <option value="">-- Chọn dòng xe --</option>
            {cars?.map((car: any, index: number) => (
              <option value={car.name} key={index}>
                VinFast {car.name}
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
        type="submit"
        disabled={loading}
        className="w-full bg-primary text-white font-bold text-sm uppercase py-3 rounded-lg flex items-center justify-center gap-2 transition-all transform active:scale-[0.98] shadow-lg disabled:opacity-70 disabled:cursor-not-allowed mt-2"
      >
        {loading ? (
          <>
            <ImSpinner3 size={18} className="animate-spin" />
            Đang gửi...
          </>
        ) : (
          "Đăng ký ngay"
        )}
      </button>
    </form>
  );
};

export default FooterForm;
