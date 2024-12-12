// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    routeRules: {
        '/': { redirect: '/welcome' },
    },
    css: ['~/assets/css/main.css'],
    vite: {
        server: {
            hmr: {
                protocol: "ws",
                clientPort: 3000,
                path: 'hmr/'
            },
        },
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
