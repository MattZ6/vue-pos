<template>
  <main>
    <ProductList
      :title="'Saindo do forno!'"
      :description="'Fique por dentro dos lançamentos mais quentes do momento'"
      :emoji="'😋'"
      :products="products"
    />

    <ProductList
      :title="'Em destaque'"
      :description="'Os mais comprados, consequentemente os mais jogados'"
      :products="products"
    />

    <ProductList
      :title="'Mais vendidos de Playstation'"
      :description="'Segundo nossos clientes, os melhores da plataforma 😉'"
      :products="products"
    />

    <ProductList
      :title="'Mais vendidos de Xbox'"
      :description="'Coroados pelos magos da comunidade como o santo graal da plataforma! 🔮'"
      :products="products"
    />
  </main>
</template>



<script>
import ProductList from "./components/ProductList";

export default {
  name: "Main",
  components: {
    ProductList
  },
  data: function() {
    return {
      products: [
        {
          id: Math.random(),
          title: "Nome extremamente grande para ser exibido ali",
          price: "R$ 68,99",
          image:
            "https://upload.wikimedia.org/wikipedia/pt/thumb/8/82/God_of_War_2018_capa.png/270px-God_of_War_2018_capa.png",
          platform: "Xbox"
        },
        {
          id: Math.random(),
          title: "God of War",
          price: "R$ 68,99",
          image:
            "https://upload.wikimedia.org/wikipedia/pt/thumb/8/82/God_of_War_2018_capa.png/270px-God_of_War_2018_capa.png"
          // platform: "Playstation"
        },
        {
          id: Math.random(),
          title: "God of War",
          price: "R$ 68,99",
          image:
            "https://upload.wikimedia.org/wikipedia/pt/thumb/8/82/God_of_War_2018_capa.png/270px-God_of_War_2018_capa.png",
          platform: "Playstation"
        },
        {
          id: Math.random(),
          title: "God of War",
          price: "R$ 68,99",
          image:
            "https://upload.wikimedia.org/wikipedia/pt/thumb/8/82/God_of_War_2018_capa.png/270px-God_of_War_2018_capa.png",
          platform: "Playstation"
        },
        {
          id: Math.random(),
          title: "God of War",
          price: "R$ 68,99",
          image:
            "https://upload.wikimedia.org/wikipedia/pt/thumb/8/82/God_of_War_2018_capa.png/270px-God_of_War_2018_capa.png",
          platform: "Xbox"
        },
        {
          id: Math.random(),
          title: "God of War",
          price: "R$ 68,99",
          image:
            "https://upload.wikimedia.org/wikipedia/pt/thumb/8/82/God_of_War_2018_capa.png/270px-God_of_War_2018_capa.png",
          platform: "Playstation"
        },
        {
          id: Math.random(),
          title: "God of War",
          price: "R$ 68,99",
          image:
            "https://upload.wikimedia.org/wikipedia/pt/thumb/8/82/God_of_War_2018_capa.png/270px-God_of_War_2018_capa.png",
          platform: "Xbox"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>
