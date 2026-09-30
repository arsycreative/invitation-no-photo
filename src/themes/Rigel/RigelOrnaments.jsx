/**
 * RIGEL BESPOKE ORNAMENTS
 * Authentic Whimsical Nursery Scrapbook & Floating Crib Mobile Elements
 * 100% Unique to Rigel Theme (No floral flourishes, no generic shields)
 */

export function RigelNurseryMobile({ className = '' }) {
  return (
    <div className={`rigel-nursery-mobile-wrapper ${className}`}>
      <svg
        viewBox="0 0 460 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="rigel-nursery-mobile-svg"
      >
        <defs>
          <linearGradient id="woodBarGrad" x1="50" y1="20" x2="410" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#b45309" />
            <stop offset="15%" stopColor="#fde68a" />
            <stop offset="50%" stopColor="#d97706" />
            <stop offset="85%" stopColor="#fde68a" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>
          <linearGradient id="moonGlowGrad" x1="30" y1="50" x2="90" y2="120" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="100%" stopColor="#eab308" />
          </linearGradient>
          <linearGradient id="cloudGrad" x1="140" y1="60" x2="210" y2="120" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#bae6fd" />
          </linearGradient>
          <linearGradient id="onesieGrad" x1="260" y1="60" x2="310" y2="120" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fce7f3" />
            <stop offset="100%" stopColor="#f472b6" />
          </linearGradient>
          <linearGradient id="starGrad" x1="370" y1="50" x2="420" y2="110" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fef9c3" />
            <stop offset="50%" stopColor="#facc15" />
            <stop offset="100%" stopColor="#ca8a04" />
          </linearGradient>
          <filter id="softMobileShadow" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="4" stdDeviation="3.5" floodColor="#0284c7" floodOpacity="0.14" />
          </filter>
        </defs>

        {/* Central Ceiling Ribbon */}
        <line x1="230" y1="0" x2="230" y2="24" stroke="#ca8a04" strokeWidth="2.5" strokeDasharray="3 2" />
        <circle cx="230" cy="24" r="5" fill="#facc15" stroke="#b45309" strokeWidth="1.5" />

        {/* Curved Wooden Mobile Hanger */}
        <path
          d="M 60 40 Q 230 16 400 40"
          stroke="url(#woodBarGrad)"
          strokeWidth="6.5"
          strokeLinecap="round"
          filter="url(#softMobileShadow)"
        />
        {/* Mobile Bar Accent Rivets */}
        <circle cx="64" cy="39" r="4.5" fill="#ca8a04" stroke="#ffffff" strokeWidth="1.5" />
        <circle cx="150" cy="31" r="3.5" fill="#ca8a04" stroke="#ffffff" strokeWidth="1" />
        <circle cx="230" cy="27" r="4" fill="#ca8a04" stroke="#ffffff" strokeWidth="1.2" />
        <circle cx="310" cy="31" r="3.5" fill="#ca8a04" stroke="#ffffff" strokeWidth="1" />
        <circle cx="396" cy="39" r="4.5" fill="#ca8a04" stroke="#ffffff" strokeWidth="1.5" />

        {/* ── Suspended Item 1: Crescent Moon (Left) ── */}
        <g className="rigel-mobile-item rigel-item-moon">
          <line x1="64" y1="43" x2="64" y2="68" stroke="#ca8a04" strokeWidth="1.2" strokeDasharray="2 2" />
          <g filter="url(#softMobileShadow)">
            <path
              d="M78 68 C58 68 44 82 44 102 C44 122 58 136 78 136 C68 126 62 114 62 102 C62 90 68 78 78 68 Z"
              fill="url(#moonGlowGrad)"
              stroke="#ffffff"
              strokeWidth="1.5"
            />
            {/* Sleeping Eye */}
            <path d="M52 102 Q56 106 60 102" stroke="#78350f" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            {/* Cheek blush */}
            <circle cx="56" cy="108" r="2.5" fill="#f43f5e" opacity="0.4" />
            <polygon points="68,88 70,93 75,93 71,96 73,101 68,98 64,101 65,96 62,93 67,93" fill="#ffffff" />
          </g>
        </g>

        {/* ── Suspended Item 2: Puffy Sleepy Cloud (Center-Left) ── */}
        <g className="rigel-mobile-item rigel-item-cloud">
          <line x1="150" y1="34" x2="150" y2="72" stroke="#38bdf8" strokeWidth="1.2" strokeDasharray="2 2" />
          <g filter="url(#softMobileShadow)">
            <path
              d="M126 100 C126 94 130 90 135 90 C137 84 143 80 150 82 C154 76 162 76 166 81 C171 80 177 83 178 88 C182 89 186 92 186 97 C186 103 181 107 175 107 H133 C129 107 126 104 126 100 Z"
              fill="url(#cloudGrad)"
              stroke="#ffffff"
              strokeWidth="1.5"
            />
            {/* Smiling Eyes */}
            <path d="M145 95 Q148 97 151 95" stroke="#0284c7" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            <path d="M161 95 Q164 97 167 95" stroke="#0284c7" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            {/* Smile */}
            <path d="M154 99 Q156 102 158 99" stroke="#0284c7" strokeWidth="1" strokeLinecap="round" fill="none" />
            {/* Dangling star drops under cloud */}
            <circle cx="140" cy="116" r="2" fill="#facc15" />
            <circle cx="156" cy="120" r="2.5" fill="#38bdf8" />
            <circle cx="172" cy="115" r="2" fill="#facc15" />
          </g>
        </g>

        {/* ── Suspended Item 3: Sweet Baby Onesie (Center-Right) ── */}
        <g className="rigel-mobile-item rigel-item-onesie">
          <line x1="310" y1="34" x2="310" y2="68" stroke="#f472b6" strokeWidth="1.2" strokeDasharray="2 2" />
          <g filter="url(#softMobileShadow)">
            {/* Onesie Silhouette */}
            <path
              d="M298 68 L292 78 L299 82 L301 75 L301 106 L306 109 L310 102 L314 109 L319 106 L319 75 L321 82 L328 78 L322 68 C318 73 302 73 298 68 Z"
              fill="url(#onesieGrad)"
              stroke="#ffffff"
              strokeWidth="1.5"
            />
            {/* Tiny Heart on Chest */}
            <path
              d="M310 84 C309 82 306 82 306 85 C306 88 310 91 310 91 C310 91 314 88 314 85 C314 82 311 82 310 84 Z"
              fill="#ffffff"
            />
          </g>
        </g>

        {/* ── Suspended Item 4: Twinkling Golden Star (Right) ── */}
        <g className="rigel-mobile-item rigel-item-star">
          <line x1="396" y1="43" x2="396" y2="70" stroke="#ca8a04" strokeWidth="1.2" strokeDasharray="2 2" />
          <g filter="url(#softMobileShadow)">
            <polygon
              points="396,70 401,84 416,84 404,93 408,107 396,98 384,107 388,93 376,84 391,84"
              fill="url(#starGrad)"
              stroke="#ffffff"
              strokeWidth="1.5"
            />
            <circle cx="396" cy="89" r="3" fill="#ffffff" />
          </g>
        </g>
      </svg>
    </div>
  )
}

