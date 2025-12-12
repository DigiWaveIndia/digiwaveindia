export default function WhatWeBuild() {
  const solutions = [
    'Business Websites',
    'E-commerce Sites',
    'Coaching/Institute Portals',
    'Salon & Spa Booking Systems',
    'Restaurant Ordering Solutions',
    'Gym Membership Systems',
    'Real Estate Websites',
    'Portfolio Websites',
    'Custom Mini CRMs',
    'Full Mobile Apps',
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-poppins text-gray-900">
            💬 What We Build
          </h2>
          <p className="text-xl text-gray-600 font-inter">
            Tailored digital solutions for every type of business
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100 text-center"
            >
              <p className="text-gray-800 font-medium font-inter text-sm md:text-base">
                {solution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
