import { motion } from 'framer-motion'

const babyEase = [0.22, 1, 0.36, 1]
const standardViewport = { once: true, margin: '200px 0px 200px 0px', amount: 0 }
const isStaticOrHeadless = typeof window !== 'undefined' && (
  window.location.search.includes('catalog') ||
  Boolean(navigator.webdriver) ||
  window.location.search.includes('static')
)

/** Hero elements animate directly upon mount without relying on IntersectionObserver */
export function RigelHeroReveal({
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
      transition={{ duration: 0.75, ease: babyEase, delay: isStaticOrHeadless ? 0 : delay }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export function RigelReveal({
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
      transition={{ duration: 0.75, ease: babyEase, delay: isStaticOrHeadless ? 0 : delay }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export function RigelCrestMotion({ children, delay = 0.1 }) {
  return (
    <motion.div
      initial={isStaticOrHeadless ? false : { opacity: 0, scale: 0.9, y: -12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.85, ease: babyEase, delay: isStaticOrHeadless ? 0 : delay }}
    >
      {children}
    </motion.div>
  )
}

export function RigelScaleIn({ children, delay = 0.1, className = '', style = {} }) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={isStaticOrHeadless ? false : { opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={standardViewport}
      transition={{ duration: 0.75, ease: babyEase, delay: isStaticOrHeadless ? 0 : delay }}
    >
      {children}
    </motion.div>
  )
}

export function RigelCard({ children, delay = 0, className = '', style = {} }) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={isStaticOrHeadless ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={standardViewport}
      transition={{ duration: 0.8, ease: babyEase, delay: isStaticOrHeadless ? 0 : delay }}
      whileHover={{ y: -3, transition: { duration: 0.25 } }}
    >
      {children}
    </motion.div>
  )
}
