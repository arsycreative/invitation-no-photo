import { useEffect, useState } from 'react'
import {
  CastorCurtainReveal,
  CastorWaxSealStamp,
  CastorBaroqueOrnament,
  CastorImperialNames,
  CastorMonarchDivider,
  CastorDecreeCard,
} from './CastorMotion'
import { BaroqueFiligreeLeft, BaroqueFiligreeRight } from '../../components/Ornaments'
import InvitationCover from '../../components/InvitationCover'
import LoveStory from '../../components/LoveStory'
import WeddingGift from '../../components/WeddingGift'
import GuestBook from '../../components/GuestBook'
import './Castor.css'

function Crown() {
  return (
    <svg width="64" height="44" viewBox="0 0 64 44" fill="none">
      <path d="M2 38 L12 10 L24 28 L32 4 L40 28 L52 10 L62 38 Z" fill="rgba(201,168,76,0.15)" stroke="rgba(201,168,76,0.7)" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M2 38 L62 38" stroke="rgba(201,168,76,0.5)" strokeWidth="1.5"/>
      <circle cx="32" cy="4" r="3" fill="rgba(201,168,76,0.9)"/>
      <circle cx="12" cy="10" r="2.5" fill="rgba(201,168,76,0.75)"/>
      <circle cx="52" cy="10" r="2.5" fill="rgba(201,168,76,0.75)"/>
    </svg>
  )
}

function RoyalCorner({ className }) {
  return (
    <svg className={`castor-corner ${className}`} viewBox="0 0 56 56" fill="none">
      <path d="M4 4 L26 4 M4 4 L4 26" stroke="rgba(201,168,76,0.6)" strokeWidth="1.5"/>
      <path d="M9 4 L9 9 L4 9" stroke="rgba(201,168,76,0.3)" strokeWidth="0.75"/>
      <circle cx="4" cy="4" r="2.5" fill="rgba(201,168,76,0.8)"/>
      <path d="M4 14 L14 4" stroke="rgba(139,26,44,0.3)" strokeWidth="0.75"/>
    </svg>
  )
}

function CastorDivider() {
  return (
    <div className="castor-divider">
      <div className="castor-divider-line"/>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <polygon points="10,2 18,10 10,18 2,10" stroke="rgba(201,168,76,0.7)" strokeWidth="1" fill="rgba(201,168,76,0.07)"/>
        <circle cx="10" cy="10" r="2.5" fill="rgba(201,168,76,0.6)"/>
      </svg>
      <div className="castor-divider-line right"/>
    </div>
  )
}

