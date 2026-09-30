import { useState, useEffect } from 'react'
import {
  PolluxReveal,
  PolluxCrestMotion,
  PolluxScaleIn,
  PolluxCard,
} from './PolluxMotion'
import {
  PolluxCrescentCrest,
  PolluxBotanicalWatermark,
  PolluxCornerFlourish,
  PolluxDivider,
  PolluxFloatingSparkles,
} from './PolluxOrnaments'
import InvitationCover from '../../components/InvitationCover'
import WeddingGift from '../../components/WeddingGift'
import GuestBook from '../../components/GuestBook'
import './Pollux.css'

function PolluxCountdown({ targetDate }) {
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
    <div className="pollux-countdown-wrap">
      <span className="pollux-countdown-badge">✦ MENGHITUNG HARI ✦</span>
      <h3 className="pollux-countdown-headline">Menuju Hari Tasyakuran Aqiqah</h3>
      <div className="pollux-countdown-grid">
        {[
          { val: time.d, unit: 'Hari' },
          { val: time.h, unit: 'Jam' },
          { val: time.m, unit: 'Menit' },
          { val: time.s, unit: 'Detik' },
        ].map((item) => (
          <div key={item.unit} className="pollux-countdown-capsule">
            <span className="pollux-capsule-num">{pad(item.val)}</span>
            <span className="pollux-capsule-lbl">{item.unit}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Pollux({ data = {} }) {
  const {
    babyName = 'Azkadina Rayna Humaira',
    nickName = 'Azkadina',
    meaning = 'Wanita sholehah yang taat pada agama, berjiwa murni laksana ratu pembawa cahaya kedamaian.',
    birthDate = 'Senin, 18 Mei 2026',
    weight = '3.3 kg',
    length = '50 cm',
    parents = 'Bapak Reza Mahendra & Ibu Sarah Amalia',
    holyVerse = {
      arabic: 'كُلُّ غُلَامٍ رَهِينَةٌ بِعَقِيقَتِهِ تُذْبَحُ عَنْهُ يَوْمَ سَابِعِهِ وَيُحْلَقُ وَيُسَمَّى',
      translation: 'Setiap anak tergadaikan dengan aqiqahnya, disembelihkan untuknya pada hari ketujuh, dicukur rambutnya dan diberi nama.',
      ref: 'HR. Abu Dawud & At-Tirmidzi',
    },
    events = [
      {
        tag: '✦ Prosesi Utama',
        title: 'Tasyakuran & Pembacaan Sholawat',
        date: 'Ahad, 21 Juni 2026',
        time: '09.30 — 11.30 WIB',
        venue: 'Kediaman Keluarga Mahendra',
        address: 'Jl. Taman Sari Indah No. 12, Sukajadi, Kota Bandung',
        mapsLink: 'https://maps.google.com',
        calendarLink: 'https://calendar.google.com',
      },
      {
        tag: '✦ Jamuan Kasih',
        title: 'Santap Siang & Doa Keberkahan',
        date: 'Ahad, 21 Juni 2026',
        time: '11.30 — 14.30 WIB',
        venue: 'Kediaman Keluarga Mahendra',
        address: 'Jl. Taman Sari Indah No. 12, Sukajadi, Kota Bandung',
        mapsLink: 'https://maps.google.com',
      },
    ],
    targetDate = '2026-12-21T09:30:00',
    digitalGifts = [],
    physicalAddress,
    wishes = [],
    closingMessage = 'Tiada kata yang dapat kami sampaikan selain rasa syukur dan terima kasih yang mendalam atas kehadiran serta doa restu Bapak / Ibu / Saudara/i untuk putri kecil kami.',
    rsvpLink = 'https://wa.me/628123456789',
    guestName = 'Tamu Undangan',
    brandName = '✦ Undangan Digital · Tema Pollux Aqiqah',
    initialOpen = false,
    lockBodyScroll = true,
    hideFloatingButton = false,
  } = data

  const [isCoverOpen, setIsCoverOpen] = useState(initialOpen)

  return (
    <div className="pollux-root">
      {/* ── Ambient Floating Sparkles ── */}
      <PolluxFloatingSparkles />

      {/* ── Opening Cover Modal ── */}
      <InvitationCover
        isOpen={isCoverOpen}
        onOpen={() => setIsCoverOpen(true)}
        onClose={() => setIsCoverOpen(false)}
        theme="pollux"
        type="aqiqah"
        title="Tasyakuran Aqiqah"
        coupleOrKidName={babyName}
        date={events[0]?.date || '21 Juni 2026'}
        guestName={guestName}
        lockBodyScroll={lockBodyScroll}
        hideFloatingButton={hideFloatingButton}
      />

      {isCoverOpen && (
        <div className="invitation-reveal-enter" style={{ width: '100%' }}>
          <div className="pollux-page">

            {/* ════════════════════════════════════════════════
                SECTION 1: HERO / PROKLAMASI WALIMATUL AQIQAH (100vh)
                ════════════════════════════════════════════════ */}
            <section className="pollux-section pollux-hero-section">
              <PolluxBotanicalWatermark size={500} opacity={0.06} />
              <PolluxCornerFlourish className="pollux-corner pollux-corner--tl" />
              <PolluxCornerFlourish className="pollux-corner pollux-corner--tr" />
              <PolluxCornerFlourish className="pollux-corner pollux-corner--bl" />
              <PolluxCornerFlourish className="pollux-corner pollux-corner--br" />

              <div className="pollux-section-content">
                <PolluxCrestMotion delay={0.15}>
                  <PolluxCrescentCrest size={80} />
                </PolluxCrestMotion>

                <PolluxReveal delay={0.25}>
                  <div className="pollux-badge-capsule">✦ WALIMATUL AQIQAH ✦</div>
                </PolluxReveal>

                <PolluxReveal delay={0.32}>
                  <p className="pollux-hero-subtitle">Tasyakuran Kelahiran &amp; Aqiqah</p>
                </PolluxReveal>

                <PolluxReveal delay={0.38}>
                  <PolluxDivider maxWidth={280} />
                </PolluxReveal>

                <PolluxReveal delay={0.44}>
                  <div className="pollux-hero-baby-wrap">
                    <span className="pollux-hero-lead-pill">Alhamdulillah Telah Lahir Putri Kami Tercinta</span>
                    <h1 className="pollux-hero-baby-name">{babyName}</h1>
                    <span className="pollux-hero-baby-callout">Panggilan Kasih: "{nickName}"</span>
                  </div>
                </PolluxReveal>

                <PolluxReveal delay={0.52}>
                  <div className="pollux-hero-parents-box">
                    <span className="pollux-hero-parents-label">Putri pertama dari pasangan bahagia:</span>
                    <p className="pollux-hero-parents-names">{parents}</p>
                  </div>
                </PolluxReveal>

                <PolluxReveal delay={0.6}>
                  <div className="pollux-hero-date-badge">
                    <span>{events[0]?.date || 'Ahad, 21 Juni 2026'}</span>
                    <span className="pollux-dot-sep">✦</span>
                    <span>Kota Bandung</span>
                  </div>
                </PolluxReveal>

                <PolluxReveal delay={0.68}>
                  <div className="pollux-scroll-indicator">
                    <span className="pollux-scroll-text">GULIR KE BAWAH</span>
                    <span className="pollux-scroll-arrow">▾</span>
                  </div>
                </PolluxReveal>
              </div>
            </section>

            {/* ════════════════════════════════════════════════
                SECTION 2: MUKADDIMAH & HADITS WALIMATUL AQIQAH (100vh)
                ════════════════════════════════════════════════ */}
            <section className="pollux-section pollux-hadits-section">
              <PolluxBotanicalWatermark size={500} opacity={0.05} />
              <PolluxCornerFlourish className="pollux-corner pollux-corner--tl" />
              <PolluxCornerFlourish className="pollux-corner pollux-corner--tr" />
              <PolluxCornerFlourish className="pollux-corner pollux-corner--bl" />
              <PolluxCornerFlourish className="pollux-corner pollux-corner--br" />

              <div className="pollux-section-content">
                <PolluxReveal delay={0.1}>
                  <div className="pollux-bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>
                </PolluxReveal>

                <PolluxReveal delay={0.18}>
                  <div className="pollux-greeting-lead">
                    <h3 className="pollux-salam-title">Assalamu’alaikum Warahmatullahi Wabarakatuh</h3>
                    <p className="pollux-salam-text">
                      Sebagai wujud rasa syukur atas amanah terindah yang Allah Subhanahu Wa Ta’ala titipkan ke dalam keluarga kami, kami memohon doa keberkahan untuk putri tercinta:
                    </p>
                  </div>
                </PolluxReveal>

                {holyVerse && (
                  <PolluxScaleIn delay={0.25}>
                    <div className="pollux-verse-illuminated">
                      <div className="pollux-verse-header-bar">
                        <span className="pollux-verse-header-star">✦</span>
                        <span className="pollux-verse-card-tag">{holyVerse.ref || 'HR. ABU DAWUD & AT-TIRMIDZI'}</span>
                        <span className="pollux-verse-header-star">✦</span>
                      </div>
                      <p className="pollux-verse-arabic">{holyVerse.arabic}</p>
                      <PolluxDivider maxWidth={240} />
                      <p className="pollux-verse-trans">"{holyVerse.translation}"</p>
                    </div>
                  </PolluxScaleIn>
                )}
              </div>
            </section>

            {/* ════════════════════════════════════════════════
                SECTION 3: SERTIFIKAT KELAHIRAN & MAKNA DOA NAMA (100vh)
                ════════════════════════════════════════════════ */}
            <section className="pollux-section pollux-passport-section">
              <PolluxBotanicalWatermark size={500} opacity={0.05} />
              <PolluxCornerFlourish className="pollux-corner pollux-corner--tl" />
              <PolluxCornerFlourish className="pollux-corner pollux-corner--tr" />
              <PolluxCornerFlourish className="pollux-corner pollux-corner--bl" />
              <PolluxCornerFlourish className="pollux-corner pollux-corner--br" />

              <div className="pollux-section-content">
                <PolluxReveal delay={0.1}>
                  <div className="pollux-badge-capsule">✦ RECORD OF BLESSINGS ✦</div>
                  <h2 className="pollux-section-title">Lembaran Keberkahan Kelahiran</h2>
                </PolluxReveal>

                <PolluxScaleIn delay={0.2}>
                  <div className="pollux-passport-card">
                    <div className="pollux-passport-header">
                      <span className="pollux-passport-stamp">★ OFFICIAL BIRTH RECORD ★</span>
                      <h3 className="pollux-passport-baby-name">{babyName}</h3>
                      <span className="pollux-passport-nick">Panggilan Kasih: "{nickName}"</span>
                    </div>

                    {meaning && (
                      <div className="pollux-baby-meaning-box">
                        <span className="pollux-meaning-label">Makna Doa di Balik Nama:</span>
                        <p className="pollux-meaning-text">"{meaning}"</p>
                      </div>
                    )}

                    <div className="pollux-passport-grid">
                      <div className="pollux-grid-quad">
                        <span className="pollux-quad-icon">🗓️</span>
                        <span className="pollux-quad-lbl">TANGGAL LAHIR</span>
                        <strong className="pollux-quad-val">{birthDate}</strong>
                      </div>
                      <div className="pollux-grid-quad">
                        <span className="pollux-quad-icon">⚖️</span>
                        <span className="pollux-quad-lbl">BERAT LAHIR</span>
                        <strong className="pollux-quad-val">{weight}</strong>
                      </div>
                      <div className="pollux-grid-quad">
                        <span className="pollux-quad-icon">📏</span>
                        <span className="pollux-quad-lbl">PANJANG BADAN</span>
                        <strong className="pollux-quad-val">{length}</strong>
                      </div>
                      <div className="pollux-grid-quad">
                        <span className="pollux-quad-icon">🕊️</span>
                        <span className="pollux-quad-lbl">STATUS AQIQAH</span>
                        <strong className="pollux-quad-val">Walimatul Aqiqah</strong>
                      </div>
                    </div>
                  </div>
                </PolluxScaleIn>
              </div>
            </section>

            {/* ════════════════════════════════════════════════
                SECTION 4: WAKTU & TEMPAT SYUKURAN (100vh)
                ════════════════════════════════════════════════ */}
            <section className="pollux-section pollux-agenda-section">
              <PolluxBotanicalWatermark size={500} opacity={0.05} />
              <PolluxCornerFlourish className="pollux-corner pollux-corner--tl" />
              <PolluxCornerFlourish className="pollux-corner pollux-corner--tr" />
              <PolluxCornerFlourish className="pollux-corner pollux-corner--bl" />
              <PolluxCornerFlourish className="pollux-corner pollux-corner--br" />

              <div className="pollux-section-content">
                <PolluxReveal delay={0.1}>
                  <div className="pollux-badge-capsule">✦ AGENDA ACARA ✦</div>
                  <h2 className="pollux-section-title">Waktu &amp; Tempat Syukuran</h2>
                </PolluxReveal>

                <div className="pollux-events-stack">
                  {events.map((ev, idx) => (
                    <PolluxCard key={ev.title} delay={idx * 0.12} className="pollux-event-card-wrapper">
                      <article className="pollux-event-botanical-pass">
                        <div className="pollux-event-pass-header">
                          <span className="pollux-event-tag">{ev.tag}</span>
                          <h3 className="pollux-event-title">{ev.title}</h3>
                        </div>

                        <div className="pollux-event-details">
                          <div className="pollux-detail-item">
                            <span className="pollux-detail-icon">🗓️</span>
                            <span className="pollux-detail-text pollux-detail-highlight">{ev.date}</span>
                          </div>
                          <div className="pollux-detail-item">
                            <span className="pollux-detail-icon">⏰</span>
                            <span className="pollux-detail-text">{ev.time}</span>
                          </div>
                          <div className="pollux-detail-item">
                            <span className="pollux-detail-icon">📍</span>
                            <div className="pollux-detail-venue-stack">
                              <span className="pollux-detail-venue">{ev.venue}</span>
                              <span className="pollux-detail-address">{ev.address}</span>
                            </div>
                          </div>
                        </div>

                        <div className="pollux-event-pass-actions">
                          {ev.mapsLink && (
                            <a href={ev.mapsLink} target="_blank" rel="noopener noreferrer" className="pollux-btn-event-maps">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                              Lihat Lokasi
                            </a>
                          )}
                          {ev.calendarLink && (
                            <a href={ev.calendarLink} target="_blank" rel="noopener noreferrer" className="pollux-btn-event-cal">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/></svg>
                              Simpan Kalender
                            </a>
                          )}
                        </div>
                      </article>
                    </PolluxCard>
                  ))}
                </div>

                <PolluxReveal delay={0.28}>
                  <PolluxCountdown targetDate={targetDate} />
                </PolluxReveal>
              </div>
            </section>

            {/* ════════════════════════════════════════════════
                SECTION 5: TANDA KASIH UNTUK BUAH HATI (100vh)
                ════════════════════════════════════════════════ */}
            {(digitalGifts.length > 0 || physicalAddress) && (
              <section className="pollux-section pollux-gift-section">
                <PolluxBotanicalWatermark size={500} opacity={0.05} />
                <PolluxCornerFlourish className="pollux-corner pollux-corner--tl" />
                <PolluxCornerFlourish className="pollux-corner pollux-corner--tr" />
                <PolluxCornerFlourish className="pollux-corner pollux-corner--bl" />
                <PolluxCornerFlourish className="pollux-corner pollux-corner--br" />

                <div className="pollux-section-content">
                  <PolluxReveal delay={0.1}>
                    <div className="pollux-badge-capsule">✦ TANDA KASIH ✦</div>
                    <h2 className="pollux-section-title">Kado Kasih untuk Buah Hati</h2>
                  </PolluxReveal>

                  <PolluxReveal delay={0.2} style={{ width: '100%' }}>
                    <div className="pollux-gift-container">
                      <WeddingGift
                        gifts={digitalGifts}
                        physicalAddress={physicalAddress}
                        title=""
                        subtitle="Doa restu Anda adalah karunia terindah bagi keluarga kami. Namun jika ingin memberikan tanda kasih untuk buah hati tercinta:"
                      />
                    </div>
                  </PolluxReveal>
                </div>
              </section>
            )}

            {/* ════════════════════════════════════════════════
                SECTION 6: BUKU DOA & HARAPAN UNTUK BUAH HATI (100vh)
                ════════════════════════════════════════════════ */}
            <section className="pollux-section pollux-wishes-section">
              <PolluxBotanicalWatermark size={500} opacity={0.05} />
              <PolluxCornerFlourish className="pollux-corner pollux-corner--tl" />
              <PolluxCornerFlourish className="pollux-corner pollux-corner--tr" />
              <PolluxCornerFlourish className="pollux-corner pollux-corner--bl" />
              <PolluxCornerFlourish className="pollux-corner pollux-corner--br" />

              <div className="pollux-section-content">
                <PolluxReveal delay={0.1}>
                  <div className="pollux-badge-capsule">✦ UNTAIAN DOA ✦</div>
                  <h2 className="pollux-section-title">Doa &amp; Harapan Buah Hati</h2>
                </PolluxReveal>

                <PolluxReveal delay={0.2} style={{ width: '100%' }}>
                  <div className="pollux-wishes-container">
                    <GuestBook
                      initialWishes={wishes}
                      storageKey="wishes_pollux"
                      title=""
                      subtitle="Sampaikan doa tulus agar kelak tumbuh menjadi anak yang sholehah, sehat, dan berbakti kepada orang tua:"
                    />
                  </div>
                </PolluxReveal>
              </div>
            </section>

            {/* ════════════════════════════════════════════════
                SECTION 7: PENUTUP & KONFIRMASI KEHADIRAN (100vh)
                ════════════════════════════════════════════════ */}
            <section className="pollux-section pollux-closing-section">
              <PolluxBotanicalWatermark size={500} opacity={0.06} />
              <PolluxCornerFlourish className="pollux-corner pollux-corner--tl" />
              <PolluxCornerFlourish className="pollux-corner pollux-corner--tr" />
              <PolluxCornerFlourish className="pollux-corner pollux-corner--bl" />
              <PolluxCornerFlourish className="pollux-corner pollux-corner--br" />

              <div className="pollux-section-content">
                <PolluxCrestMotion delay={0.1}>
                  <PolluxCrescentCrest size={64} />
                </PolluxCrestMotion>

                <PolluxReveal delay={0.18}>
                  <div className="pollux-closing-lead">
                    <p className="pollux-closing-msg">{closingMessage}</p>
                    <p className="pollux-closing-salam">Wassalamu’alaikum Warahmatullahi Wabarakatuh</p>
                  </div>
                </PolluxReveal>

                <PolluxReveal delay={0.26}>
                  <PolluxDivider maxWidth={240} />
                </PolluxReveal>

                <PolluxReveal delay={0.32}>
                  <div className="pollux-family-signature">
                    <span className="pollux-signature-lead">Kami yang berbahagia,</span>
                    <h4 className="pollux-signature-family">{parents}</h4>
                    <span className="pollux-signature-kid">
                      beserta putri tercinta <strong>{babyName}</strong>
                    </span>
                  </div>
                </PolluxReveal>

                {rsvpLink && (
                  <PolluxReveal delay={0.4}>
                    <div className="pollux-rsvp-wrap">
                      <a href={rsvpLink} target="_blank" rel="noopener noreferrer" className="pollux-btn-rsvp-primary">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                        Konfirmasi Kehadiran via WhatsApp
                      </a>
                    </div>
                  </PolluxReveal>
                )}

                <footer className="pollux-footer">
                  <span className="pollux-footer-brand">{brandName}</span>
                </footer>
              </div>
            </section>

          </div>
        </div>
      )}
    </div>
  )
}
