#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const fg = require('fast-glob');

const tpls = path.join(__dirname, 'tpls');

const files = fg.sync('**/*', { cwd: tpls, dot: true });
files.forEach((file) => {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.copyFileSync(path.join(tpls, file), path.join(process.cwd(), file));
});

console.log(`✓ copied ${files.length} template file(s) to ${process.cwd()}`);

// Detect package manager
const pm = fs.existsSync(path.join(process.cwd(), 'pnpm-lock.yaml'))
  ? 'pnpm add'
  : fs.existsSync(path.join(process.cwd(), 'yarn.lock'))
    ? 'yarn add'
    : 'npm install';

const packages = [
  '@jswork/http-schema',
  '@jswork/universal-request-adapter-fetch',
  '@jswork/universal-request-core',
];

console.log(`\n📦 installing http-schema dependencies via "${pm.split(' ')[0]}"...`);
execSync(`${pm} ${packages.join(' ')}`, { cwd: process.cwd(), stdio: 'inherit' });
console.log('✓ http-schema dependencies installed');
