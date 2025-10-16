<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Home Page</h1>
    <p>Welcome to the homepage of my commanf</p>
    <div>
      <button @click="showImage = !showImage" class="p-2 bg-green-400 mt-4 hover:bg-green-600">
        our Image
      </button>
      <div v-if="showImage">
        <img src="assets/img/dolina.jpg" alt="Home Image" class="w-64 h-64 mt-4" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showImage = ref(false);
</script>
