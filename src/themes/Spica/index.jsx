import { useState, useEffect } from 'react'
import {
  SpicaReveal,
  SpicaCard,
  SpicaCrestMotion,
  SpicaScaleIn,
} from './SpicaMotion'
import {
  SpicaRingCrest,
  SpicaTerracottaWatermark,
  SpicaCornerFlourish,
  SpicaDivider,
  SpicaFloatingSparkles,
} from './SpicaOrnaments'
import InvitationCover from '../../components/InvitationCover'
import LoveStory from '../../components/LoveStory'
import WeddingGift from '../../components/WeddingGift'
import GuestBook from '../../components/GuestBook'
import './Spica.css'

function SpicaCountdown({ targetDate }) {
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
    <div className="spica-countdown-container">
      <span className="spica-countdown-label">Menghitung Hari Menuju Ikrar Janji</span>
      <div className="spica-countdown-digits">
        {[
          { val: time.d, unit: 'Hari' },
          { val: time.h, unit: 'Jam' },
          { val: time.m, unit: 'Menit' },
          { val: time.s, unit: 'Detik' },
        ].map((item) => (
          <div key={item.unit} className="spica-digit-block">
            <span className="spica-digit">{pad(item.val)}</span>
            <span className="spica-digit-unit">{item.unit}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Spica({ data = {} }) {
  const {
    groomName = 'Farhan',
    groomFullName = 'Farhan Pratama, S.T.',
    groomParents = 'Bapak Ir. Bambang Suryo & Ibu Rina Wati',
    brideName = 'Clarissa',
    brideFullName = 'Clarissa Aurelia, B.A.',
    brideParents = 'Bapak Anton Wijaya & Ibu Diana Sastra',
    quote = 'Ketika dua hati memutuskan untuk saling menggenapi dan melangkah bersama dalam sebuah ikatan suci pertunangan.',
    events = [
      {
        tag: '✦ Prosesi Utama',
        title: 'Prosesi Lamaran & Pertukaran Cincin',
        date: 'Sabtu, 8 Agustus 2026',
        time: '10.00 — 12.00 WIB',
        venue: 'The Terracotta Garden Pavilion',
        address: 'Jl. Dago Giri No. 88, Lembang, Jawa Barat',
        mapsLink: 'https://maps.google.com',
        calendarLink: 'https://calendar.google.com',
      },
      {
        tag: '✦ Jamuan Kasih',
        title: 'Ramah Tamah & Santap Siang Intim',
        date: 'Sabtu, 8 Agustus 2026',
        time: '12.00 — 14.30 WIB',
        venue: 'The Terracotta Garden Pavilion',
        address: 'Jl. Dago Giri No. 88, Lembang, Jawa Barat',
        mapsLink: 'https://maps.google.com',
      },
    ],
    targetDate = '2026-12-08T10:00:00',
    loveStory = [],
    digitalGifts = [],
    physicalAddress,
    wishes = [],
    closingMessage = 'Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak / Ibu / Saudara/i berkenan hadir untuk memberikan doa restu bagi langkah awal kami berdua.',
    rsvpLink = 'https://wa.me/628123456789',
    guestName = 'Tamu Undangan',
    brandName = '✦ Undangan Digital · Tema Spica Engagement',
    initialOpen = false,
    lockBodyScroll = true,
    hideFloatingButton = false,
  } = data

  const [isCoverOpen, setIsCoverOpen] = useState(initialOpen)

  return (
    <div className="spica-root">
      {/* ── Ambient Floating Sparkles ── */}
      <SpicaFloatingSparkles />

      {/* ── Opening Cover ── */}
      <InvitationCover
        isOpen={isCoverOpen}
        onOpen={() => setIsCoverOpen(true)}
        onClose={() => setIsCoverOpen(false)}
        theme="spica"
        type="engagement"
        title="The Engagement Ceremony"
        coupleOrKidName={`${groomName} & ${brideName}`}
        date={events[0]?.date || '8 Agustus 2026'}
        guestName={guestName}
        lockBodyScroll={lockBodyScroll}
        hideFloatingButton={hideFloatingButton}
      />

      {isCoverOpen && (
        <div className="invitation-reveal-enter" style={{ width: '100%' }}>
          <div className="spica-page">

            {/* ════════════════════════════════════════════════
                SECTION 1: HERO (The Engagement Proclamation)
                ════════════════════════════════════════════════ */}
            <section className="spica-section spica-hero-section">
              {/* Corner Ornaments */}
              <div className="spica-corner spica-corner--tl"><SpicaCornerFlourish /></div>
              <div className="spica-corner spica-corner--tr"><SpicaCornerFlourish /></div>
              <div className="spica-corner spica-corner--bl"><SpicaCornerFlourish /></div>
              <div className="spica-corner spica-corner--br"><SpicaCornerFlourish /></div>

              {/* Architectural Watermark */}
              <SpicaTerracottaWatermark opacity={0.07} />

              <div className="spica-section-content">
                <SpicaCrestMotion delay={0.1}>
                  <SpicaRingCrest size={76} />
                </SpicaCrestMotion>

                <SpicaReveal delay={0.2}>
                  <span className="spica-tag">THE ENGAGEMENT CEREMONY</span>
                </SpicaReveal>

                <SpicaReveal delay={0.3}>
                  <h2 className="spica-title-sub">Pertunangan &amp; Lamaran</h2>
                </SpicaReveal>

                <SpicaDivider width={180} />

                <SpicaReveal delay={0.4}>
                  <h1 className="spica-couple-hero">
                    {groomName} &amp; {brideName}
                  </h1>
                </SpicaReveal>

                <SpicaReveal delay={0.5}>
                  <p className="spica-names-subtitle">
                    {groomFullName} &amp; {brideFullName}
                  </p>
                </SpicaReveal>

                <SpicaReveal delay={0.6}>
                  <div className="spica-hero-meta-pill">
                    <span>{events[0]?.date || 'Sabtu, 8 Agustus 2026'}</span>
                    <span className="spica-meta-bullet">✦</span>
                    <span>Bandung, Jawa Barat</span>
                  </div>
                </SpicaReveal>

                <SpicaReveal delay={0.7}>
                  <div className="spica-scroll-indicator">
                    <span>GULIR KE BAWAH</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </SpicaReveal>
              </div>
            </section>

            {/* ════════════════════════════════════════════════
                SECTION 2: AYAT / KATA MUTIARA LAMARAN
                ════════════════════════════════════════════════ */}
            {quote && (
              <section className="spica-section spica-quote-section">
                <div className="spica-corner spica-corner--tl"><SpicaCornerFlourish /></div>
                <div className="spica-corner spica-corner--tr"><SpicaCornerFlourish /></div>
                <div className="spica-corner spica-corner--bl"><SpicaCornerFlourish /></div>
                <div className="spica-corner spica-corner--br"><SpicaCornerFlourish /></div>

                <SpicaTerracottaWatermark opacity={0.06} />

                <div className="spica-section-content">
                  <SpicaScaleIn delay={0.15}>
                    <div className="spica-quote-card">
                      <div className="spica-quote-mark">“</div>
                      <p className="spica-quote-text">{quote}</p>
                      <SpicaDivider width={160} />
                      <span className="spica-quote-author">— {groomName} &amp; {brideName}</span>
                    </div>
                  </SpicaScaleIn>
                </div>
              </section>
            )}

            {/* ════════════════════════════════════════════════
                SECTION 3: PROFIL CALON MEMPELAI (THE COUPLE)
                ════════════════════════════════════════════════ */}
            <section className="spica-section spica-couple-section">
              <div className="spica-corner spica-corner--tl"><SpicaCornerFlourish /></div>
              <div className="spica-corner spica-corner--tr"><SpicaCornerFlourish /></div>
              <div className="spica-corner spica-corner--bl"><SpicaCornerFlourish /></div>
              <div className="spica-corner spica-corner--br"><SpicaCornerFlourish /></div>

              <SpicaTerracottaWatermark opacity={0.05} />

              <div className="spica-section-content">
                <SpicaReveal delay={0.1}>
                  <span className="spica-section-badge">CALON MEMPELAI</span>
                  <h2 className="spica-section-heading">Pasangan yang Berbahagia</h2>
                  <p className="spica-couple-intro">
                    Dengan penuh rasa syukur dan memohon ridho Tuhan Yang Maha Esa, kami melangkah bersama menuju ikatan suci:
                  </p>
                </SpicaReveal>

                <SpicaReveal delay={0.25} style={{ width: '100%' }}>
                  <div className="spica-arches-container">
                    {/* The Groom Arch */}
                    <div className="spica-arch-card spica-arch-groom">
                      <span className="spica-arch-role">THE GROOM</span>
                      <h3 className="spica-person-name">{groomName}</h3>
                      <span className="spica-person-full">{groomFullName}</span>
                      <div className="spica-arch-line" />
                      <span className="spica-person-parents">
                        Putra tercinta dari:<br />
                        <strong>{groomParents}</strong>
                      </span>
                    </div>

                    {/* Connecting Rings */}
                    <div className="spica-arch-connector">
                      <div className="spica-arch-ring">💍</div>
                    </div>

                    {/* The Bride Arch */}
                    <div className="spica-arch-card spica-arch-bride">
                      <span className="spica-arch-role">THE BRIDE</span>
                      <h3 className="spica-person-name">{brideName}</h3>
                      <span className="spica-person-full">{brideFullName}</span>
                      <div className="spica-arch-line" />
                      <span className="spica-person-parents">
                        Putri tercinta dari:<br />
                        <strong>{brideParents}</strong>
                      </span>
                    </div>
                  </div>
                </SpicaReveal>
              </div>
            </section>

            {/* ════════════════════════════════════════════════
                SECTION 4: OUR JOURNEY (LOVE STORY)
                ════════════════════════════════════════════════ */}
            {loveStory && loveStory.length > 0 && (
              <section className="spica-section spica-journey-section">
                <div className="spica-corner spica-corner--tl"><SpicaCornerFlourish /></div>
                <div className="spica-corner spica-corner--tr"><SpicaCornerFlourish /></div>
                <div className="spica-corner spica-corner--bl"><SpicaCornerFlourish /></div>
                <div className="spica-corner spica-corner--br"><SpicaCornerFlourish /></div>

                <SpicaTerracottaWatermark opacity={0.05} />

                <div className="spica-section-content" style={{ maxWidth: '540px' }}>
                  <SpicaReveal delay={0.1}>
                    <span className="spica-section-badge">KISAH KASIH</span>
                  </SpicaReveal>

                  <LoveStory
                    stories={loveStory}
                    title="Our Journey Together"
                    subtitle="Untaian langkah dan kenangan indah yang mengantarkan kami menuju gerbang lamaran suci"
                  />
                </div>
              </section>
            )}

            {/* ════════════════════════════════════════════════
                SECTION 5: WAKTU & TEMPAT ACARA + COUNTDOWN
                ════════════════════════════════════════════════ */}
            <section className="spica-section spica-events-section">
              <div className="spica-corner spica-corner--tl"><SpicaCornerFlourish /></div>
              <div className="spica-corner spica-corner--tr"><SpicaCornerFlourish /></div>
              <div className="spica-corner spica-corner--bl"><SpicaCornerFlourish /></div>
              <div className="spica-corner spica-corner--br"><SpicaCornerFlourish /></div>

              <SpicaTerracottaWatermark opacity={0.05} />

              <div className="spica-section-content">
                <SpicaReveal delay={0.1}>
                  <span className="spica-section-badge">WAKTU &amp; TEMPAT</span>
                  <h2 className="spica-section-heading">Rangkaian Acara Lamaran</h2>
                </SpicaReveal>

                {/* Countdown */}
                <SpicaReveal delay={0.2} style={{ width: '100%', marginBottom: '28px' }}>
                  <SpicaCountdown targetDate={targetDate} />
                </SpicaReveal>

                {/* Events list */}
                <div className="spica-events-list">
                  {events.map((ev, idx) => (
                    <SpicaCard key={ev.title} delay={idx * 0.15}>
                      <article className="spica-event-card">
                        <span className="spica-event-tag">{ev.tag}</span>
                        <h3 className="spica-event-name">{ev.title}</h3>
                        <div className="spica-event-time-row">
                          <span className="spica-event-date">{ev.date}</span>
                          <span className="spica-event-dot">·</span>
                          <span className="spica-event-time">{ev.time}</span>
                        </div>
                        <span className="spica-event-venue">{ev.venue}</span>
                        <p className="spica-event-address">{ev.address}</p>

                        <div className="spica-event-actions">
                          {ev.mapsLink && (
                            <a
                              href={ev.mapsLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="spica-btn-maps"
                            >
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                              </svg>
                              Petunjuk Lokasi
                            </a>
                          )}
                          {ev.calendarLink && (
                            <a
                              href={ev.calendarLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="spica-btn-calendar"
                            >
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                              </svg>
                              Simpan ke Kalender
                            </a>
                          )}
                        </div>
                      </article>
                    </SpicaCard>
                  ))}
                </div>
              </div>
            </section>

            {/* ════════════════════════════════════════════════
                SECTION 6: TANDA KASIH & BUKU UCAPAN
                ════════════════════════════════════════════════ */}
            <section className="spica-section spica-gifts-section">
              <div className="spica-corner spica-corner--tl"><SpicaCornerFlourish /></div>
              <div className="spica-corner spica-corner--tr"><SpicaCornerFlourish /></div>
              <div className="spica-corner spica-corner--bl"><SpicaCornerFlourish /></div>
              <div className="spica-corner spica-corner--br"><SpicaCornerFlourish /></div>

              <SpicaTerracottaWatermark opacity={0.05} />

              <div className="spica-section-content" style={{ maxWidth: '520px' }}>
                {(digitalGifts.length > 0 || physicalAddress) && (
                  <SpicaReveal delay={0.1} style={{ width: '100%', marginBottom: '32px' }}>
                    <WeddingGift
                      gifts={digitalGifts}
                      physicalAddress={physicalAddress}
                      title="Tanda Kasih &amp; Kado Pertunangan"
                      subtitle="Kehadiran dan doa restu Anda adalah anugerah terbesar bagi kami. Apabila hendak memberikan tanda kasih, dapat melalui:"
                    />
                  </SpicaReveal>
                )}

                <SpicaReveal delay={0.2} style={{ width: '100%' }}>
                  <GuestBook
                    initialWishes={wishes}
                    storageKey="wishes_spica"
                    title="Ucapan &amp; Doa Restu"
                    subtitle="Tuliskan harapan dan doa terbaik Anda bagi kelancaran ikatan suci kami hingga hari pernikahan"
                  />
                </SpicaReveal>
              </div>
            </section>

            {/* ════════════════════════════════════════════════
                SECTION 7: PENUTUP & RSVP WHATSAPP
                ════════════════════════════════════════════════ */}
            <section className="spica-section spica-closing-section">
              <div className="spica-corner spica-corner--tl"><SpicaCornerFlourish /></div>
              <div className="spica-corner spica-corner--tr"><SpicaCornerFlourish /></div>
              <div className="spica-corner spica-corner--bl"><SpicaCornerFlourish /></div>
              <div className="spica-corner spica-corner--br"><SpicaCornerFlourish /></div>

              <SpicaTerracottaWatermark opacity={0.06} />

              <div className="spica-section-content">
                <SpicaReveal delay={0.1}>
                  <SpicaRingCrest size={64} />
                </SpicaReveal>

                <SpicaReveal delay={0.2}>
                  <p className="spica-closing-text">{closingMessage}</p>
                </SpicaReveal>

                {rsvpLink && (
                  <SpicaReveal delay={0.3}>
                    <a
                      href={rsvpLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="spica-btn-rsvp"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      Konfirmasi Kehadiran via WhatsApp
                    </a>
                  </SpicaReveal>
                )}

                <SpicaDivider width={160} />

                <SpicaReveal delay={0.4}>
                  <span className="spica-signature-label">Kami yang berbahagia,</span>
                  <h3 className="spica-signature-names">
                    {groomName} &amp; {brideName}
                  </h3>
                  <span className="spica-signature-family">Beserta Keluarga Besar Kedua Mempelai</span>
                </SpicaReveal>

                <SpicaReveal delay={0.5}>
                  <footer className="spica-brand-footer">
                    <span>{brandName}</span>
                  </footer>
                </SpicaReveal>
              </div>
            </section>

          </div>
        </div>
      )}
    </div>
  )
}
