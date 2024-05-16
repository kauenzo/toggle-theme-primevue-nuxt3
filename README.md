# Componente para mudar de tema

Usando nuxt 3 e primevue

## Como usar

- Cola os arquivos em `/components` e `/composables` em seu projeto;
- Adiciona o componente `ToggleTheme` em qualquer lugar.
- Seja feliz.

## Para variaveis que dependam do tema:

```ts
const { isDarkTheme } = useDarkMode()`
```

```html
<div
  v-if="isDarkTheme"
  :class="{'bg-red-500'} : isDarkTheme"
/>
```

## NuxtConfig

```ts
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
```

O tema pode ser alterado para qualquer outro padão que esteja em `public/themes`.

## Setup

Make sure to install the dependencies:

```bash
# pnpm
pnpm install

```

## Development Server

Start the development server on `http://localhost:3000`:

```bash

# pnpm
pnpm run dev

```

