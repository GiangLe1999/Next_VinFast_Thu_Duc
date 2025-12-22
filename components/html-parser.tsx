"use client";

import { FC } from "react";
import Image from "next/image";

interface Props {
  content: string;
}

const HtmlParser: FC<Props> = ({ content }) => {
  if (!content) return null;

  // Regex tìm:
  // 1. Thẻ ảnh trong figure: <figure ...><img ...></figure>
  // 2. Thẻ ảnh lẻ: <img ...>
  // 3. Thẻ iframe (video): <iframe ...></iframe>
  const contentRegex =
    /(<figure class="image"[^>]*>.*?<img[^>]+src="([^">]+)"[^>]*>.*?<\/figure>)|(<img[^>]+src="([^">]+)"[^>]*>)|(<iframe[^>]*>.*?<\/iframe>)/g;

  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = contentRegex.exec(content)) !== null) {
    // 1. Push phần text trước thẻ đặc biệt
    if (match.index > lastIndex) {
      parts.push({
        type: "html",
        content: content.substring(lastIndex, match.index),
      });
    }

    // 2. Xử lý phần thẻ đặc biệt
    const fullMatch = match[0];

    // Kiểm tra loại thẻ
    if (fullMatch.includes("<iframe")) {
      parts.push({
        type: "iframe",
        content: fullMatch,
      });
    } else {
      // Logic cũ cho ảnh
      const src = match[2] || match[4]; // Group 2 (figure) hoặc Group 4 (img)
      const altMatch = fullMatch.match(/alt="([^"]*)"/);
      const alt = altMatch ? altMatch[1] : "VinFast Image";

      if (src) {
        parts.push({
          type: "image",
          src: src,
          alt: alt,
        });
      }
    }

    lastIndex = match.index + fullMatch.length;
  }

  // 3. Push phần text còn lại
  if (lastIndex < content.length) {
    parts.push({
      type: "html",
      content: content.substring(lastIndex),
    });
  }

  return (
    <>
      {parts.map((item, index) => {
        if (item.type === "image") {
          return (
            <div
              key={index}
              className="relative w-full aspect-video my-6 rounded-md overflow-hidden"
            >
              <Image
                src={item.src!}
                alt={item.alt!}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                className="object-cover rounded-md"
                loading="lazy"
              />
            </div>
          );
        }

        if (item.type === "iframe") {
          // Trích xuất src từ iframe string để tái tạo lại hoặc render string đã được clean
          // Tuy nhiên, cách đơn giản nhất để đảm bảo style là bọc nó trong div wrapper và replace width/height cũ
          const iframeContent = item
            .content!.replace(/width="[^"]*"/g, 'width="100%"')
            .replace(/height="[^"]*"/g, 'height="100%"'); // Xóa hoặc set 100% để container kiểm soát

          return (
            <div
              key={index}
              className="w-full aspect-video my-6 rounded-md overflow-hidden"
              dangerouslySetInnerHTML={{ __html: iframeContent }}
            />
          );
        }

        return (
          <span
            key={index}
            dangerouslySetInnerHTML={{ __html: item.content! }}
            className="inline"
          />
        );
      })}
    </>
  );
};

export default HtmlParser;
