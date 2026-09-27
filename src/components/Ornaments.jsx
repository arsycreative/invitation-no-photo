/**
 * DECORATIVE SVG ORNAMENTS
 * ─────────────────────────────────────────────────────
 * Reusable ornamental SVG components for invitation themes.
 * Each is positioned at section edges and animated via
 * the Ornament wrapper from ScrollAnimations.
 * ─────────────────────────────────────────────────────
 */

/* ═════════════════════════════════════════════════════════
   GOLD LEAF — Art deco style leaf/branch ornament.
   For themes: Vega, Altair, Castor
   ═════════════════════════════════════════════════════════ */
export function GoldLeafLeft({ color = 'rgba(201,168,76,0.5)', size = 120 }) {
  return (
    <svg width={size} height={size * 1.8} viewBox="0 0 100 180" fill="none">
      {/* main stem */}
      <path d="M90 180 Q88 140 80 110 Q72 80 65 60 Q58 40 55 20 Q53 10 52 0"
        stroke={color} strokeWidth="1.2" fill="none" />
      {/* left leaves */}
      <path d="M80 110 Q60 100 50 115 Q65 118 80 110Z" fill={color} opacity="0.7"/>
      <path d="M72 85 Q50 78 42 95 Q58 95 72 85Z" fill={color} opacity="0.6"/>
      <path d="M65 62 Q44 58 38 74 Q52 72 65 62Z" fill={color} opacity="0.5"/>
      <path d="M58 42 Q40 40 36 54 Q48 50 58 42Z" fill={color} opacity="0.4"/>
      {/* right leaves */}
      <path d="M82 120 Q95 108 88 96 Q82 108 82 120Z" fill={color} opacity="0.55"/>
      <path d="M74 92 Q88 82 82 70 Q74 82 74 92Z" fill={color} opacity="0.45"/>
      <path d="M66 68 Q78 60 74 48 Q66 58 66 68Z" fill={color} opacity="0.35"/>
      {/* berries */}
      <circle cx="48" cy="108" r="2.5" fill={color} opacity="0.8"/>
      <circle cx="40" cy="88" r="2" fill={color} opacity="0.7"/>
      <circle cx="36" cy="68" r="1.8" fill={color} opacity="0.6"/>
    </svg>
  )
}

export function GoldLeafRight({ color = 'rgba(201,168,76,0.5)', size = 120 }) {
  return (
    <svg width={size} height={size * 1.8} viewBox="0 0 100 180" fill="none" style={{ transform: 'scaleX(-1)' }}>
      <path d="M90 180 Q88 140 80 110 Q72 80 65 60 Q58 40 55 20 Q53 10 52 0"
        stroke={color} strokeWidth="1.2" fill="none" />
      <path d="M80 110 Q60 100 50 115 Q65 118 80 110Z" fill={color} opacity="0.7"/>
      <path d="M72 85 Q50 78 42 95 Q58 95 72 85Z" fill={color} opacity="0.6"/>
      <path d="M65 62 Q44 58 38 74 Q52 72 65 62Z" fill={color} opacity="0.5"/>
      <path d="M58 42 Q40 40 36 54 Q48 50 58 42Z" fill={color} opacity="0.4"/>
      <path d="M82 120 Q95 108 88 96 Q82 108 82 120Z" fill={color} opacity="0.55"/>
      <path d="M74 92 Q88 82 82 70 Q74 82 74 92Z" fill={color} opacity="0.45"/>
      <path d="M66 68 Q78 60 74 48 Q66 58 66 68Z" fill={color} opacity="0.35"/>
      <circle cx="48" cy="108" r="2.5" fill={color} opacity="0.8"/>
      <circle cx="40" cy="88" r="2" fill={color} opacity="0.7"/>
      <circle cx="36" cy="68" r="1.8" fill={color} opacity="0.6"/>
    </svg>
  )
}

/* ═════════════════════════════════════════════════════════
   FLORAL SPRIG — Romantic curved floral branch.
   For themes: Lyra, Deneb, Castor
   ═════════════════════════════════════════════════════════ */
