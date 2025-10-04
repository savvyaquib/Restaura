import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [
      '.loca.lt', // Allows all subdomains of loca.lt, including your localtunnel URL
      // 'your-subdomain.loca.lt', // Alternatively, specify the exact localtunnel subdomain
      // '192.168.1.100', // Example if you need to allow a specific local IP
    ],
  },
});
