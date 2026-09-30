import { motion } from 'framer-motion'

/**
 * CASTOR MOTION SUITE — "Royal Prestige & Regal Elegance"
 * ─────────────────────────────────────────────────────────────
 * Character: Stately, imperial, sovereign majesty, refined composure.
 * Motion: Smooth regal fades, gentle dignified vertical entrances,
 * authoritative emblem presence, zero harsh spring bounces or cuts.
 * ─────────────────────────────────────────────────────────────
 */

const royalEase = [0.22, 1, 0.36, 1]
const standardViewport = { once: true, margin: '200px 0px 200px 0px', amount: 0 }

/** Stately regal scroll reveal */
export function CastorCurtainReveal({
  children,
  delay = 0,
  duration = 0.85,
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
      transition={{ duration, ease: royalEase, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

/** Authoritative royal crest emblem with dignified descent */
export function CastorWaxSealStamp({
  children,
  delay = 0.15,
  className = '',
  style = {},
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, scale: 0.95, y: -8 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={standardViewport}
      transition={{ duration: 0.8, ease: royalEase, delay }}
    >
      {children}
    </motion.div>
  )
}

/** Baroque gold filigree ornament with dignified presence */
export function CastorBaroqueOrnament({
  children,
  side = 'left',
  delay = 0.15,
  className = '',
  style = {},
}) {
  const isLeft = side === 'left'

  return (
    <motion.div
      className={className}
      style={{
        pointerEvents: 'none',
        position: 'absolute',
        ...style,
      }}
      initial={{
        opacity: 0,
        x: isLeft ? -16 : 16,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={standardViewport}
      transition={{ duration: 0.85, ease: royalEase, delay }}
    >
      {/* Calm subtle shimmer */}
      <motion.div
        animate={{
          opacity: [0.9, 1, 0.9],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

/** Imperial names grand proclamation */
export function CastorImperialNames({
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
      viewport={standardViewport}
      transition={{ duration: 0.95, ease: royalEase, delay }}
    >
      {children}
    </motion.div>
  )
}

/** Symmetrical monarch divider expanding outward from center */
export function CastorMonarchDivider({
  children,
  delay = 0.1,
  className = '',
  style = {},
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, scaleX: 0.6 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={standardViewport}
      transition={{ duration: 0.8, ease: royalEase, delay }}
    >
      {children}
    </motion.div>
  )
}

/** Royal decree parchment event card */
export function CastorDecreeCard({
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
      transition={{ duration: 0.8, ease: royalEase, delay }}
      whileHover={{ y: -3, transition: { duration: 0.25 } }}
    >
      {children}
    </motion.div>
  )
}
