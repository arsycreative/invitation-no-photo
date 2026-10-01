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

export default function BannerSlide5() {
  const ThemeComponent = THEMES['vega']?.component
  const clientData = useMemo(() => {
    const raw = CLIENTS['demo']?.data || {}
    return {
      ...raw,
      guestName: 'Tamu Undangan',
      initialOpen: true,
      lockBodyScroll: false,
      hideFloatingButton: true,
    }
  }, [])

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

        {/* Ambient Gold Diamond Sparkles */}
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
            Undangan digital mewah siap disebar dengan proses cepat dan dibimbing sampai rapi.
          </p>
        </div>

        {/* ── MAIN CONTENT: LEFT STEPS + RIGHT GRAND MOCKUP ── */}
        <div className="slide5-main-stage">

          {/* LEFT COLUMN: 3 STEPS VERTICAL + SERVICE GUARANTEE */}
          <div className="slide5-left-column">
            
            {/* Step 01 */}
            <div className="slide5-step-card">
              <div className="slide5-step-badge">01</div>
              <div className="slide5-step-body">
                <h3 className="slide5-step-title">Pilih Desain Tema</h3>
                <p className="slide5-step-desc">
                  Pilih dari 13+ katalog desain mewah yang tersedia sesuai tema acara Anda.
                </p>
              </div>
            </div>

            {/* Step 02 */}
            <div className="slide5-step-card">
              <div className="slide5-step-badge">02</div>
              <div className="slide5-step-body">
                <h3 className="slide5-step-title">Kirim Data Acara</h3>
                <p className="slide5-step-desc">
                  Cukup isi formulir data simpel, teks &amp; susunan acara dibantu sampai rapi.
                </p>
              </div>
            </div>

            {/* Step 03 */}
            <div className="slide5-step-card">
              <div className="slide5-step-badge">03</div>
              <div className="slide5-step-body">
                <h3 className="slide5-step-title">Undangan Siap Disebar</h3>
                <p className="slide5-step-desc">
                  Link resmi langsung aktif dan bebas disebar ke seluruh tamu undangan.
                </p>
              </div>
            </div>

            {/* Priority Service Assistance Box */}
            <div className="slide5-assurance-box">
              <div className="slide5-assurance-tag">✦ LAYANAN PRIORITAS &amp; RAMAH ✦</div>
              <div className="slide5-assurance-list">
                <div className="slide5-assurance-item">- Format data simpel &amp; panduan instan</div>
                <div className="slide5-assurance-item">- Dibantu penataan teks &amp; doa sampai rapi</div>
                <div className="slide5-assurance-item">- Fast respon &amp; siap konsultasi gratis</div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: SINGLE GRAND PHONE MOCKUP */}
          <div className="slide5-right-column">
            
            {/* Top Mockup Header Pill */}
            <div className="slide5-mockup-badge">
              <span className="slide5-mockup-badge-text">✦ CONTOH HASIL UNDANGAN SIAP DISEBAR ✦</span>
            </div>

            {/* Grand Smartphone Mockup Shell */}
            <div className="slide5-phone-shell">
              <div className="slide5-phone-island">
                <span className="slide5-phone-camera" />
              </div>

              <div className="slide5-phone-screen screen-bg-vega">
                <div className="is-mockup-frame">
                  <div className="slide5-phone-scaler">
                    {ThemeComponent && (
                      <Suspense fallback={null}>
                        <ThemeComponent data={clientData} />
                      </Suspense>
                    )}
                  </div>
                </div>

                {/* Floating On-Screen Ready Tag */}
                <div className="slide5-screen-tag-pill">
                  <span>✦ STATUS: AKTIF &amp; SIAP DISEBAR ✦</span>
                </div>

                <div className="slide5-phone-sheen" />
              </div>

              <div className="slide5-phone-home" />
            </div>

          </div>

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
            <span>- Bebas Sebar Tanpa Batas Tamu</span>
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
