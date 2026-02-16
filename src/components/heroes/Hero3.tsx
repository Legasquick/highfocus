/**
 * Design 3: "Flavor Cards"
 * Three glassmorphism product cards side by side, each featuring a can
 * on its flavor-colored gradient. Logo top center. Warm neutral background.
 */
export default function Hero3() {
  const flavors = [
    {
      name: 'Груша Пармезан',
      img: '/photos/грушапармезан.png',
      gradient: 'from-pear-light via-pear-mid/20 to-transparent',
      borderColor: 'border-pear/20',
      dotColor: 'bg-pear',
      tagColor: 'text-pear',
      ingredients: 'Гуарана + L-теанин',
    },
    {
      name: 'Брауни',
      img: '/photos/брауни.webp',
      gradient: 'from-brownie-light via-brownie-mid/20 to-transparent',
      borderColor: 'border-brownie/20',
      dotColor: 'bg-brownie',
      tagColor: 'text-brownie',
      ingredients: 'Гуарана + L-теанин',
    },
    {
      name: 'Солёная Карамель',
      img: '/photos/солёнаякарамель.png',
      gradient: 'from-caramel-light via-caramel-mid/20 to-transparent',
      borderColor: 'border-caramel/20',
      dotColor: 'bg-caramel',
      tagColor: 'text-caramel',
      ingredients: 'Гуарана + L-теанин',
    },
  ];

  return (
    <section className="w-full min-h-screen bg-[#f7f5f0] flex flex-col items-center justify-center px-5 py-16 relative overflow-hidden">
      {/* Soft shapes */}
      <div className="absolute top-[-100px] right-[-80px] w-[400px] h-[400px] rounded-full bg-pear-light/40 blur-[120px]" />
      <div className="absolute bottom-[-80px] left-[-60px] w-[350px] h-[350px] rounded-full bg-caramel-light/40 blur-[120px]" />

      {/* Logo & Header */}
      <div className="text-center mb-10 relative z-10">
        <img
          src="/photos/logo.svg"
          alt="High Focus × Эконива"
          className="h-9 md:h-11 mx-auto mb-6 animate-fadeUp"
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 leading-[0.92] animate-fadeUp delay-200">
          Методология<br />Бюджетирования
        </h1>
        <p className="mt-3 text-sm text-neutral-400 font-light tracking-wide animate-fadeUp delay-400">
          Напиток для тех, кто работает головой
        </p>
      </div>

      {/* Product cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 w-full max-w-4xl">
        {flavors.map((f, i) => (
          <div
            key={f.name}
            className={`animate-fadeUp group relative rounded-3xl border ${f.borderColor} bg-white/60 backdrop-blur-xl p-6 pb-5 flex flex-col items-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl`}
            style={{ animationDelay: `${400 + i * 150}ms` }}
          >
            {/* Gradient bg */}
            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-b ${f.gradient} opacity-50 group-hover:opacity-70 transition-opacity duration-500`} />

            {/* Can */}
            <div className="relative z-10 mb-4">
              <img
                src={f.img}
                alt={f.name}
                className="h-44 md:h-56 drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Info */}
            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className={`w-2 h-2 rounded-full ${f.dotColor}`} />
                <span className="text-sm font-semibold text-neutral-800">{f.name}</span>
              </div>
              <p className={`text-[10px] font-medium uppercase tracking-widest ${f.tagColor}`}>
                {f.ingredients}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom meta */}
      <div className="relative z-10 flex items-center gap-6 mt-10 animate-fadeUp delay-1000">
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400">Молочный напиток</span>
        <span className="w-px h-3 bg-neutral-300" />
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400">Без лактозы</span>
        <span className="w-px h-3 bg-neutral-300" />
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-ekoniva-dark">Эконива</span>
      </div>
    </section>
  );
}
