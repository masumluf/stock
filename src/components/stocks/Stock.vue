<template>
  <div class="col-sm-6 col-md-4">
    <div class="card border-success mb-3 drop-panel" style="max-width: 18rem;">
      <div class="card-header bg-success">
        <strong>{{stock.name}}</strong>
        ({{stock.price}}:)
      </div>
      <div class="card-body text-success">
        <h5 class="card-title">
          <input type="number" v-model="quantity" />
          <br />
          <br />
          <button class="btn btn-danger" @click="buyStock" :disabled="quantity <=0">Buy</button>
        </h5>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }

      console.log(order);
      this.quantity = 0;
    }
  }

}
</script>

<style scoped>
.drop-panel {
  margin-top: 2rem;
  margin-left: 2rem;
}
</style>