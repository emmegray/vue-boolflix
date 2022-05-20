<template>
  <div class="search">
    <input @keyup.enter="searchMovie" type="text" placeholder="Cerca un film qui" name="search" v-model="search">
    <button class="btn-danger" @click="searchMovie"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
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
  margin-right: 10px;
  border-radius: 10px;
}
button {
  padding: 8px 10px;
  border-radius: 10px;
}
</style>