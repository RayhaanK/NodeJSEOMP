<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid"><router-link to="/"><img
                    src="#" alt="logo"
                    style="width: 5rem;"></router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-underline">
                    <li class="nav-item">
                        <a href="/"><router-link to="/">Home</router-link></a>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/product">Products</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/admin">Admin</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/contact">Contact</router-link>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control m-2 sea" type="search" placeholder="Search Something" aria-label="Search">
                    <button class="btn btn-outline-dark m-2 sea" type="submit">Search</button>
                </form>
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
    color: #92700F;
    font-size: 23px;
    padding: 0.5rem;
}
a:hover {
    color: white;
}
nav a.router-link-exact-active {
    color: white
}</style>