function CastorCountdown({ targetDate }) {
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
    <div className="castor-countdown">
      <span className="castor-countdown-label">Menuju Hari Agung</span>
      <div className="castor-countdown-digits">
        {[{val:time.d,unit:'Hari'},{val:time.h,unit:'Jam'},{val:time.m,unit:'Menit'},{val:time.s,unit:'Detik'}].map((item,i) => (
          <div key={item.unit} style={{display:'flex',alignItems:'flex-start',gap:'4px'}}>
            {i>0 && <span className="castor-digit-sep">·</span>}
            <div className="castor-digit-block"><span className="castor-digit">{pad(item.val)}</span><span className="castor-digit-unit">{item.unit}</span></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Castor({ data = {} }) {
  const {
    groomName = 'Fauzan',
    groomFullName = 'Fauzan Al-Hakim, S.H., M.H.',
    groomParents = 'Bapak KH. Ahmad Taufik & Ibu Hj. Siti Maryam',
    brideName = 'Aisyah',
    brideFullName = 'Aisyah Nur Fadilah, S.Psi.',
    brideParents = 'Bapak H. Bakri Santoso & Ibu Hj. Fatimah',
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
    <div className="castor-root">
      {/* ── Opening Cover ── */}
      <InvitationCover
        isOpen={isCoverOpen}
        onOpen={() => setIsCoverOpen(true)}
        onClose={() => setIsCoverOpen(false)}
        theme="castor"
        type="wedding"
        title="Royal Wedding Proclamation"
        coupleOrKidName={`${groomName} & ${brideName}`}
        date={resepsi.date || akad.date || '6 Juni 2026'}
        guestName={guestName}
      />

      {isCoverOpen && (
        <div className="invitation-reveal-enter">
          <div className="castor-page">

        {/* ── Crest Header (Authoritative Wax Seal Stamp) ── */}
        <header className="castor-crest-bar">
          <CastorWaxSealStamp delay={0.2}>
            <div className="castor-crest-emblem"><Crown /></div>
          </CastorWaxSealStamp>
          <CastorCurtainReveal delay={0.35}>
            <span className="castor-crest-tag">Undangan Pernikahan Kerajaan</span>
          </CastorCurtainReveal>
        </header>

        <div className="castor-frame">
          <RoyalCorner className="castor-corner--tl"/>
          <RoyalCorner className="castor-corner--tr"/>
          <RoyalCorner className="castor-corner--bl"/>
          <RoyalCorner className="castor-corner--br"/>

          {/* ── Bismillah (Curtain Reveal) ── */}
          <CastorCurtainReveal delay={0.2}>
            <div className="castor-bismillah"><span>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</span></div>
          </CastorCurtainReveal>

          {/* ── Hadits / Ayat Suci ── */}
          {holyVerse && (
            <CastorCurtainReveal delay={0.3}>
              <div className="holy-verse-box">
                <p className="holy-verse-arabic">{holyVerse.arabic}</p>
                <p className="holy-verse-trans">"{holyVerse.translation}"</p>
                <span className="holy-verse-ref">{holyVerse.ref}</span>
              </div>
            </CastorCurtainReveal>
          )}

          <CastorMonarchDivider><CastorDivider /></CastorMonarchDivider>

          {/* ── Greeting with baroque filigree ornaments ── */}
          <div className="castor-ornament-section">
            <CastorBaroqueOrnament side="left" delay={0.1}
              style={{ left:'-55px', top:'-10px' }}>
              <BaroqueFiligreeLeft color="rgba(201,168,76,0.5)" size={85} />
            </CastorBaroqueOrnament>
            <CastorBaroqueOrnament side="right" delay={0.2}
              style={{ right:'-55px', top:'-10px' }}>
              <BaroqueFiligreeRight color="rgba(201,168,76,0.5)" size={85} />
            </CastorBaroqueOrnament>

            <CastorCurtainReveal delay={0.1}>
              <div className="castor-greeting">
                <p>Dengan penuh kebahagiaan dan rasa syukur ke hadirat Ilahi,<br/>kami mengundang kehadiran Bapak / Ibu / Saudara/i<br/>pada pernikahan putra-putri kami</p>
              </div>
            </CastorCurtainReveal>
          </div>

          {/* ── Names with grand imperial proclamation ── */}
          <div className="castor-ornament-section">
            <CastorBaroqueOrnament side="left" delay={0}
              style={{ left:'-65px', top:'10px' }}>
              <BaroqueFiligreeLeft color="rgba(201,168,76,0.65)" size={105} />
            </CastorBaroqueOrnament>
            <CastorBaroqueOrnament side="right" delay={0.1}
              style={{ right:'-65px', top:'10px' }}>
              <BaroqueFiligreeRight color="rgba(201,168,76,0.65)" size={105} />
            </CastorBaroqueOrnament>

            <CastorImperialNames delay={0.15}>
              <section className="castor-names">
                <span className="castor-name-main">{groomName}</span>
                <span className="castor-name-full">{groomFullName}</span>
                <span className="castor-and">&amp;</span>
                <span className="castor-name-main">{brideName}</span>
                <span className="castor-name-full">{brideFullName}</span>
              </section>
            </CastorImperialNames>
          </div>

          <CastorMonarchDivider><CastorDivider /></CastorMonarchDivider>

          {/* ── Family ── */}
          <CastorCurtainReveal delay={0.1}>
            <div className="castor-family">
              <span className="castor-family-intro">Putra &amp; Putri dari</span>
              <span className="castor-family-label">Putra pertama dari</span>
              <span className="castor-family-name">{groomParents}</span>
              <span className="castor-family-label">Putri pertama dari</span>
              <span className="castor-family-name" style={{marginBottom:0}}>{brideParents}</span>
            </div>
          </CastorCurtainReveal>

          {/* ── Events with royal decree cards ── */}
          <div className="castor-ornament-section">
            <CastorBaroqueOrnament side="left" delay={0}
              style={{ left:'-50px', top:'30px' }}>
              <BaroqueFiligreeLeft color="rgba(201,168,76,0.4)" size={85} />
            </CastorBaroqueOrnament>
            <CastorBaroqueOrnament side="right" delay={0.08}
              style={{ right:'-50px', top:'30px' }}>
              <BaroqueFiligreeRight color="rgba(201,168,76,0.4)" size={85} />
            </CastorBaroqueOrnament>

            <section className="castor-events">
              {[{label:'✦ Akad Nikah',ev:akad},{label:'✦ Resepsi',ev:resepsi}].map(({label,ev},idx) => (
                <CastorDecreeCard key={label} delay={idx*0.14}>
                  <article className="castor-event-card">
                    <span className="castor-event-tag">{label}</span>
                    <span className="castor-event-name">{ev.name||label}</span>
                    <span className="castor-event-date">{ev.day}, {ev.date}</span>
                    <span className="castor-event-time">{ev.time}</span>
                    <div className="castor-event-sep"/>
                    <span className="castor-event-venue">{ev.venue}</span>
                    <span className="castor-event-address">{ev.address}</span>

                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '12px' }}>
                      {ev.mapsLink && (
                        <a href={ev.mapsLink} target="_blank" rel="noopener noreferrer" className="castor-btn-maps">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                          Buka Peta Google
                        </a>
                      )}
                      {ev.calendarLink && (
                        <a href={ev.calendarLink} target="_blank" rel="noopener noreferrer" className="castor-btn-maps" style={{ background: '#c9a84c', color: '#1a0409' }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/></svg>
                          Simpan Kalender
                        </a>
                      )}
                    </div>
                  </article>
                </CastorDecreeCard>
              ))}
            </section>
          </div>

          {/* ── Countdown (Safe from NaN) ── */}
          <CastorCurtainReveal delay={0.1}>
            <CastorCountdown targetDate={resepsi.isoDate || akad.isoDate} />
          </CastorCurtainReveal>

          <CastorMonarchDivider><CastorDivider /></CastorMonarchDivider>

          {/* ── Love Story Timeline ── */}
          {loveStory.length > 0 && (
            <CastorCurtainReveal delay={0.1}>
              <LoveStory
                stories={loveStory}
                title="Kisah Kasih Agung"
                subtitle="Untaian takdir suci yang menyatukan dua keluarga dalam ikatan mulia"
              />
            </CastorCurtainReveal>
          )}

          {/* ── Amplop Digital / Tanda Kasih ── */}
          {(digitalGifts.length > 0 || physicalAddress) && (
            <CastorCurtainReveal delay={0.1}>
              <WeddingGift
                gifts={digitalGifts}
                physicalAddress={physicalAddress}
                title="Tanda Kasih &amp; Kado Kerajaan"
                subtitle="Kehadiran dan doa restu Anda adalah anugerah terbesar bagi kami. Apabila hendak memberikan tanda kasih, dapat melalui:"
              />
            </CastorCurtainReveal>
          )}

          {/* ── Buku Tamu & Doa Restu ── */}
          <CastorCurtainReveal delay={0.1}>
            <GuestBook
              initialWishes={wishes}
              storageKey="wishes_castor"
              title="Buku Doa Restu Para Tamu"
              subtitle="Tuliskan ucapan selamat dan doa keberkahan untuk kedua mempelai"
            />
          </CastorCurtainReveal>

          {/* ── Closing ── */}
          <div className="castor-ornament-section">
            <CastorBaroqueOrnament side="left" delay={0}
              style={{ left:'-40px', top:'-10px' }}>
              <BaroqueFiligreeLeft color="rgba(201,168,76,0.3)" size={70} />
            </CastorBaroqueOrnament>
            <CastorBaroqueOrnament side="right" delay={0.08}
              style={{ right:'-40px', top:'-10px' }}>
              <BaroqueFiligreeRight color="rgba(201,168,76,0.3)" size={70} />
            </CastorBaroqueOrnament>

            <CastorCurtainReveal delay={0.1}>
              <div className="castor-closing"><p>{closingMessage}</p></div>
            </CastorCurtainReveal>

            {rsvpLink && (
              <CastorCurtainReveal delay={0.15}>
                <div style={{textAlign:'center',marginTop:'24px'}}>
                  <a href={rsvpLink} target="_blank" rel="noopener noreferrer" className="castor-btn-rsvp">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    Konfirmasi Kehadiran via WhatsApp
                  </a>
                </div>
              </CastorCurtainReveal>
            )}
          </div>
        </div>

        <CastorCurtainReveal delay={0.1}>
          <div className="castor-bottom-bar">
            <span className="castor-footer-brand">{brandName||'✦ Undangan Digital · Tema Castor'}</span>
          </div>
        </CastorCurtainReveal>
      </div>
      </div>
    )}
    </div>
  )
}
