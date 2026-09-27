import { useState, useEffect } from 'react'
import { SiriusReveal, SiriusCrestMotion, SiriusCard } from './SiriusMotion'
import InvitationCover from '../../components/InvitationCover'
import WeddingGift from '../../components/WeddingGift'
import GuestBook from '../../components/GuestBook'
import './Sirius.css'

function SiriusCountdown({ targetDate }) {
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
    <div className="sirius-countdown">
      <span className="sirius-countdown-label">Menuju Hari Syukuran Khitan</span>
      <div className="sirius-countdown-digits">
        {[{val: time.d, unit: 'Hari'}, {val: time.h, unit: 'Jam'}, {val: time.m, unit: 'Menit'}, {val: time.s, unit: 'Detik'}].map((item) => (
          <div key={item.unit} className="sirius-digit-block">
            <span className="sirius-digit">{pad(item.val)}</span>
            <span className="sirius-digit-unit">{item.unit}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function IslamicEmblem() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <rect x="12" y="12" width="24" height="24" transform="rotate(45 24 24)" stroke="#c9a84c" strokeWidth="1.5" fill="rgba(201,168,76,0.1)"/>
      <rect x="12" y="12" width="24" height="24" stroke="#ffd778" strokeWidth="1" fill="none"/>
      <circle cx="24" cy="24" r="5" fill="#ffd778"/>
    </svg>
  )
}

export default function Sirius({ data = {} }) {
  const {
    kidName = 'Muhammad Rayyan Al-Fatih',
    nickName = 'Rayyan',
    parents = 'Bapak H. Ilham Fauzi & Ibu Hj. Annisa Rahma',
    doaKhitan = {
      arabic: 'بَارَكَ اللهُ لَكَ فِي الْمَوْهُوْبِ لَكَ، وَشَكَرْتَ الْوَاهِبَ، وَبَلَغَ أَشُدَّهُ، وَرُزِقْتَ بِرَّهُ',
      translation: 'Semoga Allah memberkahimu atas anak yang dianugerahkan kepadamu, semoga engkau bersyukur kepada Sang Pemberi, dan semoga anak ini tumbuh menjadi anak sholeh yang berbakti.',
      ref: 'Doa Keberkahan Anak Sholeh',
    },
    events = [
      {
        tag: '✦ Acara Utama',
        title: 'Walimatul Khitan & Doa Syukuran',
        date: 'Ahad, 14 Juni 2026',
        time: '09.00 — 12.00 WIB',
        venue: 'Kediaman Keluarga Besar Fauzi',
        address: 'Jl. Emerald Sanctuary No. 8, Antapani, Kota Bandung',
        mapsLink: 'https://maps.google.com',
        calendarLink: 'https://calendar.google.com',
      },
      {
        tag: '✦ Ramah Tamah',
        title: 'Jamuan Makan Siang & Tasyakuran',
        date: 'Ahad, 14 Juni 2026',
        time: '12.00 — 15.00 WIB',
        venue: 'Taman Asri Syukuran Rayyan',
        address: 'Jl. Emerald Sanctuary No. 8, Antapani, Kota Bandung',
        mapsLink: 'https://maps.google.com',
      }
    ],
    targetDate = '2026-12-14T09:00:00',
    digitalGifts = [],
    physicalAddress,
    wishes = [],
    closingMessage = 'Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga apabila Bapak / Ibu / Saudara/i berkenan hadir serta memberikan doa restu untuk ananda kami.',
    rsvpLink = 'https://wa.me/628123456789',
    guestName = 'Tamu Undangan',
    brandName = '✦ Undangan Digital · Tema Sirius Khitan',
  } = data

  const [isCoverOpen, setIsCoverOpen] = useState(false)

  return (
    <div className="sirius-root">
      {/* ── Opening Cover ── */}
      <InvitationCover
        isOpen={isCoverOpen}
        onOpen={() => setIsCoverOpen(true)}
        onClose={() => setIsCoverOpen(false)}
        theme="sirius"
        type="khitan"
        title="Walimatul Khitan"
        coupleOrKidName={kidName}
        date={events[0]?.date || '14 Juni 2026'}
        guestName={guestName}
      />

      {isCoverOpen && (
        <div className="invitation-reveal-enter">
          <div className="sirius-page">
            {/* ── Header Crest ── */}
            <header className="sirius-crest-bar">
          <SiriusCrestMotion>
            <div className="sirius-crest-emblem"><IslamicEmblem /></div>
            <span className="sirius-crest-tag">Walimatul Khitan</span>
          </SiriusCrestMotion>
        </header>

        <div className="sirius-frame">
          {/* ── Bismillah ── */}
          <SiriusReveal delay={0.1}>
            <div className="sirius-bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>
          </SiriusReveal>

          {/* ── Doa Khitan ── */}
          {doaKhitan && (
            <SiriusReveal delay={0.2}>
              <div className="sirius-doa-box">
                <p className="sirius-doa-arabic">{doaKhitan.arabic}</p>
                <p className="sirius-doa-trans">"{doaKhitan.translation}"</p>
                <span className="sirius-doa-ref">{doaKhitan.ref}</span>
              </div>
            </SiriusReveal>
          )}

          {/* ── Greeting ── */}
          <SiriusReveal delay={0.1}>
            <div className="sirius-greeting">
              <p>Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan syukuran walimatul khitan putra kami tercinta:</p>
            </div>
          </SiriusReveal>

          {/* ── Boy Section ── */}
          <SiriusReveal delay={0.15}>
            <div className="sirius-boy-section">
              <span className="sirius-boy-badge">Sang Jagoan Pemberani</span>
              <span className="sirius-boy-name">{kidName}</span>
              <span className="sirius-boy-nick">({nickName})</span>
              <p className="sirius-boy-parents">
                Putra tercinta dari: <br/>
                <strong>{parents}</strong>
              </p>
            </div>
          </SiriusReveal>

          {/* ── Events ── */}
          <div className="sirius-events">
            {events.map((ev, idx) => (
              <SiriusCard key={ev.title} delay={idx * 0.12}>
                <article className="sirius-event-card">
                  <span className="sirius-event-tag">{ev.tag}</span>
                  <span className="sirius-event-name">{ev.title}</span>
                  <span className="sirius-event-date">{ev.date}</span>
                  <span className="sirius-event-time">{ev.time}</span>
                  <span className="sirius-event-venue">{ev.venue}</span>
                  <span className="sirius-event-address">{ev.address}</span>
                  <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '12px' }}>
                    {ev.mapsLink && (
                      <a href={ev.mapsLink} target="_blank" rel="noopener noreferrer" className="sirius-btn-maps">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        Lihat Lokasi
                      </a>
                    )}
                    {ev.calendarLink && (
                      <a href={ev.calendarLink} target="_blank" rel="noopener noreferrer" className="sirius-btn-maps" style={{ background: '#c9a84c', color: '#021c13' }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/></svg>
                        Simpan Kalender
                      </a>
                    )}
                  </div>
                </article>
              </SiriusCard>
            ))}
          </div>

          {/* ── Countdown ── */}
          <SiriusReveal delay={0.1}>
            <SiriusCountdown targetDate={targetDate} />
          </SiriusReveal>

          {/* ── Digital Gift / Kado Syukuran ── */}
          {(digitalGifts.length > 0 || physicalAddress) && (
            <SiriusReveal delay={0.1}>
              <WeddingGift
                gifts={digitalGifts}
                physicalAddress={physicalAddress}
                title="Tanda Kasih &amp; Kado Khitan"
                subtitle="Doa restu Anda adalah karunia yang teramat berharga bagi ananda kami. Apabila hendak memberikan tanda kasih, dapat melalui:"
              />
            </SiriusReveal>
          )}

          {/* ── Guest Book ── */}
          <SiriusReveal delay={0.1}>
            <GuestBook
              initialWishes={wishes}
              storageKey="wishes_sirius"
              title="Buku Doa Restu Khitan"
              subtitle="Tuliskan ucapan selamat dan doa keberkahan untuk ananda yang telah berani berkhitan"
            />
          </SiriusReveal>

          {/* ── Closing & RSVP ── */}
          <SiriusReveal delay={0.1}>
            <div className="sirius-closing">
              <p>{closingMessage}</p>
            </div>
            {rsvpLink && (
              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <a href={rsvpLink} target="_blank" rel="noopener noreferrer" className="sirius-btn-rsvp">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  Konfirmasi Kehadiran via WhatsApp
                </a>
              </div>
            )}
          </SiriusReveal>
        </div>

        <footer className="sirius-footer">
          <span className="sirius-footer-brand">{brandName}</span>
        </footer>
      </div>
      </div>
    )}
    </div>
  )
}
