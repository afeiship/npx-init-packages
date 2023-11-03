async function cacheKeyWillBeUsed({ request, mode }) {
  const url = new URL(request.url);
  return url.origin + url.pathname;
}

module.exports = {
  // debug
  clientsClaim: true,
  skipWaiting: true,
  globDirectory: 'dist/',
  globPatterns: ['**/*.{js,css,svg,png,jpg,jpeg,gif,mp4}'],
  globIgnores: ['*/fallback.js'],
  swDest: 'dist/sw.js',
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
  runtimeCaching: [
    {
      urlPattern: new RegExp('^https://web-assets.alo7.com/'),
      handler: 'CacheFirst',
      options: {
        cacheName: 'web-assets',
        cacheableResponse: {
          statuses: [0, 200], // Make sure 0 is included in this list.
        },
        plugins: [{ cacheKeyWillBeUsed }],
      },
    },
    {
      urlPattern: new RegExp('^https://tva1.js.work/'),
      handler: 'CacheFirst',
      options: {
        cacheName: 'tva1-images',
        cacheableResponse: {
          statuses: [0, 200], // Make sure 0 is included in this list.
        },
      },
    },
    {
      urlPattern: new RegExp('^https://unpkg.com/'),
      handler: 'CacheFirst',
      options: {
        cacheName: 'unpkg',
        cacheableResponse: {
          statuses: [0, 200, 302], // Make sure 0 is included in this list.
        },
      },
    },
  ],
};
