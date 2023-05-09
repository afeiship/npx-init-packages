#!/usr/bin/env node

import path from 'path';
import fs from 'fs';
import { execSync } from 'child_process';

const tpls = path.join(__dirname, 'tpls');
const files = fs.readdirSync(tpls);

execSync('yarn add --dev tailwindcss');
console.log('@reference: https://js.work/posts/069e79035015a');


// copy files:
files.forEach((file) => {
  const src = path.join(tpls, file);
  const dest = path.join(process.cwd(), file);
  fs.copyFileSync(src, dest);
});

process.exit(0);
