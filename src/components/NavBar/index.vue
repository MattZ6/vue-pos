<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark pt-2 pb-2 corNav">
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

      <form class="col-7 input-group">
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

      <button type="button" class="btn btn-outline-light btn-sm">Olá</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
};
</script>


<style lang='scss' scoped>
@import "./styles.scss";
</style>


