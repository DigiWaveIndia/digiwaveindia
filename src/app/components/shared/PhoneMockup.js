export default function PhoneMockup({ type = 'website' }) {
  return (
    <div className="relative mx-auto" style={{width: '280px'}}>
      {/* Phone Frame */}
      <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-8 border-gray-800">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10"></div>
        
        {/* Screen */}
        <div className="bg-white rounded-[2.5rem] overflow-hidden relative" style={{height: '560px'}}>
          {type === 'website' ? (
            <>
              {/* Website View */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-4 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
                  <div className="text-sm font-semibold">Your Business</div>
                </div>
                <div className="text-xs opacity-90">Welcome back!</div>
              </div>
              <div className="p-4 space-y-3">
                <div className="bg-gray-100 rounded-lg p-3">
                  <div className="w-20 h-3 bg-gray-300 rounded mb-2"></div>
                  <div className="w-full h-2 bg-gray-200 rounded"></div>
                </div>
                <div className="bg-gray-100 rounded-lg p-3">
                  <div className="w-24 h-3 bg-gray-300 rounded mb-2"></div>
                  <div className="w-full h-2 bg-gray-200 rounded"></div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-blue-100 rounded-lg p-3 h-20"></div>
                  <div className="bg-green-100 rounded-lg p-3 h-20"></div>
                </div>
              </div>
              {/* PWA Install Banner */}
              <div className="absolute bottom-4 left-4 right-4 bg-white border-2 border-blue-500 rounded-lg p-3 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded"></div>
                    <div className="text-xs">
                      <div className="font-semibold">Add to Home Screen</div>
                      <div className="text-gray-600">Install app</div>
                    </div>
                  </div>
                  <div className="text-blue-600 text-xs font-semibold">Add</div>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* App View */}
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-4 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm font-semibold">Dashboard</div>
                  <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white/20 rounded-lg p-2 text-xs">
                    <div className="font-semibold">24</div>
                    <div className="opacity-80">Bookings</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-2 text-xs">
                    <div className="font-semibold">₹8.5K</div>
                    <div className="opacity-80">Revenue</div>
                  </div>
                </div>
              </div>
              <div className="p-4 space-y-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full"></div>
                    <div className="flex-1">
                      <div className="w-24 h-2 bg-gray-300 rounded mb-1"></div>
                      <div className="w-16 h-2 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
