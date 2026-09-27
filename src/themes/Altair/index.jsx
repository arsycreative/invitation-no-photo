import { useEffect, useState } from 'react'
import {
  AltairMaskReveal,
  AltairRazorLine,
  AltairArchitecturalCard,
} from './AltairMotion'
import InvitationCover from '../../components/InvitationCover'
import LoveStory from '../../components/LoveStory'
import WeddingGift from '../../components/WeddingGift'
import GuestBook from '../../components/GuestBook'
import './Altair.css'

function AltairCountdown({ targetDate }) {
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
    <div className="altair-countdown">
      <span className="altair-countdown-label">// T-MINUS COUNTDOWN //</span>
      <div className="altair-countdown-digits">
        {[{val: time.d, unit: 'DAYS'}, {val: time.h, unit: 'HOURS'}, {val: time.m, unit: 'MIN'}, {val: time.s, unit: 'SEC'}].map(item => (
          <div key={item.unit} className="altair-digit-block">
            <span className="altair-digit">{pad(item.val)}</span>
            <span className="altair-digit-unit">{item.unit}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Altair({ data = {} }) {
  const {
    groomName = 'Daffa',
    groomFullName = 'Daffa Ramadhani, S.Kom.',
    groomParents = 'Bapak Ir. Hendra Wijaya & Ibu Ir. Yuni Astuti',
    brideName = 'Nadia',
    brideFullName = 'Nadia Maharani, S.Ds.',
    brideParents = 'Bapak Dr. Rendra Surya & Ibu Dr. Laila Nurul',
    holyVerse,
    akad = {},
    resepsi = {},
    loveStory = [],
    digitalGifts = [],
    physicalAddress,
    wishes = [],
    closingMessage = 'Kehadiran dan doa restu Anda adalah hadiah terindah untuk kami.',
    rsvpLink = 'https://wa.me/628123456789',
    brandName = 'ALTAIR EDITORIAL WEDDING // VOL. 2026',
    guestName = 'Tamu Undangan',
  } = data

  const [isCoverOpen, setIsCoverOpen] = useState(false)

  return (
    <div className="altair-root">
      {/* ── Opening Cover ── */}
      <InvitationCover
        isOpen={isCoverOpen}
        onOpen={() => setIsCoverOpen(true)}
        onClose={() => setIsCoverOpen(false)}
        theme="altair"
        type="wedding"
        title="VOL. 2026 // PRIVATE INVITATION"
        coupleOrKidName={`${groomName} & ${brideName}`}
        date={resepsi.date || akad.date || '5 Juli 2026'}
        guestName={guestName}
      />

      {isCoverOpen && (
        <div className="invitation-reveal-enter">
          <div className="altair-page">
        {/* ── Top Masthead ── */}
        <AltairMaskReveal delay={0.15} distance={-16}>
          <div className="altair-masthead">
            <span>ALTAIR ARCHIVE NO. 26</span>
            <span>SPECIAL ISSUE // PRIVATE UNION</span>
          </div>
        </AltairMaskReveal>

        {/* ── Asymmetrical Editorial Hero ── */}
        <AltairMaskReveal delay={0.25} distance={20}>
          <section className="altair-hero-split">
            <div className="altair-hero-date-col">
              <span className="altair-hero-big-day">05</span>
              <span className="altair-hero-month-year">JUL // 2026</span>
            </div>
            <div className="altair-hero-title-col">
              <span className="altair-issue-tag">✦ THE SACRED COMMITMENT</span>
              <h1 className="altair-couple-headline">{groomName} &amp; {brideName}</h1>
              <p className="altair-sub-statement">
                Sebuah perayaan komitmen suci dua insan dalam balutan kesederhanaan, ketulusan cinta, dan doa restu.
              </p>
            </div>
          </section>
        </AltairMaskReveal>

        {/* ── Marquee Ticker ── */}
        <AltairMaskReveal delay={0.35}>
          <div className="altair-ticker-strip">
            <span>
              DAFFA RAMADHANI &amp; NADIA MAHARANI ✦ THE OFFICIAL WEDDING CELEBRATION ✦ JAKARTA, 5 JULI 2026 ✦ DAFFA RAMADHANI &amp; NADIA MAHARANI ✦
            </span>
          </div>
        </AltairMaskReveal>

        <div className="altair-body">
          {/* ── Split Couple Profile Columns ── */}
          <section className="altair-couple-split">
            <AltairArchitecturalCard index={0} delay={0.4}>
              <div className="altair-person-card">
                <span className="altair-person-role">01 // THE GROOM</span>
                <h2 className="altair-person-name">{groomName}</h2>
                <span className="altair-person-full">{groomFullName}</span>
                <p className="altair-person-parents">
                  Putra dari:<br /><strong>{groomParents}</strong>
                </p>
              </div>
            </AltairArchitecturalCard>

            <AltairArchitecturalCard index={1} delay={0.5}>
              <div className="altair-person-card">
                <span className="altair-person-role">02 // THE BRIDE</span>
                <h2 className="altair-person-name">{brideName}</h2>
                <span className="altair-person-full">{brideFullName}</span>
                <p className="altair-person-parents">
                  Putri dari:<br /><strong>{brideParents}</strong>
                </p>
              </div>
            </AltairArchitecturalCard>
          </section>

          {/* ── Holy Verse ── */}
          {holyVerse && (
            <AltairMaskReveal delay={0.2}>
              <div className="altair-quote-block">
                {holyVerse.arabic && <p className="altair-quote-arabic">{holyVerse.arabic}</p>}
                <p className="altair-quote-trans">"{holyVerse.translation}"</p>
                {holyVerse.ref && <span className="altair-quote-ref">// {holyVerse.ref}</span>}
              </div>
            </AltairMaskReveal>
          )}

          {/* ── Tabular Events Schedule ── */}
          <section>
            <AltairMaskReveal delay={0.15}>
              <h3 className="altair-schedule-title">ITINERARY &amp; VENUES</h3>
            </AltairMaskReveal>
            <div className="altair-events-grid">
              {akad && (
                <AltairArchitecturalCard index={0} delay={0.2}>
                  <div className="altair-event-box">
                    <span className="altair-event-tag">SESSION 01 // {akad.name || 'AKAD NIKAH'}</span>
                    <h4 className="altair-event-name">{akad.day}, {akad.date}</h4>
                    <span className="altair-event-time">{akad.time}</span>
                    <span className="altair-event-venue">{akad.venue}</span>
                    <p className="altair-event-address">{akad.address}</p>
                    <div className="altair-event-actions">
                      {akad.mapsLink && (
                        <a href={akad.mapsLink} target="_blank" rel="noopener noreferrer" className="altair-btn-minimal">
                          MAPS ↗
                        </a>
                      )}
                      {akad.calendarLink && (
                        <a href={akad.calendarLink} target="_blank" rel="noopener noreferrer" className="altair-btn-minimal" style={{ background: '#09090b', color: '#ffffff' }}>
                          CALENDAR +
                        </a>
                      )}
                    </div>
                  </div>
                </AltairArchitecturalCard>
              )}

              {resepsi && (
                <AltairArchitecturalCard index={1} delay={0.3}>
                  <div className="altair-event-box">
                    <span className="altair-event-tag">SESSION 02 // {resepsi.name || 'RESEPSI'}</span>
                    <h4 className="altair-event-name">{resepsi.day}, {resepsi.date}</h4>
                    <span className="altair-event-time">{resepsi.time}</span>
                    <span className="altair-event-venue">{resepsi.venue}</span>
                    <p className="altair-event-address">{resepsi.address}</p>
                    <div className="altair-event-actions">
                      {resepsi.mapsLink && (
                        <a href={resepsi.mapsLink} target="_blank" rel="noopener noreferrer" className="altair-btn-minimal">
                          MAPS ↗
                        </a>
                      )}
                      {resepsi.calendarLink && (
                        <a href={resepsi.calendarLink} target="_blank" rel="noopener noreferrer" className="altair-btn-minimal" style={{ background: '#09090b', color: '#ffffff' }}>
                          CALENDAR +
                        </a>
                      )}
                    </div>
                  </div>
                </AltairArchitecturalCard>
              )}
            </div>
          </section>

          {/* ── Monospace Countdown ── */}
          <AltairMaskReveal delay={0.25}>
            <AltairCountdown targetDate={akad?.isoDate || resepsi?.isoDate || '2026-12-05T09:00:00'} />
          </AltairMaskReveal>

          {/* ── Love Story ── */}
          {loveStory && loveStory.length > 0 && (
            <AltairMaskReveal delay={0.2}>
              <LoveStory story={loveStory} theme="altair" />
            </AltairMaskReveal>
          )}

          {/* ── Digital Gift ── */}
          {(digitalGifts?.length > 0 || physicalAddress) && (
            <AltairMaskReveal delay={0.2}>
              <WeddingGift
                gifts={digitalGifts}
                physicalAddress={physicalAddress}
                title="WEDDING GIFT &amp; REGISTRY"
                subtitle="Doa restu Anda merupakan karunia terindah bagi kami berdua. Jika ingin mengirimkan tanda kasih:"
              />
            </AltairMaskReveal>
          )}

          {/* ── Guest Book ── */}
          <AltairMaskReveal delay={0.2}>
            <GuestBook
              initialWishes={wishes}
              storageKey="wishes_altair"
              title="GUESTBOOK // WISHES"
              subtitle="Tinggalkan pesan cinta, selamat, dan doa baik Anda untuk kami berdua"
            />
          </AltairMaskReveal>

          {/* ── Closing & RSVP ── */}
          <AltairMaskReveal delay={0.2}>
            <div className="altair-closing">
              <p>{closingMessage}</p>
              {rsvpLink && (
                <div style={{ marginTop: '20px' }}>
                  <a href={rsvpLink} target="_blank" rel="noopener noreferrer" className="altair-btn-rsvp">
                    CONFIRM RSVP VIA WHATSAPP ➔
                  </a>
                </div>
              )}
            </div>
          </AltairMaskReveal>
        </div>

        <footer className="altair-footer">
          <span>{brandName}</span>
        </footer>
      </div>
      </div>
    )}
    </div>
  )
}
