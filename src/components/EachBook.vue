<template>
  <div class="single-book">
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
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { myStore } from '../store/store.js'

export default {
  name: 'EachBook',
  data(){
    return{
      book: {}
    }
  },
  async created() {
    await this.fetchProducts()
    this.getCurrentBook(this.$route.params.id)
  },
  methods: {
    ...mapActions(myStore, ["fetchProducts"]),
    getCurrentBook(bookId) {
        this.book = this.books.find(book => book.id == bookId) || {}
    }
  },
  computed: {
    ...mapState(myStore, ["books"])
  }
}
</script>

<style scoped>

*{
  user-select: none;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.single-book{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 100px auto;
  width: 500px;
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

  img{
    width: 500px;
    height: 300px;
    transition: 0.3s ease;
    overflow: hidden;
  }

  .img{
    overflow: hidden;
    max-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 20px;
  }

  .book{
    overflow: hidden;
    width: 500px;
    max-height: 400px;
  }

  .img:hover img{
    transform: scale(1.2);
  }

</style>
