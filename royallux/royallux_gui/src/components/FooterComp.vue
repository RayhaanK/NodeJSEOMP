<template>
    <div class="footer card-footer p-3">
        <div class="container-fluid text-center">
            <div class="row d-flex justify-content-center">
                <div class="col-3 fcols">
                    <ul>
                        <li class="p-3"><router-link class="rl" to="/">Home</router-link></li>
                        <li class="p-3"><router-link class="rl" to="/about">About</router-link></li>
                    </ul>
                </div>
                <div class="col-3 fcols">
                    <ul>
                        <li class="p-3"><router-link class="rl" to="/products">Products</router-link></li>
                        <li class="p-3"><router-link class="rl" to="/contact">Contact</router-link></li>
                        <li class="p-3"> <hr> <h5 style="color: white;">Follow our Social Media</h5> 
                            <i class="social bi bi-instagram"><a href="https://www.instagram.com/"></a></i>
                            <i class="social bi bi-tiktok"><a href="https://www.tiktok.com/login"></a></i>
                            <i class="social bi bi-facebook"><a href="https://m.facebook.com/login/?locale=en_GB"></a></i>
                        </li>
                        <p class="text-white fcols1">&copy; 2023 Royal Lux Motors, All Rights Reserved. </p>
                    </ul>
                </div>
                <div class="col-3 fcols1">
                    <ul>
                        <li class="p-3"><i class="bi bi-telephone social1">+27 12 345 6789</i></li>
                        <li class="p-3"><i class="bi bi-envelope social1">royalLux@gmail.com</i></li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.footer {
    background-color: #000000;
}

.foot {
    position: relative;
    width: 100%;
    height: 6rem;
    bottom: 0;
}

a {
    text-decoration: none;
    color: #ffffff;
    font-size: 21px;
}

.social {
    font-size: 30px;
    margin-right: 20px;
    color: #ffffff;
}

.social:hover {
    color: #f7f7f788;
    font-size: 35px;
    transition: 0.4s;
}

.social1 {
    font-size: 20px;
    /* margin-right: 20px; */
    color: #ffffff;
}

.social1:hover {
    color: #f7f7f788;
    font-size: 22px;
    transition: 0.4s;
}
.rl:hover {
    color: #f7f7f788;
    font-size: 22px;
    transition: 0.4s;
}
</style>