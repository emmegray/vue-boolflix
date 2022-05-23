<template>
  <div class="container">
      <div class="row">
        <div v-for="serie in series" :key="serie.id" class="col-3">
          <poster-comp :poster="serie.poster_path" :title="serie.title" :originalTitle="serie.original_title"
          :originalLanguage="serie.original_language"
          :overview="serie.overview"
          :voteAverage="serie.vote_average" />
        </div>
        <div class="col-12 not-found" v-if="query && series.length == 0">
          <h1>Nessuna serie trovata</h1>
        </div>
      </div>
    </div>
</template>

<script>
import { getSearchTvSeries, getTvSeriesPopular } from "@/api";
import PosterComp from "@/components/PosterComp.vue";

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
      series: [],
    }
  },

  methods: {

    getSeriesQuery() {
      getSearchTvSeries(this.query, this.genre)
        .then((res) => {
          this.series = res.data.results;
        })
        .catch((err) => {
          if (err.response.status === 404) {
            this.series = [];
          }
        })
    },

    getSeriesPopular() {
      getTvSeriesPopular(this.genre)
        .then((res) => {
          this.series = res.data.results;
        })
        .catch((err) => {
          if (err.response.status === 404) {
            this.series = [];
          }
        })
    },

    load() {
      if (this.query) {
        this.getSeriesQuery();
      } else {
        this.getSeriesPopular();
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
