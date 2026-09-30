import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './InvitationCover.css'

/* ── 13 Custom Theme Emblems ───────────────────────────── */
function VegaEmblem() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <circle cx="28" cy="28" r="24" stroke="rgba(201, 168, 76, 0.4)" strokeWidth="1" strokeDasharray="3 3"/>
      <ellipse cx="28" cy="28" rx="26" ry="10" stroke="rgba(255, 215, 120, 0.5)" strokeWidth="1" transform="rotate(-25 28 28)"/>
      <polygon points="28,4 31,23 50,28 31,33 28,52 25,33 6,28 25,23" fill="url(#vegaGold)"/>
      <circle cx="28" cy="28" r="3.5" fill="#ffffff"/>
      <defs>
        <linearGradient id="vegaGold" x1="6" y1="4" x2="50" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ecd38c"/>
          <stop offset="0.5" stopColor="#c9a84c"/>
          <stop offset="1" stopColor="#8c6a23"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

function LyraEmblem() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <circle cx="28" cy="28" r="23" stroke="#c4748c" strokeWidth="1.5" strokeOpacity="0.4"/>
      <path d="M16 28C16 20 23 15 28 15C33 15 40 20 40 28C40 36 33 41 28 41C23 41 16 36 16 28Z" stroke="#c4748c" strokeWidth="1.5" fill="rgba(253, 240, 244, 0.6)"/>
      <path d="M28 18Q24 28 28 38" stroke="#c4748c" strokeWidth="1.2"/>
      <path d="M22 24Q28 26 34 24" stroke="#c4748c" strokeWidth="1.2"/>
      <circle cx="28" cy="28" r="3.5" fill="#c4748c"/>
      <circle cx="28" cy="15" r="2" fill="#c9a06e"/>
      <circle cx="28" cy="41" r="2" fill="#c9a06e"/>
    </svg>
  )
}

function OrionEmblem() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <polygon points="28,4 50,14 50,38 28,52 6,38 6,14" stroke="#00c8ff" strokeWidth="2" fill="rgba(0, 200, 255, 0.1)"/>
      <polygon points="28,12 42,19 42,35 28,44 14,35 14,19" stroke="#ff3333" strokeWidth="1.5" fill="none"/>
      <polygon points="28,18 31,25 39,26 33,31 35,39 28,34 21,39 23,31 17,26 25,25" fill="#00c8ff"/>
    </svg>
  )
}

function DenebEmblem() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <circle cx="28" cy="28" r="22" fill="#ffeef3" stroke="#ff8fab" strokeWidth="2"/>
      <path d="M28 12L31 22L41 25L32 30L34 40L28 34L22 40L24 30L15 25L25 22Z" fill="#ff8fab"/>
      <circle cx="16" cy="18" r="2.5" fill="#95e1d3"/>
      <circle cx="42" cy="18" r="2" fill="#b8b5e0"/>
      <circle cx="38" cy="38" r="2.5" fill="#ffd166"/>
    </svg>
  )
}

function CastorEmblem() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <circle cx="28" cy="28" r="24" stroke="#c9a84c" strokeWidth="2" fill="rgba(201, 168, 76, 0.1)"/>
      <circle cx="28" cy="28" r="20" stroke="#ffd778" strokeWidth="1" strokeDasharray="2 2"/>
      <path d="M16 35H40L38 23L33 27L28 19L23 27L18 23L16 35Z" fill="#ffd778" stroke="#c9a84c" strokeWidth="1.2"/>
      <circle cx="28" cy="18" r="2" fill="#ffffff"/>
      <circle cx="18" cy="22" r="1.5" fill="#ffffff"/>
      <circle cx="38" cy="22" r="1.5" fill="#ffffff"/>
    </svg>
  )
}

function AltairEmblem() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <rect x="8" y="8" width="40" height="40" stroke="#111111" strokeWidth="2" fill="none"/>
      <rect x="14" y="14" width="28" height="28" stroke="#c9a84c" strokeWidth="1" fill="none"/>
      <line x1="28" y1="4" x2="28" y2="52" stroke="#111111" strokeWidth="1"/>
      <line x1="4" y1="28" x2="52" y2="28" stroke="#111111" strokeWidth="1"/>
      <circle cx="28" cy="28" r="4" fill="#c9a84c"/>
    </svg>
  )
}

function SiriusEmblem() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <rect x="14" y="14" width="28" height="28" transform="rotate(45 28 28)" stroke="#ffd778" strokeWidth="1.8" fill="rgba(201, 168, 76, 0.15)"/>
      <rect x="14" y="14" width="28" height="28" stroke="#c9a84c" strokeWidth="1.8" fill="none"/>
      <circle cx="28" cy="28" r="7" stroke="#ffd778" strokeWidth="1.5" fill="#021c13"/>
      <circle cx="28" cy="28" r="3.5" fill="#ffd778"/>
    </svg>
  )
}

