import {
  Facebook,
  Instagram,
  MessageCircle,
  Send,
  Twitter,
} from "lucide-react";

import React from "react";

const Footer = () => {
  const categories = [
    { name: "Occasions", url: "" },

    { name: "Working From Home", url: "" },

    { name: "Snack Time", url: "" },

    { name: "BreackFast", url: "" },

    { name: "Vegan Life", url: "" },

    { name: "Baking", url: "" },

    { name: "Drinks", url: "" },

    { name: "All products", url: "" },
  ];

  return (
    <footer className="bg-white mb-7">
      {/** Social Banner */}

      <div className="py-6 text-center bg-orange-100">
        <h3 className="text-[#1F1F1F] text-lg font-semibold">Tell a Friend</h3>

        <div className="flex justify-center space-x-4 mt-3">
          <div className="bg-orange-600 h-12 w-12 rounded-full inline-flex items-center justify-center p-2 ">
            <Facebook className="w-full h-full cursor-pointer text-white fill-white" />
          </div>

          <div className="bg-orange-600 h-12 w-12 rounded-full inline-flex items-center justify-center p-2 ">
            <Instagram className="w-full h-full cursor-pointer text-white" />
          </div>

          <div className="bg-orange-600 h-12 w-12 rounded-full inline-flex items-center justify-center p-2 ">
            <Twitter className="w-full h-full cursor-pointer text-white" />
          </div>

          <div className="bg-orange-600 h-12 w-12 rounded-full inline-flex items-center justify-center p-2 ">
            <MessageCircle className="w-full h-full cursor-pointer text-white" />
          </div>

          <div className="bg-orange-600 h-12 w-12 rounded-full inline-flex items-center justify-center p-2 ">
            <Send className="w-full h-full cursor-pointer text-white" />
          </div>
        </div>
      </div>

      {/** Footer Links */}

      <div className="container mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-6 gap-8">
        {/** Brand Logo */}

        <div className="">
          <img src="./brand.png" alt="logo" className="h-12 mb-4" />
        </div>

        <div>
          <h4 className="font-semibold mb-3">Occasions</h4>

          <ul className="text-sm text-gray-600 space-y-1">
            {categories.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">All Categories</h4>

          <ul className="text-sm text-gray-600 space-y-1">
            {categories.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Gifts & Bundles</h4>

          <ul className="text-sm text-gray-600 space-y-1">
            {categories.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Our Brands</h4>
        </div>

        <div>
          <h4 className="font-semibold mb-3">About Us</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
