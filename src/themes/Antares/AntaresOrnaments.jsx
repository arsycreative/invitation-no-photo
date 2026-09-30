import React from 'react'

/**
 * AntaresOrnaments.jsx
 * High-Contrast Sterling Silver & Royal Champagne Vector Ornaments
 * Theme: Antares (Silver Wedding Anniversary / Peringatan 25 Tahun Pernikahan Perak)
 */

/** Majestic 25th Silver Jubilee Royal Laurel Crest (High Contrast) */
export function AntaresSilverJubileeCrest({ size = 88, className = '' }) {
  return (
    <div
      className={`antares-silver-crest ${className}`}
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
          <linearGradient id="antaresSlateSilverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="40%" stopColor="#1e293b" />
            <stop offset="75%" stopColor="#334155" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="antaresChampagneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d4af37" />
            <stop offset="45%" stopColor="#b4863e" />
            <stop offset="85%" stopColor="#8c5d2e" />
            <stop offset="100%" stopColor="#68421c" />
          </linearGradient>
          <radialGradient id="antaresMedallionBg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="80%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#f1f5f9" />
          </radialGradient>
        </defs>

        {/* Crisp Medallion Background Disc */}
        <circle cx="50" cy="50" r="46" fill="url(#antaresMedallionBg)" stroke="#cbd5e1" strokeWidth="1" />

        {/* Outer dotted jubilee ring */}
        <circle
          cx="50"
          cy="50"
          r="43"
          stroke="url(#antaresChampagneGrad)"
          strokeWidth="1.2"
          strokeDasharray="2 3"
          opacity="0.85"
        />

        {/* Outer solid hairline ring */}
        <circle cx="50" cy="50" r="39" stroke="#1e293b" strokeWidth="0.8" opacity="0.65" />

        {/* Inner laurel wreath frame */}
        <circle cx="50" cy="50" r="29" stroke="url(#antaresChampagneGrad)" strokeWidth="1" strokeDasharray="3 2" opacity="0.75" />

        {/* Royal Crown / 5-Point Star at top */}
        <path
          d="M50 14 L52.5 19 L58 19.5 L53.8 23.2 L55.2 28.5 L50 25.5 L44.8 28.5 L46.2 23.2 L42 19.5 L47.5 19 Z"
          fill="url(#antaresChampagneGrad)"
        />

        {/* Crisp High-Contrast "25" Typography */}
        <text
          x="50"
          y="56"
          textAnchor="middle"
          fill="url(#antaresSlateSilverGrad)"
          fontFamily="'Playfair Display', Georgia, serif"
          fontSize="24"
          fontWeight="800"
          letterSpacing="-0.02em"
        >
          25
        </text>

        {/* Deep Slate Ribbon with Silver Text */}
        <rect x="31" y="62" width="38" height="9" rx="4.5" fill="#1e293b" />
        <text
          x="50"
          y="68.5"
          textAnchor="middle"
          fill="#f8fafc"
          fontFamily="'Montserrat', sans-serif"
          fontSize="5.5"
          fontWeight="800"
          letterSpacing="0.22em"
        >
          SILVER
        </text>

        {/* Royal Laurel branches flanking left & right */}
        <path d="M22 50 C22 39 27 31 35 25" stroke="#1e293b" strokeWidth="1.6" strokeLinecap="round" opacity="0.8" />
        <path d="M78 50 C78 39 73 31 65 25" stroke="#1e293b" strokeWidth="1.6" strokeLinecap="round" opacity="0.8" />
        <path d="M22 50 C22 62 28 72 36 76" stroke="url(#antaresChampagneGrad)" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M78 50 C78 62 72 72 64 76" stroke="url(#antaresChampagneGrad)" strokeWidth="1.6" strokeLinecap="round" />

        {/* Mini Accent Star Sparkles */}
        <circle cx="19" cy="19" r="1.8" fill="url(#antaresChampagneGrad)" />
        <circle cx="81" cy="19" r="1.8" fill="url(#antaresChampagneGrad)" />
        <circle cx="19" cy="81" r="1.8" fill="url(#antaresChampagneGrad)" />
        <circle cx="81" cy="81" r="1.8" fill="url(#antaresChampagneGrad)" />
      </svg>
    </div>
  )
}

/** Grand Silver Jubilee Starburst & Laurel Rosette Watermark (Subtle & Clean) */
export function AntaresSilverWatermark({ size = 480, opacity = 0.045, className = '' }) {
  return (
    <div
      className={`antares-silver-watermark ${className}`}
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
        <circle cx="200" cy="200" r="180" stroke="#334155" strokeWidth="1.2" strokeDasharray="3 4" />
        <circle cx="200" cy="200" r="165" stroke="#475569" strokeWidth="0.8" />
        <circle cx="200" cy="200" r="130" stroke="#334155" strokeWidth="1" strokeDasharray="5 3" />
        <circle cx="200" cy="200" r="80" stroke="#475569" strokeWidth="1.2" />

        {/* 16 Radiating Silver Starburst Facets */}
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i * 360) / 16
          const rad = (angle * Math.PI) / 180
          const x1 = 200 + 80 * Math.cos(rad)
          const y1 = 200 + 80 * Math.sin(rad)
          const x2 = 200 + 165 * Math.cos(rad)
          const y2 = 200 + 165 * Math.sin(rad)
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#334155"
              strokeWidth="0.8"
            />
          )
        })}

        {/* Central Laurel Wreath Rosette (Clean & Non-Interfering) */}
        <circle cx="200" cy="200" r="45" stroke="#334155" strokeWidth="1.2" strokeDasharray="3 2" />
        <circle cx="200" cy="200" r="28" stroke="#b4863e" strokeWidth="0.8" opacity="0.6" />
        <circle cx="200" cy="200" r="6" fill="#b4863e" opacity="0.4" />
      </svg>
    </div>
  )
}

