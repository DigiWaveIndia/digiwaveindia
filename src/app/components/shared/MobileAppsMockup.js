export default function MobileAppsMockup() {
  return (
    <div className="relative h-64 flex items-center justify-center gap-6">
      {/* Android Phone */}
      <div className="relative z-10">
        <div
          className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-1.5 shadow-xl border-2 border-green-400"
          style={{ width: '110px' }}
        >
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-3 bg-gradient-to-br from-green-500 to-green-600 rounded-b-xl z-10"></div>
          <div
            className="bg-white rounded-2xl overflow-hidden"
            style={{ height: '220px' }}
          >
            <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-2 text-white">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-xs">Your App</span>
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="p-2 space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-blue-50 rounded p-2 h-10"></div>
                <div className="bg-purple-50 rounded p-2 h-10"></div>
              </div>
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-gray-50 rounded p-1.5"
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full"></div>
                  <div className="flex-1 space-y-1">
                    <div className="w-full h-1.5 bg-gray-200 rounded"></div>
                    <div className="w-3/4 h-1 bg-gray-100 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center mt-2">
          <div className="inline-flex items-center gap-1 bg-green-100 px-2 py-1 rounded-full">
            <span className="text-green-600 font-semibold text-xs">
              Android
            </span>
          </div>
        </div>
      </div>

      {/* iOS Phone */}
      <div className="relative z-10">
        <div
          className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-3xl p-1.5 shadow-xl border-2 border-gray-600"
          style={{ width: '110px' }}
        >
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-3 bg-gradient-to-br from-gray-700 to-gray-800 rounded-b-xl z-10"></div>
          <div
            className="bg-white rounded-2xl overflow-hidden"
            style={{ height: '220px' }}
          >
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-2 text-white">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-xs">Your App</span>
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="p-2 space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-blue-50 rounded p-2 h-10"></div>
                <div className="bg-purple-50 rounded p-2 h-10"></div>
              </div>
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-gray-50 rounded p-1.5"
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full"></div>
                  <div className="flex-1 space-y-1">
                    <div className="w-full h-1.5 bg-gray-200 rounded"></div>
                    <div className="w-3/4 h-1 bg-gray-100 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center mt-2">
          <div className="inline-flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full">
            <span className="text-gray-700 font-semibold text-xs">iOS</span>
          </div>
        </div>
      </div>
    </div>
  );
}
