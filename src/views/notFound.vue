<template>
  <div class="min-h-screen center flex-col md:text-8xl text-6xl font-extrabold relative z-10">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-10">
      <h1 class="text-[200px] text-gray-600/70">404</h1>
      <button
        @click="router.push('/')"
        class="text-4xl text-gray-600/70 hover:text-gray-700/70 text-center"
      >
        Back to home
      </button>
    </div>
  </div>

  <div class="frame">
    <div></div>
    <div></div>
    <div></div>
  </div>
  <canvas id="canvas"></canvas>
</template>

<script setup>
import { onMounted } from 'vue'
import router from '@/router'
onMounted(() => {
  let canvas, ctx, imgData, pix, WIDTH, HEIGHT

  const flickering = function () {
    for (let i = 0; i < pix.length; i += 4) {
      const color = Math.random() * 255 + 50
      pix[i] = color
      pix[i + 1] = color
      pix[i + 2] = color
    }
    ctx.putImageData(imgData, 0, 0)
  }
  const init = () => {
    canvas = document.getElementById('canvas')
    ctx = canvas.getContext('2d')
    canvas.width = WIDTH = 700
    canvas.height = HEIGHT = 500
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, WIDTH, HEIGHT)
    ctx.fill()
    imgData = ctx.getImageData(0, 0, WIDTH, HEIGHT)
    pix = imgData.data
    setInterval(flickering, 30)
  }
  init()
})
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

html {
  height: 100%;
  overflow: hidden;
}

canvas {
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.caps {
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  animation: as 8s linear infinite;
}

.caps img {
  display: block;
  width: 100%;
  height: 100%;
}

/* @keyframes as {
  0% {
    opacity: 0.4;
  }
  10% {
    opacity: 0.3;
  }
  20% {
    opacity: 0.1;
  }
  30% {
    opacity: 0.5;
  }
  40% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.8;
  }
  55% {
    opacity: 0.3;
  }
  55% {
    opacity: 0.4;
  }
} */

.frame {
  z-index: 3;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: -moz-radial-gradient(
    center,
    ellipse cover,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 19%,
    rgba(0, 0, 0, 0.9) 100%
  ); /* FF3.6+ */
  background: -webkit-gradient(
    radial,
    center center,
    0px,
    center center,
    100%,
    color-stop(0%, rgba(0, 0, 0, 0)),
    color-stop(19%, rgba(0, 0, 0, 0)),
    color-stop(100%, rgba(0, 0, 0, 0.9))
  ); /* Chrome,Safari4+ */
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 19%,
    rgba(0, 0, 0, 0.9) 100%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-radial-gradient(
    center,
    ellipse cover,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 19%,
    rgba(0, 0, 0, 0.9) 100%
  ); /* Opera 12+ */
  background: -ms-radial-gradient(
    center,
    ellipse cover,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 19%,
    rgba(0, 0, 0, 0.9) 100%
  ); /* IE10+ */
  background: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 19%,
    rgba(0, 0, 0, 0.9) 100%
  ); /* W3C */
}

.frame div {
  position: absolute;
  left: 0;
  top: -20%;
  width: 100%;
  height: 20%;
  background-color: rgba(0, 0, 0, 0.12);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  animation: asd 9s linear infinite;
}

.frame div:nth-child(1) {
  animation-delay: 0;
}

.frame div:nth-child(2) {
  animation-delay: 3s;
}

.frame div:nth-child(3) {
  animation-delay: 6s;
}

@keyframes asd {
  0% {
    top: -20%;
  }
  100% {
    top: 100%;
  }
}
</style>
