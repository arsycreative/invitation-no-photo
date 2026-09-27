/**
 * EVENT RUNDOWN / AGENDA PESTA
 * ─────────────────────────────────────────────────────────────
 * Rundown of birthday activities and timeline.
 * ─────────────────────────────────────────────────────────────
 */
export default function EventRundown({
  rundown = [],
  title = 'Rundown Acara Seru',
  subtitle = 'Jangan sampai terlewat keseruan setiap momen pestanya ya!',
  themeClass = '',
}) {
  if (!rundown || rundown.length === 0) return null

  return (
    <section className={`rundown-section ${themeClass}`}>
      <div className="rundown-header">
        <h3 className="rundown-title">{title}</h3>
        <p className="rundown-subtitle">{subtitle}</p>
      </div>

      <div className="rundown-timeline">
        {rundown.map((item, idx) => (
          <div key={idx} className="rundown-item">
            <div className="rundown-time-badge">
              <span>{item.time}</span>
            </div>
            <div className="rundown-content">
              <h4 className="rundown-item-title">{item.title}</h4>
              <p className="rundown-item-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
