import { useState, useEffect } from 'react'
import { RigelReveal, RigelCard } from './RigelMotion'
import InvitationCover from '../../components/InvitationCover'
import WeddingGift from '../../components/WeddingGift'
import GuestBook from '../../components/GuestBook'
import './Rigel.css'

function RigelCountdown({ targetDate }) {
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
    <div className="rigel-countdown">
      <span className="rigel-countdown-label">Menuju Pesta Baby Shower</span>
      <div className="rigel-countdown-digits">
        {[{val: time.d, unit: 'Hari'}, {val: time.h, unit: 'Jam'}, {val: time.m, unit: 'Menit'}, {val: time.s, unit: 'Detik'}].map((item) => (
          <div key={item.unit} className="rigel-digit-block">
            <span className="rigel-digit">{pad(item.val)}</span>
            <span className="rigel-digit-unit">{item.unit}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function BabyStorkIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d="M12 28C12 22 17 17 23 17C29 17 34 22 34 28C34 34 29 39 23 39C17 39 12 34 12 28Z" fill="#fde8e0" stroke="#d95d39" strokeWidth="2"/>
      <path d="M23 17C23 12 27 8 32 8C35 8 37 10 38 13C38 16 35 19 32 19" stroke="#b84826" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="34" cy="11" r="1.5" fill="#2b2118"/>
      <path d="M38 12L44 14L38 16" fill="#c28424"/>
      <path d="M20 28Q23 33 26 28" stroke="#d95d39" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="18" cy="24" r="2" fill="#d95d39"/>
    </svg>
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
        name: 'Fun Baby Games & Tebak Gender',
        desc: 'Permainan seru tebak tanggal lahir, nama bayi, dan doorprize menarik.',
      },
      {
        icon: '✨',
        name: 'Doa Kasih & Restu Ibu Hamil',
        desc: 'Untaian doa bersama untuk kesehatan, kelancaran persalinan, dan keselamatan.',
      },
      {
        icon: '🧁',
        name: 'Afternoon Tea & Pastry Bar',
        desc: 'Menikmati hidangan teh sore yang manis, dessert hangat, dan mocktail segar.',
      }
    ],
    events = [
      {
        tag: '✦ Perayaan Intim',
        title: 'Baby Shower & Afternoon Tea Gathering',
        date: 'Minggu, 18 Oktober 2026',
        time: '14.00 — 17.00 WIB',
        venue: 'Le Petit Glasshouse & Bistro',
        address: 'Jl. Riau No. 54, Citarum, Kota Bandung',
        mapsLink: 'https://maps.google.com',
        calendarLink: 'https://calendar.google.com',
      }
    ],
    targetDate = '2026-10-18T14:00:00',
    digitalGifts = [],
    physicalAddress,
    wishes = [],
    closingMessage = 'Kehadiran, tawa ceria, dan doa tulus dari sahabat serta keluarga tersayang adalah kado terindah yang sangat kami nantikan.',
    rsvpLink = 'https://wa.me/628123456789',
    guestName = 'Sahabat Tersayang',
    brandName = '✦ Undangan Digital · Tema Rigel Baby Shower',
  } = data

  const [isCoverOpen, setIsCoverOpen] = useState(false)

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
      />

      {isCoverOpen && (
        <div className="invitation-reveal-enter">
          <div className="rigel-page">
            {/* ── Header ── */}
            <header className="rigel-header">
          <RigelReveal delay={0.05}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
              <BabyStorkIcon />
            </div>
            <span className="rigel-badge">Baby Shower &amp; Gathering</span>
            <h1 className="rigel-title">Celebrating Baby on the Way</h1>
            <span className="rigel-parents-names">{momName} &amp; {dadName}</span>
            <span className="rigel-arrival-tag">{expectedSeason}</span>
          </RigelReveal>
        </header>

        <div className="rigel-body">
          {/* ── Quote ── */}
          {quote && (
            <RigelReveal delay={0.1}>
              <div className="rigel-quote-box">
                <p className="rigel-quote-text">"{quote}"</p>
                {quoteAuthor && <span className="rigel-quote-author">— {quoteAuthor}</span>}
              </div>
            </RigelReveal>
          )}

          {/* ── Activities / Fun Agenda ── */}
          {activities && activities.length > 0 && (
            <RigelReveal delay={0.15}>
              <section className="rigel-activities">
                <h2 className="rigel-activities-title">Momen Manis Pesta</h2>
                <span className="rigel-activities-sub">Serunya Kebersamaan &amp; Sukacita</span>
                <div className="rigel-activities-grid">
                  {activities.map((act) => (
                    <div key={act.name} className="rigel-activity-card">
                      <span className="rigel-activity-icon">{act.icon}</span>
                      <h3 className="rigel-activity-name">{act.name}</h3>
                      <p className="rigel-activity-desc">{act.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            </RigelReveal>
          )}

          {/* ── Events ── */}
          <div className="rigel-events">
            {events.map((ev, idx) => (
              <RigelCard key={ev.title} delay={idx * 0.12}>
                <article className="rigel-event-card">
                  <span className="rigel-event-tag">{ev.tag}</span>
                  <span className="rigel-event-name">{ev.title}</span>
                  <span className="rigel-event-date">{ev.date}</span>
                  <span className="rigel-event-time">{ev.time}</span>
                  <span className="rigel-event-venue">{ev.venue}</span>
                  <span className="rigel-event-address">{ev.address}</span>
                  <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '14px' }}>
                    {ev.mapsLink && (
                      <a href={ev.mapsLink} target="_blank" rel="noopener noreferrer" className="rigel-btn-maps">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        Petunjuk Lokasi
                      </a>
                    )}
                    {ev.calendarLink && (
                      <a href={ev.calendarLink} target="_blank" rel="noopener noreferrer" className="rigel-btn-maps" style={{ background: '#d95d39', color: '#ffffff' }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/></svg>
                        Simpan Kalender
                      </a>
                    )}
                  </div>
                </article>
              </RigelCard>
            ))}
          </div>

          {/* ── Countdown ── */}
          <RigelReveal delay={0.1}>
            <RigelCountdown targetDate={targetDate} />
          </RigelReveal>

          {/* ── Baby Registry / Kado Kasih ── */}
          {(digitalGifts.length > 0 || physicalAddress) && (
            <RigelReveal delay={0.1}>
              <WeddingGift
                gifts={digitalGifts}
                physicalAddress={physicalAddress}
                title="Kado Kasih untuk Si Kecil"
                subtitle="Doa restu dan kasih sayang Anda adalah kado paling istimewa. Bagi yang hendak menitipkan tanda kasih perlengkapan bayi:"
              />
            </RigelReveal>
          )}

          {/* ── Guest Book ── */}
          <RigelReveal delay={0.1}>
            <GuestBook
              initialWishes={wishes}
              storageKey="wishes_rigel"
              title="Buku Doa &amp; Harapan Hangat"
              subtitle="Tuliskan pesan cinta dan doa tulus untuk sang ibu dan calon buah hati tersayang"
            />
          </RigelReveal>

          {/* ── Closing & RSVP ── */}
          <RigelReveal delay={0.1}>
            <div className="rigel-closing">
              <p>{closingMessage}</p>
            </div>
            {rsvpLink && (
              <div style={{ textAlign: 'center', marginTop: '22px' }}>
                <a href={rsvpLink} target="_blank" rel="noopener noreferrer" className="rigel-btn-rsvp">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  Konfirmasi Kehadiran via WhatsApp
                </a>
              </div>
            )}
          </RigelReveal>
        </div>

        <footer className="rigel-footer">
          <span className="rigel-footer-brand">{brandName}</span>
        </footer>
      </div>
      </div>
    )}
    </div>
  )
}
