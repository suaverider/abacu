#!/usr/bin/env bash
# Regenerates index.html (landing/download page) by re-encoding app.html as base64
# and embedding it into the landing page template.
set -euo pipefail
cd "$(dirname "$0")"

BLOB=$(base64 -w0 app.html)

# Extract the HTML before <script> and the JS after the APP_B64 line
SCRIPT_LINE=$(grep -n '^const APP_B64=' index.html | head -1 | cut -d: -f1)
BEFORE_SCRIPT=$((SCRIPT_LINE - 1))  # line before "const APP_B64=..."
AFTER_BLOB=$((SCRIPT_LINE + 1))     # first line after the blob (blank line or function)

# Skip the blank line between blob and function if present
NEXT=$(sed -n "${AFTER_BLOB}p" index.html)
if [ -z "$NEXT" ]; then
  AFTER_BLOB=$((AFTER_BLOB + 1))
fi

head -"$BEFORE_SCRIPT" index.html > index.html.tmp
echo "const APP_B64=\"${BLOB}\"" >> index.html.tmp
echo "" >> index.html.tmp
tail -n +"$AFTER_BLOB" index.html >> index.html.tmp

mv index.html.tmp index.html
echo "index.html rebuilt ($(wc -c < index.html) bytes)"
