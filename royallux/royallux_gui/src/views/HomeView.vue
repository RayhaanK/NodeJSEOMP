<template>
  <div class="home">
    <!-- Carousel -->
    <!-- <div class="overlay display-1">ROYAL LUX
    </div> -->
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://i.postimg.cc/VLbRkdzv/cara1.jpg" class="car d-block" alt="..." loading="lazy" />
        </div>
        <div class="carousel-item">
          <img src="https://i.postimg.cc/C5R4DKDv/cara4.jpg" class="car d-block" alt="..." loading="lazy" />
        </div>
        <div class="carousel-item">
          <img src="https://i.postimg.cc/C5R4DKDv/cara4.jpg" class="car d-block" alt="..." loading="lazy" />
        </div>
        <div class="carousel-item">
          <img src="https://i.postimg.cc/C5R4DKDv/cara4.jpg" class="car d-block" alt="..." loading="lazy" />
        </div>
      </div>
    </div>
    <div>
      <h1 class="display-1 mt-5">Something</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni dolor soluta accusamus repudiandae iure sequi
        pariatur quibusdam, sunt saepe facilis ea tempore ipsum! Itaque fugiat fugit molestias facere consequuntur nisi?
      </p>
    </div>
    <div class="container text-center">
      <h1 class="display-1 mt-5">LATEST</h1>
  <div class="row">
    <div class="col">
      <img src="https://i.postimg.cc/C5R4DKDv/cara4.jpg" alt="">
    </div>
    <div class="col">
      <img src="https://i.postimg.cc/C5R4DKDv/cara4.jpg" alt="">
    </div>
  </div>
</div>
  </div>
</template>

<script>

</script>

<style scoped>
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 3rem;
}

.carousel-item {
  width: 100%;
}

.car {
  width: 100%;
  height: 800px;
}

@media screen and (max-width: 650px) {
  .carousel {
    height: 10rem !important;
  }

  .carousel-item {
    height: 100% !important;
  }

  .carousel-item img {
    height: 100% !important;
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 23rem;
    font-size: 2rem;
  }
}
</style>