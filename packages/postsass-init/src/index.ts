#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import fg from 'fast-glob';

const tpls = path.join(__dirname, 'tpls');
const files = fg.sync('**/*', { cwd: tpls, dot: true });

execSync('yarn add --dev autoprefixer');

// copy files:
files.forEach((file) => {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const src = path.join(tpls, file);
  const dist = path.join(process.cwd(), file);
  fs.copyFileSync(src, dist);
});

console.log('\n@reference: https://js.work/works/b19988493ab54');
console.log('\n@usage: postsass -s src/style.scss -d dist/style.css');


process.exit(0);
