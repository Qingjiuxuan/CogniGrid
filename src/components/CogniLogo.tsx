import React, { useState } from 'react';

interface CogniLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  textClassName?: string;
  imgClassName?: string;
}

export const CogniLogo: React.FC<CogniLogoProps> = ({
  className = '',
  size = 40,
  showText = true,
  textClassName = 'text-xl font-bold font-display tracking-tight text-white',
  imgClassName = ''
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* 3D Cyan-Blue Futuristic Concentric G-Ring Logo */}
      <div 
        className="relative flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-105 group"
        style={{ width: size, height: size }}
      >
        {/* Ambient Glow */}
        <div 
          className="absolute -inset-1 rounded-full bg-gradient-to-tr from-cyan-500/50 via-blue-600/40 to-purple-500/30 blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300"
        />

        {/* Logo Container Badge */}
        <div 
          className="relative w-full h-full rounded-full overflow-hidden bg-slate-950/90 border border-cyan-400/50 shadow-[0_0_15px_rgba(6,182,212,0.35)] flex items-center justify-center p-0.5"
        >
          {!hasError ? (
            <img 
              src="/logo.jpg"
              alt="CogniGrid Official Logo"
              referrerPolicy="no-referrer"
              onError={() => setHasError(true)}
              className={`w-full h-full object-contain rounded-full transition-transform duration-500 group-hover:scale-110 ${imgClassName}`}
            />
          ) : (
            /* Fallback High-Fidelity SVG */
            <svg 
              viewBox="0 0 120 120" 
              width={size} 
              height={size} 
              className="w-full h-full p-1 drop-shadow-[0_2px_10px_rgba(6,182,212,0.5)]"
            >
              <defs>
                <linearGradient id="cgRingGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="50%" stopColor="#0284c7" />
                  <stop offset="100%" stopColor="#1d4ed8" />
                </linearGradient>
                <linearGradient id="cgRingGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#67e8f9" />
                  <stop offset="100%" stopColor="#0369a1" />
                </linearGradient>
                <radialGradient id="cgCoreLight" cx="50%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.9" />
                  <stop offset="60%" stopColor="#0284c7" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#0369a1" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Outer Segment 1 (Top-Right Arc) */}
              <path
                d="M 60 12 A 48 48 0 0 1 108 60 L 96 60 A 36 36 0 0 0 60 24 Z"
                fill="url(#cgRingGrad1)"
              />

              {/* Outer Segment 2 (Left Arc) */}
              <path
                d="M 48 15 A 48 48 0 0 0 12 60 A 48 48 0 0 0 54 107 L 57 95 A 36 36 0 0 1 24 60 A 36 36 0 0 1 51 27 Z"
                fill="url(#cgRingGrad2)"
              />

              {/* Outer Segment 3 (Bottom-Right Arc) */}
              <path
                d="M 66 107 A 48 48 0 0 0 108 66 L 96 66 A 36 36 0 0 1 63 95 Z"
                fill="url(#cgRingGrad1)"
              />

              {/* Center Inner Ring forming stylized 'G' / Quantum Core */}
              <circle 
                cx="60" 
                cy="60" 
                r="28" 
                fill="none" 
                stroke="url(#cgRingGrad1)" 
                strokeWidth="10"
                strokeDasharray="140 25"
                strokeDashoffset="10"
              />

              {/* G horizontal crossbar */}
              <path
                d="M 60 60 L 84 60 A 28 28 0 0 1 76 78 L 60 60 Z"
                fill="url(#cgRingGrad2)"
              />

              {/* Center Quantum Pulse */}
              <circle cx="60" cy="60" r="12" fill="url(#cgCoreLight)" />
              <circle cx="60" cy="60" r="5" fill="#38bdf8" />
            </svg>
          )}
        </div>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className={textClassName}>
            Cogni<span className="text-cyan-400">Grid</span>
          </span>
          <span className="text-[10px] uppercase tracking-widest text-slate-400 font-mono-tech -mt-0.5">
            AI Quant Ecosystem
          </span>
        </div>
      )}
    </div>
  );
};
