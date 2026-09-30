import React from 'react'

/**
 * CASTOR ROYAL ORNAMENTS & HERALDIC SUITE
 * ─────────────────────────────────────────────────────────────
 * Imperial Court Insignia, 24K Gold Leaf Filigree,
 * Regal Damask Watermarks & Lacquered Royal Wax Seal.
 * ─────────────────────────────────────────────────────────────
 */

/** Grand Imperial Crown with velvet cap & gold jewels */
export function ImperialCrown({ size = 72, className = '' }) {
  const width = size
  const height = size * 0.72

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 72"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="crownGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f7e49e" />
          <stop offset="25%" stopColor="#d4af37" />
          <stop offset="50%" stopColor="#ffd875" />
          <stop offset="75%" stopColor="#aa7c1e" />
          <stop offset="100%" stopColor="#f5dc8c" />
        </linearGradient>
        <linearGradient id="crownVelvet" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#7a1428" />
          <stop offset="100%" stopColor="#350610" />
        </linearGradient>
        <linearGradient id="crownRuby" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff4d6d" />
          <stop offset="60%" stopColor="#a30826" />
          <stop offset="100%" stopColor="#4a000e" />
        </linearGradient>
        <filter id="crownGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#ffd778" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* Velvet Cushion/Cap */}
      <path
        d="M20 54 C16 38 30 20 50 18 C70 18 84 38 80 54 Z"
        fill="url(#crownVelvet)"
        stroke="url(#crownGold)"
        strokeWidth="0.8"
      />

      {/* Velvet Folds Detail */}
      <path d="M50 18 Q38 35 34 54" stroke="rgba(212,175,55,0.3)" strokeWidth="0.75" fill="none" />
      <path d="M50 18 Q62 35 66 54" stroke="rgba(212,175,55,0.3)" strokeWidth="0.75" fill="none" />

      {/* Crown Golden Diadem Base */}
      <rect x="12" y="54" width="76" height="10" rx="3" fill="url(#crownGold)" stroke="#805b12" strokeWidth="0.75" />
      <path d="M12 59 L88 59" stroke="#604207" strokeWidth="0.5" />

      {/* Pearls & Rubies along Base */}
      <circle cx="18" cy="59" r="2.2" fill="url(#crownRuby)" stroke="#ffd778" strokeWidth="0.5" />
      <circle cx="28" cy="59" r="1.8" fill="#ffffff" stroke="#c9a84c" strokeWidth="0.5" />
      <circle cx="38" cy="59" r="2.2" fill="url(#crownRuby)" stroke="#ffd778" strokeWidth="0.5" />
      <circle cx="50" cy="59" r="2.6" fill="#ffffff" stroke="#d4af37" strokeWidth="0.6" />
      <circle cx="62" cy="59" r="2.2" fill="url(#crownRuby)" stroke="#ffd778" strokeWidth="0.5" />
      <circle cx="72" cy="59" r="1.8" fill="#ffffff" stroke="#c9a84c" strokeWidth="0.5" />
      <circle cx="82" cy="59" r="2.2" fill="url(#crownRuby)" stroke="#ffd778" strokeWidth="0.5" />

      {/* Crown Arches */}
      <path d="M16 54 C18 36 34 24 50 18 C66 24 82 36 84 54" stroke="url(#crownGold)" strokeWidth="3" fill="none" />
      <path d="M32 54 C34 38 42 26 50 18 C58 26 66 38 68 54" stroke="url(#crownGold)" strokeWidth="2" fill="none" strokeDasharray="3 2" />

      {/* Fleur-de-lis Spikes (5 Crown Finials) */}
      {/* Far Left */}
      <path d="M14 54 C12 45 10 40 14 36 C18 40 16 45 18 54 Z" fill="url(#crownGold)" />
      <circle cx="14" cy="35" r="2" fill="#ffffff" stroke="#d4af37" strokeWidth="0.5" />

      {/* Mid Left */}
      <path d="M28 54 C26 42 22 34 29 27 C36 34 32 42 34 54 Z" fill="url(#crownGold)" />
      <circle cx="29" cy="26" r="2.2" fill="url(#crownRuby)" stroke="#ffd778" strokeWidth="0.5" />

      {/* Center Pinnacle Fleur */}
      <path d="M46 54 C44 38 38 24 50 12 C62 24 56 38 54 54 Z" fill="url(#crownGold)" filter="url(#crownGlow)" />
      {/* Cross Pattee on Top of Center Arch */}
      <g transform="translate(50, 8)">
        <path d="M-1.5 -6 L1.5 -6 L1.5 -2 L5 -2 L5 1 L1.5 1 L1.5 5 L-1.5 5 L-1.5 1 L-5 1 L-5 -2 L-1.5 -2 Z" fill="url(#crownGold)" stroke="#604207" strokeWidth="0.4" />
        <circle cx="0" cy="-0.5" r="1.2" fill="#ffffff" />
      </g>

      {/* Mid Right */}
      <path d="M66 54 C68 42 72 34 71 27 C64 34 68 42 72 54 Z" fill="url(#crownGold)" />
      <circle cx="71" cy="26" r="2.2" fill="url(#crownRuby)" stroke="#ffd778" strokeWidth="0.5" />

      {/* Far Right */}
      <path d="M82 54 C84 45 86 40 86 36 C82 40 84 45 86 54 Z" fill="url(#crownGold)" />
      <circle cx="86" cy="35" r="2" fill="#ffffff" stroke="#d4af37" strokeWidth="0.5" />
    </svg>
  )
}

