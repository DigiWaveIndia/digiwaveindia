export default function ResponsiveDevicesMockup() {
  return (
    <div className="relative h-64 flex items-center justify-center">
      {/* Laptop - Center */}
      <div className="relative z-10">
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-t-xl p-1.5 shadow-xl">
          <div className="bg-white rounded-lg overflow-hidden" style={{width: '240px', height: '150px'}}>
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-2 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 bg-white/20 rounded"></div>
                  <span className="font-semibold text-xs">Your Business</span>
                </div>
                <div className="flex gap-2 text-xs">
                  <span>Home</span>
                  <span>About</span>
                </div>
              </div>
            </div>
            <div className="p-2 grid grid-cols-3 gap-1.5">
              <div className="bg-gray-100 rounded h-8"></div>
              <div className="bg-gray-100 rounded h-8"></div>
              <div className="bg-gray-100 rounded h-8"></div>
              <div className="col-span-2 bg-blue-50 rounded h-12"></div>
              <div className="bg-green-50 rounded h-12"></div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 h-2 rounded-b-xl"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-purple-400 rounded-t"></div>
      </div>

      {/* Tablet - Right */}
      <div className="absolute right-0 top-8 z-20 transform rotate-3">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-1.5 shadow-lg border-2 border-blue-400" style={{width: '140px'}}>
          <div className="bg-white rounded-lg overflow-hidden" style={{height: '180px'}}>
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-2 text-white">
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 bg-white/20 rounded"></div>
                <span className="font-semibold text-xs">Your Business</span>
              </div>
            </div>
            <div className="p-2 space-y-1.5">
              <div className="bg-gray-100 rounded h-8"></div>
              <div className="grid grid-cols-2 gap-1.5">
                <div className="bg-blue-50 rounded h-12"></div>
                <div className="bg-green-50 rounded h-12"></div>
              </div>
              <div className="bg-gray-100 rounded h-8"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile - Left */}
      <div className="absolute left-0 top-12 z-30 transform -rotate-3">
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-1.5 shadow-lg border-2 border-green-400" style={{width: '90px'}}>
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-12 h-3 bg-gradient-to-br from-green-500 to-green-600 rounded-b-lg z-10"></div>
          <div className="bg-white rounded-xl overflow-hidden" style={{height: '180px'}}>
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-1.5 text-white">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-white/20 rounded"></div>
                <span className="font-semibold" style={{fontSize: '9px'}}>Business</span>
              </div>
            </div>
            <div className="p-1.5 space-y-1.5">
              <div className="bg-gray-100 rounded h-6"></div>
              <div className="bg-blue-50 rounded h-8"></div>
              <div className="bg-green-50 rounded h-8"></div>
              <div className="bg-gray-100 rounded h-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
