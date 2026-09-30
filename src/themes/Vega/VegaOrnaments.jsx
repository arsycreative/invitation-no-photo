/**
 * VEGA BOTANICAL & FLORAL ORNAMENTS
 * ─────────────────────────────────────────────────────────────
 * Royal Celestial Botanical suite: Delicate golden vines, 
 * fine-veined laurel leaves, blooming florals, and soft tendrils.
 * Custom crafted to fit the Midnight Sapphire & Champagne Gold
 * aesthetic with high-fidelity SVG geometry and subtle gold glow.
 * ─────────────────────────────────────────────────────────────
 */

export function VegaBotanicalFlankLeft({
  size = 140,
  opacity = 0.75,
  className = '',
  style = {},
}) {
  const id = 'vega-botanical-left'
  return (
    <svg
      width={size}
      height={size * 2.2}
      viewBox="0 0 100 220"
      fill="none"
      className={className}
      style={{
        filter: 'drop-shadow(0 2px 12px rgba(212, 175, 55, 0.25))',
        opacity,
        ...style,
      }}
    >
      <defs>
        <linearGradient id={`${id}-stem`} x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#d4af37" stopOpacity="0.2" />
          <stop offset="40%" stopColor="#e9d18c" stopOpacity="0.85" />
          <stop offset="80%" stopColor="#fff3d1" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#d4af37" stopOpacity="0.3" />
        </linearGradient>

        <linearGradient id={`${id}-leaf`} x1="100%" y1="50%" x2="0%" y2="50%">
          <stop offset="0%" stopColor="#d4af37" stopOpacity="0.65" />
          <stop offset="50%" stopColor="#e9d18c" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#fff6db" stopOpacity="0.25" />
        </linearGradient>

        <linearGradient id={`${id}-petal`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff8e7" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#e9d18c" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#c59b27" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/* ── Main Curving Stem ── */}
      <path
        d="M92 220 C88 180 72 145 55 110 C42 82 45 45 68 12 C72 5 75 2 78 0"
        stroke={`url(#${id}-stem)`}
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />

      {/* Secondary branch lower */}
      <path
        d="M68 150 C50 162 38 180 32 205"
        stroke={`url(#${id}-stem)`}
        strokeWidth="0.9"
        strokeLinecap="round"
        fill="none"
      />

      {/* Secondary branch upper */}
      <path
        d="M48 95 C32 85 24 68 20 48"
        stroke={`url(#${id}-stem)`}
        strokeWidth="0.9"
        strokeLinecap="round"
        fill="none"
      />

      {/* Tendril spiral 1 */}
      <path
        d="M55 110 C38 116 30 128 35 136 C40 142 48 138 46 130 C44 124 38 126 37 130"
        stroke={`url(#${id}-stem)`}
        strokeWidth="0.75"
        fill="none"
      />

      {/* Tendril spiral 2 (top) */}
      <path
        d="M62 30 C50 25 44 14 50 8 C55 3 62 8 58 15"
        stroke={`url(#${id}-stem)`}
        strokeWidth="0.7"
        fill="none"
      />

      {/* ── Leaves (Bottom to Top) ── */}
      {/* Leaf 1 (low left) */}
      <path
        d="M75 185 C55 182 42 195 38 212 C52 214 70 204 75 185 Z"
        fill={`url(#${id}-leaf)`}
        stroke={`url(#${id}-stem)`}
        strokeWidth="0.75"
      />
      <path d="M75 185 C58 195 48 205 38 212" stroke={`url(#${id}-stem)`} strokeWidth="0.6" fill="none" />

      {/* Leaf 2 (low right) */}
      <path
        d="M78 175 C88 165 96 172 98 185 C88 188 80 184 78 175 Z"
        fill={`url(#${id}-leaf)`}
        stroke={`url(#${id}-stem)`}
        strokeWidth="0.7"
      />

      {/* Leaf 3 (mid left) */}
      <path
        d="M60 135 C38 128 26 142 22 158 C38 162 55 152 60 135 Z"
        fill={`url(#${id}-leaf)`}
        stroke={`url(#${id}-stem)`}
        strokeWidth="0.75"
      />
      <path d="M60 135 C42 144 32 152 22 158" stroke={`url(#${id}-stem)`} strokeWidth="0.6" fill="none" />

      {/* Leaf 4 (mid right) */}
      <path
        d="M58 120 C72 110 82 118 85 130 C74 135 64 130 58 120 Z"
        fill={`url(#${id}-leaf)`}
        stroke={`url(#${id}-stem)`}
        strokeWidth="0.7"
      />

      {/* Leaf 5 (upper mid left) */}
      <path
        d="M48 85 C28 76 18 90 14 105 C28 110 44 100 48 85 Z"
        fill={`url(#${id}-leaf)`}
        stroke={`url(#${id}-stem)`}
        strokeWidth="0.75"
      />
      <path d="M48 85 C32 92 22 100 14 105" stroke={`url(#${id}-stem)`} strokeWidth="0.6" fill="none" />

      {/* Leaf 6 (upper right) */}
      <path
        d="M52 65 C66 55 76 62 78 74 C68 78 58 74 52 65 Z"
        fill={`url(#${id}-leaf)`}
        stroke={`url(#${id}-stem)`}
        strokeWidth="0.7"
      />

      {/* Leaf 7 (top left) */}
      <path
        d="M58 35 C42 22 36 34 34 46 C46 48 56 42 58 35 Z"
        fill={`url(#${id}-leaf)`}
        stroke={`url(#${id}-stem)`}
        strokeWidth="0.75"
      />

      {/* Leaf 8 (terminal tip) */}
      <path
        d="M68 15 C62 5 72 -2 78 0 C80 8 76 14 68 15 Z"
        fill={`url(#${id}-leaf)`}
        stroke={`url(#${id}-stem)`}
        strokeWidth="0.7"
      />

      {/* ── Blooming Floral Blossoms ── */}
      {/* Main Floral Bloom at mid-stem (x: 52, y: 105) */}
      <g transform="translate(52, 105)">
        {/* 5 Petals */}
        <ellipse cx="0" cy="-9" rx="4.5" ry="6.5" fill={`url(#${id}-petal)`} />
        <ellipse cx="8.5" cy="-3" rx="4.5" ry="6.5" transform="rotate(72 8.5 -3)" fill={`url(#${id}-petal)`} />
        <ellipse cx="5.5" cy="7.5" rx="4.5" ry="6.5" transform="rotate(144 5.5 7.5)" fill={`url(#${id}-petal)`} />
        <ellipse cx="-5.5" cy="7.5" rx="4.5" ry="6.5" transform="rotate(216 -5.5 7.5)" fill={`url(#${id}-petal)`} />
        <ellipse cx="-8.5" cy="-3" rx="4.5" ry="6.5" transform="rotate(288 -8.5 -3)" fill={`url(#${id}-petal)`} />
        {/* Flower Center Stamen */}
        <circle cx="0" cy="0" r="3.2" fill="#fff8e7" stroke="#c59b27" strokeWidth="0.6" />
        <circle cx="0" cy="0" r="1.4" fill="#d4af37" />
      </g>

      {/* Small Floral Bud at upper branch (x: 20, y: 48) */}
      <g transform="translate(20, 48) rotate(-25)">
        <path d="M0 0 C-4 -6 -2 -12 3 -14 C7 -12 8 -6 4 0 Z" fill={`url(#${id}-petal)`} />
        <path d="M-2 -2 C-6 -8 -4 -13 0 -15" stroke={`url(#${id}-stem)`} strokeWidth="0.6" fill="none" />
        <circle cx="1" cy="-8" r="1.2" fill="#fff" opacity="0.8" />
      </g>

      {/* Small Floral Bud at lower branch (x: 32, y: 205) */}
      <g transform="translate(32, 205) rotate(20)">
        <path d="M0 0 C-3 -5 -1 -10 3 -11 C6 -10 7 -5 3 0 Z" fill={`url(#${id}-petal)`} />
        <circle cx="1.5" cy="-6" r="1.1" fill="#fff" opacity="0.8" />
      </g>

      {/* Golden Dewdrops / Light Glimmers */}
      <circle cx="44" cy="188" r="1.8" fill="#fff8e7" opacity="0.85" />
      <circle cx="28" cy="142" r="1.5" fill="#fff8e7" opacity="0.85" />
      <circle cx="36" cy="38" r="1.6" fill="#fff8e7" opacity="0.9" />
      <circle cx="70" cy="72" r="1.4" fill="#fff8e7" opacity="0.75" />
    </svg>
  )
}

export function VegaBotanicalFlankRight({
  size = 140,
  opacity = 0.75,
  className = '',
  style = {},
}) {
  return (
    <div
      className={className}
      style={{
        display: 'inline-block',
        transform: 'scaleX(-1)',
        transformOrigin: 'center center',
        ...style,
      }}
    >
      <VegaBotanicalFlankLeft size={size} opacity={opacity} />
    </div>
  )
}

/* ═════════════════════════════════════════════════════════
   VEGA CORNER LAUREL — Refined framing corner foliage
   ═════════════════════════════════════════════════════════ */
export function VegaCornerLaurel({
  size = 90,
  opacity = 0.65,
  position = 'top-left',
  style = {},
}) {
  const transforms = {
    'top-left': 'none',
    'top-right': 'scaleX(-1)',
    'bottom-left': 'scaleY(-1)',
    'bottom-right': 'scale(-1, -1)',
  }

  return (
    <div
      style={{
        width: size,
        height: size,
        transform: transforms[position] || 'none',
        pointerEvents: 'none',
        ...style,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        style={{
          filter: 'drop-shadow(0 2px 8px rgba(212, 175, 55, 0.2))',
          opacity,
        }}
      >
        <defs>
          <linearGradient id="vcl-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff3d1" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#e9d18c" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#bfa139" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Outer Corner Frame Hairlines */}
        <path d="M4 36 L4 12 C4 7.6 7.6 4 12 4 L36 4" stroke="url(#vcl-gold)" strokeWidth="1" strokeLinecap="round" />
        <circle cx="4" cy="40" r="1.5" fill="#e9d18c" />
        <circle cx="40" cy="4" r="1.5" fill="#e9d18c" />

        {/* Curving Botanical Branch */}
        <path
          d="M8 8 C22 18 38 28 55 24 C70 20 80 10 92 4"
          stroke="url(#vcl-gold)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M8 8 C18 22 28 38 24 55 C20 70 10 80 4 92"
          stroke="url(#vcl-gold)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* Laurel Leaves along top branch */}
        <path d="M22 16 C30 10 38 12 40 18 C32 20 25 18 22 16 Z" fill="url(#vcl-gold)" opacity="0.65" />
        <path d="M42 22 C50 16 58 18 60 25 C52 27 45 25 42 22 Z" fill="url(#vcl-gold)" opacity="0.65" />
        <path d="M64 21 C72 15 80 18 82 24 C74 26 67 24 64 21 Z" fill="url(#vcl-gold)" opacity="0.55" />

        {/* Laurel Leaves along left branch */}
        <path d="M16 22 C10 30 12 38 18 40 C20 32 18 25 16 22 Z" fill="url(#vcl-gold)" opacity="0.65" />
        <path d="M22 42 C16 50 18 58 25 60 C27 52 25 45 22 42 Z" fill="url(#vcl-gold)" opacity="0.65" />
        <path d="M21 64 C15 72 18 80 24 82 C26 74 24 67 21 64 Z" fill="url(#vcl-gold)" opacity="0.55" />

        {/* Central Corner Blossom */}
        <circle cx="10" cy="10" r="3" fill="#fff8e7" stroke="#d4af37" strokeWidth="0.8" />
        <circle cx="10" cy="10" r="1.2" fill="#d4af37" />
      </svg>
    </div>
  )
}

/* ═════════════════════════════════════════════════════════
   VEGA FLORAL HEADER ACCENT — Center crest garland
   ═════════════════════════════════════════════════════════ */
export function VegaHeaderCrest({
  width = 160,
  opacity = 0.8,
  className = '',
  style = {},
}) {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        opacity,
        ...style,
      }}
    >
      <svg
        width={width}
        height={width * 0.22}
        viewBox="0 0 160 36"
        fill="none"
        style={{ filter: 'drop-shadow(0 2px 8px rgba(212, 175, 55, 0.25))' }}
      >
        <defs>
          <linearGradient id="vhc-gold" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0" />
            <stop offset="25%" stopColor="#e9d18c" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#fff6db" stopOpacity="0.95" />
            <stop offset="75%" stopColor="#e9d18c" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Center Rose / Blossom */}
        <g transform="translate(80, 18)">
          <ellipse cx="0" cy="-5" rx="3" ry="4" fill="#fff6db" opacity="0.9" />
          <ellipse cx="5" cy="0" rx="3" ry="4" transform="rotate(72 5 0)" fill="#e9d18c" opacity="0.85" />
          <ellipse cx="3" cy="5" rx="3" ry="4" transform="rotate(144 3 5)" fill="#e9d18c" opacity="0.85" />
          <ellipse cx="-3" cy="5" rx="3" ry="4" transform="rotate(216 -3 5)" fill="#e9d18c" opacity="0.85" />
          <ellipse cx="-5" cy="0" rx="3" ry="4" transform="rotate(288 -5 0)" fill="#e9d18c" opacity="0.85" />
          <circle cx="0" cy="1" r="2.2" fill="#ffffff" />
          <circle cx="0" cy="1" r="1" fill="#d4af37" />
        </g>

        {/* Left Laurel Vine */}
        <path d="M72 18 C58 18 42 14 20 18 L0 18" stroke="url(#vhc-gold)" strokeWidth="1" />
        <path d="M60 16 C52 10 46 12 44 16 C50 18 56 18 60 16 Z" fill="url(#vhc-gold)" opacity="0.7" />
        <path d="M42 16 C34 10 28 12 26 16 C32 18 38 18 42 16 Z" fill="url(#vhc-gold)" opacity="0.6" />
        <circle cx="20" cy="18" r="1.5" fill="#fff6db" />

        {/* Right Laurel Vine */}
        <path d="M88 18 C102 18 118 14 140 18 L160 18" stroke="url(#vhc-gold)" strokeWidth="1" />
        <path d="M100 16 C108 10 114 12 116 16 C110 18 104 18 100 16 Z" fill="url(#vhc-gold)" opacity="0.7" />
        <path d="M118 16 C126 10 132 12 134 16 C128 18 122 18 118 16 Z" fill="url(#vhc-gold)" opacity="0.6" />
        <circle cx="140" cy="18" r="1.5" fill="#fff6db" />
      </svg>
    </div>
  )
}
