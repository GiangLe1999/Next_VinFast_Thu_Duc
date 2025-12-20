import { carFees } from "@/data";
import { formatPrice } from "@/lib/formatData";
import { Dispatch, FC, SetStateAction } from "react";

interface Props {
  lines?: any[];
  choseCarLine: string;
  setChoseCarLine: Dispatch<SetStateAction<string>>;
  registration: number;
  currentListPrice: number;
  currentLine: any;
  carNameArr?: string[];
  isInstallmentPage?: boolean;
  choseCarName: string;
  setChoseCarName: Dispatch<SetStateAction<string>>;
  choseProvince: string;
  setChoseProvince: Dispatch<SetStateAction<string>>;
  isProductPage?: boolean;
}

const FinalPriceFrom: FC<Props> = ({
  lines,
  choseCarLine,
  setChoseCarLine,
  registration,
  currentListPrice,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  currentLine,
  carNameArr,
  isInstallmentPage,
  choseCarName,
  setChoseCarName,
  choseProvince,
  setChoseProvince,
  isProductPage,
}) => {
  const currentRegistrationFee = (registration * currentListPrice) / 100;

  const { phiDuongbo, phiDkiem, bhTNDS } = carFees;
  const phiDkyBienso =
    choseProvince === "hn" || choseProvince === "hcm" ? 20000000 : 1000000;

  const currentTotal =
    currentListPrice +
    currentRegistrationFee +
    phiDkiem +
    phiDkyBienso +
    phiDuongbo +
    bhTNDS;

  return (
    <div className={`${isProductPage ? "" : "cal-price-wrapper"} h-fit`}>
      <h4 className="cal-price-title">TÍNH PHÍ LĂN BÁNH</h4>

      <form className="pt-4 pb-2 text-textColor">
        {/* Place */}
        <div className="cal-price-form-input">
          <label htmlFor="place">Chọn nơi :</label>
          <select
            id="place"
            name="place"
            value={choseProvince}
            onChange={(e) => setChoseProvince(e.target.value)}
          >
            <option value="ag">An Giang</option>
            <option value="bl">Bạc Liêu</option>
            <option value="bk">Bắc Kạn</option>
            <option value="bg">Bắc Giang</option>
            <option value="bn">Bắc Ninh</option>
            <option value="bd">Bình Dương</option>
            <option value="bp">Bình Phước</option>
            <option value="bh">Bình Thuận</option>
            <option value="bt">Bến Tre</option>
            <option value="cm">Cà Mau</option>
            <option value="cb">Cao Bằng</option>
            <option value="ct">Cần Thơ</option>
            <option value="gl">Gia Lai</option>
            <option value="hg">Hà Giang</option>
            <option value="hn">Hà Nội</option>
            <option value="ht">Hà Tĩnh</option>
            <option value="hd">Hải Dương</option>
            <option value="hp">Hải Phòng</option>
            <option value="hb">Hòa Bình</option>
            <option value="hu">Hậu Giang</option>
            <option value="hy">Hưng Yên</option>
            <option value="hm">Hà Nam</option>
            <option value="hcm">TP Hồ Chí Minh</option>
            <option value="kl">Khánh Hòa</option>
            <option value="kg">Kiên Giang</option>
            <option value="kt">Kon Tum</option>
            <option value="lc">Lai Châu</option>
            <option value="la">Long An</option>
            <option value="lo">Lào Cai</option>
            <option value="ld">Lâm Đồng</option>
            <option value="ls">Lạng Sơn</option>
            <option value="nd">Nam Định</option>
            <option value="na">Nghệ An</option>
            <option value="nb">Ninh Bình</option>
            <option value="nt">Ninh Thuận</option>
            <option value="pt">Phú Thọ</option>
            <option value="py">Phú Yên</option>
            <option value="qb">Quảng Bình</option>
            <option value="qn">Quảng Nam</option>
            <option value="qu">Quảng Ngãi</option>
            <option value="qg">Quảng Ninh</option>
            <option value="qt">Quảng Trị</option>
            <option value="st">Sóc Trăng</option>
            <option value="sl">Sơn La</option>
            <option value="tn">Tây Ninh</option>
            <option value="tb">Thái Bình</option>
            <option value="ty">Thái Nguyên</option>
            <option value="th">Thanh Hóa</option>
            <option value="tt">Thừa Thiên Huế</option>
            <option value="tg">Tiền Giang</option>
            <option value="tv">Trà Vinh</option>
            <option value="tq">Tuyên Quang</option>
            <option value="vl">Vĩnh Long</option>
            <option value="vp">Vĩnh Phúc</option>
            <option value="yb">Yên Bái</option>
            <option value="dn">Đà Nẵng</option>
            <option value="dg">Đắk Nông</option>
            <option value="dl">Đắk Lắk</option>
            <option value="db">Điện Biên</option>
            <option value="dn2">Đồng Nai</option>
            <option value="dt">Đồng Tháp</option>
          </select>
        </div>

        {/* Car name */}
        {isInstallmentPage && (
          <div className="cal-price-form-input">
            <label htmlFor="carName">Dòng xe :</label>
            <select
              className="flex-1"
              id="carName"
              value={choseCarName}
              onChange={(e) => setChoseCarName(e.target.value)}
            >
              <option value="">Chọn dòng xe</option>
              {carNameArr?.map((name, index) => (
                <option value={name} key={index}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Car line */}
        <div className="cal-price-form-input">
          <label htmlFor="carLine">Phiên bản :</label>
          <select
            id="carLine"
            value={choseCarLine}
            onChange={(e) => setChoseCarLine(e.target.value)}
            disabled={carNameArr?.length === 0}
            className="disabled:opacity-50"
          >
            <option value="">Chọn phiên bản</option>
            {lines?.map((line, index) => (
              <option value={line.name} key={index}>
                {line.name}
              </option>
            ))}
          </select>
        </div>
      </form>

      {choseCarLine ? (
        <>
          <ul className="space-y-2 text-sm pb-3 border-b border-[#eee] components-price-list">
            <li>
              Giá niêm yết :<span>{formatPrice(currentListPrice)} VNĐ</span>
            </li>

            <li>
              Phí trước bạ :
              <span>{formatPrice(currentRegistrationFee)} VNĐ</span>
            </li>

            <li>
              Phí đăng ký biển số xe :
              <span>{formatPrice(phiDkyBienso)} VNĐ</span>
            </li>

            <li>
              Phí sử dụng đường bộ :<span>{formatPrice(phiDuongbo)} VNĐ</span>
            </li>

            <li>
              Phí cấp giấy chứng nhận đăng kiểm :
              <span>{formatPrice(phiDkiem)} VNĐ</span>
            </li>

            <li>
              Bảo hiểm TNDS (1 năm) :<span>{formatPrice(bhTNDS)} VNĐ</span>
            </li>
          </ul>

          <p className="flex-space-between my-3">
            Tổng dự toán
            <span className="text-xl font-bold text-tertiary block text-right">
              {formatPrice(currentTotal)} VNĐ
            </span>
          </p>
        </>
      ) : (
        <p className="text-sm italic">
          Vui lòng chọn dòng xe và nơi đăng ký để dự toán chi phí.
        </p>
      )}
    </div>
  );
};

export default FinalPriceFrom;
