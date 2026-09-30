import { useMemo, Suspense } from 'react'
import { THEMES } from '../themes'
import { CLIENTS, DEMO_CLIENT } from '../clients'
import './CatalogPage.css'

export default function CatalogPage({ themeKey = 'vega' }) {
  const activeTheme = themeKey

  const themeEntry = THEMES[activeTheme] || THEMES.vega
  const ThemeComponent = themeEntry.component

  const matchingKey = activeTheme === 'vega' ? 'demo' : `demo-${activeTheme}`
  const demoClient = CLIENTS[matchingKey] || Object.values(CLIENTS).find(c => c.theme === activeTheme) || CLIENTS[DEMO_CLIENT]

  const clientData = {
    ...(demoClient?.data ?? {}),
    guestName: demoClient?.data?.guestName || 'Tamu Undangan',
  }

  // View 1: Cover View (Closed invitation, no scroll lock, no floating return button)
  const coverData = useMemo(() => ({
    ...clientData,
    initialOpen: false,
    lockBodyScroll: false,
    hideFloatingButton: true,
  }), [clientData])

  // View 2: Main Page View (Opened invitation, no scroll lock, no floating return button)
  const mainData = useMemo(() => ({
    ...clientData,
    initialOpen: true,
    lockBodyScroll: false,
    hideFloatingButton: true,
  }), [clientData])

  return (
    <div className="catalog-wrapper">
      <div className="catalog-canvas">
        {/* VIEW 01: Open Invitation (Cover) */}
        <div className="catalog-device-mockup">
          <div className="mockup-island">
            <span className="mockup-camera" />
          </div>
          <div className="mockup-screen is-mockup-frame">
            <Suspense fallback={<div style={{ width: '100%', height: '100%', background: '#f8fafc' }} />}>
              <ThemeComponent data={coverData} />
            </Suspense>
          </div>
          <div className="mockup-home-bar" />
        </div>

        {/* VIEW 02: Main Invitation Page */}
        <div className="catalog-device-mockup">
          <div className="mockup-island">
            <span className="mockup-camera" />
          </div>
          <div className="mockup-screen is-mockup-frame">
            <Suspense fallback={<div style={{ width: '100%', height: '100%', background: '#f8fafc' }} />}>
              <ThemeComponent data={mainData} />
            </Suspense>
          </div>
          <div className="mockup-home-bar" />
        </div>
      </div>
    </div>
  )
}
