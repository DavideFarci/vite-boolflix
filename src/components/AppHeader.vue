<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <header>
    <div class="container">
      <img src="../assets/img/logo.png" alt="" />
      <div class="search">
        <input
          v-model="store.searchInput"
          @keyup.enter="this.$emit('performedSearch')"
          type="text"
        />
        <button @click="this.$emit('performedSearch')">Cerca</button>
      </div>
    </div>
    <!-- <div class="jumbotron">
      <img
        v-for="jumbo in store.listMovies"
        :src="`https://image.tmdb.org/t/p/w1280${jumbo.backdrop_path}`"
        :alt="jumbo.title"
      />
    </div> -->
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: black;
  color: white;
  height: 5rem;
  padding: 1.2rem;
  img {
    height: 3rem;
  }
  .jumbotron {
    height: 30rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    color: red;
  }
}
</style>
