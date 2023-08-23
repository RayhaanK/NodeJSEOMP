<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-lg-0 nav-underline">
                    <li class="nav-item" id="homea">
                        <a href="/"><router-link to="/">Home</router-link></a>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/product">Products</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/contact">Contact</router-link>
                    </li>
                </ul>
                <router-link to="/"><img
                        src="https://i.postimg.cc/c4HWTjFg/Screenshot-2023-08-22-112515-removebg-preview.png"
                        alt="logo" style="width: 11rem; margin-right: 33rem;"></router-link>
                <ul>
                    <li class="nav-item right">
                        
                        <router-link to="/admin"><i class="bi bi-person" style="color: white;"></i> Admin</router-link>
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

a {
    text-decoration: none;
    color: #ffffff;
    font-size: 22px;
    padding: 0.5rem;
}

a:hover {
    color: #f7f7f788;
}
nav a.router-link-exact-active {
    color: #f7f7f788
}
ul {
    text-decoration: none;
}
</style>