export function FloralSprigLeft({ color = 'rgba(196,116,140,0.45)', accentColor = 'rgba(201,160,110,0.4)', size = 100 }) {
  return (
    <svg width={size} height={size * 2} viewBox="0 0 80 160" fill="none">
      {/* main curving stem */}
      <path d="M70 160 Q68 130 60 108 Q50 82 38 65 Q26 48 20 30 Q16 18 18 0"
        stroke={accentColor} strokeWidth="1" fill="none" />
      {/* flowers */}
      <ellipse cx="38" cy="65" rx="8" ry="10" fill={color} opacity="0.5" transform="rotate(-15,38,65)"/>
      <ellipse cx="38" cy="65" rx="10" ry="8" fill={color} opacity="0.4" transform="rotate(20,38,65)"/>
      <circle cx="38" cy="65" r="3.5" fill={accentColor} opacity="0.7"/>
      {/* buds */}
      <ellipse cx="55" cy="95" rx="5" ry="7" fill={color} opacity="0.5" transform="rotate(-25,55,95)"/>
      <circle cx="55" cy="95" r="2.5" fill={accentColor} opacity="0.6"/>
      <ellipse cx="25" cy="40" rx="4" ry="6" fill={color} opacity="0.4" transform="rotate(10,25,40)"/>
      <circle cx="25" cy="40" r="2" fill={accentColor} opacity="0.5"/>
      {/* leaves */}
      <path d="M52 100 Q40 95 35 108 Q48 106 52 100Z" fill={color} opacity="0.6"/>
      <path d="M34 70 Q20 68 18 82 Q30 78 34 70Z" fill={color} opacity="0.5"/>
      <path d="M24 36 Q14 32 10 44 Q20 42 24 36Z" fill={color} opacity="0.4"/>
      {/* right side leaves */}
      <path d="M62 110 Q72 100 68 90 Q60 100 62 110Z" fill={color} opacity="0.4"/>
      <path d="M42 72 Q52 62 48 52 Q40 62 42 72Z" fill={color} opacity="0.35"/>
    </svg>
  )
}

export function FloralSprigRight({ color = 'rgba(196,116,140,0.45)', accentColor = 'rgba(201,160,110,0.4)', size = 100 }) {
  return (
    <svg width={size} height={size * 2} viewBox="0 0 80 160" fill="none" style={{ transform: 'scaleX(-1)' }}>
      <path d="M70 160 Q68 130 60 108 Q50 82 38 65 Q26 48 20 30 Q16 18 18 0"
        stroke={accentColor} strokeWidth="1" fill="none" />
      <ellipse cx="38" cy="65" rx="8" ry="10" fill={color} opacity="0.5" transform="rotate(-15,38,65)"/>
      <ellipse cx="38" cy="65" rx="10" ry="8" fill={color} opacity="0.4" transform="rotate(20,38,65)"/>
      <circle cx="38" cy="65" r="3.5" fill={accentColor} opacity="0.7"/>
      <ellipse cx="55" cy="95" rx="5" ry="7" fill={color} opacity="0.5" transform="rotate(-25,55,95)"/>
      <circle cx="55" cy="95" r="2.5" fill={accentColor} opacity="0.6"/>
      <ellipse cx="25" cy="40" rx="4" ry="6" fill={color} opacity="0.4" transform="rotate(10,25,40)"/>
      <circle cx="25" cy="40" r="2" fill={accentColor} opacity="0.5"/>
      <path d="M52 100 Q40 95 35 108 Q48 106 52 100Z" fill={color} opacity="0.6"/>
      <path d="M34 70 Q20 68 18 82 Q30 78 34 70Z" fill={color} opacity="0.5"/>
      <path d="M24 36 Q14 32 10 44 Q20 42 24 36Z" fill={color} opacity="0.4"/>
      <path d="M62 110 Q72 100 68 90 Q60 100 62 110Z" fill={color} opacity="0.4"/>
      <path d="M42 72 Q52 62 48 52 Q40 62 42 72Z" fill={color} opacity="0.35"/>
    </svg>
  )
}

/* ═════════════════════════════════════════════════════════
   GEOMETRIC LINE — Minimal art deco angular ornament.
   For themes: Altair
   ═════════════════════════════════════════════════════════ */
export function GeometricLineLeft({ color = 'rgba(201,168,76,0.4)', size = 80 }) {
  return (
    <svg width={size} height={size * 2} viewBox="0 0 60 120" fill="none">
      <line x1="55" y1="0" x2="55" y2="120" stroke={color} strokeWidth="0.75"/>
      <line x1="48" y1="10" x2="48" y2="110" stroke={color} strokeWidth="0.5" opacity="0.6"/>
      <polygon points="55,40 42,50 55,60" fill={color} opacity="0.3"/>
      <polygon points="55,55 42,60 55,65" fill={color} opacity="0.5"/>
      <circle cx="55" cy="30" r="2" fill={color}/>
      <circle cx="55" cy="90" r="2" fill={color}/>
      <line x1="48" y1="30" x2="30" y2="30" stroke={color} strokeWidth="0.5"/>
      <line x1="48" y1="90" x2="30" y2="90" stroke={color} strokeWidth="0.5"/>
    </svg>
  )
}

