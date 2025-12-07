export default function TechStack() {
  const technologies = [
    { name: 'React', color: 'from-cyan-400 to-blue-500' },
    { name: 'Next.js', color: 'from-gray-700 to-gray-900' },
    { name: 'Flutter', color: 'from-blue-400 to-cyan-500' },
    { name: 'Firebase', color: 'from-yellow-400 to-orange-500' },
    { name: 'Node.js', color: 'from-green-500 to-green-700' },
    { name: 'MongoDB', color: 'from-green-600 to-green-800' },
    { name: 'AWS', color: 'from-orange-400 to-orange-600' },
    { name: 'Vercel', color: 'from-gray-800 to-black' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {technologies.map((tech, idx) => (
        <div 
          key={idx}
          className={`bg-gradient-to-br ${tech.color} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center`}
        >
          <span className="text-white font-bold text-lg font-poppins">{tech.name}</span>
        </div>
      ))}
    </div>
  );
}
