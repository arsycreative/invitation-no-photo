/**
 * LYRA BOTANICAL & FLORAL LACE PATTERNS
 * ─────────────────────────────────────────────────────────────
 * Royal Garden Botanical Watermarks & Damask Filigree.
 * Exquisitely detailed SVG geometry in warm rose & champagne gold.
 * Provides rich, delicate background texture and ethereal depth.
 * ─────────────────────────────────────────────────────────────
 */

export function LyraWatermarkCrest({
  size = 420,
  opacity = 0.065,
  className = '',
  style = {},
}) {
  return (
    <div
      className={`lyra-watermark-wrap ${className}`}
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
        ...style,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 400 400"
        fill="none"
        style={{ display: 'block', width: '100%', height: '100%' }}
      >
        <defs>
          <linearGradient id="lyraWmRose" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c4748c" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#c9a06e" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#a05570" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="lyraWmGold" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e8c99a" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#c4748c" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* ── Outer Concentric Botanical Rings ── */}
        <circle cx="200" cy="200" r="190" stroke="url(#lyraWmRose)" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="200" cy="200" r="182" stroke="url(#lyraWmRose)" strokeWidth="0.75" />
        <circle cx="200" cy="200" r="150" stroke="url(#lyraWmGold)" strokeWidth="1" strokeDasharray="2 3" />
        <circle cx="200" cy="200" r="115" stroke="url(#lyraWmRose)" strokeWidth="0.8" />
        <circle cx="200" cy="200" r="80" stroke="url(#lyraWmGold)" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="200" cy="200" r="45" stroke="url(#lyraWmRose)" strokeWidth="1.2" />

        {/* ── 16 Radial Floral Petal Crests ── */}
        {Array.from({ length: 16 }).map((_, i) => {
          const deg = i * 22.5
          return (
            <g key={`petal-${deg}`} transform={`translate(200, 200) rotate(${deg})`}>
              {/* Outer Scalloped Lace Petal */}
              <path
                d="M 0 -182 C 14 -165 14 -145 0 -130 C -14 -145 -14 -165 0 -182 Z"
                fill="url(#lyraWmRose)"
                fillOpacity="0.12"
                stroke="url(#lyraWmRose)"
                strokeWidth="0.8"
              />
              {/* Small Laurel Leaf */}
              <path
                d="M 0 -145 C 8 -135 8 -125 0 -115 C -8 -125 -8 -135 0 -145 Z"
                fill="url(#lyraWmGold)"
                fillOpacity="0.15"
              />
              <circle cx="0" cy="-186" r="2" fill="url(#lyraWmGold)" />
              <line x1="0" y1="-80" x2="0" y2="-115" stroke="url(#lyraWmRose)" strokeWidth="0.6" strokeDasharray="2 2" />
            </g>
          )
        })}

        {/* ── 8 Inner Romantic Floral Petals ── */}
        {Array.from({ length: 8 }).map((_, i) => {
          const deg = i * 45 + 11.25
          return (
            <g key={`inner-${deg}`} transform={`translate(200, 200) rotate(${deg})`}>
              <path
                d="M 0 -80 C 18 -68 18 -55 0 -45 C -18 -55 -18 -68 0 -80 Z"
                fill="url(#lyraWmRose)"
                fillOpacity="0.2"
                stroke="url(#lyraWmGold)"
                strokeWidth="1"
              />
              <circle cx="0" cy="-60" r="2.5" fill="url(#lyraWmGold)" />
            </g>
          )
        })}

        {/* ── Central Blossom Rose ── */}
        <g transform="translate(200, 200)">
          <ellipse cx="0" cy="-12" rx="7" ry="10" fill="url(#lyraWmRose)" fillOpacity="0.25" stroke="url(#lyraWmRose)" strokeWidth="0.8" />
          <ellipse cx="11.4" cy="-3.7" rx="7" ry="10" transform="rotate(72 11.4 -3.7)" fill="url(#lyraWmRose)" fillOpacity="0.25" stroke="url(#lyraWmRose)" strokeWidth="0.8" />
          <ellipse cx="7" cy="9.7" rx="7" ry="10" transform="rotate(144 7 9.7)" fill="url(#lyraWmRose)" fillOpacity="0.25" stroke="url(#lyraWmRose)" strokeWidth="0.8" />
          <ellipse cx="-7" cy="9.7" rx="7" ry="10" transform="rotate(216 -7 9.7)" fill="url(#lyraWmRose)" fillOpacity="0.25" stroke="url(#lyraWmRose)" strokeWidth="0.8" />
          <ellipse cx="-11.4" cy="-3.7" rx="7" ry="10" transform="rotate(288 -11.4 -3.7)" fill="url(#lyraWmRose)" fillOpacity="0.25" stroke="url(#lyraWmRose)" strokeWidth="0.8" />
          <circle cx="0" cy="0" r="5" fill="#fff" fillOpacity="0.7" stroke="url(#lyraWmGold)" strokeWidth="1" />
          <circle cx="0" cy="0" r="2" fill="url(#lyraWmGold)" />
        </g>
      </svg>
    </div>
  )
}

