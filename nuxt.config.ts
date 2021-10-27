import { NuxtConfig } from '@nuxt/types'
// import ViteComponents from 'unplugin-vue-components/vite'
import 'nuxt-vite'

const config: NuxtConfig = {
  ssr: true,
  buildModules: [
    'nuxt-vite',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/tailwindcss',
    // 'nuxt-windicss',
    [
      'unplugin-auto-import/nuxt',
      {
        imports: [
          '@vueuse/core',
          '@nuxtjs/composition-api',
        ],
        presetOverriding: true,
      },
    ],
  ],
  tailwindcss: {
    mode: 'jit',
  },
  components: true,
  plugins: [
    '@/plugins/main.ts',
  ],
  css: [
    '@/assets/main.css',
  ],
  vite: {
    build: true,
    ssr: true,
    experimentWarning: false,
    plugins: [
      /*
      ViteComponents({
        dirs: [
          // resolve('./components'),
        ],
        resolvers: [
        ],
        dts: true,
      }),
     */
    ],
  },
}

export default config
