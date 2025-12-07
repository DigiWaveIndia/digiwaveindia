export default function TrustBadges() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 py-8">
      <div className="flex items-center gap-2 text-gray-600">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
          <span className="text-2xl">✓</span>
        </div>
        <div>
          <div className="font-semibold text-gray-900">100% Secure</div>
          <div className="text-sm">Data Protection</div>
        </div>
      </div>
      <div className="flex items-center gap-2 text-gray-600">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
          <span className="text-2xl">⚡</span>
        </div>
        <div>
          <div className="font-semibold text-gray-900">Fast Delivery</div>
          <div className="text-sm">3-7 Days</div>
        </div>
      </div>
      <div className="flex items-center gap-2 text-gray-600">
        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
          <span className="text-2xl">🏆</span>
        </div>
        <div>
          <div className="font-semibold text-gray-900">Quality Assured</div>
          <div className="text-sm">Premium Code</div>
        </div>
      </div>
      <div className="flex items-center gap-2 text-gray-600">
        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
          <span className="text-2xl">🤝</span>
        </div>
        <div>
          <div className="font-semibold text-gray-900">24/7 Support</div>
          <div className="text-sm">Always Here</div>
        </div>
      </div>
    </div>
  );
}
