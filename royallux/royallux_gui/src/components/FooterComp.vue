<template>
    <div class="footer card-footer p-3">
        <div class="container-fluid text-center">
            <div class="row align-items-start">
                <div class="col fcols">
                    <i class="bi bi-telephone social1">+27 12 345 6789</i> <br>
                    <i class="bi bi-envelope social1"> royalLux@gmail.com</i>
                </div>
                <div class="col fcols1">
                    <i class="social bi bi-instagram"><a href="https://www.instagram.com/"></a></i>
                    <i class="social bi bi-tiktok"><a href="https://www.tiktok.com/login"></a></i>
                    <i class="social bi bi-facebook"><a href="https://m.facebook.com/login/?locale=en_GB"></a></i>
                </div>
                <small class="text-body-secondary fcols1">Copyright&copy;</small>
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
.social {
    font-size: 30px;
    margin-right: 20px;
    color: #ffffff;
}
.social:hover {
    color: #92700F;
    font-size: 35px;
    transition: 0.4s;
}
.social1 {
    font-size: 20px;
    margin-right: 20px;
    color: #ffffff;
}
.social1:hover {
    color: #92700F;
    font-size: 22px;
    transition: 0.4s;
}
</style>