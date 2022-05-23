<template>
  <div class="movie card">
    <img :src="`https://image.tmdb.org/t/p/w500/${poster}`" :alt="title" srcset="" />
    <div class="card-body">
      <h1>{{title}}</h1>
      <h2 v-if="title !== originalTitle">{{originalTitle}}</h2>
      <span class="overview">{{overview}}</span>
      <span>Lingua: <lang-flag :iso="`${originalLanguage}`" :squared="false" /></span>
      <h3>Voto: {{voteAverage}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  nome: 'MoviePoster',
  props: {
    poster: String,
    title: String,
    originalTitle: String,
    originalLanguage: String,
    overview: String,
    voteAverage: Number,
  }
};
</script>

<style lang="scss" scoped>
.card {
  overflow: hidden;
  position: relative;
  text-align: center;
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
  font-family: Arial, Helvetica, sans-serif;
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
  text-align: left;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll; 
}

.overview::-webkit-scrollbar {
  display: none;
}
</style>