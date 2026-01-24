import { defineStore } from 'pinia'

interface Group {
  id: number
  name: string
}

interface Promotion {
  id: number;
  title: string;
  image: string;
  color: string;
  buttonColor: string;
}

interface Category {
  id: number;
  name: string;
  image: string;
  productCount: number;
  color: string;
  group: string;
}

interface Product {
    id: number;
    name: string;
    rating: number;
    size: string;
    image: string;
    price: number;
    promotionAsPercentage: number;
    categoryId: number;
    instock: number;
    countSold: number;
    group: string
}

export const useProductStore = defineStore('product', {
  state: () => ({
    groups: [] as Group[],
    promotions: [] as Promotion[],
    categories: [] as Category[],
    products: [] as Product[]
  }),
  getters: {
    getCategoriesByGroup: (state) => {
      return (groupName: string) => state.categories.filter((category: Category) => category.group === groupName)
    },
    getProductsByGroup: (state) => {
      return (groupName: string) => state.products.filter((product: Product) => product.group === groupName)
    },
    getProductsByCategory: (state) => {
      return (categoryId: number) => state.products.filter((product: Product) => product.categoryId === categoryId)
    },
    getPopularProducts: (state) => {
      return state.products.filter((product: Product) => Number(product.countSold) > 10)
    },
  },
  actions: {
    async fetchGroups() {
      try {
        const response = await fetch('http://localhost:3000/api/groups')
        const data = await response.json()
        this.groups = data
      } catch (error) {
        console.error('Error fetching groups:', error)
      }
    },
    async fetchPromotions() {
      try {
        const response = await fetch('http://localhost:3000/api/promotions')
        const data = await response.json()
        this.promotions = data
      } catch (error) {
        console.error('Error fetching promotions:', error)
      }
    },
    async fetchCategories() {
      try {
        const response = await fetch('http://localhost:3000/api/categories')
        const data = await response.json()
        this.categories = data
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    },
    async fetchProducts() {
      try {
        const response = await fetch('http://localhost:3000/api/products')
        const data = await response.json()
        this.products = data
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    },
    async initializeStore() {
      await Promise.all([
        this.fetchGroups(),
        this.fetchPromotions(),
        this.fetchCategories(),
        this.fetchProducts()
      ])
    }
  },
})