function PolluxEmblem() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <circle cx="28" cy="28" r="23" stroke="#415a44" strokeWidth="1.5" fill="rgba(65, 90, 68, 0.08)"/>
      <path d="M31 16C23 16 17 22 17 30C17 38 23 43 31 43C34 43 37 42 40 40C33 39 28 34 28 28C28 22 33 17 40 16C37 16 34 16 31 16Z" fill="#b8860b"/>
      <polygon points="36,19 37.5,23 42,23 38.5,26 40,30 36,27.5 32,30 33.5,26 30,23 34.5,23" fill="#415a44"/>
    </svg>
  )
}

function SpicaEmblem() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <circle cx="23" cy="30" r="14" stroke="#c99a6b" strokeWidth="2.5" fill="none"/>
      <circle cx="33" cy="30" r="14" stroke="#8c432d" strokeWidth="2.5" fill="none"/>
      <polygon points="23,12 27,17 19,17" fill="#c99a6b"/>
      <circle cx="23" cy="15" r="2" fill="#ffffff"/>
    </svg>
  )
}

function AntaresEmblem() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <circle cx="28" cy="28" r="26" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
      <circle cx="28" cy="28" r="23" stroke="#b4863e" strokeWidth="1.2" strokeDasharray="2 3" opacity="0.85" />
      <circle cx="28" cy="28" r="19" stroke="#0f172a" strokeWidth="0.8" opacity="0.6" />
      <circle cx="28" cy="28" r="14" stroke="#b4863e" strokeWidth="1" strokeDasharray="3 2" opacity="0.75" />
      <text x="28" y="31.5" textAnchor="middle" fill="#0f172a" fontFamily="'Playfair Display', Georgia, serif" fontSize="13" fontWeight="800">25</text>
      <rect x="17" y="34.5" width="22" height="6.5" rx="3.25" fill="#0f172a" />
      <text x="28" y="39" textAnchor="middle" fill="#f8fafc" fontFamily="'Montserrat', sans-serif" fontSize="4" fontWeight="800" letterSpacing="0.18em">SILVER</text>
      <path d="M28 8.5 L29.5 11.5 L33 12 L30.5 14.3 L31.2 17.5 L28 15.7 L24.8 17.5 L25.5 14.3 L23 12 L26.5 11.5 Z" fill="#b4863e" />
    </svg>
  )
}

function CapellaEmblem() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
      <circle cx="30" cy="30" r="27" stroke="#ffd966" strokeWidth="1.2" strokeDasharray="2 3" />
      <circle cx="30" cy="30" r="24" fill="#4a0e17" stroke="#d4af37" strokeWidth="1.5" />
      {/* Laurel leaves */}
      <path d="M14 31 C14 22 20 15 27 12 C24 16 22 22 23 28 Z" fill="#ffd966" opacity="0.8" />
      <path d="M46 31 C46 22 40 15 33 12 C36 16 38 22 37 28 Z" fill="#ffd966" opacity="0.8" />
      {/* Mortarboard cap */}
      <polygon points="30,17 45,23 30,29 15,23" fill="#1c1917" stroke="#ffd966" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M21 25.5 V31 C21 31 24.5 35 30 35 C35.5 35 39 31 39 31 V25.5" fill="#2a050c" stroke="#ffd966" strokeWidth="1.2" />
      <path d="M30 23 C34 24 43 27 43 33" stroke="#ffd966" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="43" cy="34" r="1.5" fill="#ffd966" />
      <path d="M43 35.5 V39" stroke="#ffd966" strokeWidth="1.5" strokeLinecap="round" />
      {/* Diploma scroll */}
      <rect x="22" y="38" width="16" height="5" rx="1.5" fill="#fdfbf7" stroke="#ffd966" strokeWidth="0.8" />
      <rect x="28.5" y="37" width="3" height="7" rx="1" fill="#781d2a" />
    </svg>
  )
}

