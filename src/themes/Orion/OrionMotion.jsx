import { motion } from 'framer-motion'

/**
 * ORION MOTION SUITE — "Cosmic Hero & High-Tech Prestige"
 * ─────────────────────────────────────────────────────────────
 * Character: High-tech, futuristic galactic superhero, premium neon.
 * Motion: Crisp confident entrances, subtle kinetic glides,
 * glowing ambient energy, zero violent slams or dizzying spins.
 * ─────────────────────────────────────────────────────────────
 */

const cosmicEase = [0.22, 1, 0.36, 1]

/** Confident cosmic hero entrance */
export function OrionComicSlam({
  children,
  delay = 0,
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
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: cosmicEase, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

/** Sleek kinetic glide with smooth presence */
export function OrionKineticThrust({
  children,
  direction = 'left',
  distance = 20,
  delay = 0,
  className = '',
  style = {},
  ...rest
}) {
  const isLeft = direction === 'left'
  const x = isLeft ? -distance : distance

  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: cosmicEase, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

/** Sleek heroic rank badge */
export function OrionShockwaveBadge({
  children,
  delay = 0.15,
  className = '',
  style = {},
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75, ease: cosmicEase, delay }}
      whileHover={{ scale: 1.05, transition: { duration: 0.25 } }}
    >
      {children}
    </motion.div>
  )
}

/** Starburst energy ornament with refined cosmic gleam */
export function OrionEnergyBurst({
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
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: cosmicEase, delay }}
    >
      {/* Calm subtle energy shimmer */}
      <motion.div
        animate={{
          opacity: [0.85, 1, 0.85],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

/** Action card with high-tech poise */
export function OrionSpeedCard({
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
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: cosmicEase, delay }}
      whileHover={{ y: -3, transition: { duration: 0.25 } }}
    >
      {children}
    </motion.div>
  )
}
