import HeroSection from './components/sections/HeroSection';
import MethodologySection from './components/sections/MethodologySection';

function App() {
  return (
    <div className="scroll-smooth relative bg-white min-h-screen w-full overflow-x-hidden">
      {/* Global grid across entire page */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <HeroSection />
      <MethodologySection />
    </div>
  );
}

export default App;
