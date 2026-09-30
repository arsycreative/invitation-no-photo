import { useMemo, Suspense } from 'react'
import { THEMES } from '../themes'
import { CLIENTS } from '../clients'
import './CatalogPage.css'
import './BannerSlide2.css'

/* ── Top-Left Luxury Double-Ring Seal with Laurel Wreath ── */
function TopLeftBrandSeal() {
  return (
    <div className="slide2-brand-seal">
      <svg width="84" height="84" viewBox="0 0 84 84" fill="none">
        {/* Double gold circle */}
        <circle cx="42" cy="42" r="39" stroke="#d4af37" strokeWidth="1.2" strokeOpacity="0.85" />
        <circle cx="42" cy="42" r="34" stroke="#d4af37" strokeWidth="0.8" strokeDasharray="3 3" strokeOpacity="0.65" />
        
        {/* Left Laurel Leaves */}
        <path d="M 22 56 C 18 48 18 36 25 28" stroke="#d4af37" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeOpacity="0.75" />
        <path d="M 19 50 Q 14 47 16 43 Q 21 44 20 49" fill="url(#goldGradSeal)" opacity="0.85" />
        <path d="M 18 42 Q 13 39 16 35 Q 21 37 19 41" fill="url(#goldGradSeal)" opacity="0.85" />
        <path d="M 20 34 Q 16 30 20 27 Q 24 30 21 33" fill="url(#goldGradSeal)" opacity="0.85" />
        <path d="M 24 28 Q 22 23 27 21 Q 29 25 25 27" fill="url(#goldGradSeal)" opacity="0.85" />

        {/* Right Laurel Leaves */}
        <path d="M 62 56 C 66 48 66 36 59 28" stroke="#d4af37" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeOpacity="0.75" />
        <path d="M 65 50 Q 70 47 68 43 Q 63 44 64 49" fill="url(#goldGradSeal)" opacity="0.85" />
        <path d="M 66 42 Q 71 39 68 35 Q 63 37 65 41" fill="url(#goldGradSeal)" opacity="0.85" />
        <path d="M 64 34 Q 68 30 64 27 Q 60 30 63 33" fill="url(#goldGradSeal)" opacity="0.85" />
        <path d="M 60 28 Q 62 23 57 21 Q 55 25 59 27" fill="url(#goldGradSeal)" opacity="0.85" />

        {/* Interlocking Wedding Rings Emblem */}
        <g transform="translate(23, 29)">
          <circle cx="12" cy="13" r="10.5" stroke="url(#goldGradSeal)" strokeWidth="2.6" fill="none" />
          <circle cx="25" cy="13" r="10.5" stroke="url(#goldGradSeal)" strokeWidth="2.6" fill="none" />
        </g>
        <defs>
          <linearGradient id="goldGradSeal" x1="0" y1="0" x2="48" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fef08a" />
            <stop offset="0.4" stopColor="#d4af37" />
            <stop offset="1" stopColor="#92400e" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

/* ── Delicate Gold Corner Brackets ── */
function CornerBracket({ position }) {
  return (
    <div className={`slide2-corner-bracket corner-${position}`}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M 4 28 L 4 8 Q 4 4 8 4 L 28 4" stroke="#d4af37" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.7" />
        <circle cx="4" cy="28" r="1.5" fill="#d4af37" />
        <circle cx="28" cy="4" r="1.5" fill="#d4af37" />
      </svg>
    </div>
  )
}

/* ── Subtle Floating Gold Sparkle ── */
function AmbientSparkle({ style, size = 16, opacity = 0.6 }) {
  return (
    <div className="slide2-ambient-sparkle" style={{ ...style, opacity, width: size, height: size }}>
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none">
        <path
          d="M 12 0 Q 12 12 24 12 Q 12 12 12 24 Q 12 12 0 12 Q 12 12 12 0 Z"
          fill="url(#sparkleGoldGrad)"
        />
        <defs>
          <linearGradient id="sparkleGoldGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fef08a" />
            <stop offset="1" stopColor="#b45309" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

/* ── Individual Tilted Phone Mockup ── */
function TiltedPhone({
  themeKey,
  clientKey,
  className = '',
  style = {},
  scalerStyle = {},
  isHero = false,
}) {
  const ThemeComponent = THEMES[themeKey]?.component
  const clientData = useMemo(() => {
    const raw = CLIENTS[clientKey]?.data || {}
    return {
      ...raw,
      guestName: 'Tamu Undangan',
      initialOpen: true,
      lockBodyScroll: false,
      hideFloatingButton: true,
    }
  }, [clientKey])

  if (!ThemeComponent) return null

  return (
    <div className={`slide2-phone-item ${className} ${isHero ? 'is-hero' : ''}`} style={style}>
      <div className="slide2-phone-shell">
        {/* Dynamic Island / Speaker */}
        <div className="slide2-phone-island">
          <span className="slide2-phone-camera" />
        </div>

        {/* Screen Viewport with Theme Backdrop */}
        <div className={`slide2-phone-screen screen-bg-${themeKey}`}>
          <div className="is-mockup-frame">
            <div className="slide2-phone-scaler" style={scalerStyle}>
              <Suspense fallback={null}>
                <ThemeComponent data={clientData} />
              </Suspense>
            </div>
          </div>

          {/* Realistic Diagonal Glass Sheen */}
          <div className="slide2-glass-sheen" />
        </div>

        {/* Home Indicator Bar */}
        <div className="slide2-home-bar" />
      </div>
    </div>
  )
}

export default function BannerSlide2() {
  return (
    <div className="slide2-wrapper">
      <div className="slide2-canvas">

        {/* Outer Inset Luxury Gold Border Frame */}
        <div className="slide2-gold-frame" />

        {/* 4 Corner Accents */}
        <CornerBracket position="tl" />
        <CornerBracket position="tr" />
        <CornerBracket position="bl" />
        <CornerBracket position="br" />

        {/* Top-Left Arsy Studio Luxury Brand Seal */}
        <TopLeftBrandSeal />

        {/* Delicate Ambient Gold Diamond Sparkles */}
        <AmbientSparkle style={{ top: '48px', left: '155px' }} size={16} opacity={0.65} />
        <AmbientSparkle style={{ top: '120px', left: '60px' }} size={11} opacity={0.5} />
        <AmbientSparkle style={{ top: '65px', right: '110px' }} size={18} opacity={0.7} />
        <AmbientSparkle style={{ top: '160px', right: '45px' }} size={12} opacity={0.45} />
        <AmbientSparkle style={{ bottom: '70px', left: '70px' }} size={16} opacity={0.65} />
        <AmbientSparkle style={{ bottom: '140px', left: '40px' }} size={10} opacity={0.4} />
        <AmbientSparkle style={{ bottom: '85px', right: '120px' }} size={15} opacity={0.6} />

        {/* ═══════════════════════════════════════════════════════════
           7 DIAGONAL PHONES CASCADE (Parallel -38deg Angle)
           Themes:
           1. Center Hero: Vega (Sapphire Midnight Wedding)
           2. Top-Left: Aldebaran (Moroccan Sandstone & Lapis Doa)
           3. Top-Right: Capella (Oxford Maroon & Academic Gold Wisuda)
           4. Mid-Left: Spica (Warm Terracotta & Sage Lamaran)
           5. Mid-Right: Lyra (Blush Rose Romantic Wedding)
           6. Bottom-Center: Castor (Imperial Burgundy Sovereign)
           7. Bottom-Left: Rigel (Cute Pastel Sky Blue Baby Shower)
           ═══════════════════════════════════════════════════════════ */}
        <div className="slide2-stage">

          {/* 1. TOP-CENTER/LEFT: ALDEBARAN (Pengajian & Doa Bersama) */}
          <TiltedPhone
            themeKey="aldebaran"
            clientKey="demo-aldebaran"
            className="phone-aldebaran"
            style={{
              left: '395px',
              top: '96px',
              zIndex: 3,
            }}
            scalerStyle={{ transform: 'scale(0.6667)', height: '802px' }}
          />

          {/* 2. TOP-RIGHT: CAPELLA (Wisuda / Graduation) */}
          <TiltedPhone
            themeKey="capella"
            clientKey="demo-capella"
            className="phone-capella"
            style={{
              left: '830px',
              top: '180px',
              zIndex: 4,
            }}
            scalerStyle={{ transform: 'scale(0.6667)', height: '802px' }}
          />

          {/* 3. MID-LEFT: SPICA (Lamaran / The Engagement) */}
          <TiltedPhone
            themeKey="spica"
            clientKey="demo-spica"
            className="phone-spica"
            style={{
              left: '140px',
              top: '460px',
              zIndex: 5,
            }}
            scalerStyle={{ transform: 'scale(0.6667)', height: '802px' }}
          />

          {/* 4. MID-RIGHT: LYRA (Romantic Rose Wedding) */}
          <TiltedPhone
            themeKey="lyra"
            clientKey="demo-lyra"
            className="phone-lyra"
            style={{
              left: '900px',
              top: '590px',
              zIndex: 6,
            }}
            scalerStyle={{ transform: 'scale(0.6667)', height: '802px' }}
          />

          {/* 5. BOTTOM-CENTER: CASTOR (Imperial Royal Burgundy) */}
          <TiltedPhone
            themeKey="castor"
            clientKey="demo-castor"
            className="phone-castor"
            style={{
              left: '640px',
              top: '930px',
              zIndex: 7,
            }}
            scalerStyle={{ transform: 'scale(0.6667)', height: '802px' }}
          />

          {/* 6. BOTTOM-LEFT: RIGEL (Cute Pastel Baby Shower) */}
          <TiltedPhone
            themeKey="rigel"
            clientKey="demo-rigel"
            className="phone-rigel"
            style={{
              left: '200px',
              top: '890px',
              zIndex: 8,
            }}
            scalerStyle={{ transform: 'scale(0.6667)', height: '802px' }}
          />

          {/* 7. CENTER HERO: VEGA (Celestial Midnight Sapphire Wedding — PALING BESAR & DI ATAS) */}
          <TiltedPhone
            themeKey="vega"
            clientKey="demo"
            className="phone-vega"
            isHero={true}
            style={{
              left: '540px',
              top: '540px',
              zIndex: 10,
            }}
            scalerStyle={{ transform: 'scale(0.7308)', height: '800px' }}
          />

        </div>

      </div>
    </div>
  )
}
