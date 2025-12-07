export default function DashboardMockup() {
  return (
    <div className="relative">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-2xl p-6 border border-gray-700">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">📊</span>
            </div>
            <div>
              <h3 className="text-white font-semibold">Business Dashboard</h3>
              <p className="text-gray-400 text-sm">Real-time insights</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-4 rounded-lg border border-blue-500/30">
            <p className="text-blue-300 text-sm mb-1">Today's Bookings</p>
            <p className="text-white text-2xl font-bold">24</p>
            <p className="text-green-400 text-xs">↑ 12% from yesterday</p>
          </div>
          <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 p-4 rounded-lg border border-green-500/30">
            <p className="text-green-300 text-sm mb-1">Revenue</p>
            <p className="text-white text-2xl font-bold">₹8.5K</p>
            <p className="text-green-400 text-xs">↑ 8% this week</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-4 rounded-lg border border-purple-500/30">
            <p className="text-purple-300 text-sm mb-1">Customers</p>
            <p className="text-white text-2xl font-bold">156</p>
            <p className="text-green-400 text-xs">↑ 23 new</p>
          </div>
          <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 p-4 rounded-lg border border-orange-500/30">
            <p className="text-orange-300 text-sm mb-1">Peak Time</p>
            <p className="text-white text-2xl font-bold">2-4 PM</p>
            <p className="text-gray-400 text-xs">Most busy</p>
          </div>
        </div>

        {/* Chart Placeholder */}
        <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
          <div className="flex items-end justify-between h-32 gap-2">
            {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
              <div key={i} className="flex-1 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t" style={{height: `${height}%`}}></div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-gray-500 text-xs">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>
      </div>
    </div>
  );
}
