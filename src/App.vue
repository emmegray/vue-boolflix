<template>
  <div id="app">
    <header-comp @homeClick="getPopularMovies" @changePage="savePage" >
      <search-bar-comp @search="saveQuery" @changeGenre="saveGenre" :page="page"></search-bar-comp>
    </header-comp>
    <MovieGrid v-if="page === 'movie'" :genre="genre" :query="query" />
    <TvGrid v-if="page === 'tv'" :genre="genre" :query="query" />
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import SearchBarComp from './components/SearchBarComp.vue'
import MovieGrid from './components/MovieGrid.vue';
import TvGrid from './components/TvGrid.vue';


export default {
  name: 'App',
  components: {
    HeaderComp,
    SearchBarComp,
    MovieGrid,
    TvGrid
},
  data() {
    return {
      query: '',
      genre: null,
      page: "movie"
    }
  },

  methods: {
    savePage(page) {
      this.page = page
      this.genre = null
    },

    saveQuery(value) {
      this.query = value
    },

    saveGenre(value) {
      this.genre = value
    },
  },
}
</script>

<style lang="scss">
html {
  background: #1f1f1f;
}

#app {
  background: #1f1f1f;
  margin-top: 60px;
  padding-top: 100px;
}

.row>div {
  margin-bottom: 30px;
}

.not-found {
  text-align: center;
  color: white;
  margin: 60px;
}
</style>
