import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    'storefront/index': 'src/storefront/index.ts',
    'storefront/types': 'types/storefront/storefront.generated.d.ts'
  },
  format: ['esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  minify: true,
  treeshake: true,
  outDir: 'dist'
});
