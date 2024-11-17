// vite.config.ts
import { extname, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import react from "file:///home/dreitagebart/dev/revealed/node_modules/.pnpm/@vitejs+plugin-react@4.3.3_vite@5.4.10_@types+node@22.9.0_/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { glob } from "file:///home/dreitagebart/dev/revealed/node_modules/.pnpm/glob@11.0.0/node_modules/glob/dist/esm/index.js";
import { defineConfig } from "file:///home/dreitagebart/dev/revealed/node_modules/.pnpm/vite@5.4.10_@types+node@22.9.0/node_modules/vite/dist/node/index.js";
import dts from "file:///home/dreitagebart/dev/revealed/node_modules/.pnpm/vite-plugin-dts@4.3.0_@types+node@22.9.0_rollup@4.25.0_typescript@5.6.3_vite@5.4.10_@types+node@22.9.0_/node_modules/vite-plugin-dts/dist/index.mjs";
import { libInjectCss } from "file:///home/dreitagebart/dev/revealed/node_modules/.pnpm/vite-plugin-lib-inject-css@2.1.1_vite@5.4.10_@types+node@22.9.0_/node_modules/vite-plugin-lib-inject-css/dist/index.js";
import tsconfigPaths from "file:///home/dreitagebart/dev/revealed/node_modules/.pnpm/vite-tsconfig-paths@5.1.1_typescript@5.6.3_vite@5.4.10_@types+node@22.9.0_/node_modules/vite-tsconfig-paths/dist/index.js";
var __vite_injected_original_dirname = "/home/dreitagebart/dev/revealed";
var __vite_injected_original_import_meta_url = "file:///home/dreitagebart/dev/revealed/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    libInjectCss(),
    dts({ tsconfigPath: resolve(__vite_injected_original_dirname, "tsconfig.lib.json") })
  ],
  build: {
    copyPublicDir: false,
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
      input: Object.fromEntries(
        glob.sync("lib/**/*.{ts,tsx}", {
          ignore: ["lib/**/*.d.ts"]
        }).map((file) => [
          relative("lib", file.slice(0, file.length - extname(file).length)),
          fileURLToPath(new URL(file, __vite_injected_original_import_meta_url))
        ])
      ),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js"
      }
    },
    lib: {
      entry: resolve(__vite_injected_original_dirname, "lib", "main.ts"),
      formats: ["es"]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9kcmVpdGFnZWJhcnQvZGV2L3JldmVhbGVkXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9kcmVpdGFnZWJhcnQvZGV2L3JldmVhbGVkL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2RyZWl0YWdlYmFydC9kZXYvcmV2ZWFsZWQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBleHRuYW1lLCByZWxhdGl2ZSwgcmVzb2x2ZSB9IGZyb20gXCJub2RlOnBhdGhcIjtcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tIFwibm9kZTp1cmxcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcbmltcG9ydCB7IGdsb2IgfSBmcm9tIFwiZ2xvYlwiO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xuaW1wb3J0IHsgbGliSW5qZWN0Q3NzIH0gZnJvbSBcInZpdGUtcGx1Z2luLWxpYi1pbmplY3QtY3NzXCI7XG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tIFwidml0ZS10c2NvbmZpZy1wYXRoc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuXHRwbHVnaW5zOiBbXG5cdFx0dHNjb25maWdQYXRocygpLFxuXHRcdHJlYWN0KCksXG5cdFx0bGliSW5qZWN0Q3NzKCksXG5cdFx0ZHRzKHsgdHNjb25maWdQYXRoOiByZXNvbHZlKF9fZGlybmFtZSwgXCJ0c2NvbmZpZy5saWIuanNvblwiKSB9KSxcblx0XSxcblx0YnVpbGQ6IHtcblx0XHRjb3B5UHVibGljRGlyOiBmYWxzZSxcblx0XHRyb2xsdXBPcHRpb25zOiB7XG5cdFx0XHRleHRlcm5hbDogW1wicmVhY3RcIiwgXCJyZWFjdC9qc3gtcnVudGltZVwiXSxcblx0XHRcdGlucHV0OiBPYmplY3QuZnJvbUVudHJpZXMoXG5cdFx0XHRcdGdsb2Jcblx0XHRcdFx0XHQuc3luYyhcImxpYi8qKi8qLnt0cyx0c3h9XCIsIHtcblx0XHRcdFx0XHRcdGlnbm9yZTogW1wibGliLyoqLyouZC50c1wiXSxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5tYXAoKGZpbGUpID0+IFtcblx0XHRcdFx0XHRcdHJlbGF0aXZlKFwibGliXCIsIGZpbGUuc2xpY2UoMCwgZmlsZS5sZW5ndGggLSBleHRuYW1lKGZpbGUpLmxlbmd0aCkpLFxuXHRcdFx0XHRcdFx0ZmlsZVVSTFRvUGF0aChuZXcgVVJMKGZpbGUsIGltcG9ydC5tZXRhLnVybCkpLFxuXHRcdFx0XHRcdF0pLFxuXHRcdFx0KSxcblx0XHRcdG91dHB1dDoge1xuXHRcdFx0XHRhc3NldEZpbGVOYW1lczogXCJhc3NldHMvW25hbWVdW2V4dG5hbWVdXCIsXG5cdFx0XHRcdGVudHJ5RmlsZU5hbWVzOiBcIltuYW1lXS5qc1wiLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdGxpYjoge1xuXHRcdFx0ZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCBcImxpYlwiLCBcIm1haW4udHNcIiksXG5cdFx0XHRmb3JtYXRzOiBbXCJlc1wiXSxcblx0XHR9LFxuXHR9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQStRLFNBQVMsU0FBUyxVQUFVLGVBQWU7QUFDMVQsU0FBUyxxQkFBcUI7QUFDOUIsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsWUFBWTtBQUNyQixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxtQkFBbUI7QUFQMUIsSUFBTSxtQ0FBbUM7QUFBNkgsSUFBTSwyQ0FBMkM7QUFTdk4sSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDM0IsU0FBUztBQUFBLElBQ1IsY0FBYztBQUFBLElBQ2QsTUFBTTtBQUFBLElBQ04sYUFBYTtBQUFBLElBQ2IsSUFBSSxFQUFFLGNBQWMsUUFBUSxrQ0FBVyxtQkFBbUIsRUFBRSxDQUFDO0FBQUEsRUFDOUQ7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNOLGVBQWU7QUFBQSxJQUNmLGVBQWU7QUFBQSxNQUNkLFVBQVUsQ0FBQyxTQUFTLG1CQUFtQjtBQUFBLE1BQ3ZDLE9BQU8sT0FBTztBQUFBLFFBQ2IsS0FDRSxLQUFLLHFCQUFxQjtBQUFBLFVBQzFCLFFBQVEsQ0FBQyxlQUFlO0FBQUEsUUFDekIsQ0FBQyxFQUNBLElBQUksQ0FBQyxTQUFTO0FBQUEsVUFDZCxTQUFTLE9BQU8sS0FBSyxNQUFNLEdBQUcsS0FBSyxTQUFTLFFBQVEsSUFBSSxFQUFFLE1BQU0sQ0FBQztBQUFBLFVBQ2pFLGNBQWMsSUFBSSxJQUFJLE1BQU0sd0NBQWUsQ0FBQztBQUFBLFFBQzdDLENBQUM7QUFBQSxNQUNIO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDUCxnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxNQUNqQjtBQUFBLElBQ0Q7QUFBQSxJQUNBLEtBQUs7QUFBQSxNQUNKLE9BQU8sUUFBUSxrQ0FBVyxPQUFPLFNBQVM7QUFBQSxNQUMxQyxTQUFTLENBQUMsSUFBSTtBQUFBLElBQ2Y7QUFBQSxFQUNEO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
