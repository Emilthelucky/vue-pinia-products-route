<template>
    <div class="main">
      <div class="books">
          <div class="book" v-for="book in books" :key="book.id" @click="goToBook(book.id)">
            <div class="img">
              <img :src="book.thumbnail"/>
            </div>
            <div class="title">
              <p class="p-book">
                {{ book.title }}
              </p>
              <p class="p-book">
                {{ book.description }}
              </p>
            </div>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  import { myStore } from '../store/store.js'
  import { mapState } from 'pinia'
  import { mapActions } from 'pinia'
  
  export default {
    name: 'App',
    data() {
      return{
      }
    },
    methods: {
      ...mapActions(myStore, ["fetchProducts"]),
      goToBook(bookId){
        this.$router.push(`/${bookId}`)
      }
    },
    created(){
      this.fetchProducts()
    },
    computed: {
      ...mapState(myStore, ["books"]),
    }
  }
  </script>
  
  <style scoped>
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
  }
  
  .main{
    position: absolute;
    left: 0;
    top: 0;
    min-height: 100vh;
    width: 100%;
    padding: 50px;
    background: rgb(210, 210, 210);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .title{
    display: flex;
    flex-direction: column;
  }
  
  .p-book{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 450px;
    margin: 5px;
    margin-top: 10px;
    font-size: 20px;
    font-weight: 1000;
  }
  
  .books{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  
  img{
    width: 100%;
    height: 300px;
    transition: 0.3s ease;
  }
  
  .book{
    overflow: hidden;
    width: 100%;
    max-height: 400px;
  }
  
  .img{
    overflow: hidden;
    width: 100%;
    max-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 20px;
  }
  
  .img:hover img{
    transform: scale(1.2);
  }
  
  </style>
  