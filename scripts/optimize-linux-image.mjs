import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const source = path.join(root, 'public', 'images', 'linux-terminal.png');
const destination = path.join(root, 'public', 'images', 'linux-terminal.webp');

await fs.access(source);
await sharp(source)
  .resize({ width: 1600, withoutEnlargement: true })
  .webp({ quality: 85 })
  .toFile(destination);

console.log(`Optimized ${path.relative(root, source)} -> ${path.relative(root, destination)}`);
