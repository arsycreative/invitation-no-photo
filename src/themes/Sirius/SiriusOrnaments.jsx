import React from 'react'

/**
 * SiriusOrnaments.jsx
 * Bespoke Islamic Geometric & Gold Arabesque Vector Ornaments for Theme Sirius
 * (Royal Islamic Emerald × Gold Leaf × Ivory)
 */

/** Intricate 8-pointed star (Rub el Hizb) Royal Islamic Crest */
export function SiriusRoyalCrest({ size = 80, className = '' }) {
  return (
    <div
      className={`sirius-royal-crest ${className}`}
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
          <linearGradient id="goldGradientCrest" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="35%" stopColor="#f59e0b" />
            <stop offset="70%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#fbbf24" />
          </linearGradient>
          <radialGradient id="goldInnerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#f59e0b" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer ambient glow */}
        <circle cx="50" cy="50" r="46" fill="url(#goldInnerGlow)" />

        {/* Outer circular dotted ring */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="url(#goldGradientCrest)"
          strokeWidth="1.2"
          strokeDasharray="2 3.5"
          opacity="0.8"
        />

        {/* Outer hairline solid ring */}
        <circle cx="50" cy="50" r="41" stroke="url(#goldGradientCrest)" strokeWidth="0.8" opacity="0.6" />

        {/* Primary 8-Point Star (Two Intersecting Squares: 0° and 45°) */}
        <rect
          x="22"
          y="22"
          width="56"
          height="56"
          stroke="url(#goldGradientCrest)"
          strokeWidth="1.8"
          fill="rgba(4, 54, 39, 0.4)"
          rx="2"
        />
        <rect
          x="22"
          y="22"
          width="56"
          height="56"
          transform="rotate(45 50 50)"
          stroke="url(#goldGradientCrest)"
          strokeWidth="1.8"
          fill="rgba(4, 54, 39, 0.4)"
          rx="2"
        />

        {/* Secondary Inner Star (Intersecting squares: 22.5° and 67.5°) */}
        <rect
          x="30"
          y="30"
          width="40"
          height="40"
          transform="rotate(22.5 50 50)"
          stroke="url(#goldGradientCrest)"
          strokeWidth="1"
          opacity="0.75"
          fill="none"
        />
        <rect
          x="30"
          y="30"
          width="40"
          height="40"
          transform="rotate(67.5 50 50)"
          stroke="url(#goldGradientCrest)"
          strokeWidth="1"
          opacity="0.75"
          fill="none"
        />

        {/* Inner concentric ring */}
        <circle cx="50" cy="50" r="16" stroke="url(#goldGradientCrest)" strokeWidth="1.2" fill="rgba(6, 78, 59, 0.6)" />
        <circle cx="50" cy="50" r="12" stroke="url(#goldGradientCrest)" strokeWidth="0.7" strokeDasharray="1.5 2" opacity="0.85" />

        {/* Center Golden 8-Point Diamond Starburst */}
        <path
          d="M50 38 L52.5 47.5 L62 50 L52.5 52.5 L50 62 L47.5 52.5 L38 50 L47.5 47.5 Z"
          fill="url(#goldGradientCrest)"
        />
        <circle cx="50" cy="50" r="2.8" fill="#ffffff" />

        {/* 8 Cardinal Star Pearls on Ring */}
        <circle cx="50" cy="5" r="1.8" fill="url(#goldGradientCrest)" />
        <circle cx="50" cy="95" r="1.8" fill="url(#goldGradientCrest)" />
        <circle cx="5" cy="50" r="1.8" fill="url(#goldGradientCrest)" />
        <circle cx="95" cy="50" r="1.8" fill="url(#goldGradientCrest)" />
        <circle cx="18" cy="18" r="1.5" fill="url(#goldGradientCrest)" />
        <circle cx="82" cy="18" r="1.5" fill="url(#goldGradientCrest)" />
        <circle cx="18" cy="82" r="1.5" fill="url(#goldGradientCrest)" />
        <circle cx="82" cy="82" r="1.5" fill="url(#goldGradientCrest)" />
      </svg>
    </div>
  )
}

