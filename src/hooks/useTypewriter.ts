import { useEffect, useRef, useState } from 'react';

export interface TerminalStep {
  cmd: string;
  out: string;
  final?: boolean;
}

const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));
const jitter = (base: number, spread: number) => base + Math.random() * spread;

async function typeText(
  set: (value: string) => void,
  text: string,
  base: number,
  spread: number,
  isCancelled: () => boolean,
) {
  let current = '';
  for (const ch of text) {
    if (isCancelled()) return;
    current += ch;
    set(current);
    await sleep(jitter(base, spread));
  }
}

async function eraseText(
  set: (value: string) => void,
  text: string,
  base: number,
  spread: number,
  isCancelled: () => boolean,
) {
  let current = text;
  while (current.length) {
    if (isCancelled()) return;
    current = current.slice(0, -1);
    set(current);
    await sleep(jitter(base, spread));
  }
}

export function useTypewriter(script: TerminalStep[]) {
  const [cmdText, setCmdText] = useState('');
  const [outText, setOutText] = useState('');
  const [showCursorOnCmd, setShowCursorOnCmd] = useState(true);
  const [isFinal, setIsFinal] = useState(false);
  const cancelledRef = useRef(false);

  useEffect(() => {
    cancelledRef.current = false;
    const isCancelled = () => cancelledRef.current;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const lastStep = script[script.length - 1];

    if (reduceMotion) {
      setCmdText(lastStep.cmd);
      setOutText(lastStep.out);
      setShowCursorOnCmd(false);
      setIsFinal(true);
      return;
    }

    async function run() {
      for (const step of script) {
        if (isCancelled()) return;
        await sleep(500);
        await typeText(setCmdText, step.cmd, 70, 55, isCancelled);
        if (isCancelled()) return;
        await sleep(650);
        await typeText(setOutText, step.out, 26, 20, isCancelled);
        if (isCancelled()) return;
        await sleep(1600);

        if (step.final) {
          setShowCursorOnCmd(false);
          setIsFinal(true);
          return;
        }

        await eraseText(setOutText, step.out, 26, 20, isCancelled);
        if (isCancelled()) return;
        await eraseText(setCmdText, step.cmd, 28, 20, isCancelled);
        if (isCancelled()) return;
        await sleep(350);
      }
    }

    run();

    return () => {
      cancelledRef.current = true;
    };
  }, [script]);

  return { cmdText, outText, showCursorOnCmd, isFinal };
}
