<template>
  <div class="product m-5">
    <h1 class="p-3">Find Your Luxury Dream</h1>
    <h4 class="p-4">Each Royal Luxury Car is the result of a perfect interplay: consummate technology sophisticated art of engineering and custom craftsmanship make every Royal Luxury Car unique in its class.</h4>
    <div class="row products">
      <div class="col"  v-for="product in products" :key="product.prodID">
        <div class="card" style="width: 20rem;">
          <img :src="product.prodUrl" class="card-img-top"
            :alt="product.prodName">
          <div class="card-body">
            <h5 class="card-title">{{ product.prodName }}</h5>
            <p class="card-text">{{ product.details }}
            <br>
            {{ product.amount }}
          </p>
            <div class="container">
              <router-link to="/single" class="btn btn-primary">View More</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  }
};
</script>

<style scoped>

</style>