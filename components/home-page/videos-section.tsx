import Link from "next/link";
import SectionTitle from "./section-title";
import { navCarMenu, socialItems } from "@/data";
import NextImage from "../next-image";
import { FaCar, FaLeaf, FaShieldAlt } from "react-icons/fa";
import ContainNextImage from "../contain-next-image";

const VideosSection = () => {
  return (
    <section>
      <p className="text-textColor text-center font-bold text-sm mb-2">
        THEO DÕI
      </p>
      <SectionTitle title="VinFast Thủ Đức" />

      <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 justify-center items-center">
        {socialItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 p-4 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <div className="w-16 h-16 relative">
              <NextImage
                src={item.img}
                alt={item.alt}
                className="w-full h-full object-cover rounded-full border-2 border-gray-300"
              />
            </div>
            <p className="text-sm font-bold text-gray-700">{item.title}</p>
          </Link>
        ))}
      </div>

      <div className="mt-10">
        <div className="rounded-md overflow-hidden border">
          {/* Phần Tiêu Đề */}
          <div className="bg-secondary text-white p-6 text-center">
            <h2 className="text-xl font-bold mb-2">
              VinFast ra mắt dòng sản phẩm Green
            </h2>
            <p className="text-sm text-gray-300">
              Tối ưu hóa hiệu quả kinh doanh cho dịch vụ vận tải
            </p>
          </div>

          <div className="p-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <FaLeaf className="text-primary" size={22} />
                <h3 className="text-lg text-primary font-bold">
                  Công nghệ xanh
                </h3>
              </div>
              <p className="text-gray-700 text-sm leading-7">
                Thiết kế chuyên biệt cho dịch vụ vận tải thân thiện với môi
                trường, giảm thiểu lượng khí thải carbon và tối ưu hóa hiệu quả
                năng lượng.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <FaShieldAlt className="text-primary" size={22} />
                <h3 className="text-lg text-primary font-bold">
                  Tối ưu hóa kinh doanh
                </h3>
              </div>
              <p className="text-gray-700 text-sm leading-7">
                Các mẫu xe được thiết kế riêng cho dịch vụ chia sẻ xe, vận
                chuyển và quản lý đội xe doanh nghiệp với chi phí hiệu quả.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <FaCar className="text-primary" size={22} />
                <h3 className="text-lg text-primary font-bold">
                  Các dòng xe dịch vụ Green
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {navCarMenu.slice(0, 4).map((vehicle) => (
                  <Link
                    href={vehicle.link}
                    key={vehicle.name}
                    className="text-center"
                  >
                    <div className="block relative w-full aspect-video p-10">
                      <ContainNextImage src={vehicle.img} alt={vehicle.name} />
                    </div>
                    <h3 className="font-bold mt-2">{vehicle.name}</h3>
                    <p className="text-primary text-xs mt-1 font-bold">
                      Giá từ {vehicle.price} triệu
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Phần Kêu Gọi Hành Động */}
          <Link
            href="/tin-tuc/vinfast-ra-mat-dong-san-pham-green-dac-biet-toi-uu-cho-kinh-doanh-dich-vu-van-tai"
            className="block py-3 text-white text-sm underline text-center bg-secondary mt-6 underline-offset-4"
          >
            Xem chi tiết tại đây
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
