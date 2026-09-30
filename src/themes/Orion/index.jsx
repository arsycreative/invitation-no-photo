import { useEffect, useRef, useState } from 'react'
import {
  OrionComicSlam,
  OrionKineticThrust,
  OrionShockwaveBadge,
  OrionEnergyBurst,
  OrionSpeedCard,
} from './OrionMotion'
import { StarBurstLeft, StarBurstRight } from '../../components/Ornaments'
import InvitationCover from '../../components/InvitationCover'
import EventRundown from '../../components/EventRundown'
import WeddingGift from '../../components/WeddingGift'
import GuestBook from '../../components/GuestBook'
import './Orion.css'

/* ── Nebula Background ────────────────────────────────── */
function NebulaLayer() {
  return (
    <div className="orion-nebula">
      <div className="orion-nebula-cloud"/><div className="orion-nebula-cloud"/>
      <div className="orion-nebula-cloud"/><div className="orion-nebula-cloud"/>
      <div className="orion-nebula-cloud"/>
    </div>
  )
}

/* ── Starfield Canvas ─────────────────────────────────── */
function OrionStarfield() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current; const ctx = canvas.getContext('2d'); let animId
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize(); window.addEventListener('resize', resize)
    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight,
      r: Math.random() * 1.8 + 0.3, phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.006 + 0.002,
      color: Math.random() > 0.85 ? [0,240,255] : Math.random() > 0.7 ? [255,0,60] : [255,255,255],
    }))
    const draw = (t) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      stars.forEach((s) => {
        const a = 0.2 + 0.8 * Math.abs(Math.sin(t * s.speed + s.phase))
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${s.color.join(',')},${a * 0.85})`; ctx.fill()
      })
      animId = requestAnimationFrame(draw)
    }
    animId = requestAnimationFrame(draw)
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={canvasRef} className="orion-starfield" />
}

function MeteorTrails() {
  const meteors = Array.from({ length: 5 }, (_, i) => ({
    id: i, top: `${Math.random() * 40}%`, left: `${Math.random() * 60}%`,
    duration: `${Math.random() * 4 + 5}s`, delay: `${Math.random() * 8}s`,
  }))
  return <>{meteors.map((m) => <div key={m.id} className="orion-meteor" style={{ top: m.top, left: m.left, animationDuration: m.duration, animationDelay: m.delay }}/>)}</>
}

function OrionCountdown({ targetDate }) {
  const calc = () => {
    if (!targetDate) return { d: 0, h: 0, m: 0, s: 0 }
    const target = new Date(targetDate).getTime()
    if (isNaN(target)) return { d: 0, h: 0, m: 0, s: 0 }
    const diff = target - Date.now()
    if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 }
    return {
      d: Math.floor(diff / 86400000),
      h: Math.floor((diff % 86400000) / 3600000),
      m: Math.floor((diff % 3600000) / 60000),
      s: Math.floor((diff % 60000) / 1000),
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
    <div className="orion-telemetry-panel">
      <div className="orion-hud-header">
        <span className="orion-hud-status"><span className="orion-blinking-dot" />SYS_STATUS: ACTIVE</span>
        <span className="orion-hud-title">T-MINUS LAUNCH SEQUENCE</span>
        <span className="orion-hud-coord">ORBIT: MISSION_08</span>
      </div>
      <div className="orion-hud-digits">
        {[
          { val: time.d, unit: 'DAYS' },
          { val: time.h, unit: 'HRS' },
          { val: time.m, unit: 'MIN' },
          { val: time.s, unit: 'SEC' },
        ].map((item, i) => (
          <div key={item.unit} className="orion-hud-digit-group">
            {i > 0 && <span className="orion-hud-sep">:</span>}
            <div className="orion-hud-digit-block">
              <span className="orion-hud-val">{pad(item.val)}</span>
              <span className="orion-hud-unit">{item.unit}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Orion({ data = {} }) {
  const {
    kidName = 'Reza',
    age = 8,
    day = 'Sabtu',
    date = '12 April 2026',
    time = '14.00 — 17.00 WIB',
    isoDate = '2026-12-12T14:00:00',
    venue = 'Galaxy Adventure Center',
    address = 'Jl. Merdeka No. 88, Bukit Indah, Kota Bandung, Jawa Barat',
    mapsLink = 'https://maps.google.com',
    calendarLink,
    dressCode = 'Superhero / Galaxy Cosmic Outfit',
    hostParents = 'Bapak & Ibu Andi Pratama',
    rsvpLink = 'https://wa.me/628123456789',
    rsvpDeadline = 'Senin, 7 April 2026',
    message,
    rundown = [],
    digitalGifts = [],
    physicalAddress,
    wishes = [],
    brandName,
    guestName = 'Tamu Undangan',
    initialOpen = false,
    lockBodyScroll = true,
    hideFloatingButton = false,
  } = data

  const [isCoverOpen, setIsCoverOpen] = useState(initialOpen)

  return (
    <div className="orion-root">
      {/* ── Opening Cover ── */}
      <InvitationCover
        isOpen={isCoverOpen}
        onOpen={() => setIsCoverOpen(true)}
        onClose={() => setIsCoverOpen(false)}
        theme="orion"
        type="birthday-boy"
        title="Misi Ulang Tahun Galaksi"
        coupleOrKidName={kidName}
        date={`${day}, ${date}`}
        guestName={guestName}
        lockBodyScroll={lockBodyScroll}
        hideFloatingButton={hideFloatingButton}
      />

      {isCoverOpen && (
        <div className="invitation-reveal-enter">
          <NebulaLayer /><OrionStarfield /><MeteorTrails />

          <div className="orion-page">

        {/* ── Hero Banner (Comic-book Slam) ── */}
        <OrionComicSlam delay={0.15}>
          <header className="orion-hero-banner">
            <OrionShockwaveBadge delay={0.3}>
              <div className="orion-emblem"><div className="orion-emblem-ring"><span className="orion-star-icon">⭐</span></div></div>
            </OrionShockwaveBadge>
            <span className="orion-bday-tag">Undangan Ulang Tahun</span>
            <span className="orion-kid-name">{kidName}</span>
            <OrionShockwaveBadge delay={0.4}>
              <div className="orion-age-badge">
                <span className="orion-age-label">Genap</span>
                <span className="orion-age-num">{age}</span>
                <span className="orion-age-label">Tahun</span>
              </div>
            </OrionShockwaveBadge>
          </header>
        </OrionComicSlam>

        <div className="orion-body">

          {/* ── Intro with spinning energy bursts ── */}
          <div className="orion-ornament-section">
            <OrionEnergyBurst side="left" delay={0}
              style={{ left:'-35px', top:'0' }}>
              <StarBurstLeft size={55} />
            </OrionEnergyBurst>
            <OrionEnergyBurst side="right" delay={0.1}
              style={{ right:'-35px', top:'0' }}>
              <StarBurstRight size={55} />
            </OrionEnergyBurst>

            <OrionComicSlam delay={0.1}>
              <div className="orion-intro">
                {message || `Hei Sobat Pahlawan! 🦸‍♂️\n\nKamu diundang untuk ikut dalam\nMisi Ulang Tahun Galaksi ${kidName}!\n\nAda game seru, hadiah keren, dan petualangan yang tak terlupakan! 🚀`}
              </div>
            </OrionComicSlam>
          </div>

          {/* ── Event Detail with star bursts ── */}
          <div className="orion-ornament-section">
            <OrionEnergyBurst side="left" delay={0}
              style={{ left:'-35px', top:'20px' }}>
              <StarBurstLeft size={65} />
            </OrionEnergyBurst>
            <OrionEnergyBurst side="right" delay={0.1}
              style={{ right:'-35px', top:'20px' }}>
              <StarBurstRight size={65} />
            </OrionEnergyBurst>

            <div style={{ marginTop: '24px' }}>
              <OrionKineticThrust direction="right" distance={60}>
                <div className="orion-section-label">DETAIL MISI PERAYAAN</div>
              </OrionKineticThrust>

              <OrionSpeedCard side="right" delay={0.1}>
                <div className="orion-detail-card">
                  <div className="orion-detail-row">
                    <svg className="orion-detail-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    <div><span className="orion-detail-label">Tanggal</span><span className="orion-detail-value">{day}, {date}</span></div>
                  </div>
                  <div className="orion-detail-row">
                    <svg className="orion-detail-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                    <div><span className="orion-detail-label">Waktu</span><span className="orion-detail-value">{time}</span></div>
                  </div>
                  <div className="orion-detail-row">
                    <svg className="orion-detail-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                    <div>
                      <span className="orion-detail-label">Pusat Komando (Lokasi)</span>
                      <span className="orion-detail-value">{venue}</span>
                      <span style={{display:'block',fontSize:'13px',color:'rgba(240,244,255,0.5)',marginTop:'2px',fontFamily:'var(--ff-body)',fontWeight:300}}>{address}</span>
                    </div>
                  </div>
                  {dressCode && (
                    <div className="orion-detail-row">
                      <svg className="orion-detail-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.57a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.57a2 2 0 00-1.34-2.23z"/>
                      </svg>
                      <div>
                        <span className="orion-detail-label">Dress Code</span>
                        <div className="orion-dresscode"><span className="orion-dresscode-label">Kostum:</span><span className="orion-dresscode-value">{dressCode}</span></div>
                      </div>
                    </div>
                  )}

                  <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '12px' }}>
                    {mapsLink && (
                      <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="orion-btn-maps">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        Buka Peta Google
                      </a>
                    )}
                    {calendarLink && (
                      <a href={calendarLink} target="_blank" rel="noopener noreferrer" className="orion-btn-maps" style={{ background: '#00c8ff', color: '#03060f' }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/></svg>
                        Simpan di Kalender
                      </a>
                    )}
                  </div>
                </div>
              </OrionSpeedCard>
            </div>
          </div>

          {/* ── Countdown (Safe from NaN) ── */}
          <OrionComicSlam delay={0.1}>
            <OrionCountdown targetDate={isoDate} />
          </OrionComicSlam>

          {/* ── Rundown Acara Pahlawan ── */}
          {rundown.length > 0 && (
            <OrionComicSlam delay={0.1}>
              <EventRundown
                rundown={rundown}
                title="Rundown Misi Galaksi"
                subtitle="Jadwal agenda petualangan pahlawan super sepanjang pesta"
              />
            </OrionComicSlam>
          )}

          {/* ── Titip Kado Online ── */}
          {(digitalGifts.length > 0 || physicalAddress) && (
            <OrionComicSlam delay={0.1}>
              <WeddingGift
                gifts={digitalGifts}
                physicalAddress={physicalAddress}
                title="Hadiah &amp; Kado Pahlawan"
                subtitle={`Kehadiran sobat hero adalah hadiah paling luar biasa bagi ${kidName}. Bila ingin mengirim kado fisik/online:`}
              />
            </OrionComicSlam>
          )}

          {/* ── Buku Tamu & Ucapan Hero ── */}
          <OrionComicSlam delay={0.1}>
            <GuestBook
              initialWishes={wishes}
              storageKey="wishes_orion"
              title={`Pesan Sahabat Hero untuk ${kidName}`}
              subtitle={`Kirimkan ucapan selamat ulang tahun penuh semangat untuk ${kidName}!`}
            />
          </OrionComicSlam>

          {/* ── Host ── */}
          {hostParents && (
            <div style={{ marginTop: '20px' }}>
              <OrionKineticThrust direction="left" distance={60}>
                <div className="orion-section-label">PENYELENGGARA MISI</div>
              </OrionKineticThrust>
              <OrionSpeedCard side="left" delay={0.1}>
                <div className="orion-detail-card">
                  <div className="orion-detail-row">
                    <svg className="orion-detail-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                    </svg>
                    <div>
                      <span className="orion-detail-label">Keluarga Penyelenggara</span>
                      <span className="orion-detail-value">{hostParents}</span>
                    </div>
                  </div>
                </div>
              </OrionSpeedCard>
            </div>
          )}

          {/* ── RSVP ── */}
          <OrionKineticThrust direction="left" distance={40}>
            <div className="orion-rsvp-block">
              <span className="orion-rsvp-note">Konfirmasi kehadiranmu sebelum</span>
              {rsvpDeadline && <span className="orion-deadline">⚡ {rsvpDeadline}</span>}
            </div>
          </OrionKineticThrust>

          {rsvpLink && (
            <OrionComicSlam delay={0.1}>
              <div style={{textAlign:'center',marginTop:'16px'}}>
                <a href={rsvpLink} target="_blank" rel="noopener noreferrer" className="orion-btn-rsvp">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                  Konfirmasi Kehadiran via WhatsApp
                </a>
              </div>
            </OrionComicSlam>
          )}

          <OrionComicSlam delay={0.1}>
            <footer className="orion-footer" style={{marginTop:'28px'}}>
              <span className="orion-footer-brand">{brandName||'✦ Undangan Digital · Tema Orion'}</span>
            </footer>
          </OrionComicSlam>
        </div>
      </div>
      </div>
    )}
    </div>
  )
}
