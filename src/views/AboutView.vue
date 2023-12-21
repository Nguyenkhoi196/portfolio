<template>
  <div>
    <button @click="click()">click</button>
    <h1 class="ml6">
      <span class="text-wrapper">
        <span class="letters">tại saoooo ?</span>
      </span>
    </h1>
    <h2>aaa</h2>
  </div>
</template>

<script setup>
import anime from 'animejs'
import { onMounted } from 'vue'
import { gsap } from 'gsap-trial'
import SplitText from 'gsap-trial/SplitText'

gsap.registerPlugin(SplitText)

const click = () => {
  const splitTexta = new SplitText('.letters', { type: 'chars' })
  gsap.from(splitTexta.chars, 0.8, {
    duration: 0.5,
    y: 80,
    ease: 'back.out',
    stagger: 0.05
  })
}
</script>

<style lang="scss" scoped>
.ml6 {
  position: relative;
  font-weight: 900;
  font-size: 3.3em;
}

.ml6 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.2em;
  padding-right: 0.05em;
  padding-bottom: 0.1em;
  overflow: hidden;
}
</style>
