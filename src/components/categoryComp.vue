<template>
  <div class="categories-container">
      <div :style="{ backgroundColor: color }">
        <img :src="image" :alt="name" />
        <h3>{{name }}</h3>
        <p>{{ productCount }} items</p>
      </div>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  name: string
  image: string
  productCount: number
  color: string
}>()

</script>

<style scoped>
  .categories-container {
    display: flex;
    gap: 20px;
  }

  p {
    font-size: 12px;
    color: #B6B6B6;
  }

  h3 {
    font-size: 16px;
    color: #253D4E;
  }
  img {
    width: 80px;
    height: 80px;
  }
</style>
