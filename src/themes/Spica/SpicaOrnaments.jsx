import React from 'react'

/**
 * SpicaOrnaments.jsx
 * Bespoke Mediterranean Terracotta × Champagne Silk Vector Ornaments
 * Theme: Spica (The Engagement Ceremony / Pertunangan & Lamaran)
 */

/** Exquisite Interlocking Engagement Ring Royal Crest */
export function SpicaRingCrest({ size = 80, className = '' }) {
  return (
    <div
      className={`spica-ring-crest ${className}`}
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
          <linearGradient id="spicaTerracottaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ea580c" />
            <stop offset="45%" stopColor="#c2410c" />
            <stop offset="85%" stopColor="#9a3412" />
            <stop offset="100%" stopColor="#7c2d12" />
          </linearGradient>
          <linearGradient id="spicaGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef3c7" />
            <stop offset="35%" stopColor="#f59e0b" />
            <stop offset="70%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>
          <radialGradient id="spicaGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ea580c" stopOpacity="0.25" />
            <stop offset="60%" stopColor="#c2410c" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#c2410c" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Halo Aura */}
        <circle cx="50" cy="50" r="46" fill="url(#spicaGlow)" />

        {/* Outer dotted ornamental circle */}
        <circle
          cx="50"
          cy="50"
          r="44"
          stroke="url(#spicaTerracottaGrad)"
          strokeWidth="1.2"
          strokeDasharray="2 3.5"
          opacity="0.65"
        />

        {/* Outer fine hairline ring */}
        <circle cx="50" cy="50" r="40" stroke="url(#spicaGoldGrad)" strokeWidth="0.8" opacity="0.75" />

        {/* Mediterranean Arch Outline Motif */}
        <path
          d="M32 68 V42 C32 32 68 32 68 42 V68"
          stroke="url(#spicaTerracottaGrad)"
          strokeWidth="1"
          strokeDasharray="3 2"
          opacity="0.5"
        />

        {/* Interlocking Engagement Rings */}
        {/* Ring 1 (Left - Terracotta & Gold) */}
        <circle
          cx="42"
          cy="52"
          r="16"
          stroke="url(#spicaTerracottaGrad)"
          strokeWidth="2.8"
          fill="none"
        />
        {/* Ring 2 (Right - Pure Gold) */}
        <circle
          cx="58"
          cy="52"
          r="16"
          stroke="url(#spicaGoldGrad)"
          strokeWidth="2.8"
          fill="none"
        />

        {/* Solitaire Diamond Gem on Ring 1 */}
        <path
          d="M42 31 L48 37 L42 43 L36 37 Z"
          fill="url(#spicaGoldGrad)"
          stroke="#ffffff"
          strokeWidth="0.8"
        />
        <circle cx="42" cy="37" r="2.2" fill="#ffffff" />

        {/* Laurel Sprigs flanking top */}
        <path d="M50 10 Q53 15 50 19 Q47 15 50 10 Z" fill="url(#spicaTerracottaGrad)" opacity="0.8" />
        <path d="M50 90 Q53 85 50 81 Q47 85 50 90 Z" fill="url(#spicaTerracottaGrad)" opacity="0.8" />
        <path d="M10 50 Q15 47 19 50 Q15 53 10 50 Z" fill="url(#spicaTerracottaGrad)" opacity="0.8" />
        <path d="M90 50 Q85 47 81 50 Q85 53 90 50 Z" fill="url(#spicaTerracottaGrad)" opacity="0.8" />

        {/* Mini 4-point star sparkles */}
        <path d="M72 28 L73.5 32 L77.5 33.5 L73.5 35 L72 39 L70.5 35 L66.5 33.5 L70.5 32 Z" fill="url(#spicaGoldGrad)" />
      </svg>
    </div>
  )
}

