#!/bin/bash
# Copy CV from Desktop folder to the website and optionally deploy.

SOURCE="${CV_SOURCE:-/Users/j1999c4/Desktop/2026_PhD/CV/CV_WeiCheHsu.pdf}"
DEST="$(cd "$(dirname "$0")/.." && pwd)/public/CV_WeiCheHsu.pdf"
DEPLOY=false

if [[ "$1" == "--deploy" ]]; then
  DEPLOY=true
fi

if [[ ! -f "$SOURCE" ]]; then
  echo "Error: CV not found at $SOURCE"
  exit 1
fi

cp "$SOURCE" "$DEST"
echo "Updated: $DEST"

if $DEPLOY; then
  cd "$(dirname "$0")/.."
  git add public/CV_WeiCheHsu.pdf
  git commit -m "Update CV"
  git push origin main
  echo "Deployed to weichehsu.com (Vercel will rebuild in ~1-2 min)"
fi
