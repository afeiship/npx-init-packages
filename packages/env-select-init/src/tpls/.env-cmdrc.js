// 1. .env-cmdrc.js
const { CraEnvs } = require('@jswork/env-select');

module.exports = CraEnvs.set({
  beta: {
    base_url: 'https://beta.dev.com',
  },
  staging: {
    base_url: 'https://prod.dev.com',
  },
});
