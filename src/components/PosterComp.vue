<template>
  <div class="poster card">
    <img :src="poster ? `https://image.tmdb.org/t/p/w500/${poster}` : `/placeholder.png`" :alt="title" srcset="" />
    <div class="card-body">
      <h1>{{ title }}</h1>
      <h2 v-if="title !== originalTitle">{{ originalTitle }}</h2>
      <span class="overview">{{ overview }}</span>
      <lang-flag :iso="`${originalLanguage}`" :squared="false" />
      <h3>
        <font-awesome-icon v-for="star in stars" :key="star" icon="fa-solid fa-star" />
        <font-awesome-icon v-for="star in (5 - stars)" :key="star" icon="fa-regular fa-star" />
      </h3>
      <button @click="viewMovie">Dettaglio</button>
    </div>
    <span class="placeholder" v-if="!poster">{{ title }}</span>
  </div>
</template>

<script>
export default {
  nome: 'PosterComp',
  props: {
    poster: String,
    title: String,
    originalTitle: String,
    originalLanguage: String,
    overview: String,
    voteAverage: Number,
    id: String,
  },
  computed: {
    stars() {
      return Math.ceil(this.voteAverage / 2)
    }
  },
  methods: {
    viewMovie() {
      this.$emit('viewMovie', this.id)
    }
  }

}
</script>

<style lang="scss" scoped>
.card {
  overflow: hidden;
  position: relative;
  text-align: center;
  border: 0px none;

  &:hover {
    transform: scale(1.1);
    filter: drop-shadow(0 0 0.85rem rgb(0, 0, 0));
  }
}

img {
  width: 100%;
}

h1,
h2,
h3 {
  font-size: 1rem;
}

h2 {
  font-style: italic;
  font-size: 0.8rem;
}

h3 {
  color: rgb(251, 237, 63);
}

.card-body {
  color: white;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) opacity 0.3s;
  background-color: rgba($color: black, $alpha: 0.75);
  opacity: 0;
}

.card:hover .card-body {
  opacity: 1;
}

.overview {
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;
  margin-bottom: 10px;
  font-size: small;
}

.overview::-webkit-scrollbar {
  display: none;
}
</style>