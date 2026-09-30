import { useState, useEffect } from 'react'
import {
  LyraBloomReveal,
  LyraRomanticNames,
  LyraBreezeSprig,
  LyraPetalCard,
} from './LyraMotion'
import { LyraWatermarkCrest, LyraSectionFlourish } from './LyraOrnaments'
import { FloralSprigLeft, FloralSprigRight } from '../../components/Ornaments'
import InvitationCover from '../../components/InvitationCover'
import LoveStory from '../../components/LoveStory'
import WeddingGift from '../../components/WeddingGift'
import GuestBook from '../../components/GuestBook'
import './Lyra.css'

/* ── Bokeh Lights ─────────────────────────────────────── */
function BokehLayer() {
  const dots = [
    { size: 180, top: '5%',  left: '70%', color: 'rgba(255,150,100,0.5)', dur: '6s',  del: '0s'   },
    { size: 220, top: '15%', left: '10%', color: 'rgba(255,100,130,0.45)', dur: '8s',  del: '-3s'  },
    { size: 140, top: '50%', left: '80%', color: 'rgba(230,140,80,0.4)',  dur: '7s',  del: '-1.5s' },
    { size: 160, top: '70%', left: '20%', color: 'rgba(200,100,120,0.4)', dur: '9s',  del: '-4s'  },
    { size: 100, top: '85%', left: '60%', color: 'rgba(255,180,100,0.5)', dur: '5s',  del: '-2s'  },
    { size: 240, top: '35%', left: '45%', color: 'rgba(220,120,90,0.3)',  dur: '11s', del: '-5s'  },
  ]
  return (
    <div className="lyra-bokeh">
      {dots.map((d, i) => (
        <div key={i} className="lyra-bokeh-dot" style={{
          width: d.size, height: d.size, top: d.top, left: d.left,
          background: d.color, animationDuration: d.dur, animationDelay: d.del,
        }}/>
      ))}
    </div>
  )
}

function FloatingPetals() {
  const PETALS = Array.from({ length: 14 }, (_, i) => ({
    id: i,
    left: `${(i / 14) * 100 + Math.random() * 6}%`,
    size: `${Math.random() * 10 + 8}px`,
    duration: `${Math.random() * 9 + 11}s`,
    delay: `${Math.random() * 10}s`,
    color: ['#f5b8c8','#e8a0b4','#ffb87a','#f7d4df','#e8c090'][i % 5],
    shape: i % 3 === 0 ? '50%' : i % 3 === 1 ? '50% 0 50% 0' : '0 50% 0 50%',
  }))
  return (
    <>
      {PETALS.map((p) => (
        <div key={p.id} className="lyra-petal" style={{ left: p.left, width: p.size, height: p.size, background: p.color, borderRadius: p.shape, animationDuration: p.duration, animationDelay: p.delay }}/>
      ))}
    </>
  )
}

function FloralCorner({ className }) {
  return (
    <svg className={`lyra-corner ${className}`} viewBox="0 0 80 80" fill="none">
      <path d="M5 5 Q20 2 30 15 Q15 18 5 5Z" fill="rgba(196,116,140,0.3)"/>
      <path d="M5 5 Q2 20 15 30 Q18 15 5 5Z" fill="rgba(196,116,140,0.25)"/>
      <path d="M15 8 Q28 5 36 20 Q22 22 15 8Z" fill="rgba(201,160,110,0.2)"/>
      <path d="M8 15 Q5 28 20 36 Q22 22 8 15Z" fill="rgba(201,160,110,0.2)"/>
      <circle cx="5" cy="5" r="3" fill="rgba(196,116,140,0.55)"/>
      <path d="M5 5 L36 5" stroke="rgba(201,160,110,0.35)" strokeWidth="0.75"/>
      <path d="M5 5 L5 36" stroke="rgba(201,160,110,0.35)" strokeWidth="0.75"/>
    </svg>
  )
}

