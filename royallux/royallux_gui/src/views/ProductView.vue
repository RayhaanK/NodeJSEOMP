<template>
  <div class="product m-5">
    <h1 class="p-3">Find Your Luxury Dream</h1>
    <h4 class="p-4">Each Royal Luxury Car is the result of a perfect interplay: consummate technology sophisticated art of engineering and custom craftsmanship make every Royal Luxury Car unique in its class.</h4>
<<<<<<< HEAD
    <div class="row products row-cols-1 row-cols-sm-2 row-cols-lg-3 mt-3 mx-sm-5 d-flex justify-content-center">
      <div class="col"  v-for="product in products" :key="product.prodID">
        <div class="card" style="width: 20rem;">
          <img :src="product.prodUrl" class="card-img-top"
            :alt="product.prodName">
          <div class="card-body">
            <h5 class="card-title">{{ product.prodName }}</h5>
            <p class="card-text">{{ product.details }}
            <br>
            R {{ product.amount }}
          </p>
            <div class="container">
              <router-link 
              :to="{
                  name: 'single',
                  params: { id: product.prodID },
                  query: {
                    name: product.prodName,
                    description: product.details,
                    img: product.prodUrl,
                    price: product.amount,
                    content: product.content
                  },
                }"
               class="btn btn-primary">View Product</router-link>
            </div>
=======
    <div class="products">
      <div class="card" style="width: 20rem;">
        <img src="https://i.postimg.cc/yxZ63xCT/002_B800_3_4_front-1920x1281-removebg-preview.png" class="card-img-top"
          alt="prod">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div class="container">
            <router-link to="/single" class="btn btn-primary">View More</router-link>
>>>>>>> admin
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
  },
  methods: {
    viewProduct() {
      this.$router.push({
        name: this.name,
        params: this.params.id,
        query: this.query.name
      })
    }
  }
};
</script>

<style scoped>

</style>