// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  
  devtools: { enabled: true },
  
  modules: ['vuetify-nuxt-module'],
  
  css: ['~/assets/scss/style.scss'],
  
  vuetify: {
    moduleOptions: {
      disableVuetifyStyles: true,
      
      styles: {
        configFile: '/assets/scss/settings.scss'
      },

      includeTransformAssetsUrls: {
        NuxtImg: ['src'],
        OgImage: ['image'],
      },

      ssrClientHints: {
        reloadOnFirstRequest: false,
        prefersColorScheme: true,
        // prefersColorSchemeOptions: {
        //   useBrowserThemeOnly: false,
        // },
        viewportSize: true,
      },
    }
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-api',
        }
      }
    }
  }
})