/**
 * Washi Tape Ornament for scrapbook card corners
 */
export function RigelWashiTape({ color = 'sky', rotation = -3, className = '' }) {
  const bgMap = {
    sky: 'linear-gradient(135deg, rgba(56, 189, 248, 0.75), rgba(186, 230, 253, 0.75))',
    buttercup: 'linear-gradient(135deg, rgba(250, 204, 21, 0.75), rgba(254, 240, 138, 0.75))',
    pink: 'linear-gradient(135deg, rgba(244, 114, 182, 0.75), rgba(252, 231, 243, 0.75))',
    peach: 'linear-gradient(135deg, rgba(251, 146, 60, 0.75), rgba(254, 215, 170, 0.75))',
  }

  return (
    <div
      className={`rigel-washi-tape ${className}`}
      style={{
        width: '64px',
        height: '18px',
        background: bgMap[color] || bgMap.sky,
        transform: `rotate(${rotation}deg)`,
        clipPath: 'polygon(0% 15%, 8% 0%, 100% 0%, 93% 100%, 0% 100%)',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
        borderLeft: '1px dashed rgba(255,255,255,0.7)',
        borderRight: '1px dashed rgba(255,255,255,0.7)',
        pointerEvents: 'none',
        zIndex: 4,
      }}
    />
  )
}

