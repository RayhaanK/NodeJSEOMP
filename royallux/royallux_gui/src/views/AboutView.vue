<template>
  <div class="about container-fluid text-center">
    <img src="https://i.postimg.cc/K8sxsJrd/33137.jpg" class="bg" alt="">
    <h1 class="display-2 p-4 who">Who we are</h1>
    <p class="ab1 mb-5 par">We sell modern, individual luxury. <br> <br> With innovative technology, highest-quality
      materials,
      unwavering attention to detail and tasteful, dynamic aesthetics, we sell products with the Wow factor that
      underline our customers personalities. <br> <br> Based in the heart of Cape Town in South Africa, the mother city
      has been our home since 1977. From here we cater to our international customers in over 100 countries.</p>
    <!-- flip-card -->
    <div class="container">
      <div class="row mx-auto">
        <section class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img class="imgf" src="https://i.postimg.cc/XYKbQyRq/002-B800-3-4-front-1920x1281.jpg" alt="avatar" />
            </div>
            <div class="flip-card-back">
              <h1>CONTENT</h1>
            </div>
          </div>
        </section>
        <section class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img class="imgf" src="https://i.postimg.cc/XYKbQyRq/002-B800-3-4-front-1920x1281.jpg" alt="avatar" />
            </div>
            <div class="flip-card-back">
              <h1>CONTENT</h1>
            </div>
          </div>
        </section>
        <section class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img class="imgf" src="https://i.postimg.cc/XYKbQyRq/002-B800-3-4-front-1920x1281.jpg" alt="avatar" />
            </div>
            <div class="flip-card-back">
              <h1>CONTENT</h1>
            </div>
          </div>
        </section>
        <section class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img class="imgf" src="https://i.postimg.cc/XYKbQyRq/002-B800-3-4-front-1920x1281.jpg" alt="avatar" />
            </div>
            <div class="flip-card-back">
              <h1>CONTENT</h1>
            </div>
          </div>
        </section>
      </div>
    </div>
    <!-- accordian -->
    <div class="container-fluid">

      <div class="info mx-auto p-5" style= "font-size: 1.5rem;">
        <h1 class="display-3 who">Read More</h1>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header text-center">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
              aria-expanded="true" aria-controls="collapseOne">
              <h4> RECORD-BREAKING INNOVATIVENESS</h4>
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>For more than four decades,</strong> we've been pushing forward with a lot of performance and heart
              and soul - just like our high-performance engines: with a lot of thrust and it keeps pushing, always
              pushing. Always new models. More and more displacement, horsepower and torque. More and more innovation.
              More and more interior equipment, safety and environmental compatibility. More and more exclusivity. And
              more and more records.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <h4>OVER 40 YEARS OF EXPERTISE</h4>
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>With our automotive know-how from over 40 years,</strong> we sold classic cars with their fully
              original condition with great attention to detail as part of our 6-star quality. This is what we call
              "six-star quality", and many of the oldies from Classics to Hybrids to achieve the same high level of
              quality striaght from the factory.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <h4>COMMITMENT TO PERFORMANCE</h4>
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>It is the passion for the automobile,</strong> the will for performance, the drive for perfection,
            the striving for the superlative, but also the feeling for aesthetics and the sense for functionality that
            distinguish Royal Lux Motors.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<style scoped>
.bg {
  padding: 0;
  object-fit: cover;
  margin: 0;
  width: 100%;
  height: 90vh;
}

.who {
  text-shadow: 3px 2px 3px rgb(118, 112, 112);
}

.accordion-button {
  outline: none !important;
}

.accordion-button {
  color: rgb(0, 0, 0);
  background: #e2dede96;
}

.about {
  padding: 0;
}

.ab1 {
  padding-left: 15rem;
  padding-right: 15rem;
  font-size: 1.8rem;
  line-height: 3.4rem;
}

/* flip-card */

.flip-card {
  background-color: transparent;
  width: 300px;
  height: 15rem;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #ffffff;
  color: black;

}

.imgf {
  width: 20rem;
}

.flip-card-back {
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  transform: rotateY(180deg);
}

.title {
  color: rgb(10, 10, 10);
  font-size: 18px;
}</style>