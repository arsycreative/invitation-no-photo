import './CatalogPage.css'
import './BannerSlide6.css'

/* ── Top-Left Luxury Double-Ring Seal with Laurel Wreath ── */
function TopLeftBrandSeal() {
  return (
    <div className="slide6-brand-seal">
      <svg width="74" height="74" viewBox="0 0 84 84" fill="none">
        <circle cx="42" cy="42" r="39" stroke="#d4af37" strokeWidth="1.2" strokeOpacity="0.85" />
        <circle cx="42" cy="42" r="34" stroke="#d4af37" strokeWidth="0.8" strokeDasharray="3 3" strokeOpacity="0.65" />
        
        {/* Left Laurel Leaves */}
        <path d="M 22 56 C 18 48 18 36 25 28" stroke="#d4af37" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeOpacity="0.75" />
        <path d="M 19 50 Q 14 47 16 43 Q 21 44 20 49" fill="url(#goldGradSeal6)" opacity="0.85" />
        <path d="M 18 42 Q 13 39 16 35 Q 21 37 19 41" fill="url(#goldGradSeal6)" opacity="0.85" />
        <path d="M 20 34 Q 16 30 20 27 Q 24 30 21 33" fill="url(#goldGradSeal6)" opacity="0.85" />
        <path d="M 24 28 Q 22 23 27 21 Q 29 25 25 27" fill="url(#goldGradSeal6)" opacity="0.85" />

        {/* Right Laurel Leaves */}
        <path d="M 62 56 C 66 48 66 36 59 28" stroke="#d4af37" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeOpacity="0.75" />
        <path d="M 65 50 Q 70 47 68 43 Q 63 44 64 49" fill="url(#goldGradSeal6)" opacity="0.85" />
        <path d="M 66 42 Q 71 39 68 35 Q 63 37 65 41" fill="url(#goldGradSeal6)" opacity="0.85" />
        <path d="M 64 34 Q 68 30 64 27 Q 60 30 63 33" fill="url(#goldGradSeal6)" opacity="0.85" />
        <path d="M 60 28 Q 62 23 57 21 Q 55 25 59 27" fill="url(#goldGradSeal6)" opacity="0.85" />

        {/* Interlocking Rings Emblem */}
        <g transform="translate(23, 29)">
          <circle cx="12" cy="13" r="10.5" stroke="url(#goldGradSeal6)" strokeWidth="2.6" fill="none" />
          <circle cx="25" cy="13" r="10.5" stroke="url(#goldGradSeal6)" strokeWidth="2.6" fill="none" />
        </g>
        <defs>
          <linearGradient id="goldGradSeal6" x1="0" y1="0" x2="48" y2="40" gradientUnits="userSpaceOnUse">
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
    <div className={`slide6-corner-bracket corner-${position}`}>
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
    <div className="slide6-ambient-sparkle" style={{ ...style, opacity, width: size, height: size }}>
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none">
        <path
          d="M 12 0 Q 12 12 24 12 Q 12 12 12 24 Q 12 12 0 12 Q 12 12 12 0 Z"
          fill="url(#sparkleGoldGrad6)"
        />
        <defs>
          <linearGradient id="sparkleGoldGrad6" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fef08a" />
            <stop offset="1" stopColor="#b45309" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

/* ── Single FAQ Card Component ── */
function FaqCard({ question, answer, isSpecial = false, specialTag = null }) {
  return (
    <div className={`slide6-faq-card ${isSpecial ? 'is-special-card' : ''}`}>
      {specialTag && <div className="slide6-special-tag">{specialTag}</div>}
      <div className="slide6-card-q-row">
        <span className="slide6-q-badge">Q</span>
        <h3 className="slide6-q-text">{question}</h3>
      </div>
      <div className="slide6-card-a-row">
        <span className="slide6-a-badge">A</span>
        <p className="slide6-a-text">{answer}</p>
      </div>
    </div>
  )
}

export default function BannerSlide6() {
  return (
    <div className="slide6-wrapper">
      <div className="slide6-canvas">

        {/* Outer Inset Luxury Gold Border Frame */}
        <div className="slide6-gold-frame" />

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
        <div className="slide6-header">
          <div className="slide6-eyebrow-pill">
            <span className="slide6-eyebrow-text">✦ PANDUAN &amp; TANYA JAWAB ✦</span>
          </div>
          <h1 className="slide6-title">
            Pertanyaan yang <span className="slide6-title-accent">Sering Diajukan</span>
          </h1>
          <p className="slide6-subtitle">
            Informasi lengkap seputar pemesanan, kustomisasi data, dan layanan undangan kami.
          </p>
        </div>

        {/* ── 2-COLUMN FAQ GRID (5 Left + 5 Right) ── */}
        <div className="slide6-faq-grid">

          {/* ── LEFT COLUMN (5 CARDS) ── */}
          <div className="slide6-faq-col">

            {/* Q1 */}
            <FaqCard
              question="Berapa lama proses pengerjaannya?"
              answer="Pengerjaan kilat selesai dalam 1×24 jam setelah data acara lengkap kami terima."
            />

            {/* Q2 */}
            <FaqCard
              question="Apakah bisa revisi jika ada kesalahan data / jadwal?"
              answer="Ya, bebas revisi untuk penyesuaian teks, nama, waktu, dan lokasi acara sampai benar-benar rapi."
            />

            {/* Q3 */}
            <FaqCard
              question="Bagaimana cara mengisi data acaranya?"
              answer="Kami akan mengirimkan formulir data simpel yang praktis dan sangat mudah diisi langsung lewat HP."
            />

            {/* Q4 */}
            <FaqCard
              question="Apakah bisa pengerjaan kilat express?"
              answer="Ya, tersedia layanan prioritas express untuk kebutuhan mendesak yang bisa selesai dalam hitungan jam."
            />

            {/* Q5 */}
            <FaqCard
              question="Kapan waktu terbaik untuk memesan undangan ini?"
              answer="Disarankan 1 hingga 4 minggu sebelum hari H agar Anda memiliki waktu leluasa untuk menyebarkannya."
            />

          </div>

          {/* ── RIGHT COLUMN (5 CARDS) ── */}
          <div className="slide6-faq-col">

            {/* Q6 */}
            <FaqCard
              question="Apakah disediakan format teks sebar ke WhatsApp?"
              answer="Ya, kami sediakan template kata-kata pengantar WhatsApp yang sopan dan rapi, tinggal copy-paste ke tamu."
            />

            {/* Q7 */}
            <FaqCard
              question="Apakah teks doa, kutipan, atau ayat suci bisa disesuaikan?"
              answer="Ya, seluruh teks pembuka, doa, ayat suci, maupun kutipan bebas disesuaikan dengan konsep acara Anda."
            />

            {/* Q8 */}
            <FaqCard
              question="Apakah bisa digunakan untuk acara selain pernikahan?"
              answer="Ya, desain kami bisa disesuaikan untuk lamaran, wisuda, tasyakuran, aqiqah, pengajian, dan doa bersama."
            />

            {/* Q9 */}
            <FaqCard
              question="Apakah data pribadi acara kami terjamin aman?"
              answer="Sangat aman. Seluruh data acara Anda hanya digunakan khusus untuk pembuatan undangan dan terjaga kerahasiaannya."
            />

            {/* Special 10th Card: Direct Fast Response Assistance */}
            <FaqCard
              isSpecial={true}
              specialTag="✦ LAYANAN KONSULTASI RAMAH ✦"
              question="Punya pertanyaan atau kebutuhan khusus lainnya?"
              answer="Tim kami siap membantu Anda dengan ramah dan fast respon. Silakan chat kami kapan saja."
            />

          </div>

        </div>

        {/* ── BOTTOM HIGHLIGHT RIBBON ── */}
        <div className="slide6-bottom-ribbon">
          <div className="slide6-ribbon-item">
            <span>- Pengerjaan Kilat 1×24 Jam</span>
          </div>
          <div className="slide6-ribbon-item">
            <span>- Bebas Revisi Sampai Selesai</span>
          </div>
          <div className="slide6-ribbon-item">
            <span>- Konsultasi Ramah &amp; Fast Respon</span>
          </div>
        </div>

        {/* ── BOTTOM SIGNATURE BOUTIQUE TAG ── */}
        <div className="slide6-signature-tag">
          ✦ ARSY STUDIO · THE SIGNATURE COLLECTION 2026 ✦
        </div>

      </div>
    </div>
  )
}
