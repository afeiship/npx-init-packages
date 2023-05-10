#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const tpls = path.join(__dirname, 'tpls');
const files = fs.readdirSync(tpls);

execSync('yarn add --dev env-cmd');
execSync('yarn add @jswork/env-select');
execSync('npm pkg set scripts.start "env-cmd -e envs react-scripts start"');
execSync('npm pkg set scripts.build "env-cmd -e envs react-scripts build"');

// copy files:
files.forEach((file) => {
  const src = path.join(tpls, file);
  const dest = path.join(process.cwd(), file);
  fs.copyFileSync(src, dest);
});

console.log('\n@reference: https://js.work/posts/61077d5843ff0');

process.exit(0);