/** Grand Mediterranean Arch Watermark for Section Backgrounds */
export function SpicaTerracottaWatermark({ size = 480, opacity = 0.06, className = '' }) {
  return (
    <div
      className={`spica-terracotta-watermark ${className}`}
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
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Nested Grand Mediterranean Archway */}
        <path
          d="M80 340 V180 C80 113.7 133.7 60 200 60 C266.3 60 320 113.7 320 180 V340"
          stroke="#c2410c"
          strokeWidth="2"
        />
        <path
          d="M105 340 V180 C105 127.5 147.5 85 200 85 C252.5 85 295 127.5 295 180 V340"
          stroke="#c2410c"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />
        <path
          d="M130 340 V180 C130 141.3 161.3 110 200 110 C238.7 110 270 141.3 270 180 V340"
          stroke="#c2410c"
          strokeWidth="1.5"
        />

        {/* Central Sunburst Radiating Lines from Arch Center */}
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i * 180) / 15
          const rad = (angle * Math.PI) / 180
          const x1 = 200 + 40 * Math.cos(rad)
          const y1 = 180 - 40 * Math.sin(rad)
          const x2 = 200 + 105 * Math.cos(rad)
          const y2 = 180 - 105 * Math.sin(rad)
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#c2410c"
              strokeWidth="0.9"
              opacity="0.75"
            />
          )
        })}

        {/* Interlocking Rings Emblem in Arch Center */}
        <circle cx="185" cy="220" r="32" stroke="#c2410c" strokeWidth="2.5" />
        <circle cx="215" cy="220" r="32" stroke="#d97706" strokeWidth="2.5" />
        <polygon points="185,182 195,194 175,194" fill="#d97706" />

        {/* Base Pedestal Line */}
        <line x1="60" y1="340" x2="340" y2="340" stroke="#c2410c" strokeWidth="2.5" />
        <line x1="40" y1="352" x2="360" y2="352" stroke="#c2410c" strokeWidth="1" strokeDasharray="3 3" />
      </svg>
    </div>
  )
}

/** Corner Flourish (Mediterranean Tuscan Scroll & Olive Leaves) */
export function SpicaCornerFlourish({ size = 52, className = '' }) {
  return (
    <div
      className={`spica-corner-flourish ${className}`}
      style={{
        width: size,
        height: size,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 6 H42 C42 6 30 18 18 30 C6 42 6 54 6 54"
          stroke="#c2410c"
          strokeWidth="1.5"
          opacity="0.8"
        />
        <path
          d="M6 6 V42"
          stroke="#d97706"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M6 6 H42"
          stroke="#d97706"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="6" cy="6" r="3" fill="#c2410c" />
        <circle cx="42" cy="6" r="2.2" fill="#d97706" />
        <circle cx="6" cy="42" r="2.2" fill="#d97706" />
        {/* Delicate Olive Leaf */}
        <path
          d="M18 18 Q26 12 32 18 Q26 24 18 18 Z"
          fill="#c2410c"
          opacity="0.7"
        />
      </svg>
    </div>
  )
}

/** Ornamental Divider with Interlocking Proposal Rings & Diamond */
export function SpicaDivider({ width = 240, className = '' }) {
  return (
    <div
      className={`spica-divider ${className}`}
      style={{
        width,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '20px auto',
        gap: '8px',
      }}
    >
      <div
        style={{
          flex: 1,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(194, 65, 12, 0.45))',
        }}
      />
      <svg width="36" height="20" viewBox="0 0 36 20" fill="none">
        <circle cx="14" cy="10" r="7" stroke="#c2410c" strokeWidth="1.5" fill="none" />
        <circle cx="22" cy="10" r="7" stroke="#d97706" strokeWidth="1.5" fill="none" />
        <circle cx="14" cy="3" r="1.5" fill="#d97706" />
      </svg>
      <div
        style={{
          flex: 1,
          height: '1px',
          background: 'linear-gradient(90deg, rgba(194, 65, 12, 0.45), transparent)',
        }}
      />
    </div>
  )
}

/** Ambient Floating Sparkles */
export function SpicaFloatingSparkles() {
  const sparkles = [
    { top: '8%', left: '12%', size: 4, delay: '0s', dur: '4s' },
    { top: '24%', right: '14%', size: 5, delay: '1s', dur: '5s' },
    { top: '42%', left: '8%', size: 3, delay: '2s', dur: '4.5s' },
    { top: '65%', right: '10%', size: 6, delay: '0.5s', dur: '5.5s' },
    { top: '82%', left: '15%', size: 4, delay: '1.5s', dur: '4s' },
  ]

  return (
    <div
      className="spica-sparkles-container"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 1,
      }}
    >
      {sparkles.map((sp, idx) => (
        <span
          key={idx}
          className="spica-floating-star"
          style={{
            position: 'absolute',
            top: sp.top,
            left: sp.left,
            right: sp.right,
            width: sp.size,
            height: sp.size,
            borderRadius: '50%',
            backgroundColor: '#d97706',
            boxShadow: '0 0 8px #f59e0b',
            opacity: 0.65,
            animation: `spicaGlint ${sp.dur} ease-in-out infinite`,
            animationDelay: sp.delay,
          }}
        />
      ))}
    </div>
  )
}
