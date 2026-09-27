/**
 * SCROLL ANIMATION COMPONENTS
 * ─────────────────────────────────────────────────────
 * Shared building-block components for scroll-triggered
 * section reveals and decorative ornament entrance.
 *
 * Used by all themes to create the "welcoming" feel
 * where each section animates in as you scroll.
 * ─────────────────────────────────────────────────────
 */

import { motion } from 'framer-motion'

/* ═════════════════════════════════════════════════════════
   SECTION REVEAL — wraps a section and animates it in
   on scroll. Uses whileInView for scroll-triggered entry.
   ═════════════════════════════════════════════════════════ */

const defaultTransition = {
  duration: 0.75,
  ease: [0.22, 1, 0.36, 1], // custom ease-out
}

/** 
 * Section — Scroll-triggered section reveal wrapper.
 * Animates children in from below/fade when scrolled into view.
 * 
 * @param {string} direction - 'up'|'down'|'left'|'right' entrance direction
 * @param {number} distance  - px to travel (default 40)
 * @param {number} delay     - delay in seconds
 * @param {number} duration  - anim duration in seconds
 * @param {object} style     - extra inline styles
 */
export function Section({
  children, direction = 'up', distance = 40, delay = 0,
  duration, style, className, ...rest
}) {
  const axis = direction === 'left' || direction === 'right' ? 'x' : 'y'
  const sign = direction === 'up' || direction === 'left' ? 1 : -1

  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, [axis]: distance * sign }}
      whileInView={{ opacity: 1, [axis]: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ ...defaultTransition, duration: duration ?? 0.75, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

/* ═════════════════════════════════════════════════════════
   ORNAMENT — An SVG ornament that slides in from a side.
   Perfect for leaf/floral elements on section edges.
   ═════════════════════════════════════════════════════════ */

/**
 * Ornament — slides & fades an SVG ornament from a side.
 * 
 * @param {'left'|'right'} side - which side it enters from
 * @param {number} distance     - how far off-screen it starts
 * @param {number} delay        - entrance delay
 * @param {React.ReactNode} children - the SVG/element
 */
export function Ornament({
  children, side = 'left', distance = 60, delay = 0.2,
  duration = 0.9, className, style, rotate = 0, ...rest
}) {
  const x = side === 'left' ? -distance : distance

  return (
    <motion.div
      className={className}
      style={{ pointerEvents: 'none', ...style }}
      initial={{ opacity: 0, x, rotate: rotate * (side === 'left' ? -1 : 1) }}
      whileInView={{ opacity: 1, x: 0, rotate: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

/* ═════════════════════════════════════════════════════════
   SCALE IN — appears with a scale+fade from center.
   Good for dividers, icons, badges.
   ═════════════════════════════════════════════════════════ */

export function ScaleIn({
  children, delay = 0, duration = 0.6,
  className, style, ...rest
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

/* ═════════════════════════════════════════════════════════
   STAGGER CHILDREN — wraps children and staggers each.
   ═════════════════════════════════════════════════════════ */

export function StaggerGroup({
  children, stagger = 0.1, className, style, ...rest
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

/** Child item for StaggerGroup */
export function StaggerItem({
  children, direction = 'up', distance = 30,
  className, style, ...rest
}) {
  const axis = direction === 'left' || direction === 'right' ? 'x' : 'y'
  const sign = direction === 'up' || direction === 'left' ? 1 : -1
  return (
    <motion.div
      className={className}
      style={style}
      variants={{
        hidden: { opacity: 0, [axis]: distance * sign },
        show:   { opacity: 1, [axis]: 0, transition: defaultTransition },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

/* ═════════════════════════════════════════════════════════
   ORNAMENT PAIR — two ornaments that slide in from
   opposite sides, flanking a section. Used at section
   boundaries for the "welcoming" feel.
   ═════════════════════════════════════════════════════════ */

export function OrnamentPair({
  left, right, delay = 0.1, distance = 50,
  className, style,
}) {
  return (
    <div className={className} style={{ position: 'relative', ...style }}>
      <Ornament side="left" distance={distance} delay={delay}
        style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }}>
        {left}
      </Ornament>
      <Ornament side="right" distance={distance} delay={delay + 0.08}
        style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}>
        {right}
      </Ornament>
    </div>
  )
}
