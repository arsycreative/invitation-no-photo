import { Suspense } from 'react'
import { THEMES, DEFAULT_THEME } from './themes'
import { CLIENTS, DEMO_CLIENT } from './clients'
import './index.css'

/* ── URL param helpers ────────────────────────────────── */
function getParams() {
  const params = new URLSearchParams(window.location.search)
  return {
    clientSlug: params.get('client'),
    themeKey:   params.get('theme'),
    guestName:  params.get('to') || params.get('u') || 'Tamu Undangan',
  }
}

/* ── Loading Fallback ─────────────────────────────────── */
function Loading() {
  return (
    <div className="loading-screen">
      <div className="loading-spinner" />
      <span className="loading-text">Memuat Undangan…</span>
    </div>
  )
}

/* ── Not Found ────────────────────────────────────────── */
function NotFound({ message }) {
  return (
    <div className="error-screen">
      <div>
        <h1>Undangan tidak ditemukan</h1>
        <p>{message}</p>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════
   APP ROOT
   ──────────────────────────────────────────────────────────
   Routing logic (no library needed — just URL params):

   • ?client=demo        → load client's theme + their data
   • ?theme=vega         → load theme with its specific demo data
   • (no params)         → load default demo
   ═══════════════════════════════════════════════════════════ */
export default function App() {
  const { clientSlug, themeKey, guestName } = getParams()

  let themeEntry = null
  let clientData = null

  if (clientSlug) {
    /* Client-specific invitation */
    const client = CLIENTS[clientSlug]
    if (!client) {
      return <NotFound message={`Client "${clientSlug}" tidak ditemukan.`} />
    }
    themeEntry = THEMES[client.theme]
    clientData = client.data
    if (!themeEntry) {
      return <NotFound message={`Tema "${client.theme}" belum tersedia.`} />
    }

  } else if (themeKey) {
    /* Theme preview with theme-specific demo data */
    themeEntry = THEMES[themeKey]
    if (!themeEntry) {
      return <NotFound message={`Tema "${themeKey}" tidak ditemukan.`} />
    }
    const matchingKey = themeKey === 'vega' ? 'demo' : `demo-${themeKey}`
    const demoClient = CLIENTS[matchingKey] || Object.values(CLIENTS).find(c => c.theme === themeKey) || CLIENTS[DEMO_CLIENT]
    clientData = demoClient?.data ?? {}

  } else {
    /* Default: show demo */
    const demoClient = CLIENTS[DEMO_CLIENT]
    themeEntry = THEMES[demoClient?.theme ?? DEFAULT_THEME]
    clientData = demoClient?.data ?? {}
  }

  const ThemeComponent = themeEntry.component
  const fullData = {
    ...clientData,
    guestName: clientData?.guestName || guestName || 'Tamu Undangan',
  }

  return (
    <Suspense fallback={<Loading />}>
      <ThemeComponent data={fullData} />
    </Suspense>
  )
}
