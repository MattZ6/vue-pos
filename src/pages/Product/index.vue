<template>
  <main class="container-fluid text-center text-md-left">
    <h2>Detalhes de {{ product.title }}</h2>

    <section class="row">
      <div class="col-md-8 mb-md-0 mb-3"></div>

      <aside class="col-md-4 mb-md-0 mb-3">
        <header>
          <small>{{ product.sold }} vendidos</small>
          <span v-if="product.stock > 10">{{ product.stock }} unidades</span>
          <span v-else-if="product.stock > 1 && product.stock < 10">Últimas unidades</span>
          <span v-else-if="product.stock === 1">Última unidade</span>
          <span v-else class="soldOut">Sem unidades</span>
        </header>

        <span class="title">{{ product.title }}</span>
        <small class="platform">{{ product.platform }}</small>

        <p>{{ product.shortDescription }}</p>

        <small class="oldPrice">{{ product.oldPrice }}</small>
        <div :class="product.oldPrice ? 'offer' : ''">
          <strong>{{ product.price }}</strong>
          <small>{{ product.conditions }}</small>
        </div>

        <button>Comprar</button>
        <!-- <button v-if="product.inStock" v-on:click="addToCart" class="buyButton">Comprar</button> -->

        <strong v-if="product.stock === 0">
          Parece que estamos sem mais unidades de
          {{ product.title }} :(
        </strong>
      </aside>
    </section>

    <hr class="clearfix w-100 d-md-none pb-3">
  </main>
</template>

<script>
import api from "../../api";

export default {
  name: "Product",
  props: ["id"],
  data: () => {
    return {
      product: {}
    };
  },
  async created() {
    const { data } = await api.get(`/products/${this.id}`);
    this.product = data;
  }
};
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>
