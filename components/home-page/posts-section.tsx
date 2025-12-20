"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useQuery } from "@tanstack/react-query";
import { getAllArticles } from "@/queries/article.query";
import SectionTitle from "./section-title";
import ArticleCard from "../news-page/article-card";

const PostsSection = () => {
  const { data } = useQuery({
    queryKey: ["get-articles", 8],
    queryFn: () => getAllArticles(8),
  });

  return (
    <section className="container pt-10 pb-20">
      <p className="text-textColor text-center font-bold text-sm mb-2">
        CẬP NHẬT
      </p>
      <SectionTitle title="Tin Tức & Sự Kiện" />

      <div className="mt-10">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            617: {
              slidesPerView: 2,
            },
            944: {
              slidesPerView: 3,
            },
          }}
          loop={true}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          className="homeSwiper !aspect-auto"
        >
          {(data as any)?.map((article: any, index: number) => (
            <SwiperSlide key={index}>
              <ArticleCard article={article} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PostsSection;
