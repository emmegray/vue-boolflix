<template>
  <div id="app">
    <header-comp>
      <search-bar-comp @searchMovie="saveQuery"></search-bar-comp>
    </header-comp>
    <div>
      <MoviePoster 
        v-for="movie in movies"
        :key="movie.id"
        :poster="movie.poster_path"
        :title="movie.title"
        :originalTitle="movie.original_title"
        :originalLanguage="movie.original_language"
        :voteAverage="movie.vote_average"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import HeaderComp from './components/HeaderComp.vue'
import SearchBarComp from './components/SearchBarComp.vue'
import MoviePoster from "./components/MoviePoster.vue";

export default {
  name: 'App',
  components: {
    HeaderComp,
    SearchBarComp,
    MoviePoster
},
  data (){
    return {
      apiUrl: 'https://api.themoviedb.org/3/search/movie',
      api_key:'912eb08b9205eeff45dbaffd282e9c4e',
      language: 'it_IT',
      query: '',
      movies: [],
    }
  },
  methods:{
    saveQuery (value) {
      this.query = value
    },

    getApi () {
      axios.get(this.apiUrl, {
        params: {
          api_key: this.api_key,
          language: this.language,
          query: this.query,
        }
      })
      .then(res => {
        this.movies = res.data.results
      })
      .catch(err => {
        console.log(err);
      })
    }
  },
  watch: {
    query () {
      this.getApi();
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
