<template>
  <div class="relative grid justify-center">
    <div
      @click="handleDotClick"
      :style="{ gridTemplateColumns: `repeat(${GRID_WIDTH} , minmax(0, 1fr)` }"
      class="grid w-fit"
    >
      <div
        v-for="dot in dots"
        :key="dot.key"
        :data-index="dot.index"
        class="group dot rounded-full p-1 transition-colors hover:bg-blue-600"
      >
        <div
          class="dot-point h-1 w-1 rounded-full bg-gradient-to-b from-secondary to-blue-200 opacity-50 group-hover:from-indigo-600 group-hover:to-white"
          :data-index="dot.index"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import anime from 'animejs'
const props = defineProps(['height', 'width'])

const GRID_WIDTH = props.width
const GRID_HEIGHT = props.height

const handleDotClick = (e) => {
  anime({
    targets: '.dot-point',
    scale: [
      { value: 1.35, easing: 'easeOutSine', duration: 350 },
      { value: 0.8, easing: 'easeInOutQuad', duration: 500 },
      { value: 1, easing: 'easeInOutQuad', duration: 500 }
    ],
    translateY: [
      { value: -15, easing: 'easeOutSine', duration: 350 },
      { value: 10, easing: 'easeInOutQuad', duration: 500 },
      { value: -8, easing: 'easeInOutQuad', duration: 500 },
      { value: 0, easing: 'easeInOutQuad', duration: 500 }
    ],
    opacity: [
      { value: 1, easing: 'easeOutSine', duration: 250 },
      { value: 0.5, easing: 'easeInOutQuad', duration: 500 },
      { value: 0.6, easing: 'easeInOutQuad', duration: 500 },
      { value: 0.3, easing: 'easeInOutQuad', duration: 500 },
      { value: 0.5, easing: 'easeInOutQuad', duration: 500 }
    ],
    delay: anime.stagger(100, {
      grid: [GRID_WIDTH, GRID_HEIGHT],
      from: e.target.dataset.index
    })
  })
}

const dots = computed(() => {
  const dots = []
  let index = 0

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push({
        index,
        key: `${i}-${j}`
      })
      index++
    }
  }
  return dots
})
</script>

<style lang="scss">
/* Add your styles here */
.dot:hover ~ cursor {
  @apply scale-150;
}
</style>
