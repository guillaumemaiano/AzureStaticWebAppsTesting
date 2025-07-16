// scripts/copy.js
const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');

async function main() {
  try {
    // Copy all .htm/html files from ./src/**/ to ./build/
    const srcFiles = glob.sync('./src/**/*.{htm,html}');
    for (const file of srcFiles) {
      const dest = path.join('build', path.relative('src', file));
      await fs.ensureDir(path.dirname(dest));
      await fs.copy(file, dest);
    }

    // Copy root .htm/html files directly to ./build/
    const rootFiles = glob.sync('./*.{htm,html}');
    for (const file of rootFiles) {
      const dest = path.join('build', path.basename(file));
      await fs.copy(file, dest);
    }

    console.log('✔ HTML files copied');
  } catch (err) {
    console.error('❌ Copy failed:', err);
    process.exit(1);
  }
}

main();
