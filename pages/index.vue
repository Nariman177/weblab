<template>
  <section class="services">
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="card"
    >
      <div class="face front">
        <img :src="card.image" :alt="card.title" />
        <h3>{{ card.title }}</h3>
      </div>

      <div class="face back">
        <h3>{{ card.title }}</h3>
        <p>{{ card.description }}</p>
        <div class="link">
          <a href="#">Тапсырыс беру</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

import airpods from '~/assets/img/airpods.jpg'
import klava from '~/assets/img/klava.jpg'
import lap2 from '~/assets/img/lap2.jpg'

const cards = [
  {
    image: airpods,
    title: "airpods",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil doloribus fugiat distinctio ducimus maxime totam nulla fuga odio non aperiam eos?",
  },
  {
    image: klava,
    title: "клавиатура",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil doloribus fugiat distinctio ducimus maxime totam nulla fuga odio non aperiam eos?",
  },
  {
    image: lap2,
    title: "Лаптоп",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil doloribus fugiat distinctio ducimus maxime totam nulla fuga odio non aperiam eos?",
  },
];
</script>

<style scoped>

.services {
  height: 76vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.card {
  position: relative;
  width: 300px;
  height: 350px;
  margin: 20px;
}

.card .face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.5s;
}

.card .front {
  transform: perspective(600px) rotateY(0deg);
  box-shadow: 0 5px 10px #000;
}

.card .front img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card .front h3 {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 45px;
  line-height: 45px;
  color: #fff;
  background: rgba(0, 0, 0, 0.4);
  text-align: center;
}

.card .back {
  transform: perspective(600px) rotateY(180deg);
  background: rgb(3, 35, 54);
  padding: 15px;
  color: #f3f3f3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  box-shadow: 0 5px 10px #000;
}

.card .back .link {
  border-top: solid 1px #f3f3f3;
  height: 50px;
  line-height: 50px;
}

.card .back .link a {
  color: #f3f3f3;
}

.card .back h3 {
  font-size: 30px;
  margin-top: 20px;
  letter-spacing: 2px;
}

.card .back p {
  letter-spacing: 1px;
  font-size: 15px;
}

.card:hover .front {
  transform: perspective(600px) rotateY(180deg);
}

.card:hover .back {
  transform: perspective(600px) rotateY(360deg);
}
</style>



