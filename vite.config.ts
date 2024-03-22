import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig, loadEnv } from "vite";
import { createHtmlPlugin } from 'vite-plugin-html'
import VitePluginCompress from 'vite-plugin-compression'

export default defineConfig(({ mode }) => {
  const getEnvFiled = (field: string | number) => loadEnv(mode, './')[field]
  return {
    plugins: [
      react(),
      VitePluginCompress(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            title: getEnvFiled('VITE_BRANDING_NAME') || '',
            favIcon: getEnvFiled('VITE_APP_FAVICON'),
          }
        }
      })
    ],
    public: '/main/',
    resolve: {
      //别名
      alias: {
        "~": path.resolve(__dirname, "./"), // 根路径
        "@": path.resolve(__dirname, "src"), // src 路径
      },
    },
    css: {
      preprocessorOptions: {
        //less文件
        less: {
          additionalData: `@import "${path.resolve(
            __dirname,
            "src/styles/common.less"
          )}";`,
          // 支持内联 JavaScript
          javascriptEnabled: true,
        },
      },
    },
    server: {
      port: 3001,
      host: "0.0.0.0",
      open: false,
      // proxy: {
      //   "/api": {
      //     target: "https://xxx.com/api/v1",
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/dev-api/, ""),
      //   },
      // },
    },
  }
});