import {
  FaEnvelopeOpenText,
  FaCalculator,
  FaCarAlt,
  FaChartPie,
  FaHome,
  FaInfoCircle,
  FaBlog,
  FaCar,
} from "react-icons/fa";

import { BiSolidContact } from "react-icons/bi";

import { MdMail, MdPhone } from "react-icons/md";

import { IconType } from "react-icons";
import { linkConstants } from "./constants";

export const homeBanners = [
  {
    title: "VinFast VF8",
    link: "/vf8",
    image: "/images/home/banners/vf8-banner.webp",
  },
  {
    title: "VinFast VF9",
    link: "/vf9",
    image: "/images/home/banners/vf9-banner.webp",
  },
  {
    title: "VinFast VF-e34",
    link: "/",
    image: "/images/home/banners/vf-e34-banner.webp",
  },
  {
    title: "VinFast VF6",
    link: "/vf6",
    image: "/images/home/banners/vf6-banner.webp",
  },
];

export const navItems: {
  title: string;
  link: string;
  isParent?: boolean;
  icon?: IconType;
}[] = [
  {
    title: "trang chủ",
    link: linkConstants.home,
    icon: FaHome,
  },
  {
    title: "giới thiệu",
    link: linkConstants.introduce,
    icon: FaInfoCircle,
  },
  {
    title: "giá xe vinfast",
    link: linkConstants.quote,
    isParent: true,
  },
  {
    title: "mua xe",
    link: "/#",
    isParent: true,
  },
  {
    title: "dịch vụ",
    link: "/#",
    isParent: true,
  },
  {
    title: "tin tức",
    link: linkConstants.news,
    icon: FaBlog,
  },
  {
    title: "liên hệ",
    link: linkConstants.contact,
    icon: BiSolidContact,
  },
];

export const adminNavItems: {
  title: string;
  link: string;
  icon?: IconType;
}[] = [
  {
    title: "Dashboard",
    link: linkConstants.dashboard,
    icon: FaHome,
  },
  {
    title: "List xe",
    link: linkConstants.admin_cars,
    icon: FaCar,
  },
  {
    title: "Bài viết",
    link: linkConstants.admin_articles,
    icon: FaBlog,
  },
];

type navCarItemType = {
  img: string;
  name: string;
  price: string;
  link: string;
};

export const navCarMenu: navCarItemType[] = [
  {
    img: "https://res.cloudinary.com/dfhheac8o/image/upload/v1748923603/An%20Giang%20Vinfast/hq3pgiavb4nt9rhtofkv.webp",
    name: "VinFast EC Van",
    price: "285",
    link: "ec-van",
  },
  {
    img: "https://res.cloudinary.com/dfhheac8o/image/upload/v1742913595/Suoi%20Tien%20Vinfast/lqtpfqfjoshxj0oodwld.webp",
    name: "VinFast Minio Green",
    price: "269",
    link: "minio-green",
  },
  {
    img: "https://res.cloudinary.com/dfhheac8o/image/upload/v1742914255/Suoi%20Tien%20Vinfast/nkzkvk5pg8pwrn8ipd1x.png",
    name: "VinFast Herio Green",
    price: "499",
    link: "herio-green",
  },
  {
    img: "https://res.cloudinary.com/dfhheac8o/image/upload/v1742914783/Suoi%20Tien%20Vinfast/qgmi4toorl0k6sxfxxor.png",
    name: "VinFast Nerio Green",
    price: "710",
    link: "nerio-green",
  },
  {
    img: "https://res.cloudinary.com/dfhheac8o/image/upload/v1742915568/Suoi%20Tien%20Vinfast/aadm3o6yzbcffy2cier1.png",
    name: "VinFast Limo Green",
    price: "749",
    link: "limo-green",
  },
  {
    img: "https://res.cloudinary.com/dfhheac8o/image/upload/v1740191819/Suoi%20Tien%20Vinfast/airek9me2u7sszbqwsd7.jpg",
    name: "VinFast VF3",
    price: "299",
    link: "vf3",
  },
  {
    img: "https://res.cloudinary.com/dfhheac8o/image/upload/v1740213021/Suoi%20Tien%20Vinfast/ab4jerelgiwhckcbknam.webp",
    name: "VinFast VF5",
    price: "529",
    link: "vf5",
  },
  {
    img: "https://res.cloudinary.com/dfhheac8o/image/upload/v1740214584/Suoi%20Tien%20Vinfast/ke7xwcyrxqnsryxnhla0.webp",
    name: "VinFast VF6",
    price: "694",
    link: "vf6",
  },
  {
    img: "https://res.cloudinary.com/dfhheac8o/image/upload/v1740240220/Suoi%20Tien%20Vinfast/x88b0dix3dojiwtiygy1.png",
    name: "VinFast VF7",
    price: "799",
    link: "vf7",
  },
  {
    img: "https://res.cloudinary.com/dfhheac8o/image/upload/v1740216994/Suoi%20Tien%20Vinfast/uk573tijp6c9o6qmqn7d.webp",
    name: "VinFast VF8",
    price: "1019",
    link: "vf8",
  },
  {
    img: "https://res.cloudinary.com/dfhheac8o/image/upload/v1740219323/Suoi%20Tien%20Vinfast/sqfnwwdqze8jrz6qhwlg.webp",
    name: "VinFast VF9",
    price: "1499",
    link: "vf9",
  },
];

