import { useState, useRef, useCallback, useEffect } from 'react';

interface Cow {
  id: number;
  x: number;
  dir: 1 | -1; // 1 = moving right, -1 = moving left
  jumping: boolean;
  scored: boolean;
}

const PERSON_X = 50;
const DANGER_ZONE = 8;
const JUMP_DURATION = 600;

const PHRASES = [
  'Штефан Дюрр одобряет!',
  'ЭкоНива гордится тобой!',
  'L-теанин активирован!',
  'High Focus: концентрация на максимуме!',
  'Коровы ЭкоНивы непобедимы!',
  'Штефан считает тебя лучшим пастухом',
  'High Focus — умная энергия прыжка!',
  'ЭкоНива: наши коровы летают!',
  'Фокус, концентрация, корова!',
  'Штефан звонит — хочет тебя в команду',
];

export default function CowGameSection() {
  const [started, setStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [cows, setCows] = useState<Cow[]>([]);
  const [message, setMessage] = useState('');
  const [mode, setMode] = useState<'cows' | 'stefan' | null>(null);
  const [personJumping, setPersonJumping] = useState(false);

  const cowsRef = useRef<Cow[]>([]);
  const scoreRef = useRef(0);
  const frameRef = useRef(0);
  const spawnRef = useRef(0);
  const nextIdRef = useRef(0);
  const speedRef = useRef(0.05);
  const spawnIntervalRef = useRef(2000);
  const lastTimeRef = useRef(0);
  const gameOverRef = useRef(false);
  const personJumpingRef = useRef(false);
  const modeRef = useRef<'cows' | 'stefan'>('cows');
  const areaRef = useRef<HTMLDivElement>(null);

  const reset = useCallback(() => {
    cowsRef.current = [];
    scoreRef.current = 0;
    nextIdRef.current = 0;
    speedRef.current = 0.05;
    spawnIntervalRef.current = 2000;
    lastTimeRef.current = 0;
    spawnRef.current = 0;
    gameOverRef.current = false;
    setScore(0);
    setCows([]);
    setGameOver(false);
  }, []);

  const spawnCow = useCallback(() => {
    const dir = Math.random() > 0.5 ? 1 : -1;
    const cow: Cow = {
      id: nextIdRef.current++,
      x: dir === 1 ? -10 : 110,
      dir,
      jumping: false,
      scored: false,
    };
    cowsRef.current.push(cow);
  }, []);

  const handleTap = useCallback(() => {
    if (mode === 'cows') {
      const target = cowsRef.current
        .filter((c) => !c.jumping && !c.scored)
        .sort((a, b) => Math.abs(a.x - PERSON_X) - Math.abs(b.x - PERSON_X))[0];
      if (target) {
        target.jumping = true;
        setTimeout(() => { target.jumping = false; }, JUMP_DURATION);
      }
    } else {
      if (!personJumpingRef.current) {
        personJumpingRef.current = true;
        setPersonJumping(true);
        setTimeout(() => { personJumpingRef.current = false; setPersonJumping(false); }, JUMP_DURATION);
      }
    }
  }, [mode]);

  const loop = useCallback((time: number) => {
    if (gameOverRef.current) return;

    if (!lastTimeRef.current) lastTimeRef.current = time;
    const dt = time - lastTimeRef.current;
    lastTimeRef.current = time;

    // Spawn logic
    spawnRef.current += dt;
    if (spawnRef.current >= spawnIntervalRef.current) {
      spawnRef.current = 0;
      spawnCow();
      // Gradually speed up
      if (spawnIntervalRef.current > 600) spawnIntervalRef.current *= 0.95;
      speedRef.current = Math.min(speedRef.current + 0.002, 0.18);
    }

    // Move cows
    const alive: Cow[] = [];
    for (const cow of cowsRef.current) {
      cow.x += cow.dir * speedRef.current * dt;

      // Check danger zone
      const dist = Math.abs(cow.x - PERSON_X);
      const safe = modeRef.current === 'cows' ? cow.jumping : personJumpingRef.current;
      if (dist < DANGER_ZONE && !safe && !cow.scored) {
        gameOverRef.current = true;
        setGameOver(true);
        setCows([...cowsRef.current]);
        return;
      }

      // Score when passing through person zone safely
      if (dist < DANGER_ZONE && safe && !cow.scored) {
        cow.scored = true;
        scoreRef.current++;
        setScore(scoreRef.current);
        if (scoreRef.current % 5 === 0) {
          setMessage(PHRASES[(scoreRef.current / 5 - 1) % PHRASES.length]);
          setTimeout(() => setMessage(''), 2000);
        }
      }

      // Remove if off screen
      if (cow.x < -15 || cow.x > 115) continue;
      alive.push(cow);
    }

    cowsRef.current = alive;
    setCows([...alive]);
    frameRef.current = requestAnimationFrame(loop);
  }, [spawnCow]);

  const start = useCallback((m: 'cows' | 'stefan') => {
    reset();
    modeRef.current = m;
    setMode(m);
    personJumpingRef.current = false;
    setPersonJumping(false);
    setStarted(true);
    lastTimeRef.current = 0;
    frameRef.current = requestAnimationFrame(loop);
  }, [reset, loop]);

  useEffect(() => {
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    <section className="relative w-full flex flex-col items-center px-6 sm:px-8 py-24 md:py-32">
      <div className="relative z-10 w-full" style={{ maxWidth: '72rem' }}>
        <p className="text-center text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-neutral-400 mb-4">
          Бонус
        </p>
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-black tracking-[-0.03em] leading-[1] text-neutral-900 mb-6">
          Коровий <span className="text-accent">Забег</span>
        </h2>
        <p className="text-center text-neutral-500 text-sm sm:text-base mb-8">
          {mode === 'stefan' ? 'Тапай, чтобы Штефан перепрыгнул коров!' : 'Тапай, чтобы коровы перепрыгнули через Штефана!'}
        </p>

        {/* Score */}
        <div className="text-center mb-6">
          <span className="text-5xl font-black text-neutral-900">{score}</span>
          <p className="text-xs text-neutral-400 uppercase tracking-wider mt-1">Перепрыгнуто</p>
        </div>

        {/* Game area */}
        <div
          ref={areaRef}
          className="relative w-full h-[200px] sm:h-[300px] bg-neutral-50 border border-neutral-200 rounded-2xl overflow-hidden select-none cursor-pointer"
          onClick={started && !gameOver ? handleTap : undefined}
        >
          {/* Ground line */}
          <div className="absolute bottom-10 sm:bottom-16 left-0 right-0 h-px bg-neutral-200" />

          {/* Person in center */}
          <div className="absolute bottom-10 sm:bottom-16 left-1/2 -translate-x-1/2">
            <img
              src={import.meta.env.BASE_URL + "photos/i212952_5222-10-Stefan_Durr-Courtesy_of_EkoNiva.png"}
              alt="Stefan"
              className={`h-14 sm:h-24 object-contain pointer-events-none ${personJumping ? 'cow-jump' : ''}`}
              draggable={false}
            />
          </div>

          {/* Cows */}
          {cows.map((cow) => (
            <div
              key={cow.id}
              className="absolute bottom-10 sm:bottom-16 w-12 sm:w-20"
              style={{ left: `${cow.x}%`, transform: `translateX(-50%) ${cow.dir === 1 ? 'scaleX(-1)' : ''}` }}
            >
              <img
                src={import.meta.env.BASE_URL + "photos/cow-with-ai-generated-free-png.png"}
                alt="cow"
                draggable={false}
                className={`pointer-events-none w-full ${cow.jumping ? 'cow-jump' : ''}`}
              />
            </div>
          ))}

          {/* Funny message */}
          {message && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 px-5 py-2 bg-accent text-neutral-900 font-bold text-sm rounded-full animate-fadeIn whitespace-nowrap z-10">
              {message}
            </div>
          )}

          {/* Overlays */}
          {!started && !gameOver && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-white/80 backdrop-blur-sm">
              <p className="text-sm font-bold text-neutral-900 mb-1">Выбери персонажа</p>
              <button
                onClick={() => start('cows')}
                className="px-8 py-3 bg-neutral-900 text-white font-bold rounded-full hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                За коров
              </button>
              <button
                onClick={() => start('stefan')}
                className="px-8 py-3 bg-accent text-neutral-900 font-bold rounded-full hover:bg-accent-dim transition-colors cursor-pointer"
              >
                За Штефана
              </button>
            </div>
          )}

          {gameOver && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
              <p className="text-2xl font-black text-neutral-900 mb-2">Игра окончена!</p>
              <p className="text-neutral-500 mb-4">Счёт: <strong>{score}</strong></p>
              <div className="flex gap-3">
                <button
                  onClick={() => start('cows')}
                  className="px-6 py-3 bg-neutral-900 text-white font-bold rounded-full hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  За коров
                </button>
                <button
                  onClick={() => start('stefan')}
                  className="px-6 py-3 bg-accent text-neutral-900 font-bold rounded-full hover:bg-accent-dim transition-colors cursor-pointer"
                >
                  За Штефана
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
