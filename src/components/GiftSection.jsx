export default function GiftSection() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div>
          <img
            src="/banner-left.png"
            alt="Gift Box"
            className="w-full rounded-lg shadow-md"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-orange-600 text-lg font-semibold">
            Surprise Someone
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-1">
            Working from Home
          </h3>
          <p className="text-gray-600 mt-4">
            Do you have a colleague or family member working hard at home?
            Our Working From Home box of snacks and drinks is the perfect way
            to put a smile on their face, delivered direct to their door.
          </p>
          <p className="text-gray-600 mt-2">
            To buy for a large group of people, get in touch and we can
            discuss bespoke bundles and personalised messaging.
          </p>

          {/* Button */}
          <a
            href="#"
            className="mt-6 inline-block bg-orange-500 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-orange-600 transition"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
}
