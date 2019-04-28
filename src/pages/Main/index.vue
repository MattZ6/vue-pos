<template>
  <div>
    <h1>Produtos</h1>

    <div class="lista-produtos">
      <div class="produto">
        <div class="imagem"></div>
        <div class="conteudo">
          <strong>R$ 68,99</strong>
          <span>God of War</span>
        </div>
      </div>
      <div class="produto">
        <div class="imagem"></div>
        <div class="conteudo">
          <span>God of War</span>
          <div>
            <strong>R$ 68,99</strong>
            <small>3x de R$ 9,99</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main"
};
</script>

<style lang="scss" scoped>
.lista-produtos {
  display: flex;

  width: 100%;
  padding: 10px;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
}

.produto {
  display: flex;
  flex-direction: column;

  min-width: 15vw;
  margin-right: 20px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 1px 1px 4px rgba(#000, 0.2);
  transition: all 0.15s;

  &:last-child {
    margin: none;
  }

  &:hover {
    border-radius: 8px;
    box-shadow: 2px 2px 10px rgba(#000, 0.3);
  }

  .imagem {
    width: 100%;
    height: 230px;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    background-image: url("https://upload.wikimedia.org/wikipedia/pt/thumb/8/82/God_of_War_2018_capa.png/270px-God_of_War_2018_capa.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .conteudo {
    display: flex;
    flex-direction: column;

    padding: 8px;

    strong {
      font-weight: 500;
      font-size: 22px;
    }
  }
}
</style>

