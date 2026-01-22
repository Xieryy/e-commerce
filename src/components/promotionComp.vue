<template>
  <div>
    <div class="card">
      <div
        v-for="(promo, index) in promos"
        :key="index"
        :style="{ backgroundColor: promo.color }"
      >
        <div class="promo">
          <h3>
            {{ promo.title }}
          </h3>
          <span style="margin-top: 30px;"><buttonComp/></span>
        </div>
        <div>
          <img :src="promo.image" :alt="promo.title"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import buttonComp from './buttonComp.vue';

const promos = [
  {
    title: "Everyday Fresh & Clean with Our Products",
    image: "src/assets/images/onion.png",
    color: "#F0E8D5",
  },
  {
    title: "Make your Breakfast Healthy and Easy",
    image: "src/assets/images/juice.png",
    color: "#F3E8E8",
  },
  {
    title: "The best Organic Products Online",
    image: "src/assets/images/basket.png",
    color: "#E7EAF3",
  },
];
</script>

<style scoped>
  div > div {
    display: flex;
    padding: 20px;
    border-radius: 10px;
  }

  .card {
    gap: 20px;
    width: 512px;
    height: 300px;
  }

  h3 {
    font-size: 20px;
    font-weight: bold;
    width: 200px;
  }

  .promo {
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  img {
    width: auto;
    height: auto;
  }

</style>
