import { useState, useEffect } from 'react'
import { AldebaranReveal, AldebaranCard } from './AldebaranMotion'
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
    <div className="aldebaran-countdown">
      <span className="aldebaran-countdown-label">Menuju Pelaksanaan Majelis</span>
      <div className="aldebaran-countdown-digits">
        {[{val: time.d, unit: 'Hari'}, {val: time.h, unit: 'Jam'}, {val: time.m, unit: 'Menit'}, {val: time.s, unit: 'Detik'}].map((item) => (
          <div key={item.unit} className="aldebaran-digit-block">
            <span className="aldebaran-digit">{pad(item.val)}</span>
            <span className="aldebaran-digit-unit">{item.unit}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function MosqueDomeIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d="M24 6C24 6 14 16 14 26C14 31.5 18.5 36 24 36C29.5 36 34 31.5 34 26C34 16 24 6 24 6Z" stroke="#ffd56b" strokeWidth="2" fill="rgba(201,162,77,0.15)"/>
      <line x1="24" y1="2" x2="24" y2="7" stroke="#ffd56b" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="24" cy="3" r="1.5" fill="#ffd56b"/>
      <path d="M10 40H38" stroke="#c9a24d" strokeWidth="2" strokeLinecap="round"/>
      <rect x="18" y="28" width="12" height="12" rx="6" stroke="#ffd56b" strokeWidth="1.5" fill="none"/>
    </svg>
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
      }
    ],
    targetDate = '2026-11-05T19:30:00',
    digitalGifts = [],
    physicalAddress,
    wishes = [],
    closingMessage = 'Merupakan kehormatan dan kebahagiaan bagi kami sekeluarga apabila Bapak / Ibu / Saudara/i berkenan hadir untuk bersama-sama melantunkan doa bagi almarhum.',
    rsvpLink = 'https://wa.me/628123456789',
    guestName = 'Bapak / Ibu / Jamaah Terhormat',
    brandName = '✦ Undangan Digital · Tema Aldebaran Doa Bersama',
  } = data

  const [isCoverOpen, setIsCoverOpen] = useState(false)

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
      />

      {isCoverOpen && (
        <div className="invitation-reveal-enter">
          <div className="aldebaran-page">
            {/* ── Header ── */}
            <header className="aldebaran-header">
          <AldebaranReveal delay={0.05}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '14px' }}>
              <MosqueDomeIcon />
            </div>
            <span className="aldebaran-badge">Majelis Dzikir &amp; Doa Bersama</span>
            <h1 className="aldebaran-title">{eventTitle}</h1>
            <span className="aldebaran-honoree">{honoreeName}</span>
            <span className="aldebaran-honoree-sub">{eventSubtitle}</span>
            {hostFamily && (
              <p style={{ color: '#bcd0e8', fontSize: '13px', marginTop: '10px' }}>
                Hormat Kami: <strong>{hostFamily}</strong>
              </p>
            )}
          </AldebaranReveal>
        </header>

        <div className="aldebaran-body">
          {/* ── Bismillah ── */}
          <AldebaranReveal delay={0.1}>
            <div className="aldebaran-bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>
            <p style={{ textAlign: 'center', fontSize: '14px', color: '#bcd0e8', lineHeight: 1.7, marginBottom: '28px' }}>
              Assalamu’alaikum Warahmatullahi Wabarakatuh.<br />
              Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dalam majelis doa bersama:
            </p>
          </AldebaranReveal>

          {/* ── Ayat Suci Al-Qur'an ── */}
          {verse && (
            <AldebaranReveal delay={0.12}>
              <div className="aldebaran-verse-box">
                <p className="aldebaran-verse-arabic">{verse.arabic}</p>
                <p className="aldebaran-verse-trans">"{verse.translation}"</p>
                <span className="aldebaran-verse-ref">{verse.surah}</span>
              </div>
            </AldebaranReveal>
          )}

          {/* ── Agenda / Tertib Acara ── */}
          {agenda && agenda.length > 0 && (
            <AldebaranReveal delay={0.15}>
              <section className="aldebaran-agenda">
                <h2 className="aldebaran-agenda-title">Susunan Acara Majelis</h2>
                <span className="aldebaran-agenda-sub">Tertib Amaliyah &amp; Doa</span>
                <div className="aldebaran-agenda-list">
                  {agenda.map((item) => (
                    <div key={item.num} className="aldebaran-agenda-item">
                      <div className="aldebaran-agenda-num">{item.num}</div>
                      <div className="aldebaran-agenda-content">
                        <h3 className="aldebaran-agenda-name">{item.title}</h3>
                        <p className="aldebaran-agenda-desc">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </AldebaranReveal>
          )}

          {/* ── Events ── */}
          <div className="aldebaran-events">
            {events.map((ev, idx) => (
              <AldebaranCard key={ev.title} delay={idx * 0.12}>
                <article className="aldebaran-event-card">
                  <span className="aldebaran-event-tag">{ev.tag}</span>
                  <span className="aldebaran-event-name">{ev.title}</span>
                  <span className="aldebaran-event-date">{ev.date}</span>
                  <span className="aldebaran-event-time">{ev.time}</span>
                  <span className="aldebaran-event-venue">{ev.venue}</span>
                  <span className="aldebaran-event-address">{ev.address}</span>
                  <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '14px' }}>
                    {ev.mapsLink && (
                      <a href={ev.mapsLink} target="_blank" rel="noopener noreferrer" className="aldebaran-btn-maps">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        Lokasi Kediaman
                      </a>
                    )}
                    {ev.calendarLink && (
                      <a href={ev.calendarLink} target="_blank" rel="noopener noreferrer" className="aldebaran-btn-maps" style={{ background: '#c9a24d', color: '#05111e' }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/></svg>
                        Simpan Kalender
                      </a>
                    )}
                  </div>
                </article>
              </AldebaranCard>
            ))}
          </div>

          {/* ── Countdown ── */}
          <AldebaranReveal delay={0.1}>
            <AldebaranCountdown targetDate={targetDate} />
          </AldebaranReveal>

          {/* ── Infaq / Sedekah Barokah ── */}
          {(digitalGifts.length > 0 || physicalAddress) && (
            <AldebaranReveal delay={0.1}>
              <WeddingGift
                gifts={digitalGifts}
                physicalAddress={physicalAddress}
                title="Infaq &amp; Sedekah Jariyah"
                subtitle="Doa tulus Anda adalah hadiah paling utama. Bagi jamaah yang hendak menyalurkan sedekah jariyah atas nama almarhum:"
              />
            </AldebaranReveal>
          )}

          {/* ── Guest Book ── */}
          <AldebaranReveal delay={0.1}>
            <GuestBook
              initialWishes={wishes}
              storageKey="wishes_aldebaran"
              title="Buku Doa &amp; Kehadiran Jamaah"
              subtitle="Kirimkan doa kebaikan dan konfirmasi kehadiran untuk majelis tahlil &amp; doa bersama"
            />
          </AldebaranReveal>

          {/* ── Closing & RSVP ── */}
          <AldebaranReveal delay={0.1}>
            <div className="aldebaran-closing">
              <p>{closingMessage}</p>
            </div>
            {rsvpLink && (
              <div style={{ textAlign: 'center', marginTop: '22px' }}>
                <a href={rsvpLink} target="_blank" rel="noopener noreferrer" className="aldebaran-btn-rsvp">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  Konfirmasi Kehadiran Jamaah via WhatsApp
                </a>
              </div>
            )}
          </AldebaranReveal>
        </div>

        <footer className="aldebaran-footer">
          <span className="aldebaran-footer-brand">{brandName}</span>
        </footer>
      </div>
      </div>
    )}
    </div>
  )
}
