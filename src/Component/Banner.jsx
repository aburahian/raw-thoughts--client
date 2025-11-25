"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const banners = [
  {
    title: "Discover the latest place.",
    image:
      "https://i.ibb.co.com/9mQJqhBG/gettyimages-520176152-20241220203148003.jpg",
  },
  {
    title: "Discover What’s Possible When You Level Up",
    image:
      "https://i.ibb.co.com/0jRJRY2v/17-4-dgdn-c023-Impression-Image-Tony-Noel-046-1.jpg",
  },
  {
    title: "New Places. New Ideas. New You",
    image: "https://i.ibb.co.com/gL50ST1p/dsc-0254-largejpg.jpg",
  },
];

export default function SliderBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000); // 4 seconds per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden rounded-xl shadow-lg">
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={banner.image}
            alt={banner.title}
            fill
            style={{ objectFit: "cover" }}
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h2 className="text-white text-xl sm:text-2xl lg:text-4xl font-bold text-center px-4">
              {banner.title}
            </h2>
          </div>
        </div>
      ))}

      {/* Pagination Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {banners.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === current ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}
