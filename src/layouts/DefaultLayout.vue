<template>
  <div>
    <nav-bar />
    <div class="pt-16">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import navBar from '@/components/navBar.vue'
</script>

<style lang="scss" scoped></style>
