<template>
  <div id="page">
    <div class="mb-4 rounded-3"
      :style="{ 'background-image': details.poster_path ? `url(https://image.tmdb.org/t/p/w500/${details.poster_path})` : `/placeholder.png` }">
      <div class="p-5 bg">
        <div class="container-fluid py-5">
          <h1 class="display-5 fw-bold" v-if="details.title">{{ details.title }}</h1>
          <h1 class="display-5 fw-bold" v-if="details.name">{{ details.name }}</h1>
          <h2 v-if="details.title !== details.original_title">{{ details.original_title }}
            <lang-flag :iso="`${details.original_language}`" :squared="false" />
          </h2>
          <h2 v-if="details.name !== details.original_name">{{ details.original_name }}
            <lang-flag :iso="`${details.original_language}`" :squared="false" />
          </h2>
          <div class="row">
            <div class="col-8">
              <p>{{ details.overview }}</p>
              <div class="genres"><span v-for="genre in details.genres" :key="genre.id">{{ genre.name
              }}</span></div>
              <h3>
                <font-awesome-icon v-for="star in stars" :key="star" icon="fa-solid fa-star" />
                <font-awesome-icon v-for="star in (5 - stars)" :key="star" icon="fa-regular fa-star" />
              </h3>

            </div>
            <div class="cast col-4">
              <ul>
                <li v-for="actor in cast.slice(0, 6)" :key="actor.id">
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
export default {
  name: 'App',
  components: {},
  props: {
    details: Object,
    cast: Array,
  },
  computed: {
    stars() {
      if (this.details.vote_average) {
        return Math.ceil(this.details.vote_average / 2)
      } else {
        return 0
      }
    }
  },
}
</script>

<style lang="scss" scoped>
#page {
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
