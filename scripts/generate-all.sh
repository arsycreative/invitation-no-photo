#!/bin/zsh
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
OUT="/Users/macbookpro/Documents/Personal/Template/invitation-without-photo/katalog"
mkdir -p "$OUT"

themes=(
  "01_altair:altair"
  "02_vega:vega"
  "03_lyra:lyra"
  "04_castor:castor"
  "05_orion:orion"
  "06_deneb:deneb"
  "07_sirius:sirius"
  "08_pollux:pollux"
  "09_spica:spica"
  "10_antares:antares"
  "11_capella:capella"
  "12_rigel:rigel"
  "13_aldebaran:aldebaran"
)

for item in "${themes[@]}"; do
  file="${item%%:*}"
  theme="${item##*:}"
  echo "📸 Capturing $theme -> $file.png..."
  "$CHROME" --headless --hide-scrollbars --window-size=1080,1080 --virtual-time-budget=2500 --screenshot="$OUT/$file.png" "http://localhost:5173/?catalog=$theme"
  sleep 1
done

cp "$OUT/02_vega.png" "/Users/macbookpro/Documents/Personal/Template/invitation-without-photo/katalog_vega.png"
echo "🎉 All 13 theme catalogs successfully generated!"