export function GeometricLineRight({ color = 'rgba(201,168,76,0.4)', size = 80 }) {
  return (
    <svg width={size} height={size * 2} viewBox="0 0 60 120" fill="none" style={{ transform: 'scaleX(-1)' }}>
      <line x1="55" y1="0" x2="55" y2="120" stroke={color} strokeWidth="0.75"/>
      <line x1="48" y1="10" x2="48" y2="110" stroke={color} strokeWidth="0.5" opacity="0.6"/>
      <polygon points="55,40 42,50 55,60" fill={color} opacity="0.3"/>
      <polygon points="55,55 42,60 55,65" fill={color} opacity="0.5"/>
      <circle cx="55" cy="30" r="2" fill={color}/>
      <circle cx="55" cy="90" r="2" fill={color}/>
      <line x1="48" y1="30" x2="30" y2="30" stroke={color} strokeWidth="0.5"/>
      <line x1="48" y1="90" x2="30" y2="90" stroke={color} strokeWidth="0.5"/>
    </svg>
  )
}

/* ═════════════════════════════════════════════════════════
   STAR BURST — Cosmic star/energy burst ornament.
   For themes: Orion
   ═════════════════════════════════════════════════════════ */
export function StarBurstLeft({ color = 'rgba(0,200,255,0.35)', accentColor = 'rgba(255,51,51,0.3)', size = 70 }) {
  return (
    <svg width={size} height={size * 2} viewBox="0 0 50 100" fill="none">
      <line x1="45" y1="0" x2="45" y2="100" stroke={color} strokeWidth="0.75"/>
      <path d="M45 50 L20 42 L45 34" stroke={color} strokeWidth="0.5" fill="none"/>
      <path d="M45 50 L20 58 L45 66" stroke={color} strokeWidth="0.5" fill="none"/>
      <circle cx="45" cy="50" r="4" fill={color} opacity="0.6"/>
      <circle cx="45" cy="50" r="1.5" fill={accentColor}/>
      <circle cx="20" cy="42" r="1.5" fill={color} opacity="0.8"/>
      <circle cx="20" cy="58" r="1.5" fill={color} opacity="0.8"/>
      <path d="M45 20 L30 24 L45 28" stroke={accentColor} strokeWidth="0.5" fill="none"/>
      <path d="M45 72 L30 76 L45 80" stroke={accentColor} strokeWidth="0.5" fill="none"/>
      <circle cx="45" cy="15" r="1" fill={color}/>
      <circle cx="45" cy="85" r="1" fill={color}/>
    </svg>
  )
}

export function StarBurstRight({ color = 'rgba(0,200,255,0.35)', accentColor = 'rgba(255,51,51,0.3)', size = 70 }) {
  return (
    <svg width={size} height={size * 2} viewBox="0 0 50 100" fill="none" style={{ transform: 'scaleX(-1)' }}>
      <line x1="45" y1="0" x2="45" y2="100" stroke={color} strokeWidth="0.75"/>
      <path d="M45 50 L20 42 L45 34" stroke={color} strokeWidth="0.5" fill="none"/>
      <path d="M45 50 L20 58 L45 66" stroke={color} strokeWidth="0.5" fill="none"/>
      <circle cx="45" cy="50" r="4" fill={color} opacity="0.6"/>
      <circle cx="45" cy="50" r="1.5" fill={accentColor}/>
      <circle cx="20" cy="42" r="1.5" fill={color} opacity="0.8"/>
      <circle cx="20" cy="58" r="1.5" fill={color} opacity="0.8"/>
      <path d="M45 20 L30 24 L45 28" stroke={accentColor} strokeWidth="0.5" fill="none"/>
      <path d="M45 72 L30 76 L45 80" stroke={accentColor} strokeWidth="0.5" fill="none"/>
      <circle cx="45" cy="15" r="1" fill={color}/>
      <circle cx="45" cy="85" r="1" fill={color}/>
    </svg>
  )
}

/* ═════════════════════════════════════════════════════════
   BAROQUE FILIGREE — Imperial European scrollwork.
   For themes: Castor
   ═════════════════════════════════════════════════════════ */
