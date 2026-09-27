import { useState, useEffect } from 'react'
import { SpicaReveal, SpicaCard } from './SpicaMotion'
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
    <div className="spica-countdown">
      <span className="spica-countdown-label">Menuju Hari Pertunangan</span>
      <div className="spica-countdown-digits">
        {[{val: time.d, unit: 'Hari'}, {val: time.h, unit: 'Jam'}, {val: time.m, unit: 'Menit'}, {val: time.s, unit: 'Detik'}].map((item) => (
          <div key={item.unit} className="spica-digit-block">
            <span className="spica-digit">{pad(item.val)}</span>
            <span className="spica-digit-unit">{item.unit}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function EngagementRings() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <circle cx="20" cy="24" r="12" stroke="#ea580c" strokeWidth="2.5" fill="none"/>
      <circle cx="28" cy="24" r="12" stroke="#c2410c" strokeWidth="2.5" fill="none"/>
      <polygon points="20,10 23,14 17,14" fill="#fb923c"/>
    </svg>
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
      }
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
  } = data

  const [isCoverOpen, setIsCoverOpen] = useState(false)

  return (
    <div className="spica-root">
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
      />

      {isCoverOpen && (
        <div className="invitation-reveal-enter">
          <div className="spica-page">
            {/* ── Header ── */}
            <header className="spica-header">
          <SpicaReveal delay={0.1}>
            <span className="spica-tag">The Engagement Ceremony</span>
            <h1 className="spica-title">Pertunangan &amp; Lamaran</h1>
            <div className="spica-rings-icon"><EngagementRings /></div>
          </SpicaReveal>
        </header>

        <div className="spica-body">
          {/* ── Quote ── */}
          {quote && (
            <SpicaReveal delay={0.15}>
              <div className="holy-verse-box" style={{ background: '#fff7ed', borderColor: 'rgba(234,88,12,0.25)' }}>
                <p className="holy-verse-trans" style={{ color: '#431407', fontSize: '13.5px' }}>"{quote}"</p>
                <span className="holy-verse-ref" style={{ color: '#c2410c' }}>— Farhan &amp; Clarissa</span>
              </div>
            </SpicaReveal>
          )}

          {/* ── Greeting ── */}
          <SpicaReveal delay={0.1}>
            <div className="spica-closing" style={{ marginBottom: '24px' }}>
              <p>Dengan penuh rasa syukur dan kebahagiaan, kami mengundang kehadiran Bapak / Ibu / Saudara/i pada acara lamaran kami:</p>
            </div>
          </SpicaReveal>

          {/* ── Dual Interlocking Mediterranean Arch Cards ── */}
          <SpicaReveal delay={0.15}>
            <div className="spica-arches-container">
              <div className="spica-arch-card spica-arch-groom">
                <span className="spica-arch-role">THE GROOM</span>
                <span className="spica-person-name">{groomName}</span>
                <span className="spica-person-full">{groomFullName}</span>
                <span className="spica-person-parents">Putra dari:<br/>{groomParents}</span>
              </div>
              <div className="spica-arch-connector">
                <div className="spica-arch-ring">💍</div>
              </div>
              <div className="spica-arch-card spica-arch-bride">
                <span className="spica-arch-role">THE BRIDE</span>
                <span className="spica-person-name">{brideName}</span>
                <span className="spica-person-full">{brideFullName}</span>
                <span className="spica-person-parents">Putri dari:<br/>{brideParents}</span>
              </div>
            </div>
          </SpicaReveal>

          {/* ── Events ── */}
          <div className="spica-events">
            {events.map((ev, idx) => (
              <SpicaCard key={ev.title} delay={idx * 0.12}>
                <article className="spica-event-card">
                  <span className="spica-event-tag">{ev.tag}</span>
                  <span className="spica-event-name">{ev.title}</span>
                  <span className="spica-event-date">{ev.date}</span>
                  <span className="spica-event-time">{ev.time}</span>
                  <span className="spica-event-venue">{ev.venue}</span>
                  <span className="spica-event-address">{ev.address}</span>
                  <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '12px' }}>
                    {ev.mapsLink && (
                      <a href={ev.mapsLink} target="_blank" rel="noopener noreferrer" className="spica-btn-maps">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        Lihat Lokasi
                      </a>
                    )}
                    {ev.calendarLink && (
                      <a href={ev.calendarLink} target="_blank" rel="noopener noreferrer" className="spica-btn-maps" style={{ background: 'var(--terracotta)', color: '#ffffff' }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/></svg>
                        Simpan Kalender
                      </a>
                    )}
                  </div>
                </article>
              </SpicaCard>
            ))}
          </div>

          {/* ── Countdown ── */}
          <SpicaReveal delay={0.1}>
            <SpicaCountdown targetDate={targetDate} />
          </SpicaReveal>

          {/* ── Love Story ── */}
          {loveStory.length > 0 && (
            <SpicaReveal delay={0.1}>
              <LoveStory
                stories={loveStory}
                title="Our Journey Together"
                subtitle="Untaian langkah dan kenangan indah yang mengantarkan kami menuju gerbang lamaran suci"
              />
            </SpicaReveal>
          )}

          {/* ── Digital Gift ── */}
          {(digitalGifts.length > 0 || physicalAddress) && (
            <SpicaReveal delay={0.1}>
              <WeddingGift
                gifts={digitalGifts}
                physicalAddress={physicalAddress}
                title="Tanda Kasih &amp; Kado Pertunangan"
                subtitle="Kehadiran dan doa restu Anda adalah anugerah terbesar bagi kami. Apabila hendak memberikan tanda kasih, dapat melalui:"
              />
            </SpicaReveal>
          )}

          {/* ── Guest Book ── */}
          <SpicaReveal delay={0.1}>
            <GuestBook
              initialWishes={wishes}
              storageKey="wishes_spica"
              title="Ucapan &amp; Doa Restu"
              subtitle="Tuliskan harapan dan doa terbaik Anda bagi kelancaran ikatan suci kami hingga hari pernikahan"
            />
          </SpicaReveal>

          {/* ── Closing & RSVP ── */}
          <SpicaReveal delay={0.1}>
            <div className="spica-closing">
              <p>{closingMessage}</p>
            </div>
            {rsvpLink && (
              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <a href={rsvpLink} target="_blank" rel="noopener noreferrer" className="spica-btn-rsvp">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  Konfirmasi Kehadiran via WhatsApp
                </a>
              </div>
            )}
          </SpicaReveal>
        </div>

        <footer className="spica-footer">
          <span className="spica-footer-brand">{brandName}</span>
        </footer>
      </div>
      </div>
    )}
    </div>
  )
}
