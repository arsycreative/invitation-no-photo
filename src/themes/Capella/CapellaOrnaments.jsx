/**
 * CAPELLA BESPOKE ORNAMENTS
 * Distinctive Classical University Convocational & Academic Honors Ornaments
 * Features: Classical Greco-Roman Pediment, Hanging Silk Ribbon Wax Seal, and Transcript Marginalia
 */

export function CapellaGrecoPediment({ className = '', style = {} }) {
  return (
    <div className={`capella-pediment-wrap ${className}`} style={{ width: '100%', maxWidth: 360, margin: '0 auto 12px', ...style }}>
      <svg width="100%" height="46" viewBox="0 0 360 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="pedimentGold" x1="0" y1="0" x2="360" y2="46" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#d97706" />
            <stop offset="50%" stopColor="#ffd966" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>
        </defs>
        {/* Top Triangular Tympanum */}
        <polygon points="180,4 350,22 10,22" fill="#fdfbf7" stroke="url(#pedimentGold)" strokeWidth="1.8" />
        {/* Entablature frieze */}
        <rect x="6" y="22" width="348" height="14" fill="#781d2a" stroke="url(#pedimentGold)" strokeWidth="1.2" />
        <rect x="12" y="24" width="336" height="10" fill="none" stroke="#ffd966" strokeWidth="0.8" strokeDasharray="3 3" />
        {/* Central Laurel Medallion on Tympanum */}
        <circle cx="180" cy="15" r="7" fill="#4a0e17" stroke="url(#pedimentGold)" strokeWidth="1" />
        <circle cx="180" cy="15" r="4.5" fill="#ffd966" />
        {/* Frieze Latin inscription */}
        <text x="180" y="32" textAnchor="middle" fill="#ffd966" fontFamily="'Cinzel', serif" fontSize="7.5" fontWeight="800" letterSpacing="0.25em">
          UNIVERSITAS · VIRTUS ET SCIENTIA
        </text>
        {/* Base cornice line */}
        <line x1="2" y1="38" x2="358" y2="38" stroke="url(#pedimentGold)" strokeWidth="2" />
        <line x1="14" y1="42" x2="346" y2="42" stroke="#781d2a" strokeWidth="1" />
      </svg>
    </div>
  )
}

export function CapellaHangingRibbonSeal({ size = 84, className = '', text = 'CUM LAUDE' }) {
  return (
    <div className={`capella-hanging-ribbon-seal ${className}`} style={{ position: 'relative', width: size, margin: '0 auto' }}>
      <svg width={size} height={size * 1.5} viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="silkRibbon" x1="0" y1="0" x2="100" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4a0e17" />
            <stop offset="25%" stopColor="#781d2a" />
            <stop offset="50%" stopColor="#991b1b" />
            <stop offset="75%" stopColor="#781d2a" />
            <stop offset="100%" stopColor="#4a0e17" />
          </linearGradient>
          <radialGradient id="waxRadial" cx="38%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#b91c1c" />
            <stop offset="50%" stopColor="#781d2a" />
            <stop offset="85%" stopColor="#4a0e17" />
            <stop offset="100%" stopColor="#250409" />
          </radialGradient>
          <filter id="sealDrop" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#000000" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Vertical Silk Ribbon tails */}
        {/* Left Tail */}
        <polygon points="32,0 48,0 48,95 40,84 32,95" fill="url(#silkRibbon)" stroke="#ffd966" strokeWidth="0.8" />
        {/* Right Tail */}
        <polygon points="52,0 68,0 68,95 60,84 52,95" fill="url(#silkRibbon)" stroke="#ffd966" strokeWidth="0.8" />

        {/* Embossed Wax Seal Disc */}
        <g filter="url(#sealDrop)">
          {/* Irregular Wax Edge */}
          <path
            d="M50 32 C62 31 74 37 81 46 C88 55 91 66 88 77 C85 88 77 97 66 102 C55 107 43 105 33 99 C23 93 16 83 14 71 C12 59 18 48 26 40 C33 34 41 32 50 32 Z"
            fill="url(#waxRadial)"
          />
          {/* Inner Golden Stamped Rings */}
          <circle cx="50" cy="68" r="30" stroke="#b45309" strokeWidth="1.4" strokeDasharray="3 2" />
          <circle cx="50" cy="68" r="26" stroke="#ffd966" strokeWidth="0.9" />

          {/* Laurel Sprays inside seal */}
          <path d="M34 68 C34 58 40 50 48 47" stroke="#ffd966" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M66 68 C66 58 60 50 52 47" stroke="#ffd966" strokeWidth="1.4" strokeLinecap="round" />

          {/* Mini Academic Cap inside Seal */}
          <polygon points="50,56 61,61 50,66 39,61" fill="#ffd966" />
          <path d="M43 63 V68 C43 68 46 71 50 71 C54 71 57 68 57 68 V63" stroke="#ffd966" strokeWidth="1" />
          <circle cx="61" cy="68" r="1.2" fill="#ffd966" />
        </g>

        {/* Gold Seal Text */}
        <text
          x="50"
          y="84"
          textAnchor="middle"
          fill="#ffd966"
          fontFamily="'Cinzel', serif"
          fontSize="7"
          fontWeight="900"
          letterSpacing="0.14em"
        >
          {text}
        </text>
      </svg>
    </div>
  )
}

