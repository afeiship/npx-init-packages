#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const fg = require('fast-glob');
const detectPmInstallLog = require('@jswork/detect-pm-install-log');
const tpls = path.join(__dirname, 'tpls');

const files = fg.sync('**/*', { cwd: tpls, dot: true });
files.forEach((file) => {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.copyFileSync(path.join(tpls, file), path.join(process.cwd(), file));
});

console.log(`✓ copied ${files.length} template file(s) to ${process.cwd()}`);

detectPmInstallLog({
  packages: [
    '@jswork/http-schema',
    '@jswork/universal-request-adapter-fetch',
    '@jswork/universal-request-core',
  ],
});
