import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: "src/components.d.ts",
    }),
    AutoImport({
      imports: ["vue", "vue-router"],

      dts: "src/auto-imports.d.ts",
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },

  server: {
    proxy: {
      "/api": {
        // target: "http://www.bing.com",
        target: "http://192.168.1.171:8050/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/"),
      },
    },
  },
});