function RigelEmblem() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
      {/* Cloud Base */}
      <path d="M8 44 C8 39 12 37 16 37 C17 32 22 29 27 31 C30 26 36 26 39 30 C43 29 48 31 49 35 C52 35 55 38 55 42 C55 46 51 48 47 48 H13 C10 48 8 46 8 44 Z" fill="#ffffff" opacity="0.9" />
      {/* Balloon body */}
      <path d="M30 8 C19 8 11 16 11 27 C11 35 18 40 23 44 C25 46 27 47 27 48 H33 C33 47 35 46 37 44 C42 40 49 35 49 27 C49 16 41 8 30 8 Z" fill="url(#coverRigelSkyGrad)" stroke="#ffffff" strokeWidth="1.5" />
      {/* Center stripe */}
      <path d="M30 8 C26 13 24 22 24 32 C24 39 27 45 28 48 H32 C33 45 36 39 36 32 C36 22 34 13 30 8 Z" fill="#fde047" stroke="#ffffff" strokeWidth="0.8" />
      <polygon points="30,19 31.5,23.5 36,24 32.5,27.5 33.5,32 30,29.5 26.5,32 27.5,27.5 24,24 28.5,23.5" fill="#ffffff" />
      {/* Ropes and basket */}
      <line x1="26" y1="48" x2="24" y2="54" stroke="#ca8a04" strokeWidth="1" />
      <line x1="34" y1="48" x2="36" y2="54" stroke="#ca8a04" strokeWidth="1" />
      <rect x="23" y="53" width="14" height="6" rx="2" fill="#fed7aa" stroke="#ca8a04" strokeWidth="1" />
      <defs>
        <linearGradient id="coverRigelSkyGrad" x1="10" y1="10" x2="50" y2="45" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7dd3fc" />
          <stop offset="60%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function AldebaranEmblem() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
      <defs>
        <linearGradient id="aldCoverGold" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="50%" stopColor="#eab308" />
          <stop offset="100%" stopColor="#ca8a04" />
        </linearGradient>
      </defs>
      {/* Moorish Arch Silhouette */}
      <path d="M 12 52 V 32 C 12 18 22 8 30 8 C 38 8 48 18 48 32 V 52" stroke="url(#aldCoverGold)" strokeWidth="2" fill="rgba(184, 138, 46, 0.12)" />
      {/* Inner Pointed Arch */}
      <path d="M 18 52 V 34 C 18 24 24 16 30 14 C 36 16 42 24 42 34 V 52" stroke="url(#aldCoverGold)" strokeWidth="1.2" strokeDasharray="3 2" fill="none" />
      {/* Arch Finial */}
      <circle cx="30" cy="5" r="2.5" fill="#fef08a" />
      {/* Hanging Mosque Lantern */}
      <line x1="30" y1="14" x2="30" y2="26" stroke="#ca8a04" strokeWidth="1.2" />
      <path d="M 27 26 C 25 30 26 36 30 38 C 34 36 35 30 33 26 Z" fill="url(#aldCoverGold)" />
      <circle cx="30" cy="32" r="2" fill="#ffffff" />
      {/* Base Foundation */}
      <line x1="8" y1="52" x2="52" y2="52" stroke="url(#aldCoverGold)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

