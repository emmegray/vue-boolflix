<template>
  <div id="movie-page">
    <div class="mb-4 rounded-3"
      :style="{ 'background-image': movie.poster_path ? `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})` : `/placeholder.png` }">
      <div class="p-5 bg">
        <div class="container-fluid py-5">
          <h1 class="display-5 fw-bold">{{ movie.title }}</h1>
          <h2 v-if="movie.title !== movie.original_title">{{ movie.original_title }}
            <lang-flag :iso="`${movie.original_language}`" :squared="false" />
          </h2>
          <div class="row">
            <div class="col-8">
              <p>{{ movie.overview }}</p>
              <div class="genres"><span v-for="genre in movie.genres" :key="genre.id">{{ genre.name }}</span></div>
              <h3>
                <font-awesome-icon v-for="star in stars" :key="star" icon="fa-solid fa-star" />
                <font-awesome-icon v-for="star in (5 - stars)" :key="star" icon="fa-regular fa-star" />
              </h3>

            </div>
            <div class="cast col-4">
              <ul>
                <li v-for="actor in credits.cast.slice(0, 6)" :key="actor.id">
                  <span class="actor">{{ actor.name }}</span>
                  <span class="role">{{ actor.character }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getMovie, getMovieCredits } from '@/api'
export default {
  name: 'App',
  components: {},
  props: {
    id: String,
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
      getMovieCredits(this.id)
        .then(res => {
          this.credits = res.data
        })
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
  }

  .bg {
    background: rgba(0, 0, 0, 0.7)
  }

  h1,
  h2 {
    margin-bottom: 10px;
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
