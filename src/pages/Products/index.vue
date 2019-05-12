<template>
  <main>
    <header>
      <h2>{{ id === 1 ? 'Playstation': 'Xbox' }}</h2>
    </header>
  </main>
</template>

<script>
export default {
  name: "Products",
  props: ["id"],
  created() {
    console.log(this.id);
  }
};
</script>

<style>
</style>