/** Authentic lacquered Crimson Wax Seal with relief gold monogram */
export function RoyalWaxSeal({ size = 76, monogram = 'FA', className = '' }) {
  return (
    <div
      className={`castor-wax-seal-component ${className}`}
      style={{
        width: size,
        height: size,
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: 'drop-shadow(0 6px 14px rgba(45, 10, 18, 0.45))' }}
      >
        <defs>
          <radialGradient id="waxBody" cx="38%" cy="32%" r="65%">
            <stop offset="0%" stopColor="#a8223c" />
            <stop offset="45%" stopColor="#781427" />
            <stop offset="85%" stopColor="#4d0917" />
            <stop offset="100%" stopColor="#29030b" />
          </radialGradient>
          <linearGradient id="waxGoldRelief" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffe79e" />
            <stop offset="35%" stopColor="#d4af37" />
            <stop offset="70%" stopColor="#aa7c1e" />
            <stop offset="100%" stopColor="#fdf0b8" />
          </linearGradient>
          <linearGradient id="waxHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Sculpted Molten Wax Edge */}
        <path
          d="M 50 4 C 62 3 74 8 83 17 C 91 25 96 36 96 48 C 96 61 90 73 82 82 C 73 91 60 97 48 96 C 35 95 24 90 16 81 C 7 71 3 59 4 47 C 5 34 11 23 20 15 C 29 7 40 4 50 4 Z"
          fill="url(#waxBody)"
        />

        {/* Organic Molten Rim Bumps */}
        <path
          d="M50 4 C60 1 73 7 81 14 C89 21 95 31 97 43 C99 55 93 69 84 79 C75 89 61 97 49 96 C37 95 23 93 14 83 C5 73 1 58 3 45 C5 32 14 19 25 11 C34 4 43 5 50 4 Z"
          fill="url(#waxBody)"
          opacity="0.85"
        />

        {/* Gloss highlight arc on top left edge */}
        <path
          d="M 22 18 C 30 11 41 8 52 8 C 65 8 78 14 85 23"
          stroke="url(#waxHighlight)"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Pressed Center Well (Depressed ring) */}
        <circle cx="50" cy="50" r="34" fill="#540e1c" stroke="#32060f" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="32" stroke="url(#waxGoldRelief)" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.8" />
        <circle cx="50" cy="50" r="28" stroke="url(#waxGoldRelief)" strokeWidth="0.6" opacity="0.6" />

        {/* Mini Crown Stamp in Center */}
        <g transform="translate(50, 41) scale(0.38)">
          <path d="M-30 18 L-20 -4 L-8 8 L0 -12 L8 8 L20 -4 L30 18 Z" fill="url(#waxGoldRelief)" />
          <rect x="-30" y="18" width="60" height="6" rx="2" fill="url(#waxGoldRelief)" />
          <circle cx="0" cy="-14" r="3" fill="url(#waxGoldRelief)" />
          <circle cx="-20" cy="-6" r="2.2" fill="url(#waxGoldRelief)" />
          <circle cx="20" cy="-6" r="2.2" fill="url(#waxGoldRelief)" />
        </g>

        {/* Monogram or Decree Text */}
        <text
          x="50"
          y="66"
          textAnchor="middle"
          fill="url(#waxGoldRelief)"
          fontSize="11.5"
          fontFamily="'Cinzel', serif"
          fontWeight="800"
          letterSpacing="0.18em"
        >
          {monogram}
        </text>

        {/* Subtle Star under Monogram */}
        <polygon
          points="50,71 51.5,74.5 55,75 52.5,77 53,80.5 50,78.5 47,80.5 47.5,77 45,75 48.5,74.5"
          fill="url(#waxGoldRelief)"
          opacity="0.85"
        />
      </svg>
    </div>
  )
}