/**
 * Helium Balloon for Countdown & Fun Highlights
 */
export function RigelBalloonUnit({ number, unit, colorIndex = 0 }) {
  const themes = [
    {
      bodyGrad: 'url(#balloonBlueGrad)',
      stroke: '#0284c7',
      knot: '#0284c7',
      textGrad: '#0369a1',
      unitBg: '#e0f2fe',
      unitText: '#0369a1',
      dropShadow: 'rgba(2, 132, 199, 0.25)',
    },
    {
      bodyGrad: 'url(#balloonYellowGrad)',
      stroke: '#ca8a04',
      knot: '#ca8a04',
      textGrad: '#854d0e',
      unitBg: '#fef9c3',
      unitText: '#854d0e',
      dropShadow: 'rgba(202, 138, 4, 0.25)',
    },
    {
      bodyGrad: 'url(#balloonPinkGrad)',
      stroke: '#db2777',
      knot: '#db2777',
      textGrad: '#9d174d',
      unitBg: '#fce7f3',
      unitText: '#9d174d',
      dropShadow: 'rgba(219, 39, 119, 0.25)',
    },
    {
      bodyGrad: 'url(#balloonGreenGrad)',
      stroke: '#059669',
      knot: '#059669',
      textGrad: '#065f46',
      unitBg: '#d1fae5',
      unitText: '#065f46',
      dropShadow: 'rgba(5, 150, 105, 0.25)',
    },
  ]

  const t = themes[colorIndex % themes.length]

  return (
    <div className="rigel-balloon-card">
      <div className="rigel-balloon-oval" style={{ filter: `drop-shadow(0 8px 16px ${t.dropShadow})` }}>
        <svg width="68" height="88" viewBox="0 0 68 88" fill="none">
          <defs>
            <linearGradient id="balloonBlueGrad" x1="10" y1="5" x2="60" y2="75" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#e0f2fe" />
              <stop offset="45%" stopColor="#7dd3fc" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
            <linearGradient id="balloonYellowGrad" x1="10" y1="5" x2="60" y2="75" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#facc15" />
              <stop offset="100%" stopColor="#eab308" />
            </linearGradient>
            <linearGradient id="balloonPinkGrad" x1="10" y1="5" x2="60" y2="75" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#fce7f3" />
              <stop offset="50%" stopColor="#f472b6" />
              <stop offset="100%" stopColor="#db2777" />
            </linearGradient>
            <linearGradient id="balloonGreenGrad" x1="10" y1="5" x2="60" y2="75" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#d1fae5" />
              <stop offset="50%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>

          {/* Balloon Egg Body */}
          <path
            d="M34 4 C16 4 4 18 4 40 C4 60 18 72 32 75 L30 79 H38 L36 75 C50 72 64 60 64 40 C64 18 52 4 34 4 Z"
            fill={t.bodyGrad}
            stroke="#ffffff"
            strokeWidth="1.5"
          />
          {/* Balloon 3D Gloss Highlight Sheen */}
          <ellipse cx="22" cy="22" rx="9" ry="14" transform="rotate(-25 22 22)" fill="#ffffff" opacity="0.55" />
          <ellipse cx="21" cy="18" rx="4" ry="7" transform="rotate(-25 21 18)" fill="#ffffff" opacity="0.8" />

          {/* Balloon Tie Knot */}
          <polygon points="31,78 37,78 34,84" fill={t.knot} />
        </svg>

        {/* Digits embedded inside balloon center */}
        <span className="rigel-balloon-digit">{number}</span>
      </div>

      {/* Dangling Balloon String */}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="rigel-balloon-string">
        <path d="M12 0 Q8 10 14 16 T12 24" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="2 1.5" />
      </svg>

      {/* Unit label tag */}
      <div className="rigel-balloon-unit-pill" style={{ background: t.unitBg, color: t.unitText, borderColor: t.stroke }}>
        {unit}
      </div>
    </div>
  )
}

