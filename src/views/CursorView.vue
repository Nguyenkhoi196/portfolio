<template>
  <div class="containerabc dark:bg-primary">
    <div class="h-screen w-screen"></div>
    <div class="scroll flex w-[500%]">
      <div class="scrolling-text fist whitespace-nowrap text-[100px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries
      </div>
      <!-- <div class="scrolling-text second whitespace-nowrap text-[100px]">Your Long Text Here</div>
      <div class="scrolling-text third whitespace-nowrap text-[100px]">Your Long Text Here</div> -->
    </div>
    <div class="h-screen"></div>
    <div class="h-screen"></div>
  </div>
</template>

<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'

gsap.registerPlugin(ScrollTrigger)
onMounted(() => {
  let sections = gsap.utils.toArray('.scrolling-text')
  console.log(sections)
  const show = () => {
    document.body.style.overflow = 'auto'
  }
  const scrollTween = gsap
    .to(sections, {
      xPercent: -100 * sections.length,
      ease: 'none',
      duration: 6,
      horizontal: true,
      scrollTrigger: {
        trigger: '.scroll',
        pin: true,
        start: 'top center',
        end: '+=3000',
        scrub: 0.1,
        // markers: true,
        // end: '+=3000',
        markers: true
      }
    })
    [('fist', 'second', 'third')].forEach((triggerClass, index) => {
      console.log(triggerClass, index)
      ScrollTrigger.create({
        trigger: '.' + triggerClass,
        containerAnimation: scrollTween,
        start: 'center center',
        end: 'bottom bottom',
        markers: true,
        onToggle: (self) =>
          gsap.to('.marker-' + (index + 1), { duration: 0.25, autoAlpha: self.isActive ? 1 : 0 })
      })
    })
})
</script>

<style lang="scss" scoped>
.scrolling-text {
  white-space: nowrap;
}
</style>
