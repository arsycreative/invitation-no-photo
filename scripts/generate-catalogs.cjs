const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

const THEMES = [
  { key: 'altair', num: '01', name: 'Altair' },
  { key: 'vega', num: '02', name: 'Vega' },
  { key: 'lyra', num: '03', name: 'Lyra' },
  { key: 'castor', num: '04', name: 'Castor' },
  { key: 'orion', num: '05', name: 'Orion' },
  { key: 'deneb', num: '06', name: 'Deneb' },
  { key: 'sirius', num: '07', name: 'Sirius' },
  { key: 'pollux', num: '08', name: 'Pollux' },
  { key: 'spica', num: '09', name: 'Spica' },
  { key: 'antares', num: '10', name: 'Antares' },
  { key: 'capella', num: '11', name: 'Capella' },
  { key: 'rigel', num: '12', name: 'Rigel' },
  { key: 'aldebaran', num: '13', name: 'Aldebaran' },
];

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const OUTPUT_DIR = path.resolve(__dirname, '../katalog');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  console.log('🚀 Generating 1080x1080 catalog showcase for all 13 themes...\n');

  for (const theme of THEMES) {
    const outputFile = path.join(OUTPUT_DIR, `${theme.num}_${theme.key}.png`);
    const url = `http://localhost:5173/?catalog=${theme.key}`;
    const userDataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'chrome-cat-'));

    console.log(`📸 [${theme.num}/13] Capturing: ${theme.name} (${theme.key})...`);

    const cmd = `"${CHROME_PATH}" --headless --hide-scrollbars --user-data-dir="${userDataDir}" --window-size=1080,1080 --screenshot="${outputFile}" "${url}"`;

    try {
      execSync(cmd, { stdio: 'pipe' });
      await sleep(1200);
      const stats = fs.statSync(outputFile);
      console.log(`   ✅ Success: ${path.basename(outputFile)} (${(stats.size / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`   ❌ Error on ${theme.key}:`, err.message);
    } finally {
      try {
        fs.rmSync(userDataDir, { recursive: true, force: true });
      } catch (e) {}
    }
  }

  // Also update the flagship katalog_vega.png in root
  const vegaSrc = path.join(OUTPUT_DIR, '02_vega.png');
  const vegaDst = path.resolve(__dirname, '../katalog_vega.png');
  if (fs.existsSync(vegaSrc)) {
    fs.copyFileSync(vegaSrc, vegaDst);
  }

  console.log('\n🎉 Finished! All 13 catalogs ready in:', OUTPUT_DIR);
}

run();
