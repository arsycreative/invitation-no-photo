import { useState, useEffect } from 'react'
import { AntaresReveal, AntaresCard } from './AntaresMotion'
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
    <div className="antares-countdown">
      <span className="antares-countdown-label">Menuju Hari Peringatan Kasih</span>
      <div className="antares-countdown-digits">
        {[{val: time.d, unit: 'Hari'}, {val: time.h, unit: 'Jam'}, {val: time.m, unit: 'Menit'}, {val: time.s, unit: 'Detik'}].map((item) => (
          <div key={item.unit} className="antares-digit-block">
            <span className="antares-digit">{pad(item.val)}</span>
            <span className="antares-digit-unit">{item.unit}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function WineGlassesIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
      <path d="M16 8L16 22C16 26.4 19.6 30 24 30C28.4 30 32 26.4 32 22L32 8" stroke="#d88c9d" strokeWidth="2" strokeLinecap="round"/>
      <line x1="24" y1="30" x2="24" y2="40" stroke="#d88c9d" strokeWidth="2" strokeLinecap="round"/>
      <line x1="16" y1="40" x2="32" y2="40" stroke="#d88c9d" strokeWidth="2" strokeLinecap="round"/>
      <path d="M18 16Q24 19 30 16" stroke="#f7e8ec" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
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
      }
    ],
    targetDate = '2026-12-19T16:00:00',
    digitalGifts = [],
    physicalAddress,
    wishes = [],
    closingMessage = 'Merupakan kehormatan dan kebahagiaan tak terhingga bagi kami sekeluarga apabila Bapak / Ibu / Sahabat berkenan hadir dan berbagi kebahagiaan dalam malam peringatan penuh syukur ini.',
    rsvpLink = 'https://wa.me/628123456789',
    guestName = 'Tamu Terhormat',
    brandName = '✦ Undangan Digital · Tema Antares Anniversary',
  } = data

  const [isCoverOpen, setIsCoverOpen] = useState(false)

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
      />

      {isCoverOpen && (
        <div className="invitation-reveal-enter">
          <div className="antares-page">
            {/* ── Header ── */}
            <header className="antares-header">
          <AntaresReveal delay={0.05}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
              <WineGlassesIcon />
            </div>
            <span className="antares-years-badge">{anniversaryYear} · {anniversarySubtitle}</span>
            <h1 className="antares-title">Peringatan Ulang Tahun Pernikahan</h1>
            <span className="antares-couple-names">{coupleNames}</span>
            <p style={{ color: '#e2cbd2', fontSize: '13px', margin: '4px 0 0 0' }}>
              {husbandFullName} &amp; {wifeFullName}
            </p>
          </AntaresReveal>
        </header>

        <div className="antares-body">
          {/* ── Quote ── */}
          {quote && (
            <AntaresReveal delay={0.1}>
              <div className="antares-quote-box">
                <p className="antares-quote-text">"{quote}"</p>
                {quoteAuthor && <span className="antares-quote-author">— {quoteAuthor}</span>}
              </div>
            </AntaresReveal>
          )}

          {/* ── Milestones of Love ── */}
          {milestones && milestones.length > 0 && (
            <AntaresReveal delay={0.15}>
              <section className="antares-milestones">
                <h2 className="antares-milestones-title">Kilas Balik 25 Tahun Perjalanan</h2>
                <span className="antares-milestones-subtitle">Perjalanan Kasih &amp; Kesetiaan</span>
                <div className="antares-timeline-list">
                  {milestones.map((item) => (
                    <div key={item.year} className="antares-timeline-item">
                      <span className="antares-timeline-year">{item.year}</span>
                      <h3 className="antares-timeline-heading">{item.title}</h3>
                      <p className="antares-timeline-text">{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            </AntaresReveal>
          )}

          {/* ── Events ── */}
          <div className="antares-events">
            {events.map((ev, idx) => (
              <AntaresCard key={ev.title} delay={idx * 0.12}>
                <article className="antares-event-card">
                  <span className="antares-event-tag">{ev.tag}</span>
                  <span className="antares-event-name">{ev.title}</span>
                  <span className="antares-event-date">{ev.date}</span>
                  <span className="antares-event-time">{ev.time}</span>
                  <span className="antares-event-venue">{ev.venue}</span>
                  <span className="antares-event-address">{ev.address}</span>
                  <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '12px' }}>
                    {ev.mapsLink && (
                      <a href={ev.mapsLink} target="_blank" rel="noopener noreferrer" className="antares-btn-maps">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        Petunjuk Arah
                      </a>
                    )}
                    {ev.calendarLink && (
                      <a href={ev.calendarLink} target="_blank" rel="noopener noreferrer" className="antares-btn-maps" style={{ background: '#d88c9d', color: '#19030c' }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/></svg>
                        Simpan Kalender
                      </a>
                    )}
                  </div>
                </article>
              </AntaresCard>
            ))}
          </div>

          {/* ── Countdown ── */}
          <AntaresReveal delay={0.1}>
            <AntaresCountdown targetDate={targetDate} />
          </AntaresReveal>

          {/* ── Digital Gift ── */}
          {(digitalGifts.length > 0 || physicalAddress) && (
            <AntaresReveal delay={0.1}>
              <WeddingGift
                gifts={digitalGifts}
                physicalAddress={physicalAddress}
                title="Tanda Kasih &amp; Doa Syukur"
                subtitle="Kehadiran dan doa tulus Anda adalah hadiah terindah bagi perjalanan cinta kami berdua. Jika ingin mengirimkan tanda kasih:"
              />
            </AntaresReveal>
          )}

          {/* ── Guest Book ── */}
          <AntaresReveal delay={0.1}>
            <GuestBook
              initialWishes={wishes}
              storageKey="wishes_antares"
              title="Buku Doa &amp; Ucapan Selamat"
              subtitle="Untaian kata dan doa restu sahabat serta keluarga tercinta untuk keabadian cinta kami"
            />
          </AntaresReveal>

          {/* ── Closing & RSVP ── */}
          <AntaresReveal delay={0.1}>
            <div className="antares-closing">
              <p>{closingMessage}</p>
            </div>
            {rsvpLink && (
              <div style={{ textAlign: 'center', marginTop: '22px' }}>
                <a href={rsvpLink} target="_blank" rel="noopener noreferrer" className="antares-btn-rsvp">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  Konfirmasi Kehadiran via WhatsApp
                </a>
              </div>
            )}
          </AntaresReveal>
        </div>

        <footer className="antares-footer">
          <span className="antares-footer-brand">{brandName}</span>
        </footer>
      </div>
      </div>
    )}
    </div>
  )
}
