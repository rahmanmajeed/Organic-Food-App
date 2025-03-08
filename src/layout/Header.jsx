import { ChevronDown, Search, ShoppingCart, User, X } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <header className="w-full z-50 bg-white shadow-sm sticky top-0 left-0">
      {/** Promo Banner */}
      <div className="bg-[#C2E8CE] text-center py-2 text-sm text-[#1F1F1F] flex justify-center items-center relative">
        <span>Free Delivery over $100.Gift with Purchase over $150</span>
        <button className="absolute right-4 hover:text-gray-800">
          <X className="w-4 l-4" />
        </button>
      </div>

      {/** Main Header */}
      <div className="flex items-center justify-between px-6 py-4">
        {/** Logo */}
        <div className="text-xl font-bold flex items-center">
          <img src="./brand.png" alt="h-10" />
        </div>
        {/** Navigation Items */}
        <nav className="hidden md:flex space-x-6 text-[#1F1F1F]">
          <a href="#" className="hover:text-orange-600 flex items-center">
            Occasions <ChevronDown className="w-4 h-4 ml-1" />
          </a>
          <a href="#" className="hover:text-orange-600 flex items-center">
            All Categories <ChevronDown className="w-4 h-4 ml-1" />
          </a>
          <a href="#" className="hover:text-orange-600 flex items-center">
            Gifts & Bundles <ChevronDown className="w-4 h-4 ml-1" />
          </a>
          <a href="#" className="hover:text-orange-600">
            Our Brands
          </a>
          <a href="#" className="hover:text-orange-600">
            About Us
          </a>
        </nav>

        {/** right action icons */}
        <div className="flex items-center space-x-4">
          <div className="border-1 ring-1 ring-[#BFBFBF] p-3 rounded-full cursor-pointer hover:bg-slate-50">
            <Search className="w-6 h-6" />
          </div>
          <div className="border-1 ring-1 ring-[#BFBFBF] p-3 rounded-full cursor-pointer hover:bg-slate-50">
            <User className="w-6 h-6 cursor-pointer" />
          </div>
          <div className="border-1 ring-1 ring-[#BFBFBF] p-3 rounded-full cursor-pointer hover:bg-slate-50">
            <div className="relative">
              <ShoppingCart className="w-6 h-6 cursor-pointer" />
              <span className="bg-orange-500 text-white text-xs px-1 rounded-full absolute -top-2 -right-2">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
