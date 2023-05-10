#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import fg from 'fast-glob';
import { execSync } from 'child_process';

const tpls = path.join(__dirname, 'tpls');
const files = fg.sync('**/*', { cwd: tpls, dot: true });

execSync('yarn add @jswork/react-ant-i18n');

// copy files:
files.forEach((file) => {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const src = path.join(tpls, file);
  const dist = path.join(process.cwd(), file);
  fs.copyFileSync(src, dist);
});

console.log('@reference: https://js.work/posts/069e79035015a');

process.exit(0);
