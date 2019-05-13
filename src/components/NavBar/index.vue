<template>
  <div>
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark pt-2 pb-2 bgEscuro">
      <div class="container d-flex justify-content-between">
        <router-link class="navbar-brand" to="/">
          <img
            src="@/assets/icon.png"
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt="Icone"
          >
          Lojinha
        </router-link>

        <form class="col-7 input-group d-none d-md-flex">
          <input
            class="form-control form-control-sm"
            type="search"
            placeholder="O que você procura? 💬"
            aria-label="O que você procura?"
          >
          <div class="input-group-append">
            <button class="btn btn-sm btn-light" type="button">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </form>

        <div>
          <button type="button" class="btn btn-md corClara">
            <div v-if="count > 0" class="badge-danger badge">{{ count }}</div>
            <i class="fa fa-shopping-cart"></i>
          </button>

          <button type="button" class="btn btn-md corClara">
            <i class="fa fa-user-circle"></i>
          </button>
        </div>
      </div>
    </nav>

    <ul class="nav pt-2 justify-content-center">
      <li class="nav-item">
        <router-link class="nav-link customLink" to="/cattegorie/2">Xbox</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link customLink" to="/cattegorie/1">Playstation</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link customLink" to="/cattegorie/1">Sites semelhantes</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  computed: {
    count() {
      return this.$store.state.qtd;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>
