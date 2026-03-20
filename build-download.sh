#!/usr/bin/env bash
# Regenerates download.html by re-encoding index.html as base64
# and embedding it into the download page template.
set -euo pipefail
cd "$(dirname "$0")"

BLOB=$(base64 -w0 index.html)

# Extract the HTML before <script> and the JS after the APP_B64 line
SCRIPT_LINE=$(grep -n '^const APP_B64=' download.html | head -1 | cut -d: -f1)
BEFORE_SCRIPT=$((SCRIPT_LINE - 1))  # line before "const APP_B64=..."
AFTER_BLOB=$((SCRIPT_LINE + 1))     # first line after the blob (blank line or function)

# Skip the blank line between blob and function if present
NEXT=$(sed -n "${AFTER_BLOB}p" download.html)
if [ -z "$NEXT" ]; then
  AFTER_BLOB=$((AFTER_BLOB + 1))
fi

head -"$BEFORE_SCRIPT" download.html > download.html.tmp
echo "const APP_B64=\"${BLOB}\"" >> download.html.tmp
echo "" >> download.html.tmp
tail -n +"$AFTER_BLOB" download.html >> download.html.tmp

mv download.html.tmp download.html
echo "download.html rebuilt ($(wc -c < download.html) bytes)"
