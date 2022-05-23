<template>
  <div id="app">
    <header-comp @homeClick="getPopularMovies" @changePage="getPopularTvSeries" >
      <search-bar-comp @searchMovie="saveQuery" @searchMovieGenre="saveGenre"></search-bar-comp>
    </header-comp>
    <div class="container">
      <div class="row">
        <div v-for="movie in movies" :key="movie.id" class="col-3">
          <MoviePoster :poster="movie.poster_path" :title="movie.title" :originalTitle="movie.original_title"
          :originalLanguage="movie.original_language"
          :overview="movie.overview"
          :voteAverage="movie.vote_average" />
        </div>
        <div class="col-12 not-found" v-if="query && movies.length == 0">
          <h1>Nessun film trovato</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import SearchBarComp from './components/SearchBarComp.vue'
import MoviePoster from "./components/MoviePoster.vue";
import { getMoviePopular, getSearchMovie, getSearchTvSeries, getTvSeriesPopular} from './api';


export default {
  name: 'App',
  components: {
    HeaderComp,
    SearchBarComp,
    MoviePoster
  },
  data() {
    return {
      query: '',
      genre: null,
      movies: [],
    }
  },
  methods: {
    saveQuery(value) {
      this.query = value
    },

    saveGenre(value) {
      this.genre = value
    },

    getMoviesQuery() {
      getSearchMovie(this.query, this.genre)
        .then((res) => {
          this.movies = res.data.results;
        })
        .catch((err) => {
          if (err.response.status === 404) {
            this.movies = [];
          }
        })
    },

    getTvSeriesQuery() {
      getSearchTvSeries(this.query, this.genre)
        .then((res) => {
          this.tvSeries = res.data.results;
        })
        .catch((err) => {
          if (err.response.status === 404) {
            this.tvSeries = [];
          }
        })
    },

    getPopularTvSeries() {
      getTvSeriesPopular(this.genre)
        .then((res) => {
          this.tvSeries = res.data.results;
        })
        .catch((err) => {
          if (err.response.status === 404) {
            this.tvSeries = [];
          }
        })
    },

    getPopularMovies() {
      getMoviePopular(this.genre)
        .then((res) => {
          this.movies = res.data.results;
        })
        .catch((err) => {
          if (err.response.status === 404) {
            this.movies = [];
          }
        })
    },

    load() {
      if (this.query) {
        this.getMoviesQuery();
      } else {
        this.getPopularMovies();
      }
    }
  },
  watch: {
    query() {
      this.load()
    },
    genre() {
      this.load()
    },
  },
  mounted() {
    this.load()
  }
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
