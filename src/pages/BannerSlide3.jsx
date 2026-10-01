import './BannerSlide3.css'

/* ── Top-Left Luxury Double-Ring Seal with Laurel Wreath ── */
function TopLeftBrandSeal() {
  return (
    <div className="slide3-brand-seal">
      <svg width="74" height="74" viewBox="0 0 84 84" fill="none">
        {/* Double gold circle */}
        <circle cx="42" cy="42" r="39" stroke="#d4af37" strokeWidth="1.2" strokeOpacity="0.85" />
        <circle cx="42" cy="42" r="34" stroke="#d4af37" strokeWidth="0.8" strokeDasharray="3 3" strokeOpacity="0.65" />
        
        {/* Left Laurel Leaves */}
        <path d="M 22 56 C 18 48 18 36 25 28" stroke="#d4af37" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeOpacity="0.75" />
        <path d="M 19 50 Q 14 47 16 43 Q 21 44 20 49" fill="url(#goldGradSeal3)" opacity="0.85" />
        <path d="M 18 42 Q 13 39 16 35 Q 21 37 19 41" fill="url(#goldGradSeal3)" opacity="0.85" />
        <path d="M 20 34 Q 16 30 20 27 Q 24 30 21 33" fill="url(#goldGradSeal3)" opacity="0.85" />
        <path d="M 24 28 Q 22 23 27 21 Q 29 25 25 27" fill="url(#goldGradSeal3)" opacity="0.85" />

        {/* Right Laurel Leaves */}
        <path d="M 62 56 C 66 48 66 36 59 28" stroke="#d4af37" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeOpacity="0.75" />
        <path d="M 65 50 Q 70 47 68 43 Q 63 44 64 49" fill="url(#goldGradSeal3)" opacity="0.85" />
        <path d="M 66 42 Q 71 39 68 35 Q 63 37 65 41" fill="url(#goldGradSeal3)" opacity="0.85" />
        <path d="M 64 34 Q 68 30 64 27 Q 60 30 63 33" fill="url(#goldGradSeal3)" opacity="0.85" />
        <path d="M 60 28 Q 62 23 57 21 Q 55 25 59 27" fill="url(#goldGradSeal3)" opacity="0.85" />

        {/* Interlocking Wedding Rings Emblem */}
        <g transform="translate(23, 29)">
          <circle cx="12" cy="13" r="10.5" stroke="url(#goldGradSeal3)" strokeWidth="2.6" fill="none" />
          <circle cx="25" cy="13" r="10.5" stroke="url(#goldGradSeal3)" strokeWidth="2.6" fill="none" />
        </g>
        <defs>
          <linearGradient id="goldGradSeal3" x1="0" y1="0" x2="48" y2="40" gradientUnits="userSpaceOnUse">
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
    <div className={`slide3-corner-bracket corner-${position}`}>
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
    <div className="slide3-ambient-sparkle" style={{ ...style, opacity, width: size, height: size }}>
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none">
        <path
          d="M 12 0 Q 12 12 24 12 Q 12 12 12 24 Q 12 12 0 12 Q 12 12 12 0 Z"
          fill="url(#sparkleGoldGrad3)"
        />
        <defs>
          <linearGradient id="sparkleGoldGrad3" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fef08a" />
            <stop offset="1" stopColor="#b45309" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

/* ── Feature Card Component ── */
function FeatureCard({ icon, title, desc }) {
  return (
    <div className="slide3-card">
      <div className="slide3-card-icon-wrap">
        {icon}
      </div>
      <div className="slide3-card-content">
        <h3 className="slide3-card-title">{title}</h3>
        <p className="slide3-card-desc">{desc}</p>
      </div>
    </div>
  )
}

export default function BannerSlide3() {
  return (
    <div className="slide3-wrapper">
      <div className="slide3-canvas">

        {/* Outer Inset Luxury Gold Border Frame */}
        <div className="slide3-gold-frame" />

        {/* 4 Corner Accents */}
        <CornerBracket position="tl" />
        <CornerBracket position="tr" />
        <CornerBracket position="bl" />
        <CornerBracket position="br" />

        {/* Top-Left Arsy Studio Luxury Brand Seal */}
        <TopLeftBrandSeal />

        {/* Delicate Ambient Gold Diamond Sparkles */}
        <AmbientSparkle style={{ top: '48px', left: '125px' }} size={16} opacity={0.7} />
        <AmbientSparkle style={{ top: '65px', right: '70px' }} size={18} opacity={0.7} />
        <AmbientSparkle style={{ top: '150px', left: '42px' }} size={11} opacity={0.45} />
        <AmbientSparkle style={{ top: '160px', right: '42px' }} size={12} opacity={0.45} />
        <AmbientSparkle style={{ bottom: '90px', left: '40px' }} size={14} opacity={0.55} />
        <AmbientSparkle style={{ bottom: '90px', right: '40px' }} size={15} opacity={0.6} />

        {/* ── HEADER ── */}
        <div className="slide3-header">
          <div className="slide3-eyebrow-pill">
            <span className="slide3-eyebrow-text">✦ FITUR LENGKAP &amp; INTERAKTIF ✦</span>
          </div>
          <h1 className="slide3-title">
            Semua yang Anda Butuhkan dalam <span className="slide3-title-accent">Satu Tautan</span>
          </h1>
          <p className="slide3-subtitle">
            Dilengkapi fitur interaktif modern yang memudahkan, menghemat waktu, dan memanjakan seluruh tamu undangan Anda.
          </p>
        </div>

        {/* ── MAIN STAGE ── */}
        <div className="slide3-stage">

          {/* ── LEFT COLUMN (3 Cards) ── */}
          <div className="slide3-col slide3-col-left">

            {/* 1. Google Maps */}
            <FeatureCard
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              }
              title="Navigasi Google Maps"
              desc="Panduan rute presisi 1-klik menuju gedung atau lokasi venue acara dengan akurat."
            />

            {/* 2. Countdown Timer */}
            <FeatureCard
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              }
              title="Countdown Hari H"
              desc="Hitung mundur otomatis hari, jam, menit, &amp; detik menuju hari bahagia secara real-time."
            />

            {/* 3. Google Calendar */}
            <FeatureCard
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                  <path d="M9 16l2 2 4-4" />
                </svg>
              }
              title="Pengingat Kalender"
              desc="Satu ketukan bagi tamu untuk menyimpan agenda acara langsung ke kalender ponselnya."
            />

          </div>

          {/* ── CENTER PHONES SHOWCASE (2 Realistic Dual Phones) ── */}
          <div className="slide3-center-phones">

            {/* Left Phone: Waktu, Lokasi & Google Maps */}
            <div className="slide3-phone phone-left">
              <div className="slide3-phone-island" />
              <div className="slide3-phone-screen">
                <div className="slide3-screen-event">
                  <div className="slide3-screen-header">
                    <span className="slide3-screen-eyebrow">AGENDA ACARA</span>
                    <h4 className="slide3-screen-title">Waktu &amp; Lokasi</h4>
                  </div>

                  {/* Akad Box */}
                  <div className="slide3-event-box">
                    <div className="slide3-event-type">Akad Nikah</div>
                    <div className="slide3-event-time">Sabtu, 15 Feb 2026 · 08.00 WIB</div>
                    <div className="slide3-event-venue">Masjid Al-Ikhlas Bandung</div>
                    <a className="slide3-screen-btn btn-gold" href="#!">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      <span>Petunjuk Arah Maps</span>
                    </a>
                  </div>

                  {/* Resepsi Box */}
                  <div className="slide3-event-box">
                    <div className="slide3-event-type">Walimatul Ursy</div>
                    <div className="slide3-event-time">Sabtu, 15 Feb 2026 · 11.00 WIB</div>
                    <div className="slide3-event-venue">Grand Ballroom Hotel</div>
                    <a className="slide3-screen-btn btn-outline" href="#!">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                      <span>Simpan Kalender</span>
                    </a>
                  </div>
                </div>

                <div className="slide3-phone-sheen" />
                <div className="slide3-phone-home" />
              </div>
            </div>

            {/* Right Phone: Interactive Features (Countdown, Amplop, Buku Tamu) */}
            <div className="slide3-phone phone-right">
              <div className="slide3-phone-island" />
              <div className="slide3-phone-screen">
                <div className="slide3-screen-interactive">
                  <div className="slide3-screen-header">
                    <span className="slide3-screen-eyebrow">FITUR INTERAKTIF</span>
                    <h4 className="slide3-screen-title">Countdown &amp; Kado</h4>
                  </div>

                  {/* Countdown Row */}
                  <div className="slide3-countdown-row">
                    <div className="slide3-count-box">
                      <span className="slide3-count-num">159</span>
                      <span className="slide3-count-lbl">Hari</span>
                    </div>
                    <div className="slide3-count-box">
                      <span className="slide3-count-num">09</span>
                      <span className="slide3-count-lbl">Jam</span>
                    </div>
                    <div className="slide3-count-box">
                      <span className="slide3-count-num">33</span>
                      <span className="slide3-count-lbl">Mnt</span>
                    </div>
                    <div className="slide3-count-box">
                      <span className="slide3-count-num">29</span>
                      <span className="slide3-count-lbl">Dtk</span>
                    </div>
                  </div>

                  {/* Amplop Digital Box */}
                  <div className="slide3-gift-box">
                    <div className="slide3-gift-bank-row">
                      <span className="slide3-gift-bank">Bank BCA</span>
                      <span className="slide3-gift-copy">Salin Rekening</span>
                    </div>
                    <div className="slide3-gift-num">8210-9876-54</div>
                    <div className="slide3-gift-name">a.n. Muhammad Ardiansyah</div>
                  </div>

                  {/* Wishes Preview */}
                  <div className="slide3-wishes-preview">
                    <div className="slide3-wishes-title">Doa &amp; Ucapan Tamu</div>
                    <div className="slide3-wish-bubble">
                      &ldquo;Barakallahu lakuma, semoga menjadi keluarga sakinah mawaddah warahmah!&rdquo;
                    </div>
                  </div>
                </div>

                <div className="slide3-phone-sheen" />
                <div className="slide3-phone-home" />
              </div>
            </div>

          </div>

          {/* ── RIGHT COLUMN (3 Cards) ── */}
          <div className="slide3-col slide3-col-right">

            {/* 4. Amplop Digital & QRIS */}
            <FeatureCard
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 12 20 22 4 22 4 12" />
                  <rect x="2" y="7" width="20" height="5" />
                  <line x1="12" y1="22" x2="12" y2="7" />
                  <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                  <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                </svg>
              }
              title="Amplop Digital &amp; QRIS"
              desc="Transfer hadiah instan via nomor rekening bank, QRIS, &amp; alamat kirim kado fisik."
            />

            {/* 5. Buku Tamu & Ucapan Doa */}
            <FeatureCard
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  <path d="M8 10h.01" />
                  <path d="M12 10h.01" />
                  <path d="M16 10h.01" />
                </svg>
              }
              title="Buku Tamu &amp; Doa Restu"
              desc="Kolom interaktif bagi tamu untuk menyampaikan pesan doa selamat secara langsung."
            />

            {/* 6. Backsound Musik */}
            <FeatureCard
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18V5l12-2v13" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="16" r="3" />
                </svg>
              }
              title="Backsound Musik Syahdu"
              desc="Alunan musik instrumental berkelas yang dilengkapi kontrol audio play/pause elegan."
            />

          </div>

        </div>

        {/* ── BOTTOM HIGHLIGHT RIBBON (Complementary Highlights) ── */}
        <div className="slide3-bottom-ribbon">
          <div className="slide3-ribbon-item">
            <span className="slide3-ribbon-icon">✦</span>
            <span>Konfirmasi Kehadiran (RSVP) WhatsApp</span>
          </div>
          <span className="slide3-ribbon-dot">●</span>
          <div className="slide3-ribbon-item">
            <span className="slide3-ribbon-icon">✦</span>
            <span>100% Desain Responsif di Semua HP</span>
          </div>
          <span className="slide3-ribbon-dot">●</span>
          <div className="slide3-ribbon-item">
            <span className="slide3-ribbon-icon">✦</span>
            <span>Loading Ringan &amp; Super Cepat</span>
          </div>
        </div>

        {/* ── BOTTOM BOUTIQUE SIGNATURE TAG ── */}
        <div className="slide3-signature-tag">
          ✦ ARSY STUDIO · THE SIGNATURE COLLECTION 2026 ✦
        </div>

      </div>
    </div>
  )
}
