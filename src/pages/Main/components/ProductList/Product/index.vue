<template>
  <router-link :to="'/product/' + product.id">
    <main>
      <img v-bind:src="product.thumb">
      <p
        v-if="product.platform"
        :class="product.platform === 'xbox' ? 'xbox' : 'play'"
      >{{ product.platform }}</p>
      <section>
        <small>{{ product.oldPrice }}</small>
        <div
          :class="[product.oldPrice ? 'inOffer':'', !product.conditions ? 'withoutConditions' : '']"
        >
          <strong>{{ product.price }}</strong>
          <small>{{ product.conditions }}</small>
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
