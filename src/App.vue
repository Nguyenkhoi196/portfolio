<template>
  <div>
    <nav-bar @change-mode="toggleDark" :isDark="isDark" />
    <router-view class="pt-16" />
  </div>
</template>

<script setup>
import navBar from './components/navBar.vue'
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<style scoped></style>
