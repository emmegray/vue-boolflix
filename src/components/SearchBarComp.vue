<template>
  <div class="search">
    <input type="text" placeholder="Cerca un film qui" name="search" v-model="search">
    <button @click="searchMovie">Cerca</button>
  </div>
</template>

<script>
export default {
  name: 'SearchBarComp',
  data (){
    return {
      search: ''
    }
  },
  methods: {
    searchMovie () {
      this.$emit("searchMovie", this.search)
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  padding: 10px;
}
button {
  padding: 10px;
}
</style>