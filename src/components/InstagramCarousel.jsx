import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";

const images = [
  "https://picsum.photos/300/300?random=1",
  "https://picsum.photos/300/300?random=2",
  "https://picsum.photos/300/300?random=3",
  "https://picsum.photos/300/300?random=4",
  "https://picsum.photos/300/300?random=5",
  "https://picsum.photos/300/300?random=6",
];

const InstagramCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(3); // Default to tablet view

  // Adjust number of visible images based on screen width
  useEffect(() => {
    const updateVisibleImages = () => {
      if (window.innerWidth < 640) {
        setVisibleImages(1); // Mobile: Show 1 image
      } else if (window.innerWidth < 1024) {
        setVisibleImages(3); // Tablet: Show 3 images
      } else {
        setVisibleImages(5); // Desktop: Show 5 images
      }
    };

    updateVisibleImages();
    window.addEventListener("resize", updateVisibleImages);
    return () => window.removeEventListener("resize", updateVisibleImages);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleImages >= images.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - visibleImages : prevIndex - 1
    );
  };

  return (
    <div className="w-full bg-white py-6 relative">
      {/* Instagram Heading */}
      <h2 className="text-lg md:text-2xl font-semibold text-center mb-4">
        <span className="text-orange-500">@PremiumBakeryQuality</span> on Instagram
      </h2>

      {/* Carousel Wrapper */}
      <div className="flex items-center justify-center relative w-full max-w-7xl mx-auto px-8">
        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 md:-left-10 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-200 z-10"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        {/* Carousel Content */}
        <div className="w-full overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleImages)}%)` }}
          >
            {images.map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{ width: `${100 / visibleImages}%` }} // Adjust width dynamically
              >
                <img
                  src={img}
                  alt="Instagram post"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 md:-right-10 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-200 z-10"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default InstagramCarousel;
