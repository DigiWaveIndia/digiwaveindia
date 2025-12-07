export default function EngagementMockup() {
  return (
    <div className="relative h-64 flex items-center justify-center gap-4">
      {/* Admin Dashboard */}
      <div className="relative z-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl p-1.5 shadow-xl border-2 border-indigo-400" style={{width: '200px'}}>
        <div className="bg-white rounded-lg overflow-hidden" style={{height: '220px'}}>
          <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-2 text-white">
            <div className="flex items-center justify-between mb-1">
              <span className="font-semibold text-xs">Admin Dashboard</span>
              <div className="w-4 h-4 bg-white/20 rounded"></div>
            </div>
          </div>
          <div className="p-2 space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-blue-50 rounded p-2">
                <div className="text-xs font-semibold text-blue-600">24</div>
                <div className="text-xs text-gray-600">Bookings</div>
              </div>
              <div className="bg-green-50 rounded p-2">
                <div className="text-xs font-semibold text-green-600">156</div>
                <div className="text-xs text-gray-600">Customers</div>
              </div>
            </div>
            <div className="bg-purple-50 rounded p-2">
              <div className="text-xs font-semibold text-purple-600 mb-1">Revenue Trend</div>
              <div className="flex items-end gap-1 h-8">
                {[40, 60, 45, 80, 55, 90].map((h, i) => (
                  <div key={i} className="flex-1 bg-gradient-to-t from-purple-500 to-purple-400 rounded-t" style={{height: `${h}%`}}></div>
                ))}
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 bg-gray-50 rounded p-1.5">
                <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
                <div className="flex-1">
                  <div className="w-16 h-1.5 bg-gray-300 rounded"></div>
                  <div className="w-12 h-1 bg-gray-200 rounded mt-0.5"></div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 rounded p-1.5">
                <div className="w-6 h-6 bg-green-400 rounded-full"></div>
                <div className="flex-1">
                  <div className="w-16 h-1.5 bg-gray-300 rounded"></div>
                  <div className="w-12 h-1 bg-gray-200 rounded mt-0.5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Automation */}
      <div className="relative z-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-1.5 shadow-xl border-2 border-green-400" style={{width: '140px'}}>
        <div className="bg-white rounded-xl overflow-hidden" style={{height: '220px'}}>
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-2 text-white">
            <div className="flex items-center gap-1">
              <span className="text-lg">💬</span>
              <span className="font-semibold text-xs">WhatsApp</span>
            </div>
          </div>
          <div className="p-2 space-y-2">
            {/* Automated Messages */}
            <div className="bg-green-50 rounded-lg p-2 border-l-2 border-green-400">
              <div className="text-xs text-gray-600 mb-1">Automated Reminder</div>
              <div className="text-xs font-medium">Your appointment is tomorrow at 2 PM</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-2 border-l-2 border-blue-400">
              <div className="text-xs text-gray-600 mb-1">Special Offer</div>
              <div className="text-xs font-medium">Get 20% off this weekend!</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-2 border-l-2 border-purple-400">
              <div className="text-xs text-gray-600 mb-1">Feedback Request</div>
              <div className="text-xs font-medium">How was your experience?</div>
            </div>
            <div className="flex items-center justify-center gap-1 mt-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-500">Auto-sending...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
