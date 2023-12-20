<template>
  <component :is="layout">
    <transition name="fade">
      <router-view />
    </transition>
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
