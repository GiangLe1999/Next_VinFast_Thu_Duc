import FirstBanner from "../first-banner";

import { FaLayerGroup, FaAtlassian, FaUser } from "react-icons/fa";
import { FC } from "react";
import CarPriceSection from "../car-page/CarPriceSectionForInstallmentPage1";

interface Props {
  carNameArr: any;
}

const InstallmentPageContent: FC<Props> = ({ carNameArr }) => {
  return (
    <div>
      <FirstBanner
        heading="THỦ TỤC TRẢ GÓP"
        subHeading="Bảng tính chỉ mang tính chất tham khảo. Quý khách vui lòng liên hệ Showroom/Đại Lý gần nhất để có Báo Giá chính xác nhất."
        bgImg="/images/first-banners/bang-gia-xe-vinfast.webp"
        bgClasses="!bg-cover"
      />

      <div className="container py-12 space-y-12">
        <div>
          <h2 className="post-heading-2">
            <span>Thủ tục trả góp</span>
          </h2>
          <div className="grid grid-cols-2 gap-8 max-[920px]:grid-cols-1">
            <div className="installment-block">
              <h3>I. ĐỐI VỚI CÁ NHÂN</h3>
              <ol>
                <li>Chứng Minh Nhân Dân và Hộ khẩu.</li>
                <li>
                  Giấy chứng nhận độc thân hoặc Giấy chứng nhận đăng ký kết hôn.
                </li>
                <li>
                  Những giấy tờ chứng minh thu nhập:
                  <ul>
                    <li>
                      Giấy xác nhận mức lương và hợp đồng lao động, sổ tiết
                      kiệm, tài khoản cá nhân. <br />
                      Hợp đồng cho thuê nhà, cho thuê xe, cho thuê xưởng, giấy
                      góp vốn, cổ phần, cổ phiếu, trái phiếu.
                    </li>
                    <li>
                      Giấy tờ xác nhận sở hữu tài sản có giá trị: bất động sản,
                      các loại xe ô tô, máy móc, dây chuyền nhà máy, nhà xưởng…
                    </li>
                    <li>
                      Nếu cá nhân có công ty riêng mà thu nhập chủ yếu từ công
                      ty thì cần thêm: giấy phép kinh doanh, báo cáo thuế, báo
                      cáo tài chính, bảng lương, bảng chia lợi nhuận từ công ty.
                    </li>
                  </ul>
                </li>
              </ol>
              <span>
                (Trong trường hợp cá nhân không đủ điều kiện vay Ngân hàng, có
                thể nhờ người thân có khả năng và thu nhập tốt làm giấy bảo lãnh
                cho Ngân hàng thẩm định).
              </span>
            </div>

            <div className="installment-block">
              <h3>II. ĐỐI VỚI DOANH NGHIỆP</h3>
              <ol>
                <li>Giấy phép kinh doanh.</li>
                <li>Mã số thuế.</li>
                <li>Giấy bổ nhiệm Giám đốc, bổ nhiệm Kế toán trưởng.</li>
                <li>Giấy đăng ký sử dụng mẫu dấu.</li>
                <li>Báo cáo thuế một năm (hoặc 6 tháng) gần nhất.</li>
                <li>Báo cáo hóa đơn VAT một năm (hoặc 6 tháng) gần nhất.</li>
                <li>Báo cáo tài chính một năm (hoặc 6 tháng) gần nhất.</li>
                <li>Hợp đồng kinh tế đầu ra, đầu vào.</li>
              </ol>
            </div>
          </div>
        </div>

        <div>
          <h2 className="post-heading-2">
            <span>3 điểm cần lưu ý</span>
          </h2>
          <div className="grid grid-cols-3 gap-8 max-[1029px]:grid-cols-1">
            <div className="installment-block-sm">
              <p>
                <FaAtlassian size={30} color="#025eda" />
              </p>
              <h3>Lợi ích khi mua xe trả góp</h3>
              <ol>
                <li>Số tiền vay lên đến 90% giá trị xe.</li>
                <li>Thời gian vay lên đến 7 năm.</li>
                <li>Tài trợ vay mua xe ô tô mới và xe ô tô đã qua sử dụng.</li>
                <li>
                  Thủ tục vay đơn giản, thời gian xử lý hồ sơ nhanh chóng.
                </li>
                <li>
                  Phương thức trả nợ linh hoạt: lãi trả hàng tháng/hàng quý, vốn
                  trả theo phương thức vốn góp đều hoặc vốn góp bậc thang giảm
                  dần.
                </li>
              </ol>
            </div>

            <div className="installment-block-sm">
              <p>
                <FaLayerGroup size={30} color="#025eda" />
              </p>
              <h3>Điều kiện mua xe trả góp</h3>
              <ol>
                <li>Cá nhân từ 18 tuổi trở lên.</li>
                <li>Doanh nghiệp thành lập trên 6 tháng.</li>
                <li>Có hợp đồng mua bán xe và các giấy tờ có liên quan.</li>
                <li>Có thu nhập đảm bảo cho việc trả nợ cho Ngân hàng.</li>
                <li>
                  Có tài sản đảm bảo: là chính chiếc xe ô tô mà Quý khách mua,
                  bất động sản hoặc tài sản khác.
                </li>
              </ol>
            </div>

            <div className="installment-block-sm">
              <p>
                <FaUser size={30} color="#025eda" />
              </p>
              <h3>Đối tượng thích hợp nhất</h3>
              <ol>
                <li>
                  Doanh nhân, doanh nghiệp: những người có khả năng sử dụng tiền
                  để kinh doanh sinh lời nhiều hơn là tỷ lệ lãi suất tiền cho
                  vay của ngân hàng.
                </li>
                <li>
                  Những người rất cần sử dụng xe, sẽ có đủ tiền mua xe trong một
                  tương lai gần nhưng hiện tại chưa tập trung đủ tiền để mua xe
                  trả thẳng.
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div>
          <h2 className="post-heading-2">
            <span>Bảng tính lãi vay mua xe trả góp</span>
          </h2>
          <CarPriceSection carNameArr={carNameArr} isInstallmentPage />
        </div>
      </div>
    </div>
  );
};

export default InstallmentPageContent;
