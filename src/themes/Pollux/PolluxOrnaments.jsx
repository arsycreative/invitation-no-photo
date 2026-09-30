import React from 'react'

/**
 * PolluxOrnaments.jsx
 * Bespoke Botanical Sage × Honey Gold Vector Ornaments for Theme Pollux
 * (Walimatul Aqiqah & Tasyakuran Kelahiran Bayi)
 */

/** Exquisite Botanical Crescent & Star Royal Emblem */
export function PolluxCrescentCrest({ size = 80, className = '' }) {
  return (
    <div
      className={`pollux-crescent-crest ${className}`}
      style={{
        width: size,
        height: size,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="polluxGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="40%" stopColor="#d4af37" />
            <stop offset="75%" stopColor="#b5934e" />
            <stop offset="100%" stopColor="#e8cf96" />
          </linearGradient>
          <radialGradient id="polluxGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="0.35" />
            <stop offset="65%" stopColor="#b5934e" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#b5934e" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Glow Aura */}
        <circle cx="50" cy="50" r="46" fill="url(#polluxGlow)" />

        {/* Outer dotted ring */}
        <circle
          cx="50"
          cy="50"
          r="44"
          stroke="url(#polluxGoldGrad)"
          strokeWidth="1.2"
          strokeDasharray="2 3.5"
          opacity="0.75"
        />

        {/* Outer solid hairline ring */}
        <circle cx="50" cy="50" r="40" stroke="url(#polluxGoldGrad)" strokeWidth="0.8" opacity="0.6" />

        {/* Inner concentric ring */}
        <circle cx="50" cy="50" r="28" stroke="url(#polluxGoldGrad)" strokeWidth="1" strokeDasharray="1.5 2.5" opacity="0.7" />

        {/* Crescent Moon (Graceful curving Islamic crescent) */}
        <path
          d="M52 24 C36.5 24 24 36.5 24 52 C24 67.5 36.5 80 52 80 C41 76 34 65 34 52 C34 39 41 28 52 24 Z"
          fill="url(#polluxGoldGrad)"
          opacity="0.95"
        />

        {/* 8-Point Blessing Star nestled in the crescent */}
        <path
          d="M58 40 L60 47 L67 49 L60 51 L58 58 L56 51 L49 49 L56 47 Z"
          fill="url(#polluxGoldGrad)"
        />
        <circle cx="58" cy="49" r="1.8" fill="#ffffff" />

        {/* Botanical Olive Leaf sprigs around the outer crest */}
        <path d="M50 8 Q53 14 50 18 Q47 14 50 8 Z" fill="url(#polluxGoldGrad)" opacity="0.8" />
        <path d="M50 92 Q53 86 50 82 Q47 86 50 92 Z" fill="url(#polluxGoldGrad)" opacity="0.8" />
        <path d="M8 50 Q14 47 18 50 Q14 53 8 50 Z" fill="url(#polluxGoldGrad)" opacity="0.8" />
        <path d="M92 50 Q86 47 82 50 Q86 53 92 50 Z" fill="url(#polluxGoldGrad)" opacity="0.8" />

        {/* 4 Diagonal Little Pearls */}
        <circle cx="21" cy="21" r="1.5" fill="url(#polluxGoldGrad)" />
        <circle cx="79" cy="21" r="1.5" fill="url(#polluxGoldGrad)" />
        <circle cx="21" cy="79" r="1.5" fill="url(#polluxGoldGrad)" />
        <circle cx="79" cy="79" r="1.5" fill="url(#polluxGoldGrad)" />
      </svg>
    </div>
  )
}

/** Grand Botanical Islamic Watermark */
export function PolluxBotanicalWatermark({ size = 500, opacity = 0.05, className = '' }) {
  return (
    <div
      className={`pollux-botanical-watermark ${className}`}
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: size,
        height: size,
        pointerEvents: 'none',
        zIndex: 0,
        opacity,
      }}
      aria-hidden="true"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="#b5934e" strokeWidth="1.2">
          {/* Outer circular medallion */}
          <circle cx="250" cy="250" r="235" strokeDasharray="3 5" />
          <circle cx="250" cy="250" r="220" strokeWidth="0.8" />
          <circle cx="250" cy="250" r="180" strokeWidth="1" strokeDasharray="4 6" />

          {/* 12 radiating curved botanical petals */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <g key={deg} transform={`rotate(${deg} 250 250)`}>
              <path d="M250 30 Q275 110 250 180 Q225 110 250 30 Z" fill="none" strokeWidth="1" />
              <path d="M250 70 L250 160" strokeWidth="0.7" strokeDasharray="2 3" />
              <circle cx="250" cy="50" r="3" fill="#b5934e" fillOpacity="0.4" />
            </g>
          ))}

          {/* Inner 8-pointed star */}
          <rect x="175" y="175" width="150" height="150" strokeWidth="1.2" rx="4" />
          <rect x="175" y="175" width="150" height="150" transform="rotate(45 250 250)" strokeWidth="1.2" rx="4" />

          {/* Core rings */}
          <circle cx="250" cy="250" r="85" strokeWidth="1" strokeDasharray="2 3" />
          <circle cx="250" cy="250" r="55" strokeWidth="1.2" />

          {/* Center Crescent and Star */}
          <path
            d="M253 218 C235 218 220 233 220 250 C220 267 235 282 253 282 C240 277 232 265 232 250 C232 235 240 223 253 218 Z"
            fill="#b5934e"
            fillOpacity="0.3"
          />
          <polygon
            points="260,240 262,246 268,247 263,251 264,257 260,253 256,257 257,251 252,247 258,246"
            fill="#b5934e"
            fillOpacity="0.4"
          />
        </g>
      </svg>
    </div>
  )
}

