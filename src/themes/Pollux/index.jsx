import { useState, useEffect } from 'react'
import { PolluxReveal, PolluxCard } from './PolluxMotion'
import InvitationCover from '../../components/InvitationCover'
import WeddingGift from '../../components/WeddingGift'
import GuestBook from '../../components/GuestBook'
import './Pollux.css'

function PolluxCountdown({ targetDate }) {
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
    <div className="pollux-countdown">
      <span className="pollux-countdown-label">Menuju Hari Tasyakuran Aqiqah</span>
      <div className="pollux-countdown-digits">
        {[{val: time.d, unit: 'Hari'}, {val: time.h, unit: 'Jam'}, {val: time.m, unit: 'Menit'}, {val: time.s, unit: 'Detik'}].map((item) => (
          <div key={item.unit} className="pollux-digit-block">
            <span className="pollux-digit">{pad(item.val)}</span>
            <span className="pollux-digit-unit">{item.unit}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function CrescentStar() {
  return (
    <svg width="44" height="44" viewBox="0 0 40 40" fill="none">
      <path d="M22 6C13.1634 6 6 13.1634 6 22C6 30.8366 13.1634 38 22 38C26.4183 38 30.4183 36.2091 33.3137 33.3137C25.5 33 19 26.5 19 19C19 13.2 22.4 8.2 27.5 6.2C25.8 6.1 23.9 6 22 6Z" fill="#a4823e"/>
      <polygon points="30,8 32,13 37,13 33,16 34.5,21 30,18 25.5,21 27,16 23,13 28,13" fill="#cbb074"/>
    </svg>
  )
}

export default function Pollux({ data = {} }) {
  const {
    babyName = 'Azkadina Rayna Humaira',
    nickName = 'Azkadina',
    meaning = 'Wanita sholehah yang taat pada agama, berjiwa murni laksana ratu pembawa cahaya kedamaian.',
    birthDate = 'Senin, 18 Mei 2026',
    weight = '3.3 kg',
    length = '50 cm',
    parents = 'Bapak Reza Mahendra & Ibu Sarah Amalia',
    holyVerse = {
      arabic: 'كُلُّ غُلَامٍ رَهِينَةٌ بِعَقِيقَتِهِ تُذْبَحُ عَنْهُ يَوْمَ سَابِعِهِ وَيُحْلَقُ وَيُسَمَّى',
      translation: 'Setiap anak tergadaikan dengan aqiqahnya, disembelihkan untuknya pada hari ketujuh, dicukur rambutnya dan diberi nama.',
      ref: 'HR. Abu Dawud & At-Tirmidzi',
    },
    events = [
      {
        tag: '✦ Prosesi Utama',
        title: 'Tasyakuran & Pembacaan Sholawat',
        date: 'Ahad, 21 Juni 2026',
        time: '09.30 — 11.30 WIB',
        venue: 'Kediaman Keluarga Mahendra',
        address: 'Jl. Taman Sari Indah No. 12, Sukajadi, Kota Bandung',
        mapsLink: 'https://maps.google.com',
        calendarLink: 'https://calendar.google.com',
      },
      {
        tag: '✦ Jamuan Kasih',
        title: 'Santap Siang & Doa Keberkahan',
        date: 'Ahad, 21 Juni 2026',
        time: '11.30 — 14.30 WIB',
        venue: 'Kediaman Keluarga Mahendra',
        address: 'Jl. Taman Sari Indah No. 12, Sukajadi, Kota Bandung',
        mapsLink: 'https://maps.google.com',
      }
    ],
    targetDate = '2026-12-21T09:30:00',
    digitalGifts = [],
    physicalAddress,
    wishes = [],
    closingMessage = 'Tiada kata yang dapat kami sampaikan selain rasa syukur dan terima kasih yang mendalam atas kehadiran serta doa restu Bapak / Ibu / Saudara/i untuk putri kecil kami.',
    rsvpLink = 'https://wa.me/628123456789',
    guestName = 'Tamu Undangan',
    brandName = '✦ Undangan Digital · Tema Pollux Aqiqah',
  } = data

  const [isCoverOpen, setIsCoverOpen] = useState(false)

  return (
    <div className="pollux-root">
      {/* ── Opening Cover ── */}
      <InvitationCover
        isOpen={isCoverOpen}
        onOpen={() => setIsCoverOpen(true)}
        onClose={() => setIsCoverOpen(false)}
        theme="pollux"
        type="aqiqah"
        title="Tasyakuran Aqiqah"
        coupleOrKidName={babyName}
        date={events[0]?.date || '21 Juni 2026'}
        guestName={guestName}
      />

      {isCoverOpen && (
        <div className="invitation-reveal-enter">
          <div className="pollux-page">
            {/* ── Header ── */}
            <header className="pollux-header">
          <PolluxReveal delay={0.1}>
            <span className="pollux-tag">Tasyakuran Kelahiran &amp; Aqiqah</span>
            <div className="pollux-bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>
            <h1 className="pollux-title">Alhamdulillah Telah Lahir</h1>
          </PolluxReveal>
        </header>

        <div className="pollux-body">
          {/* ── Kalam Ilahi / Hadits ── */}
          {holyVerse && (
            <PolluxReveal delay={0.15}>
              <div className="holy-verse-box">
                <p className="holy-verse-arabic">{holyVerse.arabic}</p>
                <p className="holy-verse-trans">"{holyVerse.translation}"</p>
                <span className="holy-verse-ref">{holyVerse.ref}</span>
              </div>
            </PolluxReveal>
          )}

          {/* ── Newborn Botanical Birth Passport & Certificate ── */}
          <PolluxReveal delay={0.2}>
            <div className="pollux-passport-card">
              <div className="pollux-passport-header">
                <span className="pollux-passport-stamp">★ OFFICIAL BIRTH RECORD ★</span>
                <span className="pollux-passport-cert">SERTIFIKAT KELAHIRAN &amp; AQIQAH</span>
              </div>

              <div className="pollux-baby-icon"><CrescentStar /></div>
              <span className="pollux-baby-name">{babyName}</span>
              <span className="pollux-baby-nick">Panggilan Kasih: "{nickName}"</span>

              {meaning && (
                <div className="pollux-baby-meaning-box">
                  <span className="pollux-meaning-label">Makna Doa di Balik Nama:</span>
                  <p className="pollux-meaning-text">"{meaning}"</p>
                </div>
              )}

              <p className="pollux-parents-credit">
                Putri pertama dari pasangan bahagia:<br/>
                <strong className="pollux-parents-highlight">{parents}</strong>
              </p>

              {/* 4-Quadrant Birth Registry Matrix */}
              <div className="pollux-passport-grid">
                <div className="pollux-grid-quad">
                  <span className="pollux-quad-icon">🗓️</span>
                  <span className="pollux-quad-lbl">TANGGAL LAHIR</span>
                  <strong className="pollux-quad-val">{birthDate}</strong>
                </div>
                <div className="pollux-grid-quad">
                  <span className="pollux-quad-icon">⚖️</span>
                  <span className="pollux-quad-lbl">BERAT LAHIR</span>
                  <strong className="pollux-quad-val">{weight}</strong>
                </div>
                <div className="pollux-grid-quad">
                  <span className="pollux-quad-icon">📏</span>
                  <span className="pollux-quad-lbl">PANJANG BADAN</span>
                  <strong className="pollux-quad-val">{length}</strong>
                </div>
                <div className="pollux-grid-quad">
                  <span className="pollux-quad-icon">🕊️</span>
                  <span className="pollux-quad-lbl">STATUS AQIQAH</span>
                  <strong className="pollux-quad-val">Walimatul Aqiqah</strong>
                </div>
              </div>
            </div>
          </PolluxReveal>

          {/* ── Greeting ── */}
          <PolluxReveal delay={0.1}>
            <div className="pollux-closing" style={{ marginBottom: '28px' }}>
              <p>Sebagai wujud rasa syukur atas amanah terindah yang Allah titipkan, kami mengundang Bapak / Ibu / Saudara/i untuk hadir pada acara syukuran aqiqah:</p>
            </div>
          </PolluxReveal>

          {/* ── Events ── */}
          <div className="pollux-events">
            {events.map((ev, idx) => (
              <PolluxCard key={ev.title} delay={idx * 0.12}>
                <article className="pollux-event-card">
                  <span className="pollux-event-tag">{ev.tag}</span>
                  <span className="pollux-event-name">{ev.title}</span>
                  <span className="pollux-event-date">{ev.date}</span>
                  <span className="pollux-event-time">{ev.time}</span>
                  <span className="pollux-event-venue">{ev.venue}</span>
                  <span className="pollux-event-address">{ev.address}</span>
                  <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '12px' }}>
                    {ev.mapsLink && (
                      <a href={ev.mapsLink} target="_blank" rel="noopener noreferrer" className="pollux-btn-maps">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        Lihat Lokasi
                      </a>
                    )}
                    {ev.calendarLink && (
                      <a href={ev.calendarLink} target="_blank" rel="noopener noreferrer" className="pollux-btn-maps" style={{ background: 'var(--gold)', color: '#ffffff' }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/></svg>
                        Simpan Kalender
                      </a>
                    )}
                  </div>
                </article>
              </PolluxCard>
            ))}
          </div>

          {/* ── Countdown ── */}
          <PolluxReveal delay={0.1}>
            <PolluxCountdown targetDate={targetDate} />
          </PolluxReveal>

          {/* ── Digital Gift ── */}
          {(digitalGifts.length > 0 || physicalAddress) && (
            <PolluxReveal delay={0.1}>
              <WeddingGift
                gifts={digitalGifts}
                physicalAddress={physicalAddress}
                title="Tanda Kasih untuk Buah Hati"
                subtitle="Doa restu Anda adalah karunia terindah bagi keluarga kami. Namun jika ingin memberikan kado kasih untuk si kecil, dapat melalui:"
              />
            </PolluxReveal>
          )}

          {/* ── Guest Book ── */}
          <PolluxReveal delay={0.1}>
            <GuestBook
              initialWishes={wishes}
              storageKey="wishes_pollux"
              title="Doa &amp; Harapan untuk Buah Hati"
              subtitle="Sampaikan doa tulus agar kelak tumbuh menjadi anak yang sholehah, sehat, dan berbakti"
            />
          </PolluxReveal>

          {/* ── Closing & RSVP ── */}
          <PolluxReveal delay={0.1}>
            <div className="pollux-closing">
              <p>{closingMessage}</p>
            </div>
            {rsvpLink && (
              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <a href={rsvpLink} target="_blank" rel="noopener noreferrer" className="pollux-btn-rsvp">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  Konfirmasi Kehadiran via WhatsApp
                </a>
              </div>
            )}
          </PolluxReveal>
        </div>

        <footer className="pollux-footer">
          <span className="pollux-footer-brand">{brandName}</span>
        </footer>
      </div>
      </div>
    )}
    </div>
  )
}