/** Grand Heraldic Crest Watermark for section backgrounds */
export function RoyalHeraldicWatermark({ size = 460, opacity = 0.055, className = '' }) {
  return (
    <div
      className={`castor-heraldic-watermark ${className}`}
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
        style={{ display: 'block', width: '100%', height: '100%' }}
      >
        <defs>
          <linearGradient id="heraldicGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c9a84c" />
            <stop offset="50%" stopColor="#f5e096" />
            <stop offset="100%" stopColor="#aa7c1e" />
          </linearGradient>
        </defs>

        {/* Outer Circular Rings with Stately Accents */}
        <circle cx="200" cy="200" r="190" stroke="url(#heraldicGold)" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="200" cy="200" r="182" stroke="url(#heraldicGold)" strokeWidth="0.75" />
        <circle cx="200" cy="200" r="156" stroke="url(#heraldicGold)" strokeWidth="0.6" strokeDasharray="2 3" />
        <circle cx="200" cy="200" r="130" stroke="url(#heraldicGold)" strokeWidth="0.8" />

        {/* 12 Compass Star Rays */}
        {Array.from({ length: 12 }).map((_, i) => (
          <g key={i} transform={`rotate(${i * 30} 200 200)`}>
            <line x1="200" y1="18" x2="200" y2="44" stroke="url(#heraldicGold)" strokeWidth="0.8" />
            <circle cx="200" cy="18" r="2.2" fill="url(#heraldicGold)" />
            <circle cx="200" cy="44" r="1.5" fill="url(#heraldicGold)" />
          </g>
        ))}

        {/* Center Royal Shield */}
        <path
          d="M200 95 C250 95 270 120 270 170 C270 235 200 275 200 275 C200 275 130 235 130 170 C130 120 150 95 200 95 Z"
          stroke="url(#heraldicGold)"
          strokeWidth="1.8"
          fill="none"
        />
        <path
          d="M200 105 C242 105 258 126 258 168 C258 224 200 260 200 260 C200 260 142 224 142 168 C142 126 158 105 200 105 Z"
          stroke="url(#heraldicGold)"
          strokeWidth="0.8"
          strokeDasharray="3 3"
          fill="none"
        />

        {/* Shield Fleur-de-lis Crest in Center */}
        <g transform="translate(200, 175) scale(0.95)">
          {/* Main Petal */}
          <path d="M0 -42 C12 -28 16 -14 0 8 C-16 -14 -12 -28 0 -42 Z" stroke="url(#heraldicGold)" strokeWidth="1.2" fill="none" />
          <circle cx="0" cy="-44" r="2.5" fill="url(#heraldicGold)" />
          {/* Left Leaf */}
          <path d="M-6 -8 C-24 -24 -44 -12 -38 12 C-26 24 -12 10 -4 4" stroke="url(#heraldicGold)" strokeWidth="1.2" fill="none" />
          {/* Right Leaf */}
          <path d="M6 -8 C24 -24 44 -12 38 12 C26 24 12 10 4 4" stroke="url(#heraldicGold)" strokeWidth="1.2" fill="none" />
          {/* Horizontal Band */}
          <rect x="-24" y="6" width="48" height="5" rx="1.5" stroke="url(#heraldicGold)" strokeWidth="1" fill="none" />
          {/* Lower Tail */}
          <path d="M-8 13 C-12 28 0 38 0 38 C0 38 12 28 8 13" stroke="url(#heraldicGold)" strokeWidth="1" fill="none" />
        </g>

        {/* Laurel Wreath around Shield */}
        <g transform="translate(200, 200)">
          {/* Left Laurel */}
          <path d="M-80 60 C-110 0 -95 -70 -35 -110" stroke="url(#heraldicGold)" strokeWidth="1" fill="none" />
          {/* Right Laurel */}
          <path d="M80 60 C110 0 95 -70 35 -110" stroke="url(#heraldicGold)" strokeWidth="1" fill="none" />
        </g>

        {/* Lower Banner Ribbon */}
        <path
          d="M100 310 Q200 335 300 310 L290 326 Q200 350 110 326 Z"
          stroke="url(#heraldicGold)"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </div>
  )
}

