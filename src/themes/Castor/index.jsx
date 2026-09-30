import { useEffect, useState } from 'react'
import {
  CastorCurtainReveal,
  CastorWaxSealStamp,
  CastorBaroqueOrnament,
  CastorImperialNames,
} from './CastorMotion'
import {
  ImperialCrown,
  RoyalWaxSeal,
  RoyalHeraldicWatermark,
  RoyalCornerFiligree,
  RoyalMonarchDivider,
  GoldDustLayer,
} from './CastorOrnaments'
import { BaroqueFiligreeLeft, BaroqueFiligreeRight } from '../../components/Ornaments'
import InvitationCover from '../../components/InvitationCover'
import LoveStory from '../../components/LoveStory'
import WeddingGift from '../../components/WeddingGift'
import GuestBook from '../../components/GuestBook'
import './Castor.css'

function CastorCountdown({ targetDate }) {
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
    <div className="castor-countdown-clean">
      <div className="castor-countdown-digits">
        {[
          { val: time.d, unit: 'Hari' },
          { val: time.h, unit: 'Jam' },
          { val: time.m, unit: 'Menit' },
          { val: time.s, unit: 'Detik' },
        ].map((item, i) => (
          <div key={item.unit} className="castor-countdown-item-group">
            {i > 0 && <span className="castor-countdown-colon">:</span>}
            <div className="castor-countdown-box">
              <span className="castor-digit">{pad(item.val)}</span>
              <span className="castor-digit-unit">{item.unit}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Castor({ data = {} }) {
  const {
    groomName = 'Fauzan',
    groomFullName = 'Fauzan Al-Hakim, S.H., M.H.',
    groomParents = 'Bapak KH. Ahmad Taufik & Ibu Hj. Siti Maryam',
    brideName = 'Aisyah',
    brideFullName = 'Aisyah Nur Fadilah, S.Psi.',
    brideParents = 'Bapak H. Bakri Santoso & Ibu Hj. Fatimah',
    holyVerse,
    akad = {},
    resepsi = {},
    loveStory = [],
    digitalGifts = [],
    physicalAddress,
    wishes = [],
    closingMessage = 'Kehadiran dan doa restu Bapak / Ibu / Saudara/i merupakan kehormatan agung dan kebahagiaan yang tak terhingga bagi kami sekeluarga.',
    rsvpLink = 'https://wa.me/628123456789',
    brandName = '✦ Undangan Digital Kerajaan · Tema Castor',
    guestName = 'Tamu Undangan',
    initialOpen = false,
    lockBodyScroll = true,
    hideFloatingButton = false,
  } = data

  const [isCoverOpen, setIsCoverOpen] = useState(initialOpen)

  return (
    <div className="castor-root">
      {/* ── Ambient Floating Gold Dust ── */}
      <GoldDustLayer />

      {/* ── Opening Cover ── */}
      <InvitationCover
        isOpen={isCoverOpen}
        onOpen={() => setIsCoverOpen(true)}
        onClose={() => setIsCoverOpen(false)}
        theme="castor"
        type="wedding"
        title="Royal Wedding Proclamation"
        coupleOrKidName={`${groomName} & ${brideName}`}
        date={resepsi.date || akad.date || '6 Juni 2026'}
        guestName={guestName}
        lockBodyScroll={lockBodyScroll}
        hideFloatingButton={hideFloatingButton}
      />

      {isCoverOpen && (
        <div className="invitation-reveal-enter" style={{ width: '100%' }}>
          <div className="castor-page">

            {/* ════════════════════════════════════════════════
                SECTION 1: HERO / ROYAL PROCLAMATION (100vh)
                ════════════════════════════════════════════════ */}
            <section className="castor-section castor-hero-section">
              <RoyalHeraldicWatermark size={520} opacity={0.07} />
              <RoyalCornerFiligree className="castor-corner--tl" />
              <RoyalCornerFiligree className="castor-corner--tr" />
              <RoyalCornerFiligree className="castor-corner--bl" />
              <RoyalCornerFiligree className="castor-corner--br" />

              <div className="castor-section-content">
                <CastorWaxSealStamp delay={0.15}>
                  <div className="castor-hero-crown">
                    <ImperialCrown size={78} />
                  </div>
                </CastorWaxSealStamp>

                <CastorCurtainReveal delay={0.25}>
                  <span className="castor-royal-tag">
                    ✦ Undangan Pernikahan Kerajaan ✦
                  </span>
                </CastorCurtainReveal>

                <CastorCurtainReveal delay={0.32}>
                  <span className="castor-hero-eyebrow">
                    The Royal Wedding of
                  </span>
                </CastorCurtainReveal>

                <CastorImperialNames delay={0.4}>
                  <div className="castor-hero-couple">
                    <h1 className="castor-hero-name-primary">{groomName}</h1>
                    <div className="castor-hero-ampersand-wrap">
                      <span className="castor-hero-ampersand-line" />
                      <span className="castor-hero-ampersand">&amp;</span>
                      <span className="castor-hero-ampersand-line" />
                    </div>
                    <h1 className="castor-hero-name-primary">{brideName}</h1>
                  </div>
                </CastorImperialNames>

                <CastorCurtainReveal delay={0.48}>
                  <p className="castor-hero-titles">
                    {groomFullName} · {brideFullName}
                  </p>
                </CastorCurtainReveal>

                <CastorCurtainReveal delay={0.55}>
                  <div className="castor-hero-date-badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                    </svg>
                    <span>{resepsi.date || akad.date || 'Jumat, 6 Juni 2026'} · Bandung</span>
                  </div>
                </CastorCurtainReveal>

                <CastorCurtainReveal delay={0.62}>
                  <div className="castor-scroll-hint">
                    <span>Gulir ke Bawah Titah Mulia</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </CastorCurtainReveal>
              </div>
            </section>

            {/* ════════════════════════════════════════════════
                SECTION 2: AYAT SUCI & DOA RESTU (100vh)
                ════════════════════════════════════════════════ */}
            <section className="castor-section castor-verse-section">
              <RoyalHeraldicWatermark size={480} opacity={0.055} />

              <div className="castor-section-content">
                {/* Bismillah */}
                <CastorCurtainReveal delay={0.15}>
                  <div className="castor-bismillah">
                    <span>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</span>
                  </div>
                </CastorCurtainReveal>

                {/* Holy Verse / Hadits — Simple, Clean, Dignified */}
                {holyVerse && (
                  <CastorCurtainReveal delay={0.22}>
                    <div className="castor-verse-clean-flow">
                      <span className="castor-verse-kicker">✦ DOA &amp; RESTU RASULULLAH ✦</span>
                      <p className="castor-verse-arabic">{holyVerse.arabic}</p>
                      <p className="castor-verse-trans">"{holyVerse.translation}"</p>
                      <span className="castor-verse-ref">{holyVerse.ref}</span>
                    </div>
                  </CastorCurtainReveal>
                )}

                <RoyalMonarchDivider width="85%" />

                {/* Formal Royal Greeting Decree */}
                <CastorCurtainReveal delay={0.3}>
                  <div className="castor-greeting-decree">
                    <p className="castor-greeting-lead">
                      Dengan memohon rahmat dan ridha Allah Subhanahu Wa Ta'ala,
                      kami mengundang kehadiran Bapak / Ibu / Saudara/i
                      untuk turut menyaksikan dan memberikan doa restu pada
                      ikrar suci pernikahan putra-putri kami:
                    </p>
                  </div>
                </CastorCurtainReveal>
              </div>
            </section>

            {/* ════════════════════════════════════════════════
                SECTION 3: KEDUA MEMPELAI (100vh)
                ════════════════════════════════════════════════ */}
            <section className="castor-section castor-couple-section">
              <RoyalHeraldicWatermark size={500} opacity={0.06} />

              <div className="castor-section-content">
                <CastorCurtainReveal delay={0.1}>
                  <div className="castor-section-head">
                    <span className="castor-section-kicker">Mempelai Agung</span>
                    <h2 className="castor-section-title">Kedua Mempelai</h2>
                    <p className="castor-section-subtitle">
                      Dua insan yang dipersatukan dalam ikatan suci pernikahan mulia
                    </p>
                  </div>
                </CastorCurtainReveal>

                <div className="castor-couple-clean-flow">
                  {/* Flank filigree ornaments */}
                  <CastorBaroqueOrnament side="left" delay={0.1} style={{ left: '-36px', top: '15%' }}>
                    <BaroqueFiligreeLeft color="rgba(201,168,76,0.4)" size={90} />
                  </CastorBaroqueOrnament>
                  <CastorBaroqueOrnament side="right" delay={0.15} style={{ right: '-36px', top: '15%' }}>
                    <BaroqueFiligreeRight color="rgba(201,168,76,0.4)" size={90} />
                  </CastorBaroqueOrnament>

                  {/* ── MEMPELAI PRIA ── */}
                  <CastorCurtainReveal delay={0.15}>
                    <div className="castor-profile-entry">
                      <span className="castor-profile-tag">✦ MEMPELAI PRIA ✦</span>
                      <h3 className="castor-profile-noble-name">{groomName}</h3>
                      <p className="castor-profile-full-title">{groomFullName}</p>
                      <p className="castor-profile-parent-text">
                        Putra tercinta dari: <br />
                        <strong>{groomParents}</strong>
                      </p>
                    </div>
                  </CastorCurtainReveal>

                  {/* ── ROYAL AMPERSAND SEAL MEDALLION ── */}
                  <div className="castor-couple-ampersand-divider">
                    <span className="castor-ampersand-bar" />
                    <div className="castor-ampersand-medallion">
                      <RoyalWaxSeal size={62} monogram="&amp;" />
                    </div>
                    <span className="castor-ampersand-bar" />
                  </div>

                  {/* ── MEMPELAI WANITA ── */}
                  <CastorCurtainReveal delay={0.25}>
                    <div className="castor-profile-entry">
                      <span className="castor-profile-tag">✦ MEMPELAI WANITA ✦</span>
                      <h3 className="castor-profile-noble-name">{brideName}</h3>
                      <p className="castor-profile-full-title">{brideFullName}</p>
                      <p className="castor-profile-parent-text">
                        Putri tercinta dari: <br />
                        <strong>{brideParents}</strong>
                      </p>
                    </div>
                  </CastorCurtainReveal>
                </div>
              </div>
            </section>

            {/* ════════════════════════════════════════════════
                SECTION 4: TITAH RANGKAIAN ACARA (100vh)
                ════════════════════════════════════════════════ */}
            <section className="castor-section castor-events-section">
              <RoyalHeraldicWatermark size={500} opacity={0.055} />

              <div className="castor-section-content">
                <CastorCurtainReveal delay={0.1}>
                  <div className="castor-section-head">
                    <span className="castor-section-kicker">Waktu &amp; Tempat</span>
                    <h2 className="castor-section-title">Titah Rangkaian Acara</h2>
                    <p className="castor-section-subtitle">
                      Insya Allah rangkaian prosesi akad nikah dan walimatul ursy diselenggarakan pada:
                    </p>
                  </div>
                </CastorCurtainReveal>

                <div className="castor-events-clean-flow">
                  {/* Flank filigree ornaments */}
                  <CastorBaroqueOrnament side="left" delay={0.1} style={{ left: '-36px', top: '20%' }}>
                    <BaroqueFiligreeLeft color="rgba(201,168,76,0.35)" size={85} />
                  </CastorBaroqueOrnament>
                  <CastorBaroqueOrnament side="right" delay={0.15} style={{ right: '-36px', top: '20%' }}>
                    <BaroqueFiligreeRight color="rgba(201,168,76,0.35)" size={85} />
                  </CastorBaroqueOrnament>

                  {/* ── ACARA 1: AKAD NIKAH ── */}
                  <CastorCurtainReveal delay={0.15}>
                    <div className="castor-event-clean-item">
                      <span className="castor-event-item-kicker">✦ AKAD NIKAH ✦</span>
                      <h3 className="castor-event-item-title">{akad.name || 'Akad Nikah'}</h3>
                      <div className="castor-event-item-datetime">
                        <span className="castor-event-item-date">{akad.day ? `${akad.day}, ` : ''}{akad.date}</span>
                        <span className="castor-event-item-dot">·</span>
                        <span className="castor-event-item-time">{akad.time}</span>
                      </div>
                      <p className="castor-event-item-venue">{akad.venue}</p>
                      <p className="castor-event-item-address">{akad.address}</p>

                      <div className="castor-event-actions-row">
                        {akad.mapsLink && (
                          <a href={akad.mapsLink} target="_blank" rel="noopener noreferrer" className="castor-btn-maps-royal">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                              <circle cx="12" cy="10" r="3" />
                            </svg>
                            Petunjuk Lokasi
                          </a>
                        )}
                        {akad.calendarLink && (
                          <a href={akad.calendarLink} target="_blank" rel="noopener noreferrer" className="castor-btn-calendar-royal">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <rect x="3" y="4" width="18" height="18" rx="2" />
                              <line x1="16" y1="2" x2="16" y2="6" />
                              <line x1="8" y1="2" x2="8" y2="6" />
                            </svg>
                            Simpan Kalender
                          </a>
                        )}
                      </div>
                    </div>
                  </CastorCurtainReveal>

                  <RoyalMonarchDivider width="70%" />

                  {/* ── ACARA 2: WALIMATUL URSY ── */}
                  <CastorCurtainReveal delay={0.25}>
                    <div className="castor-event-clean-item">
                      <span className="castor-event-item-kicker">✦ WALIMATUL URSY ✦</span>
                      <h3 className="castor-event-item-title">{resepsi.name || 'Walimatul Ursy'}</h3>
                      <div className="castor-event-item-datetime">
                        <span className="castor-event-item-date">{resepsi.day ? `${resepsi.day}, ` : ''}{resepsi.date}</span>
                        <span className="castor-event-item-dot">·</span>
                        <span className="castor-event-item-time">{resepsi.time}</span>
                      </div>
                      <p className="castor-event-item-venue">{resepsi.venue}</p>
                      <p className="castor-event-item-address">{resepsi.address}</p>

                      <div className="castor-event-actions-row">
                        {resepsi.mapsLink && (
                          <a href={resepsi.mapsLink} target="_blank" rel="noopener noreferrer" className="castor-btn-maps-royal">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                              <circle cx="12" cy="10" r="3" />
                            </svg>
                            Petunjuk Lokasi
                          </a>
                        )}
                        {resepsi.calendarLink && (
                          <a href={resepsi.calendarLink} target="_blank" rel="noopener noreferrer" className="castor-btn-calendar-royal">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <rect x="3" y="4" width="18" height="18" rx="2" />
                              <line x1="16" y1="2" x2="16" y2="6" />
                              <line x1="8" y1="2" x2="8" y2="6" />
                            </svg>
                            Simpan Kalender
                          </a>
                        )}
                      </div>
                    </div>
                  </CastorCurtainReveal>
                </div>
              </div>
            </section>

            {/* ════════════════════════════════════════════════
                SECTION 5: COUNTDOWN (ROYAL CHRONOMETER) (100vh)
                ════════════════════════════════════════════════ */}
            <section className="castor-section castor-countdown-section">
              <RoyalHeraldicWatermark size={440} opacity={0.055} />

              <div className="castor-section-content">
                <CastorCurtainReveal delay={0.1}>
                  <div className="castor-section-head">
                    <span className="castor-section-kicker">Waktu Tersisa</span>
                    <h2 className="castor-section-title">Menghitung Hari Agung</h2>
                    <p className="castor-section-subtitle">
                      Menuju ikrar janji suci pernikahan di hadapan Ilahi
                    </p>
                  </div>
                </CastorCurtainReveal>

                <CastorCurtainReveal delay={0.18}>
                  <CastorCountdown targetDate={resepsi.isoDate || akad.isoDate} />
                </CastorCurtainReveal>
              </div>
            </section>

            {/* ════════════════════════════════════════════════
                SECTION 6: KISAH KASIH AGUNG (LOVE STORY) (100vh)
                ════════════════════════════════════════════════ */}
            {loveStory && loveStory.length > 0 && (
              <section className="castor-section castor-story-section">
                <div className="castor-section-content">
                  <CastorCurtainReveal delay={0.1}>
                    <div style={{ width: '100%' }}>
                      <LoveStory
                        stories={loveStory}
                        title="Kisah Kasih Agung"
                        subtitle="Untaian takdir suci yang menyatukan dua insan dalam ikatan mulia"
                      />
                    </div>
                  </CastorCurtainReveal>
                </div>
              </section>
            )}

            {/* ════════════════════════════════════════════════
                SECTION 7: TANDA KASIH & KADO KERAJAAN (100vh)
                ════════════════════════════════════════════════ */}
            {((digitalGifts && digitalGifts.length > 0) || physicalAddress) && (
              <section className="castor-section castor-gift-section">
                <div className="castor-section-content">
                  <CastorCurtainReveal delay={0.1}>
                    <div style={{ width: '100%' }}>
                      <WeddingGift
                        gifts={digitalGifts}
                        physicalAddress={physicalAddress}
                        title="Tanda Kasih &amp; Kado Kerajaan"
                        subtitle="Kehadiran dan doa restu Anda adalah anugerah terbesar bagi kami. Apabila hendak memberikan tanda kasih, dapat melalui:"
                      />
                    </div>
                  </CastorCurtainReveal>
                </div>
              </section>
            )}

            {/* ════════════════════════════════════════════════
                SECTION 8: BUKU DOA RESTU PARA TAMU (100vh)
                ════════════════════════════════════════════════ */}
            <section className="castor-section castor-wishes-section">
              <div className="castor-section-content">
                <CastorCurtainReveal delay={0.1}>
                  <div style={{ width: '100%' }}>
                    <GuestBook
                      initialWishes={wishes}
                      storageKey="wishes_castor"
                      title="Buku Doa Restu Para Tamu"
                      subtitle="Tuliskan untaian ucapan selamat dan doa keberkahan untuk kedua mempelai"
                    />
                  </div>
                </CastorCurtainReveal>
              </div>
            </section>

            {/* ════════════════════════════════════════════════
                SECTION 9: PENUTUP & RSVP WHATSAPP (100vh)
                ════════════════════════════════════════════════ */}
            <section className="castor-section castor-closing-section">
              <RoyalHeraldicWatermark size={480} opacity={0.065} />

              <div className="castor-section-content">
                {/* Royal Wax Seal Stamp */}
                <CastorWaxSealStamp delay={0.1}>
                  <div className="castor-closing-seal-wrap">
                    <RoyalWaxSeal size={82} monogram="FA" />
                  </div>
                </CastorWaxSealStamp>

                <CastorCurtainReveal delay={0.18}>
                  <div className="castor-closing-decree-box">
                    <p className="castor-closing-decree-text">
                      {closingMessage}
                    </p>
                    <span className="castor-closing-royal-family">
                      Kami yang berbahagia,<br />
                      <strong>Keluarga Besar {groomName} &amp; {brideName}</strong>
                    </span>
                  </div>
                </CastorCurtainReveal>

                {rsvpLink && (
                  <CastorCurtainReveal delay={0.25}>
                    <div className="castor-rsvp-cta-wrap">
                      <a
                        href={rsvpLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="castor-btn-rsvp-imperial"
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                        Konfirmasi Kehadiran via WhatsApp
                      </a>
                    </div>
                  </CastorCurtainReveal>
                )}
              </div>
            </section>

            {/* ════════════════════════════════════════════════
                FOOTER: ROYAL BRAND BAR
                ════════════════════════════════════════════════ */}
            <footer className="castor-bottom-bar">
              <div className="castor-footer-crown">
                <ImperialCrown size={34} />
              </div>
              <span className="castor-footer-brand">
                {brandName || '✦ Undangan Digital Kerajaan · Tema Castor'}
              </span>
            </footer>

          </div>
        </div>
      )}
    </div>
  )
}
