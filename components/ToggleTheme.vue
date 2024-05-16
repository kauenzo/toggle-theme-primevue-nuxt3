<script setup lang="ts">
const $primevue = usePrimeVue()
const { isDarkTheme, layoutConfig } = useDarkMode()

const onChangeTheme = (theme: string, mode: boolean): void => {
  $primevue.changeTheme(layoutConfig.theme.value, theme, 'theme-css', () => {
    layoutConfig.theme.value = theme
    layoutConfig.darkTheme.value = mode
  })
}

const onDarkModeChange = (value: boolean): void => {
  console.log(value)
  const newThemeName = value
    ? layoutConfig.theme.value.replace('light', 'dark')
    : layoutConfig.theme.value.replace('dark', 'light')

  layoutConfig.darkTheme.value = value
  onChangeTheme(newThemeName, value)
}
</script>

<template>
  <!-- Exemplo com imput Switch -->
  <InputSwitch
    :modelValue="layoutConfig.darkTheme.value"
    @update:modelValue="onDarkModeChange"
  />

  <!-- Exemplo usando icone em SVG -->
  <!-- <IconTheme
    :modelValue="layoutConfig.darkTheme.value"
    @click="onDarkModeChange(!isDarkTheme)"
  /> -->
</template>

<style lang="scss" scoped></style>
