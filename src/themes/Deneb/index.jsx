import { useState, useEffect } from 'react'
import confetti from 'canvas-confetti'
import {
  DenebJellyDrop,
  DenebBubblePop,
  DenebWobbleBalloon,
  DenebPartyStreamer,
  DenebSquishyCard,
} from './DenebMotion'
import { PastelPartyLeft, PastelPartyRight } from '../../components/Ornaments'
import InvitationCover from '../../components/InvitationCover'
import EventRundown from '../../components/EventRundown'
import WeddingGift from '../../components/WeddingGift'
import GuestBook from '../../components/GuestBook'
import './Deneb.css'

function ConfettiRain() {
  const COLORS = ['#ff6584', '#45aaf2', '#20bf6b', '#fed330', '#a55eea', '#fd9644']
  const pieces = Array.from({ length: 24 }, (_, i) => ({
    id: i, left: `${(i / 24) * 100 + Math.random() * 4}%`, color: COLORS[i % COLORS.length],
    duration: `${Math.random() * 5 + 7}s`, delay: `${Math.random() * 6}s`,
    size: `${Math.random() * 8 + 6}px`, shape: i % 3 === 0 ? '50%' : i % 3 === 1 ? '4px' : '0',
  }))
  return <>{pieces.map(p => <div key={p.id} className="deneb-confetti-piece" style={{ left: p.left, background: p.color, animationDuration: p.duration, animationDelay: p.delay, width: p.size, height: p.size, borderRadius: p.shape }}/>)}</>
}