/* ── Theme Config Registry ────────────────────────────── */
const THEME_CONFIGS = {
  vega: {
    emblem: <VegaEmblem />,
    btnText: 'Buka Undangan',
    btnIcon: '✦',
    badgeDefault: 'The Wedding Invitation',
    note: 'Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir.',
    exitAnim: { opacity: 0, y: '-100%', transition: { duration: 0.55, ease: [0.32, 0.72, 0, 1] } },
  },
  lyra: {
    emblem: <LyraEmblem />,
    btnText: 'Buka Undangan Kasih',
    btnIcon: '❦',
    badgeDefault: 'Wedding Celebration',
    note: 'Dengan penuh sukacita dan kerendahan hati, kami mengundang kehadiran doa restu Anda.',
    exitAnim: { opacity: 0, y: '-100%', transition: { duration: 0.55, ease: [0.32, 0.72, 0, 1] } },
  },
  orion: {
    emblem: <OrionEmblem />,
    btnText: '✦ AKSES MISI GALAXY ✦',
    btnIcon: '🚀',
    badgeDefault: 'Secret Mission // Galaxy Party',
    note: 'Bersiaplah untuk petualangan seru antar galaksi! Konfirmasi kehadiranmu sekarang!',
    exitAnim: { opacity: 0, y: '-100%', scale: 1.04, transition: { duration: 0.5, ease: [0.32, 0.72, 0, 1] } },
  },
  deneb: {
    emblem: <DenebEmblem />,
    btnText: 'Buka Pesta Ceria ✦',
    btnIcon: '✨',
    badgeDefault: 'Magical Birthday Celebration',
    note: 'Yuk, datang dan ramaikan pesta hari spesial ini dengan tawa dan keceriaan!',
    exitAnim: { opacity: 0, y: '-100%', transition: { duration: 0.55, ease: [0.32, 0.72, 0, 1] } },
  },
  castor: {
    emblem: <CastorEmblem />,
    btnText: 'Buka Maklumat Agung',
    btnIcon: '👑',
    badgeDefault: 'The Royal Wedding Proclamation',
    note: 'Suatu kehormatan agung atas perkenan Bapak/Ibu/Saudara/i untuk hadir memberikan restu mulia.',
    exitAnim: { opacity: 0, y: '-100%', transition: { duration: 0.55, ease: [0.32, 0.72, 0, 1] } },
  },
  altair: {
    emblem: <AltairEmblem />,
    btnText: 'OPEN INVITATION ➔',
    btnIcon: '→',
    badgeDefault: 'VOL. 2026 // PRIVATE INVITATION',
    note: 'An intimate celebration of love, architecture, and enduring commitment.',
    exitAnim: { opacity: 0, y: '-100%', transition: { duration: 0.55, ease: [0.32, 0.72, 0, 1] } },
  },
  sirius: {
    emblem: <SiriusEmblem />,
    btnText: 'Buka Undangan Khitan',
    btnIcon: '🕌',
    badgeDefault: 'Walimatul Khitan Syukuran',
    note: 'Mengharapkan kehadiran dan lantunan doa berkah untuk sang jagoan pemberani.',
    exitAnim: { opacity: 0, y: '-100%', transition: { duration: 0.55, ease: [0.32, 0.72, 0, 1] } },
  },
  pollux: {
    emblem: <PolluxEmblem />,
    btnText: 'Buka Tasyakuran Aqiqah',
    btnIcon: '🌙',
    badgeDefault: 'Tasyakuran Aqiqah & Kelahiran',
    note: 'Penuh rasa syukur menyambut buah hati tercinta, mohon doa restu keberkahan.',
    exitAnim: { opacity: 0, y: '-100%', transition: { duration: 0.55, ease: [0.32, 0.72, 0, 1] } },
  },
  spica: {
    emblem: <SpicaEmblem />,
    btnText: 'Buka Undangan Lamaran',
    btnIcon: '💍',
    badgeDefault: 'The Engagement Ceremony',
    note: 'Merupakan kebahagiaan bagi kami atas doa restu Anda pada langkah awal pertunangan ini.',
    exitAnim: { opacity: 0, y: '-100%', transition: { duration: 0.55, ease: [0.32, 0.72, 0, 1] } },
  },
  antares: {
    emblem: <AntaresEmblem />,
    btnText: 'Buka Peringatan Kasih',
    btnIcon: '🥂',
    badgeDefault: 'Silver Wedding Anniversary',
    note: 'Berbagi sukacita dan rasa syukur atas 25 tahun perjalanan kasih yang abadi.',
    exitAnim: { opacity: 0, y: '-100%', transition: { duration: 0.55, ease: [0.32, 0.72, 0, 1] } },
  },
  capella: {
    emblem: <CapellaEmblem />,
    btnText: 'Buka Undangan Wisuda',
    btnIcon: '🎓',
    badgeDefault: 'Academic Graduation Ceremony',
    note: 'Ungkapan terima kasih atas doa dan dukungan dalam meraih lembaran kelulusan ini.',
    exitAnim: { opacity: 0, y: '-100%', transition: { duration: 0.55, ease: [0.32, 0.72, 0, 1] } },
  },
  rigel: {
    emblem: <RigelEmblem />,
    btnText: 'Buka Pesta Baby Shower',
    btnIcon: '🍼',
    badgeDefault: 'Baby Shower Celebration',
    note: 'Yuk, berkumpul berbagi kehangatan dan doa kasih menyambut sang buah hati!',
    exitAnim: { opacity: 0, y: '-100%', transition: { duration: 0.55, ease: [0.32, 0.72, 0, 1] } },
  },
  aldebaran: {
    emblem: <AldebaranEmblem />,
    btnText: 'Buka Undangan Majelis',
    btnIcon: '📖',
    badgeDefault: 'Majelis Dzikir & Doa Bersama',
    note: 'Dengan tulus mengundang Bapak/Ibu/Jamaah untuk bersama melantunkan doa barokah.',
    exitAnim: { opacity: 0, y: '-100%', transition: { duration: 0.55, ease: [0.32, 0.72, 0, 1] } },
  },
}

/* ═══════════════════════════════════════════════════════════
   MAIN INVITATION COVER COMPONENT
   ──────────────────────────────────────────────────────────
   Features:
   - Staggered loaded entrance animation
   - 13 theme-specific visual templates (colors, fonts, borders)
   - 13 theme-specific animated emblems
   - 13 unique CTA button copy & icons
   - 13 customized exit transitions
   ═══════════════════════════════════════════════════════════ */
