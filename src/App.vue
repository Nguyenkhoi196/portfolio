<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup>
import { computed, provide } from 'vue'
import { useRoute } from 'vue-router'
import { PUBLIC_LAYOUT } from '@/constants'

const route = useRoute()
const layout = computed(() => (route.meta.layout || PUBLIC_LAYOUT) + '-layout')
console.log(layout.value)
provide('message', 'hello world')
</script>

<style scoped></style>
