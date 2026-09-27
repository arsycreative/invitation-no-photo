import { useState } from 'react'

/**
 * WEDDING GIFT / AMPLOP DIGITAL
 * ─────────────────────────────────────────────────────────────
 * Bank accounts, e-wallets, and physical gift address
 * with 1-click clipboard copy + interactive toast.
 * ─────────────────────────────────────────────────────────────
 */
export default function WeddingGift({
  gifts = [],
  physicalAddress = null,
  title = 'Tanda Kasih',
  subtitle = 'Doa restu Anda merupakan karunia terindah bagi kami. Namun apabila Anda hendak memberikan tanda kasih, dapat melalui:',
  themeClass = '',
}) {
  const [copiedKey, setCopiedKey] = useState(null)

  const copyText = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedKey(key)
      setTimeout(() => setCopiedKey(null), 2500)
    }).catch(() => {
      // fallback
      setCopiedKey(key)
      setTimeout(() => setCopiedKey(null), 2500)
    })
  }

  if ((!gifts || gifts.length === 0) && !physicalAddress) return null

  return (
    <section className={`gift-section ${themeClass}`}>
      <div className="gift-header">
        <h3 className="gift-title">{title}</h3>
        <p className="gift-subtitle">{subtitle}</p>
      </div>

      <div className="gift-cards-grid">
        {gifts.map((g, idx) => (
          <div key={idx} className="gift-card">
            <div className="gift-card-top">
              <span className="gift-bank-name">{g.bank}</span>
              <span className="gift-badge">{g.note || 'Transfer Bank'}</span>
            </div>

            <div className="gift-card-mid">
              <span className="gift-account-number">{g.number}</span>
              <span className="gift-account-name">a.n. {g.owner}</span>
            </div>

            <button
              type="button"
              className={`gift-copy-btn ${copiedKey === `bank-${idx}` ? 'copied' : ''}`}
              onClick={() => copyText(g.number, `bank-${idx}`)}
            >
              {copiedKey === `bank-${idx}` ? (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Tersalin!</span>
                </>
              ) : (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                  <span>Salin No. Rekening</span>
                </>
              )}
            </button>
          </div>
        ))}

        {physicalAddress && (
          <div className="gift-card gift-card--physical">
            <div className="gift-card-top">
              <span className="gift-bank-name">📦 Kirim Kado Fisik</span>
              <span className="gift-badge">Alamat</span>
            </div>

            <div className="gift-card-mid">
              <span className="gift-recipient">Penerima: {physicalAddress.recipient}</span>
              {physicalAddress.phone && <span className="gift-phone">Telp: {physicalAddress.phone}</span>}
              <p className="gift-address-text">{physicalAddress.address}</p>
            </div>

            <button
              type="button"
              className={`gift-copy-btn ${copiedKey === 'address' ? 'copied' : ''}`}
              onClick={() => copyText(physicalAddress.address, 'address')}
            >
              {copiedKey === 'address' ? (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Alamat Tersalin!</span>
                </>
              ) : (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                  <span>Salin Alamat Lengkap</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
