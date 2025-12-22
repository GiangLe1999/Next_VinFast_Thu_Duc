"use client";

import { FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { AiOutlineWarning } from "react-icons/ai";

interface Props {
  id: string;
  type?: string;
  label: string;
  register: UseFormRegisterReturn<string>;
  errorMsg?: any;
  textarea?: boolean;
  rows?: number;
  placeholder?: string;
  labelCustomClasses?: string;
}

const FormInput: FC<Props> = ({
  type,
  id,
  label,
  register,
  errorMsg,
  textarea,
  rows,
  placeholder,
  labelCustomClasses,
}) => {
  let Component: any = "input";
  if (textarea) Component = "textarea";
  return (
    <div className="mb-4">
      <label htmlFor={id} className={`text-xs font-bold ${labelCustomClasses}`}>
        {label}
      </label>
      <Component
        id={id}
        type={type || "text"}
        className="focus:border-primary focus:bg-white transition duration-300 w-full outline-none border bg-gray-200/20 rounded-md py-[10px] px-4"
        rows={rows}
        placeholder={placeholder}
        {...register}
      />
      {errorMsg && (
        <p className="text-xs text-red-700 mt-1 flex items-center gap-[2px]">
          <AiOutlineWarning />
          {errorMsg}
        </p>
      )}
    </div>
  );
};

export default FormInput;
