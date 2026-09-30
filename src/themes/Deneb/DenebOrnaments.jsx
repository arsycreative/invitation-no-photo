import React from 'react'

/**
 * DENEB PASTEL FESTIVAL ORNAMENTS
 * ─────────────────────────────────────────────────────────────
 * Bespoke SVG Suite for Girl's Fairytale Birthday Celebration:
 * - Glossy pastel festival balloons with satin ribbons & golden stars
 * - Whimsical scalloped party bunting garland
 * - Dreamy fairytale circular background watermark
 * - Delicate corner starburst flourishes & ribbon bows
 * - Floating pastel confetti & stardust specks
 * ─────────────────────────────────────────────────────────────
 */

/** Cluster of 5 glossy pastel balloons with satin strings & floating sparkles */
export function PastelFestivalBalloons({ size = 110, className = '' }) {
  const width = size
  const height = size * 0.95

  return (
    <div className={`deneb-balloons-cluster ${className}`} style={{ width, height, display: 'inline-block' }}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 160 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible' }}
      >
        <defs>
          {/* Strawberry Pink Balloon Gradient */}
          <radialGradient id="balloonPink" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#ffb3c6" />
            <stop offset="45%" stopColor="#ff6584" />
            <stop offset="100%" stopColor="#e03159" />
          </radialGradient>

          {/* Lilac Lavender Balloon Gradient */}
          <radialGradient id="balloonLilac" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#e9d5ff" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#7e22ce" />
          </radialGradient>

          {/* Mint Sorbet Balloon Gradient */}
          <radialGradient id="balloonMint" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#bbf7d0" />
            <stop offset="50%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#15803d" />
          </radialGradient>

          {/* Sunshine Gold Balloon Gradient */}
          <radialGradient id="balloonGold" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </radialGradient>

          {/* Sky Cyan Balloon Gradient */}
          <radialGradient id="balloonCyan" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#bae6fd" />
            <stop offset="50%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#0284c7" />
          </radialGradient>

          {/* Gold Sparkle Gradient */}
          <linearGradient id="goldSparkle" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>

          {/* Soft Glow Filter */}
          <filter id="pastelGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#ff6584" floodOpacity="0.28" />
          </filter>
        </defs>

        {/* ── Balloon Ribbon Strings (flowing down to center knot) ── */}
        <path d="M40 76 Q60 110 80 142" stroke="rgba(255, 101, 132, 0.45)" strokeWidth="1.2" strokeDasharray="3 2" fill="none" />
        <path d="M120 76 Q100 110 80 142" stroke="rgba(168, 85, 247, 0.45)" strokeWidth="1.2" strokeDasharray="3 2" fill="none" />
        <path d="M60 55 Q70 100 80 142" stroke="rgba(34, 197, 94, 0.45)" strokeWidth="1.2" strokeDasharray="3 2" fill="none" />
        <path d="M100 55 Q90 100 80 142" stroke="rgba(245, 158, 11, 0.45)" strokeWidth="1.2" strokeDasharray="3 2" fill="none" />
        <path d="M80 50 L80 142" stroke="rgba(14, 165, 233, 0.45)" strokeWidth="1.2" strokeDasharray="3 2" fill="none" />

        {/* ── Central Ribbon Knot & Bow ── */}
        <g transform="translate(80, 142)">
          <circle cx="0" cy="0" r="3" fill="#ff477e" />
          <path d="M-2 0 C-8 -6 -14 -2 -6 2 Z" fill="#ff6584" />
          <path d="M2 0 C8 -6 14 -2 6 2 Z" fill="#ff6584" />
          <path d="M-1 2 Q-4 12 -7 18" stroke="#ff477e" strokeWidth="1.2" fill="none" />
          <path d="M1 2 Q4 12 7 18" stroke="#ff477e" strokeWidth="1.2" fill="none" />
        </g>

        {/* ── Back Balloons (Depth) ── */}
        {/* Mint Balloon (Top Left Back) */}
        <g filter="url(#pastelGlow)">
          <ellipse cx="58" cy="46" rx="22" ry="26" fill="url(#balloonMint)" opacity="0.95" />
          {/* Highlight arc */}
          <path d="M48 30 A14 18 0 0 1 66 26" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" fill="none" />
          {/* Knot */}
          <polygon points="58,72 55,77 61,77" fill="#15803d" />
        </g>

        {/* Sunshine Gold Balloon (Top Right Back) */}
        <g filter="url(#pastelGlow)">
          <ellipse cx="102" cy="46" rx="22" ry="26" fill="url(#balloonGold)" opacity="0.95" />
          {/* Highlight arc */}
          <path d="M92 30 A14 18 0 0 1 110 26" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" fill="none" />
          {/* Knot */}
          <polygon points="102,72 99,77 105,77" fill="#d97706" />
        </g>

        {/* ── Middle Balloons ── */}
        {/* Strawberry Pink Balloon (Left Front) */}
        <g filter="url(#pastelGlow)">
          <ellipse cx="38" cy="62" rx="24" ry="28" fill="url(#balloonPink)" />
          {/* Specular highlights */}
          <path d="M28 44 A15 20 0 0 1 48 38" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.75" fill="none" />
          <circle cx="30" cy="54" r="2.5" fill="#ffffff" opacity="0.5" />
          {/* Knot */}
          <polygon points="38,90 34,96 42,96" fill="#e03159" />
        </g>

        {/* Lilac Dream Balloon (Right Front) */}
        <g filter="url(#pastelGlow)">
          <ellipse cx="122" cy="62" rx="24" ry="28" fill="url(#balloonLilac)" />
          {/* Specular highlights */}
          <path d="M112 44 A15 20 0 0 1 132 38" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.75" fill="none" />
          <circle cx="114" cy="54" r="2.5" fill="#ffffff" opacity="0.5" />
          {/* Knot */}
          <polygon points="122,90 118,96 126,96" fill="#7e22ce" />
        </g>

        {/* ── Centerpiece Balloon (Sky Blue - Highest & Grand) ── */}
        <g filter="url(#pastelGlow)">
          <ellipse cx="80" cy="38" rx="26" ry="31" fill="url(#balloonCyan)" />
          {/* Specular highlights */}
          <path d="M68 18 A17 22 0 0 1 92 12" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" opacity="0.8" fill="none" />
          <circle cx="70" cy="30" r="3" fill="#ffffff" opacity="0.55" />
          {/* Knot */}
          <polygon points="80,69 76,75 84,75" fill="#0284c7" />
        </g>

        {/* ── Floating Sparkle Stars ── */}
        <g transform="translate(16, 32)">
          <path d="M0 -6 L1.5 -1.5 L6 0 L1.5 1.5 L0 6 L-1.5 1.5 L-6 0 L-1.5 -1.5 Z" fill="url(#goldSparkle)" />
        </g>
        <g transform="translate(144, 28)">
          <path d="M0 -7 L1.8 -1.8 L7 0 L1.8 1.8 L0 7 L-1.8 1.8 L-7 0 L-1.8 -1.8 Z" fill="url(#goldSparkle)" />
        </g>
        <g transform="translate(80, 2)">
          <path d="M0 -5 L1.2 -1.2 L5 0 L1.2 1.2 L0 5 L-1.2 1.2 L-5 0 L-1.2 -1.2 Z" fill="#ffffff" opacity="0.9" />
        </g>
        <g transform="translate(26, 96)">
          <circle cx="0" cy="0" r="2" fill="#ffd166" />
        </g>
        <g transform="translate(136, 96)">
          <circle cx="0" cy="0" r="2" fill="#ff8fab" />
        </g>
      </svg>
    </div>
  )
}

