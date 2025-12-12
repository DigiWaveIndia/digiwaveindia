export default function ProcessTimeline() {
  const steps = [
    { icon: '💬', title: 'Consultation', desc: 'Discuss your needs' },
    { icon: '🎨', title: 'Design', desc: 'Create mockups' },
    { icon: '⚙️', title: 'Development', desc: 'Build your solution' },
    { icon: '🚀', title: 'Launch', desc: 'Go live' },
    { icon: '🤝', title: 'Support', desc: 'Ongoing assistance' },
  ];

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600"></div>

      <div className="grid md:grid-cols-5 gap-8 relative">
        {steps.map((step, idx) => (
          <div key={idx} className="text-center">
            <div className="relative inline-block">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-4xl shadow-lg mb-4 relative z-10">
                {step.icon}
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm z-20">
                {idx + 1}
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2 font-poppins text-gray-900">
              {step.title}
            </h3>
            <p className="text-sm text-gray-600 font-inter">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
