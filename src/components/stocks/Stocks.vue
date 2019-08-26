<template>
  <div class="row">
    <app-stock v-for="(stock,index) in stocks" :stock="stock" :key="index"></app-stock>
  </div>
</template>

<script>
import Stock from './Stock.vue';


export default {
  components: {
    appStock: Stock
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;

    }
  }
}
</script>