import React from "react";

export const ParticleBackground: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 w-full h-full z-0 pointer-events-none select-none overflow-hidden bg-[#010307]"
      id="site-gargantua-background"
      aria-hidden="true"
    >
      {/* Real High-Resolution Interstellar Gargantua Black Hole Image */}
      <img
        src="https://i.imgur.com/reyEqmD.png"
        alt="Gargantua Black Hole Cinematic Background"
        className="absolute w-full h-full object-cover filter contrast-[1.2] brightness-[0.55] opacity-90 transition-all duration-700"
        loading="eager"
        referrerPolicy="no-referrer"
      />

      {/* Elegant Radial Glowing Eclipse Mask in deep space blue to mimic the movie atmosphere */}
      <div className="absolute inset-0 bg-radial from-blue-500/5 via-transparent to-black/95 mix-blend-color-dodge pointer-events-none" />

      {/* Left-focused gradient mask: keeps the text side (left) dark for maximum accessibility and readability, 
          while letting the bright accretion disk on the right-center shine through beautifully. */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#010307]/92 via-[#010307]/45 to-[#010307]/90 pointer-events-none" />

      {/* Vertical vignette: blends the top header and bottom footer smoothly into the background void */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#010307] via-transparent to-[#010307] pointer-events-none" />
    </div>
  );
};
