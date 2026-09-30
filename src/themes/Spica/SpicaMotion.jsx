import { motion } from 'framer-motion'

const terracottaEase = [0.22, 1, 0.36, 1]
const standardViewport = { once: true, margin: '200px 0px 200px 0px', amount: 0 }
const isCatalogMode = typeof window !== 'undefined' && window.location.search.includes('catalog')

export function SpicaReveal({
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
      initial={isCatalogMode ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={standardViewport}
      transition={{ duration: 0.75, ease: terracottaEase, delay: isCatalogMode ? 0 : delay }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export function SpicaCrestMotion({ children, delay = 0.1 }) {
  return (
    <motion.div
      initial={isCatalogMode ? false : { opacity: 0, scale: 0.9, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={standardViewport}
      transition={{ duration: 0.8, ease: terracottaEase, delay: isCatalogMode ? 0 : delay }}
    >
      {children}
    </motion.div>
  )
}

export function SpicaScaleIn({ children, delay = 0.1, className = '', style = {} }) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={isCatalogMode ? false : { opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={standardViewport}
      transition={{ duration: 0.75, ease: terracottaEase, delay: isCatalogMode ? 0 : delay }}
    >
      {children}
    </motion.div>
  )
}

export function SpicaCard({ children, delay = 0, className = '', style = {} }) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={isCatalogMode ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={standardViewport}
      transition={{ duration: 0.8, ease: terracottaEase, delay: isCatalogMode ? 0 : delay }}
      whileHover={{ y: -3, transition: { duration: 0.25 } }}
    >
      {children}
    </motion.div>
  )
}
