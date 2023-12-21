<template>
  <div>
    <div class="" @click="animateText">
      <button>button</button>
    </div>
    <div class="block justify-center items-center text-wrapper overflow-hidden">
      <span class="letters text-3xl flex">this is machine gun</span>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import anime from 'animejs'
onMounted(() => {
  const textWrapper = document.querySelector('.letters')
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<p class='letter'>$&</p>")
})
const animateText = () => {
  anime
    .timeline()
    .add({
      targets: '.letter',

      translateY: ['1.1em', 0],
      translateZ: 0,
      duration: 750,
      delay: (el, i) => 50 * i
    })
    .add({
      targets: '.text-wrapper',
      opacity: 1,
      duration: 1000,
      easing: 'easeOutExpo',
      delay: 1000
    })
}
</script>

<style scoped lang="scss">
/* Bổ sung CSS nếu cần */
</style>
