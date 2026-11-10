import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  theme?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md',
  showText = true,
  theme = 'light'
}) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
    xl: 'w-32 h-32'
  };

  const isLight = theme === 'light';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* 3D Circular Badge matching user's uploaded logo */}
      <div className={`relative ${sizeMap[size]} shrink-0 transition-transform duration-300 hover:scale-105 drop-shadow-[0_4px_12px_rgba(2,132,199,0.25)]`}>
        <svg 
          viewBox="0 0 200 200" 
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Outer metallic bezel */}
            <linearGradient id="outerBezel" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="30%" stopColor="#0284c7" />
              <stop offset="70%" stopColor="#034e80" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>

            {/* Inner rim */}
            <radialGradient id="innerPlate" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0f2b5c" />
              <stop offset="60%" stopColor="#071836" />
              <stop offset="100%" stopColor="#030b1a" />
            </radialGradient>

            {/* 3D 4 fill */}
            <linearGradient id="fourGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#38bdf8" />
              <stop offset="80%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#0369a1" />
            </linearGradient>

            {/* Top Text Path */}
            <path id="topTextArc" d="M 28 100 A 72 72 0 0 1 172 100" />
            {/* Bottom Text Path */}
            <path id="bottomTextArc" d="M 172 100 A 72 72 0 0 1 28 100" />
          </defs>

          {/* Outer ring with metallic finish */}
          <circle cx="100" cy="100" r="96" fill="url(#outerBezel)" stroke="#38bdf8" strokeWidth="2.5" />
          <circle cx="100" cy="100" r="91" fill="none" stroke="#00f2ff" strokeWidth="0.8" opacity="0.6" />
          
          {/* Deep center disc */}
          <circle cx="100" cy="100" r="82" fill="url(#innerPlate)" stroke="#1e3a8a" strokeWidth="2" />

          {/* Tech Constellation / Neural Grid */}
          <g opacity="0.45" stroke="#38bdf8" strokeWidth="0.8">
            <line x1="60" y1="70" x2="100" y2="50" />
            <line x1="100" y1="50" x2="140" y2="70" />
            <line x1="140" y1="70" x2="150" y2="110" />
            <line x1="150" y1="110" x2="130" y2="145" />
            <line x1="130" y1="145" x2="70" y2="145" />
            <line x1="70" y1="145" x2="50" y2="110" />
            <line x1="50" y1="110" x2="60" y2="70" />
            
            {/* Inner lines */}
            <line x1="60" y1="70" x2="100" y2="100" />
            <line x1="140" y1="70" x2="100" y2="100" />
            <line x1="130" y1="145" x2="100" y2="100" />
            <line x1="70" y1="145" x2="100" y2="100" />

            {/* Dots */}
            <circle cx="60" cy="70" r="2.5" fill="#00f2ff" />
            <circle cx="100" cy="50" r="2.5" fill="#00f2ff" />
            <circle cx="140" cy="70" r="2.5" fill="#00f2ff" />
            <circle cx="150" cy="110" r="2.5" fill="#00f2ff" />
            <circle cx="130" cy="145" r="2.5" fill="#00f2ff" />
            <circle cx="70" cy="145" r="2.5" fill="#00f2ff" />
            <circle cx="50" cy="110" r="2.5" fill="#00f2ff" />
            <circle cx="100" cy="100" r="3" fill="#ffffff" />
          </g>

          {/* Central 3D stylized Number 4 */}
          <g filter="drop-shadow(0px 4px 8px rgba(0,0,0,0.8))">
            {/* 4 shadow layer */}
            <path
              d="M 106 52 L 72 108 L 106 108 L 106 126 L 118 126 L 118 108 L 128 108 L 128 96 L 118 96 L 118 52 Z M 106 70 L 106 96 L 90 96 Z"
              fill="#021c3b"
              transform="translate(2, 2)"
            />
            {/* 4 main layer */}
            <path
              d="M 106 52 L 72 108 L 106 108 L 106 126 L 118 126 L 118 108 L 128 108 L 128 96 L 118 96 L 118 52 Z M 106 70 L 106 96 L 90 96 Z"
              fill="url(#fourGradient)"
              stroke="#ffffff"
              strokeWidth="1.2"
            />
            {/* Inner highlight */}
            <path
              d="M 106 52 L 72 108 L 106 108"
              fill="none"
              stroke="#e0f2fe"
              strokeWidth="2"
              opacity="0.8"
            />
          </g>

          {/* 4Digital subtext */}
          <text 
            x="100" 
            y="142" 
            textAnchor="middle" 
            fill="#ffffff" 
            fontSize="14" 
            fontWeight="800" 
            letterSpacing="0.5"
            filter="drop-shadow(0 0 4px #00f2ff)"
            fontFamily="sans-serif"
          >
            4Digital
          </text>

          {/* Top Arc Text: للخدمات الرقمية */}
          <text fill="#ffffff" fontSize="13" fontWeight="bold" letterSpacing="1" fontFamily="'Cairo', sans-serif">
            <textPath href="#topTextArc" startOffset="50%" textAnchor="middle">
              للخدمات الرقمية
            </textPath>
          </text>

          {/* Bottom Arc Text: +20 01205132328 */}
          <text fill="#ffffff" fontSize="11.5" fontWeight="bold" letterSpacing="1.2" fontFamily="sans-serif">
            <textPath href="#bottomTextArc" startOffset="50%" textAnchor="middle">
              +20 01205132328
            </textPath>
          </text>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className={`font-black text-xl md:text-2xl tracking-tight font-sans ${isLight ? 'text-slate-900' : 'text-white'}`}>
              فور ديجيتال
            </span>
            <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
              isLight 
                ? 'bg-sky-100 text-sky-800 border border-sky-200' 
                : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
            }`}>
              4Digital
            </span>
          </div>
          <span className={`text-xs font-medium tracking-wide ${isLight ? 'text-slate-500' : 'text-cyan-300/80'}`}>
            للخدمات الرقمية وتصميم واستضافة المواقع
          </span>
        </div>
      )}
    </div>
  );
};
