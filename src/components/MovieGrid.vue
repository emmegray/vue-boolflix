<template>
  <div class="container">
    <div class="row">
      <div v-for="movie in movies" :key="movie.id" class="col-3">
        <poster-comp :poster="movie.poster_path" :title="movie.title" :originalTitle="movie.original_title"
        :originalLanguage="movie.original_language"
        :overview="movie.overview"
        :voteAverage="movie.vote_average" />
      </div>
      <div class="col-12 not-found" v-if="query && movies.length == 0">
        <h1>Nessun film trovato</h1>
      </div>
    </div>
  </div>
</template>

<script>
import PosterComp from "@/components/PosterComp.vue";
import { getMoviePopular, getSearchMovie } from '@/api';

export default {
  name: 'App',
  components: {
    PosterComp
  },

  props: {
    genre: String,
    query: String,
  },

  data() {
    return {
      movies: []
    }
  },

  methods: {
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
