<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import CategoryList from "@/components/categoryComp.vue";
import PromoSection from "@/components/promotionComp.vue";

const categories = ref<any[]>([])
const promotions = ref<any[]>([])

async function fetchCategories() {
  try {
    const res = await axios.get('http://localhost:3000/api/categories')
    categories.value = res.data
  } catch (err) {
    console.error('fetchCategories error:', err)
  }
}

async function fetchPromotions() {
  try {
    const res = await axios.get('http://localhost:3000/api/promotions')
    promotions.value = res.data
  } catch (err) {
    console.error('fetchPromotions error:', err)
  }
}

onMounted(() => {
  fetchCategories()
  fetchPromotions()
})
</script>

<template>
  <div>
    <CategoryList :categories="categories" />
    <PromoSection :promos="promotions" />
  </div>

</template>
