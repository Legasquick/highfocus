import { useState } from 'react';
import Hero1 from './components/heroes/Hero1';
import Hero2 from './components/heroes/Hero2';
import Hero3 from './components/heroes/Hero3';
import Hero4 from './components/heroes/Hero4';
import Hero5 from './components/heroes/Hero5';
import Switcher from './components/ui/Switcher';

const heroes = [Hero1, Hero2, Hero3, Hero4, Hero5];

function App() {
  const [active, setActive] = useState(0);
  const Hero = heroes[active];

  return (
    <>
      <Hero key={active} />
      <Switcher active={active} onChange={setActive} />
    </>
  );
}

export default App;
