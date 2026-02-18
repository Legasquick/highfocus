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
      <BrandSection />
      <PositioningSection />
      <AudienceSection />
      <GoalsSection />
      <MethodologySection />
      <CampaignKPISection />
      <BudgetSplitSection />
      <ATLDetailSection />
      <BTLDetailSection />
      <CowGameSection />
    </div>
  );
}

export default App;
