<template>
  <main>
    <ProductList
      v-for="productList in products"
      :key="productList.id"
      :title="productList.title"
      :aside="productList.aside"
      :description="productList.description"
      :products="productList.products"
    />
  </main>
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
      products: []
    };
  },
  async created() {
    const { data } = await api.get(`/sections`);
    this.products = data;
  }
};
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>
