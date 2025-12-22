"use client";

import { FC, useState } from "react";
import { FaDownload } from "react-icons/fa";
import HtmlParser from "../html-parser";
import Link from "next/link";

interface Props {
  content: string;
  exterior?: string;
  interior?: string;
  specifications?: string;
  brochure?: string;
}

const ContentSection: FC<Props> = ({
  content,
  exterior,
  interior,
  specifications,
  brochure,
}) => {
  const [activeTab, setActiveTab] = useState<
    "content" | "exterior" | "interior" | "specifications"
  >("content");

  const tabs = [
    { id: "content", label: "Giới thiệu", content: content },
    { id: "exterior", label: "Ngoại thất", content: exterior },
    { id: "interior", label: "Nội thất", content: interior },
    {
      id: "specifications",
      label: "Thông số kỹ thuật",
      content: specifications,
    },
  ].filter((tab) => tab.content); // Only show tabs that have content

  if (tabs.length === 0) return null;

  return (
    <div className="space-y-6 relative">
      {/* Tab Headers */}
      <div className="flex flex-wrap justify-center border-b border-gray-200 gap-2 relative">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-6 py-3 font-bold text-sm uppercase transition-all duration-300 border-b-2 ${
              activeTab === tab.id
                ? "border-primary text-primary bg-primary/5"
                : "border-transparent text-gray-500 hover:text-primary hover:bg-gray-50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div
        key={activeTab} // Trigger animation on tab change
        id="car-content"
        className="prose overflow-hidden max-w-none animate-fadeIn !mt-0"
      >
        {brochure && activeTab === "specifications" && (
          <div className="mt-8">
            <Link
              href={brochure}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline bg-primary hover:bg-primary/90 duration-300 w-fit text-white font-semibold px-4 py-2 flex items-center justify-center gap-x-1 rounded-md transition border border-transparent"
            >
              <FaDownload size={14} /> Tải Brochure
            </Link>
          </div>
        )}
        <HtmlParser
          content={tabs.find((tab) => tab.id === activeTab)?.content || ""}
        />
      </div>
    </div>
  );
};

export default ContentSection;
