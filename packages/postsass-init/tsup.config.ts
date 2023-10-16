import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/*.ts'],
  format: ['cjs', 'esm'],
  globalName: 'i18nHelper',
  dts: true,
  sourcemap: true
});
