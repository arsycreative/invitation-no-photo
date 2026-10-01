import { useMemo, Suspense } from 'react'
import { THEMES } from '../themes'
import { CLIENTS } from '../clients'
import './CatalogPage.css'
import './BannerSlide5.css'

/* ── Top-Left Luxury Double-Ring Seal with Laurel Wreath ── */
function TopLeftBrandSeal() {
  return (
    <div className="slide5-brand-seal">
      <svg width="74" height="74" viewBox="0 0 84 84" fill="none">
        <circle cx="42" cy="42" r="39" stroke="#d4af37" strokeWidth="1.2" strokeOpacity="0.85" />
        <circle cx="42" cy="42" r="34" stroke="#d4af37" strokeWidth="0.8" strokeDasharray="3 3" strokeOpacity="0.65" />
        
        {/* Left Laurel Leaves */}
        <path d="M 22 56 C 18 48 18 36 25 28" stroke="#d4af37" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeOpacity="0.75" />
        <path d="M 19 50 Q 14 47 16 43 Q 21 44 20 49" fill="url(#goldGradSeal5)" opacity="0.85" />
        <path d="M 18 42 Q 13 39 16 35 Q 21 37 19 41" fill="url(#goldGradSeal5)" opacity="0.85" />
        <path d="M 20 34 Q 16 30 20 27 Q 24 30 21 33" fill="url(#goldGradSeal5)" opacity="0.85" />
        <path d="M 24 28 Q 22 23 27 21 Q 29 25 25 27" fill="url(#goldGradSeal5)" opacity="0.85" />

        {/* Right Laurel Leaves */}
        <path d="M 62 56 C 66 48 66 36 59 28" stroke="#d4af37" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeOpacity="0.75" />
        <path d="M 65 50 Q 70 47 68 43 Q 63 44 64 49" fill="url(#goldGradSeal5)" opacity="0.85" />
        <path d="M 66 42 Q 71 39 68 35 Q 63 37 65 41" fill="url(#goldGradSeal5)" opacity="0.85" />
        <path d="M 64 34 Q 68 30 64 27 Q 60 30 63 33" fill="url(#goldGradSeal5)" opacity="0.85" />
        <path d="M 60 28 Q 62 23 57 21 Q 55 25 59 27" fill="url(#goldGradSeal5)" opacity="0.85" />

        {/* Interlocking Rings Emblem */}
        <g transform="translate(23, 29)">
          <circle cx="12" cy="13" r="10.5" stroke="url(#goldGradSeal5)" strokeWidth="2.6" fill="none" />
          <circle cx="25" cy="13" r="10.5" stroke="url(#goldGradSeal5)" strokeWidth="2.6" fill="none" />
        </g>
        <defs>
          <linearGradient id="goldGradSeal5" x1="0" y1="0" x2="48" y2="40" gradientUnits="userSpaceOnUse">
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
    <div className={`slide5-corner-bracket corner-${position}`}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M 4 28 L 4 8 Q 4 4 8 4 L 28 4" stroke="#d4af37" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.75" />
        <circle cx="4" cy="28" r="1.5" fill="#d4af37" />
        <circle cx="28" cy="4" r="1.5" fill="#d4af37" />
      </svg>
    </div>
  )
}

