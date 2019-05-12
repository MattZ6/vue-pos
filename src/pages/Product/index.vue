<template>
  <div>
    <main v-if="!loading" class="container-fluid text-center text-md-left">
      <h2>Detalhes de {{ product.title }}</h2>

      <section class="row">
        <div class="col-md-8 mb-md-0 mb-3 left">
          <aside>
            <img
              v-for="({id, url, selected}, index) in product.images"
              @mouseover="updateImage(index)"
              :class="selected ? 'selected': ''"
              :key="id"
              :src="url"
              :alt="product.title"
            >
          </aside>
          <div class="imageContainer">
            <img :src="image" :alt="product.title">
          </div>
        </div>

        <aside class="col-md-4 mb-md-0 mb-3">
          <header>
            <small>{{ product.sold }} vendidos</small>
            <span v-if="product.stock > 10">{{ product.stock }} unidades</span>
            <span v-else-if="product.stock > 1 && product.stock < 10">Últimas unidades</span>
            <span v-else-if="product.stock === 1">Última unidade</span>
            <span v-else class="soldOut">Sem unidades</span>
          </header>

          <span class="title">{{ product.title }}</span>
          <small v-if="product.platform === 1" class="platform">Playstation 4</small>
          <small v-else-if="product.platform === 2" class="platform">Xbox One</small>

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

      <hr class="clearfix w-100 pb-3 d-md-none">

      <h4>Um pouco sobre...</h4>
      <p>{{ product.description }}</p>
    </main>

    <main v-if="loading">
      <h2>Carregando...</h2>
      <p>Um instante enquanto carregamos o conteúdo para voce!</p>
    </main>
  </div>
</template>

<script>
import api from "../../api";

export default {
  name: "Product",
  props: ["id"],
  data: () => {
    return {
      product: {},
      loading: true,
      selectedImage: 0
    };
  },
  methods: {
    updateImage(index) {
      if (index === this.selectedImage) return;

      this.product.images[this.selectedImage].selected = false;
      this.selectedImage = index;
      this.product.images[index].selected = true;
    }
  },
  computed: {
    image() {
      return this.product.images[this.selectedImage].url;
    }
  },
  async created() {
    const { data } = await api.get(`/products/${this.id}`);
    this.product = data;

    this.product.images[this.selectedImage].selected = true;

    this.loading = false;
  }
};
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>
