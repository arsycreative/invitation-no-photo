import { motion } from 'framer-motion'

/**
 * ALTAIR MOTION SUITE — "Modern Minimalist & Architectural Vogue"
 * ─────────────────────────────────────────────────────────────
 * Character: Architectural, haute couture, Swiss editorial precision.
 * Motion: Crisp smooth vertical reveals, precise razor lines,
 * continuous serene marquee ticker, zero jarring overflow jumps.
 * ─────────────────────────────────────────────────────────────
 */

const editorialEase = [0.22, 1, 0.36, 1]

/** Editorial typography and component reveal */
export function AltairMaskReveal({
  children,
  delay = 0,
  distance = 24,
  duration = 0.8,
  className = '',
  style = {},
  ...rest
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration, ease: editorialEase, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

/** Razor-sharp architectural line drawing across the screen */
export function AltairRazorLine({
  delay = 0.1,
  className = '',
  style = {},
  origin = 'left',
}) {
  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <motion.div
        className={className}
        style={{
          transformOrigin: origin,
          ...style,
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.85, ease: editorialEase, delay }}
      />
    </div>
  )
}

/** Crisp geometric angular ornament with architectural poise */
export function AltairGeometricOrnament({
  children,
  side = 'left',
  delay = 0.1,
  className = '',
  style = {},
}) {
  const isLeft = side === 'left'

  return (
    <motion.div
      className={className}
      style={{ pointerEvents: 'none', position: 'absolute', ...style }}
      initial={{
        opacity: 0,
        x: isLeft ? -16 : 16,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.8, ease: editorialEase, delay }}
    >
      {children}
    </motion.div>
  )
}

/** Architectural event card entering with crisp editorial composure */
export function AltairArchitecturalCard({
  children,
  index = 0,
  delay = 0,
  className = '',
  style = {},
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: editorialEase, delay }}
      whileHover={{ y: -3, transition: { duration: 0.25 } }}
    >
      {children}
    </motion.div>
  )
}

/** Continuous running editorial marquee ticker tape with serene speed */
export function AltairMarqueeTicker({ text = 'THE WEDDING CELEBRATION • LOVE • HONOR • FOREVER TOGETHER • ' }) {
  return (
    <div
      style={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        display: 'flex',
        borderTop: '1px solid #e5e7eb',
        borderBottom: '1px solid #e5e7eb',
        padding: '10px 0',
        margin: '28px 0',
        letterSpacing: '0.22em',
        fontSize: '10px',
        fontWeight: '600',
        textTransform: 'uppercase',
        color: '#9c7a28',
      }}
    >
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
        style={{ display: 'inline-flex', flexShrink: 0 }}
      >
        <span>{text} {text}</span>
        <span>{text} {text}</span>
      </motion.div>
    </div>
  )
}
