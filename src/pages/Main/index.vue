<template>
  <div>
    <main v-if="!loading">
      <ProductList
        v-for="productList in products"
        :key="productList.id"
        :title="productList.title"
        :aside="productList.aside"
        :description="productList.description"
        :products="productList.products"
      />
    </main>

    <main v-if="loading">
      <h2>Carregando...</h2>
      <p>Um instante enquanto carregamos o conteúdo para voce!</p>
    </main>
  </div>
</template>

<script>
import ProductList from "./components/ProductList";

import api from "../../api";

export default {
  name: "Main",
  components: {
    ProductList
  },
  data: function() {
    return {
      products: [],
      loading: true
    };
  },
  async created() {
    const { data } = await api.get(`/sections`);
    this.products = data;
    this.loading = false;
  }
};
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>
