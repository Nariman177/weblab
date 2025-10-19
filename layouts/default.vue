<template>
  <div>
    <header class="flex flex-row w-full items-center justify-between p-4 bg-[#652b5b] text-white border-b-2 border-[#6c33a0] shadow-lg max-sm:flex-col max-sm:items-start transition-all duration-300">
      <div class="flex basis-1/4 items-center justify-start px-8 min-w-40 max-sm:basis-auto max-sm:px-0 max-sm:w-full max-sm:justify-between">
        <img src="assets/img/spyder_logo.jpg" alt="Logo" class="w-16 h-16 rounded-full border-2 border-white shadow-md" />
        <div class="sm:hidden cursor-pointer" @click="switchBurger">
          <div v-if="!burger">
            <span class="block w-6 h-0.5 bg-purple mb-1"></span>
            <span class="block w-6 h-0.5 bg-white mb-1"></span>
            <span class="block w-6 h-0.5 bg-white"></span>
          </div>
          <div v-else>
            <span class="block w-6 h-0.5 bg-white rotate-45 translate-y-1.5"></span>
            <span class="block w-6 h-0.5 bg-white -rotate-45 -translate-y-1.5"></span>
          </div>
        </div>
      </div>

      
      <nav class="hidden sm:flex flex-row gap-6 font-medium">
        <NuxtLink to="/" class="p-2 hover:bg-[#6b32a0] hover:text-white rounded transition-all duration-200">Home</NuxtLink>
        <div class="relative">
          <NuxtLink
            to="#"
            @click.prevent="toggleLabs"
            class="p-2 hover:bg-[#6b32a0] hover:text-white rounded transition-all duration-200"
          >
            Labs ▼
          </NuxtLink>
          <ul v-show="labsOpen" class="absolute bg-white text-black border mt-2 rounded shadow-lg z-10 w-28">
            <li><NuxtLink to="/Lab4" class="block p-2 hover:bg-[#783bb0] hover:text-white">Lab4</NuxtLink></li>
            <li><NuxtLink to="/Lab5" class="block p-2 hover:bg-[#783bb0] hover:text-white">Lab5</NuxtLink></li>
            <li><NuxtLink to="/Lab6" class="block p-2 hover:bg-[#783bb0] hover:text-white">Lab6</NuxtLink></li>
          </ul>
        </div>
        <NuxtLink to="/login" class="p-2 hover:bg-[#6b32a0] hover:text-white rounded transition-all duration-200">LogIn</NuxtLink>
        <NuxtLink to="/logout" class="p-2 hover:bg-[#6b32a0] hover:text-white rounded transition-all duration-200">LogOut</NuxtLink>
      </nav>
    </header>

    
    <nav
      v-show="burger"
      class="flex flex-col gap-0 bg-[#f5f3f7] border-b-2 sm:hidden text-[#783bb0] font-medium"
    >
      <NuxtLink to="/" class="p-4 hoverv:bg-[#783bb0] hover:text-white border-t transition-all duration-200">Home</NuxtLink>
      <div class="border-t">
        <NuxtLink
          to="#"
          @click.prevent="toggleLabs"
          class="p-4 hover:bg-[#783bb0] hover:text-white block transition-all duration-200"
        >
          Labs ▼
        </NuxtLink>
        <ul v-show="labsOpen" class="bg-gray-100 pl-4">
          <li><NuxtLink to="/Lab4" class="block p-3 hover:bg-[#783bb0] hover:text-white border-t">Lab4</NuxtLink></li>
          <li><NuxtLink to="/Lab5" class="block p-3 hover:bg-[#783bb0] hover:text-white border-t">Lab5</NuxtLink></li>
          <li><NuxtLink to="/Lab6" class="block p-3 hover:bg-[#783bb0] hover:text-white border-t">Lab6</NuxtLink></li>
        </ul>
      </div>
      <NuxtLink to="/login" class="p-4 hover:bg-[#783bb0] hover:text-white border-t transition-all duration-200">LogIn</NuxtLink>
      <NuxtLink to="/logout" class="p-4 hover:bg-[#783bb0] hover:text-white border-t transition-all duration-200">LogOut</NuxtLink>
    </nav>

    
    <main class="p-8 max-sm:p-4 h-screen bg-gray-50">
      <slot />
    </main>

    
    <footer class="flex flex-row w-full bg-[#8842c1] text-white border-t-2 border-[#6c33a0] items-center px-4 py-3 gap-4 justify-center">
      <a href="#"><img src="https://www.google.com/favicon.ico" class="w-6 h-6 invert" /></a>
      <a href="#"><img src="https://github.com/favicon.ico" class="w-6 h-6 invert" /></a>
      <a href="#"><img src="https://netlify.com/favicon.ico" class="w-6 h-6 invert" /></a>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const labsOpen = ref(false);
const burger = ref(false);

const toggleLabs = () => {
  labsOpen.value = !labsOpen.value;
};

const switchBurger = () => {
  burger.value = !burger.value;
};
</script>
