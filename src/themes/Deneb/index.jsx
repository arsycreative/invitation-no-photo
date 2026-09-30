import { useState, useEffect } from 'react'
import confetti from 'canvas-confetti'
import {
  DenebJellyDrop,
  DenebBubblePop,
  DenebWobbleBalloon,
  DenebPartyStreamer,
} from './DenebMotion'
import {
  PastelFestivalBalloons,
  PastelRibbonGarland,
  PastelFairytaleWatermark,
  PastelCornerFlourish,
  PastelFloatingStardust,
} from './DenebOrnaments'
import InvitationCover from '../../components/InvitationCover'
import EventRundown from '../../components/EventRundown'
import WeddingGift from '../../components/WeddingGift'
import GuestBook from '../../components/GuestBook'
import './Deneb.css'

function ConfettiRain() {
  const COLORS = ['#ff6584', '#45aaf2', '#20bf6b', '#fed330', '#a55eea', '#fd9644']
  const pieces = Array.from({ length: 22 }, (_, i) => ({
    id: i,
    left: `${(i / 22) * 100 + Math.random() * 4}%`,
    color: COLORS[i % COLORS.length],
    duration: `${Math.random() * 5 + 7}s`,
    delay: `${Math.random() * 6}s`,
    size: `${Math.random() * 8 + 6}px`,
    shape: i % 3 === 0 ? '50%' : i % 3 === 1 ? '4px' : '0',
  }))
  return (
    <div className="deneb-confetti-wrap" aria-hidden="true">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="deneb-confetti-piece"
          style={{
            left: p.left,
            background: p.color,
            animationDuration: p.duration,
            animationDelay: p.delay,
            width: p.size,
            height: p.size,
            borderRadius: p.shape,
          }}
        />
      ))}
    </div>
  )
}

