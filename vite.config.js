import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(async () => {
  const { viteStaticCopy } = await import('vite-plugin-static-copy');

  return {
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: path.resolve(__dirname, 'node_modules/@springbokagency/bridgestone-web-components/dist/*'),
            dest: 'libs/bridgestone-web-components',
          },
        ],
      }),
    ],
    build: {
      outDir: '.', // Build directly to the project root
      target: 'es2022',
      emptyOutDir: false, // Prevent Vite from emptying the root directory
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, '404.html'),
        },
        output: {
          entryFileNames: 'scripts/[name]-[hash].js',
          chunkFileNames: 'scripts/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash][extname]',
        },
      },
    },
  };
});
