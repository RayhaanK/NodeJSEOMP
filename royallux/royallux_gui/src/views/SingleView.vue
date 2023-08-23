<template>
  <section class="sinlgeView" id="singleView">
    <div class="container-fluid">
      <div class="single">
        <h1>This is a single page</h1>
        <div class="container d-flex justify-content-center mb-4">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 mx-sm-5">
          <div class="col g-3 mt-2">
            <div class="card" style="width: 442px">
              <h4 class="text-center prodTitle">{{ $route.query.prodName }}</h4>
              <div class="image">
                <img
                  :src="$route.query.img"
                  class="card-img-top img-fluid prodImg"
                  :alt="$route.query.title"
                />
              </div>
              <div class="card-body">
                <div class="cardText">
                  <p class="card-text">{{ $route.query.content }}</p>
                </div>
              </div>
              <div>
                <p class="amount text-center">
                  <span class="boldP"> R{{ $route.query.price }} </span>
                </p>
              </div>
              <div class="addCart">
                <router-link to="/product"
                  ><button class="rbtn">
                    Back to Products
                  </button></router-link
                >
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  
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

.rbtn {
  background-color: #84a7a1;
  color: #001847;
  border-radius: 1rem;
  padding: 0.3rem;
  border: 0;
  width: 8rem;
}

.rbtn:hover {
  background-color: #001847;
  color: #84a7a1;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.7);
  transition: 0.2s;
  transform: scale(1.05);
}

</style>
