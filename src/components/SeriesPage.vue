<template>
  <div id="series-page">
    <page-card :details="serie" :cast="credits.cast" />
  </div>
</template>

<script>
import { getSerie, getSeriesCredits } from '@/api'
import PageCard from './PageCard.vue'
export default {
  name: 'SeriesPage',
  components: { PageCard },
  props: {
    id: Number,
  },
  data() {
    return {
      serie: {},
      credits: {}
    }
  },
  mounted() {
    getSerie(this.id)
      .then(res => {
        this.serie = res.data
      })
    getSeriesCredits(this.id)
      .then(res => {
        this.credits = res.data
      })
  },
  watch: {
    id() {
      getSerie(this.id)
        .then(res => {
          this.serie = res.data
        })
        .catch(console.error)
      getSeriesCredits(this.id)
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
