import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  return (
    <nav className="hidden md:flex space-x-6 text-[#1F1F1F] relative" ref={dropdownRef}>
      {/* Occasions Dropdown */}
      <div className="relative">
        <button
          onClick={() => toggleDropdown("occasions")}
          className="hover:text-orange-600 flex items-center"
        >
          Occasions <ChevronDown className="w-4 h-4 ml-1" />
        </button>
        {openDropdown === "occasions" && (
          <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 transition-all duration-200 transform opacity-100 scale-100">
            <a href="#" className="block px-4 py-2 hover:bg-orange-100">
              Birthdays
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-orange-100">
              Anniversaries
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-orange-100">
              Holidays
            </a>
          </div>
        )}
      </div>

      {/* All Categories Dropdown */}
      <div className="relative">
        <button
          onClick={() => toggleDropdown("categories")}
          className="hover:text-orange-600 flex items-center"
        >
          All Categories <ChevronDown className="w-4 h-4 ml-1" />
        </button>
        {openDropdown === "categories" && (
          <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 transition-all duration-200 transform opacity-100 scale-100">
            <a href="#" className="block px-4 py-2 hover:bg-orange-100">
              Breads
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-orange-100">
              Pastries
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-orange-100">
              Cakes
            </a>
          </div>
        )}
      </div>

      {/* Gifts & Bundles Dropdown */}
      <div className="relative">
        <button
          onClick={() => toggleDropdown("gifts")}
          className="hover:text-orange-600 flex items-center"
        >
          Gifts & Bundles <ChevronDown className="w-4 h-4 ml-1" />
        </button>
        {openDropdown === "gifts" && (
          <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 transition-all duration-200 transform opacity-100 scale-100">
            <a href="#" className="block px-4 py-2 hover:bg-orange-100">
              Gift Boxes
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-orange-100">
              Bundles
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-orange-100">
              Seasonal Gifts
            </a>
          </div>
        )}
      </div>

      {/* Static Links */}
      <a href="#" className="hover:text-orange-600">
        Our Brands
      </a>
      <a href="#" className="hover:text-orange-600">
        About Us
      </a>
    </nav>
  );
};

export default Navbar;
