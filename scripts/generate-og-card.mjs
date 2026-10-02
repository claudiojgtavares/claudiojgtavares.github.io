import sharp from 'sharp';

const width = 1200;
const height = 630;
const svg = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0B1220"/>
  <rect x="70" y="72" width="9" height="486" rx="4.5" fill="#3B82F6"/>
  <circle cx="1045" cy="118" r="106" fill="#162544" opacity=".72"/>
  <circle cx="1045" cy="118" r="106" fill="none" stroke="#3B82F6" stroke-width="2" opacity=".7"/>
  <path d="M70 558H1130" stroke="#1E2A44" stroke-width="2"/>
  <text x="125" y="285" fill="#E6EDF7" font-family="Arial, Helvetica, sans-serif" font-size="78" font-weight="700">Cláudio Tavares</text>
  <text x="130" y="365" fill="#60A5FA" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="600">Desenvolvimento &amp; TI · Cabo Verde</text>
  <text x="130" y="500" fill="#94A3B8" font-family="Arial, Helvetica, sans-serif" font-size="22">Portefólio · Sistemas · Software · Segurança</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile('public/images/og-card.png');
console.log('Generated public/images/og-card.png (1200x630 PNG)');