/** Grand Islamic Arabesque Watermark */
export function SiriusIslamicWatermark({ size = 500, opacity = 0.05, className = '' }) {
  return (
    <div
      className={`sirius-islamic-watermark ${className}`}
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
        width="100%"
        height="100%"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="250" cy="250" r="240" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="3 5" />
        <circle cx="250" cy="250" r="225" stroke="#f59e0b" strokeWidth="0.8" />
        <circle cx="250" cy="250" r="200" stroke="#f59e0b" strokeWidth="1.4" />
        <circle cx="250" cy="250" r="160" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="250" cy="250" r="110" stroke="#f59e0b" strokeWidth="1.2" />
        <circle cx="250" cy="250" r="60" stroke="#f59e0b" strokeWidth="1.5" />

        {/* 12-Fold / 8-Fold Interlocking Polygons */}
        <polygon
          points="250,50 391,109 450,250 391,391 250,450 109,391 50,250 109,109"
          stroke="#f59e0b"
          strokeWidth="1.4"
          fill="none"
        />
        <polygon
          points="250,50 391,109 450,250 391,391 250,450 109,391 50,250 109,109"
          transform="rotate(22.5 250 250)"
          stroke="#f59e0b"
          strokeWidth="1"
          fill="none"
        />
        <polygon
          points="250,50 391,109 450,250 391,391 250,450 109,391 50,250 109,109"
          transform="rotate(45 250 250)"
          stroke="#f59e0b"
          strokeWidth="1.4"
          fill="none"
        />

        {/* Central Geometric Medallion */}
        <rect x="175" y="175" width="150" height="150" stroke="#f59e0b" strokeWidth="1.2" fill="none" />
        <rect x="175" y="175" width="150" height="150" transform="rotate(45 250 250)" stroke="#f59e0b" strokeWidth="1.2" fill="none" />

        {/* Radiant Spokes */}
        {Array.from({ length: 16 }).map((_, i) => (
          <line
            key={i}
            x1="250"
            y1="250"
            x2="250"
            y2="20"
            transform={`rotate(${i * 22.5} 250 250)`}
            stroke="#f59e0b"
            strokeWidth="0.75"
            strokeDasharray="6 6"
          />
        ))}

        {/* Floral Arabesque Petals */}
        {Array.from({ length: 8 }).map((_, i) => (
          <path
            key={`petal-${i}`}
            d="M250 190 Q225 140 250 90 Q275 140 250 190 Z"
            transform={`rotate(${i * 45} 250 250)`}
            stroke="#f59e0b"
            strokeWidth="1"
            fill="none"
          />
        ))}
      </svg>
    </div>
  )
}

/** Islamic Geometric Corner Flourish (Gold Interlaced Hairlines) */
export function SiriusCornerFlourish({ size = 56, className = '' }) {
  return (
    <div
      className={`sirius-corner-flourish ${className}`}
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
        <path d="M4 52 L4 12 C4 7.58 7.58 4 12 4 L52 4" stroke="#f59e0b" strokeWidth="1.5" />
        <path d="M10 52 L10 16 C10 12.69 12.69 10 16 10 L52 10" stroke="#fde68a" strokeWidth="0.8" opacity="0.7" />

        {/* Corner 8-Point Star Knot */}
        <rect x="8" y="8" width="10" height="10" stroke="#f59e0b" strokeWidth="1" fill="#043627" rx="1" />
        <rect x="8" y="8" width="10" height="10" transform="rotate(45 13 13)" stroke="#fde68a" strokeWidth="1" fill="#043627" rx="1" />
        <circle cx="13" cy="13" r="1.5" fill="#fde68a" />

        {/* Accent dots */}
        <circle cx="34" cy="4" r="1.2" fill="#f59e0b" />
        <circle cx="4" cy="34" r="1.2" fill="#f59e0b" />
        <circle cx="48" cy="4" r="1.5" fill="#fde68a" />
        <circle cx="4" cy="48" r="1.5" fill="#fde68a" />
      </svg>
    </div>
  )
}

/** Horizontal Islamic Divider with 8-Point Star and Crescent */
export function SiriusDivider({ width = '100%', maxWidth = 340, className = '' }) {
  return (
    <div
      className={`sirius-divider ${className}`}
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
      <svg width="100%" height="24" viewBox="0 0 340 24" fill="none">
        <defs>
          <linearGradient id="divGoldLeft" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="70%" stopColor="#f59e0b" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="divGoldRight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="70%" stopColor="#f59e0b" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Left Tapered Line */}
        <line x1="20" y1="12" x2="148" y2="12" stroke="url(#divGoldLeft)" strokeWidth="1.2" />
        <circle cx="130" cy="12" r="1.5" fill="#fde68a" />

        {/* Center 8-Point Star */}
        <rect x="165" y="7" width="10" height="10" stroke="#f59e0b" strokeWidth="1.2" fill="#043627" rx="0.5" />
        <rect x="165" y="7" width="10" height="10" transform="rotate(45 170 12)" stroke="#fde68a" strokeWidth="1.2" fill="#043627" rx="0.5" />
        <circle cx="170" cy="12" r="2" fill="#fef08a" />

        {/* Right Tapered Line */}
        <circle cx="210" cy="12" r="1.5" fill="#fde68a" />
        <line x1="192" y1="12" x2="320" y2="12" stroke="url(#divGoldRight)" strokeWidth="1.2" />
      </svg>
    </div>
  )
}

/** Ambient Twinkling Islamic Gold Stars */
export function SiriusFloatingStars() {
  const stars = [
    { top: '8%', left: '12%', size: 4, delay: '0s', dur: '4s' },
    { top: '15%', left: '88%', size: 5, delay: '1.2s', dur: '4.8s' },
    { top: '28%', left: '8%', size: 3.5, delay: '2.5s', dur: '5.2s' },
    { top: '42%', left: '92%', size: 4.5, delay: '0.8s', dur: '4.2s' },
    { top: '58%', left: '10%', size: 3, delay: '3.1s', dur: '5.5s' },
    { top: '72%', left: '86%', size: 4, delay: '1.8s', dur: '4.6s' },
    { top: '85%', left: '14%', size: 5, delay: '2.2s', dur: '5s' },
    { top: '92%', left: '82%', size: 3.5, delay: '0.5s', dur: '4.4s' },
  ]

  return (
    <div className="sirius-floating-stars-wrap" aria-hidden="true">
      {stars.map((s, idx) => (
        <span
          key={idx}
          className="sirius-star-sparkle"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
            animationDuration: s.dur,
          }}
        >
          ✦
        </span>
      ))}
    </div>
  )
}
