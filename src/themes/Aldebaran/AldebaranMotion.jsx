import { motion } from 'framer-motion'

const islamicEase = [0.22, 1, 0.36, 1]
const standardViewport = { once: true, margin: '200px 0px 200px 0px', amount: 0 }
const isStaticOrHeadless = typeof window !== 'undefined' && (
  window.location.search.includes('catalog') ||
  Boolean(navigator.webdriver) ||
  window.location.search.includes('static')
)

/** Hero elements animate directly upon mount without relying on IntersectionObserver */
export function AldebaranHeroReveal({
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
      initial={isStaticOrHeadless ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, ease: islamicEase, delay: isStaticOrHeadless ? 0 : delay }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export function AldebaranReveal({
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
      initial={isStaticOrHeadless ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={standardViewport}
      transition={{ duration: 0.85, ease: islamicEase, delay: isStaticOrHeadless ? 0 : delay }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export function AldebaranCrestMotion({ children, delay = 0.08 }) {
  return (
    <motion.div
      initial={isStaticOrHeadless ? false : { opacity: 0, scale: 0.92, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, ease: islamicEase, delay: isStaticOrHeadless ? 0 : delay }}
    >
      {children}
    </motion.div>
  )
}

export function AldebaranScaleIn({ children, delay = 0.1, className = '', style = {} }) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={isStaticOrHeadless ? false : { opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={standardViewport}
      transition={{ duration: 0.85, ease: islamicEase, delay: isStaticOrHeadless ? 0 : delay }}
    >
      {children}
    </motion.div>
  )
}

export function AldebaranCard({ children, delay = 0, className = '', style = {} }) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={isStaticOrHeadless ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={standardViewport}
      transition={{ duration: 0.8, ease: islamicEase, delay: isStaticOrHeadless ? 0 : delay }}
      whileHover={{ y: -3, transition: { duration: 0.25 } }}
    >
      {children}
    </motion.div>
  )
}
