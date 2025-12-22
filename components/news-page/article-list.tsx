import React, { FC } from "react";
import ArticleCardSkeleton from "./article-card-skeleton";
import ArticleCard from "./article-card";
import BigArticleCardSkeleton from "./big-article-card-skeleton";
import BigArticleCard from "./big-article-card";

interface Props {
  articles: any[];
  isLoading: boolean;
}

const ArticleList: FC<Props> = ({ articles, isLoading }) => {
  const firstArticlesSection = articles?.slice(0, 6);
  const seventhArticle = articles?.[6];
  const secondArticlesSection = articles?.slice(7, 10);
  const thirdArticlesSection = articles?.slice(10);

  return (
    <section id="article-list">
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {isLoading ? (
          <>
            <ArticleCardSkeleton />
            <ArticleCardSkeleton />
            <ArticleCardSkeleton />
            <ArticleCardSkeleton />
            <ArticleCardSkeleton />
            <ArticleCardSkeleton />
          </>
        ) : (
          <>
            {firstArticlesSection?.length > 0 &&
              firstArticlesSection?.map((article) => (
                <ArticleCard key={article._id} article={article} />
              ))}
          </>
        )}
      </div>

      <div className="mt-14">
        {isLoading ? (
          <BigArticleCardSkeleton />
        ) : (
          <>{seventhArticle && <BigArticleCard article={seventhArticle} />}</>
        )}
      </div>

      <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {isLoading ? (
          <>
            <ArticleCardSkeleton />
            <ArticleCardSkeleton />
            <ArticleCardSkeleton />
          </>
        ) : (
          <>
            {secondArticlesSection.length > 0 &&
              secondArticlesSection.map((article) => (
                <ArticleCard key={article._id} article={article} />
              ))}
          </>
        )}
      </div>

      <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {isLoading ? (
          <>
            <ArticleCardSkeleton />
            <ArticleCardSkeleton />
            <ArticleCardSkeleton />
          </>
        ) : (
          <>
            {thirdArticlesSection.length > 0 &&
              thirdArticlesSection.map((article) => (
                <ArticleCard key={article._id} article={article} />
              ))}
          </>
        )}
      </div>
    </section>
  );
};

export default ArticleList;
