interface layoutConfig {
  darkTheme: boolean
  theme: 'aura-dark-noir' | 'aura-light-noir'
}

const layoutConfig = reactive({
  darkTheme: true,
  theme: 'aura-dark-noir',
})

export function useDarkMode() {
  const isDarkTheme = computed(() => layoutConfig.darkTheme)

  return {
    layoutConfig: toRefs(layoutConfig),
    isDarkTheme,
  }
}
