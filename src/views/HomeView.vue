<template>
  <div class="dark:bg-primary overflow-hidden">
    <div
      class="overlay bg-white dark:bg-dark items-center justify-center fixed top-0 z-10 h-screen w-screen inset-0 center flex flex-col md:flex-row gap-5 lg:gap-10"
    >
      <p
        class="screen relative text-dark dark:text-primary font-extrabold lg:text-9xl md:text-7xl gap-5 text-5xl leading-[60px] flex flex-col"
      >
        <span
          class="overlay-title py-2 text-wrapper overflow-hidden hover:text-tertiary transition-all hover:cursor-zoom-in duration-500"
          ><span class="letters"> Khoi Nguyen </span></span
        >
        <span
          class="overlay-title overflow-hidden hover:text-secondary transition-all hover:cursor-zoom-in duration-500"
          ><span class="letters">Portfolio</span></span
        >
      </p>
      <div class="intro">
        <button
          @click="fadeOut"
          class="group explore text-3xl px-4 text-dark border-dark group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 dark:hover:border-tertiary duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-3 origin-left hover:decoration-2 hover:text-tertiary relative bg-transparent h-fit w-64 border text-left p-3 font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-1 before:bg-secondary/20 before:rounded-full before:blur-lg after:absolute after:z-1 after:w-20 after:h-20 after:content[''] after:bg-tertiary after:right-8 after:top-3 after:rounded-full after:blur-md"
        >
          Explore
        </button>
      </div>
    </div>
    <div class="overlay-2 container mx-auto relative">
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
      <div class="flex flex-col md:flex-row md:h-[calc(100vh-64px)] gap-10 py-5 px-10">
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
        </div>
        <div class="overflow-hidden min-w-[30%] w-auto self-center">
          <grid-wave :width="30" :height="30" />
        </div>
      </div>
    </div>
    <div id="offset" class="hidden">
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
                    understanding client requirement and work flow, features, technologies used by
                    the company in its project. Moreover, I have learned and updated on current hot
                    trends in technology.
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
            <hr class="w-20" />
            <div>
              <h4 class="font-medium">Front-end :</h4>
              <p>HTML, CSS, VueJs, NuxtJs, Bootstrap, TailWindCss</p>
            </div>
            <div>
              <h4 class="font-medium">Back-end :</h4>
              <p>Strapi, RestfulAPI, Socket.io</p>
            </div>
            <div>
              <h4 class="font-medium">Database :</h4>
              <p>PostgresQL</p>
            </div>
            <div>
              <h4 class="font-medium">Other :</h4>
              <p>Typescript, Git, Github, Jira/Scrum, Figma, Postman</p>
            </div>
            <div>
              <h4 class="font-medium">English :</h4>
              <p>
                TOEIC certificate ;<br />
                Can read and understand English documents
              </p>
            </div>
          </div>
          <div class="flex flex-col gap-5">
            <h2 class="text-2xl text-dark dark:text-tertiary">My Experience</h2>
            <hr class="w-20" />
            <div>
              <div class="flex flex-col pt-2 gap-2">
                <div class="p-2 px-3 rounded bg-primary/50 dark:bg-tertiary/50 w-fit">
                  2/2023 - Now
                </div>
                <h4>VNELEARNING TECHNOLOGY SOLUTIONS JOINT STOCK COMPANY</h4>
                <h3 class="text-base font-medium">Front-end Developer</h3>
                <p>Participating projects :</p>
                <p class="list-inside list-item">Hoola HomePage</p>
                <p>
                  Convert from design file to responsitive website interface. <br />Collaborate with
                  other departments to create ideas and contents for each page.<br />Learn the
                  company's products and workflow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="custom-cursor">
    <div id="cursor-big" class="custom-cursor__ball custom-cursor__ball--big"></div>
    <div id="cursor-small" class="custom-cursor__ball custom-cursor__ball--small"></div>
  </div>
</template>

<script setup>
import GridWave from '../components/GridWave.vue'
import { onMounted, ref } from 'vue'
import gsap from 'gsap-trial'
import TextPlugin from 'gsap-trial/TextPlugin'
import SplitText from 'gsap-trial/SplitText'
import anime from 'animejs'
const phone = ref(null)
const timeline = gsap.timeline()

const fadeOut = () => {
  document.getElementById('offset').classList.remove('hidden')
  document.getElementById('cursor-big').style.display = 'none'
  document.getElementById('cursor-small').style.display = 'none'
  timeline.play(0)

  timeline.to('.explore', {
    y: -100,
    opacity: 0,
    duration: 0.5
  })

  timeline.to('.screen', {
    y: -400,
    opacity: 0,
    ease: 'Power2.easeInOut',
    duration: 0.5
  })

  timeline.to('.overlay', {
    top: '-110%',
    ease: 'Expo.easeInOut',
    duration: 0.5
  })

  timeline.to('.overlay-2', {
    top: '-110%',
    ease: 'Expo.easeInOut',
    duration: 0.5
  })
}

// const reverse = () => timeline.reverse()
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
  const cursorBig = document.getElementById('cursor-big'),
    cursorSmall = document.getElementById('cursor-small'),
    withClassHover = document.getElementsByClassName('overlay-title'),
    withHover = [...withClassHover]

  const onMouseMove = (e) => {
    cursorSmall.style.opacity = 1
    gsap.to(cursorBig, 0.3, {
      x: e.clientX - 18,
      y: e.clientY - 18
    })
    gsap.to(cursorSmall, 0.2, {
      x: e.clientX - 4,
      y: e.clientY - 4
    })
  }
  const onMouseHover = () => {
    gsap.to(cursorBig, 0.4, {
      scale: 4
    })
  }
  const onMouseHoverOut = () => {
    gsap.to(cursorBig, 0.4, {
      scale: 1
    })
  }

  // Event Listeners
  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseup', onMouseHoverOut)
  document.addEventListener('mouseenter', () => {
    cursorBig.style.opacity = 1
    cursorSmall.style.opacity = 1
  })
  document.addEventListener('mouseleave', () => {
    cursorBig.style.opacity = 0
    cursorSmall.style.opacity = 0
  })
  withHover.forEach((element) => {
    element.addEventListener('mouseover', onMouseHover)
    element.addEventListener('mouseout', onMouseHoverOut)
  })
  const splitTexta = new SplitText('.letters', { type: 'chars' })
  gsap.from(splitTexta.chars, {
    duration: 0.5,
    y: 200,
    ease: 'back.out',
    stagger: 0.05
  })
  anime({
    targets: '.explore',
    translateY: -20,
    duration: 300,
    direction: 'alternate'
  })
})

gsap.registerPlugin(TextPlugin, SplitText)
gsap.defaults({ ease: 'none' })
const tl = gsap.timeline({ repeat: -1, yoyo: true })
</script>

<style lang="scss" scoped>
.custom-cursor__ball {
  position: fixed;
  top: 0;
  left: 0;
  mix-blend-mode: difference;
  z-index: 99999;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.5s ease;
}

.custom-cursor__ball--big {
  content: '';
  width: 35px;
  height: 35px;
  background: #427864;
  border-radius: 50%;
}

.custom-cursor__ball--small {
  content: '';
  width: 6px;
  height: 6px;
  background: #78fff1;
  border-radius: 50%;
}
</style>
