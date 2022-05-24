<template>
  <div id="app">
    <header-comp @homeClick="home" @changePage="savePage" >
      <search-bar-comp @search="saveQuery" @changeGenre="saveGenre" :page="page"></search-bar-comp>
    </header-comp>

    <div class="container" v-if="id">
      <div class="row">
        <movie-page v-if="page === 'movie'" :id="id" />
        <series-page v-if="page === 'tv'" :id="id" />
      </div>
    </div>

    <MovieGrid v-if="page === 'movie'" :genre="genre" :query="query" @view="view" />
    <TvGrid v-if="page === 'tv'" :genre="genre" :query="query" @view="view" />
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import SearchBarComp from './components/SearchBarComp.vue'
import MovieGrid from './components/MovieGrid.vue'
import TvGrid from './components/TvGrid.vue'
import MoviePage from './components/MoviePage.vue'
import SeriesPage from './components/SeriesPage.vue'

export default {
  name: 'App',
  components: {
    HeaderComp,
    SearchBarComp,
    MovieGrid,
    TvGrid,
    MoviePage,
    SeriesPage
  },
  data() {
    return {
      id: '',
      query: '',
      genre: null,
      page:'movie'
    }
  },

  methods: {
    home (){
      this.id = ''
      this.page = 'movie'
      this.genre = null 
    },

    view(id) {
      this.id = id
    },

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
