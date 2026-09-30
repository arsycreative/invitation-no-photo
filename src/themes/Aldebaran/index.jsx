import { useState, useEffect } from 'react'
import {
  AldebaranHeroReveal,
  AldebaranReveal,
  AldebaranCrestMotion,
  AldebaranScaleIn,
  AldebaranCard,
} from './AldebaranMotion'
import {
  AldebaranMihrabArch,
  AldebaranMushafUnwan,
  AldebaranTasbihDivider,
  AldebaranGirihWatermark,
} from './AldebaranOrnaments'
import InvitationCover from '../../components/InvitationCover'
import WeddingGift from '../../components/WeddingGift'
import GuestBook from '../../components/GuestBook'
import './Aldebaran.css'

function AldebaranCountdown({ targetDate }) {
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
    <div className="aldebaran-countdown-box">
      <span className="aldebaran-countdown-label">✦ MENUJU PELAKSANAAN MAJELIS ✦</span>
      <div className="aldebaran-countdown-digits">
        {[
          { val: time.d, unit: 'HARI' },
          { val: time.h, unit: 'JAM' },
          { val: time.m, unit: 'MENIT' },
          { val: time.s, unit: 'DETIK' },
        ].map((item) => (
          <div key={item.unit} className="aldebaran-digit-block">
            <span className="aldebaran-digit">{pad(item.val)}</span>
            <span className="aldebaran-digit-unit">{item.unit}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Aldebaran({ data = {} }) {
  const {
    honoreeName = 'H. Ahmad Baihaqi bin H. Dahlan',
    eventTitle = 'Pengajian, Tahlil & Doa Bersama',
    eventSubtitle = 'Memperingati 100 Hari Berpulangnya ke Rahmatullah',
    hostFamily = 'Keluarga Besar Alm. H. Ahmad Baihaqi',
    verse = {
      arabic: 'يَا أَيَّتُهَا النَّفْسُ الْمُطْمَئِنَّةُ ارْجِعِي إِلَىٰ رَبِّكِ رَاضِيَةً مَّرْضِيَّةً فَادْخُلِي فِي عِبَادِي وَادْخُلِي جَنَّتِي',
      translation: 'Wahai jiwa yang tenang! Kembalilah kepada Tuhanmu dengan hati yang ridha dan diridhai-Nya. Maka masuklah ke dalam golongan hamba-hamba-Ku, dan masuklah ke dalam surga-Ku.',
      surah: 'QS. Al-Fajr: 27 — 30',
    },
    agenda = [
      { num: '1', title: 'Pembacaan Ummul Qur’an & Surat Yasin', desc: 'Diawali dengan pembacaan surat Al-Fatihah dan Yasin secara berjamaah.' },
      { num: '2', title: 'Dzikir, Tahlil & Tahmid', desc: 'Melafalkan kalimat thayyibah dan menghadiahkan pahala doa.' },
      { num: '3', title: 'Tausiyah & Mau’idhoh Hasanah', desc: 'Kajian singkat tentang keutamaan silaturahmi dan berbakti kepada orang tua.' },
      { num: '4', title: 'Doa Bersama & Penutup', desc: 'Munajat doa khusyuk memohon maghfirah dan rahmat Allah SWT.' },
      { num: '5', title: 'Ramah Tamah & Santap Berkah', desc: 'Menjalin ukhuwah dan menikmati hidangan berkah bersama keluarga.' },
    ],
    events = [
      {
        tag: '✦ Majelis Utama',
        title: 'Pengajian & Doa Bersama 100 Hari',
        date: 'Kamis Malam Jumat, 5 November 2026',
        time: '19.30 WIB (Ba’da Isya) — Selesai',
        venue: 'Kediaman Keluarga Besar Alm. H. Ahmad Baihaqi',
        address: 'Jl. Cisangkuy No. 18, Cihapit, Bandung Wetan, Kota Bandung',
        mapsLink: 'https://maps.google.com',
        calendarLink: 'https://calendar.google.com',
      },
    ],
    targetDate = '2026-11-05T19:30:00',
    digitalGifts = [],
    physicalAddress,
    wishes = [],
    closingMessage = 'Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga apabila Bapak / Ibu / Saudara/i berkenan hadir untuk bersama-sama melantunkan doa bagi almarhum.',
    rsvpLink = 'https://wa.me/628123456789',
    guestName = 'Bapak / Ibu / Jamaah Terhormat',
    brandName = '✦ Undangan Digital · Tema Aldebaran Doa Bersama',
    initialOpen = false,
    lockBodyScroll = true,
    hideFloatingButton = false,
  } = data

  const [isCoverOpen, setIsCoverOpen] = useState(initialOpen)

  return (
    <div className="aldebaran-root">
      {/* ── Opening Cover ── */}
      <InvitationCover
        isOpen={isCoverOpen}
        onOpen={() => setIsCoverOpen(true)}
        onClose={() => setIsCoverOpen(false)}
        theme="aldebaran"
        type="doa-bersama"
        title="Majelis Doa Bersama"
        coupleOrKidName={honoreeName}
        date={events[0]?.date || '5 November 2026'}
        guestName={guestName}
        lockBodyScroll={lockBodyScroll}
        hideFloatingButton={hideFloatingButton}
      />

      {isCoverOpen && (
        <div className="invitation-reveal-enter aldebaran-container">

          {/* ════════════════════════════════════════════════
              SECTION 1: HERO / MIHRAB MAJELIS (100vh)
              ════════════════════════════════════════════════ */}
          <section id="hero" className="aldebaran-section aldebaran-hero-section">
            <AldebaranGirihWatermark size={440} opacity={0.035} />

            <div className="aldebaran-section-content">
              <AldebaranCrestMotion delay={0.08}>
                <AldebaranMihrabArch />
              </AldebaranCrestMotion>

              <AldebaranHeroReveal delay={0.18}>
                <div className="aldebaran-badge-pill">
                  <span>✦ MAJELIS DZIKIR &amp; DOA BERSAMA ✦</span>
                </div>
              </AldebaranHeroReveal>

              <AldebaranHeroReveal delay={0.24}>
                <h1 className="aldebaran-main-title">{eventTitle}</h1>
              </AldebaranHeroReveal>

              <AldebaranHeroReveal delay={0.32}>
                <div className="aldebaran-honoree-card">
                  <span className="aldebaran-honoree-name">{honoreeName}</span>
                  <span className="aldebaran-honoree-memorial">{eventSubtitle}</span>
                  {hostFamily && (
                    <div className="aldebaran-host-family-line">
                      <span className="aldebaran-host-label">Hormat Kami:</span>
                      <strong className="aldebaran-host-name">{hostFamily}</strong>
                    </div>
                  )}
                </div>
              </AldebaranHeroReveal>

              <AldebaranHeroReveal delay={0.42}>
                <div className="aldebaran-scroll-prompt">
                  <span className="aldebaran-scroll-text">GULIR KE LEMBARAN DOA</span>
                  <div className="aldebaran-scroll-chevron">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b88a2e" strokeWidth="2.4" strokeLinecap="round">
                      <path d="M7 10l5 5 5-5" />
                    </svg>
                  </div>
                </div>
              </AldebaranHeroReveal>
            </div>
          </section>

          {/* ════════════════════════════════════════════════
              SECTION 2: AYAT SUCI AL-QUR'AN & BISMILLAH (100vh)
              Illuminated Islamic Mushaf Folio Layout
              ════════════════════════════════════════════════ */}
          <section id="verse" className="aldebaran-section aldebaran-verse-section">
            <AldebaranGirihWatermark size={400} opacity={0.035} />

            <div className="aldebaran-section-content">
              <AldebaranReveal delay={0.08}>
                <AldebaranMushafUnwan title="بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ" sub="KALAM ILAHI" />
                <p className="aldebaran-salam-lead">
                  Assalamu’alaikum Warahmatullahi Wabarakatuh.<br />
                  Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dalam majelis doa bersama:
                </p>
              </AldebaranReveal>

              {verse && (
                <AldebaranScaleIn delay={0.18}>
                  <div className="aldebaran-mushaf-folio-card">
                    <div className="aldebaran-folio-inner-border">
                      <p className="aldebaran-verse-arabic-text">{verse.arabic}</p>
                      <div className="aldebaran-verse-trans-wrapper">
                        <span className="aldebaran-quote-mark">“</span>
                        <p className="aldebaran-verse-translation">{verse.translation}</p>
                      </div>
                      <span className="aldebaran-verse-reference-pill">{verse.surah}</span>
                    </div>
                  </div>
                </AldebaranScaleIn>
              )}

              <AldebaranReveal delay={0.28}>
                <AldebaranTasbihDivider className="aldebaran-verse-tasbih" />
              </AldebaranReveal>
            </div>
          </section>

          {/* ════════════════════════════════════════════════
              SECTION 3: SUSUNAN ACARA / TERTIB AMALIYAH (100vh)
              ════════════════════════════════════════════════ */}
          {agenda && agenda.length > 0 && (
            <section id="agenda" className="aldebaran-section aldebaran-agenda-section">
              <AldebaranGirihWatermark size={420} opacity={0.035} />

              <div className="aldebaran-section-content">
                <AldebaranReveal delay={0.08}>
                  <div className="aldebaran-section-tag">✦ TERTIB AMALIYAH ✦</div>
                  <h2 className="aldebaran-section-title">Susunan Acara Majelis</h2>
                  <p className="aldebaran-section-subtitle">
                    Tertib Amaliyah, Dzikir, Tahlil &amp; Doa Berjamaah
                  </p>
                </AldebaranReveal>

                <div className="aldebaran-agenda-flow">
                  {agenda.map((item, idx) => (
                    <AldebaranCard key={item.num} delay={idx * 0.1} className="aldebaran-agenda-card">
                      <div className="aldebaran-agenda-medallion">
                        <span>{item.num}</span>
                      </div>
                      <div className="aldebaran-agenda-text-block">
                        <h3 className="aldebaran-agenda-item-title">{item.title}</h3>
                        <p className="aldebaran-agenda-item-desc">{item.desc}</p>
                      </div>
                    </AldebaranCard>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ════════════════════════════════════════════════
              SECTION 4: WAKTU, LOKASI KEDIAMAN & COUNTDOWN (100vh)
              ════════════════════════════════════════════════ */}
          <section id="events" className="aldebaran-section aldebaran-events-section">
            <AldebaranGirihWatermark size={440} opacity={0.035} />

            <div className="aldebaran-section-content">
              <AldebaranReveal delay={0.08}>
                <div className="aldebaran-section-tag">✦ WAKTU &amp; TEMPAT ✦</div>
                <h2 className="aldebaran-section-title">Waktu &amp; Lokasi Majelis</h2>
                <p className="aldebaran-section-subtitle">
                  Kediaman Keluarga Besar Alm. H. Ahmad Baihaqi
                </p>
              </AldebaranReveal>

              <div className="aldebaran-events-stack">
                {events.map((ev, idx) => (
                  <AldebaranCard key={ev.title} delay={idx * 0.12}>
                    <article className="aldebaran-majelis-pass-card">
                      <div className="aldebaran-pass-crown-tag">{ev.tag}</div>
                      <h3 className="aldebaran-pass-title">{ev.title}</h3>

                      <div className="aldebaran-pass-time-grid">
                        <div className="aldebaran-pass-time-item">
                          <span className="aldebaran-pti-label">HARI &amp; TANGGAL</span>
                          <span className="aldebaran-pti-val">{ev.date}</span>
                        </div>
                        <div className="aldebaran-pass-time-item">
                          <span className="aldebaran-pti-label">WAKTU MAJELIS</span>
                          <span className="aldebaran-pti-val">{ev.time}</span>
                        </div>
                      </div>

                      <div className="aldebaran-pass-venue-block">
                        <span className="aldebaran-venue-tag">LOKASI KEDIAMAN</span>
                        <span className="aldebaran-venue-name">{ev.venue}</span>
                        <p className="aldebaran-venue-address">{ev.address}</p>
                      </div>

                      <div className="aldebaran-pass-action-row">
                        {ev.mapsLink && (
                          <a href={ev.mapsLink} target="_blank" rel="noopener noreferrer" className="aldebaran-action-btn aldebaran-btn-maps">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                            Petunjuk Google Maps
                          </a>
                        )}
                        {ev.calendarLink && (
                          <a href={ev.calendarLink} target="_blank" rel="noopener noreferrer" className="aldebaran-action-btn aldebaran-btn-cal">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/></svg>
                            Simpan Kalender
                          </a>
                        )}
                      </div>
                    </article>
                  </AldebaranCard>
                ))}
              </div>

              {/* Countdown Component */}
              <AldebaranReveal delay={0.22}>
                <AldebaranCountdown targetDate={targetDate} />
              </AldebaranReveal>
            </div>
          </section>

          {/* ════════════════════════════════════════════════
              SECTION 5: INFAQ & SEDEKAH JARIYAH (100vh)
              ════════════════════════════════════════════════ */}
          {(digitalGifts.length > 0 || physicalAddress) && (
            <section id="gifts" className="aldebaran-section aldebaran-gifts-section">
              <AldebaranGirihWatermark size={420} opacity={0.035} />

              <div className="aldebaran-section-content">
                <AldebaranReveal delay={0.08}>
                  <div className="aldebaran-section-tag">✦ INFAQ &amp; AMAL JARIYAH ✦</div>
                  <WeddingGift
                    gifts={digitalGifts}
                    physicalAddress={physicalAddress}
                    title="Infaq &amp; Sedekah Jariyah"
                    subtitle="Doa tulus Anda adalah hadiah paling utama. Bagi jamaah yang hendak menyalurkan sedekah jariyah atas nama almarhum:"
                  />
                </AldebaranReveal>
              </div>
            </section>
          )}

          {/* ════════════════════════════════════════════════
              SECTION 6: BUKU DOA & KEHADIRAN JAMAAH (100vh)
              ════════════════════════════════════════════════ */}
          <section id="guestbook" className="aldebaran-section aldebaran-guestbook-section">
            <AldebaranGirihWatermark size={420} opacity={0.035} />

            <div className="aldebaran-section-content">
              <AldebaranReveal delay={0.08}>
                <div className="aldebaran-section-tag">✦ BUKU DOA &amp; KEHADIRAN ✦</div>
                <GuestBook
                  initialWishes={wishes}
                  storageKey="wishes_aldebaran"
                  title="Buku Doa &amp; Kehadiran Jamaah"
                  subtitle="Tuliskan munajat doa kebaikan dan konfirmasi kehadiran untuk majelis tahlil &amp; doa bersama."
                />
              </AldebaranReveal>
            </div>
          </section>

          {/* ════════════════════════════════════════════════
              SECTION 7: UNGKAPAN TERIMA KASIH & RSVP (100vh)
              ════════════════════════════════════════════════ */}
          <section id="closing" className="aldebaran-section aldebaran-closing-section">
            <AldebaranGirihWatermark size={400} opacity={0.035} />

            <div className="aldebaran-section-content">
              <AldebaranCrestMotion delay={0.08}>
                <AldebaranTasbihDivider />
              </AldebaranCrestMotion>

              <AldebaranReveal delay={0.18}>
                <div className="aldebaran-closing-cartouche">
                  <h3 className="aldebaran-closing-title">Ungkapan Terima Kasih</h3>
                  <p className="aldebaran-closing-lead">{closingMessage}</p>
                  <div className="aldebaran-closing-signature-block">
                    <span className="aldebaran-closing-salam">Wassalamu’alaikum Warahmatullahi Wabarakatuh</span>
                    <span className="aldebaran-closing-family">{hostFamily}</span>
                  </div>
                </div>
              </AldebaranReveal>

              {rsvpLink && (
                <AldebaranReveal delay={0.28}>
                  <div className="aldebaran-rsvp-wrap">
                    <a href={rsvpLink} target="_blank" rel="noopener noreferrer" className="aldebaran-btn-rsvp-primary">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      Konfirmasi Kehadiran Jamaah via WhatsApp
                    </a>
                  </div>
                </AldebaranReveal>
              )}

              <footer className="aldebaran-footer-credit">
                <span className="aldebaran-brand-text">{brandName}</span>
              </footer>
            </div>
          </section>

        </div>
      )}
    </div>
  )
}
