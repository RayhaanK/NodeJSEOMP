<template>
  <div class="contact p-4">
    <div class="container">
      <div class="row justify-content-center">
        <h1>Contact us</h1>
        <div class="col-4">
          <div class="card card1 mx-auto p-4">
            <span class="title">Leave a Comment</span>
            <form class="form" action="https://formspree.io/f/xeqbgzzq" method="POST">
              <div class="group">
                <input placeholder="" type="text" required>
                <label for="name">Name</label>
              </div>
              <div class="group">
                <input placeholder="" type="email" id="email" name="email" required>
                <label for="email">Email</label>
              </div>
              <div class="group">
                <textarea placeholder="" id="comment" name="comment" rows="5" required></textarea>
                <label for="comment">Comment</label>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <div class="col-4">
          <div class="card inf1">
            <div class="container-md inf">
              <div class="vstack gap-3">
                <div class="p-2"><i class="bi bi-telephone social1">+27 12 345 6789</i></div>
                <div class="p-2"><i class="bi bi-envelope social1"> royalLux@gmail.com</i></div>
                <div class="p-2">Third item</div>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<style scoped>
.card1 {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  width: 350px;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.1);
}

.inf1 {
  width: 400px;
  height: 255px;
  padding: 25px;
  background: radial-gradient(178.94% 106.41% at 26.42% 106.41%, #f5f4f1 0%, rgba(255, 255, 255, 0) 71.88%)
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
    , #FFFFFF;
  box-shadow: 0px 155px 62px rgba(0, 0, 0, 0.01), 0px 87px 52px rgba(0, 0, 0, 0.05), 0px 39px 39px rgba(0, 0, 0, 0.09), 0px 10px 21px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
  border-radius: 23px;
  transition: all 0.8s cubic-bezier(0.15, 0.83, 0.66, 1);
  cursor: pointer;
}

.inf1:hover {
  transform: scale(1.05);
}

.inf {
  width: 250px;
  height: 250px;
  right: -35px;
  top: -50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0.7);
}

.title {
  font-size: 24px;
  font-weight: 600;
  text-align: center;
}

.form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}

.group {
  position: relative;
}

.form .group label {
  font-size: 16px;
  color: rgb(0, 0, 0);
  position: absolute;
  top: -10px;
  left: 10px;
  background-color: #fff;
  transition: all .3s ease;
}

.form .group input,
.form .group textarea {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  outline: 0;
  width: 100%;
  background-color: transparent;
}

.form .group input:placeholder-shown+label,
.form .group textarea:placeholder-shown+label {
  top: 10px;
  background-color: transparent;
}

.form .group input:focus,
.form .group textarea:focus {
  border-color: #000000;
}

.form .group input:focus+label,
.form .group textarea:focus+label {
  top: -10px;
  left: 10px;
  background-color: #fff;
  color: #000000;
  font-weight: 600;
  font-size: 14px;
}

.form .group textarea {
  resize: none;
  height: 100px;
}

.form button {
  background-color: #000000;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.form button:hover {
  background-color: #ffffff;
  color: black;
  border: black 1px solid;
}
</style>