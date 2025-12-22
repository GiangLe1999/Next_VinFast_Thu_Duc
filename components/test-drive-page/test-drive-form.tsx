"use client";

import { FC, FormEvent, useState } from "react";
import { IoWarningOutline } from "react-icons/io5";
import { ImSpinner3 } from "react-icons/im";
import Swal from "sweetalert2";
import TestDriveFormInput from "./test-drive-form-input";
import FormSelect from "../form-select";
import { createTestDrive } from "@/actions/test-drive.actions";

interface Props {
  carLines: { name: string; carLines: any[] }[];
  isContactForm?: boolean;
  isQuotation?: boolean;
}

const TestDriveForm: FC<Props> = ({ carLines }) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [choseCarName, setChoseCarName] = useState("");
  const [choseCarLine, setCarLine] = useState("");
  const [enteredContent, setEnteredContent] = useState("");
  const [confirm1Checked, setConfirm1Checked] = useState(false);
  const [confirm2Checked, setConfirm2Checked] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const carNames = carLines.map((item) => item.name);

  let carLinesNames = [];
  if (choseCarName) {
    carLinesNames = carLines
      .find((item) => item.name === choseCarName)
      ?.carLines.map((item2) => item2.name) as any[];
  }

  const resetFormValue = () => {
    setEnteredName("");
    setEnteredPhone("");
    setEnteredEmail("");
    setChoseCarName("");
    setCarLine("");
    setEnteredContent("");
    setSubmitted(false);
    setLoading(false);
    setConfirm1Checked(false);
    setConfirm2Checked(false);
  };

  const submitHandler = async (e: FormEvent<Element>) => {
    e.preventDefault();
    setSubmitted(true);

    // Kiểm tra dữ liệu trước khi gửi
    if (
      !enteredName?.trim() ||
      !enteredPhone?.trim() ||
      !enteredEmail?.trim() ||
      !choseCarName ||
      !choseCarLine ||
      !confirm1Checked ||
      !confirm2Checked
    ) {
      Swal.fire({
        icon: "error",
        title: "Không hợp lệ!",
        text: "Vui lòng kiểm tra lại thông tin trước khi gửi form.",
        confirmButtonColor: "#C4161C",
      });
      return;
    }

    try {
      setLoading(true);

      // Tạo object dữ liệu
      const rawData = {
        name: enteredName,
        phone: enteredPhone,
        email: enteredEmail,
        carName: choseCarName,
        carLine: choseCarLine,
        content: enteredContent || "", // Đảm bảo content luôn có giá trị
      };

      // Gọi API đăng ký lái thử
      const response = await createTestDrive(rawData);

      if (response.success) {
        resetFormValue();
        Swal.fire({
          icon: "success",
          title: "Thành công!",
          text: "Chúng tôi sẽ liên hệ đến anh (chị) trong thời gian sớm nhất.",
          confirmButtonColor: "green",
        });
      } else {
        throw new Error(response.message || "Đã xảy ra lỗi khi gửi form.");
      }
    } catch (error: any) {
      console.error("Lỗi khi gửi form:", error);

      Swal.fire({
        icon: "error",
        title: "Lỗi!",
        text:
          error.message ||
          "Vui lòng kiểm tra lại thông tin trước khi gửi form.",
        confirmButtonColor: "#C4161C",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="p-6 rounded-r-md text-textColor bg-white">
      <p className="text-center font-bold leading-8 mt-4 mb-8 text-black">
        XIN VUI LÒNG ĐIỀN THÔNG TIN BÊN DƯỚI. <br />
        <>VinFast Hồ Chí Minh SẼ LIÊN HỆ VỚI BẠN TRONG THỜI GIAN SỚM NHẤT</>
      </p>

      <div className="space-y-6">
        <TestDriveFormInput
          id="name"
          label="Họ và tên *"
          type="text"
          error={!enteredName}
          submitted={submitted}
          setState={setEnteredName}
          setSubmitted={setSubmitted}
          value={enteredName}
        />

        <div className="customer-form-row">
          <TestDriveFormInput
            id="phone"
            label="Số điện thoại *"
            type="number"
            error={!enteredPhone}
            submitted={submitted}
            setState={setEnteredPhone}
            setSubmitted={setSubmitted}
            value={enteredPhone}
          />
          <TestDriveFormInput
            id="email"
            label="Email *"
            type="email"
            error={!enteredEmail}
            submitted={submitted}
            setState={setEnteredEmail}
            setSubmitted={setSubmitted}
            value={enteredEmail}
          />
        </div>

        <div className="customer-form-row">
          <FormSelect
            data={carNames}
            id="carName"
            label="Dòng xe *"
            setState={setChoseCarName}
            defaultOpt="--- Dòng xe quan tâm ---"
            error={!choseCarName}
            submitted={submitted}
            setSubmitted={setSubmitted}
            value={choseCarName}
          />
          <FormSelect
            data={carLinesNames || []}
            id="carLine"
            label="Phiên bản *"
            setState={setCarLine}
            defaultOpt="--- Vui lòng chọn dòng xe trước ---"
            error={!choseCarLine}
            submitted={submitted}
            setSubmitted={setSubmitted}
            value={choseCarLine}
          />
        </div>

        <TestDriveFormInput
          id="content"
          label="Nội dung"
          rows={5}
          error={!enteredContent}
          submitted={submitted}
          setState={setEnteredContent}
          setSubmitted={setSubmitted}
          value={enteredContent}
          noValidate
        />

        <div>
          <div className="flex gap-2 items-center text-sm">
            <input
              type="checkbox"
              name="confirm1"
              id="confirm1"
              className="cursor-pointer"
              checked={confirm1Checked}
              onChange={(e) => {
                setSubmitted(false);
                setConfirm1Checked(e.target.checked);
              }}
            />
            <label htmlFor="confirm1" className="cursor-pointer">
              Tôi xác nhận rằng VinFast Hồ Chí Minh có thể gửi cho tôi thêm
              thông tin về các sản phẩm hoặc dịch vụ của VinFast. *
            </label>
          </div>
          {submitted && !confirm1Checked && (
            <p className="mt-1 text-primary text-xs flex items-center gap-1">
              <IoWarningOutline /> Vui lòng xác nhận.
            </p>
          )}
        </div>

        <div>
          <div className="flex gap-2 items-center text-sm">
            <input
              type="checkbox"
              name="confirm2"
              id="confirm2"
              checked={confirm2Checked}
              className="cursor-pointer"
              onChange={(e) => {
                setSubmitted(false);
                setConfirm2Checked(e.target.checked);
              }}
            />

            <label htmlFor="confirm2" className="cursor-pointer">
              Tôi đã đọc và đồng ý với các quy định và chính sách của Vinfast An
              Giang. *
            </label>
          </div>
          {submitted && !confirm2Checked && (
            <p className="mt-1 text-primary text-xs flex items-center gap-1">
              <IoWarningOutline /> Vui lòng xác nhận.
            </p>
          )}
        </div>
      </div>

      <p className="text-sm italic mt-6 font-bold text-primary">
        (*) &nbsp;Các trường bắt buộc
      </p>

      <button
        onClick={submitHandler}
        type="button"
        className="bg-secondary w-full text-white mt-8 mb-6 uppercase text-xl rounded-md py-3 hover:scale-[1.01] transition flex items-ceter gap-1 items-center justify-center"
      >
        {loading ? (
          <>
            <ImSpinner3 size={25} className="animate-spin" /> Đang gửi...
          </>
        ) : (
          "Đăng ký"
        )}
      </button>
    </form>
  );
};

export default TestDriveForm;
