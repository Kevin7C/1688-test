import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv } from 'vite';
import { resolve } from 'path';
import { createProxy } from './proxy.config';
import postcssPxtoRem from 'postcss-pxtorem'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    build: {
      outDir: env.VITE_OUT_DIR || 'dist',
    },
    plugins: [
      react(), 
    ],
    css:{
      postcss:{
        plugins:[
          postcssPxtoRem({
            rootValue: 80, 
            propList: ['*'],
          })
        ]
      }
    },
    resolve: {
      alias: {
        assets: resolve(__dirname, 'src/assets'),
        pages: resolve(__dirname, 'src/pages'),
        styles: resolve(__dirname, 'src/styles'),
        store: resolve(__dirname, 'src/store'),
        components: resolve(__dirname, 'src/components'),
        utils: resolve(__dirname, 'src/utils'),
        services: resolve(__dirname, 'src/services'),
        routes: resolve(__dirname, 'src/routes'),
        icons: resolve(__dirname, 'src/icons'),
        layouts: resolve(__dirname, 'src/layouts'),
        enums: resolve(__dirname, 'src/enums'),
        hooks: resolve(__dirname, 'src/hooks'),
      },
    },
    server: {
      port: Number(env.VITE_DEV_PORT || 4000),
      proxy: createProxy(env),
    },
  };
});