function LyraCountdown({ targetDate }) {
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
    <div className="lyra-countdown-container">
      <div className="lyra-countdown-grid">
        {units.map((u, i) => (
          <div key={u.label} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            {i > 0 && <span className="lyra-digit-colon">·</span>}
            <div className="lyra-digit-cell">
              <span className="lyra-digit-num">{pad(u.val)}</span>
              <span className="lyra-digit-txt">{u.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Lyra({ data = {} }) {
  const {
    groomName = 'Farhan',
    groomFullName = 'Muhammad Farhan Akbar, S.E.',
    groomParents = 'Bapak Drs. Agus Setiawan & Ibu Dra. Sri Wahyuni',
    brideName = 'Aulia',
    brideFullName = 'Aulia Rahma Putri, S.Sos.',
    brideParents = 'Bapak H. Ridwan Santoso & Ibu Hj. Dewi Lestari',
    holyVerse,
    akad = {},
    resepsi = {},
    loveStory = [],
    digitalGifts = [],
    physicalAddress,
    wishes = [],
    closingMessage = 'Kehadiran Bapak / Ibu / Saudara/i merupakan kebahagiaan yang tak ternilai bagi kami. Atas doa restu yang diberikan, kami ucapkan terima kasih yang sebesar-besarnya.',
    rsvpLink = 'https://wa.me/628123456789',
    brandName = 'Undangan Pernikahan Digital · Tema Lyra',
    guestName = 'Tamu Undangan',
    initialOpen = false,
    lockBodyScroll = true,
    hideFloatingButton = false,
  } = data

  const [isCoverOpen, setIsCoverOpen] = useState(initialOpen)

  return (
    <div className="lyra-root">
      {/* ── Opening Cover ── */}
      <InvitationCover
        isOpen={isCoverOpen}
        onOpen={() => setIsCoverOpen(true)}
        onClose={() => setIsCoverOpen(false)}
        theme="lyra"
        type="wedding"
        title="Wedding Invitation"
        coupleOrKidName={`${groomName} & ${brideName}`}
        date={resepsi.date || akad.date || '23 Maret 2026'}
        guestName={guestName}
        lockBodyScroll={lockBodyScroll}
        hideFloatingButton={hideFloatingButton}
      />

      {isCoverOpen && (
        <div className="invitation-reveal-enter" style={{ width: '100%' }}>
          <div className="lyra-canvas-pattern" />
          <BokehLayer />
          <FloatingPetals />

          <div className="lyra-page">
            <div className="lyra-pattern-overlay" />

            {/* ════════════════════════════════════════════════
                SECTION 1: HERO / SAMPUL DALAM UTAMA
                ════════════════════════════════════════════════ */}
            <section className="lyra-section lyra-hero-section">
              <LyraWatermarkCrest size={460} opacity={0.065} />
              <FloralCorner className="lyra-corner--tl"/>
              <FloralCorner className="lyra-corner--tr"/>
              <FloralCorner className="lyra-corner--bl"/>
              <FloralCorner className="lyra-corner--br"/>

              <div className="lyra-section-content">
                <div className="lyra-flank-container">
                  <LyraBreezeSprig side="left" delay={0.2} style={{ left: '-36px', top: '24%' }} className="lyra-breeze-ornament">
                    <FloralSprigLeft color="rgba(196,116,140,0.55)" accentColor="rgba(201,160,110,0.5)" size={105} />
                  </LyraBreezeSprig>
                  <LyraBreezeSprig side="right" delay={0.25} style={{ right: '-36px', top: '24%' }} className="lyra-breeze-ornament">
                    <FloralSprigRight color="rgba(196,116,140,0.55)" accentColor="rgba(201,160,110,0.5)" size={105} />
                  </LyraBreezeSprig>

                  <LyraBloomReveal delay={0.1}>
                    <span className="lyra-tag">Undangan Pernikahan</span>
                  </LyraBloomReveal>

                  <LyraBloomReveal delay={0.18}>
                    <span className="lyra-hero-eyebrow">The Wedding of</span>
                  </LyraBloomReveal>

                  <LyraRomanticNames delay={0.22}>
                    <div className="lyra-hero-names">
                      <span className="lyra-hero-name">{groomName}</span>
                      <span className="lyra-hero-and">&amp;</span>
                      <span className="lyra-hero-name">{brideName}</span>
                    </div>
                  </LyraRomanticNames>

                  <LyraBloomReveal delay={0.32}>
                    <div className="lyra-hero-date-line">
                      <span>{resepsi.date || akad.date || '23 Maret 2026'}</span>
                      <span>·</span>
                      <span>Bandung</span>
                    </div>
                  </LyraBloomReveal>

                  <LyraBloomReveal delay={0.4}>
                    <div className="lyra-scroll-hint">
                      <span>Gulir ke Bawah</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </LyraBloomReveal>
                </div>
              </div>
            </section>

            {/* ════════════════════════════════════════════════
                SECTION 2: AYAT SUCI & KALIMAT SAMBUTAN
                ════════════════════════════════════════════════ */}
            <section className="lyra-section lyra-verse-section">
              <LyraWatermarkCrest size={420} opacity={0.065} />
              <div className="lyra-section-content">
                <LyraSectionFlourish width={140} opacity={0.65} />
                <div className="lyra-flank-container">
                  <LyraBreezeSprig side="left" delay={0.15} style={{ left: '-32px', top: '15%' }} className="lyra-breeze-ornament">
                    <FloralSprigLeft color="rgba(196,116,140,0.45)" accentColor="rgba(201,160,110,0.4)" size={90} />
                  </LyraBreezeSprig>
                  <LyraBreezeSprig side="right" delay={0.2} style={{ right: '-32px', top: '15%' }} className="lyra-breeze-ornament">
                    <FloralSprigRight color="rgba(196,116,140,0.45)" accentColor="rgba(201,160,110,0.4)" size={90} />
                  </LyraBreezeSprig>

                  {holyVerse && (
                    <LyraBloomReveal delay={0.1}>
                      <div className="lyra-verse-card">
                        <p className="lyra-verse-arabic">{holyVerse.arabic}</p>
                        <p className="lyra-verse-trans">"{holyVerse.translation}"</p>
                        <span className="lyra-verse-ref">{holyVerse.ref}</span>
                      </div>
                    </LyraBloomReveal>
                  )}

                  <LyraBloomReveal delay={0.25}>
                    <p className="lyra-greeting-lead">
                      Dengan memohon rahmat dan ridha Allah SWT, kami mengundang Bapak / Ibu / Saudara/i untuk turut hadir dan memberikan doa restu pada pernikahan kami:
                    </p>
                  </LyraBloomReveal>
                </div>
              </div>
            </section>

            {/* ════════════════════════════════════════════════
                SECTION 3: KEDUA MEMPELAI & KELUARGA
                ════════════════════════════════════════════════ */}
            <section className="lyra-section lyra-couple-section">
              <LyraWatermarkCrest size={460} opacity={0.065} />
              <div className="lyra-section-content">
                <LyraBloomReveal delay={0.1}>
                  <span className="lyra-section-kicker">Mempelai</span>
                  <h2 className="lyra-section-heading">Kedua Mempelai</h2>
                  <LyraSectionFlourish width={140} opacity={0.7} />
                  <p className="lyra-section-lead">
                    Dua insan yang dipersatukan dalam ikatan suci pernikahan
                  </p>
                </LyraBloomReveal>

                <div className="lyra-flank-container">
                  <LyraBreezeSprig side="left" delay={0.15} style={{ left: '-36px', top: '22%' }} className="lyra-breeze-ornament">
                    <FloralSprigLeft color="rgba(196,116,140,0.55)" accentColor="rgba(201,160,110,0.45)" size={105} />
                  </LyraBreezeSprig>
                  <LyraBreezeSprig side="right" delay={0.2} style={{ right: '-36px', top: '22%' }} className="lyra-breeze-ornament">
                    <FloralSprigRight color="rgba(196,116,140,0.55)" accentColor="rgba(201,160,110,0.45)" size={105} />
                  </LyraBreezeSprig>

                  <div className="lyra-couple-profile-wrap">
                    <LyraBloomReveal delay={0.15}>
                      <div className="lyra-profile-card">
                        <span className="lyra-profile-name">{groomName}</span>
                        <span className="lyra-profile-fullname">{groomFullName}</span>
                        <p className="lyra-profile-parents">
                          Putra dari <strong>{groomParents}</strong>
                        </p>
                      </div>
                    </LyraBloomReveal>

                    <div className="lyra-couple-divider" />

                    <LyraBloomReveal delay={0.25}>
                      <div className="lyra-profile-card">
                        <span className="lyra-profile-name">{brideName}</span>
                        <span className="lyra-profile-fullname">{brideFullName}</span>
                        <p className="lyra-profile-parents">
                          Putri dari <strong>{brideParents}</strong>
                        </p>
                      </div>
                    </LyraBloomReveal>
                  </div>
                </div>
              </div>
            </section>

            {/* ════════════════════════════════════════════════
                SECTION 4: RANGKAIAN ACARA
                ════════════════════════════════════════════════ */}
            <section className="lyra-section lyra-events-section">
              <LyraWatermarkCrest size={440} opacity={0.065} />
              <div className="lyra-section-content">
                <LyraBloomReveal delay={0.1}>
                  <span className="lyra-section-kicker">Waktu &amp; Tempat</span>
                  <h2 className="lyra-section-heading">Rangkaian Acara</h2>
                  <LyraSectionFlourish width={140} opacity={0.7} />
                  <p className="lyra-section-lead">
                    Insya Allah rangkaian acara pernikahan kami akan diselenggarakan pada:
                  </p>
                </LyraBloomReveal>

                <div className="lyra-flank-container">
                  <LyraBreezeSprig side="left" delay={0.15} style={{ left: '-34px', top: '15%' }} className="lyra-breeze-ornament">
                    <FloralSprigLeft color="rgba(196,116,140,0.4)" accentColor="rgba(201,160,110,0.35)" size={95} />
                  </LyraBreezeSprig>
                  <LyraBreezeSprig side="right" delay={0.2} style={{ right: '-34px', top: '15%' }} className="lyra-breeze-ornament">
                    <FloralSprigRight color="rgba(196,116,140,0.4)" accentColor="rgba(201,160,110,0.35)" size={95} />
                  </LyraBreezeSprig>

                  <div className="lyra-events-grid">
                    {[
                      { label: 'Akad Nikah', ev: akad },
                      { label: 'Walimatul Ursy', ev: resepsi },
                    ].map(({ label, ev }, idx) => (
                      <LyraPetalCard key={label} delay={idx * 0.15}>
                        <article className="lyra-event-card">
                          <h3 className="lyra-event-card-title">{ev.name || label}</h3>
                          <span className="lyra-event-card-date">{ev.day ? `${ev.day}, ` : ''}{ev.date}</span>
                          <span className="lyra-event-card-time">{ev.time}</span>

                          <div className="lyra-event-venue-block">
                            <span className="lyra-event-card-venue">{ev.venue}</span>
                            <p className="lyra-event-card-addr">{ev.address}</p>
                          </div>

                          <div className="lyra-event-btn-row">
                            {ev.mapsLink && (
                              <a href={ev.mapsLink} target="_blank" rel="noopener noreferrer" className="lyra-btn-outline">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                  <circle cx="12" cy="10" r="3" />
                                </svg>
                                Petunjuk Lokasi
                              </a>
                            )}
                            {ev.calendarLink && (
                              <a href={ev.calendarLink} target="_blank" rel="noopener noreferrer" className="lyra-btn-filled">
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
                      </LyraPetalCard>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ════════════════════════════════════════════════
                SECTION 5: COUNTDOWN MENUJU HARI BAHAGIA
                ════════════════════════════════════════════════ */}
            <section className="lyra-section lyra-countdown-section">
              <LyraWatermarkCrest size={380} opacity={0.065} />
              <div className="lyra-section-content">
                <LyraBloomReveal delay={0.1}>
                  <span className="lyra-section-kicker">Waktu Tersisa</span>
                  <h2 className="lyra-section-heading">Menghitung Hari Bahagia</h2>
                  <LyraSectionFlourish width={140} opacity={0.65} />
                  <p className="lyra-section-lead">
                    Menuju ikrar suci janji pernikahan kami
                  </p>
                </LyraBloomReveal>

                <div className="lyra-flank-container">
                  <LyraBreezeSprig side="left" delay={0.15} style={{ left: '-30px', top: '12%' }} className="lyra-breeze-ornament">
                    <FloralSprigLeft color="rgba(196,116,140,0.45)" accentColor="rgba(201,160,110,0.4)" size={90} />
                  </LyraBreezeSprig>
                  <LyraBreezeSprig side="right" delay={0.2} style={{ right: '-30px', top: '12%' }} className="lyra-breeze-ornament">
                    <FloralSprigRight color="rgba(196,116,140,0.45)" accentColor="rgba(201,160,110,0.4)" size={90} />
                  </LyraBreezeSprig>

                  <LyraBloomReveal delay={0.18}>
                    <LyraCountdown targetDate={resepsi.isoDate || akad.isoDate} />
                  </LyraBloomReveal>
                </div>
              </div>
            </section>

            {/* ════════════════════════════════════════════════
                SECTION 6: KISAH KASIH KAMI (LOVE STORY)
                ════════════════════════════════════════════════ */}
            {loveStory && loveStory.length > 0 && (
              <section className="lyra-section lyra-story-section">
                <LyraWatermarkCrest size={440} opacity={0.06} />
                <div className="lyra-section-content">
                  <LyraBloomReveal delay={0.1}>
                    <div style={{ width: '100%' }}>
                      <LoveStory
                        stories={loveStory}
                        title="Kisah Kasih Kami"
                        subtitle="Perjalanan dua hati yang dipertemukan dengan cara yang indah"
                      />
                    </div>
                  </LyraBloomReveal>
                </div>
              </section>
            )}

            {/* ════════════════════════════════════════════════
                SECTION 7: TANDA KASIH & BUKU DOA
                ════════════════════════════════════════════════ */}
            {((digitalGifts && digitalGifts.length > 0) || physicalAddress || (wishes && wishes.length > 0)) && (
              <section className="lyra-section lyra-gift-section">
                <LyraWatermarkCrest size={420} opacity={0.06} />
                <div className="lyra-section-content">
                  {(digitalGifts && digitalGifts.length > 0 || physicalAddress) && (
                    <LyraBloomReveal delay={0.1}>
                      <div style={{ width: '100%', marginBottom: '36px' }}>
                        <WeddingGift
                          gifts={digitalGifts}
                          physicalAddress={physicalAddress}
                          title="Tanda Kasih"
                          subtitle="Kehadiran Anda adalah kado terindah bagi kami. Namun bila hendak memberi tanda kasih, dapat melalui:"
                        />
                      </div>
                    </LyraBloomReveal>
                  )}

                  {wishes && (
                    <LyraBloomReveal delay={0.15}>
                      <div style={{ width: '100%' }}>
                        <GuestBook
                          initialWishes={wishes}
                          storageKey="wishes_lyra"
                          title="Doa Restu &amp; Ucapan"
                          subtitle="Tuliskan ucapan selamat dan doa tulus untuk kedua mempelai"
                        />
                      </div>
                    </LyraBloomReveal>
                  )}
                </div>
              </section>
            )}

            {/* ════════════════════════════════════════════════
                SECTION 8: PENUTUP & RSVP WHATSAPP
                ════════════════════════════════════════════════ */}
            <section className="lyra-section lyra-closing-section">
              <LyraWatermarkCrest size={440} opacity={0.065} />
              <div className="lyra-section-content">
                <div className="lyra-flank-container">
                  <LyraBreezeSprig side="left" delay={0.15} style={{ left: '-34px', top: '15%' }} className="lyra-breeze-ornament">
                    <FloralSprigLeft color="rgba(196,116,140,0.4)" accentColor="rgba(201,160,110,0.35)" size={95} />
                  </LyraBreezeSprig>
                  <LyraBreezeSprig side="right" delay={0.2} style={{ right: '-34px', top: '15%' }} className="lyra-breeze-ornament">
                    <FloralSprigRight color="rgba(196,116,140,0.4)" accentColor="rgba(201,160,110,0.35)" size={95} />
                  </LyraBreezeSprig>

                  <LyraBloomReveal delay={0.1}>
                    <LyraSectionFlourish width={140} opacity={0.7} />
                    <p className="lyra-closing-note">{closingMessage}</p>
                  </LyraBloomReveal>

                  {rsvpLink && (
                    <LyraBloomReveal delay={0.18}>
                      <a href={rsvpLink} target="_blank" rel="noopener noreferrer" className="lyra-btn-rsvp-cta">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                        Konfirmasi Kehadiran via WhatsApp
                      </a>
                    </LyraBloomReveal>
                  )}

                  <LyraBloomReveal delay={0.25}>
                    <footer className="lyra-footer">
                      <span className="lyra-footer-credits">{brandName || 'Farhan & Aulia Wedding · Tema Lyra'}</span>
                    </footer>
                  </LyraBloomReveal>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  )
}
