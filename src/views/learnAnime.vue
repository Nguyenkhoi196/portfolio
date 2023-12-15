<template>
  <div>
    <div class="h-screen"></div>
    <!-- <div class="h-screen">
      <div id="element" class="w-fit p-5 rounded bg-slate-800 relative">
        <p class="text-center">element</p>
      </div>
    </div> -->
    <div id="containera" class="element">
      <div class="box">
        <p>Your Content Goes Here</p>
      </div>
    </div>
    <div class="box-1"><p>test</p></div>
    <div class="h-screen"></div>
  </div>
</template>

<script setup>
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { onMounted } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const lenis = new Lenis()
gsap.registerPlugin(ScrollTrigger)

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

const initGSAP = () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.element',
      pin: '.box-1',
      start: 'top 60%',
      end: 'bottom 30%',
      // toggleActions: 'restart none none none',
      pinSpacing: true,
      scrub: 0.5,
      snap: {
        snapTo: 'labels',
        duration: { min: 0.1, max: 1 },
        delay: 0.1,
        ease: 'none'
      },
      markers: true
    }
  })

  tl.addLabel('start')
    .from('.box p', { scale: 0.3, rotation: 45, autoAlpha: 0 })
    .addLabel('color')
    .from('.box', { backgroundColor: '#28a92b' })
    .addLabel('spin')
    .to('.box', { rotation: 360 })
    .addLabel('end')
    .to('.box')
}

onMounted(initGSAP)
requestAnimationFrame(raf)
</script>

<style scoped lang="scss">
.container {
  height: 200vh;
}

.box {
  width: 100px;
  height: 100px;
  background-color: #ff5733;
  // margin: 50vh auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.box-1 {
  width: 100px;
  height: 100px;
  background-color: green;
  // margin: 50vh auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
</style>