/** Whimsical scalloped party bunting ribbon garland */
export function PastelRibbonGarland({ width = '100%', className = '' }) {
  return (
    <div className={`deneb-ribbon-garland ${className}`} style={{ width, overflow: 'hidden', lineHeight: 0 }}>
      <svg
        width="100%"
        height="32"
        viewBox="0 0 480 32"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="pennantPink" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffb3c6" />
            <stop offset="100%" stopColor="#ff477e" />
          </linearGradient>
          <linearGradient id="pennantLilac" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e9d5ff" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          <linearGradient id="pennantMint" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#bbf7d0" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
          <linearGradient id="pennantGold" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
          <linearGradient id="pennantSky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#bae6fd" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
        </defs>

        {/* Drooping String Line */}
        <path
          d="M0 6 Q60 16 120 6 Q180 16 240 6 Q300 16 360 6 Q420 16 480 6"
          stroke="rgba(255, 101, 132, 0.4)"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Pennant Flags */}
        {/* Flag 1: Pink */}
        <polygon points="30,10 60,10 45,28" fill="url(#pennantPink)" />
        {/* Flag 2: Lilac */}
        <polygon points="90,9 120,9 105,27" fill="url(#pennantLilac)" />
        {/* Flag 3: Mint */}
        <polygon points="150,9 180,9 165,27" fill="url(#pennantMint)" />
        {/* Flag 4: Gold */}
        <polygon points="210,9 240,9 225,27" fill="url(#pennantGold)" />
        {/* Flag 5: Sky */}
        <polygon points="270,9 300,9 285,27" fill="url(#pennantSky)" />
        {/* Flag 6: Pink */}
        <polygon points="330,9 360,9 345,27" fill="url(#pennantPink)" />
        {/* Flag 7: Lilac */}
        <polygon points="390,9 420,9 405,27" fill="url(#pennantLilac)" />
        {/* Flag 8: Mint */}
        <polygon points="450,10 480,10 465,28" fill="url(#pennantMint)" />

        {/* Tiny Star Jewels on tips */}
        <circle cx="45" cy="28" r="1.5" fill="#fef08a" />
        <circle cx="105" cy="27" r="1.5" fill="#fef08a" />
        <circle cx="165" cy="27" r="1.5" fill="#fef08a" />
        <circle cx="225" cy="27" r="1.5" fill="#fef08a" />
        <circle cx="285" cy="27" r="1.5" fill="#fef08a" />
        <circle cx="345" cy="27" r="1.5" fill="#fef08a" />
        <circle cx="405" cy="27" r="1.5" fill="#fef08a" />
      </svg>
    </div>
  )
}

