<script setup lang="ts">
import { ref, reactive } from 'vue'
import phone1 from '~/assets/img/phone1.jpg'
import lap1 from '~/assets/img/lap1.jpg'
import lap3 from '~/assets/img/lap3.jpg'
import lap4 from '~/assets/img/lap3.jpg'
import lap5 from '~/assets/img/lap5.jpg'
import phone3 from '~/assets/img/phone3.jpg'
import lap6 from '~/assets/img/lap6.jpg'
import lap7 from '~/assets/img/lap7.jpg'
import lap8 from '~/assets/img/lap8.jpg'
import lap9 from '~/assets/img/lap9.jpg'
import lap10 from '~/assets/img/lap10.jpg'
import lap11 from '~/assets/img/lap11.jpg'
import lap12 from '~/assets/img/lap12.jpg'
import lap13 from '~/assets/img/lap13.jpg'


const selected = ref('all')

const pictures = reactive([
  { src: phone1, title: 'Phone1', category: 'phone' },
  { src: lap1, title: 'Laptop1', category: 'laptop' },
  { src: lap3, title: 'Laptop2', category: 'laptop' },
  { src: lap4, title: 'Laptop3', category: 'laptop' },
  { src: lap5, title: 'Laptop5', category: 'phone' },
  { src: phone3, title: 'phone3', category: 'phone' },
  { src: lap6, title: 'Laptop6', category: 'laptop' },
  { src: lap7, title: 'Laptop7', category: 'laptop' },
  { src: lap8, title: 'Laptop8', category: 'laptop' },
  { src: lap9, title: 'Laptop9', category: 'laptop' },
  { src: lap10, title: 'Laptop10', category: 'laptop' },
  { src: lap11, title: 'Laptop11', category: 'laptop' },
  { src: lap12, title: 'Laptop12', category: 'laptop' },
  { src: lap13, title: 'Laptop13', category: 'laptop' }
])
</script>

<template>
  <main class="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 flex-col items-center py-10 text-white">
    
    
    <h1 class="text-4xl font-bold mb-6 drop-shadow-lg">🌄 My Photo Gallery about electronic</h1>

    
    <div class="flex gap-6 bg-white/20 backdrop-blur-md px-8 py-4 rounded-full mb-10 text-lg">
      <label><input type="radio" value="all" v-model="selected" class="mr-2" /> All</label>
      <label><input type="radio" value="laptop" v-model="selected" class="mr-2" /> laptop</label>
      <label><input type="radio" value="phone" v-model="selected" class="mr-2" /> phone</label>
      <label><input type="radio" value="other" v-model="selected" class="mr-2" /> other</label>
    </div>

    
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <div
        v-for="(pic, index) in pictures"
        :key="index"
        v-show="selected === 'all' || pic.category === selected"
        class="bg-white rounded-2xl shadow-xl p-3 text-gray-900 transform hover:scale-105 transition duration-300"
      >
        <img :src="pic.src" :alt="pic.title" class="rounded-xl w-full h-48 object-cover" />
        <p class="mt-2 text-center font-semibold text-lg">{{ pic.title }}</p>
      </div>
    </div>

    
    
  </main>
</template>

<style scoped>
img {
  @apply rounded-lg shadow-md;
}
</style>
