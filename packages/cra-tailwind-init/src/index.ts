import path from 'path';
import fs from 'fs';
import { execSync } from 'child_process';

const tpls = path.join(__dirname, 'tpls');
const files = fs.readdirSync(tpls);

execSync('yarn add --dev tailwindcss');
execSync('npx tailwindcss init');

// copy files:
files.forEach((file) => {
  const src = path.join(tpls, file);
  const dest = path.join(process.cwd(), file);
  fs.copyFileSync(src, dest);
});

process.exit(0);
