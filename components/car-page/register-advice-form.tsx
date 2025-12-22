"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import { ImSpinner3 } from "react-icons/im";
import FormInput from "@/components/form-input";
import { createQuickConsult } from "@/actions/quick-consult.actions";
import { useQuery } from "@tanstack/react-query";
import { getAllCarsNameVsSlug } from "@/queries/car.query";

const schema = yup.object().shape({
  name: yup.string().required("Vui lòng nhập họ tên"),
  email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập email"),
  phone: yup
    .string()
    .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, "Số điện thoại không hợp lệ")
    .required("Vui lòng nhập số điện thoại"),
  customerType: yup.string().required("Vui lòng chọn loại khách hàng"),
  interestedCars: yup
    .array()
    .of(yup.string())
    .min(1, "Vui lòng chọn ít nhất 1 dòng xe"),
  agreement: yup
    .boolean()
    .oneOf([true], "Vui lòng đồng ý với chính sách bảo mật")
    .required(),
});

const RegisterAdviceForm = () => {
  const { data: cars } = useQuery({
    queryKey: ["get-car-names-for-modal"],
    queryFn: getAllCarsNameVsSlug,
  });

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      customerType: "Xe cá nhân",
      interestedCars: [],
      agreement: false,
    },
  });

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      // Combine selected cars into a string for the backend
      const choseCar = `${
        data.customerType
      } - Quan tâm: ${data.interestedCars.join(", ")}`;

      const response = await createQuickConsult({
        name: data.name,
        phone: data.phone,
        email: data.email,
        choseCar: choseCar,
      });

      if (response.success) {
        Swal.fire({
          icon: "success",
          title: "Thành công!",
          text: "Chúng tôi sẽ liên hệ lại sớm nhất.",
          confirmButtonColor: "green",
        });
        reset();
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Lỗi!",
        text:
          error instanceof Error
            ? error.message
            : "Đã xảy ra lỗi, vui lòng thử lại.",
        confirmButtonColor: "#C4161C",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 bg-white" id="register-advice">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="cal-price-title mb-6 !text-3xl !font-black text-left">
          NHẬN BÁO GIÁ
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <FormInput
            id="name"
            label="Họ và tên *"
            register={register("name")}
            errorMsg={errors.name?.message}
            placeholder="Nhập họ và tên"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput
              id="email"
              type="email"
              label="Email *"
              register={register("email")}
              errorMsg={errors.email?.message}
              placeholder="Nhập email"
            />
            <FormInput
              id="phone"
              type="tel"
              label="Số điện thoại *"
              register={register("phone")}
              errorMsg={errors.phone?.message}
              placeholder="Nhập số điện thoại"
            />
          </div>

          <div>
            <label className="text-xs font-bold block mb-2">
              Dòng xe quan tâm *
            </label>
            <div className="flex gap-6 mb-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value="Xe cá nhân"
                  {...register("customerType")}
                  className="accent-primary w-4 h-4"
                />
                <span className="text-sm">Xe cá nhân</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value="Xe dịch vụ"
                  {...register("customerType")}
                  className="accent-primary w-4 h-4"
                />
                <span className="text-sm">Xe dịch vụ</span>
              </label>
            </div>
            {errors.customerType && (
              <p className="text-xs text-red-700 mb-2">
                {errors.customerType.message}
              </p>
            )}

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {cars?.map((car: any) => (
                <label
                  key={car.slug}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value={car.name}
                    {...register("interestedCars")}
                    className="accent-primary w-4 h-4"
                  />
                  <span className="text-sm">{car.name}</span>
                </label>
              ))}
            </div>
            {errors.interestedCars && (
              <p className="text-xs text-red-700 mt-2">
                {errors.interestedCars.message}
              </p>
            )}
          </div>

          <div className="space-y-4">
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                {...register("agreement")}
                className="accent-primary w-4 h-4 mt-1 shrink-0"
              />
              <span className="text-sm text-gray-600 text-justify">
                Tôi đồng ý cho phép Công ty TNHH Kinh doanh Thương mại và Dịch
                vụ VinFast xử lý dữ liệu cá nhân của tôi và các thông tin khác
                do tôi cung cấp cho mục đích và theo phương thức được mô tả chi
                tiết tại Chính sách Bảo vệ Dữ liệu cá nhân.
              </span>
            </label>
            {errors.agreement && (
              <p className="text-xs text-red-700">{errors.agreement.message}</p>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-primary text-white font-bold py-3 px-12 rounded hover:opacity-90 transition-opacity disabled:opacity-50 min-w-[200px] rounded-lg"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <ImSpinner3 className="animate-spin" /> ĐANG GỬI...
                </div>
              ) : (
                "ĐĂNG KÝ"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegisterAdviceForm;