export default function InvitationCover({
  isOpen,
  onOpen,
  onClose,
  theme = 'vega',
  type = 'wedding',
  title = '',
  coupleOrKidName = '',
  date = '',
  guestName = 'Tamu Undangan',
  lockBodyScroll = true,
  hideFloatingButton = false,
}) {
  const normTheme = (theme || 'vega').toLowerCase()
  const cfg = THEME_CONFIGS[normTheme] || THEME_CONFIGS.vega

  const displayBadge = title || cfg.badgeDefault
  const guestNote = cfg.note

  useEffect(() => {
    if (lockBodyScroll) {
      if (!isOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
      return () => {
        document.body.style.overflow = ''
      }
    }
  }, [isOpen, lockBodyScroll])

  const handleOpenClick = () => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    onOpen?.()
  }

  const handleCloseClick = () => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    onClose?.()
  }

  const isInstant = hideFloatingButton || (typeof window !== 'undefined' && (
    window.location.search.includes('catalog') ||
    Boolean(navigator.webdriver) ||
    window.location.search.includes('static')
  ))

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            className={`invitation-cover-overlay cover-overlay-${normTheme}`}
            initial={isInstant ? false : { opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: isInstant ? 0 : 0.4 } }}
            exit={cfg.exitAnim}
          >
            {/* Ambient Glow Aura */}
            <div className="cover-ambient-glow" />

            {/* Staggered Container Card */}
            <motion.div
              className={`cover-card-base cover-card-${normTheme}`}
              initial={isInstant ? false : { scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{
                duration: isInstant ? 0 : 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* 1. Theme Emblem (Draw & Soft Glow Pulse) */}
              <motion.div
                style={{ display: 'flex', justifyContent: 'center', marginBottom: '18px' }}
                initial={isInstant ? false : { scale: 0.6, opacity: 0, rotate: -10 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: isInstant ? 0 : 0.6, delay: isInstant ? 0 : 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                {cfg.emblem}
              </motion.div>

              {/* 2. Badge / Subtitle */}
              <motion.div
                initial={isInstant ? false : { opacity: 0, y: -8, letterSpacing: '0.3em' }}
                animate={{ opacity: 1, y: 0, letterSpacing: '0.2em' }}
                transition={{ duration: isInstant ? 0 : 0.5, delay: isInstant ? 0 : 0.1 }}
              >
                <div className="cover-badge">
                  <span>{displayBadge}</span>
                </div>
              </motion.div>

              {/* 3. Main Title / Names */}
              <motion.h1
                className="cover-names"
                initial={isInstant ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: isInstant ? 0 : 0.55, delay: isInstant ? 0 : 0.16 }}
              >
                {coupleOrKidName}
              </motion.h1>

              {/* 4. Date */}
              {date && (
                <motion.p
                  className="cover-date"
                  initial={isInstant ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: isInstant ? 0 : 0.45, delay: isInstant ? 0 : 0.22 }}
                >
                  {date}
                </motion.p>
              )}

              {/* 5. Guest Information Box */}
              <motion.div
                className="cover-guest-box"
                initial={isInstant ? false : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: isInstant ? 0 : 0.5, delay: isInstant ? 0 : 0.28 }}
              >
                <span className="cover-guest-to">Kepada Yth. Bapak/Ibu/Saudara/i:</span>
                <span className="cover-guest-name">{guestName}</span>
                <span className="cover-guest-note">{guestNote}</span>
              </motion.div>

              {/* 6. CTA "Buka Undangan" Button with shimmer & breathing bounce */}
              <motion.div
                initial={isInstant ? false : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: isInstant ? 0 : 0.5, delay: isInstant ? 0 : 0.34 }}
              >
                <motion.button
                  type="button"
                  className="cover-open-btn cover-btn-shimmer"
                  onClick={handleOpenClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      '0 4px 15px rgba(0,0,0,0.2)',
                      '0 8px 28px rgba(255,255,255,0.25)',
                      '0 4px 15px rgba(0,0,0,0.2)',
                    ],
                  }}
                  transition={{
                    boxShadow: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
                  }}
                >
                  <span style={{ fontSize: '15px' }}>{cfg.btnIcon}</span>
                  <span>{cfg.btnText}</span>
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Re-Open / Cover Return Button */}
      {isOpen && onClose && !hideFloatingButton && (
        <motion.button
          type="button"
          className="cover-reopen-float-btn"
          onClick={handleCloseClick}
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          title="Tutup &amp; Buka Ulang Undangan"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          <span>Sampul Undangan</span>
        </motion.button>
      )}
    </>
  )
}