export function CapellaAcademicTranscriptHeader({ title = 'REKAM JEJAK AKADEMIK', faculty = 'FAKULTAS KEDOKTERAN' }) {
  return (
    <div className="capella-transcript-header-box" style={{ width: '100%', marginBottom: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #781d2a', paddingBottom: '8px' }}>
        <div style={{ textAlign: 'left' }}>
          <span style={{ display: 'block', fontFamily: "'Cinzel', serif", fontSize: '9px', fontWeight: 800, color: '#b45309', letterSpacing: '0.18em' }}>
            REG. AKADEMIK NO. 2026/FK/0491
          </span>
          <h3 style={{ margin: '2px 0 0', fontFamily: "'Cinzel', serif", fontSize: '16px', fontWeight: 800, color: '#4a0e17', letterSpacing: '0.05em' }}>
            {title}
          </h3>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ display: 'inline-block', padding: '3px 8px', background: '#781d2a', color: '#fdfbf7', fontFamily: "'Cinzel', serif", fontSize: '8.5px', fontWeight: 700, borderRadius: '3px', letterSpacing: '0.1em' }}>
            TERAKREDITASI UNGGUL
          </span>
        </div>
      </div>
      <div style={{ height: '3px', background: 'linear-gradient(90deg, #b45309 0%, #ffd966 50%, #b45309 100%)', marginTop: '2px' }} />
    </div>
  )
}

export function CapellaQuillDivider({ maxWidth = 260, className = '' }) {
  return (
    <div className={`capella-quill-divider ${className}`} style={{ width: '100%', maxWidth, margin: '20px auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
      <div style={{ flex: 1, height: '1.2px', background: 'linear-gradient(90deg, transparent 0%, #b45309 100%)' }} />
      <svg width="32" height="18" viewBox="0 0 32 18" fill="none">
        {/* Ink nib / Classical diamond */}
        <polygon points="16,2 22,9 16,16 10,9" fill="#781d2a" stroke="#b45309" strokeWidth="1" />
        <circle cx="16" cy="9" r="2.2" fill="#ffd966" />
        <line x1="4" y1="9" x2="8" y2="9" stroke="#b45309" strokeWidth="1" />
        <line x1="24" y1="9" x2="28" y2="9" stroke="#b45309" strokeWidth="1" />
      </svg>
      <div style={{ flex: 1, height: '1.2px', background: 'linear-gradient(90deg, #b45309 0%, transparent 100%)' }} />
    </div>
  )
}
