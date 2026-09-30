/**
 * ALDEBARAN BESPOKE ORNAMENTS
 * Sacred Illuminated Islamic Manuscript & Moorish Mihrab Arch Architecture
 * Designed for Majelis Tahlil, Pengajian, Khotmil Qur'an & Doa Bersama
 */

export function AldebaranMihrabArch({ className = '' }) {
  return (
    <div className={`aldebaran-mihrab-arch-wrapper ${className}`}>
      <svg
        viewBox="0 0 440 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="aldebaran-mihrab-svg"
      >
        <defs>
          <linearGradient id="goldBrassGrad" x1="0" y1="0" x2="440" y2="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ca8a04" />
            <stop offset="25%" stopColor="#fef08a" />
            <stop offset="50%" stopColor="#eab308" />
            <stop offset="75%" stopColor="#fef08a" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>
          <linearGradient id="lapisGrad" x1="40" y1="20" x2="400" y2="160" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#081b33" />
            <stop offset="50%" stopColor="#0c233c" />
            <stop offset="100%" stopColor="#0a192c" />
          </linearGradient>
          <radialGradient id="lampGlow" cx="220" cy="95" r="45" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#eab308" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ca8a04" stopOpacity="0" />
          </radialGradient>
          <filter id="sacredGlow" x="-10%" y="-10%" width="120%" height="125%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#ca8a04" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* ── Outer Arch Border with Arabesque Cresting ── */}
        <path
          d="M 30 180 V 110 C 30 60 110 20 220 20 C 330 20 410 60 410 110 V 180"
          stroke="url(#goldBrassGrad)"
          strokeWidth="3.5"
          fill="none"
        />

        {/* Multi-lobed Cusped Moorish Arch Inner Contour */}
        <path
          d="M 50 180 V 115 
             C 50 95 70 85 90 90
             C 105 75 130 70 150 78
             C 170 58 200 42 220 40
             C 240 42 270 58 290 78
             C 310 70 335 75 350 90
             C 370 85 390 95 390 115
             V 180"
          stroke="url(#goldBrassGrad)"
          strokeWidth="2"
          strokeDasharray="4 2"
          fill="none"
        />

        {/* Apex Pinnacle Finial */}
        <g filter="url(#sacredGlow)">
          <path d="M 220 6 L 223 16 L 220 20 L 217 16 Z" fill="url(#goldBrassGrad)" />
          <circle cx="220" cy="5" r="3" fill="#fef08a" stroke="#b45309" strokeWidth="1" />
          <polygon points="220, -2 222, 3 226, 3 223, 6 224, 10 220, 8 216, 10 217, 6 214, 3 218, 3" fill="#ca8a04" />
        </g>

        {/* Left & Right Column Capital Rosettes */}
        <g fill="url(#goldBrassGrad)">
          <circle cx="30" cy="110" r="5" stroke="#fef08a" strokeWidth="1.2" />
          <circle cx="410" cy="110" r="5" stroke="#fef08a" strokeWidth="1.2" />
        </g>

        {/* ── Hanging Mosque Lantern (Qandil) in Apex ── */}
        <g className="aldebaran-hanging-lamp">
          {/* Suspension Chain */}
          <line x1="220" y1="20" x2="220" y2="70" stroke="#ca8a04" strokeWidth="1.5" strokeDasharray="3 2" />
          <circle cx="220" cy="70" r="3" fill="#eab308" />

          {/* Lamp Aura Glow */}
          <circle cx="220" cy="96" r="38" fill="url(#lampGlow)" />

          {/* Lamp Brass Dome & Cap */}
          <path d="M 210 76 Q 220 68 230 76 L 228 82 H 212 Z" fill="url(#goldBrassGrad)" stroke="#78350f" strokeWidth="0.8" />
          {/* Glass Lantern Body */}
          <path
            d="M 212 82 C 206 90 208 106 214 112 H 226 C 232 106 234 90 228 82 Z"
            fill="#fef9c3"
            fillOpacity="0.85"
            stroke="url(#goldBrassGrad)"
            strokeWidth="1.2"
          />
          {/* Warm Flame / Light Source inside */}
          <ellipse cx="220" cy="96" rx="3.5" ry="7" fill="#f59e0b" />
          <ellipse cx="220" cy="96" rx="2" ry="4" fill="#ffffff" />
          {/* Lower Brass Base & Hanging Tassel */}
          <path d="M 214 112 L 220 118 L 226 112 Z" fill="url(#goldBrassGrad)" />
          <line x1="220" y1="118" x2="220" y2="128" stroke="#ca8a04" strokeWidth="1.5" />
          <circle cx="220" cy="129" r="2" fill="#ca8a04" />
        </g>
      </svg>
    </div>
  )
}

/**
 * Sacred Illuminated Qur'anic Manuscript Unwan (Headpiece)
 */
