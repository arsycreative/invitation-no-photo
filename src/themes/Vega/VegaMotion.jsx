import { motion } from 'framer-motion'

/**
 * VEGA MOTION SUITE — "Celestial Starlight & Royal Stature"
 * ─────────────────────────────────────────────────────────────
 * Character: Dignified, luxurious, serene celestial grace.
 * Motion: Soft silk-like opacity fades, subtle vertical drifts,
 * calm ambient starlight breathing, zero harsh jumps or blurs.
 * ─────────────────────────────────────────────────────────────
 */

const luxuryEase = [0.22, 1, 0.36, 1]

/** Smooth, dignified scroll reveal */
export function VegaReveal({
  children,
  delay = 0,
  duration = 0.85,
  distance = 18,
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
      viewport={{ once: true, margin: '200px 0px 200px 0px', amount: 0 }}
      transition={{ duration, ease: luxuryEase, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

/** Grand names entrance with calm presence */
export function VegaNamesEntrance({
  children,
  delay = 0.1,
  className = '',
  style = {},
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '200px 0px 200px 0px', amount: 0 }}
      transition={{ duration: 0.95, ease: luxuryEase, delay }}
    >
      {children}
    </motion.div>
  )
}

/** Celestial starlight ornament with subtle, calm drift */
export function VegaFloatingOrnament({
  children,
  side = 'left',
  distance = 25,
  delay = 0.15,
  className = '',
  style = {},
}) {
  const xOffset = side === 'left' ? -distance : distance

  return (
    <motion.div
      className={`vega-floating-ornament vega-ornament-${side} ${className}`}
      style={{ pointerEvents: 'none', position: 'absolute', ...style }}
      initial={{ opacity: 0, x: xOffset }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '200px 0px 200px 0px', amount: 0 }}
      transition={{ duration: 0.9, ease: luxuryEase, delay }}
    >
      {/* Calm ambient float */}
      <motion.div
        animate={{
          y: [-2, 3, -2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

/** Constellation divider expanding calmly from center */
export function VegaConstellationDivider({
  children,
  delay = 0.15,
  className = '',
  style = {},
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, scaleX: 0.6 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: luxuryEase, delay }}
    >
      {children}
    </motion.div>
  )
}

/** Celestial card with smooth elevated presence */
export function VegaCard({
  children,
  delay = 0,
  className = '',
  style = {},
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: luxuryEase, delay }}
      whileHover={{ y: -3, transition: { duration: 0.25 } }}
    >
      {children}
    </motion.div>
  )
}