/* ── Subtle Floating Gold Sparkle ── */
function AmbientSparkle({ style, size = 16, opacity = 0.6 }) {
  return (
    <div className="slide5-ambient-sparkle" style={{ ...style, opacity, width: size, height: size }}>
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none">
        <path
          d="M 12 0 Q 12 12 24 12 Q 12 12 12 24 Q 12 12 0 12 Q 12 12 12 0 Z"
          fill="url(#sparkleGoldGrad5)"
        />
        <defs>
          <linearGradient id="sparkleGoldGrad5" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fef08a" />
            <stop offset="1" stopColor="#b45309" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

/* ── Delicate Step Connector Arrow ── */
function StepConnector() {
  return (
    <div className="slide5-step-connector">
      <svg width="44" height="14" viewBox="0 0 44 14" fill="none">
        <path d="M 6 7 L 36 7 M 30 3 L 36 7 L 30 11" stroke="#d4af37" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

/* ── Step Phone Pillar Component ── */
function OrderStepPillar({
  stepNumber,
  themeKey,
  clientKey,
  screenBadge,
  stepTitle,
  stepDesc,
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

  return (
    <div className="slide5-pillar">
      {/* Top Step Number Badge */}
      <div className="slide5-pillar-badge">
        <span className="slide5-badge-text">LANGKAH {stepNumber}</span>
      </div>

      {/* Upright Phone Shell */}
      <div className="slide5-phone-shell">
        <div className="slide5-phone-island">
          <span className="slide5-phone-camera" />
        </div>

        <div className={`slide5-phone-screen screen-bg-${themeKey}`}>
          <div className="is-mockup-frame">
            <div className="slide5-phone-scaler">
              {ThemeComponent && (
                <Suspense fallback={null}>
                  <ThemeComponent data={clientData} />
                </Suspense>
              )}
            </div>
          </div>

          {/* Floating On-Screen Status Tag */}
          <div className="slide5-screen-tag-pill">
            <span>{screenBadge}</span>
          </div>

          <div className="slide5-phone-sheen" />
        </div>

        <div className="slide5-phone-home" />
      </div>

      {/* Bottom Step Title & Description */}
      <div className="slide5-pillar-label">
        <h3 className="slide5-pillar-title">{stepTitle}</h3>
        <p className="slide5-pillar-desc">{stepDesc}</p>
      </div>
    </div>
  )
}

export default function BannerSlide5() {
  return (
    <div className="slide5-wrapper">
      <div className="slide5-canvas">

        {/* Outer Inset Luxury Gold Border Frame */}
        <div className="slide5-gold-frame" />

        {/* 4 Corner Accents */}
        <CornerBracket position="tl" />
        <CornerBracket position="tr" />
        <CornerBracket position="bl" />
        <CornerBracket position="br" />

        {/* Top-Left Arsy Studio Luxury Brand Seal */}
        <TopLeftBrandSeal />

        {/* Delicate Ambient Gold Diamond Sparkles */}
        <AmbientSparkle style={{ top: '44px', left: '125px' }} size={16} opacity={0.7} />
        <AmbientSparkle style={{ top: '60px', right: '65px' }} size={18} opacity={0.7} />
        <AmbientSparkle style={{ top: '150px', left: '42px' }} size={12} opacity={0.45} />
        <AmbientSparkle style={{ top: '150px', right: '42px' }} size={12} opacity={0.45} />
        <AmbientSparkle style={{ bottom: '110px', left: '44px' }} size={14} opacity={0.55} />
        <AmbientSparkle style={{ bottom: '110px', right: '44px' }} size={15} opacity={0.6} />

        {/* ── HEADER ── */}
        <div className="slide5-header">
          <div className="slide5-eyebrow-pill">
            <span className="slide5-eyebrow-text">✦ PROSES MUDAH &amp; CEPAT ✦</span>
          </div>
          <h1 className="slide5-title">
            Cara Pemesanan <span className="slide5-title-accent">3 Langkah Praktis</span>
          </h1>
          <p className="slide5-subtitle">
            Undangan digital mewah siap dibagikan ke seluruh tamu hanya dalam 3 langkah mudah.
          </p>
        </div>

        {/* ── 3 STEP PHONE PILLARS GRID ── */}
        <div className="slide5-pillars-grid">

          {/* LANGKAH 01: Pilih Desain Tema */}
          <OrderStepPillar
            stepNumber="01"
            themeKey="spica"
            clientKey="demo-spica"
            screenBadge="✦ 13+ DESAIN MEWAH ✦"
            stepTitle="Pilih Desain Tema"
            stepDesc="Pilih 1 dari 13+ katalog desain favorit yang sesuai acara Anda"
          />

          {/* Connector 1 -> 2 */}
          <StepConnector />

          {/* LANGKAH 02: Kirim Data Acara */}
          <OrderStepPillar
            stepNumber="02"
            themeKey="vega"
            clientKey="demo"
            screenBadge="✦ FORMAT DATA SIMPEL ✦"
            stepTitle="Kirim Data Acara"
            stepDesc="Cukup isi formulir data, teks &amp; susunan acara dibantu sampai rapi"
          />

          {/* Connector 2 -> 3 */}
          <StepConnector />

          {/* LANGKAH 03: Undangan Siap Disebar */}
          <OrderStepPillar
            stepNumber="03"
            themeKey="castor"
            clientKey="demo-castor"
            screenBadge="✦ LINK AKTIF &amp; SIAP SEBAR ✦"
            stepTitle="Undangan Siap Disebar"
            stepDesc="Link resmi langsung aktif, bebas sebar ke seluruh tamu undangan"
          />

        </div>

        {/* ── BOTTOM HIGHLIGHT RIBBON ── */}
        <div className="slide5-bottom-ribbon">
          <div className="slide5-ribbon-item">
            <span>- Pengerjaan Kilat 1×24 Jam</span>
          </div>
          <div className="slide5-ribbon-item">
            <span>- Bebas Revisi Sampai Selesai</span>
          </div>
          <div className="slide5-ribbon-item">
            <span>- Tanpa Batas Jumlah Tamu</span>
          </div>
          <div className="slide5-ribbon-item">
            <span>- Link Aktif Selamanya</span>
          </div>
        </div>

        {/* ── BOTTOM SIGNATURE BOUTIQUE TAG ── */}
        <div className="slide5-signature-tag">
          ✦ ARSY STUDIO · THE SIGNATURE COLLECTION 2026 ✦
        </div>

      </div>
    </div>
  )
}
