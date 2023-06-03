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
      <ul class="navbar">
        <li>Home</li>
        <li>Serie TV</li>
        <li>FIlm</li>
        <li>Nuovi e Popolari</li>
        <li>La mia Lista</li>
        <li>Sfoglia per lingua</li>
      </ul>
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
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    color: red;
  }
}

header {
  background-color: black;
  color: white;
  height: 5rem;
  padding: 1.2rem;
  img {
    height: 3rem;
    // }
    // .jumbotron {
    //   height: 30rem;
    //   img {
    //     width: 100%;
    //     height: 100%;
    //     object-fit: cover;
    //   }
  }
  .navbar {
    list-style: none;
    display: flex;
    justify-content: space-around;
    gap: 2rem;
    li {
      cursor: pointer;
    }
    &:first-child {
      font-weight: bold;
    }
  }
  .search {
    input {
      max-width: 11rem;
      height: 1.5rem;
      margin-right: 2rem;
    }
    button {
      padding: 0.5rem;
      background: red;
      color: wheat;
      font-weight: bold;
      border-radius: 5px;
    }
  }
}
</style>
