export default function CharityBanner() {
  return (
    <div
      className="relative w-full h-[395px] flex items-center justify-center text-white text-center px-4 bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-banner.png')" }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 "></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl w-full">
        <h2 className="text-lg sm:text-xl md:text-3xl font-semibold">
          Our Charity Partner, City Bakery
        </h2>

        {/* Logo */}
        <div className="my-4">
          <img
            src="/city-bakery-logo.png"
            alt="City Bakery Logo"
            className="mx-auto w-20 sm:w-24 md:w-28"
          />
        </div>

        {/* Button */}
        <a
          href="#"
          className="bg-orange-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md text-xs sm:text-sm font-medium hover:bg-orange-600 transition"
        >
          Learn more about City Bakery
        </a>
      </div>
    </div>
  );
}
