import React from "react";

const LatestOffer = () => {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-center text-3xl font-semibold text-[#1F1F1F]">
        Latest <span className="text-[#FF8126]">Offers</span>
      </h2>

      {/** Scrollable Container */}
      <div className="mt-8 px-6 overflow-x-auto">
        <div className="flex space-x-6 min-w-max snap-x snap-mandatory">
          {[
            {
              img: "/1.png",
              title: "Pepperoni Pizza",
              price: "$19.99",
              oldPrice: "$24.99",
            },
            {
              img: "/2.png",
              title: "Baked Pancakes",
              price: "$35.99",
              oldPrice: "$44.99",
            },
            {
              img: "/3.png",
              title: "Avocado",
              price: "$17.99",
              oldPrice: "$20.99",
            },
            {
              img: "/4.png",
              title: "Bunch of Orange",
              price: "$24.99",
              oldPrice: "$29.99",
            },
          ].map((offer, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden w-64 flex-shrink-0 snap-center"
            >
              <img
                src={offer.img}
                alt={offer.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-gray-800">{offer.title}</h3>
                <p className="text-[#FF8126] font-bold text-lg inline-flex items-center gap-2">
                  {offer.price}
                  <span className="text-gray-500 line-through text-sm">
                    {offer.oldPrice}
                  </span>
                </p>
                <button className="mt-3 px-6 py-2 bg-[#FF8126] text-white rounded-md hover:bg-orange-700 transition">
                  Quick Shop
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestOffer;
