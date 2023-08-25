<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid ">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon custom-toggler"></span>
            </button>
            <div class="collapse navbar-collapse nav-con" id="navbarSupportedContent">
                <div class="routes">
                    <ul class="navbar-nav mb-lg-0 nav-underline">
                        <li class="nav-item" id="homea">
                            <router-link to="/" class="nav-link">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/about" class="nav-link">About</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/product" class="nav-link">Products</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/contact" class="nav-link">Contact</router-link>
                        </li>
                    </ul>
                </div>
                <!-- logo -->
                <ul class="logos m-auto">
                    <router-link to="/"><img class="logo"
                            src="https://i.postimg.cc/c4HWTjFg/Screenshot-2023-08-22-112515-removebg-preview.png" alt="logo"
                            style="width: 11rem; "></router-link>
                </ul>
                <!-- admin -->
                <ul class="adin ms-auto">
                    <li class="nav-item right ">
                        <router-link to="/admin" class="nav-link"><i class="bi bi-person" style="color: white;"></i>
                            Admin</router-link>
                    </li>
                </ul>
                <!-- <form class="d-flex" role="search">
                    <input class="form-control m-2 sea" type="search" placeholder="Search Something" aria-label="Search">
                    <button class="btn btn-outline-dark m-2 sea" type="submit">Search</button>
                </form> -->
            </div>
        </div>
    </nav>
</template>
<script>
export default {
}
</script>
<style scoped>
nav {
    background-color: #000000;
}

.logos {
    margin-right: 18rem;
}


a {
    text-decoration: none;
    color: #ffffff;
    font-size: 22px;
    /* padding: 0.5rem; */
}

a:hover {
    color: #f7f7f788;

}

nav a.router-link-exact-active {
    color: #f7f7f788;
}

ul {
    text-decoration: none;
}
  
/* .custom-toggler .navbar-toggler-icon {
           background-color: white;
        } */
@media (max-width: 1400px) {
    /* img {
        width: 9rem;
        margin-right: 15rem;
    } */
}

@media (max-width: 1255px) {
    /* img {
        width: 9rem;
        margin-right: 10rem;
    } */
}

@media (max-width: 992px) {
    .logos{
    display: none;
}
.adin{
    padding: 10px;
}
}
</style>