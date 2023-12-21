<template>
  <div>
    <menu-navbar />
    <div class="pt-16">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import MenuNavbar from '@/components/MenuNavbar.vue'
</script>

<style lang="scss" scoped></style>
