export default function FeatureShowcase() {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-4">
        <div className="border-2 border-slate-200 rounded-xl p-5 hover:border-sky-300 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center">
              <span className="text-xl">📱</span>
            </div>
            <div>
              <div className="font-semibold text-slate-900">PWA Technology</div>
              <div className="text-sm text-slate-600">
                Works like a native app
              </div>
            </div>
          </div>
        </div>

        <div className="border-2 border-slate-200 rounded-xl p-5 hover:border-sky-300 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center">
              <span className="text-xl">⚡</span>
            </div>
            <div>
              <div className="font-semibold text-slate-900">Lightning Fast</div>
              <div className="text-sm text-slate-600">
                Optimized performance
              </div>
            </div>
          </div>
        </div>

        <div className="border-2 border-slate-200 rounded-xl p-5 hover:border-sky-300 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center">
              <span className="text-xl">🔒</span>
            </div>
            <div>
              <div className="font-semibold text-slate-900">
                Secure & Reliable
              </div>
              <div className="text-sm text-slate-600">
                Enterprise-grade security
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-3xl font-bold mb-6 font-poppins text-gray-900">
          Our Websites are Built for Performance & Scale
        </h3>
        <p className="text-lg text-gray-700 font-inter mb-6">
          Every solution we build is optimized for speed, security, and
          scalability. From day one to thousands of users, your digital presence
          grows with you.
        </p>
        <ul className="space-y-3">
          {[
            'Mobile-first responsive design',
            'SEO optimized for Google ranking',
            'Cloud-hosted for 99.9% uptime',
            'Regular security updates',
            'Scalable infrastructure',
          ].map((item, idx) => (
            <li
              key={idx}
              className="flex items-center gap-3 text-gray-700 font-inter"
            >
              <span className="text-green-500 text-xl">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
