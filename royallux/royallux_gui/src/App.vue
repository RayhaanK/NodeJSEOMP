<template>
  <div>
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Navbar from '@/components/NavbarComp.vue'
import Footer from '@/components/FooterComp.vue'
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>
<style>
#app {
  font-family: 'Nanum Myeongjo', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

li {
  text-decoration: none;
  list-style-type: none;
}
</style>