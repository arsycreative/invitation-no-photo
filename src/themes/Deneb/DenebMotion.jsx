import { motion } from 'framer-motion'

/**
 * DENEB MOTION SUITE — "Pastel Party & Graceful Sweet Celebration"
 * ─────────────────────────────────────────────────────────────
 * Character: Charming, delightful, sweet, joyful birthday elegance.
 * Motion: Soft gentle floating, subtle celebratory presence,
 * calm ambient balloon drift, zero violent squishes or rubber bounces.
 * ─────────────────────────────────────────────────────────────
 */

const pastelEase = [0.22, 1, 0.36, 1]
const standardViewport = { once: true, margin: '200px 0px 200px 0px', amount: 0 }

/** Gentle pastel scroll reveal */
export function DenebJellyDrop({
  children,
  delay = 0,
  duration = 0.8,
  className = '',
  style = {},
  ...rest
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={standardViewport}
      transition={{ duration, ease: pastelEase, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

/** Sweet celebration bubble entrance */
export function DenebBubblePop({
  children,
  delay = 0,
  className = '',
  style = {},
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={standardViewport}
      transition={{ duration: 0.75, ease: pastelEase, delay }}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.25 },
      }}
    >
      {children}
    </motion.div>
  )
}

/** Floating balloon with gentle, serene float */
export function DenebWobbleBalloon({
  children,
  index = 0,
  className = '',
  style = {},
}) {
  const durations = [5.0, 4.5, 5.5, 4.8, 5.2]
  const dur = durations[index % durations.length]

  return (
    <motion.span
      className={className}
      style={{ display: 'inline-block', ...style }}
      animate={{
        y: [-3, 4, -3],
      }}
      transition={{
        duration: dur,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      whileHover={{ scale: 1.1 }}
    >
      {children}
    </motion.span>
  )
}

/** Pastel party ribbon ornament with soft arrival */
export function DenebPartyStreamer({
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
      viewport={standardViewport}
      transition={{ duration: 0.8, ease: pastelEase, delay }}
    >
      {/* Calm sweet ambient drift */}
      <motion.div
        animate={{
          y: [-2, 3, -2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

/** Soft elegant hover for cards */
export function DenebSquishyCard({
  children,
  delay = 0,
  className = '',
  style = {},
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={standardViewport}
      transition={{ duration: 0.8, ease: pastelEase, delay }}
      whileHover={{ y: -3, transition: { duration: 0.25 } }}
    >
      {children}
    </motion.div>
  )
}
