<template>
  <div>
    <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
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
      let result = this.$store.getters.stocks;
      console.log(result);
    }
  }
}
</script>