function DenebCountdown({ targetDate }) {
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
    <div className="deneb-countdown-pass">
      <div className="deneb-pass-header">
        <span className="deneb-pass-badge">★ ADMISSION PASS ★</span>
        <span className="deneb-pass-title">HITUNG MUNDUR HARI PESTA</span>
      </div>
      <div className="deneb-tokens-grid">
        {[
          { val: time.d, unit: 'HARI', color: '#ff6584' },
          { val: time.h, unit: 'JAM', color: '#45aaf2' },
          { val: time.m, unit: 'MENIT', color: '#20bf6b' },
          { val: time.s, unit: 'DETIK', color: '#a55eea' },
        ].map((item) => (
          <div key={item.unit} className="deneb-token-card" style={{ '--token-accent': item.color }}>
            <span className="deneb-token-val">{pad(item.val)}</span>
            <span className="deneb-token-unit">{item.unit}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Deneb({ data = {} }) {
  const {
    kidName = 'Zahra',
    age = 7,
    day = 'Minggu',
    date = '20 April 2026',
    time = '13.00 — 16.00 WIB',
    isoDate = '2026-12-20T13:00:00',
    venue = 'Rumah Zahra Sayang',
    address = 'Jl. Bunga Mawar No. 5, Sukasari, Kota Bandung, Jawa Barat',
    mapsLink = 'https://maps.google.com',
    calendarLink,
    dressCode = 'Warna Pastel Ceria',
    hostParents = 'Bapak & Ibu Dian Kusuma',
    rsvpLink = 'https://wa.me/628123456789',
    rsvpDeadline = 'Kamis, 17 April 2026',
    message,
    rundown = [],
    digitalGifts = [],
    physicalAddress,
    wishes = [],
    brandName,
    guestName = 'Tamu Undangan',
  } = data

  const [isCoverOpen, setIsCoverOpen] = useState(false)

  const handleOpenCover = () => {
    setIsCoverOpen(true)
    confetti({
      particleCount: 140,
      spread: 100,
      origin: { x: 0.5, y: 0.4 },
      colors: ['#ff6584', '#45aaf2', '#20bf6b', '#fed330', '#a55eea'],
    })
  }

  return (
    <div className="deneb-root">
      {/* ── Opening Cover ── */}
      <InvitationCover
        isOpen={isCoverOpen}
        onOpen={handleOpenCover}
        onClose={() => setIsCoverOpen(false)}
        theme="deneb"
        type="birthday-girl"
        title="Pesta Ulang Tahun"
        coupleOrKidName={kidName}
        date={`${day}, ${date}`}
        guestName={guestName}
      />

      {isCoverOpen && (
        <div className="invitation-reveal-enter">
          <ConfettiRain />

          <div className="deneb-page">
            <div className="deneb-rainbow-bar"/>

        {/* ── Hero (Bouncy Jelly Drop) ── */}
        <DenebJellyDrop delay={0.15}>
          <header className="deneb-hero">
            <div className="deneb-balloon-row">
              {['🩷','💜','🩵','💛','🩷'].map((b,i) => (
                <DenebWobbleBalloon key={i} index={i} className="deneb-balloon">
                  {b}
                </DenebWobbleBalloon>
              ))}
            </div>
            <span className="deneb-invite-label">Yuk, Dateng ke Pesta!</span>
            <span className="deneb-kid-name">{kidName}</span>
            <div className="deneb-age-wrap">
              <span className="deneb-age-turns">merayakan ulang tahun yang ke-</span>
              <div className="deneb-age-bubble"><span className="deneb-age-num">{age}</span></div>
            </div>
          </header>
        </DenebJellyDrop>

        <div className="deneb-body">

          {/* ── Intro with party ribbons ── */}
          <div className="deneb-ornament-section" style={{ position: 'relative' }}>
            <DenebPartyStreamer side="left" delay={0.1}
              style={{ left: '-45px', top: '-10px' }}>
              <PastelPartyLeft size={65} />
            </DenebPartyStreamer>
            <DenebPartyStreamer side="right" delay={0.2}
              style={{ right: '-45px', top: '-10px' }}>
              <PastelPartyRight size={65} />
            </DenebPartyStreamer>

            <DenebJellyDrop delay={0.1}>
              <div className="deneb-intro">
                <p>{message || `Hii teman-teman tersayang! 🎀\n\nZahra mengundang kamu ke pesta ulang tahunnya yang ke-${age}!\n\nAda kue lapis pelangi, balon cantik, cupcake manis, dan banyak kejutan seru menanti kamu! 🌈🎂`}</p>
              </div>
            </DenebJellyDrop>
          </div>

          {/* ── Event Info: Carnival VIP Admission Ticket ── */}
          <div className="deneb-ornament-section" style={{ position: 'relative' }}>
            <DenebPartyStreamer side="left" delay={0}
              style={{ left: '-45px', top: '30px' }}>
              <PastelPartyLeft size={75} />
            </DenebPartyStreamer>
            <DenebPartyStreamer side="right" delay={0.1}
              style={{ right: '-45px', top: '30px' }}>
              <PastelPartyRight size={75} />
            </DenebPartyStreamer>

            <DenebBubblePop delay={0.1}>
              <div className="deneb-ticket-wrapper">
                <article className="deneb-carnival-ticket">
                  <div className="deneb-ticket-stub">
                    <div className="deneb-stub-top">
                      <span className="deneb-stub-admit">ADMIT ONE</span>
                      <span className="deneb-stub-star">★ VIP PASS ★</span>
                      <span className="deneb-stub-code">NO. 2026-BDAY</span>
                    </div>
                    <div className="deneb-ticket-barcode">
                      <div className="deneb-barcode-bars" />
                      <span className="deneb-barcode-text">BDAY-{age}-YEARS</span>
                    </div>
                  </div>

                  <div className="deneb-ticket-divider">
                    <div className="deneb-punch punch-top" />
                    <div className="deneb-perforation" />
                    <div className="deneb-punch punch-bottom" />
                  </div>

                  <div className="deneb-ticket-main">
                    <div className="deneb-ticket-title-row">
                      <span className="deneb-ticket-tag">🎪 THE GRAND BIRTHDAY PARTY</span>
                      <h2 className="deneb-ticket-heading">{kidName}'s 7th Festival</h2>
                    </div>

                    <div className="deneb-ticket-grid">
                      <div className="deneb-ticket-item">
                        <span className="deneb-ticket-lbl">🗓️ HARI &amp; TANGGAL</span>
                        <strong className="deneb-ticket-val highlight">{day}, {date}</strong>
                      </div>
                      <div className="deneb-ticket-item">
                        <span className="deneb-ticket-lbl">⏰ WAKTU PESTA</span>
                        <strong className="deneb-ticket-val">{time}</strong>
                      </div>
                    </div>

                    <div className="deneb-ticket-venue-box">
                      <span className="deneb-ticket-lbl">📍 LOKASI PESTA</span>
                      <strong className="deneb-ticket-venue">{venue}</strong>
                      <span className="deneb-ticket-address">{address}</span>
                    </div>

                    <div className="deneb-ticket-actions">
                      {mapsLink && (
                        <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="deneb-btn-maps">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                          Petunjuk Maps
                        </a>
                      )}
                      {calendarLink && (
                        <a href={calendarLink} target="_blank" rel="noopener noreferrer" className="deneb-btn-cal">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/></svg>
                          Simpan Kalender
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </div>
            </DenebBubblePop>
          </div>

          {/* ── Dress Code (Festival Wristband) ── */}
          {dressCode && (
            <DenebSquishyCard delay={0.1}>
              <div className="deneb-wristband-wrap">
                <div className="deneb-wristband">
                  <span className="deneb-wristband-icon">🎟️</span>
                  <div className="deneb-wristband-info">
                    <span className="deneb-wristband-title">DRESS CODE PESTA</span>
                    <span className="deneb-wristband-text">{dressCode}</span>
                  </div>
                </div>
              </div>
            </DenebSquishyCard>
          )}

          {/* ── Countdown (Bouncy & Safe from NaN) ── */}
          <DenebJellyDrop delay={0.1}>
            <DenebCountdown targetDate={isoDate} />
          </DenebJellyDrop>

          {/* ── Rundown Acara Seru ── */}
          {rundown.length > 0 && (
            <DenebJellyDrop delay={0.1}>
              <EventRundown
                rundown={rundown}
                title="Agenda Pesta Ceria"
                subtitle="Jadwal keseruan yang telah disiapkan untuk teman-teman semua"
              />
            </DenebJellyDrop>
          )}

          {/* ── Titip Kado Kasih ── */}
          {(digitalGifts.length > 0 || physicalAddress) && (
            <DenebJellyDrop delay={0.1}>
              <WeddingGift
                gifts={digitalGifts}
                physicalAddress={physicalAddress}
                title="Tanda Kasih &amp; Kado Spesial"
                subtitle={`Doa restu teman-teman adalah yang utama. Namun bila ingin memberi kado manis untuk ${kidName}, dapat melalui:`}
              />
            </DenebJellyDrop>
          )}

          {/* ── Buku Tamu & Ucapan Doa ── */}
          <DenebJellyDrop delay={0.1}>
            <GuestBook
              initialWishes={wishes}
              storageKey="wishes_deneb"
              title={`Ucapan & Doa untuk ${kidName}`}
              subtitle={`Tuliskan ucapan selamat ulang tahun yang manis untuk ${kidName}`}
            />
          </DenebJellyDrop>

          {/* ── Host ── */}
          {hostParents && (
            <DenebJellyDrop delay={0.1}>
              <div className="deneb-host">
                <span className="deneb-host-label">Keluarga yang Berbahagia</span>
                <span className="deneb-host-name">{hostParents}</span>
              </div>
            </DenebJellyDrop>
          )}

          {/* ── RSVP ── */}
          <DenebBubblePop delay={0.1}>
            <div className="deneb-rsvp-block">
              <span className="deneb-rsvp-note">Konfirmasi kehadiranmu ya! 🎀</span>
              {rsvpDeadline && <span className="deneb-deadline">Sebelum {rsvpDeadline}</span>}
              {rsvpLink && (
                <div style={{marginTop:'16px'}}>
                  <a href={rsvpLink} target="_blank" rel="noopener noreferrer" className="deneb-btn-rsvp">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    Konfirmasi via WhatsApp
                  </a>
                </div>
              )}
            </div>
          </DenebBubblePop>

          <DenebJellyDrop delay={0.1}>
            <footer className="deneb-footer">
              <span className="deneb-footer-brand">{brandName||'✦ Undangan Digital · Tema Deneb'}</span>
            </footer>
          </DenebJellyDrop>
        </div>
        <div className="deneb-rainbow-bar-bottom"/>
      </div>
      </div>
    )}
    </div>
  )
}