/** High-Contrast Royal Corner Flourish */
export function AntaresCornerFlourish({ size = 52, className = '' }) {
  return (
    <div
      className={`antares-corner-flourish ${className}`}
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
          d="M6 6 H44 C44 6 32 18 20 30 C8 42 6 54 6 54"
          stroke="#1e293b"
          strokeWidth="1.4"
          opacity="0.75"
        />
        <path
          d="M6 6 V44"
          stroke="#b4863e"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M6 6 H44"
          stroke="#b4863e"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="6" cy="6" r="3" fill="#1e293b" />
        <circle cx="44" cy="6" r="2.2" fill="#b4863e" />
        <circle cx="6" cy="44" r="2.2" fill="#b4863e" />
        {/* Diamond Rosette Accent */}
        <polygon points="18,18 24,14 30,18 24,22" fill="#1e293b" opacity="0.65" />
      </svg>
    </div>
  )
}

/** High-Contrast Divider with 8-Pointed Star */
export function AntaresDivider({ width = 240, className = '' }) {
  return (
    <div
      className={`antares-divider ${className}`}
      style={{
        width,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '18px auto',
        gap: '8px',
      }}
    >
      <div
        style={{
          flex: 1,
          height: '1.2px',
          background: 'linear-gradient(90deg, transparent, rgba(30, 41, 59, 0.4))',
        }}
      />
      <svg width="34" height="20" viewBox="0 0 34 20" fill="none">
        <path d="M17 2 L19 8 L25 10 L19 12 L17 18 L15 12 L9 10 L15 8 Z" fill="#1e293b" />
        <circle cx="17" cy="10" r="2" fill="#b4863e" />
        <circle cx="5" cy="10" r="1.5" fill="#b4863e" />
        <circle cx="29" cy="10" r="1.5" fill="#b4863e" />
      </svg>
      <div
        style={{
          flex: 1,
          height: '1.2px',
          background: 'linear-gradient(90deg, rgba(30, 41, 59, 0.4), transparent)',
        }}
      />
    </div>
  )
}

/** Ambient Floating Silver & Champagne Sparkles (Disabled to prevent visual clutter) */
export function AntaresFloatingSparkles() {
  return null
}
