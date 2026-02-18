import { useState, useRef, useCallback } from 'react';

export function useDebouncedHover<T>(delay = 200) {
  const [hover, setHover] = useState<T | null>(null);
  const timeout = useRef<ReturnType<typeof setTimeout>>(undefined);

  const enter = useCallback((id: T) => {
    clearTimeout(timeout.current);
    setHover(id);
  }, []);

  const leave = useCallback(() => {
    timeout.current = setTimeout(() => setHover(null), delay);
  }, [delay]);

  return { hover, enter, leave } as const;
}
