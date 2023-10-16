/** @type {import('postcss-load-config').Config} */
const config = {
  map: { inline: false },
  plugins: [require('autoprefixer')]
};

module.exports = config;