/** Dreamy Fairytale Carousel Watermark for Section Backgrounds */
export function PastelFairytaleWatermark({ size = 480, opacity = 0.055, className = '' }) {
  return (
    <div
      className={`deneb-fairytale-watermark ${className}`}
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
          <linearGradient id="fairytaleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff477e" />
            <stop offset="35%" stopColor="#a855f7" />
            <stop offset="70%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
        </defs>

        {/* Carousel Rings */}
        <circle cx="200" cy="200" r="190" stroke="url(#fairytaleGrad)" strokeWidth="1.2" strokeDasharray="6 6" />
        <circle cx="200" cy="200" r="176" stroke="url(#fairytaleGrad)" strokeWidth="0.8" />
        <circle cx="200" cy="200" r="150" stroke="url(#fairytaleGrad)" strokeWidth="1" strokeDasharray="3 4" />
        <circle cx="200" cy="200" r="120" stroke="url(#fairytaleGrad)" strokeWidth="0.7" />
        <circle cx="200" cy="200" r="90" stroke="url(#fairytaleGrad)" strokeWidth="1.2" strokeDasharray="4 4" />

        {/* 16 Fairytale Sparkle Compass Points */}
        {Array.from({ length: 16 }).map((_, i) => (
          <g key={i} transform={`rotate(${i * 22.5} 200 200)`}>
            <line x1="200" y1="14" x2="200" y2="40" stroke="url(#fairytaleGrad)" strokeWidth="1" />
            <circle cx="200" cy="14" r="2.5" fill="url(#fairytaleGrad)" />
            <circle cx="200" cy="38" r="1.5" fill="url(#fairytaleGrad)" />
          </g>
        ))}

        {/* Center Carousel Star / Flower */}
        <g transform="translate(200, 200)">
          {Array.from({ length: 8 }).map((_, i) => (
            <path
              key={i}
              d="M0 0 Q15 -35 0 -60 Q-15 -35 0 0 Z"
              fill="url(#fairytaleGrad)"
              opacity="0.25"
              transform={`rotate(${i * 45})`}
            />
          ))}
          <circle cx="0" cy="0" r="18" fill="url(#fairytaleGrad)" opacity="0.3" />
          <circle cx="0" cy="0" r="8" fill="#ffffff" />
        </g>
      </svg>
    </div>
  )
}

