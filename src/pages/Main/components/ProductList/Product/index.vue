<template>
  <router-link to="/product">
    <main>
      <img v-bind:src="product.image">
      <p
        v-if="product.platform"
        :class="product.platform === 'Xbox' ? 'xbox' : 'play'"
      >{{ product.platform }}</p>
      <section>
        <small></small>
        <small>R$ 109,99</small>
        <div>
          <strong>{{ product.price }}</strong>
          <small>ou 3x de R$ 9,99</small>
        </div>
        <span>{{ product.title }}</span>
      </section>
    </main>
  </router-link>
</template>

<script>
export default {
  name: "Product",
  props: ["product"],
  data: function() {
    return {
      img: this.product.image
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>
