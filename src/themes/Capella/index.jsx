import { useState, useEffect } from 'react'
import { CapellaReveal, CapellaCard } from './CapellaMotion'
import InvitationCover from '../../components/InvitationCover'
import WeddingGift from '../../components/WeddingGift'
import GuestBook from '../../components/GuestBook'
import './Capella.css'

function CapellaCountdown({ targetDate }) {
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
    <div className="capella-countdown">
      <span className="capella-countdown-label">Menuju Hari Wisuda &amp; Syukuran</span>
      <div className="capella-countdown-digits">
        {[{val: time.d, unit: 'Hari'}, {val: time.h, unit: 'Jam'}, {val: time.m, unit: 'Menit'}, {val: time.s, unit: 'Detik'}].map((item) => (
          <div key={item.unit} className="capella-digit-block">
            <span className="capella-digit">{pad(item.val)}</span>
            <span className="capella-digit-unit">{item.unit}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function MortarboardIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <polygon points="24,10 44,18 24,26 4,18" fill="rgba(212,175,55,0.2)" stroke="#ffd966" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M12 21.5V32C12 32 17 37 24 37C31 37 36 32 36 32V21.5" stroke="#d4af37" strokeWidth="2" strokeLinecap="round"/>
      <path d="M40 20V34" stroke="#ffd966" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="40" cy="36" r="2.5" fill="#ffd966"/>
    </svg>
  )
}

export default function Capella({ data = {} }) {
  const {
    graduateName = 'Aisyah Salsabila',
    graduateFullName = 'dr. Aisyah Salsabila, S.Ked.',
    degree = 'Sarjana Kedokteran (S.Ked.)',
    faculty = 'Fakultas Kedokteran',
    university = 'Universitas Padjadjaran',
    honors = 'Cum Laude · IPK 3.92',
    parents = 'Putri tercinta dari Bapak H. Hendra Gunawan & Ibu Hj. Siti Maryam',
    quote = 'Pendidikan bukan hanya tentang meraih gelar, melainkan tentang dedikasi nurani untuk mengabdi, meringankan beban sesama, dan menebar kemaslahatan bagi umat.',
    quoteAuthor = 'Aisyah Salsabila',
    academicJourney = [
      {
        year: '2022',
        title: 'Masa Pre-Klinik & Laboratorium',
        description: 'Menempa pondasi ilmu anatomi, fisiologi, dan dasar-dasar kedokteran klinis dengan penuh dedikasi.',
      },
      {
        year: '2024',
        title: 'Penelitian & Publikasi Jurnal Ilmiah',
        description: 'Menuntaskan karya tulis ilmiah mengenai epidemiologi klinis dan mempublikasikan hasil riset di simposium nasional.',
      },
      {
        year: '2026',
        title: 'Yudisium & Kelulusan Sarjana Kedokteran',
        description: 'Meraih predikat Cum Laude dan bersiap mengawali babak baru pengabdian profesi dokter.',
      },
    ],
    events = [
      {
        tag: '✦ Sidang Terbuka',
        title: 'Upacara Wisuda Gelombang IV',
        date: 'Rabu, 11 November 2026',
        time: '08.00 — 12.00 WIB',
        venue: 'Graha Sanusi Hardjadinata',
        address: 'Jl. Dipati Ukur No. 35, Lebakgede, Kota Bandung',
        mapsLink: 'https://maps.google.com',
        calendarLink: 'https://calendar.google.com',
      },
      {
        tag: '✦ Tasyakuran & Syukuran',
        title: 'Graduation Dinner & Ramah Tamah',
        date: 'Rabu, 11 November 2026',
        time: '18.30 — 21.00 WIB',
        venue: 'The Pavilion Sky Garden',
        address: 'Jl. Ir. H. Juanda No. 120, Dago, Kota Bandung',
        mapsLink: 'https://maps.google.com',
      }
    ],
    targetDate = '2026-11-11T08:00:00',
    digitalGifts = [],
    physicalAddress,
    wishes = [],
    closingMessage = 'Ungkapan terima kasih yang tulus atas segala doa restu, dukungan moral, dan kasih sayang Bapak / Ibu / Sahabat selama perjalanan studi ini hingga meraih kelulusan.',
    rsvpLink = 'https://wa.me/628123456789',
    guestName = 'Sahabat & Tamu Terhormat',
    brandName = '✦ Undangan Digital · Tema Capella Graduation',
  } = data

  const [isCoverOpen, setIsCoverOpen] = useState(false)

  return (
    <div className="capella-root">
      {/* ── Opening Cover ── */}
      <InvitationCover
        isOpen={isCoverOpen}
        onOpen={() => setIsCoverOpen(true)}
        onClose={() => setIsCoverOpen(false)}
        theme="capella"
        type="graduation"
        title="Graduation Celebration"
        coupleOrKidName={graduateFullName || graduateName}
        date={events[0]?.date || '11 November 2026'}
        guestName={guestName}
      />

      {isCoverOpen && (
        <div className="invitation-reveal-enter">
          <div className="capella-page">
            {/* ── Header ── */}
            <header className="capella-header">
          <CapellaReveal delay={0.05}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '14px' }}>
              <MortarboardIcon />
            </div>
            <span className="capella-badge">Graduation &amp; Academic Celebration</span>
            <h1 className="capella-title">Tasyakuran Wisuda</h1>
            <span className="capella-graduate-name">{graduateFullName}</span>
            <span className="capella-degree">{degree}</span>
            <p className="capella-university">
              {faculty} · {university}
            </p>
            {parents && (
              <p style={{ color: '#c2d4ec', fontSize: '12px', marginTop: '8px' }}>
                {parents}
              </p>
            )}
          </CapellaReveal>
        </header>

        <div className="capella-body">
          {/* ── Honor / Predikat ── */}
          {honors && (
            <CapellaReveal delay={0.1}>
              <div className="capella-honor-box">
                <span className="capella-honor-label">Predikat Kelulusan</span>
                <span className="capella-honor-val">{honors}</span>
              </div>
            </CapellaReveal>
          )}

          {/* ── Quote ── */}
          {quote && (
            <CapellaReveal delay={0.12}>
              <div className="capella-quote-box">
                <p className="capella-quote-text">"{quote}"</p>
                {quoteAuthor && <span className="capella-quote-author">— {quoteAuthor}</span>}
              </div>
            </CapellaReveal>
          )}

          {/* ── Academic Journey ── */}
          {academicJourney && academicJourney.length > 0 && (
            <CapellaReveal delay={0.15}>
              <section className="capella-journey">
                <h2 className="capella-journey-title">Rekam Jejak Akademik</h2>
                <span className="capella-journey-sub">Perjalanan Meraih Asa &amp; Prestasi</span>
                <div className="capella-journey-list">
                  {academicJourney.map((item) => (
                    <div key={item.year} className="capella-journey-item">
                      <span className="capella-journey-year">{item.year}</span>
                      <h3 className="capella-journey-heading">{item.title}</h3>
                      <p className="capella-journey-text">{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            </CapellaReveal>
          )}

          {/* ── Events ── */}
          <div className="capella-events">
            {events.map((ev, idx) => (
              <CapellaCard key={ev.title} delay={idx * 0.12}>
                <article className="capella-event-card">
                  <span className="capella-event-tag">{ev.tag}</span>
                  <span className="capella-event-name">{ev.title}</span>
                  <span className="capella-event-date">{ev.date}</span>
                  <span className="capella-event-time">{ev.time}</span>
                  <span className="capella-event-venue">{ev.venue}</span>
                  <span className="capella-event-address">{ev.address}</span>
                  <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '12px' }}>
                    {ev.mapsLink && (
                      <a href={ev.mapsLink} target="_blank" rel="noopener noreferrer" className="capella-btn-maps">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        Lokasi Acara
                      </a>
                    )}
                    {ev.calendarLink && (
                      <a href={ev.calendarLink} target="_blank" rel="noopener noreferrer" className="capella-btn-maps" style={{ background: '#d4af37', color: '#061022' }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/></svg>
                        Simpan Kalender
                      </a>
                    )}
                  </div>
                </article>
              </CapellaCard>
            ))}
          </div>

          {/* ── Countdown ── */}
          <CapellaReveal delay={0.1}>
            <CapellaCountdown targetDate={targetDate} />
          </CapellaReveal>

          {/* ── Graduation Gifts ── */}
          {(digitalGifts.length > 0 || physicalAddress) && (
            <CapellaReveal delay={0.1}>
              <WeddingGift
                gifts={digitalGifts}
                physicalAddress={physicalAddress}
                title="Apresiasi &amp; Kado Wisuda"
                subtitle="Doa restu dan dukungan Anda merupakan karunia yang amat bernilai. Jika berkenan memberikan tanda apresiasi:"
              />
            </CapellaReveal>
          )}

          {/* ── Guest Book ── */}
          <CapellaReveal delay={0.1}>
            <GuestBook
              initialWishes={wishes}
              storageKey="wishes_capella"
              title="Buku Ucapan &amp; Doa Sukses"
              subtitle="Sampaikan ucapan selamat dan doa untuk wisudawan/wisudawati dalam mengawali lembaran pengabdian baru"
            />
          </CapellaReveal>

          {/* ── Closing & RSVP ── */}
          <CapellaReveal delay={0.1}>
            <div className="capella-closing">
              <p>{closingMessage}</p>
            </div>
            {rsvpLink && (
              <div style={{ textAlign: 'center', marginTop: '22px' }}>
                <a href={rsvpLink} target="_blank" rel="noopener noreferrer" className="capella-btn-rsvp">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  Konfirmasi Kehadiran via WhatsApp
                </a>
              </div>
            )}
          </CapellaReveal>
        </div>

        <footer className="capella-footer">
          <span className="capella-footer-brand">{brandName}</span>
        </footer>
      </div>
      </div>
    )}
    </div>
  )
}
