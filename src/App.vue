<template>
  <div id="app">
    <nav-bar/>

    <div class="container mt-4">
      <router-view/>
    </div>

    <Footer/>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default {
  components: {
    NavBar,
    Footer
  }
};
</script>

<style lang="scss" scoped>
@import "styles/global.scss";
</style>