/**
 * Baby Registry Gift Parcel with Silk Satin Bow
 */
export function RigelGiftParcelBow({ size = 72, className = '' }) {
  return (
    <div className={`rigel-gift-parcel-bow ${className}`} style={{ width: size, height: size, margin: '0 auto 12px' }}>
      <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
        <defs>
          <linearGradient id="bowGoldGrad" x1="20" y1="10" x2="60" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="50%" stopColor="#eab308" />
            <stop offset="100%" stopColor="#ca8a04" />
          </linearGradient>
          <linearGradient id="boxBlueGrad" x1="15" y1="36" x2="65" y2="76" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e0f2fe" />
          </linearGradient>
        </defs>

        {/* Gift Box Body */}
        <rect x="18" y="38" width="44" height="34" rx="6" fill="url(#boxBlueGrad)" stroke="#38bdf8" strokeWidth="1.8" />
        {/* Box Lid */}
        <rect x="14" y="32" width="52" height="10" rx="3" fill="#ffffff" stroke="#38bdf8" strokeWidth="1.8" />

        {/* Box Vertical Satin Ribbon */}
        <rect x="36" y="32" width="8" height="40" fill="url(#bowGoldGrad)" />
        {/* Box Horizontal Satin Ribbon */}
        <rect x="18" y="50" width="44" height="7" fill="url(#bowGoldGrad)" />

        {/* Puffy Ribbon Bow Loops */}
        <path
          d="M40 32 C30 18 16 22 26 31 C32 35 38 33 40 32 Z"
          fill="url(#bowGoldGrad)"
          stroke="#ca8a04"
          strokeWidth="1.2"
        />
        <path
          d="M40 32 C50 18 64 22 54 31 C48 35 42 33 40 32 Z"
          fill="url(#bowGoldGrad)"
          stroke="#ca8a04"
          strokeWidth="1.2"
        />
        {/* Bow Center Knot */}
        <ellipse cx="40" cy="32" rx="4.5" ry="4" fill="#ca8a04" stroke="#fef08a" strokeWidth="1.2" />

        {/* Dangling Bow Ribbons */}
        <path d="M38 34 Q32 46 28 50" stroke="#ca8a04" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M42 34 Q48 46 52 50" stroke="#ca8a04" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    </div>
  )
}

/**
 * Storybook Ribbon Bookmark for Quote
 */
export function RigelStorybookRibbon() {
  return (
    <div className="rigel-storybook-ribbon">
      <svg width="26" height="44" viewBox="0 0 26 44" fill="none">
        <path d="M0 0 H26 V38 L13 30 L0 38 Z" fill="#eab308" />
        <path d="M3 0 H23 V34 L13 27 L3 34 Z" fill="#facc15" />
        <circle cx="13" cy="14" r="3.5" fill="#ca8a04" />
      </svg>
    </div>
  )
}

/**
 * Delicate Baby Cloud Divider
 */
export function RigelCloudDivider({ className = '' }) {
  return (
    <div className={`rigel-cloud-divider ${className}`}>
      <div className="rigel-divider-line" />
      <div className="rigel-divider-cloud-center">
        <svg width="34" height="22" viewBox="0 0 34 22" fill="none">
          <path
            d="M8 17 C4 17 2 14 3 11 C4 8 7 7 10 9 C11 5 15 3 20 4 C24 5 26 8 26 11 C29 11 32 13 32 16 C32 19 29 21 26 21 H9 C7 21 6 19 8 17 Z"
            fill="#e0f2fe"
            stroke="#38bdf8"
            strokeWidth="1.4"
          />
          <circle cx="17" cy="11" r="2.5" fill="#facc15" />
        </svg>
      </div>
      <div className="rigel-divider-line" />
    </div>
  )
}
