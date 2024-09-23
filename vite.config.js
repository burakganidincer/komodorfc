import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap"; // Doğru içe aktarma

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: "https://www.komodorfc.com",
      // İsteğe bağlı: sitemap.xml dosyasının oluşturulacağı dizin
      outDir: "dist",
    }),
  ],
});
