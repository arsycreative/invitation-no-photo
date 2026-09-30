import { motion } from 'framer-motion'

/**
 * LYRA MOTION SUITE — "Soft Botanical Romance & Graceful Bloom"
 * ─────────────────────────────────────────────────────────────
 * Character: Warm, romantic, gentle garden breeze, poetic elegance.
 * Motion: Soft smooth fades, subtle vertical floating, gentle petal
 * drifts, zero tilting or bouncy spring wobbles.
 * ─────────────────────────────────────────────────────────────
 */

const romanticEase = [0.22, 1, 0.36, 1]

/** Organic botanical soft reveal */
export function LyraBloomReveal({
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
      viewport={{ once: true, margin: '200px 0px 200px 0px', amount: 0 }}
      transition={{ duration: 0.85, ease: romanticEase, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

/** Names blossom with graceful romantic poise */
export function LyraRomanticNames({
  children,
  delay = 0.1,
  className = '',
  style = {},
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '200px 0px 200px 0px', amount: 0 }}
      transition={{ duration: 0.95, ease: romanticEase, delay }}
    >
      {children}
    </motion.div>
  )
}

/** Floral sprig that appears gracefully and sways gently like a whisper */
export function LyraBreezeSprig({
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
        x: isLeft ? -18 : 18,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true, margin: '200px 0px 200px 0px', amount: 0 }}
      transition={{ duration: 0.85, ease: romanticEase, delay }}
    >
      {/* Calm subtle breeze sway */}
      <motion.div
        animate={{
          rotate: isLeft ? [-1, 1, -1] : [1, -1, 1],
          y: [-1, 2, -1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

/** Event card with calm romantic presence */
export function LyraPetalCard({
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
      viewport={{ once: true, margin: '200px 0px 200px 0px', amount: 0 }}
      transition={{ duration: 0.8, ease: romanticEase, delay }}
      whileHover={{ y: -3, transition: { duration: 0.25 } }}
    >
      {children}
    </motion.div>
  )
}

/** Soft flourishing divider */
export function LyraFlourishDivider({
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
      viewport={{ once: true, margin: '200px 0px 200px 0px', amount: 0 }}
      transition={{ duration: 0.8, ease: romanticEase, delay }}
    >
      {children}
    </motion.div>
  )
}