export function AldebaranMushafUnwan({ title = 'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ', sub = 'MUSHAF AMALIYAH' }) {
  return (
    <div className="aldebaran-unwan-container">
      <div className="aldebaran-unwan-header">
        <svg viewBox="0 0 380 76" fill="none" xmlns="http://www.w3.org/2000/svg" className="aldebaran-unwan-svg">
          <defs>
            <linearGradient id="unwanGold" x1="0" y1="0" x2="380" y2="76" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#b45309" />
              <stop offset="25%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#eab308" />
              <stop offset="75%" stopColor="#fef08a" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
            <linearGradient id="unwanLapis" x1="0" y1="0" x2="380" y2="76" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#081b33" />
              <stop offset="50%" stopColor="#0c233c" />
              <stop offset="100%" stopColor="#081b33" />
            </linearGradient>
          </defs>

          {/* Central Cartouche Box */}
          <rect x="25" y="8" width="330" height="60" rx="10" fill="url(#unwanLapis)" stroke="url(#unwanGold)" strokeWidth="2" />
          {/* Inner Inset Gold Border */}
          <rect x="30" y="13" width="320" height="50" rx="7" stroke="url(#unwanGold)" strokeWidth="1" strokeDasharray="3 2" fill="none" />

          {/* Side Floral Finials (Palmette Wings) */}
          <path d="M 25 38 C 12 38 4 30 2 18 C 10 24 18 28 25 30 Z" fill="url(#unwanGold)" />
          <path d="M 25 38 C 12 38 4 46 2 58 C 10 52 18 48 25 46 Z" fill="url(#unwanGold)" />
          <circle cx="2" cy="38" r="2.5" fill="#fef08a" />

          <path d="M 355 38 C 368 38 376 30 378 18 C 370 24 362 28 355 30 Z" fill="url(#unwanGold)" />
          <path d="M 355 38 C 368 38 376 46 378 58 C 370 52 362 48 355 46 Z" fill="url(#unwanGold)" />
          <circle cx="378" cy="38" r="2.5" fill="#fef08a" />

          {/* Top & Bottom Crown Crests */}
          <polygon points="190,0 196,8 184,8" fill="url(#unwanGold)" />
          <polygon points="190,76 196,68 184,68" fill="url(#unwanGold)" />
        </svg>

        <div className="aldebaran-unwan-text-overlay">
          <span className="aldebaran-unwan-sub">{sub}</span>
          <h3 className="aldebaran-unwan-arabic">{title}</h3>
        </div>
      </div>
    </div>
  )
}

/**
 * Sacred Tasbih (Prayer Beads) Divider
 */
export function AldebaranTasbihDivider({ className = '' }) {
  return (
    <div className={`aldebaran-tasbih-divider ${className}`}>
      <svg width="240" height="28" viewBox="0 0 240 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="amberBead" x1="0" y1="0" x2="10" y2="10" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="50%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>
        </defs>

        {/* Thread */}
        <line x1="10" y1="14" x2="230" y2="14" stroke="#ca8a04" strokeWidth="1" strokeDasharray="2 2" />

        {/* Left String of Beads */}
        <circle cx="30" cy="14" r="4.5" fill="url(#amberBead)" stroke="#fef08a" strokeWidth="0.8" />
        <circle cx="44" cy="14" r="4.5" fill="url(#amberBead)" stroke="#fef08a" strokeWidth="0.8" />
        <circle cx="58" cy="14" r="4.5" fill="url(#amberBead)" stroke="#fef08a" strokeWidth="0.8" />
        <circle cx="72" cy="14" r="4.5" fill="url(#amberBead)" stroke="#fef08a" strokeWidth="0.8" />
        <circle cx="86" cy="14" r="4.5" fill="url(#amberBead)" stroke="#fef08a" strokeWidth="0.8" />

        {/* Central Imam Bead & Tassel */}
        <rect x="115" y="8" width="10" height="12" rx="3" fill="#ca8a04" stroke="#fef08a" strokeWidth="1" />
        <circle cx="120" cy="5" r="2.5" fill="#fef08a" />
        <line x1="120" y1="20" x2="120" y2="27" stroke="#b45309" strokeWidth="2" strokeLinecap="round" />

        {/* Right String of Beads */}
        <circle cx="154" cy="14" r="4.5" fill="url(#amberBead)" stroke="#fef08a" strokeWidth="0.8" />
        <circle cx="168" cy="14" r="4.5" fill="url(#amberBead)" stroke="#fef08a" strokeWidth="0.8" />
        <circle cx="182" cy="14" r="4.5" fill="url(#amberBead)" stroke="#fef08a" strokeWidth="0.8" />
        <circle cx="196" cy="14" r="4.5" fill="url(#amberBead)" stroke="#fef08a" strokeWidth="0.8" />
        <circle cx="210" cy="14" r="4.5" fill="url(#amberBead)" stroke="#fef08a" strokeWidth="0.8" />
      </svg>
    </div>
  )
}

/**
 * 12-Fold Islamic Rosette Watermark (Girih)
 */
export function AldebaranGirihWatermark({ size = 420, opacity = 0.04 }) {
  return (
    <div
      className="aldebaran-girih-watermark"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: size,
        height: size,
        opacity,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="90" stroke="#ca8a04" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="75" stroke="#ca8a04" strokeWidth="1" strokeDasharray="3 3" />
        {/* Star Polygon Interlaces */}
        <polygon points="100,10 123,55 174,26 145,77 190,100 145,123 174,174 123,145 100,190 77,145 26,174 55,123 10,100 55,77 26,26 77,55" stroke="#ca8a04" strokeWidth="1.2" fill="none" />
        <circle cx="100" cy="100" r="40" stroke="#ca8a04" strokeWidth="1" />
        <polygon points="100,60 128,72 140,100 128,128 100,140 72,128 60,100 72,72" stroke="#ca8a04" strokeWidth="1" fill="none" />
      </svg>
    </div>
  )
}

/**
 * Authentic Thuluth Bismillah Calligraphy SVG
 */
export function AldebaranBismillahBadge() {
  return (
    <div className="aldebaran-bismillah-badge">
      <div className="aldebaran-bismillah-arabic">
        بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
      </div>
      <div className="aldebaran-bismillah-latin">
        "Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang"
      </div>
    </div>
  )
}
