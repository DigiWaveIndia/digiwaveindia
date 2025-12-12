export default function Logo({ size = 'default' }) {
  const sizes = {
    small: { container: 'w-10', text: 'text-base' },
    default: { container: 'w-12', text: 'text-xl' },
    large: { container: 'w-16', text: 'text-2xl' },
  };

  const s = sizes[size];

  return (
    <div
      className={`${s.container} aspect-square bg-gradient-to-br from-cyan-500 via-teal-500 to-blue-600 rounded-xl shadow-lg flex items-center justify-center`}
    >
      <div
        className={`${s.text} font-bold text-white leading-none font-poppins`}
      >
        DWI
      </div>
    </div>
  );
}
