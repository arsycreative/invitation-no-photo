import { Suspense } from 'react'
import { THEMES, DEFAULT_THEME } from './themes'
import { CLIENTS, DEMO_CLIENT } from './clients'
import CatalogPage from './pages/CatalogPage'
import BannerPage from './pages/BannerPage'
import BannerSlide2 from './pages/BannerSlide2'
import BannerSlide3 from './pages/BannerSlide3'
import BannerSlide4 from './pages/BannerSlide4'
import BannerSlide5 from './pages/BannerSlide5'
import BannerSlide6 from './pages/BannerSlide6'
import './index.css'

/* ── URL param helpers ────────────────────────────────── */
function getParams() {
  const params = new URLSearchParams(window.location.search)
  return {
    clientSlug: params.get('client'),
    themeKey:   params.get('theme'),
    catalogKey: params.get('catalog'),
    bannerKey:  params.get('banner') || params.get('slide'),
    guestName:  params.get('to') || params.get('u') || 'Tamu Undangan',
    initialOpen: params.get('open') === 'true' || params.get('open') === '1',
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

   • ?banner=1           → load Slide 1 Hero Banner
   • ?banner=2           → load Slide 2 Diagonal Showcase
   • ?banner=3           → load Slide 3 Feature Showcase
   • ?banner=4           → load Slide 4 Multi-Event Showcase
   • ?catalog=vega       → load 2-view catalog presentation
   • ?client=demo        → load client's theme + their data
   • ?theme=vega         → load theme with its specific demo data
   • (no params)         → load default demo
   ═══════════════════════════════════════════════════════════ */
export default function App() {
  const { clientSlug, themeKey, catalogKey, bannerKey, guestName, initialOpen } = getParams()

  if (bannerKey === '6' || bannerKey === 'slide6') {
    return <BannerSlide6 />
  }

  if (bannerKey === '5' || bannerKey === 'slide5') {
    return <BannerSlide5 />
  }

  if (bannerKey === '4' || bannerKey === 'slide4') {
    return <BannerSlide4 />
  }

  if (bannerKey === '3' || bannerKey === 'slide3') {
    return <BannerSlide3 />
  }

  if (bannerKey === '2' || bannerKey === 'slide2') {
    return <BannerSlide2 />
  }

  if (bannerKey) {
    return <BannerPage />
  }

  if (catalogKey) {
    return <CatalogPage themeKey={catalogKey} />
  }

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
    initialOpen: initialOpen || clientData?.initialOpen || false,
  }

  return (
    <Suspense fallback={<Loading />}>
      <ThemeComponent data={fullData} />
    </Suspense>
  )
}
