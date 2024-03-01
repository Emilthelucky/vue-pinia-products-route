import { defineStore } from 'pinia'

export const myStore = defineStore("ourStore", {
  state: () => ({
    books: [],
  }),
  actions: {
    async fetchProducts() {
      const res = await fetch('https://dummyjson.com/products')
      const data = await res.json()

      this.books = data.products
    }
  },
})
