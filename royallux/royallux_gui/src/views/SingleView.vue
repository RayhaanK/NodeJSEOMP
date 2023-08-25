<template>
  <section class="sinlgeView" id="singleView">
    <!-- new -->
    <div class="container d-flex justify-content-center">
      <div class="row">
        <div class="col">
          <div class="card mb-3" style="width: 80%;">
            <div class="row g-0" v-for="product in product" :key="product.prodID">
              <div class="col-md-5">
                <div class="image">
                  <img :src="product.prodUrl" class="card-img-top img-fluid prodImg" :alt="product.prodName" />
                </div>
              </div>
              <div class="col-md-7">
                <div class="card-body" style="font-size: 1.5rem;">
                  <h5 class="card-title display-3">{{ product.prodName }}</h5>
                  <div class="cardText">
                    <p class="card-text">{{ product.content }}</p>
                  </div> <hr>
                  <p class="amount text-center">
                    <span class="boldP display-5"> R{{ product.amount }} </span>
                  </p>
                  <div class="addCart">
                  <router-link to="/product"><button class="btn">
                      Back to Products
                    </button></router-link>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- old -->
    <!-- <div class="container-fluid">
      <div class="single">
        <h1>This is a single page</h1>
        <div class="container d-flex justify-content-center mb-4">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 mx-sm-5">
            <div class="col g-3 mt-2" v-for="product in product" :key="product.prodID">
              <div class="card" style="width: 442px">
                <h4 class="text-center prodTitle">{{ product.prodName }}</h4>
                <div class="image">
                  <img :src="product.prodUrl" class="card-img-top img-fluid prodImg" :alt="product.prodName" />
                </div>
                <div class="card-body">
                  <div class="cardText">
                    <p class="card-text">{{ product.content }}</p>
                  </div>
                </div>
                <div>
                  <p class="amount text-center">
                    <span class="boldP"> R{{ product.amount }} </span>
                  </p>
                </div>
                <div class="addCart">
                  <router-link to="/product"><button class="rbtn">
                      Back to Products
                    </button></router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </section>
</template>

<script>
export default {
  props: ["prodID"],
  created() {
    this.$store.dispatch("fetchProduct", this.prodID)
  },
  computed: {
    product() {
      return this.$store.state.product
    }
  }
};
</script>

<style scoped>
body {
  height: 100vh;
}

.card {
  background-color: #fff;
  border: none;
}
.image{
  width: 100%; 
  display: flex;
  justify-content: center;
}
.btn {
  background-color: #000000;
  color: #ffffff;
  border-radius: 1rem;
  padding: 0.7rem;
  border: 0.5px solid black;
  width: 10rem;
}

.btn:hover {
  background-color: #ffffff;
  color: #000000;
  border: 1px solid black;
}
</style>