type homeOptionType = {
  title: string;
  link: string;
  icon: IconType;
  des: string;
};

export const homeOptions: homeOptionType[] = [
  {
    title: "yêu cầu báo giá",
    link: linkConstants.requireQuotation,
    icon: FaEnvelopeOpenText,
    des: "Đăng ký để nhận báo giá mới nhất cho các <strong>dòng xe VinFast</strong>",
  },
  {
    title: "tính phí lăn bánh",
    link: linkConstants.finalPrice,
    icon: FaCalculator,
    des: "Giá các phiên bản xe VinFast cùng các khoản phí chi tiết tại <strong>VinFast An Giang</strong>",
  },
  {
    title: "mua xe trả góp",
    link: linkConstants.installment,
    icon: FaChartPie,
    des: "Trả góp đến <strong>90% giá trị xe</strong>, lãi suất chỉ <strong>0%/tháng</strong>",
  },
  {
    title: "đăng ký lái thử",
    link: linkConstants.testDrive,
    icon: FaCarAlt,
    des: "Đến với <strong>VinFast An Giang</strong> để được lái thử những mẫu xe VinFast mới nhất",
  },
];

export const footerCol1: string[] = [
  "Chuyên cung cấp dòng xe VinFast các loại",
  "Xe 4 chỗ VinFast VF 5, 5 chỗ VinFast VF 6 và VF 7, 5 chỗ gầm cao VinFast VF 8, 7 chỗ VinFast VF 9",
  // "Địa chỉ : 2699 Trần Hưng Đạo, P. Mỹ Thạnh, Thành phố Long Xuyên, An Giang",
];

type footerItemType = { title: string; link: string };

export const footerCol2: footerItemType[] = [
  { title: "VinFast Minio Green", link: "/minio-green" },
  { title: "VinFast Herio Green", link: "/herio-green" },
  { title: "VinFast Nerio Green", link: "/nerio-green" },
  { title: "VinFast Limo Green", link: "/limo-green" },
  { title: "VinFast VF3", link: "/vf3" },
  { title: "VinFast VF5", link: "/vf5" },
  { title: "VinFast VF6", link: "/vf6" },
  { title: "VinFast VF7", link: "/vf7" },
  { title: "VinFast VF8", link: "/vf8" },
  { title: "VinFast VF9", link: "/vf9" },
];

export const footerCol3: footerItemType[] = [
  { title: "Bảng giá chi tiết", link: linkConstants.quote },
  { title: "Tính phí lăn bánh", link: linkConstants.finalPrice },
  { title: "Thủ tục trả góp", link: linkConstants.installment },
  { title: "Đăng ký lái thử", link: linkConstants.testDrive },
];

export const footerCol32: footerItemType[] = [
  { title: "Chính sách Thanh toán", link: linkConstants.paymentPolicy },
  { title: "Chính sách Bảo mật", link: linkConstants.privacyPolicy },
  {
    title: "Chính sách Giao nhận - Vận chuyển",
    link: linkConstants.deliveryPolicy,
  },
  {
    title: "Chính sách Bảo hành",
    link: linkConstants.warranty,
  },
];

export const footerCol4: { title: string; link: string; icon: IconType }[] = [
  { title: "Hotline: 0822 220 088", link: "tel:0822220088", icon: MdPhone },
  {
    title: "vinfast3sangiang@gmail.com",
    link: "mailto:vinfast3sangiang@gmail.com",
    icon: MdMail,
  },
];

export const carFees = {
  phiDkyBienso: 20000000,
  phiDuongbo: 1560000,
  phiDkiem: 90000,
  bhTNDS: 530700,
};

export const carNames: string[] = [
  "new mazda 2",
  "new mazda 2 sport",
  "new mazda cx-3",
  "new mazda 3",
  "new mazda3 sport",
  "new mazda cx-30",
  "new mazda 6",
  "new mazda cx-5 ipm",
  "new mazda cx-8",
  "new mazda bt-50",
];

export const socialItems = [
  {
    img: "/images/home/facebook.jpg",
    alt: "Facebook Icon",
    href: "https://www.facebook.com/people/VinFast-An-Giang-0822220088/61557426075220/",
    title: "Facebook",
  },
  {
    img: "/images/home/youtube.png",
    alt: "Youtube Icon",
    href: "https://www.youtube.com/@vinfastofficial8424",
    title: "Youtube",
  },
  {
    img: "/images/home/tiktok.png",
    alt: "TikTok Icon",
    href: "https://www.tiktok.com/@tran..viet",
    title: "TikTok",
  },
  {
    img: "/images/home/zalo.png",
    alt: "Zalo Icon",
    href: "https://zalo.me/0822220088",
    title: "Zalo",
  },
];
