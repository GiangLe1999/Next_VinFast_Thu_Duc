"use client";

import { FC, useState } from "react";
import parse from "html-react-parser";
import { FaDownload } from "react-icons/fa";

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

        {brochure && (
          <div className="w-full md:w-auto md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 flex justify-center mt-2 md:mt-0">
            <a
              href={brochure}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-tertiary transition-all text-sm font-bold shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <FaDownload size={14} /> Tải Brochure
            </a>
          </div>
        )}
      </div>

      {/* Tab Content */}
      <div
        key={activeTab} // Trigger animation on tab change
        id="car-content"
        className="prose overflow-hidden max-w-none animate-fadeIn pt-4"
      >
        {parse(tabs.find((tab) => tab.id === activeTab)?.content || "")}
      </div>
    </div>
  );
};

export default ContentSection;
