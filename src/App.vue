<template>
  <div id="app">
    <HeaderComp>
      <SearchBarComp></SearchBarComp>
    </HeaderComp>
  </div>
</template>

<script>
import axios from "axios";
import HeaderComp from './components/HeaderComp.vue'
import SearchBarComp from './components/SearchBarComp.vue'

export default {
  name: 'App',
  components: {
    HeaderComp,
    SearchBarComp
  },
  data (){
    return {
      apiUrl: 'https://api.themoviedb.org/3/search/movie',
      api_key:'912eb08b9205eeff45dbaffd282e9c4e',
      language: 'it_IT',
      query: ''
    }
  },
  mounted: {
    getApi () {
      axios.get(this.apiUrl, {
        params: {
          api_key: this.api_key,
          language: this.language,
          query: this.query,
        }
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