/** Sweet Corner Ribbon Bow & Star Flourish */
export function PastelCornerFlourish({ className = '', style = {} }) {
  return (
    <svg
      className={`deneb-corner-flourish ${className}`}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <defs>
        <linearGradient id="cornerPink" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffb3c6" />
          <stop offset="100%" stopColor="#ff477e" />
        </linearGradient>
      </defs>

      {/* Main Corner Border Lines */}
      <path d="M6 6 L36 6 M6 6 L6 36" stroke="url(#cornerPink)" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 6 L12 12 L6 12" stroke="url(#cornerPink)" strokeWidth="1" opacity="0.7" />
      <path d="M18 6 L18 18 L6 18" stroke="url(#cornerPink)" strokeWidth="0.6" strokeDasharray="2 2" opacity="0.5" />

      {/* Corner Pearl Star */}
      <circle cx="6" cy="6" r="3.5" fill="#ff477e" />
      <circle cx="6" cy="6" r="1.5" fill="#ffffff" />

      {/* Sweet Ribbon Bow on Corner */}
      <g transform="translate(18, 18)">
        <path d="M0 0 C-6 -8 -14 -4 -6 2 Z" fill="url(#cornerPink)" opacity="0.85" />
        <path d="M0 0 C8 -6 14 2 2 6 Z" fill="url(#cornerPink)" opacity="0.85" />
        <circle cx="0" cy="0" r="2.5" fill="#a855f7" />
      </g>

      {/* Floating Sparkle */}
      <path d="M30 16 L31.5 19.5 L35 21 L31.5 22.5 L30 26 L28.5 22.5 L25 21 L28.5 19.5 Z" fill="#f59e0b" opacity="0.75" />
    </svg>
  )
}

/** Adorable Birthday Tiara / Princess Crown */
export function PastelPrincessCrown({ size = 48, className = '' }) {
  const width = size
  const height = size * 0.65

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 60 39"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="tiaraGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff" />
          <stop offset="30%" stopColor="#fef08a" />
          <stop offset="70%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
      </defs>

      {/* Base Arch */}
      <path d="M6 34 Q30 38 54 34" stroke="url(#tiaraGold)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M8 30 Q30 34 52 30" stroke="url(#tiaraGold)" strokeWidth="1" strokeDasharray="2 2" fill="none" />

      {/* 5 Tiara Spikes */}
      <path d="M6 34 Q10 22 15 16 Q20 25 24 32" stroke="url(#tiaraGold)" strokeWidth="1.8" fill="rgba(255, 101, 132, 0.15)" />
      <path d="M24 32 Q26 15 30 8 Q34 15 36 32" stroke="url(#tiaraGold)" strokeWidth="2.2" fill="rgba(255, 101, 132, 0.25)" />
      <path d="M36 32 Q40 25 45 16 Q50 22 54 34" stroke="url(#tiaraGold)" strokeWidth="1.8" fill="rgba(255, 101, 132, 0.15)" />

      {/* Pearls & Jewels */}
      <circle cx="30" cy="8" r="3" fill="#ff477e" stroke="#fff" strokeWidth="1" />
      <circle cx="15" cy="16" r="2.2" fill="#a855f7" stroke="#fff" strokeWidth="0.8" />
      <circle cx="45" cy="16" r="2.2" fill="#0ea5e9" stroke="#fff" strokeWidth="0.8" />
      <circle cx="6" cy="34" r="2" fill="#f59e0b" />
      <circle cx="54" cy="34" r="2" fill="#f59e0b" />
      <circle cx="30" cy="22" r="2.5" fill="#fef08a" />
    </svg>
  )
}

/** Ambient Floating Stardust & Candy Specks */
export function PastelFloatingStardust() {
  const specks = [
    { top: '12%', left: '8%', size: 5, delay: '0s', dur: '8s', color: '#ff6584' },
    { top: '22%', left: '88%', size: 6, delay: '1.5s', dur: '9s', color: '#a855f7' },
    { top: '35%', left: '14%', size: 4, delay: '3s', dur: '7s', color: '#0ea5e9' },
    { top: '48%', left: '92%', size: 5, delay: '2s', dur: '8.5s', color: '#22c55e' },
    { top: '60%', left: '6%', size: 6, delay: '4s', dur: '10s', color: '#f59e0b' },
    { top: '72%', left: '85%', size: 4, delay: '0.8s', dur: '7.5s', color: '#ff477e' },
    { top: '85%', left: '12%', size: 5, delay: '2.5s', dur: '9.5s', color: '#8b5cf6' },
    { top: '94%', left: '80%', size: 6, delay: '3.5s', dur: '8s', color: '#10b981' },
  ]

  return (
    <div className="deneb-stardust-container" aria-hidden="true">
      {specks.map((s, i) => (
        <span
          key={i}
          className="deneb-stardust-speck"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
            animationDuration: s.dur,
            backgroundColor: s.color,
          }}
        />
      ))}
    </div>
  )
}
