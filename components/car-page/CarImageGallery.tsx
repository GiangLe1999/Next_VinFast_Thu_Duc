"use client";

import React, { FC, useState } from "react";
import { formatPrice } from "@/lib/formatData";
import ContainNextImage from "../contain-next-image";
import Image from "next/image";

interface Props {
  colors: any[];
  price: number;
}

const CarImageGallery: FC<Props> = ({ colors, price }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const carImages = colors.map((color) => color.colorImg);
  const carColors = colors.map((color) => color.color);

  // Swipe Threshold to trigger change
  const minSwipeDistance = 50;

  // --- Touch Events (Mobile) ---
  const onTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.targetTouches[0].clientX);
    setDragOffset(0);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.targetTouches[0].clientX;
    const diff = currentX - startX;
    setDragOffset(diff);
  };

  const onTouchEnd = () => {
    handleDragEnd();
  };

  // --- Mouse Events (Desktop) ---
  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default image dragging
    setIsDragging(true);
    setStartX(e.clientX);
    setDragOffset(0);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const currentX = e.clientX;
    const diff = currentX - startX;
    setDragOffset(diff);
  };

  const onMouseUp = () => {
    handleDragEnd();
  };

  const onMouseLeave = () => {
    if (isDragging) handleDragEnd();
  };

  // --- Common Logic ---
  const handleDragEnd = () => {
    if (!isDragging) return;

    if (dragOffset > minSwipeDistance && selectedIndex > 0) {
      setSelectedIndex((prev) => prev - 1); // Swipe Right -> Prev
    } else if (
      dragOffset < -minSwipeDistance &&
      selectedIndex < carImages.length - 1
    ) {
      setSelectedIndex((prev) => prev + 1); // Swipe Left -> Next
    }

    // Reset
    setIsDragging(false);
    setDragOffset(0);
  };

  return (
    <div className="w-full select-none">
      {/* Main Image Slider Area */}
      <div
        className={`relative w-full aspect-[16/8] overflow-hidden rounded-lg cursor-${
          isDragging ? "grabbing" : "grab"
        }`}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
      >
        <div
          className="flex w-full h-full"
          style={{
            transform: `translateX(calc(-${
              selectedIndex * 100
            }% + ${dragOffset}px))`,
            transition: isDragging ? "none" : "transform 0.5s ease-out",
          }}
        >
          {carImages.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative">
              <div
                className="w-full h-full relative"
                onDragStart={(e) => e.preventDefault()} // Critical: Stop browser from dragging the image file
              >
                <ContainNextImage
                  src={image.url}
                  alt={`Car color variant ${index}`}
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Color Thumbs */}
      <div className="flex justify-center items-center gap-4 mt-6 flex-wrap">
        {carColors.map((color, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`w-8 h-8 rounded-full transition-all duration-300 relative outline-none ${
              selectedIndex === index
                ? "ring-2 ring-primary ring-offset-2"
                : "hover:scale-110"
            }`}
            aria-label={`Select color ${color}`}
          >
            <div className="w-full h-full rounded-full overflow-hidden relative">
              <Image
                src={`/images/colors/${color}`}
                alt={`Color thumb ${color}`}
                fill
                sizes="32px"
                className="object-cover"
                draggable={false} // Prevent dragging thumbs
              />
            </div>
          </button>
        ))}
      </div>

      <p className="text-center leading-none mt-7">
        <span className="font-semibold">Giá từ: </span>
        <strong className="text-2xl text-primary font-bold">
          {formatPrice(price)}
          <u className="text-base relative -top-2">đ</u>
        </strong>
      </p>
    </div>
  );
};

export default CarImageGallery;
