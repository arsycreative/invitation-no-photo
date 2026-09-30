import { motion } from 'framer-motion'

const islamicEase = [0.22, 1, 0.36, 1]
const standardViewport = { once: true, margin: '200px 0px 200px 0px', amount: 0 }

export function SiriusReveal({
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={standardViewport}
      transition={{ duration: 0.75, ease: islamicEase, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export function SiriusCrestMotion({ children, delay = 0.15 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={standardViewport}
      transition={{ duration: 0.8, ease: islamicEase, delay }}
    >
      {children}
    </motion.div>
  )
}

export function SiriusScaleIn({ children, delay = 0.1, className = '', style = {} }) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={standardViewport}
      transition={{ duration: 0.75, ease: islamicEase, delay }}
    >
      {children}
    </motion.div>
  )
}

export function SiriusCard({ children, delay = 0, className = '', style = {} }) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={standardViewport}
      transition={{ duration: 0.75, ease: islamicEase, delay }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
    >
      {children}
    </motion.div>
  )
}
