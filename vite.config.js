import { defineConfig } from 'vite';
import { resolve } from 'path';

// Import needs to be awaited since it returns a promise
export default defineConfig(async () => {
  const { viteStaticCopy } = await import('vite-plugin-static-copy');

  // Define as a single object, not to be spread
  const copyWebComponentResources = {
    src: resolve(__dirname, 'node_modules/@springbokagency/bridgestone-web-components/dist/bridgestone-web-components/assets'),
    dest: 'assets',
  };

  return {
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: resolve(__dirname, 'node_modules/@springbokagency/bridgestone-web-components/dist/*'),
            dest: 'libs/bridgestone-web-components',
          },
          copyWebComponentResources, // Add as a separate item in the array, not spread
        ],
      }),
    ],
    build: {
      target: 'es2022',
      rollupOptions: {
        input: {
          main: resolve(__dirname, '404.html'),
        },
        output: {
          dir: 'dist',
        },
      },
    },
  };
});
