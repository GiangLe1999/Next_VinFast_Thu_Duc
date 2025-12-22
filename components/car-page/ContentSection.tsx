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
    <div className="space-y-6">
      {/* Tab Headers */}
      <div className="flex flex-wrap border-b border-gray-200 gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-6 py-3 font-bold text-sm uppercase transition-all duration-300 border-b-2 ${
              activeTab === tab.id
                ? "border-primary text-primary"
                : "border-transparent text-gray-500 hover:text-primary"
            }`}
          >
            {tab.label}
          </button>
        ))}

        {brochure && (
          <a
            href={brochure}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-tertiary transition-all text-sm font-bold h-fit my-auto"
          >
            <FaDownload size={14} /> Tải Brochure
          </a>
        )}
      </div>

      {/* Tab Content */}
      <div
        id="car-content"
        className="prose postContent overflow-hidden max-w-none"
      >
        {parse(tabs.find((tab) => tab.id === activeTab)?.content || "")}
      </div>
    </div>
  );
};

export default ContentSection;
