import { useState, useEffect } from 'react'
import {
  CapellaHeroReveal,
  CapellaReveal,
  CapellaCrestMotion,
  CapellaScaleIn,
  CapellaCard,
} from './CapellaMotion'
import {
  CapellaGrecoPediment,
  CapellaHangingRibbonSeal,
  CapellaAcademicTranscriptHeader,
  CapellaQuillDivider,
} from './CapellaOrnaments'
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
    <div className="capella-chronometer-box">
      <div className="capella-chronometer-header">
        <span className="capella-chronometer-title">TEMPORIS COMPUTATIO · HITUNG MUNDUR</span>
      </div>
      <div className="capella-chronometer-grid">
        {[
          { val: time.d, unit: 'HARI', latin: 'DIES' },
          { val: time.h, unit: 'JAM', latin: 'HORAE' },
          { val: time.m, unit: 'MENIT', latin: 'MINUTA' },
          { val: time.s, unit: 'DETIK', latin: 'SECUNDA' },
        ].map((item) => (
          <div key={item.unit} className="capella-chronometer-cell">
            <span className="capella-chronometer-digit">{pad(item.val)}</span>
            <span className="capella-chronometer-unit">{item.unit}</span>
            <span className="capella-chronometer-latin">{item.latin}</span>
          </div>
        ))}
      </div>
    </div>
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
    quoteAuthor = 'dr. Aisyah Salsabila, S.Ked.',
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
        tag: '✦ SIDANG TERBUKA SENAT',
        title: 'Upacara Wisuda Gelombang IV',
        date: 'Rabu, 11 November 2026',
        time: '08.00 — 12.00 WIB',
        venue: 'Graha Sanusi Hardjadinata',
        address: 'Jl. Dipati Ukur No. 35, Lebakgede, Kota Bandung',
        mapsLink: 'https://maps.google.com',
        calendarLink: 'https://calendar.google.com',
      },
      {
        tag: '✦ TASYAKURAN KELUARGA',
        title: 'Graduation Dinner & Ramah Tamah',
        date: 'Rabu, 11 November 2026',
        time: '18.30 — 21.00 WIB',
        venue: 'The Pavilion Sky Garden',
        address: 'Jl. Ir. H. Juanda No. 120, Dago, Kota Bandung',
        mapsLink: 'https://maps.google.com',
        calendarLink: 'https://calendar.google.com',
      },
    ],
    targetDate = '2026-11-11T08:00:00',
    digitalGifts = [],
    physicalAddress,
    wishes = [],
    closingMessage = 'Ungkapan terima kasih yang tulus atas segala doa restu, dukungan moral, dan kasih sayang Bapak / Ibu / Sahabat selama perjalanan studi ini hingga meraih kelulusan.',
    rsvpLink = 'https://wa.me/628123456789',
    guestName = 'Sahabat & Tamu Terhormat',
    brandName = '✦ Undangan Digital · Tema Capella Graduation',
    initialOpen = false,
    lockBodyScroll = true,
    hideFloatingButton = false,
  } = data

  const [isCoverOpen, setIsCoverOpen] = useState(initialOpen)

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
        lockBodyScroll={lockBodyScroll}
        hideFloatingButton={hideFloatingButton}
      />

      {isCoverOpen && (
        <div className="invitation-reveal-enter capella-container">

          {/* ════════════════════════════════════════════════
              SECTION 1: HERO / ALMA MATER DIPLOMA FOLIO (100vh)
              ════════════════════════════════════════════════ */}
          <section id="hero" className="capella-section capella-hero-section">
            <div className="capella-section-content">
              {/* Classical Architectural Pediment Arch */}
              <CapellaHeroReveal delay={0.05}>
                <CapellaGrecoPediment />
              </CapellaHeroReveal>

              <CapellaHeroReveal delay={0.12}>
                <div className="capella-institution-ribbon">
                  <span className="capella-uni-name">{faculty.toUpperCase()}</span>
                  <span className="capella-uni-sub">{university.toUpperCase()}</span>
                </div>
              </CapellaHeroReveal>

              <CapellaHeroReveal delay={0.18}>
                <span className="capella-citation-intro">
                  DENGAN RAHMAT TUHAN YANG MAHA ESA MENYATAKAN KELULUSAN KEPADA:
                </span>
              </CapellaHeroReveal>

              {/* Central Diploma Citation Scroll Banner */}
              <CapellaScaleIn delay={0.24}>
                <div className="capella-diploma-cartouche">
                  <span className="capella-latin-honor">HONORIS CAUSA · GRADUATIO</span>
                  <h1 className="capella-graduate-fullname">{graduateFullName}</h1>
                  <div className="capella-degree-strip">
                    <span className="capella-degree-name">{degree}</span>
                  </div>
                </div>
              </CapellaScaleIn>

              {/* Hanging Silk Ribbon & Wax Seal */}
              <CapellaCrestMotion delay={0.32}>
                <CapellaHangingRibbonSeal text="CUM LAUDE" size={90} />
              </CapellaCrestMotion>

              {parents && (
                <CapellaHeroReveal delay={0.38}>
                  <p className="capella-parents-citation">{parents}</p>
                </CapellaHeroReveal>
              )}

              <CapellaHeroReveal delay={0.44}>
                <div className="capella-scroll-prompt">
                  <span className="capella-scroll-text">GULIR LEMBARAN DIPLOMA</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#781d2a" strokeWidth="2.4" strokeLinecap="round">
                    <path d="M7 10l5 5 5-5" />
                  </svg>
                </div>
              </CapellaHeroReveal>
            </div>
          </section>

          {/* ════════════════════════════════════════════════
              SECTION 2: DECRETUM ACADEMICUM / HONOR & OATH (100vh)
              ════════════════════════════════════════════════ */}
          <section id="honor" className="capella-section capella-honor-section">
            <div className="capella-section-content">
              <CapellaReveal delay={0.1}>
                <div className="capella-academic-decree-header">
                  <span className="capella-roman-num">I. DECRETUM ACADEMICUM</span>
                  <h2 className="capella-decree-title">Predikat &amp; Ikrar Dedikasi</h2>
                </div>
              </CapellaReveal>

              {honors && (
                <CapellaScaleIn delay={0.18}>
                  <div className="capella-honors-scroll-box">
                    <div className="capella-honors-ribbon-tag">PREDIKAT KELULUSAN TERTINGGI</div>
                    <h3 className="capella-honors-grade">{honors}</h3>
                    <div className="capella-honors-rules" />
                    <p className="capella-honors-latin">
                      "In testimonium cuius praesentes litteras maiore universitatis sigillo obfirmandas curavimus."
                    </p>
                  </div>
                </CapellaScaleIn>
              )}

              {quote && (
                <CapellaReveal delay={0.25}>
                  <div className="capella-oath-box">
                    <span className="capella-dropcap">“</span>
                    <p className="capella-oath-text">{quote}”</p>
                    {quoteAuthor && <span className="capella-oath-author">— {quoteAuthor}</span>}
                  </div>
                </CapellaReveal>
              )}

              <CapellaQuillDivider maxWidth={200} />
            </div>
          </section>

          {/* ════════════════════════════════════════════════
              SECTION 3: TRANSKRIP & REKAM JEJAK (100vh)
              ════════════════════════════════════════════════ */}
          {academicJourney && academicJourney.length > 0 && (
            <section id="journey" className="capella-section capella-journey-section">
              <div className="capella-section-content">
                <CapellaReveal delay={0.1}>
                  <CapellaAcademicTranscriptHeader
                    title="REKAM JEJAK AKADEMIK"
                    faculty={faculty}
                  />
                </CapellaReveal>

                {/* Academic Transcript Table / Ledger */}
                <div className="capella-transcript-ledger">
                  {academicJourney.map((item, idx) => (
                    <CapellaCard key={item.year} delay={idx * 0.12} className="capella-ledger-row-wrap">
                      <div className="capella-ledger-row">
                        <div className="capella-ledger-col-year">
                          <span className="capella-ledger-year-badge">{item.year}</span>
                          <span className="capella-ledger-status">LULUS</span>
                        </div>
                        <div className="capella-ledger-col-content">
                          <h4 className="capella-ledger-heading">{item.title}</h4>
                          <p className="capella-ledger-desc">{item.description}</p>
                        </div>
                      </div>
                    </CapellaCard>
                  ))}
                </div>

                <div className="capella-transcript-seal-footer">
                  <span className="capella-verified-text">✦ TELAH DIVERIFIKASI OLEH BIRO AKADEMIK ✦</span>
                </div>
              </div>
            </section>
          )}

          {/* ════════════════════════════════════════════════
              SECTION 4: TIKET SIDANG TERBUKA & RESEPSI (100vh)
              ════════════════════════════════════════════════ */}
          <section id="events" className="capella-section capella-events-section">
            <div className="capella-section-content">
              <CapellaReveal delay={0.1}>
                <div className="capella-roman-num">II. CONVOCATIO ACADEMICA</div>
                <h2 className="capella-decree-title">Agenda Upacara &amp; Resepsi</h2>
              </CapellaReveal>

              <div className="capella-convocation-passes">
                {events.map((ev, idx) => (
                  <CapellaCard key={ev.title} delay={idx * 0.12} className="capella-pass-wrap">
                    <div className="capella-convocation-ticket">
                      {/* Ticket Notch */}
                      <div className="capella-ticket-stub-header">
                        <span className="capella-stub-tag">{ev.tag}</span>
                        <span className="capella-stub-no">PASS #{idx + 1}</span>
                      </div>
                      <h3 className="capella-ticket-event-name">{ev.title}</h3>
                      <div className="capella-ticket-meta">
                        <div className="capella-ticket-date-bar">
                          <span>{ev.date}</span>
                          <span className="capella-ticket-time">{ev.time}</span>
                        </div>
                        <span className="capella-ticket-venue">{ev.venue}</span>
                        <p className="capella-ticket-address">{ev.address}</p>
                      </div>
                      <div className="capella-ticket-actions">
                        {ev.mapsLink && (
                          <a href={ev.mapsLink} target="_blank" rel="noopener noreferrer" className="capella-ticket-btn">
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                            Peta Lokasi
                          </a>
                        )}
                        {ev.calendarLink && (
                          <a href={ev.calendarLink} target="_blank" rel="noopener noreferrer" className="capella-ticket-btn capella-ticket-btn--cal">
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/></svg>
                            Kalender
                          </a>
                        )}
                      </div>
                    </div>
                  </CapellaCard>
                ))}
              </div>

              {/* Classical Chronometer Countdown */}
              <CapellaReveal delay={0.25}>
                <CapellaCountdown targetDate={targetDate} />
              </CapellaReveal>
            </div>
          </section>

          {/* ════════════════════════════════════════════════
              SECTION 5: REGISTRUM DONATIONUM / GIFTS (100vh)
              ════════════════════════════════════════════════ */}
          {(digitalGifts.length > 0 || physicalAddress) && (
            <section id="gifts" className="capella-section capella-gifts-section">
              <div className="capella-section-content">
                <CapellaReveal delay={0.1}>
                  <div className="capella-roman-num">III. REGISTRUM DONATIONUM</div>
                  <WeddingGift
                    gifts={digitalGifts}
                    physicalAddress={physicalAddress}
                    title="Apresiasi &amp; Tanda Kasih"
                    subtitle="Doa restu dan dukungan Anda merupakan karunia yang amat bernilai. Jika berkenan memberikan tanda apresiasi:"
                  />
                </CapellaReveal>
              </div>
            </section>
          )}

          {/* ════════════════════════════════════════════════
              SECTION 6: REGISTRUM HOSPITUM / GUESTBOOK (100vh)
              ════════════════════════════════════════════════ */}
          <section id="guestbook" className="capella-section capella-guestbook-section">
            <div className="capella-section-content">
              <CapellaReveal delay={0.1}>
                <div className="capella-roman-num">IV. REGISTRUM HOSPITUM</div>
                <GuestBook
                  initialWishes={wishes}
                  storageKey="wishes_capella"
                  title="Buku Ucapan &amp; Doa Restu"
                  subtitle="Sampaikan untaian doa dan selamat untuk wisudawati dalam mengawali lembaran pengabdian profesi baru."
                />
              </CapellaReveal>
            </div>
          </section>

          {/* ════════════════════════════════════════════════
              SECTION 7: VALEDICTIO / CLOSING & RSVP (100vh)
              ════════════════════════════════════════════════ */}
          <section id="closing" className="capella-section capella-closing-section">
            <div className="capella-section-content">
              <CapellaHeroReveal delay={0.08}>
                <CapellaGrecoPediment />
              </CapellaHeroReveal>

              <CapellaReveal delay={0.18}>
                <div className="capella-valedictory-box">
                  <span className="capella-valedictory-tag">VALEDICTIO · UNGKAPAN TERIMA KASIH</span>
                  <p className="capella-valedictory-text">{closingMessage}</p>
                  <div className="capella-signature-line">
                    <span className="capella-sign-label">ALUMNI / WISUDAWATI:</span>
                    <span className="capella-sign-name">{graduateFullName}</span>
                  </div>
                </div>
              </CapellaReveal>

              {rsvpLink && (
                <CapellaReveal delay={0.28}>
                  <div className="capella-rsvp-wrap">
                    <a href={rsvpLink} target="_blank" rel="noopener noreferrer" className="capella-btn-convocation-rsvp">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      Konfirmasi Kehadiran via WhatsApp
                    </a>
                  </div>
                </CapellaReveal>
              )}

              <footer className="capella-academic-footer">
                <span className="capella-seal-code">DOC. REF: UNIV-2026-CAPELLA</span>
                <span className="capella-footer-brand-text">{brandName}</span>
              </footer>
            </div>
          </section>

        </div>
      )}
    </div>
  )
}
