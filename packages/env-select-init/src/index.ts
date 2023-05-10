#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import fg from 'fast-glob';

const tpls = path.join(__dirname, 'tpls');
const files = fg.sync('**/*', { cwd: tpls, dot: true });

execSync('yarn add --dev env-cmd');
execSync('yarn add @jswork/env-select');
execSync('npm pkg set scripts.start="env-cmd -e envs react-scripts start"');
execSync('npm pkg set scripts.build="env-cmd -e envs react-scripts build"');

// copy files:
files.forEach((file) => {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const src = path.join(tpls, file);
  const dist = path.join(process.cwd(), file);
  fs.copyFileSync(src, dist);
});

console.log('\n@reference: https://js.work/works/61077d5843ff0');

process.exit(0);
