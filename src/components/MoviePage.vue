<template>
  <div id="movie-page">
    <page-card :details="movie" :cast="credits.cast" />
  </div>
</template>

<script>
import { getMovie, getMovieCredits } from '@/api'
import PageCard from './PageCard.vue'
export default {
  name: 'MoviePage',
  components: { PageCard },
  props: {
    id: Number,
  },
  data() {
    return {
      movie: {},
      credits: {}
    }
  },
  mounted() {
    getMovie(this.id)
      .then(res => {
        this.movie = res.data
      })
    getMovieCredits(this.id)
      .then(res => {
        this.credits = res.data
      })
  },
  computed: {
    stars() {
      if (this.movie.vote_average) {
        return Math.ceil(this.movie.vote_average / 2)
      } else {
        return 0
      }
    }
  },
  watch: {
    id() {
      getMovie(this.id)
        .then(res => {
          this.movie = res.data
        })
        .catch(console.error)
      getMovieCredits(this.id)
        .then(res => {
          this.credits = res.data
        })
        .catch(console.error)
    }
  }
}
</script>

<style lang="scss" scoped>
#movie-page {
  color: white;

  &>div {
    position: relative;
    background-size: cover;
    background-position: top center;
    overflow: hidden;
  }

  .bg {
    background: rgba(0, 0, 0, 0.7)
  }

  h1,
  h2 {
    margin-bottom: 10px;
  }

  h3 {
    color: rgb(251, 237, 63);
  }

  .genres {
    margin-bottom: 20px;

    span {
      border: 1px solid white;
      border-radius: 8px;
      padding: 4px 10px 6px 10px;
      text-transform: lowercase;
      font-variant: small-caps;
      margin-right: 8px;
    }
  }

  .cast {

    ul {
      list-style: none;
    }

    li {
      margin-bottom: 5px;
    }

    .actor,
    .role {
      display: block;
    }

    .actor {
      font-weight: bold;
    }

    .role {
      font-style: italic;
    }

  }


}
</style>
