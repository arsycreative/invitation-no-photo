import { useEffect, useRef, useState } from 'react'
import {
  VegaReveal,
  VegaNamesEntrance,
  VegaCard,
  VegaFloatingOrnament,
} from './VegaMotion'
import {
  VegaBotanicalFlankLeft,
  VegaBotanicalFlankRight,
  VegaHeaderCrest,
} from './VegaOrnaments'
import InvitationCover from '../../components/InvitationCover'
import WeddingGift from '../../components/WeddingGift'
import GuestBook from '../../components/GuestBook'
import './Vega.css'

/* ── Starfield Canvas ─────────────────────────────────── */
function StarfieldCanvas() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)
    const stars = Array.from({ length: 180 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.4 + 0.2,
      speed: Math.random() * 0.005 + 0.002,
      phase: Math.random() * Math.PI * 2,
    }))
    const draw = (t) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      stars.forEach((s) => {
        const a = 0.25 + 0.75 * Math.abs(Math.sin(t * s.speed + s.phase))
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${a * 0.7})`
        ctx.fill()
      })
      animId = requestAnimationFrame(draw)
    }
    animId = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])
  return <canvas ref={canvasRef} className="vega-starfield" />
}

/* ── Aurora Borealis Layer ────────────────────────────── */
function AuroraLayer() {
  return (
    <div className="vega-aurora-layer">
      <div className="vega-aurora-band" />
      <div className="vega-aurora-band" />
      <div className="vega-aurora-band" />
    </div>
  )
}

/* ── Countdown (Safe from NaN) ────────────────────────── */
function Countdown({ targetDate }) {
  const calc = () => {
    if (!targetDate) return { d: 0, h: 0, m: 0, s: 0 }
    const target = new Date(targetDate).getTime()
    if (isNaN(target)) return { d: 0, h: 0, m: 0, s: 0 }
    const diff = target - Date.now()
    if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 }
    return {
      d: Math.floor(diff / 86400000),
      h: Math.floor((diff % 86400000) / 3600000),
      m: Math.floor((diff % 3600000) / 60000),
      s: Math.floor((diff % 60000) / 1000),
    }
  }

  const [time, setTime] = useState(calc)

  useEffect(() => {
    setTime(calc())
    const id = setInterval(() => setTime(calc()), 1000)
    return () => clearInterval(id)
  }, [targetDate])

  const pad = (n) => String(Number.isFinite(n) ? n : 0).padStart(2, '0')

  const units = [
    { val: time.d, label: 'Hari' },
    { val: time.h, label: 'Jam' },
    { val: time.m, label: 'Menit' },
    { val: time.s, label: 'Detik' },
  ]

  return (
    <div className="vega-countdown-container">
      <div className="vega-countdown-grid">
        {units.map((u, i) => (
          <div key={u.label} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {i > 0 && <span className="vega-digit-colon">:</span>}
            <div className="vega-digit-cell">
              <span className="vega-digit-num">{pad(u.val)}</span>
              <span className="vega-digit-txt">{u.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Vega({ data = {} }) {
  const {
    groomName = 'Ardiansyah',
    groomFullName = 'Muhammad Ardiansyah, S.T.',
    groomParents = 'Bapak H. Suharto & Ibu Hj. Rahmawati',
    brideName = 'Khairunnisa',
    brideFullName = 'Khairunnisa Putri Dewi, S.Pd.',
    brideParents = 'Bapak H. Mansyur & Ibu Hj. Nurhayati',
    holyVerse,
    akad = {},
    resepsi = {},
    loveStory = [],
    digitalGifts = [],
    physicalAddress,
    wishes = [],
    closingMessage = 'Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak / Ibu / Saudara/i berkenan hadir dan memberikan doa restu kepada kami.',
    rsvpLink = 'https://wa.me/628123456789',
    brandName = 'Undangan Pernikahan Digital · Tema Vega',
    guestName = 'Tamu Undangan',
    initialOpen = false,
    lockBodyScroll = true,
    hideFloatingButton = false,
  } = data

  const [isCoverOpen, setIsCoverOpen] = useState(initialOpen)

  return (
    <div className="vega-root">
      {/* ── Opening Cover ── */}
      <InvitationCover
        isOpen={isCoverOpen}
        onOpen={() => setIsCoverOpen(true)}
        onClose={() => setIsCoverOpen(false)}
        theme="vega"
        type="wedding"
        title="The Wedding Of"
        coupleOrKidName={`${groomName} & ${brideName}`}
        date={resepsi.date || akad.date || '15 Februari 2026'}
        guestName={guestName}
        lockBodyScroll={lockBodyScroll}
        hideFloatingButton={hideFloatingButton}
      />

      {isCoverOpen && (
        <div className="invitation-reveal-enter" style={{ width: '100%' }}>
          <AuroraLayer />
          <StarfieldCanvas />

          <div className="vega-page">
            {/* ════════════════════════════════════════════════
                SECTION 1: HERO / SAMPUL UTAMA
                ════════════════════════════════════════════════ */}
            <section className="vega-section vega-hero-section">
              <div className="vega-section-content">
                <div className="vega-flank-container">
                  <VegaFloatingOrnament side="left" distance={30} delay={0.2} style={{ left: '-36px', top: '24%' }}>
                    <VegaBotanicalFlankLeft size={125} opacity={0.7} />
                  </VegaFloatingOrnament>
                  <VegaFloatingOrnament side="right" distance={30} delay={0.25} style={{ right: '-36px', top: '24%' }}>
                    <VegaBotanicalFlankRight size={125} opacity={0.7} />
                  </VegaFloatingOrnament>

                  <VegaReveal delay={0.1}>
                    <span className="vega-hero-eyebrow">Undangan Pernikahan</span>
                  </VegaReveal>

                  <VegaReveal delay={0.18}>
                    <div className="vega-header-crest-wrap">
                      <VegaHeaderCrest width={130} opacity={0.85} />
                    </div>
                  </VegaReveal>

                  <VegaReveal delay={0.22}>
                    <div className="vega-hero-bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>
                  </VegaReveal>

                  <VegaNamesEntrance delay={0.25}>
                    <div className="vega-hero-names">
                      <span className="vega-hero-name">{groomName}</span>
                      <span className="vega-hero-ampersand">&amp;</span>
                      <span className="vega-hero-name">{brideName}</span>
                    </div>
                  </VegaNamesEntrance>

                  <VegaReveal delay={0.35}>
                    <div className="vega-hero-date-line">
                      <span>{resepsi.date || akad.date || '15 Februari 2026'}</span>
                      <span>·</span>
                      <span>{resepsi.venue ? resepsi.venue.split(' ')[0] : 'Bandung'}</span>
                    </div>
                  </VegaReveal>

                  <VegaReveal delay={0.45}>
                    <div className="vega-scroll-hint">
                      <span>Gulir ke Bawah</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </VegaReveal>
                </div>
              </div>
            </section>

            {/* ════════════════════════════════════════════════
                SECTION 2: AYAT SUCI & KALIMAT SAMBUTAN
                ════════════════════════════════════════════════ */}
            <section className="vega-section vega-verse-section">
              <div className="vega-section-content">
                <div className="vega-flank-container">
                  <VegaFloatingOrnament side="left" distance={25} delay={0.15} style={{ left: '-34px', top: '10%' }}>
                    <VegaBotanicalFlankLeft size={115} opacity={0.65} />
                  </VegaFloatingOrnament>
                  <VegaFloatingOrnament side="right" distance={25} delay={0.2} style={{ right: '-34px', top: '10%' }}>
                    <VegaBotanicalFlankRight size={115} opacity={0.65} />
                  </VegaFloatingOrnament>

                  {holyVerse && (
                    <VegaReveal delay={0.1}>
                      <div className="vega-verse-card">
                        <p className="vega-verse-arabic">{holyVerse.arabic}</p>
                        <p className="vega-verse-trans">"{holyVerse.translation}"</p>
                        <span className="vega-verse-ref">{holyVerse.ref}</span>
                      </div>
                    </VegaReveal>
                  )}

                  <VegaReveal delay={0.25}>
                    <p className="vega-greeting-lead">
                      Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala, kami mengundang Bapak / Ibu / Saudara/i untuk hadir dan memberikan doa restu pada pernikahan kami:
                    </p>
                  </VegaReveal>
                </div>
              </div>
            </section>

            {/* ════════════════════════════════════════════════
                SECTION 3: KEDUA MEMPELAI & KELUARGA
                ════════════════════════════════════════════════ */}
            <section className="vega-section vega-couple-section">
              <div className="vega-section-content">
                <VegaReveal delay={0.1}>
                  <span className="vega-section-kicker">Mempelai</span>
                  <h2 className="vega-section-heading">Kedua Mempelai</h2>
                  <div className="vega-header-crest-wrap">
                    <VegaHeaderCrest width={120} opacity={0.8} />
                  </div>
                  <p className="vega-section-lead">
                    Dua insan yang dipersatukan dalam ikatan suci pernikahan
                  </p>
                </VegaReveal>

                <div className="vega-flank-container">
                  <VegaFloatingOrnament side="left" distance={28} delay={0.15} style={{ left: '-36px', top: '20%' }}>
                    <VegaBotanicalFlankLeft size={125} opacity={0.6} />
                  </VegaFloatingOrnament>
                  <VegaFloatingOrnament side="right" distance={28} delay={0.2} style={{ right: '-36px', top: '20%' }}>
                    <VegaBotanicalFlankRight size={125} opacity={0.6} />
                  </VegaFloatingOrnament>

                  <div className="vega-couple-profile-wrap">
                    <VegaReveal delay={0.15}>
                      <div className="vega-profile-card">
                        <span className="vega-profile-name">{groomName}</span>
                        <span className="vega-profile-fullname">{groomFullName}</span>
                        <p className="vega-profile-parents">
                          Putra dari <strong>{groomParents}</strong>
                        </p>
                      </div>
                    </VegaReveal>

                    <div className="vega-couple-divider" />

                    <VegaReveal delay={0.25}>
                      <div className="vega-profile-card">
                        <span className="vega-profile-name">{brideName}</span>
                        <span className="vega-profile-fullname">{brideFullName}</span>
                        <p className="vega-profile-parents">
                          Putri dari <strong>{brideParents}</strong>
                        </p>
                      </div>
                    </VegaReveal>
                  </div>
                </div>
              </div>
            </section>

            {/* ════════════════════════════════════════════════
                SECTION 4: RANGKAIAN ACARA
                ════════════════════════════════════════════════ */}
            <section className="vega-section vega-events-section">
              <div className="vega-section-content">
                <VegaReveal delay={0.1}>
                  <span className="vega-section-kicker">Agenda</span>
                  <h2 className="vega-section-heading">Rangkaian Acara</h2>
                  <div className="vega-header-crest-wrap">
                    <VegaHeaderCrest width={120} opacity={0.8} />
                  </div>
                  <p className="vega-section-lead">
                    Insya Allah akan diselenggarakan pada waktu dan tempat berikut
                  </p>
                </VegaReveal>

                <div className="vega-flank-container">
                  <VegaFloatingOrnament side="left" distance={25} delay={0.15} style={{ left: '-34px', top: '15%' }}>
                    <VegaBotanicalFlankLeft size={120} opacity={0.55} />
                  </VegaFloatingOrnament>
                  <VegaFloatingOrnament side="right" distance={25} delay={0.2} style={{ right: '-34px', top: '15%' }}>
                    <VegaBotanicalFlankRight size={120} opacity={0.55} />
                  </VegaFloatingOrnament>

                  <div className="vega-events-grid">
                    {[
                      { label: 'Akad Nikah', ev: akad },
                      { label: 'Resepsi Pernikahan', ev: resepsi },
                    ].map(({ label, ev }, idx) => (
                      <VegaCard key={label} delay={idx * 0.15}>
                        <article className="vega-event-item">
                          <h3 className="vega-event-item-title">{ev.name || label}</h3>
                          <span className="vega-event-item-date">{ev.day ? `${ev.day}, ` : ''}{ev.date}</span>
                          <span className="vega-event-item-time">{ev.time}</span>

                          <div className="vega-event-venue-block">
                            <span className="vega-event-item-venue">{ev.venue}</span>
                            <p className="vega-event-item-addr">{ev.address}</p>
                          </div>

                          <div className="vega-event-btn-row">
                            {ev.mapsLink && (
                              <a href={ev.mapsLink} target="_blank" rel="noopener noreferrer" className="vega-btn-outline">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                  <circle cx="12" cy="7" r="3" />
                                </svg>
                                Petunjuk Lokasi
                              </a>
                            )}
                            {ev.calendarLink && (
                              <a href={ev.calendarLink} target="_blank" rel="noopener noreferrer" className="vega-btn-filled">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <rect x="3" y="4" width="18" height="18" rx="2" />
                                  <line x1="16" y1="2" x2="16" y2="6" />
                                  <line x1="8" y1="2" x2="8" y2="6" />
                                </svg>
                                Simpan Kalender
                              </a>
                            )}
                          </div>
                        </article>
                      </VegaCard>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ════════════════════════════════════════════════
                SECTION 5: COUNTDOWN MENUJU HARI BAHAGIA
                ════════════════════════════════════════════════ */}
            <section className="vega-section vega-countdown-section">
              <div className="vega-section-content">
                <VegaReveal delay={0.1}>
                  <span className="vega-section-kicker">Waktu Tersisa</span>
                  <h2 className="vega-section-heading">Menghitung Hari</h2>
                  <p className="vega-section-lead">
                    Menuju ikrar suci janji pernikahan kami
                  </p>
                </VegaReveal>

                <div className="vega-flank-container">
                  <VegaFloatingOrnament side="left" distance={22} delay={0.15} style={{ left: '-30px', top: '10%' }}>
                    <VegaBotanicalFlankLeft size={105} opacity={0.55} />
                  </VegaFloatingOrnament>
                  <VegaFloatingOrnament side="right" distance={22} delay={0.2} style={{ right: '-30px', top: '10%' }}>
                    <VegaBotanicalFlankRight size={105} opacity={0.55} />
                  </VegaFloatingOrnament>

                  <VegaReveal delay={0.18}>
                    <Countdown targetDate={resepsi.isoDate || akad.isoDate} />
                  </VegaReveal>
                </div>
              </div>
            </section>

            {/* ════════════════════════════════════════════════
                SECTION 6: KISAH KASIH KAMI (PERJALANAN CINTA)
                ════════════════════════════════════════════════ */}
            {loveStory && loveStory.length > 0 && (
              <section className="vega-section vega-story-section">
                <div className="vega-section-content">
                  <VegaReveal delay={0.1}>
                    <span className="vega-section-kicker">Perjalanan Kasih</span>
                    <h2 className="vega-section-heading">Kisah Kasih Kami</h2>
                    <div className="vega-header-crest-wrap">
                      <VegaHeaderCrest width={120} opacity={0.8} />
                    </div>
                    <p className="vega-section-lead">
                      Setiap langkah dan pertemuan yang menuntun kami menuju satu tujuan
                    </p>
                  </VegaReveal>

                  <div className="vega-flank-container">
                    <VegaFloatingOrnament side="left" distance={28} delay={0.15} style={{ left: '-36px', top: '15%' }}>
                      <VegaBotanicalFlankLeft size={125} opacity={0.55} />
                    </VegaFloatingOrnament>
                    <VegaFloatingOrnament side="right" distance={28} delay={0.2} style={{ right: '-36px', top: '15%' }}>
                      <VegaBotanicalFlankRight size={125} opacity={0.55} />
                    </VegaFloatingOrnament>

                    <div className="vega-journey-list">
                      {loveStory.map((item, idx) => (
                        <VegaReveal key={item.year || idx} delay={0.1 * (idx + 1)}>
                          <div className="vega-journey-card">
                            <div className="vega-journey-topbar">
                              <span className="vega-journey-year">{item.year}</span>
                              <span className="vega-journey-index">0{idx + 1}</span>
                            </div>
                            <h3 className="vega-journey-title">{item.title}</h3>
                            <p className="vega-journey-desc">{item.desc}</p>
                          </div>
                        </VegaReveal>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* ════════════════════════════════════════════════
                SECTION 7: TANDA KASIH & BUKU DOA
                ════════════════════════════════════════════════ */}
            {((digitalGifts && digitalGifts.length > 0) || physicalAddress || (wishes && wishes.length > 0)) && (
              <section className="vega-section vega-gift-section">
                <div className="vega-section-content">
                  <div className="vega-flank-container">
                    <VegaFloatingOrnament side="left" distance={25} delay={0.15} style={{ left: '-34px', top: '10%' }}>
                      <VegaBotanicalFlankLeft size={115} opacity={0.5} />
                    </VegaFloatingOrnament>
                    <VegaFloatingOrnament side="right" distance={25} delay={0.2} style={{ right: '-34px', top: '10%' }}>
                      <VegaBotanicalFlankRight size={115} opacity={0.5} />
                    </VegaFloatingOrnament>

                    {(digitalGifts && digitalGifts.length > 0 || physicalAddress) && (
                      <VegaReveal delay={0.1}>
                        <div style={{ width: '100%', marginBottom: '32px' }}>
                          <WeddingGift
                            gifts={digitalGifts}
                            physicalAddress={physicalAddress}
                            title="Tanda Kasih"
                            subtitle="Doa restu Anda merupakan karunia terindah bagi kami. Namun apabila hendak memberikan tanda kasih, dapat melalui:"
                          />
                        </div>
                      </VegaReveal>
                    )}

                    {wishes && (
                      <VegaReveal delay={0.15}>
                        <div style={{ width: '100%' }}>
                          <GuestBook
                            initialWishes={wishes}
                            storageKey="wishes_vega"
                            title="Doa &amp; Ucapan"
                            subtitle="Untaian doa dan ucapan selamat dari keluarga serta sahabat tercinta"
                          />
                        </div>
                      </VegaReveal>
                    )}
                  </div>
                </div>
              </section>
            )}

            {/* ════════════════════════════════════════════════
                SECTION 8: PENUTUP & RSVP WHATSAPP
                ════════════════════════════════════════════════ */}
            <section className="vega-section vega-closing-section">
              <div className="vega-section-content">
                <div className="vega-flank-container">
                  <VegaFloatingOrnament side="left" distance={30} delay={0.15} style={{ left: '-36px', top: '20%' }}>
                    <VegaBotanicalFlankLeft size={125} opacity={0.65} />
                  </VegaFloatingOrnament>
                  <VegaFloatingOrnament side="right" distance={30} delay={0.2} style={{ right: '-36px', top: '20%' }}>
                    <VegaBotanicalFlankRight size={125} opacity={0.65} />
                  </VegaFloatingOrnament>

                  <VegaReveal delay={0.1}>
                    <div className="vega-header-crest-wrap">
                      <VegaHeaderCrest width={140} opacity={0.85} />
                    </div>
                    <p className="vega-closing-note">{closingMessage}</p>
                  </VegaReveal>

                  {rsvpLink && (
                    <VegaReveal delay={0.2}>
                      <a href={rsvpLink} target="_blank" rel="noopener noreferrer" className="vega-btn-rsvp-cta">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                        Konfirmasi Kehadiran
                      </a>
                    </VegaReveal>
                  )}

                  <VegaReveal delay={0.25}>
                    <footer className="vega-footer">
                      <span className="vega-footer-credits">{brandName || 'Ardiansyah & Khairunnisa Wedding'}</span>
                    </footer>
                  </VegaReveal>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  )
}
