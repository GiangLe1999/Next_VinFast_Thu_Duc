// import dynamicImport from "next/dynamic";
import FirstBanner from "@/components/first-banner";
import NextImage from "@/components/next-image";
import { linkConstants } from "@/data/constants";
// const CustomerCarousel = dynamicImport(
//   () => import("@/components/home-page/customer-swiper")
// );

export const generateMetadata = () => {
  return {
    title: "Về Chúng Tôi - VinFast Hồ Chí Minh | Đại Lý VinFast Chính Hãng",
    description:
      "Tìm hiểu về VinFast Hồ Chí Minh - đại lý ủy quyền chính hãng của VinFast. Cung cấp các dòng xe điện, dịch vụ bảo hành, bảo dưỡng, và hỗ trợ khách hàng chuyên nghiệp.",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}${linkConstants.introduce}`,
    },
  };
};

const page = () => {
  return (
    <div>
      <FirstBanner
        heading="VỀ CHÚNG TÔI"
        subHeading="VinFast Hồ Chí Minh"
        bgImg="/images/first-banners/bang-gia-xe-vinfast.webp"
        bgClasses="!bg-cover"
      />

      <div className="container my-12 space-y-12">
        <div className="introduce-section">
          <div>
            <p>Chào mừng đến với</p>
            <h2>VinFast Hồ Chí Minh</h2>
            <ul>
              <li>
                Được xây dựng trên diện tích gần 2000 m² với tổng số vốn đầu tư
                161 tỉ đồng, showroom VinFast Hồ Chí Minh mang phong cách thiết
                kế hiện đại, trẻ trung và tiện nghi.
              </li>
              <li>
                Kiến trúc tổng thể gồm các khu vực: trưng bày xe, xưởng dịch vụ,
                kho phụ tùng, sân đường nội bộ và bãi đỗ xe; tạo sự thuận tiện
                cho khách hàng tham quan, trải nghiệm và lựa chọn các dòng xe
                VinFast tiên tiến.
              </li>
              <li>
                Showroom trưng bày đầy đủ các dòng xe VinFast đang được ưa
                chuộng như VinFast VF3, VFe34, VF5, VF7, VF8, VF9 cùng các mẫu
                xe điện hiện đại, thân thiện với môi trường.
              </li>
              <li>
                Không chỉ cung cấp những sản phẩm chất lượng cao với thiết kế
                đột phá, VinFast Hồ Chí Minh còn có đội ngũ tư vấn viên chuyên
                nghiệp, giàu kinh nghiệm, sẵn sàng hỗ trợ khách hàng lựa chọn
                mẫu xe phù hợp nhất.
              </li>
            </ul>
          </div>

          <div className="introduce-section-img">
            <NextImage
              src="/images/gioi-thieu/vinfast-quan-2.webp"
              alt="VinFast Hồ Chí Minh"
            />
          </div>
        </div>

        <div className="introduce-section introduce-reverse">
          <div className="introduce-section-img left">
            <NextImage
              src="/images/gioi-thieu/khong-gian-vinfast-quan-2.webp"
              alt="Không gian VinFast Hồ Chí Minh"
            />
          </div>

          <div className="right">
            <p>Tổng quản về</p>
            <h2>Cơ sở vật chất</h2>
            <ul>
              <li>
                Xưởng dịch vụ - sửa chữa rộng 900 m² được trang bị máy móc,
                thiết bị công nghệ hiện đại, đáp ứng các nhu cầu bảo hành, bảo
                dưỡng, sửa chữa và dịch vụ đồng - sơn xe mới…
              </li>
              <li>
                Công suất phục vụ sửa chữa tối đa của xưởng lên đến 30 lượt xe
                mỗi ngày. Bên cạnh đó, đội ngũ kỹ thuật viên tại showroom giàu
                kinh nghiệm, có trình độ chuyên môn cao và phong cách làm việc
                chuyên nghiệp, sẵn sàng đáp ứng mọi yêu cầu khắt khe nhất của
                Quý khách hàng.
              </li>
              <li>
                Với những ưu thế vượt trội, VinFast Hồ Chí Minh luôn được khách
                hàng tin tưởng, là một trong những showroom có lượng khách hàng
                trung thành lớn, đồng thời nằm trong nhóm showroom có doanh số
                ấn tượng trong hệ thống VinFast trên cả nước.
              </li>
            </ul>
          </div>
        </div>
        <div className="introduce-section">
          <div>
            <p>Những lợi ích mà</p>
            <h2>VinFast Hồ Chí Minh mang lại</h2>
            <ul>
              <li>
                <span>Công nghệ hiện đại: </span>
                Xưởng dịch vụ-sửa chữa của VinFast Hồ Chí Minh được trang bị máy
                móc, thiết bị công nghệ hiện đại đáp ứng các như cầu bảo hành,
                bảo dưỡng, sửa chữa và dịch vụ đồng-sơn xe mới… Công suất phục
                vụ sửa chữa tối đa của xưởng lên đến hàng trăm lượt xe mỗi ngày.
              </li>

              <li>
                <span>Đội ngũ giàu kinh nghiệm: </span> Đội ngũ kỹ thuật viên
                showroom giàu kinh nghiệm, trình độ chuyên môn cao và phong cách
                chuyên nghiệp, đủ năng lực đáp ứng các yêu cầu khó khăn nhất của
                Quý khách hàng.
              </li>
              <li>
                <span>Đầy đủ các dòng xe: </span>Showroom VinFast Hồ Chí Minh
                trưng bày đầy đủ các dòng xe VinFast hiện đại như VF3, VFe34,
                VF5, VF7, VF8, VF9 cùng các mẫu xe điện thông minh. Quý khách
                hàng sẽ được tư vấn và trải nghiệm thực tế các dòng xe chính
                hãng do VinFast phân phối tại Việt Nam.
              </li>

              <li>
                <span>Hết lòng vì khách hàng: </span>
                Không chỉ có những sản phẩm tối ưu với thiết kế độc đáo,
                showroom VinFast Hồ Chí Minh còn có đội ngũ bán hàng chuyên
                nghiệp, có kiến thức sâu rộng và thái độ phục vụ ân cần, chu
                đáo, giúp khách hàng chọn được mẫu xe ưng ý nhất.
              </li>
            </ul>
          </div>

          <div className="introduce-section-img">
            <NextImage
              src="/images/gioi-thieu/phong-kinh-doanh-vinfast-quan-2.webp"
              alt="Phong kinh doanh VinFast Hồ Chí Minh"
            />
          </div>
        </div>

        {/* <div className="mt-6">
          <h2>
            <p className="text-primary font-bold text-xl text-center mb-2">
              Một số hình ảnh khác
            </p>
            <p className="font-bold text-3xl uppercase text-center mb-3">
              Tại VinFast Hồ Chí Minh
            </p>
          </h2>
          <CustomerCarousel />
        </div> */}
      </div>
    </div>
  );
};

export default page;
