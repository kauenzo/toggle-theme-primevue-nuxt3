// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  vite: {
    server: {
      hmr: {
        port: 3002,
      },
    },
  },
  app: {
    head: {
      link: [
        {
          id: 'theme-css',
          rel: 'stylesheet',
          type: 'text/css',
          href: '/themes/aura-dark-noir/theme.css',
        },
      ],
    },
  },
  modules: ['nuxt-primevue', '@nuxtjs/tailwindcss'],
  css: ['primeicons/primeicons.css', 'primevue/resources/primevue.min.css'],
})

