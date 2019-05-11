<template>
  <main class="container-fluid text-center text-md-left">
    <h2>Detalhes de God of War</h2>

    <section class="row">
      <div class="col-md-8 mb-md-0 mb-3"></div>

      <aside class="col-md-4 mb-md-0 mb-3">
        <header>
          <small>16 vendidos</small>
          <span>4 unidades</span>
          <!-- <span v-if="product.stock > 1">{{ product.stock }} unidades</span>
              <span v-else-if="product.stock === 1">
                Última unidade
              </span>
          <span v-else class="soldOut">Sem unidades</span>-->
        </header>

        <span class="title">God of War</span>
        <small class="platform">PLAYSTATION 4</small>

        <!-- <span class="title">{{ product.title }}</span>
        <small class="platform">{{ product.platform }}</small>-->

        <p>Vivendo como um homem, fora da sombra dos deuses, Kratos deve se adaptar a terras desconhecidas, ameaças inesperadas e a uma segunda oportunidade de ser pai.</p>
        <!-- <p>{{ product.shortDescription }}</p> -->

        <div>
          <strong>R$ 68.99</strong>
          <small>ou 3x de R$ 22.99</small>
          <!-- <strong>R$ {{ product.value }}</strong>
          <small>{{ product.upTo }}</small>-->
        </div>

        <button>Comprar</button>
        <!-- <button v-if="product.inStock" v-on:click="addToCart" class="buyButton">Comprar</button> -->

        <!-- <strong v-if="!product.inStock" class="outOfStock">
          Parece que estamos sem mais unidades de
          {{ product.title }} :(
        </strong>-->
        <strong>
          Parece que estamos sem mais unidades de
          God of War :(
        </strong>
      </aside>
    </section>

    <hr class="clearfix w-100 d-md-none pb-3">
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>
