/**
 * LOVE STORY / OUR JOURNEY TIMELINE
 * ─────────────────────────────────────────────────────────────
 * Timeline of how the couple met, grew together, and got engaged.
 * ─────────────────────────────────────────────────────────────
 */
export default function LoveStory({
  stories = [],
  title = 'Kisah Cinta Kami',
  subtitle = 'Setiap cerita cinta itu indah, namun kisah kami adalah favorit kami',
  themeClass = '',
}) {
  if (!stories || stories.length === 0) return null

  return (
    <section className={`story-section ${themeClass}`}>
      <div className="story-header">
        <h3 className="story-title">{title}</h3>
        <p className="story-subtitle">{subtitle}</p>
      </div>

      <div className="story-timeline">
        {stories.map((s, idx) => (
          <div key={idx} className="story-node">
            <div className="story-node-left">
              <span className="story-year">{s.year}</span>
              <div className="story-dot" />
              {idx < stories.length - 1 && <div className="story-line" />}
            </div>
            <div className="story-node-content">
              <h4 className="story-node-title">{s.title}</h4>
              <p className="story-node-desc">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
