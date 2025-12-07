export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🌊</span>
              <span className="text-xl font-bold font-poppins">DigiWave India</span>
            </div>
            <p className="text-gray-400 font-inter">
              Empowering India's small businesses to go digital — fast, affordable, and smart.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins">Quick Links</h3>
            <ul className="space-y-2 font-inter">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins">Contact</h3>
            <ul className="space-y-2 font-inter text-gray-400">
              <li>📧 support@digiwaveindia.com</li>
              <li>📞 +91-9281040446</li>
              <li>🌐 Based in India</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 font-inter">
            © 2025 DigiWave India. Smart Digital Solutions for Every Business.
          </p>
        </div>
      </div>
    </footer>
  );
}