/** Ornate Baroque Corner Filigree for cards and frames */
export function RoyalCornerFiligree({ className = '', style = {} }) {
  return (
    <svg
      className={`castor-royal-corner ${className}`}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <defs>
        <linearGradient id="cornerGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f5e096" />
          <stop offset="60%" stopColor="#c9a84c" />
          <stop offset="100%" stopColor="#8a6114" />
        </linearGradient>
      </defs>

      {/* Main Structural Corner Lines */}
      <path d="M4 4 L38 4 M4 4 L4 38" stroke="url(#cornerGoldGrad)" strokeWidth="1.6" strokeLinecap="square" />
      <path d="M10 4 L10 10 L4 10" stroke="url(#cornerGoldGrad)" strokeWidth="0.8" />
      <path d="M16 4 L16 16 L4 16" stroke="url(#cornerGoldGrad)" strokeWidth="0.5" strokeDasharray="2 2" />

      {/* Corner Pearl Pin */}
      <circle cx="4" cy="4" r="3" fill="url(#cornerGoldGrad)" />
      <circle cx="4" cy="4" r="1.2" fill="#ffffff" />

      {/* Filigree Acanthus Leaf Scroll */}
      <path
        d="M4 22 C14 20 22 14 22 4 C24 16 36 20 44 20 C32 24 24 32 20 44 C20 36 14 24 4 22 Z"
        fill="url(#cornerGoldGrad)"
        fillOpacity="0.22"
        stroke="url(#cornerGoldGrad)"
        strokeWidth="0.8"
      />
      <circle cx="20" cy="20" r="2" fill="url(#cornerGoldGrad)" />
      <path d="M4 32 Q22 28 32 4" stroke="url(#cornerGoldGrad)" strokeWidth="0.75" fill="none" />
    </svg>
  )
}

/** Grand Monarch Divider with fleur-de-lis & diamond jewels */
export function RoyalMonarchDivider({ width = '100%', className = '' }) {
  return (
    <div
      className={`castor-monarch-divider ${className}`}
      style={{
        width,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        margin: '28px 0',
      }}
    >
      <div className="castor-divider-gold-line left" />
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <span style={{ color: '#c9a84c', fontSize: '10px', opacity: 0.7 }}>✦</span>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <polygon
            points="14,2 26,14 14,26 2,14"
            stroke="url(#divGoldGrad)"
            strokeWidth="1.2"
            fill="rgba(201,168,76,0.12)"
          />
          <polygon
            points="14,6 22,14 14,22 6,14"
            stroke="url(#divGoldGrad)"
            strokeWidth="0.6"
            strokeDasharray="1.5 1.5"
            fill="none"
          />
          <circle cx="14" cy="14" r="3.2" fill="url(#divGoldGrad)" />
          <circle cx="14" cy="14" r="1.2" fill="#ffffff" />
          <defs>
            <linearGradient id="divGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f5e096" />
              <stop offset="50%" stopColor="#c9a84c" />
              <stop offset="100%" stopColor="#8a6114" />
            </linearGradient>
          </defs>
        </svg>
        <span style={{ color: '#c9a84c', fontSize: '10px', opacity: 0.7 }}>✦</span>
      </div>
      <div className="castor-divider-gold-line right" />
    </div>
  )
}

/** Floating Golden Embers & Shimmer Dust (Atmospheric Royal Luxury) */
export function GoldDustLayer() {
  const particles = [
    { left: '8%',  top: '12%', size: 3, delay: '0s',  dur: '8s' },
    { left: '22%', top: '28%', size: 2, delay: '2s',  dur: '11s' },
    { left: '38%', top: '8%',  size: 3.5, delay: '1s', dur: '9s' },
    { left: '55%', top: '40%', size: 2.5, delay: '3.5s', dur: '12s' },
    { left: '72%', top: '18%', size: 3, delay: '1.5s', dur: '10s' },
    { left: '88%', top: '32%', size: 2, delay: '4s', dur: '13s' },
    { left: '15%', top: '65%', size: 2.5, delay: '0.8s', dur: '10.5s' },
    { left: '32%', top: '78%', size: 3, delay: '2.5s', dur: '9.5s' },
    { left: '68%', top: '85%', size: 2, delay: '1.2s', dur: '11.5s' },
    { left: '82%', top: '62%', size: 3.5, delay: '3s', dur: '8.5s' },
    { left: '48%', top: '92%', size: 2.5, delay: '4.5s', dur: '12.5s' },
  ]

  return (
    <div className="castor-gold-dust-container" aria-hidden="true">
      {particles.map((p, idx) => (
        <span
          key={idx}
          className="castor-gold-dust-speck"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: p.delay,
            animationDuration: p.dur,
          }}
        />
      ))}
    </div>
  )
}
