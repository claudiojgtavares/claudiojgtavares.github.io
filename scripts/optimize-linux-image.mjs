import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const source = path.join(root, 'public', 'images', 'linux-terminal.png');
const destination = path.join(root, 'public', 'images', 'linux-terminal.webp');
const focusedDestination = path.join(root, 'public', 'images', 'linux-terminal-focused.webp');

await fs.access(source);
await sharp(source)
  .resize({ width: 1600, withoutEnlargement: true })
  .webp({ quality: 85 })
  .toFile(destination);

await sharp(source)
  .extract({ left: 150, top: 120, width: 1320, height: 180 })
  .webp({ quality: 85 })
  .toFile(focusedDestination);

console.log(`Optimized ${path.relative(root, source)} -> ${path.relative(root, destination)}`);
console.log(`Focused ${path.relative(root, source)} -> ${path.relative(root, focusedDestination)}`);
