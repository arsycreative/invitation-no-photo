import { useEffect, useRef, useState } from 'react'
import {
  VegaReveal,
  VegaNamesEntrance,
  VegaFloatingOrnament,
  VegaConstellationDivider,
  VegaCard,
} from './VegaMotion'
import { GoldLeafLeft, GoldLeafRight } from '../../components/Ornaments'
import InvitationCover from '../../components/InvitationCover'
import LoveStory from '../../components/LoveStory'
import WeddingGift from '../../components/WeddingGift'
import GuestBook from '../../components/GuestBook'
import './Vega.css'

/* ── Starfield ────────────────────────────────────────── */
function StarfieldCanvas() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)
    const stars = Array.from({ length: 180 }, () => ({
      x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight,
      r: Math.random() * 1.4 + 0.2, speed: Math.random() * 0.005 + 0.002,
      phase: Math.random() * Math.PI * 2,
    }))
    const draw = (t) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      stars.forEach((s) => {
        const a = 0.25 + 0.75 * Math.abs(Math.sin(t * s.speed + s.phase))
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${a * 0.7})`; ctx.fill()
      })
      animId = requestAnimationFrame(draw)
    }
    animId = requestAnimationFrame(draw)
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={canvasRef} className="vega-starfield" />
}

function AuroraLayer() {
  return (
    <div className="vega-aurora-layer">
      <div className="vega-aurora-band" />
      <div className="vega-aurora-band" />
      <div className="vega-aurora-band" />
    </div>
  )
}

/* ── Corner Ornament ──────────────────────────────────── */
function CornerOrnament({ className }) {
  return (
    <svg className={`vega-corner ${className}`} viewBox="0 0 48 48" fill="none">
      <path d="M2 2 L22 2" stroke="rgba(201,168,76,0.7)" strokeWidth="1"/>
      <path d="M2 2 L2 22" stroke="rgba(201,168,76,0.7)" strokeWidth="1"/>
      <circle cx="2" cy="2" r="2" fill="rgba(201,168,76,0.8)"/>
      <path d="M8 8 L16 8" stroke="rgba(201,168,76,0.35)" strokeWidth="0.75"/>
      <path d="M8 8 L8 16" stroke="rgba(201,168,76,0.35)" strokeWidth="0.75"/>
    </svg>
  )
}

/* ── Gem Divider ──────────────────────────────────────── */
function DividerGem() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <polygon points="10,1 19,10 10,19 1,10" stroke="rgba(201,168,76,0.8)" strokeWidth="1" fill="rgba(201,168,76,0.08)"/>
      <polygon points="10,5 15,10 10,15 5,10" stroke="rgba(201,168,76,0.4)" strokeWidth="0.5" fill="none"/>
    </svg>
  )
}

/* ── Star Divider ─────────────────────────────────────── */
function StarDivider() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
      <path d="M7 0l1.5 5.5L14 7l-5.5 1.5L7 14l-1.5-5.5L0 7l5.5-1.5z"/>
    </svg>
  )
}

/* ── Countdown (Safe from NaN) ────────────────────────── */
function Countdown({ targetDate }) {
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
    <div className="vega-countdown">
      <span className="vega-countdown-label">Menuju Hari Bahagia</span>
      <div className="vega-countdown-digits">
        {[{ val: time.d, unit: 'Hari' }, { val: time.h, unit: 'Jam' }, { val: time.m, unit: 'Menit' }, { val: time.s, unit: 'Detik' }]
          .map((item, i) => (
            <div key={item.unit} style={{ display:'flex', alignItems:'flex-start', gap:'4px' }}>
              {i > 0 && <span className="vega-digit-sep">:</span>}
              <div className="vega-digit-block">
                <span className="vega-digit">{pad(item.val)}</span>
                <span className="vega-digit-unit">{item.unit}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default function Vega({ data = {} }) {
  const {
    groomName = 'Ardiansyah',
    groomFullName = 'Muhammad Ardiansyah, S.T.',
    groomParents = 'Bapak H. Suharto & Ibu Hj. Rahmawati',
    brideName = 'Khairunnisa',
    brideFullName = 'Khairunnisa Putri Dewi, S.Pd.',
    brideParents = 'Bapak H. Mansyur & Ibu Hj. Nurhayati',
    holyVerse,
    akad = {},
    resepsi = {},
    loveStory = [],
    digitalGifts = [],
    physicalAddress,
    wishes = [],
    closingMessage,
    rsvpLink,
    brandName,
    guestName = 'Tamu Undangan',
  } = data

  const [isCoverOpen, setIsCoverOpen] = useState(false)

  return (
    <div className="vega-root">
      {/* ── Opening Cover ── */}
      <InvitationCover
        isOpen={isCoverOpen}
        onOpen={() => setIsCoverOpen(true)}
        onClose={() => setIsCoverOpen(false)}
        theme="vega"
        type="wedding"
        title="The Wedding Of"
        coupleOrKidName={`${groomName} & ${brideName}`}
        date={resepsi.date || akad.date || '15 Februari 2026'}
        guestName={guestName}
      />

      {isCoverOpen && (
        <div className="invitation-reveal-enter">
          <AuroraLayer />
          <StarfieldCanvas />

          <div className="vega-page">
        <div className="vega-frame">
          <CornerOrnament className="vega-corner--tl" />
          <CornerOrnament className="vega-corner--tr" />
          <CornerOrnament className="vega-corner--bl" />
          <CornerOrnament className="vega-corner--br" />

          {/* ════════════════════════════════════════════════
              SECTION 1: Hero — Bismillah + Tag (Celestial Blur-in)
              ════════════════════════════════════════════════ */}
          <VegaReveal delay={0.2}>
            <header className="vega-header">
              <span className="vega-label-top">Undangan Pernikahan</span>
            </header>
          </VegaReveal>

          <VegaReveal delay={0.35}>
            <div className="vega-bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>
          </VegaReveal>

          {/* ── Ayat Suci Al-Qur'an ── */}
          {holyVerse && (
            <VegaReveal delay={0.4}>
              <div className="holy-verse-box">
                <p className="holy-verse-arabic">{holyVerse.arabic}</p>
                <p className="holy-verse-trans">"{holyVerse.translation}"</p>
                <span className="holy-verse-ref">{holyVerse.ref}</span>
              </div>
            </VegaReveal>
          )}

          <VegaConstellationDivider delay={0.45}>
            <div className="vega-divider-ornament"><DividerGem /></div>
          </VegaConstellationDivider>

          {/* ════════════════════════════════════════════════
              SECTION 2: Greeting — with floating celestial ornaments
              ════════════════════════════════════════════════ */}
          <div className="vega-ornament-section">
            <VegaFloatingOrnament side="left" distance={70} delay={0.1}
              style={{ left: '-50px', top: '-10px' }}>
              <GoldLeafLeft color="rgba(201,168,76,0.4)" size={85} />
            </VegaFloatingOrnament>

            <VegaFloatingOrnament side="right" distance={70} delay={0.2}
              style={{ right: '-50px', top: '-10px' }}>
              <GoldLeafRight color="rgba(201,168,76,0.4)" size={85} />
            </VegaFloatingOrnament>

            <VegaReveal delay={0.1}>
              <div className="vega-greeting">
                <p>Dengan penuh rasa syukur dan kebahagiaan,<br/>kami mengundang Bapak / Ibu / Saudara/i<br/>untuk hadir dan memberikan doa restu pada<br/>pernikahan putra-putri kami</p>
              </div>
            </VegaReveal>
          </div>

          {/* ════════════════════════════════════════════════
              SECTION 3: Names — grand starlight unfolding
              ════════════════════════════════════════════════ */}
          <div className="vega-ornament-section">
            <VegaFloatingOrnament side="left" distance={90} delay={0}
              style={{ left: '-60px', top: '15px' }}>
              <GoldLeafLeft color="rgba(201,168,76,0.55)" size={110} />
            </VegaFloatingOrnament>
            <VegaFloatingOrnament side="right" distance={90} delay={0.1}
              style={{ right: '-60px', top: '15px' }}>
              <GoldLeafRight color="rgba(201,168,76,0.55)" size={110} />
            </VegaFloatingOrnament>

            <VegaNamesEntrance delay={0.15}>
              <section className="vega-names">
                <div className="vega-groom">
                  <span className="vega-groom-name">{groomName}</span>
                  <span className="vega-groom-full">{groomFullName}</span>
                </div>
                <span className="vega-ampersand">&amp;</span>
                <div className="vega-bride">
                  <span className="vega-bride-name">{brideName}</span>
                  <span className="vega-bride-full">{brideFullName}</span>
                </div>
              </section>
            </VegaNamesEntrance>
          </div>

          <VegaConstellationDivider>
            <div className="vega-section-divider"><StarDivider /></div>
          </VegaConstellationDivider>

          {/* ════════════════════════════════════════════════
              SECTION 4: Family — starlight blur-in
              ════════════════════════════════════════════════ */}
          <VegaReveal delay={0.1}>
            <div className="vega-family">
              <span className="vega-family-intro">Putra &amp; Putri dari</span>
              <div className="vega-family-block">
                <span className="vega-family-label">Putra pertama dari</span>
                <span className="vega-family-name">{groomParents}</span>
              </div>
              <div className="vega-divider-ornament" style={{ margin:'12px auto', opacity:0.4 }}><DividerGem /></div>
              <div className="vega-family-block">
                <span className="vega-family-label">Putri pertama dari</span>
                <span className="vega-family-name">{brideParents}</span>
              </div>
            </div>
          </VegaReveal>

          <VegaConstellationDivider>
            <div className="vega-section-divider"><StarDivider /></div>
          </VegaConstellationDivider>

          {/* ════════════════════════════════════════════════
              SECTION 5: Events — materialized celestial cards
              ════════════════════════════════════════════════ */}
          <div className="vega-ornament-section">
            <VegaFloatingOrnament side="left" distance={60} delay={0}
              style={{ left: '-50px', top: '30px' }}>
              <GoldLeafLeft color="rgba(201,168,76,0.3)" size={90} />
            </VegaFloatingOrnament>
            <VegaFloatingOrnament side="right" distance={60} delay={0.1}
              style={{ right: '-50px', top: '30px' }}>
              <GoldLeafRight color="rgba(201,168,76,0.3)" size={90} />
            </VegaFloatingOrnament>

            <section className="vega-events">
              {[
                { label: 'Akad Nikah', ev: akad },
                { label: 'Walimatul Ursy', ev: resepsi },
              ].map(({ label, ev }, idx) => (
                <VegaCard key={label} delay={idx * 0.18}>
                  <article className="vega-event-card">
                    <span className="vega-event-tag">{label}</span>
                    <span className="vega-event-name">{ev.name || label}</span>
                    <span className="vega-event-datetime">{ev.day}, {ev.date}</span>
                    <span className="vega-event-time">{ev.time}</span>
                    <div className="vega-event-location">
                      <span className="vega-event-venue">{ev.venue}</span>
                      <span className="vega-event-address">{ev.address}</span>
                    </div>

                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '14px' }}>
                      {ev.mapsLink && (
                        <a href={ev.mapsLink} target="_blank" rel="noopener noreferrer" className="vega-btn-maps">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                          Petunjuk Lokasi
                        </a>
                      )}
                      {ev.calendarLink && (
                        <a href={ev.calendarLink} target="_blank" rel="noopener noreferrer" className="vega-btn-maps" style={{ background: '#f0e4b8', color: '#08102a' }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/></svg>
                          Simpan Kalender
                        </a>
                      )}
                    </div>
                  </article>
                </VegaCard>
              ))}
            </section>
          </div>

          {/* ════════════════════════════════════════════════
              SECTION 6: Countdown (Safe from NaN)
              ════════════════════════════════════════════════ */}
          <VegaReveal delay={0.1}>
            <Countdown targetDate={resepsi.isoDate || akad.isoDate} />
          </VegaReveal>

          <VegaConstellationDivider>
            <div className="vega-section-divider"><StarDivider /></div>
          </VegaConstellationDivider>

          {/* ════════════════════════════════════════════════
              SECTION 7: Love Story (Timeline)
              ════════════════════════════════════════════════ */}
          {loveStory.length > 0 && (
            <VegaReveal delay={0.1}>
              <LoveStory
                stories={loveStory}
                title="Kisah Kasih Kami"
                subtitle="Setiap cerita cinta itu indah, namun kisah kami adalah anugerah terindah"
              />
            </VegaReveal>
          )}

          {/* ════════════════════════════════════════════════
              SECTION 8: Digital Gifts / Amplop Digital
              ════════════════════════════════════════════════ */}
          {(digitalGifts.length > 0 || physicalAddress) && (
            <VegaReveal delay={0.1}>
              <WeddingGift
                gifts={digitalGifts}
                physicalAddress={physicalAddress}
                title="Tanda Kasih &amp; Kado"
                subtitle="Doa restu Anda merupakan karunia terindah bagi kami. Namun apabila hendak memberikan tanda kasih, dapat melalui:"
              />
            </VegaReveal>
          )}

          {/* ════════════════════════════════════════════════
              SECTION 9: Guest Book / Doa Restu
              ════════════════════════════════════════════════ */}
          <VegaReveal delay={0.1}>
            <GuestBook
              initialWishes={wishes}
              storageKey="wishes_vega"
              title="Doa Restu &amp; Ucapan Tamu"
              subtitle="Tuliskan doa serta ucapan selamat yang tulus untuk kedua mempelai"
            />
          </VegaReveal>

          {/* ════════════════════════════════════════════════
              SECTION 10: Closing + RSVP
              ════════════════════════════════════════════════ */}
          <div className="vega-ornament-section">
            <VegaFloatingOrnament side="left" distance={50} delay={0}
              style={{ left: '-45px', top: '-20px' }}>
              <GoldLeafLeft color="rgba(201,168,76,0.25)" size={70} />
            </VegaFloatingOrnament>
            <VegaFloatingOrnament side="right" distance={50} delay={0.1}
              style={{ right: '-45px', top: '-20px' }}>
              <GoldLeafRight color="rgba(201,168,76,0.25)" size={70} />
            </VegaFloatingOrnament>

            <VegaReveal delay={0.1}>
              <div className="vega-closing"><p>{closingMessage}</p></div>
            </VegaReveal>

            {rsvpLink && (
              <VegaReveal delay={0.2}>
                <div style={{ textAlign:'center', marginTop:'28px' }}>
                  <a href={rsvpLink} target="_blank" rel="noopener noreferrer" className="vega-btn-rsvp">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    Konfirmasi Kehadiran via WhatsApp
                  </a>
                </div>
              </VegaReveal>
            )}
          </div>

          <VegaReveal delay={0.1}>
            <footer className="vega-footer">
              <span className="vega-footer-brand">{brandName || 'Made with ♥ · Vega Theme'}</span>
            </footer>
          </VegaReveal>
        </div>
      </div>
      </div>
    )}
    </div>
  )
}
