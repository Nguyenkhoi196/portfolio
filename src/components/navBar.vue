<template>
  <nav class="bg-dark p-4 fixed w-screen z-10 nav-active">
    <div class="container mx-auto flex items-center justify-between gap-10">
      <!-- Logo hoặc Tên trang -->
      <div class="grow">
        <router-link to="/"><img src="./../assets/khoinguyen.png" alt="" /></router-link>
      </div>

      <!-- Nút Toggle cho Mobile -->
      <!-- Menu cho Desktop -->
      <div class="md:flex space-x-4">
        <div class="hidden md:flex space-x-2 lg:space-x-4 text-ubuntu">
          <!-- <router-link to="/" class="text-tertiary px-4 py-1">_home</router-link>
          <router-link to="/about" class="text-tertiary px-4 py-1">_about</router-link>
          <router-link to="/services" class="text-tertiary px-4 py-1">_remuse</router-link>
          <router-link to="/contact" class="text-tertiary px-4 py-1">_contact</router-link> -->
          <router-link
            v-for="(tab, index) in tabs"
            :key="index"
            :to="tab.route"
            class="text-tertiary px-4 py-1"
          >
            _{{ tab.name }}
          </router-link>
        </div>
        <button
          id="theme-toggle"
          type="button"
          class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg text-sm p-1"
        >
          <svg
            id="theme-toggle-light-icon"
            class="hidden w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
          <svg
            id="theme-toggle-dark-icon"
            class="hidden w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <!-- <label class="relative inline-flex items-center cursor-pointer">
          <input
            class="sr-only peer"
            value=""
            type="checkbox"
            v-model="isDark"
            @change="useToggle"
          />
          <div
            class="w-12 h-6 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute before:h-8 before:w-8 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-lg shadow-gray-400 peer-checked:shadow-lg peer-checked:shadow-gray-700 peer-checked:bg-[#383838] after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:-top-1 after:md:top-0 after:right-1 after:translate-y-full after:w-8 after:h-8 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0"
          ></div>
        </label> -->
      </div>
      <!-- Menu cho Mobile -->
      <!-- <div class="lg:hidden absolute top-16 left-0 w-full bg-gray-800 p-4">
        <router-link to="/about" class="block text-tertiary mb-2">About</router-link>
        <router-link to="/services" class="block text-tertiary mb-2">Services</router-link>
        <router-link to="/contact" class="block text-tertiary mb-2">Contact</router-link>
      </div> -->
    </div>
  </nav>
</template>
<script setup>
import { onMounted } from 'vue'

const tabs = [
  { name: 'home', route: '/' },
  { name: 'about', route: '/about' },
  { name: 'services', route: '/services' },
  { name: 'contact', route: '/contact' }
]
onMounted(() => {
  var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon')
  var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon')

  // Change the icons inside the button based on previous settings
  if (
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    themeToggleLightIcon.classList.remove('hidden')
  } else {
    themeToggleDarkIcon.classList.remove('hidden')
  }

  var themeToggleBtn = document.getElementById('theme-toggle')

  themeToggleBtn.addEventListener('click', function () {
    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden')
    themeToggleLightIcon.classList.toggle('hidden')

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.add('dark')
        localStorage.setItem('color-theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('color-theme', 'light')
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('color-theme', 'light')
      } else {
        document.documentElement.classList.add('dark')
        localStorage.setItem('color-theme', 'dark')
      }
    }
  })
})
</script>

<style scoped>
/* Các tùy chỉnh CSS cho Navbar */

/* Ẩn checkbox */
#menuToggle {
  display: none;
}

/* Ẩn menu mobile mặc định */
#menuToggle:not(:checked) + .lg:hidden {
  display: none;
}

/* Hiển thị menu mobile khi checkbox được chọn */
#menuToggle:checked + .lg:hidden {
  display: block;
}
</style>
