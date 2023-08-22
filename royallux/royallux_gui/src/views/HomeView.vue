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
      <!-- content -->
      <h1 class="display-1 mt-5">Something</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni dolor soluta accusamus repudiandae iure sequi
        pariatur quibusdam, sunt saepe facilis ea tempore ipsum! Itaque fugiat fugit molestias facere consequuntur nisi?
      </p>
    </div>
    <!-- latest -->
    <div class="text-center">
      <h1 class="display-1 mt-5">LATEST</h1>
      <div class="row">
        <div class="col g-0">
          <img src="https://i.postimg.cc/C5R4DKDv/cara4.jpg" class="img-fluid" alt="img">
        </div>
        <div class="col g-0">
          <img src="https://i.postimg.cc/C5R4DKDv/cara4.jpg" class="img-fluid" alt="img">
        </div>
      </div>
      <div id="img3">
        <img src="https://i.postimg.cc/C5R4DKDv/cara4.jpg" class="img-fluid" alt="img">
      </div>
    </div>
    <!-- featured -->
    <h1 class="display-1 mt-5">FEATURED</h1>
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <div class="row feat1">
            <div class="column feat">
              <img src="https://i.postimg.cc/yxZ63xCT/002_B800_3_4_front-1920x1281-removebg-preview.png" alt="Snow"
                style="width:100%">
            </div>
            <div class="column feat">
              <img src="https://i.postimg.cc/yxZ63xCT/002_B800_3_4_front-1920x1281-removebg-preview.png" alt="Forest"
                style="width:100%">
            </div>
            <div class="column feat">
              <img src="https://i.postimg.cc/yxZ63xCT/002_B800_3_4_front-1920x1281-removebg-preview.png" alt="Mountains"
                style="width:100%">
            </div>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <div class="row feat1">
            <div class="column feat">
              <img src="https://i.postimg.cc/yxZ63xCT/002_B800_3_4_front-1920x1281-removebg-preview.png" alt="Snow"
                style="width:100%">
            </div>
            <div class="column feat">
              <img src="https://i.postimg.cc/yxZ63xCT/002_B800_3_4_front-1920x1281-removebg-preview.png" alt="Forest"
                style="width:100%">
            </div>
            <div class="column feat">
              <img src="https://i.postimg.cc/yxZ63xCT/002_B800_3_4_front-1920x1281-removebg-preview.png" alt="Mountains"
                style="width:100%">
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row feat1">
            <div class="column feat">
              <img src="https://i.postimg.cc/yxZ63xCT/002_B800_3_4_front-1920x1281-removebg-preview.png" alt="Snow"
                style="width:100%">
            </div>
            <div class="column feat">
              <img src="https://i.postimg.cc/yxZ63xCT/002_B800_3_4_front-1920x1281-removebg-preview.png" alt="Forest"
                style="width:100%">
            </div>
            <div class="column feat">
              <img src="https://i.postimg.cc/yxZ63xCT/002_B800_3_4_front-1920x1281-removebg-preview.png" alt="Mountains"
                style="width:100%">
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="container">
      <h1 class="display-1 mt-5">Something</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa minus eos consectetur possimus ad labore aliquid
        unde dolores nemo, voluptate necessitatibus minima repudiandae obcaecati, omnis, ut sequi expedita mollitia
        eligendi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores officia maiores ipsa incidunt
        voluptatum adipisci sed inventore, eligendi atque aperiam ducimus dolorum itaque distinctio nam necessitatibus
        nostrum veniam nemo autem.</p>
    </div>
    <div class="container">
      <router-link to="/product" class="btn btn-primary">View More</router-link>
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

.feat {
  float: left;
  width: 33.33%;
  padding: 5px;
}

/* Clear floats after image containers */
.feat1::after {
  content: "";
  clear: both;
  display: table;
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
}</style>