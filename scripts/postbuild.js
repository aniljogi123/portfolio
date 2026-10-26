import fs from 'node:fs';
import path from 'node:path';

const distHtml = path.resolve('dist', 'dev.html');
const distIndex = path.resolve('dist', 'index.html');
const rootIndex = path.resolve('index.html');
const distAssets = path.resolve('dist', 'assets');
const rootAssets = path.resolve('assets');
const publicDir = path.resolve('public');

// 1. Ensure dist/index.html exists for GitHub Actions / dist deployment
if (fs.existsSync(distHtml)) {
  fs.copyFileSync(distHtml, distIndex);
  console.log('✓ Created dist/index.html from dist/dev.html');
  
  // 2. Ensure root index.html is the compiled bundle for master branch deployment
  fs.copyFileSync(distHtml, rootIndex);
  console.log('✓ Updated root index.html for master branch GitHub Pages direct serving');
} else if (fs.existsSync(distIndex)) {
  fs.copyFileSync(distIndex, rootIndex);
  console.log('✓ Updated root index.html from dist/index.html');
} else {
  console.error('❌ Neither dist/dev.html nor dist/index.html found!');
  process.exit(1);
}

// 3. Ensure assets directory is present in root
if (fs.existsSync(distAssets)) {
  if (fs.existsSync(rootAssets)) {
    fs.rmSync(rootAssets, { recursive: true, force: true });
  }
  fs.cpSync(distAssets, rootAssets, { recursive: true, force: true });
  console.log('✓ Synced dist/assets -> root assets/');
} else {
  console.warn('⚠️ dist/assets not found');
}

// 4. Ensure public assets are also available in dist and root
if (fs.existsSync(publicDir)) {
  const publicFiles = fs.readdirSync(publicDir);
  for (const file of publicFiles) {
    const src = path.join(publicDir, file);
    const destDist = path.join('dist', file);
    const destRoot = path.join('.', file);
    try {
      if (fs.statSync(src).isFile()) {
        fs.copyFileSync(src, destDist);
        if (!fs.existsSync(destRoot) || destRoot !== src) {
          fs.copyFileSync(src, destRoot);
        }
      }
    } catch (e) {
      // ignore
    }
  }
  console.log('✓ Verified public static assets in dist and root');
}
