<template>
  <div class="movie">
    <img
      :src="`https://image.tmdb.org/t/p/w500/${poster}`"
      :alt="title"
      srcset=""
    />
    <h1>{{title}}</h1>
    <h2>{{originalTitle}}</h2>
    <h3>{{originalLanguage}}</h3>
    <h3>{{voteAverage}}</h3>
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
    voteAverage: Number,
  }
};
</script>

<style lang="scss" scoped>

</style>