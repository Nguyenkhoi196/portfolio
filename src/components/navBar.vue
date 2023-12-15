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
          <router-link to="/" class="text-tertiary px-4 py-1">_home</router-link>
          <router-link to="/about" class="text-tertiary px-4 py-1">_about</router-link>
          <router-link to="/services" class="text-tertiary px-4 py-1">_remuse</router-link>
          <router-link to="/contact" class="text-tertiary px-4 py-1">_contact</router-link>
        </div>
        <label class="relative inline-flex items-center cursor-pointer">
          <input
            class="sr-only peer"
            value=""
            type="checkbox"
            @click="$emit('change-mode')"
            :checked="isDark"
          />
          <div
            class="w-12 h-6 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute before:h-8 before:w-8 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-lg shadow-gray-400 peer-checked:shadow-lg peer-checked:shadow-gray-700 peer-checked:bg-[#383838] after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:-top-1 after:md:top-0 after:right-1 after:translate-y-full after:w-8 after:h-8 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0"
          ></div>
        </label>
      </div>
      <div class="block md:hidden">
        <input type="checkbox" id="menuToggle" class="hidden" />
        <label for="menuToggle" class="cursor-pointer text-tertiary">
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </label>
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
defineProps(['isDark'])
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
