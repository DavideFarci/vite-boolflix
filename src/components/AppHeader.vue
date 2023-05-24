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
      <h1>BOOLFLIX</h1>
      <div class="search">
        <input
          v-model="store.searchInput"
          @keyup.enter="this.$emit('performedSearch')"
          type="text"
        />
        <button @click="this.$emit('performedSearch')">Cerca</button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: black;
  color: white;
  height: 5rem;
  padding: 1.2rem;
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