export function LyraSectionFlourish({
  width = 150,
  opacity = 0.7,
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
        margin: '0 auto 16px auto',
        opacity,
        ...style,
      }}
    >
      <svg
        width={width}
        height={width * 0.18}
        viewBox="0 0 150 28"
        fill="none"
      >
        <defs>
          <linearGradient id="lyraFlourishGrad" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#c4748c" stopOpacity="0" />
            <stop offset="30%" stopColor="#c4748c" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#c9a06e" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#c4748c" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#c4748c" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Center Blossom */}
        <g transform="translate(75, 14)">
          <circle cx="0" cy="0" r="3" fill="#c9a06e" />
          <circle cx="0" cy="0" r="5.5" stroke="#c4748c" strokeWidth="0.75" />
          <ellipse cx="0" cy="-5" rx="1.8" ry="2.6" fill="#c4748c" opacity="0.7" />
          <ellipse cx="4.8" cy="-1.5" rx="1.8" ry="2.6" transform="rotate(72 4.8 -1.5)" fill="#c4748c" opacity="0.7" />
          <ellipse cx="3" cy="4" rx="1.8" ry="2.6" transform="rotate(144 3 4)" fill="#c4748c" opacity="0.7" />
          <ellipse cx="-3" cy="4" rx="1.8" ry="2.6" transform="rotate(216 -3 4)" fill="#c4748c" opacity="0.7" />
          <ellipse cx="-4.8" cy="-1.5" rx="1.8" ry="2.6" transform="rotate(288 -4.8 -1.5)" fill="#c4748c" opacity="0.7" />
        </g>

        {/* Left Vine */}
        <path d="M 66 14 C 52 14 38 10 18 14 L 0 14" stroke="url(#lyraFlourishGrad)" strokeWidth="1" strokeLinecap="round" />
        <path d="M 52 12 C 45 7 40 9 38 12 C 43 14 48 14 52 12 Z" fill="url(#lyraFlourishGrad)" opacity="0.75" />
        <path d="M 34 12 C 28 8 23 9 21 12 C 26 14 30 14 34 12 Z" fill="url(#lyraFlourishGrad)" opacity="0.6" />
        <circle cx="18" cy="14" r="1.3" fill="#c9a06e" />

        {/* Right Vine */}
        <path d="M 84 14 C 98 14 112 10 132 14 L 150 14" stroke="url(#lyraFlourishGrad)" strokeWidth="1" strokeLinecap="round" />
        <path d="M 98 12 C 105 7 110 9 112 12 C 107 14 102 14 98 12 Z" fill="url(#lyraFlourishGrad)" opacity="0.75" />
        <path d="M 116 12 C 122 8 127 9 129 12 C 124 14 120 14 116 12 Z" fill="url(#lyraFlourishGrad)" opacity="0.6" />
        <circle cx="132" cy="14" r="1.3" fill="#c9a06e" />
      </svg>
    </div>
  )
}
