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
    <div class="container_fluid">
      <a href="https://master--boolflix-vue-axios.netlify.app/"
        ><img class="logo" src="../assets/img/logo.png" alt="logo.png"
      /></a>
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
    <div class="jumbotron">
      <div
        class="img-container"
        v-for="(jumbo, i) in store.listJumbo"
        :key="i"
        :class="{ active: i == store.activeIndex }"
      >
        <img
          :src="`https://image.tmdb.org/t/p/w1280${jumbo.backdrop_path}`"
          :alt="jumbo.backdrop_path"
        />
        <div class="title">{{ jumbo.title }}</div>
        <div class="upcoming"><span>Upcoming</span></div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.container_fluid {
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
  height: 45rem;
  padding: 1.2rem;
  .logo {
    height: 3rem;
  }
  .jumbotron {
    height: 40rem;
    cursor: pointer;
    .img-container {
      position: absolute;
      transition: opacity 0.5s ease-in-out;
      opacity: 0;
      width: 98%;
      img {
        width: 100%;
        object-fit: cover;
      }
      .title {
        position: absolute;
        bottom: 25rem;
        right: 3rem;
        font-size: 2.5em;
        font-weight: bolder;
        color: red;
        z-index: 10;
      }
      .upcoming {
        position: absolute;
        top: 7rem;
        left: 5rem;
        background-color: red;
        padding: 0.8rem 2.5rem;
        transform: skew(-20deg);
        span {
          font-size: 2.5em;
        }
      }
      &.active {
        opacity: 1;
      }
    }
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