/** Botanical Olive Vine Corner Flourish (Gold Interlaced Vines) */
export function PolluxCornerFlourish({ size = 56, className = '' }) {
  return (
    <div
      className={`pollux-corner-flourish ${className}`}
      style={{
        width: size,
        height: size,
        pointerEvents: 'none',
        zIndex: 5,
      }}
      aria-hidden="true"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Primary Corner L-frame */}
        <path d="M4 52 L4 14 C4 8.48 8.48 4 14 4 L52 4" stroke="#b5934e" strokeWidth="1.5" />
        <path d="M10 52 L10 18 C10 13.58 13.58 10 18 10 L52 10" stroke="#d8b775" strokeWidth="0.8" opacity="0.75" />

        {/* Botanical Olive Leaf Cluster at corner junction */}
        <path d="M14 14 Q22 10 20 18 Q16 22 14 14 Z" fill="#b5934e" opacity="0.85" />
        <path d="M14 14 Q10 22 18 20 Q22 16 14 14 Z" fill="#d8b775" opacity="0.85" />
        <circle cx="14" cy="14" r="2.2" fill="#fef08a" />

        {/* Small olive fruit / pearls */}
        <circle cx="34" cy="4" r="1.3" fill="#b5934e" />
        <circle cx="4" cy="34" r="1.3" fill="#b5934e" />
        <circle cx="48" cy="4" r="1.6" fill="#fde68a" />
        <circle cx="4" cy="48" r="1.6" fill="#fde68a" />
      </svg>
    </div>
  )
}

/** Horizontal Botanical Olive & Crescent Star Divider */
export function PolluxDivider({ width = '100%', maxWidth = 320, className = '' }) {
  return (
    <div
      className={`pollux-divider ${className}`}
      style={{
        width,
        maxWidth,
        margin: '18px auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      aria-hidden="true"
    >
      <svg width="100%" height="24" viewBox="0 0 320 24" fill="none">
        <defs>
          <linearGradient id="pdivGoldLeft" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#b5934e" />
            <stop offset="70%" stopColor="#b5934e" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#b5934e" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="pdivGoldRight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#b5934e" />
            <stop offset="70%" stopColor="#b5934e" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#b5934e" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Left Tapered Rule */}
        <line x1="20" y1="12" x2="135" y2="12" stroke="url(#pdivGoldLeft)" strokeWidth="1.2" />
        {/* Left olive leaf sprig */}
        <path d="M125 12 Q130 7 136 11 Q132 14 125 12 Z" fill="#b5934e" />

        {/* Center Crescent & Star Emblem */}
        <path
          d="M161 6 C153.5 6 148 11.5 148 18 C148 24.5 153.5 30 161 30 C156 28 152.5 23 152.5 18 C152.5 13 156 8.5 161 6 Z"
          fill="#b5934e"
          transform="matrix(0.7 0 0 0.7 48 -0.5)"
        />
        <path
          d="M164 9 L165 12 L168 12.5 L165.5 14.5 L166 17.5 L163.5 15.5 L161 17.5 L161.5 14.5 L159 12.5 L162 12 Z"
          fill="#d8b775"
          transform="matrix(0.7 0 0 0.7 48 -0.5)"
        />

        {/* Right olive leaf sprig */}
        <path d="M195 12 Q190 7 184 11 Q188 14 195 12 Z" fill="#b5934e" />
        {/* Right Tapered Rule */}
        <line x1="185" y1="12" x2="300" y2="12" stroke="url(#pdivGoldRight)" strokeWidth="1.2" />
      </svg>
    </div>
  )
}

/** Ambient Twinkling Gold Blessing Sparkles */
export function PolluxFloatingSparkles() {
  const sparkles = [
    { top: '8%', left: '10%', size: 10, delay: '0s', dur: '4s' },
    { top: '15%', right: '12%', size: 8, delay: '1s', dur: '5s' },
    { top: '35%', left: '7%', size: 7, delay: '2s', dur: '3.5s' },
    { top: '50%', right: '9%', size: 11, delay: '0.5s', dur: '4.5s' },
    { top: '70%', left: '12%', size: 8, delay: '1.5s', dur: '4s' },
    { top: '85%', right: '11%', size: 9, delay: '2.5s', dur: '3.8s' },
  ]

  return (
    <div
      className="pollux-ambient-sparkles-container"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      {sparkles.map((sp, i) => (
        <span
          key={i}
          style={{
            position: 'absolute',
            top: sp.top,
            left: sp.left,
            right: sp.right,
            fontSize: `${sp.size}px`,
            color: '#d4af37',
            opacity: 0.35,
            animation: `polluxTwinkle ${sp.dur} infinite ease-in-out ${sp.delay}`,
          }}
        >
          ✦
        </span>
      ))}
    </div>
  )
}
