#!/bin/sh

# Change current directory to misc directory so it can be called from everywhe>
SCRIPT_PATH=$(readlink -f "${0}")
SCRIPT_DIR=$(dirname "${SCRIPT_PATH}")

cd ..

# The dev stack serves these docs behind the GRIP gateway at /docs; production
# serves them at the domain root via Amplify. Build and preview under that base
# so asset and link URLs resolve through the gateway.
BASE="${DOCS_BASE:-/docs/}"
npm run docs:build -- --base "${BASE}"
npm run docs:preview -- --host --port 24173 --base "${BASE}"
