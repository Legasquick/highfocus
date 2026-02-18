import { useEffect, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import HeroSection from './components/sections/HeroSection';
import BrandSection from './components/sections/BrandSection';
import PositioningSection from './components/sections/PositioningSection';
import AudienceSection from './components/sections/AudienceSection';
import GoalsSection from './components/sections/GoalsSection';
import MethodologySection from './components/sections/MethodologySection';
import CampaignKPISection from './components/sections/CampaignKPISection';
import BudgetSplitSection from './components/sections/BudgetSplitSection';
import ATLDetailSection from './components/sections/ATLDetailSection';
import BTLDetailSection from './components/sections/BTLDetailSection';
import CowGameSection from './components/sections/CowGameSection';
import SectionDivider from './components/ui/SectionDivider';

function App() {
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="scroll-smooth relative bg-white min-h-screen w-full overflow-x-hidden">
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 h-[3px] bg-accent z-50 transition-none" style={{ width: `${scrollPct}%` }} />

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
      <SectionDivider />
      <BrandSection />
      <SectionDivider />
      <PositioningSection />
      <SectionDivider />
      <AudienceSection />
      <SectionDivider />
      <GoalsSection />
      <SectionDivider />
      <MethodologySection />
      <SectionDivider />
      <CampaignKPISection />
      <SectionDivider />
      <BudgetSplitSection />
      <SectionDivider />
      <ATLDetailSection />
      <SectionDivider />
      <BTLDetailSection />
      <SectionDivider />
      <CowGameSection />

      {/* QR code — desktop only, fixed left */}
      <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col items-center z-20">
        <QRCodeSVG value="https://legasquick.github.io/highfocus/" size={160} />
        <p className="text-[9px] text-neutral-400 mt-2 tracking-wider uppercase text-center leading-tight">Открой<br/>на телефоне</p>
      </div>
    </div>
  );
}

export default App;
