import { useMemo, Suspense } from 'react'
import { THEMES } from '../themes'
import { CLIENTS } from '../clients'
import './BannerPage.css'

/* ── Premium Luxury Corner Hairlines & Diamonds ── */
function LuxuryCornerTL() {
  return (
    <svg className="banner-luxury-corner corner-tl" width="140" height="140" viewBox="0 0 140 140" fill="none">
      {/* Outer 1.2px gold border bracket */}
      <path d="M 22 92 L 22 32 Q 22 22 32 22 L 92 22" stroke="#d97706" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.5" />
      {/* Inner delicate dashed arc */}
      <path d="M 32 68 L 32 40 Q 40 32 68 32" stroke="#f59e0b" strokeWidth="0.8" strokeDasharray="3 3" strokeOpacity="0.35" />
      {/* Terminal Diamond Accents */}
      <polygon points="22,92 25,96 22,100 19,96" fill="#d97706" />
      <polygon points="92,22 96,25 100,22 96,19" fill="#d97706" />
      {/* Luxury 4-Point Diamond Flare Star */}
      <g transform="translate(40, 40)">
        <path d="M 14 0 Q 14 14 0 14 Q 14 14 14 28 Q 14 14 28 14 Q 14 14 14 0 Z" fill="url(#starGoldTL)" />
        <circle cx="14" cy="14" r="2.5" fill="#ffffff" />
      </g>
      <defs>
        <linearGradient id="starGoldTL" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f59e0b" />
          <stop offset="1" stopColor="#b45309" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function LuxuryCornerTR() {
  return (
    <svg className="banner-luxury-corner corner-tr" width="140" height="140" viewBox="0 0 140 140" fill="none">
      {/* Outer 1.2px gold border bracket */}
      <path d="M 118 92 L 118 32 Q 118 22 108 22 L 48 22" stroke="#d97706" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.5" />
      {/* Inner delicate dashed arc */}
      <path d="M 108 68 L 108 40 Q 100 32 72 32" stroke="#f59e0b" strokeWidth="0.8" strokeDasharray="3 3" strokeOpacity="0.35" />
      {/* Terminal Diamond Accents */}
      <polygon points="118,92 121,96 118,100 115,96" fill="#d97706" />
      <polygon points="48,22 44,25 40,22 44,19" fill="#d97706" />
      {/* Luxury 4-Point Diamond Flare Star */}
      <g transform="translate(72, 40)">
        <path d="M 14 0 Q 14 14 0 14 Q 14 14 14 28 Q 14 14 28 14 Q 14 14 14 0 Z" fill="url(#starGoldTR)" />
        <circle cx="14" cy="14" r="2.5" fill="#ffffff" />
      </g>
      <defs>
        <linearGradient id="starGoldTR" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f59e0b" />
          <stop offset="1" stopColor="#b45309" />
        </linearGradient>
      </defs>
    </svg>
  )
}

/* ── Grand Luxury Background Silhouette Ornaments (Royal Mandala & Baroque Filigree) ── */
function LuxurySilhouetteBg() {
  return (
    <div className="banner-silhouette-bg">
      <svg className="banner-silhouette-svg" viewBox="0 0 1080 1080" fill="none">
        {/* 1. Grand Royal Centerpiece Medallion (Centered behind phones) */}
        <g className="silh-centerpiece" stroke="#d97706" fill="none">
          {/* Concentric Celestial Rings */}
          <circle cx="540" cy="565" r="410" strokeWidth="1" strokeOpacity="0.14" strokeDasharray="6 6" />
          <circle cx="540" cy="565" r="380" strokeWidth="1.2" strokeOpacity="0.2" />
          <circle cx="540" cy="565" r="345" strokeWidth="0.8" strokeOpacity="0.15" strokeDasharray="3 3" />
          <circle cx="540" cy="565" r="310" strokeWidth="1" strokeOpacity="0.18" />
          <circle cx="540" cy="565" r="250" strokeWidth="0.8" strokeOpacity="0.16" />
          <circle cx="540" cy="565" r="180" strokeWidth="1" strokeOpacity="0.2" />

          {/* 24 Radial Ray Hairlines */}
          {Array.from({ length: 24 }).map((_, i) => {
            const rad = (i * 15 * Math.PI) / 180;
            const x1 = 540 + Math.cos(rad) * 180;
            const y1 = 565 + Math.sin(rad) * 180;
            const x2 = 540 + Math.cos(rad) * 380;
            const y2 = 565 + Math.sin(rad) * 380;
            return (
              <line
                key={`ray-${i}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                strokeWidth={i % 2 === 0 ? "1" : "0.6"}
                strokeOpacity={i % 2 === 0 ? "0.2" : "0.12"}
              />
            );
          })}

          {/* 12 Radiant Gothic / Baroque Petal Crests */}
          {Array.from({ length: 12 }).map((_, i) => {
            const deg = i * 30;
            return (
              <g key={`petal-${deg}`} transform={`translate(540, 565) rotate(${deg})`}>
                <path
                  d="M 0 -380 Q 28 -415 0 -450 Q -28 -415 0 -380 Z"
                  fill="#d97706"
                  fillOpacity="0.04"
                  strokeWidth="1"
                  strokeOpacity="0.22"
                />
                <circle cx="0" cy="-450" r="3" fill="#d97706" fillOpacity="0.25" />
                <path d="M -18 -380 Q 0 -400 18 -380" strokeWidth="0.8" strokeOpacity="0.18" />
              </g>
            );
          })}
        </g>

        {/* 2. Classical Baroque Vine & Acanthus Leaf Silhouettes (Left Flank) */}
        <g className="silh-flank-left" stroke="#d97706" fill="none">
          <path
            d="M -30 260 C 50 280 120 370 85 450 C 55 520 -15 500 35 580 C 85 650 150 610 125 710 C 95 790 -30 770 -20 840"
            strokeWidth="1.2"
            strokeOpacity="0.18"
          />
          <path
            d="M 85 450 C 135 420 155 350 115 310 C 85 280 45 300 60 335 C 75 370 125 350 105 410"
            strokeWidth="0.9"
            strokeOpacity="0.16"
          />
          <path
            d="M 35 580 C 95 560 145 490 105 450 C 75 420 40 450 65 490 C 90 530 45 560 35 580"
            strokeWidth="0.9"
            strokeOpacity="0.16"
          />
          <path
            d="M 125 710 C 175 690 185 620 145 580 C 105 540 75 590 100 630"
            strokeWidth="0.9"
            strokeOpacity="0.16"
          />
          <path
            d="M 85 310 Q 135 300 155 330 Q 115 350 85 310 Z"
            fill="#d97706"
            fillOpacity="0.04"
            strokeWidth="0.8"
            strokeOpacity="0.18"
          />
          <path
            d="M 115 420 Q 175 410 195 450 Q 145 470 115 420 Z"
            fill="#d97706"
            fillOpacity="0.04"
            strokeWidth="0.8"
            strokeOpacity="0.18"
          />
          <path
            d="M 125 570 Q 185 560 205 600 Q 155 620 125 570 Z"
            fill="#d97706"
            fillOpacity="0.04"
            strokeWidth="0.8"
            strokeOpacity="0.18"
          />
          <polygon points="155,330 159,335 155,340 151,335" fill="#d97706" fillOpacity="0.25" />
          <polygon points="195,450 199,455 195,460 191,455" fill="#d97706" fillOpacity="0.25" />
          <polygon points="205,600 209,605 205,610 201,605" fill="#d97706" fillOpacity="0.25" />
        </g>

        {/* 3. Classical Baroque Vine & Acanthus Leaf Silhouettes (Right Flank - Symmetrical) */}
        <g className="silh-flank-right" transform="translate(1080, 0) scale(-1, 1)" stroke="#d97706" fill="none">
          <path
            d="M -30 260 C 50 280 120 370 85 450 C 55 520 -15 500 35 580 C 85 650 150 610 125 710 C 95 790 -30 770 -20 840"
            strokeWidth="1.2"
            strokeOpacity="0.18"
          />
          <path
            d="M 85 450 C 135 420 155 350 115 310 C 85 280 45 300 60 335 C 75 370 125 350 105 410"
            strokeWidth="0.9"
            strokeOpacity="0.16"
          />
          <path
            d="M 35 580 C 95 560 145 490 105 450 C 75 420 40 450 65 490 C 90 530 45 560 35 580"
            strokeWidth="0.9"
            strokeOpacity="0.16"
          />
          <path
            d="M 125 710 C 175 690 185 620 145 580 C 105 540 75 590 100 630"
            strokeWidth="0.9"
            strokeOpacity="0.16"
          />
          <path
            d="M 85 310 Q 135 300 155 330 Q 115 350 85 310 Z"
            fill="#d97706"
            fillOpacity="0.04"
            strokeWidth="0.8"
            strokeOpacity="0.18"
          />
          <path
            d="M 115 420 Q 175 410 195 450 Q 145 470 115 420 Z"
            fill="#d97706"
            fillOpacity="0.04"
            strokeWidth="0.8"
            strokeOpacity="0.18"
          />
          <path
            d="M 125 570 Q 185 560 205 600 Q 155 620 125 570 Z"
            fill="#d97706"
            fillOpacity="0.04"
            strokeWidth="0.8"
            strokeOpacity="0.18"
          />
          <polygon points="155,330 159,335 155,340 151,335" fill="#d97706" fillOpacity="0.25" />
          <polygon points="195,450 199,455 195,460 191,455" fill="#d97706" fillOpacity="0.25" />
          <polygon points="205,600 209,605 205,610 201,605" fill="#d97706" fillOpacity="0.25" />
        </g>

        {/* 4. Subtle Architectural Crest Arches (Header Backdrop) */}
        <g className="silh-header-arch" stroke="#d97706" fill="none">
          <path d="M 360 195 Q 540 140 720 195" strokeWidth="1" strokeOpacity="0.16" strokeDasharray="4 4" />
          <path d="M 310 215 Q 540 115 770 215" strokeWidth="0.8" strokeOpacity="0.12" />
        </g>
      </svg>
    </div>
  );
}

/* ── Subtle Floating Specular Diamond Sparkles ── */
function DiamondSparkle({ className = '', style = {} }) {
  return (
    <svg className={`ambient-diamond-sparkle ${className}`} style={style} width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M 12 0 Q 12 12 0 12 Q 12 12 12 24 Q 12 12 24 12 Q 12 12 12 0 Z" fill="#d97706" opacity="0.85" />
      <circle cx="12" cy="12" r="2.2" fill="#ffffff" />
    </svg>
  )
}

export default function BannerPage() {
  // 5 Themes for Symmetrical Stepped Row: Altair, Lyra, Vega, Spica, Sirius
  const AltairComponent = THEMES.altair.component
  const LyraComponent = THEMES.lyra.component
  const VegaComponent = THEMES.vega.component
  const SpicaComponent = THEMES.spica.component
  const SiriusComponent = THEMES.sirius.component

  // Client demo data: Cover view ensures all couple/celebrant names & buttons are in the optical center
  const altairData = useMemo(() => ({
    ...(CLIENTS['demo-altair']?.data || {}),
    guestName: 'Tamu Undangan',
    initialOpen: false,
    lockBodyScroll: false,
    hideFloatingButton: true,
  }), [])

  const lyraData = useMemo(() => ({
    ...(CLIENTS['demo-lyra']?.data || {}),
    guestName: 'Tamu Undangan',
    initialOpen: false,
    lockBodyScroll: false,
    hideFloatingButton: true,
  }), [])

  const vegaData = useMemo(() => ({
    ...(CLIENTS['demo']?.data || {}),
    guestName: 'Tamu Undangan',
    initialOpen: false,
    lockBodyScroll: false,
    hideFloatingButton: true,
  }), [])

  const spicaData = useMemo(() => ({
    ...(CLIENTS['demo-spica']?.data || {}),
    groomName: 'Dimas',
    brideName: 'Sarah',
    guestName: 'Tamu Undangan',
    initialOpen: false,
    lockBodyScroll: false,
    hideFloatingButton: true,
  }), [])

  const siriusData = useMemo(() => ({
    ...(CLIENTS['demo-sirius']?.data || {}),
    guestName: 'Tamu Undangan',
    initialOpen: false,
    lockBodyScroll: false,
    hideFloatingButton: true,
  }), [])

  return (
    <div className="banner-wrapper">
      <div className="banner-canvas">

        {/* Grand Luxury Background Silhouette Ornaments */}
        <LuxurySilhouetteBg />

        {/* Subtle Luxury Corner Ornaments */}
        <LuxuryCornerTL />
        <LuxuryCornerTR />

        {/* Ambient Diamond Sparkles in balanced negative space */}
        <DiamondSparkle style={{ top: '150px', left: '85px' }} />
        <DiamondSparkle style={{ top: '150px', right: '85px' }} />
        <DiamondSparkle style={{ top: '485px', left: '45px' }} />
        <DiamondSparkle style={{ top: '485px', right: '45px' }} />

        {/* ── 1. HEADER SECTION (POPPINS BOLD & LUXURY COPYWRITING) ── */}
        <header className="banner-header">
          {/* Eyebrow Label with Luxury Hairlines */}
          <div className="banner-eyebrow">
            <span className="eyebrow-line left" />
            <span className="eyebrow-diamond">✦</span>
            <span className="eyebrow-text">THE SIGNATURE COLLECTION 2026</span>
            <span className="eyebrow-diamond">✦</span>
            <span className="eyebrow-line right" />
          </div>

          <h1 className="banner-title">
            <span className="banner-title-top">UNDANGAN WEBSITE</span>
            <span className="banner-title-gold">TANPA FOTO</span>
          </h1>

          <div className="banner-badge-wrapper">
            <div className="banner-badge-pill">
              <span className="badge-gem">✦</span>
              <span className="banner-badge-text">13+ PILIHAN TEMA MEWAH & EKSKLUSIF</span>
              <span className="badge-gem">✦</span>
            </div>
          </div>
        </header>

        {/* ── 2. SHOWCASE (5-PHONE STEPPED HIERARCHY — MUCH LARGER) ── */}
        <section className="banner-showcase">
          <div className="banner-center-glow" />

          <div className="banner-phones-row">

            {/* Phone 1: Far Left (Smallest, stepped down: W 200px / H 405px) */}
            <div className="phone-item phone-p1">
              <div className="phone-shell">
                <div className="phone-island"><span className="phone-camera" /></div>
                <div className="phone-screen screen-bg-altair">
                  <div className="is-mockup-frame">
                    <div className="phone-screen-scaler" style={{ transform: 'scale(0.4948)', height: '804px' }}>
                      <Suspense fallback={null}>
                        <AltairComponent data={altairData} />
                      </Suspense>
                    </div>
                  </div>
                </div>
                <div className="phone-home-bar" />
              </div>
            </div>

            {/* Phone 2: Mid Left (Medium: W 240px / H 485px) */}
            <div className="phone-item phone-p2">
              <div className="phone-shell">
                <div className="phone-island"><span className="phone-camera" /></div>
                <div className="phone-screen screen-bg-lyra">
                  <div className="is-mockup-frame">
                    <div className="phone-screen-scaler" style={{ transform: 'scale(0.5974)', height: '800px' }}>
                      <Suspense fallback={null}>
                        <LyraComponent data={lyraData} />
                      </Suspense>
                    </div>
                  </div>
                </div>
                <div className="phone-home-bar" />
              </div>
            </div>

            {/* Phone 3: Center Hero (PALING BESAR & TINGGI: W 280px / H 570px) */}
            <div className="phone-item phone-p3">
              <div className="phone-shell">
                <div className="phone-island"><span className="phone-camera" /></div>
                <div className="phone-screen screen-bg-vega">
                  <div className="is-mockup-frame">
                    <div className="phone-screen-scaler" style={{ transform: 'scale(0.6948)', height: '807px' }}>
                      <Suspense fallback={null}>
                        <VegaComponent data={vegaData} />
                      </Suspense>
                    </div>
                  </div>
                </div>
                <div className="phone-home-bar" />
              </div>
            </div>

            {/* Phone 4: Mid Right (Medium: W 240px / H 485px) — Spica (Cerah, Warm Terracotta & Ivory) */}
            <div className="phone-item phone-p4">
              <div className="phone-shell">
                <div className="phone-island"><span className="phone-camera" /></div>
                <div className="phone-screen screen-bg-spica">
                  <div className="is-mockup-frame">
                    <div className="phone-screen-scaler" style={{ transform: 'scale(0.5974)', height: '800px' }}>
                      <Suspense fallback={null}>
                        <SpicaComponent data={spicaData} />
                      </Suspense>
                    </div>
                  </div>
                </div>
                <div className="phone-home-bar" />
              </div>
            </div>

            {/* Phone 5: Far Right (Smallest, stepped down: W 200px / H 405px) */}
            <div className="phone-item phone-p5">
              <div className="phone-shell">
                <div className="phone-island"><span className="phone-camera" /></div>
                <div className="phone-screen screen-bg-sirius">
                  <div className="is-mockup-frame">
                    <div className="phone-screen-scaler" style={{ transform: 'scale(0.4948)', height: '804px' }}>
                      <Suspense fallback={null}>
                        <SiriusComponent data={siriusData} />
                      </Suspense>
                    </div>
                  </div>
                </div>
                <div className="phone-home-bar" />
              </div>
            </div>

          </div>

          {/* Floor contact shadow */}
          <div className="banner-floor-shadow" />
        </section>

        {/* ── 3. FOOTER SECTION (ARSY STUDIO LUXURY SEAL) ── */}
        <footer className="banner-footer">
          <div className="banner-brand-seal">
            <span className="seal-rule left" />
            <div className="seal-badge">
              <span className="seal-diamond">✦</span>
              <span className="banner-brand-title">ARSY STUDIO</span>
              <span className="seal-diamond">✦</span>
            </div>
            <span className="seal-rule right" />
          </div>
          <span className="banner-brand-tagline">EXCLUSIVE DIGITAL INVITATION BOUTIQUE</span>
        </footer>

      </div>
    </div>
  )
}
