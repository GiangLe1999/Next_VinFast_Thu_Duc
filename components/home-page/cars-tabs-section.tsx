"use client";

import { FC, useState } from "react";
import CarCard from "./car-card";
import SectionTitle from "./section-title";

interface Props {
  cars: any[];
}

const CarsTabsSection: FC<Props> = ({ cars }) => {
  const [activeTab, setActiveTab] = useState<"electric" | "service">(
    "electric"
  );

  // Define data for each tab
  // Tab 1: Dòng xe điện (Corresponding to CarsSection logic -> slice(4))
  const electricCars = cars?.slice(5) || [];

  // Tab 2: Dòng xe dịch vụ (Corresponding to CarsSection2 logic -> slice(0, 4))
  const serviceCars = cars?.slice(0, 5) || [];

  const currentCars = activeTab === "electric" ? electricCars : serviceCars;

  return (
    <section id="cars-section">
      <div className="container py-10">
        <div className="mb-8 text-center">
          <p className="text-textColor text-center font-bold text-sm mb-2 uppercase">
            CÁC DÒNG XE TẠI
          </p>
          <SectionTitle title="VinFast Quận 2" />
        </div>

        {/* Tabs */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab("electric")}
            className={`px-6 py-2 rounded-lg font-bold transition-all duration-500 ${
              activeTab === "electric"
                ? "bg-primary text-white shadow-lg scale-105"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Dòng xe điện VinFast
          </button>
          <button
            onClick={() => setActiveTab("service")}
            className={`px-6 py-2 rounded-lg font-bold transition-all duration-500 ${
              activeTab === "service"
                ? "bg-primary text-white shadow-lg scale-105"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Dòng xe dịch vụ VinFast
          </button>
        </div>

        {/* Content with Animation */}
        <div className="relative min-h-[400px]">
          <div
            key={activeTab}
            className="grid grid-cols-3 gap-6 py-4 max-[982px]:grid-cols-2 max-[680px]:grid-cols-1 animate-fadeInUp"
          >
            {currentCars.map((car) => (
              <CarCard car={car} key={car._id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarsTabsSection;
