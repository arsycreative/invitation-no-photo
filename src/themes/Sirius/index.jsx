import { useState, useEffect } from 'react'
import {
  SiriusReveal,
  SiriusCrestMotion,
  SiriusScaleIn,
  SiriusCard,
} from './SiriusMotion'
import {
  SiriusRoyalCrest,
  SiriusIslamicWatermark,
  SiriusCornerFlourish,
  SiriusDivider,
  SiriusFloatingStars,
} from './SiriusOrnaments'
import InvitationCover from '../../components/InvitationCover'
import WeddingGift from '../../components/WeddingGift'
import GuestBook from '../../components/GuestBook'
import './Sirius.css'

function SiriusCountdown({ targetDate }) {
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
    <div className="sirius-countdown-wrap">
      <span className="sirius-countdown-badge">✦ MENGHITUNG HARI ✦</span>
      <h3 className="sirius-countdown-headline">Menuju Hari Syukuran Khitan</h3>
      <div className="sirius-countdown-grid">
        {[
          { val: time.d, unit: 'Hari' },
          { val: time.h, unit: 'Jam' },
          { val: time.m, unit: 'Menit' },
          { val: time.s, unit: 'Detik' },
        ].map((item) => (
          <div key={item.unit} className="sirius-countdown-capsule">
            <span className="sirius-capsule-num">{pad(item.val)}</span>
            <span className="sirius-capsule-lbl">{item.unit}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Sirius({ data = {} }) {
  const {
    kidName = 'Muhammad Rayyan Al-Fatih',
    nickName = 'Rayyan',
    parents = 'Bapak H. Ilham Fauzi & Ibu Hj. Annisa Rahma',
    doaKhitan = {
      arabic: 'بَارَكَ اللهُ لَكَ فِي الْمَوْهُوْبِ لَكَ، وَشَكَرْتَ الْوَاهِبَ، وَبَلَغَ أَشُدَّهُ، وَرُزِقْتَ بِرَّهُ',
      translation: 'Semoga Allah memberkahimu atas anak yang dianugerahkan kepadamu, semoga engkau bersyukur kepada Sang Pemberi, dan semoga anak ini tumbuh menjadi anak sholeh yang berbakti.',
      ref: 'Doa Keberkahan Anak Sholeh',
    },
    events = [
      {
        tag: '✦ Acara Utama',
        title: 'Walimatul Khitan & Doa Syukuran',
        date: 'Ahad, 14 Juni 2026',
        time: '09.00 — 12.00 WIB',
        venue: 'Kediaman Keluarga Besar Fauzi',
        address: 'Jl. Emerald Sanctuary No. 8, Antapani, Kota Bandung',
        mapsLink: 'https://maps.google.com',
        calendarLink: 'https://calendar.google.com',
      },
      {
        tag: '✦ Ramah Tamah',
        title: 'Jamuan Makan Siang & Tasyakuran',
        date: 'Ahad, 14 Juni 2026',
        time: '12.00 — 15.00 WIB',
        venue: 'Taman Asri Syukuran Rayyan',
        address: 'Jl. Emerald Sanctuary No. 8, Antapani, Kota Bandung',
        mapsLink: 'https://maps.google.com',
      },
    ],
    targetDate = '2026-12-14T09:00:00',
    digitalGifts = [],
    physicalAddress,
    wishes = [],
    closingMessage = 'Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga apabila Bapak / Ibu / Saudara/i berkenan hadir serta memberikan doa restu untuk ananda kami.',
    rsvpLink = 'https://wa.me/628123456789',
    guestName = 'Tamu Undangan',
    brandName = '✦ Undangan Digital · Tema Sirius Khitan',
    initialOpen = false,
    lockBodyScroll = true,
    hideFloatingButton = false,
  } = data

  const [isCoverOpen, setIsCoverOpen] = useState(initialOpen)

  return (
    <div className="sirius-root">
      {/* ── Ambient Floating Stars ── */}
      <SiriusFloatingStars />

      {/* ── Opening Cover Modal ── */}
      <InvitationCover
        isOpen={isCoverOpen}
        onOpen={() => setIsCoverOpen(true)}
        onClose={() => setIsCoverOpen(false)}
        theme="sirius"
        type="khitan"
        title="Walimatul Khitan"
        coupleOrKidName={kidName}
        date={events[0]?.date || '14 Juni 2026'}
        guestName={guestName}
        lockBodyScroll={lockBodyScroll}
        hideFloatingButton={hideFloatingButton}
      />

      {isCoverOpen && (
        <div className="invitation-reveal-enter" style={{ width: '100%' }}>
          <div className="sirius-page">

            {/* ════════════════════════════════════════════════
                SECTION 1: HERO / WALIMATUL KHITAN PROCLAMATION (100vh)
                ════════════════════════════════════════════════ */}
            <section className="sirius-section sirius-hero-section">
              <SiriusIslamicWatermark size={500} opacity={0.06} />
              <SiriusCornerFlourish className="sirius-corner sirius-corner--tl" />
              <SiriusCornerFlourish className="sirius-corner sirius-corner--tr" />
              <SiriusCornerFlourish className="sirius-corner sirius-corner--bl" />
              <SiriusCornerFlourish className="sirius-corner sirius-corner--br" />

              <div className="sirius-section-content">
                <SiriusCrestMotion delay={0.15}>
                  <SiriusRoyalCrest size={80} />
                </SiriusCrestMotion>

                <SiriusReveal delay={0.25}>
                  <div className="sirius-badge-capsule">✦ WALIMATUL KHITAN ✦</div>
                </SiriusReveal>

                <SiriusReveal delay={0.32}>
                  <p className="sirius-hero-subtitle">Tasyakuran & Doa Keberkahan</p>
                </SiriusReveal>

                <SiriusReveal delay={0.38}>
                  <SiriusDivider maxWidth={280} />
                </SiriusReveal>

                <SiriusReveal delay={0.44}>
                  <div className="sirius-hero-boy-wrap">
                    <span className="sirius-hero-nickname-pill">Sang Jagoan Pemberani</span>
                    <h1 className="sirius-hero-boy-name">{kidName}</h1>
                    <span className="sirius-hero-boy-callout">({nickName})</span>
                  </div>
                </SiriusReveal>

                <SiriusReveal delay={0.52}>
                  <div className="sirius-hero-parents-box">
                    <span className="sirius-hero-parents-label">Putra tercinta dari:</span>
                    <p className="sirius-hero-parents-names">{parents}</p>
                  </div>
                </SiriusReveal>

                <SiriusReveal delay={0.6}>
                  <div className="sirius-hero-date-badge">
                    <span>{events[0]?.date || 'Ahad, 14 Juni 2026'}</span>
                    <span className="sirius-dot-sep">✦</span>
                    <span>Kota Bandung</span>
                  </div>
                </SiriusReveal>

                <SiriusReveal delay={0.68}>
                  <div className="sirius-scroll-indicator">
                    <span className="sirius-scroll-text">GULIR KE BAWAH</span>
                    <span className="sirius-scroll-arrow">▾</span>
                  </div>
                </SiriusReveal>
              </div>
            </section>

            {/* ════════════════════════════════════════════════
                SECTION 2: MUKADDIMAH & DOA WALIMATUL KHITAN (100vh)
                ════════════════════════════════════════════════ */}
            <section className="sirius-section sirius-doa-section">
              <SiriusIslamicWatermark size={500} opacity={0.05} />
              <SiriusCornerFlourish className="sirius-corner sirius-corner--tl" />
              <SiriusCornerFlourish className="sirius-corner sirius-corner--tr" />
              <SiriusCornerFlourish className="sirius-corner sirius-corner--bl" />
              <SiriusCornerFlourish className="sirius-corner sirius-corner--br" />

              <div className="sirius-section-content">
                <SiriusReveal delay={0.1}>
                  <div className="sirius-bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>
                </SiriusReveal>

                <SiriusReveal delay={0.18}>
                  <div className="sirius-greeting-lead">
                    <h3 className="sirius-salam-title">Assalamu’alaikum Warahmatullahi Wabarakatuh</h3>
                    <p className="sirius-salam-text">
                      Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta’ala, kami sekeluarga bermaksud menyelenggarakan syukuran walimatul khitan putra kami tercinta:
                    </p>
                  </div>
                </SiriusReveal>

                {doaKhitan && (
                  <SiriusScaleIn delay={0.25}>
                    <div className="sirius-doa-illuminated">
                      <div className="sirius-doa-header-bar">
                        <span className="sirius-doa-header-star">✦</span>
                        <span className="sirius-doa-card-tag">{doaKhitan.ref || 'DOA KEBERKAHAN ANAK SHOLEH'}</span>
                        <span className="sirius-doa-header-star">✦</span>
                      </div>
                      <p className="sirius-doa-arabic">{doaKhitan.arabic}</p>
                      <SiriusDivider maxWidth={240} />
                      <p className="sirius-doa-trans">"{doaKhitan.translation}"</p>
                    </div>
                  </SiriusScaleIn>
                )}
              </div>
            </section>

            {/* ════════════════════════════════════════════════
                SECTION 3: WAKTU & TEMPAT SYUKURAN (100vh)
                ════════════════════════════════════════════════ */}
            <section className="sirius-section sirius-agenda-section">
              <SiriusIslamicWatermark size={500} opacity={0.05} />
              <SiriusCornerFlourish className="sirius-corner sirius-corner--tl" />
              <SiriusCornerFlourish className="sirius-corner sirius-corner--tr" />
              <SiriusCornerFlourish className="sirius-corner sirius-corner--bl" />
              <SiriusCornerFlourish className="sirius-corner sirius-corner--br" />

              <div className="sirius-section-content">
                <SiriusReveal delay={0.1}>
                  <div className="sirius-badge-capsule">✦ AGENDA ACARA ✦</div>
                  <h2 className="sirius-section-title">Waktu & Tempat Syukuran</h2>
                </SiriusReveal>

                <div className="sirius-events-stack">
                  {events.map((ev, idx) => (
                    <SiriusCard key={ev.title} delay={idx * 0.12} className="sirius-event-card-wrapper">
                      <article className="sirius-event-royal-pass">
                        <div className="sirius-event-pass-header">
                          <span className="sirius-event-tag">{ev.tag}</span>
                          <h3 className="sirius-event-title">{ev.title}</h3>
                        </div>

                        <div className="sirius-event-details">
                          <div className="sirius-detail-item">
                            <span className="sirius-detail-icon">🗓️</span>
                            <span className="sirius-detail-text sirius-detail-highlight">{ev.date}</span>
                          </div>
                          <div className="sirius-detail-item">
                            <span className="sirius-detail-icon">⏰</span>
                            <span className="sirius-detail-text">{ev.time}</span>
                          </div>
                          <div className="sirius-detail-item">
                            <span className="sirius-detail-icon">📍</span>
                            <div className="sirius-detail-venue-stack">
                              <span className="sirius-detail-venue">{ev.venue}</span>
                              <span className="sirius-detail-address">{ev.address}</span>
                            </div>
                          </div>
                        </div>

                        <div className="sirius-event-pass-actions">
                          {ev.mapsLink && (
                            <a href={ev.mapsLink} target="_blank" rel="noopener noreferrer" className="sirius-btn-event-maps">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                              Lihat Lokasi
                            </a>
                          )}
                          {ev.calendarLink && (
                            <a href={ev.calendarLink} target="_blank" rel="noopener noreferrer" className="sirius-btn-event-cal">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/></svg>
                              Simpan Kalender
                            </a>
                          )}
                        </div>
                      </article>
                    </SiriusCard>
                  ))}
                </div>

                <SiriusReveal delay={0.28}>
                  <SiriusCountdown targetDate={targetDate} />
                </SiriusReveal>
              </div>
            </section>

            {/* ════════════════════════════════════════════════
                SECTION 4: TANDA KASIH & KADO KHITAN (100vh)
                ════════════════════════════════════════════════ */}
            {(digitalGifts.length > 0 || physicalAddress) && (
              <section className="sirius-section sirius-gift-section">
                <SiriusIslamicWatermark size={500} opacity={0.05} />
                <SiriusCornerFlourish className="sirius-corner sirius-corner--tl" />
                <SiriusCornerFlourish className="sirius-corner sirius-corner--tr" />
                <SiriusCornerFlourish className="sirius-corner sirius-corner--bl" />
                <SiriusCornerFlourish className="sirius-corner sirius-corner--br" />

                <div className="sirius-section-content">
                  <SiriusReveal delay={0.1}>
                    <div className="sirius-badge-capsule">✦ TANDA KASIH ✦</div>
                    <h2 className="sirius-section-title">Kado & Hadiah Khitan</h2>
                  </SiriusReveal>

                  <SiriusReveal delay={0.2} style={{ width: '100%' }}>
                    <div className="sirius-gift-container">
                      <WeddingGift
                        gifts={digitalGifts}
                        physicalAddress={physicalAddress}
                        title=""
                        subtitle="Doa restu Anda adalah karunia yang teramat berharga bagi ananda kami. Apabila hendak memberikan tanda kasih, dapat melalui:"
                      />
                    </div>
                  </SiriusReveal>
                </div>
              </section>
            )}

            {/* ════════════════════════════════════════════════
                SECTION 5: BUKU DOA RESTU KHITAN (100vh)
                ════════════════════════════════════════════════ */}
            <section className="sirius-section sirius-wishes-section">
              <SiriusIslamicWatermark size={500} opacity={0.05} />
              <SiriusCornerFlourish className="sirius-corner sirius-corner--tl" />
              <SiriusCornerFlourish className="sirius-corner sirius-corner--tr" />
              <SiriusCornerFlourish className="sirius-corner sirius-corner--bl" />
              <SiriusCornerFlourish className="sirius-corner sirius-corner--br" />

              <div className="sirius-section-content">
                <SiriusReveal delay={0.1}>
                  <div className="sirius-badge-capsule">✦ UNTAIAN DOA ✦</div>
                  <h2 className="sirius-section-title">Buku Doa Restu Khitan</h2>
                </SiriusReveal>

                <SiriusReveal delay={0.2} style={{ width: '100%' }}>
                  <div className="sirius-wishes-container">
                    <GuestBook
                      initialWishes={wishes}
                      storageKey="wishes_sirius"
                      title=""
                      subtitle="Tuliskan ucapan selamat dan doa keberkahan untuk ananda yang telah berani berkhitan:"
                    />
                  </div>
                </SiriusReveal>
              </div>
            </section>

            {/* ════════════════════════════════════════════════
                SECTION 6: PENUTUP & KONFIRMASI KEHADIRAN (100vh)
                ════════════════════════════════════════════════ */}
            <section className="sirius-section sirius-closing-section">
              <SiriusIslamicWatermark size={500} opacity={0.06} />
              <SiriusCornerFlourish className="sirius-corner sirius-corner--tl" />
              <SiriusCornerFlourish className="sirius-corner sirius-corner--tr" />
              <SiriusCornerFlourish className="sirius-corner sirius-corner--bl" />
              <SiriusCornerFlourish className="sirius-corner sirius-corner--br" />

              <div className="sirius-section-content">
                <SiriusCrestMotion delay={0.1}>
                  <SiriusRoyalCrest size={64} />
                </SiriusCrestMotion>

                <SiriusReveal delay={0.18}>
                  <div className="sirius-closing-lead">
                    <p className="sirius-closing-msg">{closingMessage}</p>
                    <p className="sirius-closing-salam">Wassalamu’alaikum Warahmatullahi Wabarakatuh</p>
                  </div>
                </SiriusReveal>

                <SiriusReveal delay={0.26}>
                  <SiriusDivider maxWidth={240} />
                </SiriusReveal>

                <SiriusReveal delay={0.32}>
                  <div className="sirius-family-signature">
                    <span className="sirius-signature-lead">Kami yang berbahagia,</span>
                    <h4 className="sirius-signature-family">{parents}</h4>
                    <span className="sirius-signature-kid">
                      beserta ananda tercinta <strong>{kidName}</strong>
                    </span>
                  </div>
                </SiriusReveal>

                {rsvpLink && (
                  <SiriusReveal delay={0.4}>
                    <div className="sirius-rsvp-wrap">
                      <a href={rsvpLink} target="_blank" rel="noopener noreferrer" className="sirius-btn-rsvp-primary">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                        Konfirmasi Kehadiran via WhatsApp
                      </a>
                    </div>
                  </SiriusReveal>
                )}

                <footer className="sirius-footer">
                  <span className="sirius-footer-brand">{brandName}</span>
                </footer>
              </div>
            </section>

          </div>
        </div>
      )}
    </div>
  )
}
