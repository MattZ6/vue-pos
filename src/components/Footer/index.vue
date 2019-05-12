<template>
  <footer class="page-footer font-small blue pt-4 mt-5 bgEscuro">
    <div class="container">
      <div class="container-fluid text-center text-md-left">
        <div class="row">
          <div class="col-md-6 mt-md-0 mt-3">
            <h5>
              Obrigado por acessar nossa Lojinha!
              <i class="fa fa-heart"></i>
            </h5>
            <p>Esperamos que tenha tido uma boa experiência. Você é e sempre será bem-vindo! 😉</p>
          </div>

          <hr class="clearfix w-100 d-md-none pb-3">

          <div class="col-md-3 mb-md-0 mb-3">
            <h5 class="text-uppercase">Nossas categorias</h5>

            <ul class="list-unstyled">
              <li>
                <router-link class="customLink" to="/products/2">Xbox</router-link>
              </li>
              <li>
                <router-link class="customLink" to="/products/1">Playstation</router-link>
              </li>
            </ul>
          </div>

          <div class="col-md-3 mb-md-0 mb-3">
            <h5 class="text-uppercase">Links úteis</h5>

            <ul class="list-unstyled">
              <li>
                <router-link class="customLink" to="/">Pesquisa</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-copyright text-center p-3">
        © 2019 Copyright
        <br>
        <strong>Matheus Felipe Zanin</strong>
        <br>

        <i class="fa fa-github mr-2"></i>
        <a href="https://github.com/MattZ6/vue-pos" target="blank">Projeto Lojinha</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang='scss' scoped>
@import "./styles.scss";
</style>
