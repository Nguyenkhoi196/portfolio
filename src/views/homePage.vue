<template>
  <div class="dark:bg-primary overflow-hidden">
    <div class="container mx-auto relative">
      <div class="circle-group">
        <div
          ref="circleRef1"
          class="circle blur-md w-[500px] bottom-[600px] -right-[150px] h-[500px] lg:w-[900px] lg:h-[900px] lg:-top-1/3 lg:left-1/2 bg-slate-200/20 rounded-full absolute"
        ></div>
        <div
          ref="circleRef2"
          class="circle blur lg:block w-[300px] h-[300px] top-2/3 -right-[200px] bg-tertiary/20 rounded-full absolute"
        ></div>
      </div>
      <div class="flex flex-col md:flex-row md:h-screen gap-10 py-5 px-10">
        <div class="flex flex-col gap-5 justify-center grow">
          <div
            class="lg:w-24 lg:h-24 w-16 h-16 rounded-full border-dark dark:border-white border-2 hover:z-10 hover:scale-150 ease-in-out duration-100 brightness-150"
          >
            <img src="../assets/avatar.png" class="rounded-full" alt="" />
          </div>
          <div class="flex flex-col gap-3">
            <p class="text-lg text-tertiary">Hello, My name is</p>

            <hr class="w-20" />
          </div>
          <h2 class="text-5xl md:text-7xl font-bold mb-4 text-dark">Khoi Nguyen</h2>
          <div id="quote" class="text-2xl md:text-4xl text-tertiary">
            <p>
              _
              <span id="text" class="font-space-mono"></span>
            </p>
          </div>
          <div class="text-dark text-base">
            <p>
              <i class="bx bx-envelope"></i>
              <span class="align-center pl-1"> nguyenkhoi196@gmail.com </span>
            </p>
            <p>
              <i ref="phone" class="bx bxs-phone"></i>
              <span class="align-center pl-1"> (+84) 858692372 </span>
            </p>
          </div>
          <!-- <grid-wave :width="30" :height="30" class="absolute" /> -->
        </div>
        <div class="overflow-hidden min-w-[30%] w-auto self-center">
          <grid-wave :width="30" :height="30" />
        </div>
      </div>
    </div>
    <div id="about" class="container mx-auto">
      <div class="flex flex-col py-20 px-10">
        <div class="flex-col flex gap-3">
          <p class="text-dark dark:text-tertiary text-xl">About me</p>

          <hr class="w-20" />
        </div>
        <div class="max-w-full">
          <div class="h-full">
            <h2 class="text-5xl text-tertiary dark:text-dark">
              I am an enthusiastic web developer based in Hanoi, with over 1 year of experience in
              website development.
            </h2>
          </div>
        </div>
        <div class="container mx-auto pt-10">
          <div class="flex flex-col md:flex-row gap-20">
            <div class="lg:w-full">
              <h2 class="text-3xl text-dark dark:text-tertiary">
                Design and develop beautiful websites
              </h2>
            </div>
            <div class="flex flex-col gap-5">
              <div>
                <p class="text-dark text-xl">
                  With one year of experience in a product company I already have the skills of
                  understanding client requirement and work flow, features, technologies used by the
                  company in its project. Moreover, I have learned and updated on current hot trends
                  in technology.
                </p>
              </div>
              <div>
                <p class="text-dark text-xl"></p>
              </div>
              <div class="pt-2">
                <a href="/">
                  <button
                    class="group text-dark border-dark group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 dark:hover:border-tertiary duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-3 origin-left hover:decoration-2 hover:text-tertiary relative bg-transparent h-12 w-64 border text-left p-3 text-base font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-1 before:bg-secondary/20 before:rounded-full before:blur-lg after:absolute after:z-1 after:w-20 after:h-20 after:content[''] after:bg-tertiary after:right-8 after:top-3 after:rounded-full after:blur-md"
                  >
                    See more
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="skill&experience" class="container mx-auto">
      <div class="grid grid-flow-row md:grid-flow-col px-10 py-20">
        <div class="flex flex-col gap-5">
          <h2 class="text-2xl text-dark dark:text-tertiary">Skill</h2>
          <div>
            <h4>Front-end :</h4>
            <p>HTML, CSS, VueJs, NuxtJs, Bootstrap, TailWindCss</p>
          </div>
          <div>
            <h4>Back-end :</h4>
            <p>Strapi, Restful API, Socket.io</p>
          </div>
          <div>
            <h4>Database :</h4>
            <p>PostgresQL</p>
          </div>
          <div>
            <h4>Other :</h4>
            <p>Javascript, Typescript, Git, Github, Jira/Scrum</p>
          </div>
        </div>
        <div>
          <h2 class="text-2xl text-dark dark:text-tertiary">My Experience</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import gridWave from '@/components/gridWave.vue'
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import TextPlugin from 'gsap/TextPlugin'
import anime from 'animejs'
const phone = ref(null)
onMounted(() => {
  tl.to('#quote #text', {
    duration: 3,
    text: {
      value: 'web developer'
    }
  })
  anime({
    targets: phone.value,
    rotate: [
      { value: '+=15deg', duration: 200 },
      { value: '-=15deg', duration: 200 },
      { value: '+=15deg', duration: 200 },
      { value: '-=15deg', duration: 200 },
      { value: '+=15deg', duration: 200 },
      { value: '-=15deg', duration: 200 },
      { value: '0', duration: 1500 }
    ],

    easing: 'linear',
    loop: true
  })
})
gsap.registerPlugin(TextPlugin)
gsap.defaults({ ease: 'none' })
const tl = gsap.timeline({ repeat: -1, yoyo: true })
</script>

<style lang="scss" scoped></style>
