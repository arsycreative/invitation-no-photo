import { useMemo, Suspense } from 'react'
import { THEMES } from '../themes'
import { CLIENTS } from '../clients'
import './CatalogPage.css'
import './BannerSlide7.css'

/* ── Top-Left Luxury Double-Ring Seal with Laurel Wreath ── */
function TopLeftBrandSeal() {
  return (
    <div className="slide7-brand-seal">
      <svg width="74" height="74" viewBox="0 0 84 84" fill="none">
        <circle cx="42" cy="42" r="39" stroke="#d4af37" strokeWidth="1.2" strokeOpacity="0.85" />
        <circle cx="42" cy="42" r="34" stroke="#d4af37" strokeWidth="0.8" strokeDasharray="3 3" strokeOpacity="0.65" />
        
        {/* Left Laurel Leaves */}
        <path d="M 22 56 C 18 48 18 36 25 28" stroke="#d4af37" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeOpacity="0.75" />
        <path d="M 19 50 Q 14 47 16 43 Q 21 44 20 49" fill="url(#goldGradSeal7)" opacity="0.85" />
        <path d="M 18 42 Q 13 39 16 35 Q 21 37 19 41" fill="url(#goldGradSeal7)" opacity="0.85" />
        <path d="M 20 34 Q 16 30 20 27 Q 24 30 21 33" fill="url(#goldGradSeal7)" opacity="0.85" />
        <path d="M 24 28 Q 22 23 27 21 Q 29 25 25 27" fill="url(#goldGradSeal7)" opacity="0.85" />

        {/* Right Laurel Leaves */}
        <path d="M 62 56 C 66 48 66 36 59 28" stroke="#d4af37" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeOpacity="0.75" />
        <path d="M 65 50 Q 70 47 68 43 Q 63 44 64 49" fill="url(#goldGradSeal7)" opacity="0.85" />
        <path d="M 66 42 Q 71 39 68 35 Q 63 37 65 41" fill="url(#goldGradSeal7)" opacity="0.85" />
        <path d="M 64 34 Q 68 30 64 27 Q 60 30 63 33" fill="url(#goldGradSeal7)" opacity="0.85" />
        <path d="M 60 28 Q 62 23 57 21 Q 55 25 59 27" fill="url(#goldGradSeal7)" opacity="0.85" />

        {/* Interlocking Rings Emblem */}
        <g transform="translate(23, 29)">
          <circle cx="12" cy="13" r="10.5" stroke="url(#goldGradSeal7)" strokeWidth="2.6" fill="none" />
          <circle cx="25" cy="13" r="10.5" stroke="url(#goldGradSeal7)" strokeWidth="2.6" fill="none" />
        </g>
        <defs>
          <linearGradient id="goldGradSeal7" x1="0" y1="0" x2="48" y2="40" gradientUnits="userSpaceOnUse">
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
    <div className={`slide7-corner-bracket corner-${position}`}>
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
    <div className="slide7-ambient-sparkle" style={{ ...style, opacity, width: size, height: size }}>
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none">
        <path
          d="M 12 0 Q 12 12 24 12 Q 12 12 12 24 Q 12 12 0 12 Q 12 12 12 0 Z"
          fill="url(#sparkleGoldGrad7)"
        />
        <defs>
          <linearGradient id="sparkleGoldGrad7" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fef08a" />
            <stop offset="1" stopColor="#b45309" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

/* ── Pillar Feature Card Component ── */
function FeatureCard({ number, title, desc, chip }) {
  return (
    <div className="slide7-feature-card">
      <div className="slide7-feature-num-badge">{number}</div>
      <h3 className="slide7-feature-title">{title}</h3>
      <p className="slide7-feature-desc">{desc}</p>
      {chip && (
        <div className="slide7-feature-chip">
          <span>{chip}</span>
        </div>
      )}
    </div>
  )
}

export default function BannerSlide7() {
  const ThemeComponent = THEMES['castor']?.component
  const clientData = useMemo(() => {
    const raw = CLIENTS['demo-castor']?.data || {}
    return {
      ...raw,
      guestName: 'Tamu Undangan',
      initialOpen: true,
      lockBodyScroll: false,
      hideFloatingButton: true,
    }
  }, [])

  return (
    <div className="slide7-wrapper">
      <div className="slide7-canvas">

        {/* Outer Inset Luxury Gold Border Frame */}
        <div className="slide7-gold-frame" />

        {/* 4 Corner Accents */}
        <CornerBracket position="tl" />
        <CornerBracket position="tr" />
        <CornerBracket position="bl" />
        <CornerBracket position="br" />

        {/* Top-Left Arsy Studio Luxury Brand Seal */}
        <TopLeftBrandSeal />

        {/* Ambient Gold Diamond Sparkles */}
        <AmbientSparkle style={{ top: '44px', left: '125px' }} size={16} opacity={0.7} />
        <AmbientSparkle style={{ top: '60px', right: '65px' }} size={18} opacity={0.7} />
        <AmbientSparkle style={{ top: '150px', left: '42px' }} size={12} opacity={0.45} />
        <AmbientSparkle style={{ top: '150px', right: '42px' }} size={12} opacity={0.45} />
        <AmbientSparkle style={{ bottom: '110px', left: '44px' }} size={14} opacity={0.55} />
        <AmbientSparkle style={{ bottom: '110px', right: '44px' }} size={15} opacity={0.6} />

        {/* ── HEADER ── */}
        <div className="slide7-header">
          <div className="slide7-eyebrow-pill">
            <span className="slide7-eyebrow-text">✦ STANDAR MUTU EKSKLUSIF ✦</span>
          </div>
          <h1 className="slide7-title">
            Kenapa Memilih <span className="slide7-title-accent">Arsy Studio?</span>
          </h1>
          <p className="slide7-subtitle">
            Kualitas visual terbaik dan kenyamanan maksimal untuk setiap momen berharga Anda.
          </p>
        </div>

        {/* ── MAIN STAGE: LEFT 2 CARDS + CENTER GRAND MOCKUP + RIGHT 2 CARDS ── */}
        <div className="slide7-main-stage">

          {/* ── LEFT COLUMN (2 FOCUSED CARDS) ── */}
          <div className="slide7-column">
            
            {/* Pillar 01 */}
            <FeatureCard
              number="01"
              title="100% Bebas Iklan"
              desc="Undangan bersih dan sakral tanpa gangguan pop-up maupun banner iklan."
              chip="- Tamu Nyaman & Khidmat"
            />

            {/* Pillar 02 */}
            <FeatureCard
              number="02"
              title="Loading Super Cepat"
              desc="Sangat ringan dan responsif, mulus dibuka di semua jenis smartphone."
              chip="- Akses Kilat Semua HP"
            />

          </div>

          {/* ── CENTER COLUMN: GRAND PHONE MOCKUP (PRESISI DI TENGAH) ── */}
          <div className="slide7-center-mockup">
            
            {/* Top Mockup Header Pill */}
            <div className="slide7-mockup-badge">
              <span className="slide7-mockup-badge-text">✦ DESAIN MEWAH & ANGGUN ✦</span>
            </div>

            {/* Grand Smartphone Shell */}
            <div className="slide7-phone-shell">
              <div className="slide7-phone-island">
                <span className="slide7-phone-camera" />
              </div>

              <div className="slide7-phone-screen screen-bg-castor">
                <div className="is-mockup-frame">
                  <div className="slide7-phone-scaler">
                    {ThemeComponent && (
                      <Suspense fallback={null}>
                        <ThemeComponent data={clientData} />
                      </Suspense>
                    )}
                  </div>
                </div>

                {/* Floating On-Screen Quality Pill */}
                <div className="slide7-screen-tag-pill">
                  <span>✦ KUALITAS TERBAIK 100% ✦</span>
                </div>

                <div className="slide7-phone-sheen" />
              </div>

              <div className="slide7-phone-home" />
            </div>

          </div>

          {/* ── RIGHT COLUMN (2 FOCUSED CARDS) ── */}
          <div className="slide7-column">

            {/* Pillar 03 */}
            <FeatureCard
              number="03"
              title="Tipografi Berkelas"
              desc="Desain artistik tanpa foto yang anggun dengan seni tata huruf mewah & modern."
              chip="- Estetik & Elegan"
            />

            {/* Pillar 04 */}
            <FeatureCard
              number="04"
              title="Dibantu Sampai Rapi"
              desc="Format data simpel dibimbing langsung dan bebas revisi hingga rapi sempurna."
              chip="- Bebas Revisi Sepuasnya"
            />

          </div>

        </div>

        {/* ── BOTTOM HIGHLIGHT RIBBON ── */}
        <div className="slide7-bottom-ribbon">
          <div className="slide7-ribbon-item">
            <span>- Pengerjaan Kilat 1×24 Jam</span>
          </div>
          <div className="slide7-ribbon-item">
            <span>- Bebas Revisi Sampai Selesai</span>
          </div>
          <div className="slide7-ribbon-item">
            <span>- Bebas Sebar Tanpa Batas Tamu</span>
          </div>
        </div>

        {/* ── BOTTOM SIGNATURE BOUTIQUE TAG ── */}
        <div className="slide7-signature-tag">
          ✦ ARSY STUDIO · THE SIGNATURE COLLECTION 2026 ✦
        </div>

      </div>
    </div>
  )
}
