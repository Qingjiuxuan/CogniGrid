import React, { useState } from 'react';
import { ShieldCheck, Award, UserCheck } from 'lucide-react';

interface ExecutiveAvatarProps {
  name: string;
  role: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isCEO?: boolean;
  className?: string;
}

export const ExecutiveAvatar: React.FC<ExecutiveAvatarProps> = ({
  name,
  role,
  size = 'md',
  isCEO = false,
  className = ''
}) => {
  const [imgError, setImgError] = useState(false);

  const sizeClasses = {
    sm: 'w-12 h-12 text-sm',
    md: 'w-20 h-20 text-lg',
    lg: 'w-32 h-32 text-2xl',
    xl: 'w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 text-4xl'
  }[size];

  // Specific visual styling for CEO Ethan vs general executives
  if (isCEO) {
    return (
      <div className={`relative group ${className}`}>
        {/* Ambient Gradient Glow */}
        <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 opacity-60 blur-xl group-hover:opacity-100 transition duration-500 animate-pulse" />
        
        <div className={`relative ${sizeClasses} rounded-2xl overflow-hidden bg-slate-950 border-2 border-cyan-400/50 shadow-2xl flex flex-col items-center justify-end`}>
          {/* Mr. Ethan Executive Portrait Photo */}
          {!imgError ? (
            <div className="w-full h-full relative bg-slate-950 flex items-center justify-center overflow-hidden">
              <img 
                src="/mr_ethan.jpg"
                alt="Mr. Ethan - Global CEO & Founder of CogniGrid"
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
                className="w-full h-full object-cover object-top filter brightness-105 contrast-105 transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle gradient vignette at bottom for text contrast */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent pointer-events-none" />
              {/* Subtle top sheen */}
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-cyan-500/10 to-transparent pointer-events-none" />
            </div>
          ) : (
            <div className="w-full h-full relative bg-gradient-to-b from-slate-800 via-slate-900 to-[#050811] flex items-center justify-center p-4 text-center">
              <div className="flex flex-col items-center gap-2">
                <UserCheck className="w-12 h-12 text-cyan-400" />
                <div className="text-sm font-bold text-white">Mr. Ethan</div>
                <div className="text-xs text-cyan-300">Global CEO</div>
              </div>
            </div>
          )}

          {/* Official Badge Overlay */}
          <div className="absolute bottom-2.5 inset-x-2.5 py-1.5 px-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-cyan-400/40 flex items-center justify-between text-left shadow-lg">
            <div>
              <div className="text-xs sm:text-sm font-bold text-white leading-tight font-display tracking-wide">Mr. Ethan</div>
              <div className="text-[10px] text-cyan-300 font-mono-tech leading-tight mt-0.5">Founder & Global CEO</div>
            </div>
            <span className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              <ShieldCheck className="w-4 h-4" />
            </span>
          </div>
        </div>

        {/* Floating Verification Tag */}
        <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 text-[10px] font-extrabold tracking-wider uppercase flex items-center gap-1.5 shadow-lg shadow-cyan-500/40 border border-cyan-200">
          <Award className="w-3.5 h-3.5" />
          <span>Sole Authority</span>
        </div>
      </div>
    );
  }

  // Initials Avatar for team members
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .substring(0, 2);

  return (
    <div className={`relative ${className}`}>
      <div className={`${sizeClasses} rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/60 shadow-lg flex flex-col items-center justify-center p-2 text-center group-hover:border-cyan-500/40 transition-colors`}>
        <div className="font-display font-bold text-cyan-400 group-hover:text-white transition-colors">
          {initials}
        </div>
      </div>
    </div>
  );
};
