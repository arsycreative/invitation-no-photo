import { useState, useEffect } from 'react'
import {
  RigelHeroReveal,
  RigelReveal,
  RigelCrestMotion,
  RigelScaleIn,
  RigelCard,
} from './RigelMotion'
import {
  RigelNurseryMobile,
  RigelWashiTape,
  RigelBalloonUnit,
  RigelGiftParcelBow,
  RigelStorybookRibbon,
  RigelCloudDivider,
} from './RigelOrnaments'
import InvitationCover from '../../components/InvitationCover'
import WeddingGift from '../../components/WeddingGift'
import GuestBook from '../../components/GuestBook'
import './Rigel.css'

function RigelBalloonCountdown({ targetDate }) {
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
    <div className="rigel-balloon-countdown-card">
      <span className="rigel-countdown-label">✦ MENGHITUNG HARI PERAYAAN ✦</span>
      <div className="rigel-balloon-cluster">
        <RigelBalloonUnit number={pad(time.d)} unit="Hari" colorIndex={0} />
        <RigelBalloonUnit number={pad(time.h)} unit="Jam" colorIndex={1} />
        <RigelBalloonUnit number={pad(time.m)} unit="Menit" colorIndex={2} />
        <RigelBalloonUnit number={pad(time.s)} unit="Detik" colorIndex={3} />
      </div>
    </div>
  )
}

