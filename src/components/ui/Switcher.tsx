interface SwitcherProps {
  active: number;
  onChange: (index: number) => void;
}

const variants = [
  { name: 'Showcase' },
  { name: 'Noir' },
  { name: 'Cards' },
  { name: 'Editorial' },
  { name: 'Immersive' },
];

export default function Switcher({ active, onChange }: SwitcherProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[1000] bg-white/80 backdrop-blur-2xl border-t border-black/[0.05] shadow-[0_-4px_24px_rgba(0,0,0,0.04)]">
      <div className="max-w-2xl mx-auto flex items-center justify-center px-4 py-3 gap-1">
        <span className="hidden sm:block text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400 mr-4">
          Дизайн
        </span>
        {variants.map((v, i) => (
          <button
            key={i}
            onClick={() => onChange(i)}
            className={`
              relative flex flex-col items-center gap-1 px-3 sm:px-4 py-2 rounded-xl transition-all duration-300 cursor-pointer
              ${i === active
                ? 'bg-neutral-900 text-white shadow-lg scale-105'
                : 'text-neutral-500 hover:bg-neutral-100 hover:text-neutral-800'
              }
            `}
          >
            <span className="text-base font-bold leading-none">{i + 1}</span>
            <span className={`text-[9px] font-medium uppercase tracking-wider leading-none ${
              i === active ? 'text-neutral-400' : 'text-neutral-400'
            }`}>
              {v.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
