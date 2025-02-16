// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap",
        },
      ],
    },
  },
  devServer: {
    port: process.env.NUXT_PORT ? Number(process.env.NUXT_PORT) : 3000,
  },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/image", "@pinia/nuxt"],
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_API_BASE_URL || "http://localhost:3500",
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
