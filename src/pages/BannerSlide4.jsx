import { useMemo, Suspense } from 'react'
import { THEMES } from '../themes'
import { CLIENTS } from '../clients'
import './CatalogPage.css'
import './BannerSlide4.css'

/* ── Top-Left Luxury Double-Ring Seal with Laurel Wreath ── */
function TopLeftBrandSeal() {
  return (
    <div className="slide4-brand-seal">
      <svg width="74" height="74" viewBox="0 0 84 84" fill="none">
        <circle cx="42" cy="42" r="39" stroke="#d4af37" strokeWidth="1.2" strokeOpacity="0.85" />
        <circle cx="42" cy="42" r="34" stroke="#d4af37" strokeWidth="0.8" strokeDasharray="3 3" strokeOpacity="0.65" />
        
        {/* Left Laurel Leaves */}
        <path d="M 22 56 C 18 48 18 36 25 28" stroke="#d4af37" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeOpacity="0.75" />
        <path d="M 19 50 Q 14 47 16 43 Q 21 44 20 49" fill="url(#goldGradSeal4)" opacity="0.85" />
        <path d="M 18 42 Q 13 39 16 35 Q 21 37 19 41" fill="url(#goldGradSeal4)" opacity="0.85" />
        <path d="M 20 34 Q 16 30 20 27 Q 24 30 21 33" fill="url(#goldGradSeal4)" opacity="0.85" />
        <path d="M 24 28 Q 22 23 27 21 Q 29 25 25 27" fill="url(#goldGradSeal4)" opacity="0.85" />

        {/* Right Laurel Leaves */}
        <path d="M 62 56 C 66 48 66 36 59 28" stroke="#d4af37" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeOpacity="0.75" />
        <path d="M 65 50 Q 70 47 68 43 Q 63 44 64 49" fill="url(#goldGradSeal4)" opacity="0.85" />
        <path d="M 66 42 Q 71 39 68 35 Q 63 37 65 41" fill="url(#goldGradSeal4)" opacity="0.85" />
        <path d="M 64 34 Q 68 30 64 27 Q 60 30 63 33" fill="url(#goldGradSeal4)" opacity="0.85" />
        <path d="M 60 28 Q 62 23 57 21 Q 55 25 59 27" fill="url(#goldGradSeal4)" opacity="0.85" />

        {/* Interlocking Rings Emblem */}
        <g transform="translate(23, 29)">
          <circle cx="12" cy="13" r="10.5" stroke="url(#goldGradSeal4)" strokeWidth="2.6" fill="none" />
          <circle cx="25" cy="13" r="10.5" stroke="url(#goldGradSeal4)" strokeWidth="2.6" fill="none" />
        </g>
        <defs>
          <linearGradient id="goldGradSeal4" x1="0" y1="0" x2="48" y2="40" gradientUnits="userSpaceOnUse">
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
    <div className={`slide4-corner-bracket corner-${position}`}>
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
    <div className="slide4-ambient-sparkle" style={{ ...style, opacity, width: size, height: size }}>
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none">
        <path
          d="M 12 0 Q 12 12 24 12 Q 12 12 12 24 Q 12 12 0 12 Q 12 12 12 0 Z"
          fill="url(#sparkleGoldGrad4)"
        />
        <defs>
          <linearGradient id="sparkleGoldGrad4" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fef08a" />
            <stop offset="1" stopColor="#b45309" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

/* ── Event Pillar Component (Badge + Live Phone Mockup + Details Card) ── */
function EventPillar({
  badgeLabel,
  themeKey,
  clientKey,
  eventName,
  points = [],
  themeTag,
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
    <div className="slide4-pillar">
      {/* Top Category Badge */}
      <div className="slide4-pillar-badge">
        <span className="slide4-badge-text">{badgeLabel}</span>
      </div>

      {/* Upright Phone Mockup */}
      <div className="slide4-phone-shell">
        <div className="slide4-phone-island">
          <span className="slide4-phone-camera" />
        </div>

        <div className={`slide4-phone-screen screen-bg-${themeKey}`}>
          <div className="is-mockup-frame">
            <div className="slide4-phone-scaler">
              {ThemeComponent && (
                <Suspense fallback={null}>
                  <ThemeComponent data={clientData} />
                </Suspense>
              )}
            </div>
          </div>
          <div className="slide4-phone-sheen" />
        </div>

        <div className="slide4-phone-home" />
      </div>

      {/* Bottom Event Details Card */}
      <div className="slide4-pillar-card">
        <h4 className="slide4-card-event-name">{eventName}</h4>
        <div className="slide4-card-points">
          {points.map((pt, idx) => (
            <div key={idx}>- {pt}</div>
          ))}
        </div>
        <span className="slide4-card-theme-tag">{themeTag}</span>
      </div>
    </div>
  )
}

export default function BannerSlide4() {
  return (
    <div className="slide4-wrapper">
      <div className="slide4-canvas">

        {/* Outer Inset Luxury Gold Border Frame */}
        <div className="slide4-gold-frame" />

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
        <AmbientSparkle style={{ top: '142px', left: '38px' }} size={11} opacity={0.45} />
        <AmbientSparkle style={{ top: '150px', right: '38px' }} size={12} opacity={0.45} />
        <AmbientSparkle style={{ bottom: '90px', left: '40px' }} size={14} opacity={0.55} />
        <AmbientSparkle style={{ bottom: '90px', right: '40px' }} size={15} opacity={0.6} />

        {/* ── HEADER ── */}
        <div className="slide4-header">
          <div className="slide4-eyebrow-pill">
            <span className="slide4-eyebrow-text">✦ KOLEKSI TEMATIK MULTI-ACARA ✦</span>
          </div>
          <h1 className="slide4-title">
            Satu Solusi Mewah untuk <span className="slide4-title-accent">Berbagai Momen</span>
          </h1>
          <p className="slide4-subtitle">
            Koleksi desain tematik eksklusif yang disesuaikan khusus untuk setiap momen penting kehidupan Anda.
          </p>
        </div>

        {/* ── 4 EVENT PILLARS GRID ── */}
        <div className="slide4-pillars-grid">

          {/* 1. Pernikahan & Walimah */}
          <EventPillar
            badgeLabel="PERNIKAHAN"
            themeKey="vega"
            clientKey="demo"
            eventName="Pernikahan & Walimah"
            points={['Akad Nikah & Resepsi', 'Desain Sakral & Megah']}
            themeTag="Vega · Lyra · Castor"
          />

          {/* 2. Lamaran & Pertunangan */}
          <EventPillar
            badgeLabel="LAMARAN"
            themeKey="spica"
            clientKey="demo-spica"
            eventName="Lamaran & Tunangan"
            points={['The Engagement Day', 'Nuansa Hangat & Intim']}
            themeTag="Spica · Sirius"
          />

          {/* 3. Wisuda & Kelulusan */}
          <EventPillar
            badgeLabel="WISUDA"
            themeKey="capella"
            clientKey="demo-capella"
            eventName="Wisuda & Kelulusan"
            points={['Graduation Celebration', 'Format Piagam Akademik']}
            themeTag="Capella"
          />

          {/* 4. Doa Bersama & Tasyakuran */}
          <EventPillar
            badgeLabel="DOA & SYUKURAN"
            themeKey="aldebaran"
            clientKey="demo-aldebaran"
            eventName="Doa & Tasyakuran"
            points={['Pengajian, Tahlil & Aqiqah', 'Khidmat & Bernuansa Islami']}
            themeTag="Aldebaran · Rigel"
          />

        </div>

        {/* ── BOTTOM HIGHLIGHT RIBBON ── */}
        <div className="slide4-bottom-ribbon">
          <div className="slide4-ribbon-item">
            <span>- 13+ Pilihan Tema Spesifik</span>
          </div>
          <div className="slide4-ribbon-item">
            <span>- Bebas Kustomisasi Teks &amp; Doa</span>
          </div>
          <div className="slide4-ribbon-item">
            <span>- Masa Aktif Panjang</span>
          </div>
          <div className="slide4-ribbon-item">
            <span>- Bebas Sebar Nama Tamu</span>
          </div>
        </div>

        {/* ── BOTTOM SIGNATURE BOUTIQUE TAG ── */}
        <div className="slide4-signature-tag">
          ✦ ARSY STUDIO · THE SIGNATURE COLLECTION 2026 ✦
        </div>

      </div>
    </div>
  )
}
