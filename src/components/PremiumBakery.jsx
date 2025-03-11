import React from "react";

const PremiumBakery = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-8">
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-4xl font-bold text-[#1F1F1F] mb-4">
          Why Choose
          <span className="text-[#FF8126]"> the Premium Bakery Quality</span>
        </h1>

        {/* <p className="text-base md:text-lg text-[#1F1F1F]">
          Discover the best in taste, quality, and community support
        </p> */}
      </div>
      <div className="overflow-x-auto px-2 md:px-6">
        <div className="flex gap-6 md:gap-2 pb-6 w-max md:w-full">
          {[
            {
              title: "Discover New Flavours & People",
              text: "We only offer great-tasting, all-natural foods that are better for you, and organic if possible.",
              icon: "/icon-tel.png",
            },
            {
              title: "Buy Wholesale",
              text: "We offer bulk formats, variety cases, and discovery boxes so you can save money on delicious foods by buying at wholesale prices.",
              icon: "/icon-sale.svg",
            },
            {
              title: "Support Your Community",
              text: "By buying in bulk from local and Canadian producers, you are helping grow our local food ecosystem, creating jobs, and supporting families and entrepreneurs in your community.",
              icon: "/icon-support.svg",
            },
            {
              title: "Enjoy the Best Quality",
              text: "We only offer great-tasting, all-natural foods that are better for you, and organic if possible.",
              icon: "/icon-winner.svg",
            },
            {
              title: "Enjoy Club Level Service",
              text: "As a member of our club, we will make sure you are delighted with our service or we will make it right!",
              icon: "/icon-heart.svg",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6  flex flex-col items-start w-72 md:w-80 flex-shrink-0"
            >
              {item.icon && (
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-10 w-10 mb-4"
                />
              )}
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h2>
              <p className="text-sm md:text-base text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumBakery;
