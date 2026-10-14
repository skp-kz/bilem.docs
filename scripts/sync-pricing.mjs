// Копирует единый прайс из приватного minidesk в публичную документацию (рядом должен лежать клон minidesk).
import fs from 'node:fs';
const src = process.env.PRICING_JSON || '../minidesk/bilem-dev/pricing.json';
if (!fs.existsSync(src)) { console.error(`нет ${src} — укажите PRICING_JSON`); process.exit(1); }
fs.copyFileSync(src, 'src/data/pricing.json');
console.log(`pricing.json обновлён из ${src}`);
