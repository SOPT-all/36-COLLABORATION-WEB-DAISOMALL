import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react({
      jsxImportSource: '@emotion/react',
      babel: { plugins: ['@emotion/babel-plugin'] },
    }),
    svgr({ svgrOptions: { icon: true } }),
  ],
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@apis': path.resolve(__dirname, 'src/apis'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@app-types': path.resolve(__dirname, 'src/types'),
    },
  },
});