export default function Rigel({ data = {} }) {
  const {
    momName = 'Natasha',
    dadName = 'Randy',
    babyTag = 'A Sweet Little Blessing is on the Way!',
    expectedSeason = 'Perkiraan Lahir: Akhir Oktober 2026',
    quote = 'Sebuah keajaiban kecil telah hadir di dalam rahim, membawa sejuta cinta, harapan hangat, dan kebahagiaan tak terhingga bagi kita semua.',
    quoteAuthor = 'Natasha & Randy',
    activities = [
      {
        icon: '🍼',
        badge: 'GAMES #01',
        theme: 'sky',
        name: 'Fun Baby Games & Tebak Gender',
        desc: 'Permainan seru tebak tanggal lahir, tebak ukuran perut bunda, dan hadiah kejutan.',
      },
      {
        icon: '✨',
        badge: 'RESTU #02',
        theme: 'buttercup',
        name: 'Doa Kasih & Restu Ibu Hamil',
        desc: 'Untaian doa bersama untuk kesehatan, kelancaran persalinan, serta keselamatan ibu dan anak.',
      },
      {
        icon: '🧁',
        badge: 'MANIS #03',
        theme: 'pink',
        name: 'Afternoon Tea & Pastry Bar',
        desc: 'Menikmati hidangan teh sore yang manis, artisan dessert bar, dan mocktail buah segar.',
      },
    ],
    events = [
      {
        tag: '✦ PERAYAAN INTIM ✦',
        title: 'Baby Shower & Afternoon Tea',
        date: 'Minggu, 18 Oktober 2026',
        time: '14.00 — 17.00 WIB',
        venue: 'Le Petit Glasshouse & Bistro',
        address: 'Jl. Riau No. 54, Citarum, Kota Bandung',
        mapsLink: 'https://maps.google.com',
        calendarLink: 'https://calendar.google.com',
      },
    ],
    targetDate = '2026-10-18T14:00:00',
    digitalGifts = [],
    physicalAddress,
    wishes = [],
    closingMessage = 'Kehadiran, tawa ceria, dan doa tulus dari sahabat serta keluarga tersayang adalah kado terindah yang sangat kami nantikan.',
    rsvpLink = 'https://wa.me/628123456789',
    guestName = 'Sahabat Tersayang',
    brandName = '✦ Undangan Digital · Tema Rigel Baby Shower',
    initialOpen = false,
    lockBodyScroll = true,
    hideFloatingButton = false,
  } = data

  const [isCoverOpen, setIsCoverOpen] = useState(initialOpen)

  return (
    <div className="rigel-root">
      {/* ── Opening Cover ── */}
      <InvitationCover
        isOpen={isCoverOpen}
        onOpen={() => setIsCoverOpen(true)}
        onClose={() => setIsCoverOpen(false)}
        theme="rigel"
        type="baby-shower"
        title="Baby Shower Celebration"
        coupleOrKidName={`${momName} & ${dadName}`}
        date={events[0]?.date || '18 Oktober 2026'}
        guestName={guestName}
        lockBodyScroll={lockBodyScroll}
        hideFloatingButton={hideFloatingButton}
      />

      {isCoverOpen && (
        <div className="invitation-reveal-enter rigel-container">

          {/* ════════════════════════════════════════════════
              SECTION 1: HERO / WELCOMING BABY (100vh)
              Authentic Nursery Mobile Hanging from Ceiling
              ════════════════════════════════════════════════ */}
          <section id="hero" className="rigel-section rigel-hero-section">
            <RigelNurseryMobile className="rigel-top-mobile" />

            <div className="rigel-section-content">
              <RigelHeroReveal delay={0.16}>
                <div className="rigel-nursery-plaque">
                  <RigelWashiTape color="buttercup" rotation={-4} className="rigel-plaque-tape-tl" />
                  <RigelWashiTape color="sky" rotation={5} className="rigel-plaque-tape-tr" />

                  <span className="rigel-hero-subtag">✦ CELEBRATING BABY ON THE WAY ✦</span>
                  <h1 className="rigel-hero-title">Baby Shower</h1>

                  <div className="rigel-parents-callout">
                    <span className="rigel-parents-script">{momName} &amp; {dadName}</span>
                    <span className="rigel-baby-tag-line">{babyTag}</span>
                  </div>

                  <div className="rigel-due-date-pill">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <span>{expectedSeason}</span>
                  </div>
                </div>
              </RigelHeroReveal>

              <RigelHeroReveal delay={0.34}>
                <div className="rigel-scroll-prompt">
                  <span className="rigel-scroll-caption">SENTUH &amp; GULIR PERLAHAN</span>
                  <div className="rigel-scroll-bouncing-cloud">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M7 10l5 5 5-5" />
                    </svg>
                  </div>
                </div>
              </RigelHeroReveal>
            </div>
          </section>

          {/* ════════════════════════════════════════════════
              SECTION 2: STORYBOOK SCRAPBOOK / QUOTE (100vh)
              ════════════════════════════════════════════════ */}
          <section id="quote" className="rigel-section rigel-quote-section">
            <div className="rigel-section-content">
              <RigelReveal delay={0.08}>
                <div className="rigel-section-tag">✦ BAB I · KISAH ANUGERAH ✦</div>
                <h2 className="rigel-section-title">Sebuah Keajaiban Kecil</h2>
              </RigelReveal>

              {quote && (
                <RigelScaleIn delay={0.16}>
                  <div className="rigel-storybook-page-card">
                    <RigelStorybookRibbon />
                    <RigelWashiTape color="pink" rotation={-3} className="rigel-book-tape-left" />

                    <div className="rigel-book-inner">
                      <span className="rigel-book-quote-ornament">“</span>
                      <p className="rigel-book-quote-text">{quote}</p>
                      {quoteAuthor && <span className="rigel-book-author">— {quoteAuthor}</span>}
                    </div>

                    <RigelCloudDivider />
                  </div>
                </RigelScaleIn>
              )}
            </div>
          </section>

          {/* ════════════════════════════════════════════════
              SECTION 3: BABY SHOWER ACTIVITIES / MILESTONES (100vh)
              Unique Keepsake Game Cards with Washi Tape & Stamp Badges
              ════════════════════════════════════════════════ */}
          {activities && activities.length > 0 && (
            <section id="activities" className="rigel-section rigel-activities-section">
              <div className="rigel-section-content">
                <RigelReveal delay={0.08}>
                  <div className="rigel-section-tag">✦ SUSUNAN ACARA ✦</div>
                  <h2 className="rigel-section-title">Momen Manis Pesta</h2>
                  <p className="rigel-section-subtitle">
                    Keseruan, Tawa Ceria, dan Sukacita Hangat Bersama
                  </p>
                </RigelReveal>

                <div className="rigel-activities-staggered">
                  {activities.map((act, idx) => {
                    const theme = act.theme || (idx % 3 === 0 ? 'sky' : idx % 3 === 1 ? 'buttercup' : 'pink')
                    const badge = act.badge || (idx === 0 ? 'GAMES #01' : idx === 1 ? 'RESTU #02' : idx === 2 ? 'MANIS #03' : `ACARA #${idx + 1}`)
                    const tapeRot = idx % 2 === 0 ? -4 : 4

                    return (
                      <RigelCard key={act.name} delay={idx * 0.12} className={`rigel-activity-card rigel-theme-${theme}`}>
                        <RigelWashiTape color={theme === 'buttercup' ? 'buttercup' : theme === 'pink' ? 'pink' : 'sky'} rotation={tapeRot} className="rigel-activity-tape" />
                        <div className="rigel-activity-header-bar">
                          <span className="rigel-activity-badge-pill">{badge}</span>
                          <span className="rigel-activity-icon-bubble">{act.icon}</span>
                        </div>
                        <div className="rigel-activity-content">
                          <h3 className="rigel-activity-heading">{act.name}</h3>
                          <p className="rigel-activity-summary">{act.desc}</p>
                        </div>
                      </RigelCard>
                    )
                  })}
                </div>
              </div>
            </section>
          )}

          {/* ════════════════════════════════════════════════
              SECTION 4: PARTY PASS & FLOATING BALLOON COUNTDOWN (100vh)
              ════════════════════════════════════════════════ */}
          <section id="events" className="rigel-section rigel-events-section">
            <div className="rigel-section-content">
              <RigelReveal delay={0.08}>
                <div className="rigel-section-tag">✦ WAKTU &amp; LOKASI ✦</div>
                <h2 className="rigel-section-title">Party Pass &amp; Waktu</h2>
              </RigelReveal>

              <div className="rigel-party-pass-container">
                {events.map((ev, idx) => (
                  <RigelCard key={ev.title} delay={idx * 0.12}>
                    <article className="rigel-party-pass-ticket">
                      <div className="rigel-ticket-perforation-top" />
                      <div className="rigel-ticket-header">
                        <span className="rigel-ticket-tag">{ev.tag}</span>
                        <h3 className="rigel-ticket-title">{ev.title}</h3>
                      </div>

                      <div className="rigel-ticket-body">
                        <div className="rigel-ticket-datetime-block">
                          <div className="rigel-datetime-item">
                            <span className="rigel-dt-label">HARI &amp; TANGGAL</span>
                            <span className="rigel-dt-val">{ev.date}</span>
                          </div>
                          <div className="rigel-datetime-item">
                            <span className="rigel-dt-label">PUKUL ACARA</span>
                            <span className="rigel-dt-val">{ev.time}</span>
                          </div>
                        </div>

                        <div className="rigel-ticket-venue-block">
                          <span className="rigel-venue-tag">LOKASI PERAYAAN</span>
                          <span className="rigel-venue-name">{ev.venue}</span>
                          <p className="rigel-venue-addr">{ev.address}</p>
                        </div>

                        <div className="rigel-ticket-action-buttons">
                          {ev.mapsLink && (
                            <a href={ev.mapsLink} target="_blank" rel="noopener noreferrer" className="rigel-ticket-btn rigel-btn-sky">
                              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                              Buka Google Maps
                            </a>
                          )}
                          {ev.calendarLink && (
                            <a href={ev.calendarLink} target="_blank" rel="noopener noreferrer" className="rigel-ticket-btn rigel-btn-gold">
                              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/></svg>
                              Simpan Jadwal
                            </a>
                          )}
                        </div>
                      </div>
                    </article>
                  </RigelCard>
                ))}
              </div>

              {/* Floating Helium Balloon Countdown */}
              <RigelReveal delay={0.2}>
                <RigelBalloonCountdown targetDate={targetDate} />
              </RigelReveal>
            </div>
          </section>

          {/* ════════════════════════════════════════════════
              SECTION 5: BABY REGISTRY & GIFTS (100vh)
              ════════════════════════════════════════════════ */}
          {(digitalGifts.length > 0 || physicalAddress) && (
            <section id="gifts" className="rigel-section rigel-gifts-section">
              <div className="rigel-section-content">
                <RigelReveal delay={0.08}>
                  <RigelGiftParcelBow size={74} />
                  <div className="rigel-section-tag">✦ BABY REGISTRY &amp; KADO ✦</div>
                  <WeddingGift
                    gifts={digitalGifts}
                    physicalAddress={physicalAddress}
                    title="Kado Kasih untuk Si Kecil"
                    subtitle="Kehadiran dan doa restu Anda adalah kado paling istimewa. Bagi keluarga dan sahabat yang berkenan menitipkan tanda kasih perlengkapan bayi:"
                  />
                </RigelReveal>
              </div>
            </section>
          )}

          {/* ════════════════════════════════════════════════
              SECTION 6: BUKU DOA & HARAPAN HANGAT (100vh)
              ════════════════════════════════════════════════ */}
          <section id="guestbook" className="rigel-section rigel-guestbook-section">
            <div className="rigel-section-content">
              <RigelReveal delay={0.08}>
                <div className="rigel-section-tag">✦ BUKU DOA &amp; HARAPAN HANGAT ✦</div>
                <GuestBook
                  initialWishes={wishes}
                  storageKey="wishes_rigel"
                  title="Buku Doa untuk Calon Buah Hati"
                  subtitle="Tuliskan untaian doa dan harapan manis untuk sang ibu dan calon si kecil tersayang."
                />
              </RigelReveal>
            </div>
          </section>

          {/* ════════════════════════════════════════════════
              SECTION 7: KEEPSAKE ENVELOPE CLOSING & RSVP (100vh)
              ════════════════════════════════════════════════ */}
          <section id="closing" className="rigel-section rigel-closing-section">
            <div className="rigel-section-content">
              <RigelReveal delay={0.1}>
                <div className="rigel-keepsake-envelope">
                  <div className="rigel-envelope-stamp">
                    <span className="rigel-stamp-label">SPECIAL DELIVERY</span>
                    <span className="rigel-stamp-heart">♥</span>
                    <span className="rigel-stamp-sub">BABY BLESSING</span>
                  </div>

                  <h3 className="rigel-closing-headline">Ungkapan Terima Kasih</h3>
                  <p className="rigel-closing-paragraph">{closingMessage}</p>

                  <div className="rigel-closing-parents-block">
                    <span className="rigel-signature-lead">Salam hangat penuh cinta,</span>
                    <span className="rigel-closing-signature">{momName} &amp; {dadName}</span>
                  </div>
                </div>
              </RigelReveal>

              {rsvpLink && (
                <RigelReveal delay={0.24}>
                  <div className="rigel-rsvp-action-wrap">
                    <a href={rsvpLink} target="_blank" rel="noopener noreferrer" className="rigel-btn-rsvp-pill">
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      Konfirmasi Kehadiran via WhatsApp
                    </a>
                  </div>
                </RigelReveal>
              )}

              <footer className="rigel-bottom-credit">
                <span className="rigel-brand-text">{brandName}</span>
              </footer>
            </div>
          </section>

        </div>
      )}
    </div>
  )
}
