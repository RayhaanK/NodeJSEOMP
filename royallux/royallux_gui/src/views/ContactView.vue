<template>
  <div class="contact p-4">
    <div class="card mx-auto p-4">
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
</template>
  
<style scoped>
.card {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  width: 350px;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.1);
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