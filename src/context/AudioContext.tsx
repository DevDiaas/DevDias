import React, { createContext, useContext, useState, useEffect } from "react";

interface AudioContextProps {
  isMuted: boolean;
  setIsMuted: (muted: boolean) => void;
  playHover: () => void;
  playClick: () => void;
  playToggle: () => void;
  playSuccess: () => void;
}

const AudioContext = createContext<AudioContextProps | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMuted, setIsMutedState] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("devdias_mute");
      return saved === "true";
    }
    return false;
  });

  const setIsMuted = (muted: boolean) => {
    setIsMutedState(muted);
    localStorage.setItem("devdias_mute", String(muted));
  };

  // Helper: Get or initialize Web Audio Context lazily to bypass browser autoplay policies
  let audioCtx: AudioContext | null = null;
  const getAudioContext = (): AudioContext | null => {
    if (typeof window === "undefined") return null;
    if (!audioCtx) {
      // @ts-ignore
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      if (AudioCtxClass) {
        audioCtx = new AudioCtxClass();
      }
    }
    // Resume context if suspended
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    return audioCtx;
  };

  // 1. Synthesize a ultra-subtle futuristic hover sound (very fast transient tick)
  const playHover = () => {
    if (isMuted) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.type = "sine";
      // Start high, sweep down extremely fast for a crisp "tick"
      osc.frequency.setValueAtTime(2200, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.012);

      // Tight envelope
      gainNode.gain.setValueAtTime(0.008, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.015);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.02);
    } catch (e) {
      // Gracefully catch any browser restrictions
    }
  };

  // 2. Synthesize a satisfying, click trigger sound (crisp mid-frequency pop)
  const playClick = () => {
    if (isMuted) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.type = "triangle";
      osc.frequency.setValueAtTime(1200, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.035);

      gainNode.gain.setValueAtTime(0.028, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.04);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.05);
    } catch (e) {}
  };

  // 3. Synthesize a sci-fi toggle bleep-bleep sound
  const playToggle = () => {
    if (isMuted) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const time = ctx.currentTime;
      
      // Step 1: Low tone
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(440, time);
      gain1.gain.setValueAtTime(0.02, time);
      gain1.gain.exponentialRampToValueAtTime(0.0001, time + 0.04);
      osc1.start(time);
      osc1.stop(time + 0.05);

      // Step 2: High tone slightly offset
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.type = "sine";
      osc2.frequency.setValueAtTime(880, time + 0.03);
      gain2.gain.setValueAtTime(0.02, time + 0.03);
      gain2.gain.exponentialRampToValueAtTime(0.0001, time + 0.07);
      osc2.start(time + 0.03);
      osc2.stop(time + 0.08);
    } catch (e) {}
  };

  // 4. Synthesize a beautiful success musical bell sound
  const playSuccess = () => {
    if (isMuted) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      // F-Major Pentatonic chord notes for pleasant aesthetic harmony
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6

      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();

        osc.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + idx * 0.06);

        // Slow soft fade envelope
        gainNode.gain.setValueAtTime(0.012, now + idx * 0.06);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.06 + 0.45);

        osc.start(now + idx * 0.06);
        osc.stop(now + idx * 0.06 + 0.5);
      });
    } catch (e) {}
  };

  return (
    <AudioContext.Provider value={{ isMuted, setIsMuted, playHover, playClick, playToggle, playSuccess }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};
