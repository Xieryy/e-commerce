import { defineStore } from 'pinia'

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
    groups: ['Milks & Dairies', 'Coffes & Teas', 'Pet Foods', 'Meats', 'Vegetables', 'Fruits'],
    promotions: [
      {
        id: 1,
        title: 'Everyday Fresh & Clean with Our Products',
        image: 'src/assets/images/onion.png',
        color: '#F0E8D5',
        buttonColor: '#3BB77E',
      },
      {
        id: 2,
        title: 'Make your Breakfast Healthy and Easy',
        image: 'src/assets/images/juice.png',
        color: '#F3E8E8',
        buttonColor: '#3BB77E',
      },
      {
        id: 3,
        title: 'The best Organic Products Online',
        image: 'src/assets/images/basket.png',
        color: '#E7EAF3',
        buttonColor: '#3BB77E',
      },
    ] as Promotion[],
    categories: [
      { id: 1, name: 'Burger', image: 'src/assets/images/Burger.png', productCount: 14, color: '#f2fce4', group: 'Milks & Dairies' },
      { id: 2, name: 'Peach', image: 'src/assets/images/peach.png', productCount: 17, color: '#fffceb', group: 'Fruits' },
      { id: 3, name: 'Organic Kiwi', image: 'src/assets/images/kiwi.png', productCount: 21, color: '#ecffec', group: 'Fruits' },
      { id: 4, name: 'Red Apple', image: 'src/assets/images/apple.png', productCount: 68, color: '#feefea', group: 'Fruits' },
      { id: 5, name: 'Snack', image: 'src/assets/images/snack.png', productCount: 34, color: '#fff3eb', group: 'Pet Foods' },
      { id: 6, name: 'Black plum', image: 'src/assets/images/plum.png', productCount: 25, color: '#fff3ff', group: 'Fruits' },
      { id: 7, name: 'Vegetables', image: 'src/assets/images/vegetable.png', productCount: 65, color: '#e9f8ff', group: 'Vegetables' },
      { id: 8, name: 'Headphone', image: 'src/assets/images/headphone.png', productCount: 33, color: '#fffceb', group: 'Meats' },
      { id: 9, name: 'Cake & Milk', image: 'src/assets/images/cake2.png', productCount: 54, color: '#f2fce4', group: 'Milks & Dairies' },
      { id: 10, name: 'Orange', image: 'src/assets/images/orange.png', productCount: 63, color: '#fff3ff', group: 'Fruits' },
    ] as Category[],
    products: [
      { id: 1, name: 'Mango', rating: 4.5, size: '1kg, Price', image: 'src/assets/images/mango.png', price: 4.99, promotionAsPercentage: 10, categoryId: 1, instock: 20, countSold: 15, group: 'Fruits' },
      { id: 2, name: 'Corn', rating: 4.0, size: '1kg, Price', image: 'src/assets/images/corn.png', price: 3.49, promotionAsPercentage: 0, categoryId: 4, instock: 30, countSold: 8, group: 'Fruits' },
      { id: 3, name: 'Orange', rating: 4.8, size: '1kg, Price', image: 'src/assets/images/orange1.png', price: 2.99, promotionAsPercentage: 5, categoryId: 2, instock: 25, countSold: 12, group: 'Fruits' },
      { id: 4, name: 'Pepper', rating: 4.3, size: '1kg, Price', image: 'src/assets/images/pepper.png', price: 2.49, promotionAsPercentage: 0, categoryId: 7, instock: 15, countSold: 5, group: 'Vegetables' },
      { id: 5, name: 'Lemon', rating: 4.1, size: '1kg, Price', image: 'src/assets/images/lemon.png', price: 1.99, promotionAsPercentage: 0, categoryId: 7, instock: 40, countSold: 20, group: 'Vegetables' },
      { id: 6, name: 'Pork', rating: 4.7, size: '1kg, Price', image: 'src/assets/images/pork.png', price: 5.49, promotionAsPercentage: 15, categoryId: 2, instock: 10, countSold: 18, group: 'Meat' },
      { id: 7, name: 'Fish', rating: 4.2, size: '1kg, Price', image: 'src/assets/images/fish.png', price: 2.29, promotionAsPercentage: 0, categoryId: 7, instock: 22, countSold: 7, group: 'Meat' },
      { id: 8, name: 'Steak', rating: 4.6, size: '1kg, Price', image: 'src/assets/images/steak.png', price: 6.99, promotionAsPercentage: 10, categoryId: 2, instock: 18, countSold: 14, group: 'Meat' },
      { id: 9, name: 'Ham', rating: 4.4, size: '1kg, Price', image: 'src/assets/images/ham.png', price: 2.79, promotionAsPercentage: 0, categoryId: 7, instock: 12, countSold: 6, group: 'Meat' },
      { id: 10, name: 'Beetroot', rating: 4.5, size: '1kg, Price', image: 'src/assets/images/beetroot.png', price: 7.49, promotionAsPercentage: 20, categoryId: 2, instock: 14, countSold: 11, group: 'Fruits' },
    ] as Product[]
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