export function BaroqueFiligreeLeft({ color = 'rgba(201,168,76,0.6)', size = 90 }) {
  return (
    <svg width={size} height={size * 1.8} viewBox="0 0 80 150" fill="none">
      <path d="M75 140 C60 110 30 115 35 85 C40 55 10 50 15 20 C18 6 35 8 32 25 C30 40 55 45 50 75 C45 100 70 110 75 140 Z"
        stroke={color} strokeWidth="1.2" fill="none" opacity="0.85" />
      <path d="M35 85 C20 85 10 95 18 108 C26 120 45 110 40 95" stroke={color} strokeWidth="0.8" fill="none" opacity="0.7"/>
      <circle cx="18" cy="108" r="2.5" fill={color} />
      <circle cx="32" cy="25" r="3" fill={color} />
      <circle cx="50" cy="75" r="2" fill={color} />
      <path d="M25 45 Q40 55 25 65" stroke={color} strokeWidth="1" fill="none" opacity="0.6"/>
      <path d="M60 125 Q45 130 55 140" stroke={color} strokeWidth="0.8" fill="none" opacity="0.5"/>
    </svg>
  )
}

export function BaroqueFiligreeRight({ color = 'rgba(201,168,76,0.6)', size = 90 }) {
  return (
    <svg width={size} height={size * 1.8} viewBox="0 0 80 150" fill="none" style={{ transform: 'scaleX(-1)' }}>
      <path d="M75 140 C60 110 30 115 35 85 C40 55 10 50 15 20 C18 6 35 8 32 25 C30 40 55 45 50 75 C45 100 70 110 75 140 Z"
        stroke={color} strokeWidth="1.2" fill="none" opacity="0.85" />
      <path d="M35 85 C20 85 10 95 18 108 C26 120 45 110 40 95" stroke={color} strokeWidth="0.8" fill="none" opacity="0.7"/>
      <circle cx="18" cy="108" r="2.5" fill={color} />
      <circle cx="32" cy="25" r="3" fill={color} />
      <circle cx="50" cy="75" r="2" fill={color} />
      <path d="M25 45 Q40 55 25 65" stroke={color} strokeWidth="1" fill="none" opacity="0.6"/>
      <path d="M60 125 Q45 130 55 140" stroke={color} strokeWidth="0.8" fill="none" opacity="0.5"/>
    </svg>
  )
}

/* ═════════════════════════════════════════════════════════
   PASTEL PARTY RIBBON & STARS — Cute swirls for girl bday.
   For themes: Deneb
   ═════════════════════════════════════════════════════════ */
export function PastelPartyLeft({ color1 = '#ff8fab', color2 = '#b8b5e0', color3 = '#ffe66d', size = 80 }) {
  return (
    <svg width={size} height={size * 1.6} viewBox="0 0 70 120" fill="none">
      {/* Streamer swirl */}
      <path d="M65 5 Q40 25 55 50 T45 90 T20 115" stroke={color1} strokeWidth="2.5" strokeLinecap="round" opacity="0.85" fill="none"/>
      <path d="M58 20 Q30 45 42 70 T15 105" stroke={color2} strokeWidth="1.8" strokeLinecap="round" strokeDasharray="3 3" opacity="0.75" fill="none"/>
      {/* Floating cute stars */}
      <polygon points="25,25 28,32 35,32 30,37 32,44 25,40 18,44 20,37 15,32 22,32" fill={color3} opacity="0.9"/>
      <circle cx="48" cy="75" r="4" fill={color1} opacity="0.8"/>
      <circle cx="15" cy="85" r="3" fill={color2} opacity="0.8"/>
      <polygon points="50,10 52,15 57,15 53,18 55,23 50,20 45,23 47,18 43,15 48,15" fill={color2} opacity="0.85"/>
    </svg>
  )
}

export function PastelPartyRight({ color1 = '#ff8fab', color2 = '#b8b5e0', color3 = '#ffe66d', size = 80 }) {
  return (
    <svg width={size} height={size * 1.6} viewBox="0 0 70 120" fill="none" style={{ transform: 'scaleX(-1)' }}>
      <path d="M65 5 Q40 25 55 50 T45 90 T20 115" stroke={color1} strokeWidth="2.5" strokeLinecap="round" opacity="0.85" fill="none"/>
      <path d="M58 20 Q30 45 42 70 T15 105" stroke={color2} strokeWidth="1.8" strokeLinecap="round" strokeDasharray="3 3" opacity="0.75" fill="none"/>
      <polygon points="25,25 28,32 35,32 30,37 32,44 25,40 18,44 20,37 15,32 22,32" fill={color3} opacity="0.9"/>
      <circle cx="48" cy="75" r="4" fill={color1} opacity="0.8"/>
      <circle cx="15" cy="85" r="3" fill={color2} opacity="0.8"/>
      <polygon points="50,10 52,15 57,15 53,18 55,23 50,20 45,23 47,18 43,15 48,15" fill={color2} opacity="0.85"/>
    </svg>
  )
}

