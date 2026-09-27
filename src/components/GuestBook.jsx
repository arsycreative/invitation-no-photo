import { useState, useEffect } from 'react'

/**
 * GUEST BOOK & WISHES COMPONENT
 * ─────────────────────────────────────────────────────────────
 * Interactive greetings & prayer wishes with attendance toggle,
 * live real-time submission, and localStorage persistence.
 * ─────────────────────────────────────────────────────────────
 */
export default function GuestBook({
  initialWishes = [],
  storageKey = 'wishes_guestbook',
  title = 'Doa Restu & Ucapan',
  subtitle = 'Tuliskan doa serta ucapan selamat untuk kedua mempelai',
  themeClass = '',
}) {
  const [wishes, setWishes] = useState([])
  const [name, setName] = useState('')
  const [attendance, setAttendance] = useState('Hadir')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submittedToast, setSubmittedToast] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey)
      if (stored) {
        setWishes(JSON.parse(stored))
      } else {
        setWishes(initialWishes)
      }
    } catch {
      setWishes(initialWishes)
    }
  }, [storageKey])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim() || !message.trim()) return

    setIsSubmitting(true)
    const newWish = {
      id: Date.now(),
      name: name.trim(),
      attendance,
      message: message.trim(),
      time: 'Baru saja',
    }

    const updated = [newWish, ...wishes]
    setWishes(updated)
    try {
      localStorage.setItem(storageKey, JSON.stringify(updated))
    } catch {}

    setName('')
    setMessage('')
    setIsSubmitting(false)
    setSubmittedToast(true)
    setTimeout(() => setSubmittedToast(false), 3000)
  }

  return (
    <section className={`guestbook-section ${themeClass}`}>
      <div className="guestbook-header">
        <h3 className="guestbook-title">{title}</h3>
        <p className="guestbook-subtitle">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="guestbook-form">
        <div className="guestbook-field">
          <label className="guestbook-label">Nama Anda</label>
          <input
            type="text"
            className="guestbook-input"
            placeholder="Contoh: Dimas & Keluarga"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="guestbook-field">
          <label className="guestbook-label">Konfirmasi Kehadiran</label>
          <div className="guestbook-attendance-options">
            {['Hadir', 'Masih Ragu', 'Tidak Hadir'].map((opt) => (
              <label
                key={opt}
                className={`guestbook-radio-btn ${attendance === opt ? 'active' : ''}`}
              >
                <input
                  type="radio"
                  name="attendance"
                  value={opt}
                  checked={attendance === opt}
                  onChange={() => setAttendance(opt)}
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="guestbook-field">
          <label className="guestbook-label">Ucapan &amp; Doa</label>
          <textarea
            className="guestbook-textarea"
            rows="3"
            placeholder="Tuliskan ucapan dan doa terbaik Anda di sini…"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="guestbook-submit-btn" disabled={isSubmitting}>
          {isSubmitting ? 'Mengirimkan…' : 'Kirim Ucapan & Doa'}
        </button>

        {submittedToast && (
          <div className="guestbook-toast">
            ✓ Terima kasih! Ucapan &amp; doa Anda telah terkirim.
          </div>
        )}
      </form>

      {/* List of wishes */}
      <div className="guestbook-list">
        <div className="guestbook-count">
          <span>{wishes.length} Ucapan Diterima</span>
        </div>

        <div className="guestbook-messages">
          {wishes.map((w, i) => (
            <div key={w.id || i} className="guestbook-item">
              <div className="guestbook-item-header">
                <div className="guestbook-avatar">
                  {w.name ? w.name.charAt(0).toUpperCase() : 'G'}
                </div>
                <div className="guestbook-author-meta">
                  <span className="guestbook-author-name">{w.name}</span>
                  <span className="guestbook-item-time">{w.time || 'Beberapa saat lalu'}</span>
                </div>
                <span className={`guestbook-badge-attendance ${
                  w.attendance === 'Hadir' ? 'attend-yes' :
                  w.attendance === 'Tidak Hadir' ? 'attend-no' : 'attend-maybe'
                }`}>
                  {w.attendance || 'Hadir'}
                </span>
              </div>
              <p className="guestbook-item-msg">{w.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
