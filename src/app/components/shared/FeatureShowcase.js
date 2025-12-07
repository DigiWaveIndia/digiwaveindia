export default function FeatureShowcase() {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 shadow-2xl">
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-2xl">📱</span>
              </div>
              <div className="text-white">
                <div className="font-semibold">PWA Technology</div>
                <div className="text-sm opacity-80">Works like a native app</div>
              </div>
            </div>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-green-400 rounded-full" style={{width: '95%'}}></div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <div className="text-white">
                <div className="font-semibold">Lightning Fast</div>
                <div className="text-sm opacity-80">Optimized performance</div>
              </div>
            </div>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-yellow-400 rounded-full" style={{width: '98%'}}></div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-2xl">🔒</span>
              </div>
              <div className="text-white">
                <div className="font-semibold">Secure & Reliable</div>
                <div className="text-sm opacity-80">Enterprise-grade security</div>
              </div>
            </div>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-blue-400 rounded-full" style={{width: '100%'}}></div>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-3xl font-bold mb-6 font-poppins text-gray-900">
          Built for Performance & Scale
        </h3>
        <p className="text-lg text-gray-700 font-inter mb-6">
          Every solution we build is optimized for speed, security, and scalability. 
          From day one to thousands of users, your digital presence grows with you.
        </p>
        <ul className="space-y-3">
          {[
            'Mobile-first responsive design',
            'SEO optimized for Google ranking',
            'Cloud-hosted for 99.9% uptime',
            'Regular security updates',
            'Scalable infrastructure'
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 text-gray-700 font-inter">
              <span className="text-green-500 text-xl">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
