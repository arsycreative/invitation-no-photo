import { useState, useEffect } from 'react'
import {
  LyraBloomReveal,
  LyraRomanticNames,
  LyraBreezeSprig,
  LyraPetalCard,
  LyraFlourishDivider,
} from './LyraMotion'
import { FloralSprigLeft, FloralSprigRight } from '../../components/Ornaments'
import InvitationCover from '../../components/InvitationCover'
import LoveStory from '../../components/LoveStory'
import WeddingGift from '../../components/WeddingGift'
import GuestBook from '../../components/GuestBook'
import './Lyra.css'

/* ── Bokeh Lights ─────────────────────────────────────── */
function BokehLayer() {
  const dots = [
    { size: 180, top: '5%',  left: '70%', color: 'rgba(255,150,100,0.5)', dur: '6s',  del: '0s'   },
    { size: 220, top: '15%', left: '10%', color: 'rgba(255,100,130,0.45)', dur: '8s',  del: '-3s'  },
    { size: 140, top: '50%', left: '80%', color: 'rgba(230,140,80,0.4)',  dur: '7s',  del: '-1.5s' },
    { size: 160, top: '70%', left: '20%', color: 'rgba(200,100,120,0.4)', dur: '9s',  del: '-4s'  },
    { size: 100, top: '85%', left: '60%', color: 'rgba(255,180,100,0.5)', dur: '5s',  del: '-2s'  },
    { size: 240, top: '35%', left: '45%', color: 'rgba(220,120,90,0.3)',  dur: '11s', del: '-5s'  },
  ]
  return (
    <div className="lyra-bokeh">
      {dots.map((d, i) => (
        <div key={i} className="lyra-bokeh-dot" style={{
          width: d.size, height: d.size, top: d.top, left: d.left,
          background: d.color, animationDuration: d.dur, animationDelay: d.del,
        }}/>
      ))}
    </div>
  )
}

function FloatingPetals() {
  const PETALS = Array.from({ length: 14 }, (_, i) => ({
    id: i,
    left: `${(i / 14) * 100 + Math.random() * 6}%`,
    size: `${Math.random() * 10 + 8}px`,
    duration: `${Math.random() * 9 + 11}s`,
    delay: `${Math.random() * 10}s`,
    color: ['#f5b8c8','#e8a0b4','#ffb87a','#f7d4df','#e8c090'][i % 5],
    shape: i % 3 === 0 ? '50%' : i % 3 === 1 ? '50% 0 50% 0' : '0 50% 0 50%',
  }))
  return (
    <>
      {PETALS.map((p) => (
        <div key={p.id} className="lyra-petal" style={{ left: p.left, width: p.size, height: p.size, background: p.color, borderRadius: p.shape, animationDuration: p.duration, animationDelay: p.delay }}/>
      ))}
    </>
  )
}

function FloralCorner({ className }) {
  return (
    <svg className={`lyra-corner ${className}`} viewBox="0 0 80 80" fill="none">
      <path d="M5 5 Q20 2 30 15 Q15 18 5 5Z" fill="rgba(196,116,140,0.3)"/>
      <path d="M5 5 Q2 20 15 30 Q18 15 5 5Z" fill="rgba(196,116,140,0.25)"/>
      <path d="M15 8 Q28 5 36 20 Q22 22 15 8Z" fill="rgba(201,160,110,0.2)"/>
      <path d="M8 15 Q5 28 20 36 Q22 22 8 15Z" fill="rgba(201,160,110,0.2)"/>
      <circle cx="5" cy="5" r="3" fill="rgba(196,116,140,0.55)"/>
      <path d="M5 5 L36 5" stroke="rgba(201,160,110,0.35)" strokeWidth="0.75"/>
      <path d="M5 5 L5 36" stroke="rgba(201,160,110,0.35)" strokeWidth="0.75"/>
    </svg>
  )
}

