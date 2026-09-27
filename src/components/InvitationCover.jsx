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
      <circle cx="28" cy="28" r="24" stroke="#d88c9d" strokeWidth="1.5" strokeDasharray="3 3"/>
      <path d="M21 16L21 28C21 32 24.5 35 28 35C31.5 35 35 32 35 28L35 16" stroke="#d88c9d" strokeWidth="2" strokeLinecap="round"/>
      <line x1="28" y1="35" x2="28" y2="44" stroke="#d88c9d" strokeWidth="2"/>
      <line x1="20" y1="44" x2="36" y2="44" stroke="#d88c9d" strokeWidth="2" strokeLinecap="round"/>
      <path d="M23 23Q28 26 33 23" stroke="#f7e8ec" strokeWidth="1.5"/>
    </svg>
  )
}

function CapellaEmblem() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <polygon points="28,10 50,20 28,30 6,20" fill="rgba(212, 175, 55, 0.25)" stroke="#ffd966" strokeWidth="2"/>
      <path d="M15 25V36C15 36 21 42 28 42C35 42 41 36 41 36V25" stroke="#d4af37" strokeWidth="2"/>
      <path d="M46 22V38" stroke="#ffd966" strokeWidth="2"/>
      <circle cx="46" cy="40" r="3" fill="#ffd966"/>
    </svg>
  )
}

function RigelEmblem() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <circle cx="28" cy="28" r="23" stroke="#d95d39" strokeWidth="2" fill="#fff5ef"/>
      <path d="M16 32C16 26 21 21 27 21C33 21 38 26 38 32C38 38 33 42 27 42C21 42 16 38 16 32Z" fill="#fde8e0" stroke="#d95d39" strokeWidth="1.5"/>
      <path d="M27 21C27 16 31 12 36 12C39 12 41 14 42 17C42 20 39 23 36 23" stroke="#b84826" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="38" cy="15" r="1.5" fill="#2b2118"/>
      <path d="M42 16L48 18L42 20" fill="#c28424"/>
    </svg>
  )
}

function AldebaranEmblem() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <path d="M28 8C28 8 16 19 16 31C16 37.5 21.5 43 28 43C34.5 43 40 37.5 40 31C40 19 28 8 28 8Z" stroke="#ffd56b" strokeWidth="2" fill="rgba(201, 162, 77, 0.2)"/>
      <line x1="28" y1="3" x2="28" y2="9" stroke="#ffd56b" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="28" cy="4" r="1.8" fill="#ffd56b"/>
      <rect x="22" y="32" width="12" height="11" rx="6" stroke="#ffd56b" strokeWidth="1.5" fill="none"/>
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
}) {
  const normTheme = (theme || 'vega').toLowerCase()
  const cfg = THEME_CONFIGS[normTheme] || THEME_CONFIGS.vega

  const displayBadge = title || cfg.badgeDefault
  const guestNote = cfg.note

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleOpenClick = () => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    onOpen?.()
  }

  const handleCloseClick = () => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    onClose?.()
  }

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            className={`invitation-cover-overlay cover-overlay-${normTheme}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={cfg.exitAnim}
          >
            {/* Ambient Glow Aura */}
            <div className="cover-ambient-glow" />

            {/* Staggered Container Card */}
            <motion.div
              className={`cover-card-base cover-card-${normTheme}`}
              initial={{ scale: 0.88, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* 1. Theme Emblem (Draw & Soft Glow Pulse) */}
              <motion.div
                style={{ display: 'flex', justifyContent: 'center', marginBottom: '18px' }}
                initial={{ scale: 0.5, opacity: 0, rotate: -15 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                {cfg.emblem}
              </motion.div>

              {/* 2. Badge / Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: -10, letterSpacing: '0.35em' }}
                animate={{ opacity: 1, y: 0, letterSpacing: '0.2em' }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <div className="cover-badge">
                  <span>{displayBadge}</span>
                </div>
              </motion.div>

              {/* 3. Main Title / Names */}
              <motion.h1
                className="cover-names"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.42 }}
              >
                {coupleOrKidName}
              </motion.h1>

              {/* 4. Date */}
              {date && (
                <motion.p
                  className="cover-date"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.55 }}
                >
                  {date}
                </motion.p>
              )}

              {/* 5. Guest Information Box */}
              <motion.div
                className="cover-guest-box"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.65 }}
              >
                <span className="cover-guest-to">Kepada Yth. Bapak/Ibu/Saudara/i:</span>
                <span className="cover-guest-name">{guestName}</span>
                <span className="cover-guest-note">{guestNote}</span>
              </motion.div>

              {/* 6. CTA "Buka Undangan" Button with shimmer & breathing bounce */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
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
      {isOpen && onClose && (
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
