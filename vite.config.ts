import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { netlifyPlugin } from "@netlify/remix-adapter/plugin";

export default defineConfig({
  build: {
    rollupOptions: {
      external: ["virtual:remix/server-build"],
    },
  },
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths(), netlifyPlugin()],
});
