import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(async () => {
  // Import a different copy plugin that's more compatible with Vite
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
      target: 'es2022', // Add this line to support top-level await
      rollupOptions: {
        input: {
          // Use 404.html as the entry point since it exists in your project
          main: path.resolve(__dirname, '404.html'),
        },
        output: {
          dir: 'dist',
        },
      },
    },
  };
});
