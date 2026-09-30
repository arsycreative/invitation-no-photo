/**
 * THEME REGISTRY
 * ─────────────────────────────────────────────────────────────
 * Named after stars. Each theme has its own folder.
 * To add a new theme:
 *  1. Create folder: src/themes/YourStarName/
 *  2. Add index.jsx + YourStarName.css inside it
 *  3. Import and register it here
 *
 * Clients access their theme at: /?client=nama-klien
 * Preview a theme at: /?theme=vega
 * ─────────────────────────────────────────────────────────────
 */

import { lazy } from 'react'

export const THEMES = {

  // ── 1. Altair ───────────────────────────────────────────
  // Editorial Monokrom × Emerald Green — Modern Minimalist Magazine (Wedding)
  altair: {
    name: 'Altair',
    label: 'Altair — Modern Editorial Magazine',
    type: 'wedding',
    component: lazy(() => import('./Altair')),
    description: 'Format majalah editorial asimetris modern. Putih bersih, hitam pekat, tipografi vertikal tebal, dan aksen hijau zamrud.',
    palette: ['#ffffff', '#09090b', '#059669'],
  },

  // ── 2. Vega ─────────────────────────────────────────────
  // Deep Oceanic Sapphire × Ice Diamond Silver — Celestial Glassmorphism (Wedding)
  vega: {
    name: 'Vega',
    label: 'Vega — Sapphire Celestial Luxury',
    type: 'wedding',
    component: lazy(() => import('./Vega')),
    description: 'Langit malam safir laut dalam bertemu kristal es perak bercahaya. Konstelasi kosmis megah dan elegan tanpa aksen emas.',
    palette: ['#060f22', '#38bdf8', '#e0f2fe'],
  },

  // ── 3. Lyra ─────────────────────────────────────────────
  // Sakura Petal Pink × Rosewood — Romantic Botanical Poetry Folio (Wedding)
  lyra: {
    name: 'Lyra',
    label: 'Lyra — Sakura Botanical Romance',
    type: 'wedding',
    component: lazy(() => import('./Lyra')),
    description: 'Kelopak sakura melayang lembut berpadu rosewood anggun. Desain kartu folio bertingkat yang feminin dan puitis.',
    palette: ['#fce7f3', '#4a1d24', '#db2777'],
  },

  // ── 4. Castor ───────────────────────────────────────────
  // Imperial Crimson Velvet × Baroque Gold — Monarch Royal Decree (Wedding)
  castor: {
    name: 'Castor',
    label: 'Castor — Imperial Royal Prestige',
    type: 'wedding',
    component: lazy(() => import('./Castor')),
    description: 'Merah marun beledu kerajaan berpadu emas barok. Format maklumat agung dengan cap segel lilin dan mahkota ningrat.',
    palette: ['#2a040b', '#7f1d1d', '#eab308'],
  },

  // ── 5. Orion ────────────────────────────────────────────
  // OLED Space Black × Neon Electric Cyan × Laser Crimson — Sci-Fi HUD Command (Ulang Tahun Anak Laki)
  orion: {
    name: 'Orion',
    label: 'Orion — Sci-Fi HUD Mission Command',
    type: 'birthday-boy',
    component: lazy(() => import('./Orion')),
    description: 'Pusat komando antariksa futuristik. Sudut cyber brackets, target bidik kosmis, dan panel telemetri peluncuran roket.',
    palette: ['#020617', '#00f0ff', '#ff003c'],
  },

  // ── 6. Deneb ────────────────────────────────────────────
  // Cotton Candy Rainbow Pastel × Bubblegum Pink — Carnival VIP Ticket & Pass (Ulang Tahun Anak Perempuan)
  deneb: {
    name: 'Deneb',
    label: 'Deneb — Carnival VIP Party Pass',
    type: 'birthday-girl',
    component: lazy(() => import('./Deneb')),
    description: 'Format tiket festival karnaval berlubang gerigi lengkap dengan barcode, stempel VIP admission, dan token hitung mundur ceria.',
    palette: ['#ff477e', '#10b981', '#8b5cf6'],
  },

  // ── 7. Sirius ────────────────────────────────────────────
  // Malachite Emerald × Knight Gold — Walimatul Khitan (Sunatan)
  sirius: {
    name: 'Sirius',
    label: 'Sirius — Walimatul Khitan Sang Jagoan',
    type: 'khitan',
    component: lazy(() => import('./Sirius')),
    description: 'Hijau zamrud malachite gagah berpadu medali bintang Islami 8 sudut. Simbol keberanian dan doa berkah untuk sang jagoan.',
    palette: ['#03281f', '#059669', '#f59e0b'],
  },

  // ── 8. Pollux ────────────────────────────────────────────
  // Botanical Nursery Sage × Warm Almond Cream — Newborn Birth Passport & Certificate (Aqiqah)
  pollux: {
    name: 'Pollux',
    label: 'Pollux — Newborn Birth Passport & Aqiqah',
    type: 'aqiqah',
    component: lazy(() => import('./Pollux')),
    description: 'Format sertifikat akta kelahiran bayi dalam matriks 4-kuadran (tanggal, jam, berat, dan panjang badan) berbalut sage menyejukkan.',
    palette: ['#1b3223', '#2d4a37', '#b5934e'],
  },

  // ── 9. Spica ─────────────────────────────────────────────
  // Mediterranean Terracotta × Warm Apricot — Dual Architectural Arches (Tunangan & Lamaran)
  spica: {
    name: 'Spica',
    label: 'Spica — Mediterranean Engagement Arches',
    type: 'engagement',
    component: lazy(() => import('./Spica')),
    description: 'Lengkungan arsitektur terakota Mediterania ganda berjalin. Profil mempelai pria dan wanita dalam siluet gerbang cinta.',
    palette: ['#7c2d12', '#ea580c', '#fff7ed'],
  },

  // ── 10. Antares ──────────────────────────────────────────
  // Soft Cashmere Ivory × Champagne Gold — Silver Jubilee Anniversary
  antares: {
    name: 'Antares',
    label: 'Antares — Soft Cashmere Anniversary',
    type: 'anniversary',
    component: lazy(() => import('./Antares')),
    description: 'Nuansa soft cashmere berpadu champagne gold yang anggun, lapang setinggi layar, dan menenangkan. Linimasa cinta dan perayaan syukur pernikahan.',
    palette: ['#fbf9f6', '#292524', '#a07855'],
  },

  // ── 11. Capella ──────────────────────────────────────────
  // Warm Noble Ivory Parchment × Oxford Maroon — Formal University Diploma Citation (Wisuda)
  capella: {
    name: 'Capella',
    label: 'Capella — Formal University Diploma Citation',
    type: 'graduation',
    component: lazy(() => import('./Capella')),
    description: 'Piagam ijazah senat akademis klasik bergaris ganda dengan stempel kelulusan Latin, topi toga wisuda, dan agenda upacara terpisah.',
    palette: ['#fdfbf7', '#781d2a', '#b45309'],
  },

  // ── 12. Rigel ────────────────────────────────────────────
  // Powder Baby Sky Blue × Buttercup Yellow — Baby Shower Nursery Activities (Baby Shower)
  rigel: {
    name: 'Rigel',
    label: 'Rigel — Baby Shower Nursery Celebration',
    type: 'baby-shower',
    component: lazy(() => import('./Rigel')),
    description: 'Biru langit bayi cerah berpadu kuning mentega manis. Dilengkapi kartu 3-grid aktivitas pesta (Tebak Gender, Games & Hadiah, Doa).',
    palette: ['#0284c7', '#eab308', '#f0f9ff'],
  },

  // ── 13. Aldebaran ────────────────────────────────────────
  // Desert Sandstone Parchment × Sacred Lapis Lazuli — Sacred Illuminated Islamic Naskah (Doa Bersama)
  aldebaran: {
    name: 'Aldebaran',
    label: 'Aldebaran — Sacred Naskah & Majelis Doa Bersama',
    type: 'doa-bersama',
    component: lazy(() => import('./Aldebaran')),
    description: 'Manuskrip mushaf pasir gurun suci dengan lengkungan mihrab kubah masjid, kaligrafi berbingkai emas, dan manik tasbih dzikir.',
    palette: ['#fcf8f0', '#0a192c', '#b88a2e'],
  },

}

export const DEFAULT_THEME = 'vega'
