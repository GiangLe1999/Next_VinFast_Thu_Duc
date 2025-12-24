import dynamicImport from "next/dynamic";
import CarPromotionSection from "@/components/car-page/CarPromotionSection";

import CarImageGallery from "@/components/car-page/CarImageGallery";
import { getAllCarsForAdmin, getCarBySlug } from "@/queries/car.query";
import CarPriceSection from "@/components/car-page/CarPriceSection";
import JsonLd from "@/components/jsonld";

const SalerCard = dynamicImport(
  () => import("@/components/car-page/SalerCard")
);
const ContentSection = dynamicImport(
  () => import("@/components/car-page/ContentSection")
);
const CarQuickConsultModal = dynamicImport(
  () => import("@/components/car-quick-consult-modal")
);
const RegisterAdviceForm = dynamicImport(
  () => import("@/components/car-page/register-advice-form")
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
      openGraph: {
        title: `Giá Xe VinFast ${carData?.name} - Mua Xe VinFast Trả Góp Đến 80%`,
        description: `VinFast ${carData?.name} có giá từ ${carData?.priceFrom} VNĐ. Cập nhật giá xe VinFast ${carData?.name} 2025 kèm thông tin khuyến mãi, thông số kỹ thuật và giá lăn bánh.`,
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/${slug}`,
        images: [
          {
            url: carData?.avatar?.url,
            width: 1200,
            height: 630,
            alt: `VinFast ${carData?.name}`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: `Giá Xe VinFast ${carData?.name} - Mua Xe VinFast Trả Góp Đến 80%`,
        description: `VinFast ${carData?.name} có giá từ ${carData?.priceFrom} VNĐ. Cập nhật giá xe VinFast ${carData?.name} 2025 kèm thông tin khuyến mãi, thông số kỹ thuật và giá lăn bánh.`,
        images: [carData?.avatar?.url],
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

  const carSchema = {
    "@context": "https://schema.org/",
    "@type": "Car",
    name: car?.name,
    image: car?.avatar?.url,
    description: `VinFast ${car?.name} có giá từ ${car?.priceFrom} VNĐ.`,
    brand: {
      "@type": "Brand",
      name: "VinFast",
    },
    offers: {
      "@type": "AggregateOffer",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${slug}`,
      priceCurrency: "VND",
      lowPrice: car?.priceFrom,
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "VinFast Hồ Chí Minh",
      },
    },
  };

  return (
    <>
      <JsonLd data={carSchema} />
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

              <ContentSection
                content={car.content}
                exterior={car.exterior}
                interior={car.interior}
                specifications={car.specifications}
                brochure={car.brochure}
              />
            </div>

            <SalerCard />
          </div>
        </div>
      </div>
      <RegisterAdviceForm />
      <CarQuickConsultModal carSlug={slug} />
    </>
  );
}
