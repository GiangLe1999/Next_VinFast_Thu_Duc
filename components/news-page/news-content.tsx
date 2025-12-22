import { FC } from "react";
import HtmlParser from "../html-parser";
// import TOC from "./toc";

interface Props {
  content: string | undefined;
}

const NewsContent: FC<Props> = ({ content }) => {
  return (
    <div
      id="car-content"
      className="prose prose-img:my-0 prose-img:rounded-md news-content"
    >
      {/* <div className="container !px-0 flex gap-10 max-[1000px]:flex-col-reverse"> */}
      {/* <div className="content w-[70%] max-[1000px]:w-full"> */}
      <HtmlParser content={content || ""} />
      {/* </div> */}
      {/* <div className="flex-1 max-[1000px]:w-full">
          <TOC selector=".content" />
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default NewsContent;
