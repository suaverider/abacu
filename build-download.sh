#!/usr/bin/env bash
# Builds the full (non-demo) version of the app for sale on Gumroad.
# Output: soroban-trainer-pro.html — upload this file to Gumroad.
set -euo pipefail
cd "$(dirname "$0")"

cp app.html soroban-trainer-pro.html

# Flip demo mode OFF in the purchased version
sed -i 's/const DEMO_MODE=!new URLSearchParams(window.location.search).has('\''full'\'')/const DEMO_MODE=false/' soroban-trainer-pro.html

# Embed favicon as data URI so it works offline (standalone file)
FAVICON_B64=$(base64 -w0 favicon.svg)
sed -i "s|<link rel=\"icon\" type=\"image/svg+xml\" href=\"favicon.svg\"/>|<link rel=\"icon\" type=\"image/svg+xml\" href=\"data:image/svg+xml;base64,${FAVICON_B64}\"/>|" soroban-trainer-pro.html

echo "Built soroban-trainer-pro.html ($(wc -c < soroban-trainer-pro.html) bytes)"
echo "Upload this file to Gumroad as your product."
