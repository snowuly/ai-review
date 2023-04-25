import { useCallback, useEffect, useState } from "react";

export const useTicker = (interval: number) => {
  const [tick, setTick] = useState(0);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (flag) {
      setTick(0);
      return
    }
    const id = setInterval(() => setTick(tick + 1), interval);
    return () => clearInterval(id);
  }, [tick, interval, flag]);

  const stop = useCallback(() => setFlag(true), [])
  const start = useCallback(() => setFlag(false), [])

  return [tick, stop, start] as const;
}