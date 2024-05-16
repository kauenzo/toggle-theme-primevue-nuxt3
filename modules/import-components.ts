import { addComponentsDir, createResolver, defineNuxtModule } from 'nuxt/kit'

export default defineNuxtModule({
  setup() {
    const { resolve } = createResolver(import.meta.url)

    addComponentsDir({
      path: resolve('../assets/icons'),
      prefix: 'Icon',
      ignore: ['**/*.svg'],
    })
  },
})