function DenebCountdown({ targetDate }) {
  const calc = () => {
    if (!targetDate) return { d: 0, h: 0, m: 0, s: 0 }
    const target = new Date(targetDate).getTime()
    if (isNaN(target)) return { d: 0, h: 0, m: 0, s: 0 }
    const diff = target - Date.now()
    if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 }
    return {
      d: Math.floor(diff / 864e5),
      h: Math.floor((diff % 864e5) / 36e5),
      m: Math.floor((diff % 36e5) / 6e4),
      s: Math.floor((diff % 6e4) / 1e3),
    }
  }

  const [time, setTime] = useState(calc)

  useEffect(() => {
    setTime(calc())
    const id = setInterval(() => setTime(calc()), 1000)
    return () => clearInterval(id)
  }, [targetDate])

  const pad = (n) => String(Number.isFinite(n) ? n : 0).padStart(2, '0')

  return (
    <div className="deneb-countdown-clean">
      <div className="deneb-countdown-digits">
        {[
          { val: time.d, unit: 'Hari', color: '#ff477e' },
          { val: time.h, unit: 'Jam', color: '#a855f7' },
          { val: time.m, unit: 'Menit', color: '#0ea5e9' },
          { val: time.s, unit: 'Detik', color: '#10b981' },
        ].map((item, i) => (
          <div key={item.unit} className="deneb-countdown-item-group">
            {i > 0 && <span className="deneb-countdown-colon">:</span>}
            <div className="deneb-countdown-box" style={{ '--accent-color': item.color }}>
              <span className="deneb-digit">{pad(item.val)}</span>
              <span className="deneb-digit-unit">{item.unit}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Deneb({ data = {} }) {
  const {
    kidName = 'Zahra',
    age = 7,
    day = 'Minggu',
    date = '20 April 2026',
    time = '13.00 — 16.00 WIB',
    isoDate = '2026-12-20T13:00:00',
    venue = 'Rumah Zahra Sayang (Taman Bunga)',
    address = 'Jl. Bunga Mawar No. 5, Sukasari, Kota Bandung, Jawa Barat',
    mapsLink = 'https://maps.google.com',
    calendarLink,
    dressCode = 'Nuansa Warna Pastel (Pink, Lilac, Mint, Peach)',
    hostParents = 'Bapak & Ibu Dian Kusuma',
    rsvpLink = 'https://wa.me/628123456789',
    rsvpDeadline = 'Kamis, 17 April 2026',
    message,
    rundown = [],
    digitalGifts = [],
    physicalAddress,
    wishes = [],
    brandName,
    guestName = 'Tamu Undangan',
    initialOpen = false,
    lockBodyScroll = true,
    hideFloatingButton = false,
  } = data

  const [isCoverOpen, setIsCoverOpen] = useState(initialOpen)

  const handleOpenCover = () => {
    setIsCoverOpen(true)
    confetti({
      particleCount: 140,
      spread: 100,
      origin: { x: 0.5, y: 0.4 },
      colors: ['#ff6584', '#45aaf2', '#20bf6b', '#fed330', '#a55eea'],
    })
  }

  return (
    <div className="deneb-root">
      {/* ── Ambient Floating Confetti & Stardust ── */}
      <PastelFloatingStardust />

      {/* ── Opening Cover ── */}
      <InvitationCover
        isOpen={isCoverOpen}
        onOpen={handleOpenCover}
        onClose={() => setIsCoverOpen(false)}
        theme="deneb"
        type="birthday-girl"
        title="Pesta Ulang Tahun"
        coupleOrKidName={kidName}
        date={`${day}, ${date}`}
        guestName={guestName}
        lockBodyScroll={lockBodyScroll}
        hideFloatingButton={hideFloatingButton}
      />

      {isCoverOpen && (
        <div className="invitation-reveal-enter" style={{ width: '100%' }}>
          <ConfettiRain />

          <div className="deneb-page">
            <PastelRibbonGarland />

            {/* ════════════════════════════════════════════════
                SECTION 1: HERO / FESTIVAL PROCLAMATION (100vh)
                ════════════════════════════════════════════════ */}
            <section className="deneb-section deneb-hero-section">
              <PastelFairytaleWatermark size={520} opacity={0.065} />
              <PastelCornerFlourish className="deneb-corner--tl" />
              <PastelCornerFlourish className="deneb-corner--tr" />
              <PastelCornerFlourish className="deneb-corner--bl" />
              <PastelCornerFlourish className="deneb-corner--br" />

              <div className="deneb-section-content">
                <DenebWobbleBalloon delay={0.15}>
                  <div className="deneb-hero-balloons">
                    <PastelFestivalBalloons size={114} />
                  </div>
                </DenebWobbleBalloon>

                <DenebJellyDrop delay={0.25}>
                  <span className="deneb-festival-tag">
                    ✦ PESTA ULANG TAHUN CERIA ✦
                  </span>
                </DenebJellyDrop>

                <DenebJellyDrop delay={0.32}>
                  <span className="deneb-hero-eyebrow">
                    Yuk, Hadir Merayakan Hari Bahagia
                  </span>
                </DenebJellyDrop>

                <DenebBubblePop delay={0.4}>
                  <h1 className="deneb-hero-name">{kidName}</h1>
                </DenebBubblePop>

                <DenebJellyDrop delay={0.48}>
                  <div className="deneb-hero-age-pill">
                    <span className="deneb-age-text">Merayakan Ulang Tahun ke-</span>
                    <span className="deneb-age-num">{age}</span>
                  </div>
                </DenebJellyDrop>

                <DenebJellyDrop delay={0.55}>
                  <div className="deneb-hero-date-badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <rect x="3" y="4" width="18" height="18" rx="3" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                    </svg>
                    <span>{day}, {date} · Bandung</span>
                  </div>
                </DenebJellyDrop>

                <DenebJellyDrop delay={0.62}>
                  <div className="deneb-scroll-hint">
                    <span>Gulir ke Bawah untuk Keseruan Pesta</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </DenebJellyDrop>
              </div>
            </section>

            {/* ════════════════════════════════════════════════
                SECTION 2: SAMBUTAN HANGAT & COUNTDOWN (100vh)
                ════════════════════════════════════════════════ */}
            <section className="deneb-section deneb-welcome-section">
              <PastelFairytaleWatermark size={460} opacity={0.055} />

              <div className="deneb-section-content">
                <DenebJellyDrop delay={0.1}>
                  <div className="deneb-section-head">
                    <span className="deneb-section-kicker">SAMBUTAN HANGAT</span>
                    <h2 className="deneb-section-title">Pesan Manis Zahra</h2>
                    <p className="deneb-section-subtitle">
                      Ungkapan sukacita menyambut kehadiran teman-teman tersayang
                    </p>
                  </div>
                </DenebJellyDrop>

                <DenebJellyDrop delay={0.2}>
                  <div className="deneb-welcome-message-box">
                    <div className="deneb-welcome-quote-icon">🎀</div>
                    <p className="deneb-welcome-text">
                      {message || `Hii teman-teman tersayang!\n\nZahra sangat senang mengundang kamu ke pesta ulang tahun yang ke-${age}!\n\nAda kue lapis pelangi, dekorasi balon cantik, cupcake manis, dan banyak kejutan permainan seru menanti kamu! 🌈🎂`}
                    </p>
                  </div>
                </DenebJellyDrop>

                <DenebJellyDrop delay={0.3}>
                  <div className="deneb-countdown-wrapper">
                    <span className="deneb-countdown-caption">HITUNG MUNDUR HARI PESTA</span>
                    <DenebCountdown targetDate={isoDate} />
                  </div>
                </DenebJellyDrop>
              </div>
            </section>

            {/* ════════════════════════════════════════════════
                SECTION 3: WAKTU & LOKASI PESTA (100vh)
                ════════════════════════════════════════════════ */}
            <section className="deneb-section deneb-events-section">
              <PastelFairytaleWatermark size={480} opacity={0.055} />

              <div className="deneb-section-content">
                <DenebJellyDrop delay={0.1}>
                  <div className="deneb-section-head">
                    <span className="deneb-section-kicker">THE GRAND FESTIVAL PASS</span>
                    <h2 className="deneb-section-title">Waktu &amp; Lokasi Pesta</h2>
                    <p className="deneb-section-subtitle">
                      Pastikan hadir tepat waktu untuk mengikuti seluruh keseruan pesta
                    </p>
                  </div>
                </DenebJellyDrop>

                <DenebBubblePop delay={0.2}>
                  <div className="deneb-pass-card">
                    <div className="deneb-pass-badge-row">
                      <span className="deneb-vip-pill">★ VIP INVITATION PASS ★</span>
                      <span className="deneb-vip-code">BDAY-FESTIVAL-2026</span>
                    </div>

                    <div className="deneb-pass-datetime-grid">
                      <div className="deneb-datetime-col">
                        <span className="deneb-datetime-label">🗓️ HARI &amp; TANGGAL</span>
                        <strong className="deneb-datetime-val">{day}, {date}</strong>
                      </div>
                      <div className="deneb-datetime-col">
                        <span className="deneb-datetime-label">⏰ WAKTU ACARA</span>
                        <strong className="deneb-datetime-val">{time}</strong>
                      </div>
                    </div>

                    <div className="deneb-pass-venue-block">
                      <span className="deneb-venue-label">📍 TEMPAT PELAKSANAAN</span>
                      <strong className="deneb-venue-name">{venue}</strong>
                      <p className="deneb-venue-address">{address}</p>
                    </div>

                    {dressCode && (
                      <div className="deneb-pass-dresscode">
                        <span className="deneb-dresscode-icon">👗</span>
                        <div className="deneb-dresscode-text">
                          <span className="deneb-dresscode-label">DRESS CODE PESTA</span>
                          <span className="deneb-dresscode-val">{dressCode}</span>
                        </div>
                      </div>
                    )}

                    <div className="deneb-pass-buttons">
                      {mapsLink && (
                        <a
                          href={mapsLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="deneb-btn-maps-clean"
                        >
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                          Petunjuk Arah (Maps)
                        </a>
                      )}
                      {calendarLink && (
                        <a
                          href={calendarLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="deneb-btn-cal-clean"
                        >
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <rect x="3" y="4" width="18" height="18" rx="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                          </svg>
                          Simpan ke Kalender
                        </a>
                      )}
                    </div>
                  </div>
                </DenebBubblePop>
              </div>
            </section>

            {/* ════════════════════════════════════════════════
                SECTION 4: AGENDA PESTA CERIA (100vh)
                ════════════════════════════════════════════════ */}
            {rundown.length > 0 && (
              <section className="deneb-section deneb-rundown-section">
                <PastelFairytaleWatermark size={480} opacity={0.055} />

                <div className="deneb-section-content">
                  <DenebJellyDrop delay={0.1}>
                    <div className="deneb-section-head">
                      <span className="deneb-section-kicker">SUSUNAN ACARA</span>
                      <h2 className="deneb-section-title">Agenda Pesta Ceria</h2>
                      <p className="deneb-section-subtitle">
                        Jadwal keseruan yang telah disiapkan untuk teman-teman semua
                      </p>
                    </div>
                  </DenebJellyDrop>

                  <DenebJellyDrop delay={0.2} style={{ width: '100%' }}>
                    <EventRundown
                      rundown={rundown}
                      title="Agenda Pesta Ceria"
                      subtitle="Jadwal keseruan yang telah disiapkan untuk teman-teman semua"
                    />
                  </DenebJellyDrop>
                </div>
              </section>
            )}

            {/* ════════════════════════════════════════════════
                SECTION 5: TANDA KASIH & KADO SPESIAL (100vh)
                ════════════════════════════════════════════════ */}
            {(digitalGifts.length > 0 || physicalAddress) && (
              <section className="deneb-section deneb-gifts-section">
                <PastelFairytaleWatermark size={480} opacity={0.055} />

                <div className="deneb-section-content">
                  <DenebJellyDrop delay={0.1}>
                    <div className="deneb-section-head">
                      <span className="deneb-section-kicker">TANDA KASIH</span>
                      <h2 className="deneb-section-title">Kado Kasih Zahra</h2>
                      <p className="deneb-section-subtitle">
                        Doa restu teman-teman adalah hadiah terindah. Namun bila ingin memberi tanda kasih untuk Zahra, dapat melalui:
                      </p>
                    </div>
                  </DenebJellyDrop>

                  <DenebJellyDrop delay={0.2} style={{ width: '100%' }}>
                    <WeddingGift
                      gifts={digitalGifts}
                      physicalAddress={physicalAddress}
                      title="Kado Kasih Zahra"
                      subtitle={`Doa restu teman-teman adalah yang utama. Namun bila ingin memberi kado manis untuk ${kidName}, dapat melalui:`}
                    />
                  </DenebJellyDrop>
                </div>
              </section>
            )}

            {/* ════════════════════════════════════════════════
                SECTION 6: BUKU TAMU & UCAPAN DOA (100vh)
                ════════════════════════════════════════════════ */}
            <section className="deneb-section deneb-guestbook-section">
              <PastelFairytaleWatermark size={480} opacity={0.055} />

              <div className="deneb-section-content">
                <DenebJellyDrop delay={0.1}>
                  <div className="deneb-section-head">
                    <span className="deneb-section-kicker">BUKU TAMU CERIA</span>
                    <h2 className="deneb-section-title">Ucapan &amp; Doa Kasih</h2>
                    <p className="deneb-section-subtitle">
                      Tuliskan ucapan selamat ulang tahun yang manis dan doa kebaikan untuk Zahra
                    </p>
                  </div>
                </DenebJellyDrop>

                <DenebJellyDrop delay={0.2} style={{ width: '100%' }}>
                  <GuestBook
                    initialWishes={wishes}
                    storageKey="wishes_deneb"
                    title={`Ucapan & Doa untuk ${kidName}`}
                    subtitle={`Tuliskan ucapan selamat ulang tahun yang manis untuk ${kidName}`}
                  />
                </DenebJellyDrop>
              </div>
            </section>

            {/* ════════════════════════════════════════════════
                SECTION 7: KONFIRMASI KEHADIRAN (RSVP) & PENUTUP (100vh)
                ════════════════════════════════════════════════ */}
            <section className="deneb-section deneb-rsvp-section">
              <PastelFairytaleWatermark size={520} opacity={0.065} />
              <PastelCornerFlourish className="deneb-corner--tl" />
              <PastelCornerFlourish className="deneb-corner--tr" />
              <PastelCornerFlourish className="deneb-corner--bl" />
              <PastelCornerFlourish className="deneb-corner--br" />

              <div className="deneb-section-content">
                <DenebJellyDrop delay={0.1}>
                  <div className="deneb-section-head">
                    <span className="deneb-section-kicker">RESERVASI KEHADIRAN</span>
                    <h2 className="deneb-section-title">Konfirmasi Pesta</h2>
                    <p className="deneb-section-subtitle">
                      Mohon konfirmasi kehadiran sebelum {rsvpDeadline} agar kami dapat menyiapkan jamuan dan goodie bag terbaik
                    </p>
                  </div>
                </DenebJellyDrop>

                {hostParents && (
                  <DenebJellyDrop delay={0.2}>
                    <div className="deneb-host-card">
                      <span className="deneb-host-label">Keluarga yang Berbahagia:</span>
                      <strong className="deneb-host-name">{hostParents}</strong>
                    </div>
                  </DenebJellyDrop>
                )}

                {rsvpLink && (
                  <DenebBubblePop delay={0.3}>
                    <a
                      href={rsvpLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="deneb-btn-rsvp-festival"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      Konfirmasi via WhatsApp
                    </a>
                  </DenebBubblePop>
                )}

                <DenebJellyDrop delay={0.4}>
                  <footer className="deneb-footer">
                    <span className="deneb-footer-brand">
                      {brandName || '✦ Undangan Digital · Tema Deneb'}
                    </span>
                  </footer>
                </DenebJellyDrop>
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  )
}