function LyraDivider() {
  return (
    <div className="lyra-divider">
      <div className="lyra-divider-line"/>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="4" fill="rgba(196,116,140,0.5)"/>
        <circle cx="8" cy="8" r="2" fill="rgba(201,160,110,0.6)"/>
        <path d="M8 0L8 3M8 13L8 16M0 8L3 8M13 8L16 8" stroke="rgba(196,116,140,0.3)" strokeWidth="1"/>
      </svg>
      <div className="lyra-divider-line right"/>
    </div>
  )
}

function LyraCountdown({ targetDate }) {
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
    <div className="lyra-countdown">
      <span className="lyra-countdown-label">Menghitung Hari Bahagia</span>
      <div className="lyra-countdown-digits">
        {[{val:time.d,unit:'Hari'},{val:time.h,unit:'Jam'},{val:time.m,unit:'Menit'},{val:time.s,unit:'Detik'}].map((item,i) => (
          <div key={item.unit} style={{display:'flex',alignItems:'flex-start',gap:'4px'}}>
            {i>0 && <span className="lyra-digit-sep">·</span>}
            <div className="lyra-digit-block">
              <span className="lyra-digit">{pad(item.val)}</span>
              <span className="lyra-digit-unit">{item.unit}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Lyra({ data = {} }) {
  const {
    groomName = 'Farhan',
    groomFullName = 'Muhammad Farhan Akbar, S.E.',
    groomParents = 'Bapak Drs. Agus Setiawan & Ibu Dra. Sri Wahyuni',
    brideName = 'Aulia',
    brideFullName = 'Aulia Rahma Putri, S.Sos.',
    brideParents = 'Bapak H. Ridwan Santoso & Ibu Hj. Dewi Lestari',
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
    <div className="lyra-root">
      {/* ── Opening Cover ── */}
      <InvitationCover
        isOpen={isCoverOpen}
        onOpen={() => setIsCoverOpen(true)}
        onClose={() => setIsCoverOpen(false)}
        theme="lyra"
        type="wedding"
        title="Wedding Invitation"
        coupleOrKidName={`${groomName} & ${brideName}`}
        date={resepsi.date || akad.date || '23 Maret 2026'}
        guestName={guestName}
      />

      {isCoverOpen && (
        <div className="invitation-reveal-enter">
          <BokehLayer />
          <FloatingPetals />

          <div className="lyra-page">
        <div className="lyra-frame">
          <div className="lyra-hero-bg"/>
          <FloralCorner className="lyra-corner--tl"/>
          <FloralCorner className="lyra-corner--tr"/>
          <FloralCorner className="lyra-corner--bl"/>
          <FloralCorner className="lyra-corner--br"/>

          {/* ── Section 1: Header (Blooming Blossom) ── */}
          <LyraBloomReveal delay={0.2}>
            <header>
              <span className="lyra-tag">Undangan Pernikahan</span>
              <span className="lyra-script-title">Wedding Invitation</span>
            </header>
          </LyraBloomReveal>

          {/* ── Ayat Suci ── */}
          {holyVerse && (
            <LyraBloomReveal delay={0.3}>
              <div className="holy-verse-box" style={{ background: 'rgba(255,255,255,0.3)', borderColor: 'rgba(196,116,140,0.2)' }}>
                <p className="holy-verse-arabic" style={{ color: '#4a2530' }}>{holyVerse.arabic}</p>
                <p className="holy-verse-trans" style={{ color: '#68404e' }}>"{holyVerse.translation}"</p>
                <span className="holy-verse-ref" style={{ color: '#c4748c' }}>{holyVerse.ref}</span>
              </div>
            </LyraBloomReveal>
          )}

          <LyraFlourishDivider delay={0.35}><LyraDivider /></LyraFlourishDivider>

          {/* ── Section 2: Greeting + swaying breeze sprigs ── */}
          <div className="lyra-ornament-section">
            <LyraBreezeSprig side="left" delay={0.1}
              style={{ left:'-55px', top:'-20px' }}>
              <FloralSprigLeft color="rgba(196,116,140,0.45)" accentColor="rgba(201,160,110,0.4)" size={80} />
            </LyraBreezeSprig>
            <LyraBreezeSprig side="right" delay={0.2}
              style={{ right:'-55px', top:'-20px' }}>
              <FloralSprigRight color="rgba(196,116,140,0.45)" accentColor="rgba(201,160,110,0.4)" size={80} />
            </LyraBreezeSprig>

            <LyraBloomReveal delay={0.1}>
              <div className="lyra-greeting">
                <p>Dengan memohon rahmat dan ridha Allah SWT,<br/>kami mengundang Bapak / Ibu / Saudara/i<br/>untuk turut hadir dalam pernikahan</p>
              </div>
            </LyraBloomReveal>
          </div>

          {/* ── Section 3: Names (Romantic Unfurl) ── */}
          <div className="lyra-ornament-section">
            <LyraBreezeSprig side="left" delay={0}
              style={{ left:'-65px', top:'10px' }}>
              <FloralSprigLeft color="rgba(196,116,140,0.6)" accentColor="rgba(201,160,110,0.5)" size={105} />
            </LyraBreezeSprig>
            <LyraBreezeSprig side="right" delay={0.1}
              style={{ right:'-65px', top:'10px' }}>
              <FloralSprigRight color="rgba(196,116,140,0.6)" accentColor="rgba(201,160,110,0.5)" size={105} />
            </LyraBreezeSprig>

            <LyraRomanticNames delay={0.15}>
              <section className="lyra-names">
                <span className="lyra-name-main">{groomName}</span>
                <span className="lyra-name-full">{groomFullName}</span>
                <span className="lyra-and">&amp;</span>
                <span className="lyra-name-main">{brideName}</span>
                <span className="lyra-name-full">{brideFullName}</span>
              </section>
            </LyraRomanticNames>
          </div>

          <LyraFlourishDivider><LyraDivider /></LyraFlourishDivider>

          {/* ── Section 4: Family (Organic bloom) ── */}
          <LyraBloomReveal delay={0.1}>
            <div className="lyra-family">
              <span className="lyra-family-intro">Putra &amp; Putri dari</span>
              <span className="lyra-family-label">Putra dari</span>
              <span className="lyra-family-name">{groomParents}</span>
              <span className="lyra-family-label">Putri dari</span>
              <span className="lyra-family-name" style={{marginBottom:0}}>{brideParents}</span>
            </div>
          </LyraBloomReveal>

          {/* ── Section 5: Events (Drifting Petal Cards) ── */}
          <div className="lyra-ornament-section">
            <LyraBreezeSprig side="left" delay={0}
              style={{ left:'-50px', top:'40px' }}>
              <FloralSprigLeft color="rgba(196,116,140,0.35)" accentColor="rgba(201,160,110,0.3)" size={85} />
            </LyraBreezeSprig>
            <LyraBreezeSprig side="right" delay={0.1}
              style={{ right:'-50px', top:'40px' }}>
              <FloralSprigRight color="rgba(196,116,140,0.35)" accentColor="rgba(201,160,110,0.3)" size={85} />
            </LyraBreezeSprig>

            <section className="lyra-events">
              {[{label:'✦ Akad Nikah', ev:akad},{label:'✦ Resepsi', ev:resepsi}].map(({label,ev}, idx) => (
                <LyraPetalCard key={label} delay={idx * 0.14}>
                  <article className="lyra-event-card">
                    <span className="lyra-event-tag">{label}</span>
                    <span className="lyra-event-name">{ev.name||label}</span>
                    <span className="lyra-event-date">{ev.day}, {ev.date}</span>
                    <span className="lyra-event-time">{ev.time}</span>
                    <div className="lyra-event-sep"/>
                    <span className="lyra-event-venue">{ev.venue}</span>
                    <span className="lyra-event-address">{ev.address}</span>

                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '12px' }}>
                      {ev.mapsLink && (
                        <a href={ev.mapsLink} target="_blank" rel="noopener noreferrer" className="lyra-btn-maps">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                          Lihat Peta
                        </a>
                      )}
                      {ev.calendarLink && (
                        <a href={ev.calendarLink} target="_blank" rel="noopener noreferrer" className="lyra-btn-maps" style={{ background: '#c9a06e', color: '#fff' }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/></svg>
                          Simpan Kalender
                        </a>
                      )}
                    </div>
                  </article>
                </LyraPetalCard>
              ))}
            </section>
          </div>

          {/* ── Section 6: Countdown (Safe from NaN) ── */}
          <LyraBloomReveal delay={0.1}>
            <LyraCountdown targetDate={resepsi.isoDate || akad.isoDate}/>
          </LyraBloomReveal>

          <LyraFlourishDivider><LyraDivider /></LyraFlourishDivider>

          {/* ── Section 7: Kisah Cinta ── */}
          {loveStory.length > 0 && (
            <LyraBloomReveal delay={0.1}>
              <LoveStory
                stories={loveStory}
                title="Kisah Kasih Kami"
                subtitle="Perjalanan dua hati yang dipertemukan dengan cara yang indah"
              />
            </LyraBloomReveal>
          )}

          {/* ── Section 8: Amplop Digital ── */}
          {(digitalGifts.length > 0 || physicalAddress) && (
            <LyraBloomReveal delay={0.1}>
              <WeddingGift
                gifts={digitalGifts}
                physicalAddress={physicalAddress}
                title="Tanda Kasih"
                subtitle="Kehadiran Anda adalah kado terindah bagi kami. Namun bila hendak memberi tanda kasih, dapat melalui:"
              />
            </LyraBloomReveal>
          )}

          {/* ── Section 9: Buku Tamu & Doa Restu ── */}
          <LyraBloomReveal delay={0.1}>
            <GuestBook
              initialWishes={wishes}
              storageKey="wishes_lyra"
              title="Doa Restu &amp; Ucapan"
              subtitle="Tuliskan ucapan selamat dan doa tulus untuk kedua mempelai"
            />
          </LyraBloomReveal>

          {/* ── Section 10: Closing + RSVP ── */}
          <div className="lyra-ornament-section">
            <LyraBreezeSprig side="left" delay={0}
              style={{ left:'-45px', top:'-15px' }}>
              <FloralSprigLeft color="rgba(196,116,140,0.25)" accentColor="rgba(201,160,110,0.25)" size={65} />
            </LyraBreezeSprig>
            <LyraBreezeSprig side="right" delay={0.1}
              style={{ right:'-45px', top:'-15px' }}>
              <FloralSprigRight color="rgba(196,116,140,0.25)" accentColor="rgba(201,160,110,0.25)" size={65} />
            </LyraBreezeSprig>

            <LyraBloomReveal delay={0.1}>
              <div className="lyra-closing"><p>{closingMessage}</p></div>
            </LyraBloomReveal>

            {rsvpLink && (
              <LyraBloomReveal delay={0.15}>
                <div style={{textAlign:'center',marginTop:'24px'}}>
                  <a href={rsvpLink} target="_blank" rel="noopener noreferrer" className="lyra-btn-rsvp">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    Konfirmasi Kehadiran via WhatsApp
                  </a>
                </div>
              </LyraBloomReveal>
            )}
          </div>

          <LyraBloomReveal delay={0.1}>
            <footer className="lyra-footer">
              <span className="lyra-footer-brand">{brandName||'✦ Undangan Digital · Tema Lyra'}</span>
            </footer>
          </LyraBloomReveal>
        </div>
      </div>
      </div>
    )}
    </div>
  )
}
