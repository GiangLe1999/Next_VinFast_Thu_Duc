import MainSwiper from "@/components/home-page/main-swiper";
import MainOptions from "@/components/home-page/main-options";
import { pageConstants } from "@/data/constants";
import { getAllCarsForHomepage } from "@/queries/car.query";

import dynamicImport from "next/dynamic";
import PromotionSection from "@/components/home-page/promotion-section";
const HomeQuickConsultModal = dynamicImport(
  () => import("@/components/public-layout/home-quick-consult-modal")
);

const CarsSection2 = dynamicImport(
  () => import("@/components/home-page/cars-section-2")
);

const CarsSection = dynamicImport(
  () => import("@/components/home-page/cars-section")
);

const SupportBuyersSection = dynamicImport(
  () => import("@/components/home-page/support-buyers-section")
);

const VideosSection = dynamicImport(
  () => import("@/components/home-page/videos-section")
);

const PriceTableSection = dynamicImport(
  () => import("@/components/home-page/price-table-section")
);

const ReasonsSection = dynamicImport(
  () => import("@/components/home-page/reasons-section")
);

const PostsSection = dynamicImport(
  () => import("@/components/home-page/posts-section")
);

const QuoteSection = dynamicImport(
  () => import("@/components/home-page/quote-section")
);

// const GoogleMaps = dynamicImport(
//   () => import("@/components/home-page/google-maps")
// );

export const generateMetadata = () => {
  return {
    title: pageConstants.siteTitle,
    description: pageConstants.siteDescription,
    alternates: {
      canonical: process.env.NEXT_PUBLIC_BASE_URL,
    },
  };
};

export default async function Home() {
  const cars = (await getAllCarsForHomepage()) as any[];

  return (
    <>
      <main>
        <MainSwiper />

        <div className="mt-4">
          <MainOptions />
          <PromotionSection />
          <CarsSection2 cars={cars} />
          <CarsSection cars={cars} />
          <SupportBuyersSection />
          <div className="pt-24 pb-[85px] container grid xl:grid-cols-2 grid-cols-1 gap-x-16 gap-y-28">
            <VideosSection />
            <PriceTableSection cars={cars} />
          </div>
          <ReasonsSection />
          <QuoteSection />
          <PostsSection />
          {/* <GoogleMaps /> */}
        </div>
      </main>

      <HomeQuickConsultModal />
    </>
  );
}
