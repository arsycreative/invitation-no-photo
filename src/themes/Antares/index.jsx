import { useState, useEffect } from 'react'
import {
  AntaresHeroReveal,
  AntaresReveal,
  AntaresCard,
  AntaresCrestMotion,
  AntaresScaleIn,
} from './AntaresMotion'
import {
  AntaresSilverJubileeCrest,
  AntaresSilverWatermark,
  AntaresCornerFlourish,
  AntaresDivider,
} from './AntaresOrnaments'
import InvitationCover from '../../components/InvitationCover'
import WeddingGift from '../../components/WeddingGift'
import GuestBook from '../../components/GuestBook'
import './Antares.css'

function AntaresCountdown({ targetDate }) {
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
    <div className="antares-countdown-container">
      <span className="antares-countdown-label">Menghitung Hari Menuju Syukuran Perak</span>
      <div className="antares-countdown-digits">
        {[
          { val: time.d, unit: 'Hari' },
          { val: time.h, unit: 'Jam' },
          { val: time.m, unit: 'Menit' },
          { val: time.s, unit: 'Detik' },
        ].map((item) => (
          <div key={item.unit} className="antares-digit-block">
            <span className="antares-digit">{pad(item.val)}</span>
            <span className="antares-digit-unit">{item.unit}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Antares({ data = {} }) {
  const {
    coupleNames = 'Darmawan & Ratih',
    husbandFullName = 'Darmawan Sutrisno, S.E.',
    wifeFullName = 'Ratih Ayu Wardhani, S.Pd.',
    anniversaryYear = '25 Tahun',
    anniversarySubtitle = 'Silver Wedding Anniversary',
    quote = 'Dua puluh lima tahun mengarungi samudra kehidupan bersama. Setiap detik adalah saksi bertumbuhnya cinta, kesabaran, dan anugerah terindah dari Tuhan.',
    quoteAuthor = 'Darmawan & Ratih',
    milestones = [
      {
        year: '2001',
        title: 'Ikrar Suci Pernikahan',
        description: 'Menyatukan dua hati dan berjanji saling setia dalam suka maupun duka di hadapan keluarga dan para saksi.',
      },
      {
        year: '2005',
        title: 'Anugerah Buah Hati Pertama',
        description: 'Keluarga kecil kami diberkahi dengan hadirnya buah hati tercinta yang mengisi hari-hari penuh keceriaan.',
      },
      {
        year: '2016',
        title: 'Membangun Bahtera Impian',
        description: 'Melewati berbagai tantangan hidup bersama, saling menguatkan dan mendirikan rumah tangga yang penuh kehangatan.',
      },
      {
        year: '2026',
        title: '25 Tahun Penuh Cinta & Syukur',
        description: 'Merayakan perak pernikahan dengan rasa syukur tak terhingga atas setiap berkah dan kasih yang terus bertumbuh.',
      },
    ],
    events = [
      {
        tag: '✦ Acara Utama',
        title: 'Ibadah / Syukuran Pembaharuan Janji',
        date: 'Sabtu, 19 September 2026',
        time: '16.00 — 18.00 WIB',
        venue: 'Grand Velvet Ballroom, The Heritage',
        address: 'Jl. Diponegoro No. 42, Citarum, Kota Bandung',
        mapsLink: 'https://maps.google.com',
        calendarLink: 'https://calendar.google.com',
      },
      {
        tag: '✦ Malam Keakraban',
        title: 'Gala Dinner & Perayaan 25 Tahun',
        date: 'Sabtu, 19 September 2026',
        time: '18.30 — 21.30 WIB',
        venue: 'Grand Velvet Ballroom, The Heritage',
        address: 'Jl. Diponegoro No. 42, Citarum, Kota Bandung',
        mapsLink: 'https://maps.google.com',
      },
    ],
    targetDate = '2026-12-19T16:00:00',
    digitalGifts = [],
    physicalAddress,
    wishes = [],
    closingMessage = 'Merupakan kehormatan dan kebahagiaan tak terhingga bagi kami sekeluarga apabila Bapak / Ibu / Sahabat berkenan hadir dan berbagi kebahagiaan dalam malam peringatan penuh syukur ini.',
    rsvpLink = 'https://wa.me/628123456789',
    guestName = 'Tamu Terhormat',
    brandName = '✦ Undangan Digital · Tema Antares Anniversary',
    initialOpen = false,
    lockBodyScroll = true,
    hideFloatingButton = false,
  } = data

  const [isCoverOpen, setIsCoverOpen] = useState(initialOpen)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      setTimeout(() => {
        const el = document.querySelector(window.location.hash)
        if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' })
      }, 100)
    }
  }, [isCoverOpen])

  return (
    <div className="antares-root">
      {/* ── Opening Cover ── */}
      <InvitationCover
        isOpen={isCoverOpen}
        onOpen={() => setIsCoverOpen(true)}
        onClose={() => setIsCoverOpen(false)}
        theme="antares"
        type="anniversary"
        title={anniversarySubtitle || 'Wedding Anniversary'}
        coupleOrKidName={coupleNames}
        date={events[0]?.date || '19 September 2026'}
        guestName={guestName}
        lockBodyScroll={lockBodyScroll}
        hideFloatingButton={hideFloatingButton}
      />

      {isCoverOpen && (
        <div className="invitation-reveal-enter" style={{ width: '100%' }}>
          <div className="antares-page">

            {/* ════════════════════════════════════════════════
                SECTION 1: HERO (25th Silver Jubilee Proclamation)
                ════════════════════════════════════════════════ */}
            <section id="hero" className="antares-section antares-hero-section">
              {/* Corner Ornaments */}
              <div className="antares-corner antares-corner--tl"><AntaresCornerFlourish /></div>
              <div className="antares-corner antares-corner--tr"><AntaresCornerFlourish /></div>
              <div className="antares-corner antares-corner--bl"><AntaresCornerFlourish /></div>
              <div className="antares-corner antares-corner--br"><AntaresCornerFlourish /></div>

              {/* Grand Silver Jubilee Watermark */}
              <AntaresSilverWatermark opacity={0.045} />

              <div className="antares-section-content">
                <AntaresCrestMotion delay={0.05}>
                  <AntaresSilverJubileeCrest size={84} />
                </AntaresCrestMotion>

                <AntaresHeroReveal delay={0.15}>
                  <div className="antares-years-badge">
                    <span>✦ {anniversaryYear} · {anniversarySubtitle} ✦</span>
                  </div>
                </AntaresHeroReveal>

                <AntaresHeroReveal delay={0.25}>
                  <h2 className="antares-title-sub">Peringatan Ulang Tahun Pernikahan</h2>
                </AntaresHeroReveal>

                <AntaresDivider width={160} />

                <AntaresHeroReveal delay={0.35}>
                  <h1 className="antares-couple-hero">
                    {coupleNames}
                  </h1>
                </AntaresHeroReveal>

                <AntaresHeroReveal delay={0.45}>
                  <p className="antares-names-subtitle">
                    {husbandFullName} &amp; {wifeFullName}
                  </p>
                </AntaresHeroReveal>

                <AntaresHeroReveal delay={0.55}>
                  <div className="antares-hero-meta-pill">
                    <span className="antares-pill-date">{events[0]?.date || 'Sabtu, 19 September 2026'}</span>
                    <span className="antares-meta-bullet">✦</span>
                    <span className="antares-pill-venue">Grand Velvet Ballroom, The Heritage</span>
                  </div>
                </AntaresHeroReveal>

                <AntaresHeroReveal delay={0.65}>
                  <div className="antares-scroll-indicator">
                    <span>GULIR KE BAWAH</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </AntaresHeroReveal>
              </div>
            </section>

            {/* ════════════════════════════════════════════════
                SECTION 2: QUOTE SECTION (Refleksi Kasih 25 Tahun)
                ════════════════════════════════════════════════ */}
            {quote && (
              <section id="quote" className="antares-section antares-quote-section">
                <div className="antares-corner antares-corner--tl"><AntaresCornerFlourish /></div>
                <div className="antares-corner antares-corner--tr"><AntaresCornerFlourish /></div>
                <div className="antares-corner antares-corner--bl"><AntaresCornerFlourish /></div>
                <div className="antares-corner antares-corner--br"><AntaresCornerFlourish /></div>

                <AntaresSilverWatermark opacity={0.04} />

                <div className="antares-section-content">
                  <AntaresScaleIn delay={0.1}>
                    <div className="antares-quote-card">
                      <div className="antares-quote-mark">“</div>
                      <p className="antares-quote-text">{quote}</p>
                      <AntaresDivider width={160} />
                      <span className="antares-quote-author">— {quoteAuthor || coupleNames}</span>
                    </div>
                  </AntaresScaleIn>
                </div>
              </section>
            )}

            {/* ════════════════════════════════════════════════
                SECTION 3: PROFIL PASANGAN PERAK (25 YEARS)
                ════════════════════════════════════════════════ */}
            <section id="couple" className="antares-section antares-couple-section">
              <div className="antares-corner antares-corner--tl"><AntaresCornerFlourish /></div>
              <div className="antares-corner antares-corner--tr"><AntaresCornerFlourish /></div>
              <div className="antares-corner antares-corner--bl"><AntaresCornerFlourish /></div>
              <div className="antares-corner antares-corner--br"><AntaresCornerFlourish /></div>

              <AntaresSilverWatermark opacity={0.04} />

              <div className="antares-section-content">
                <AntaresReveal delay={0.1}>
                  <span className="antares-section-badge">PASANGAN PERAK</span>
                  <h2 className="antares-section-heading">25 Tahun Mengikat Janji Suci</h2>
                  <p className="antares-couple-intro">
                    Dua puluh lima tahun mengarungi bahtera kehidupan dalam suka dan duka, saling menguatkan, dan senantiasa bersyukur atas limpahan kasih-Nya:
                  </p>
                </AntaresReveal>

                <AntaresReveal delay={0.2} style={{ width: '100%' }}>
                  <div className="antares-profiles-container">
                    {/* The Husband Card */}
                    <div className="antares-profile-card">
                      <span className="antares-profile-role">SUAMI TERCINTA</span>
                      <h3 className="antares-person-name">Darmawan</h3>
                      <span className="antares-person-full">{husbandFullName}</span>
                      <div className="antares-profile-line" />
                      <p className="antares-person-desc">
                        Sosok kepala keluarga yang bijaksana, penuh kesabaran, dan teladan ketulusan bagi keluarga selama seperempat abad.
                      </p>
                    </div>

                    {/* Jubilee Center Badge */}
                    <div className="antares-profile-connector">
                      <div className="antares-profile-badge">
                        <span>25</span>
                        <span className="antares-badge-sub">YEARS</span>
                      </div>
                    </div>

                    {/* The Wife Card */}
                    <div className="antares-profile-card">
                      <span className="antares-profile-role">ISTRI TERCINTA</span>
                      <h3 className="antares-person-name">Ratih</h3>
                      <span className="antares-person-full">{wifeFullName}</span>
                      <div className="antares-profile-line" />
                      <p className="antares-person-desc">
                        Pendamping setia yang penuh kehangatan, keanggunan, dan doa tulus yang senantiasa menaungi setiap langkah keluarga.
                      </p>
                    </div>
                  </div>
                </AntaresReveal>
              </div>
            </section>

            {/* ════════════════════════════════════════════════
                SECTION 4: MILESTONES (KILAS BALIK 25 TAHUN)
                ════════════════════════════════════════════════ */}
            {milestones && milestones.length > 0 && (
              <section id="milestones" className="antares-section antares-milestones-section">
                <div className="antares-corner antares-corner--tl"><AntaresCornerFlourish /></div>
                <div className="antares-corner antares-corner--tr"><AntaresCornerFlourish /></div>
                <div className="antares-corner antares-corner--bl"><AntaresCornerFlourish /></div>
                <div className="antares-corner antares-corner--br"><AntaresCornerFlourish /></div>

                <AntaresSilverWatermark opacity={0.04} />

                <div className="antares-section-content" style={{ maxWidth: '520px' }}>
                  <AntaresReveal delay={0.1}>
                    <span className="antares-section-badge">JEJAK LANGKAH</span>
                    <h2 className="antares-section-heading">Kilas Balik 25 Tahun</h2>
                    <p className="antares-milestones-intro">
                      Menatap kembali untaian anugerah, ketabahan, dan cinta yang telah teruji oleh waktu:
                    </p>
                  </AntaresReveal>

                  <div className="antares-milestones-timeline">
                    {milestones.map((item, idx) => (
                      <AntaresCard key={item.year} delay={idx * 0.1}>
                        <div className="antares-milestone-card">
                          <div className="antares-milestone-year-capsule">
                            <span>{item.year}</span>
                          </div>
                          <div className="antares-milestone-body">
                            <h3 className="antares-milestone-title">{item.title}</h3>
                            <p className="antares-milestone-desc">{item.description}</p>
                          </div>
                        </div>
                      </AntaresCard>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* ════════════════════════════════════════════════
                SECTION 5: WAKTU & TEMPAT ACARA + COUNTDOWN
                ════════════════════════════════════════════════ */}
            <section id="events" className="antares-section antares-events-section">
              <div className="antares-corner antares-corner--tl"><AntaresCornerFlourish /></div>
              <div className="antares-corner antares-corner--tr"><AntaresCornerFlourish /></div>
              <div className="antares-corner antares-corner--bl"><AntaresCornerFlourish /></div>
              <div className="antares-corner antares-corner--br"><AntaresCornerFlourish /></div>

              <AntaresSilverWatermark opacity={0.04} />

              <div className="antares-section-content">
                <AntaresReveal delay={0.1}>
                  <span className="antares-section-badge">WAKTU &amp; TEMPAT</span>
                  <h2 className="antares-section-heading">Agenda Perayaan Syukuran Perak</h2>
                </AntaresReveal>

                {/* Countdown */}
                <AntaresReveal delay={0.15} style={{ width: '100%', marginBottom: '28px' }}>
                  <AntaresCountdown targetDate={targetDate} />
                </AntaresReveal>

                {/* Events list */}
                <div className="antares-events-list">
                  {events.map((ev, idx) => (
                    <AntaresCard key={ev.title} delay={idx * 0.12}>
                      <article className="antares-event-card">
                        <span className="antares-event-tag">{ev.tag}</span>
                        <h3 className="antares-event-name">{ev.title}</h3>
                        <div className="antares-event-time-row">
                          <span className="antares-event-date">{ev.date}</span>
                          <span className="antares-event-dot">·</span>
                          <span className="antares-event-time">{ev.time}</span>
                        </div>
                        <span className="antares-event-venue">{ev.venue}</span>
                        <p className="antares-event-address">{ev.address}</p>

                        <div className="antares-event-actions">
                          {ev.mapsLink && (
                            <a
                              href={ev.mapsLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="antares-btn-maps"
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
                              className="antares-btn-calendar"
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
                    </AntaresCard>
                  ))}
                </div>
              </div>
            </section>

            {/* ════════════════════════════════════════════════
                SECTION 6: TANDA KASIH & BUKU UCAPAN
                ════════════════════════════════════════════════ */}
            <section id="gifts" className="antares-section antares-gifts-section">
              <div className="antares-corner antares-corner--tl"><AntaresCornerFlourish /></div>
              <div className="antares-corner antares-corner--tr"><AntaresCornerFlourish /></div>
              <div className="antares-corner antares-corner--bl"><AntaresCornerFlourish /></div>
              <div className="antares-corner antares-corner--br"><AntaresCornerFlourish /></div>

              <AntaresSilverWatermark opacity={0.04} />

              <div className="antares-section-content" style={{ maxWidth: '520px' }}>
                {(digitalGifts.length > 0 || physicalAddress) && (
                  <AntaresReveal delay={0.1} style={{ width: '100%', marginBottom: '32px' }}>
                    <WeddingGift
                      gifts={digitalGifts}
                      physicalAddress={physicalAddress}
                      title="Tanda Syukur &amp; Kado Perak"
                      subtitle="Kehadiran dan doa restu Anda adalah anugerah terindah bagi keluarga kami. Apabila hendak memberikan tanda kasih, dapat melalui:"
                    />
                  </AntaresReveal>
                )}

                <AntaresReveal delay={0.15} style={{ width: '100%' }}>
                  <GuestBook
                    initialWishes={wishes}
                    storageKey="wishes_antares"
                    title="Untaian Doa &amp; Harapan"
                    subtitle="Tuliskan pesan kasih dan doa restu Anda bagi kebahagiaan abadi keluarga kami"
                  />
                </AntaresReveal>
              </div>
            </section>

            {/* ════════════════════════════════════════════════
                SECTION 7: PENUTUP & RSVP WHATSAPP
                ════════════════════════════════════════════════ */}
            <section id="closing" className="antares-section antares-closing-section">
              <div className="antares-corner antares-corner--tl"><AntaresCornerFlourish /></div>
              <div className="antares-corner antares-corner--tr"><AntaresCornerFlourish /></div>
              <div className="antares-corner antares-corner--bl"><AntaresCornerFlourish /></div>
              <div className="antares-corner antares-corner--br"><AntaresCornerFlourish /></div>

              <AntaresSilverWatermark opacity={0.045} />

              <div className="antares-section-content">
                <AntaresReveal delay={0.1}>
                  <AntaresSilverJubileeCrest size={72} />
                </AntaresReveal>

                <AntaresReveal delay={0.15}>
                  <p className="antares-closing-text">{closingMessage}</p>
                </AntaresReveal>

                {rsvpLink && (
                  <AntaresReveal delay={0.2}>
                    <a
                      href={rsvpLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="antares-btn-rsvp"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      Konfirmasi Kehadiran via WhatsApp
                    </a>
                  </AntaresReveal>
                )}

                <AntaresDivider width={160} />

                <AntaresReveal delay={0.25}>
                  <span className="antares-signature-label">Dengan penuh rasa syukur,</span>
                  <h3 className="antares-signature-names">
                    {coupleNames}
                  </h3>
                  <span className="antares-signature-family">Beserta Seluruh Keluarga Besar</span>
                </AntaresReveal>

                <AntaresReveal delay={0.3}>
                  <footer className="antares-brand-footer">
                    <span>{brandName}</span>
                  </footer>
                </AntaresReveal>
              </div>
            </section>

          </div>
        </div>
      )}
    </div>
  )
}
