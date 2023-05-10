const { CraEnvs } = require("@jswork/env-select");

module.exports = CraEnvs.set({
  beta: {
    base_url: "https://beta.dev.com",
  },
  production: {
    base_url: "https://prod.dev.com",
  },
});
