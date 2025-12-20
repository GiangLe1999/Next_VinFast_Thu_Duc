import dynamicImport from "next/dynamic";
import CarPromotionSection from "@/components/car-page/CarPromotionSection";

import CarImageGallery from "@/components/car-page/CarImageGallery";
import { getAllCarsForAdmin, getCarBySlug } from "@/queries/car.query";
import CarPriceSection from "@/components/car-page/CarPriceSection";

const SalerCard = dynamicImport(
  () => import("@/components/car-page/SalerCard")
);
const ContentSection = dynamicImport(
  () => import("@/components/car-page/ContentSection")
);
const CarQuickConsultModal = dynamicImport(
  () => import("@/components/car-quick-consult-modal")
);

export async function generateStaticParams() {
  const cars = await getAllCarsForAdmin();

  const carsSlugs = cars?.map((car: any) => ({
    carSlug: car.slug,
  }));

  return carsSlugs;
}

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ carSlug: string }>;
}) => {
  try {
    const slug = (await params).carSlug;
    const carData = (await getCarBySlug(slug)) as any;

    return {
      title: `Giá Xe VinFast ${carData?.name} - Mua Xe VinFast Trả Góp Đến 80%`,
      description: `VinFast ${carData?.name} có giá từ ${carData?.priceFrom} VNĐ. Cập nhật giá xe VinFast ${carData?.name} 2025 kèm thông tin khuyến mãi, thông số kỹ thuật và giá lăn bánh.`,
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/${slug}`,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

export default async function Page({
  params,
}: {
  params: Promise<{ carSlug: string }>;
}) {
  const slug = (await params).carSlug;

  const car = (await getCarBySlug(slug)) as any;

  return (
    <>
      <div className="py-10">
        <div className="container">
          <div className="flex gap-10 max-[1100px]:gap-0">
            <div className="flex-1 space-y-14">
              <div className="grid grid-cols-2 gap-8 max-[725px]:grid-cols-1">
                <div className="grid place-items-center">
                  <CarImageGallery
                    colors={car?.colors as any[]}
                    price={car?.priceFrom}
                  />
                </div>
                <CarPromotionSection
                  content={car.saleContent}
                  name={car.name}
                />
              </div>

              <CarPriceSection
                lines={car.carLines}
                registration={car.registration}
              />

              <ContentSection content={car.content} />
            </div>

            <SalerCard />
          </div>
        </div>
      </div>
      <CarQuickConsultModal carSlug={slug} />
    </>
  );
}
