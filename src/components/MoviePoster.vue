<template>
  <div class="movie card">
    <img :src="`https://image.tmdb.org/t/p/w500/${poster}`" :alt="title" srcset="" />
    <div class="card-body">
      <span :class="`fi-${originalLanguage} fis`"></span>

      <h1>{{ title }}</h1>
      <h2>{{ originalTitle }}</h2>

      <h3>{{ voteAverage }}</h3>
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
    voteAverage: Number,
  }
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}

h1,
h2,
h3 {
  font-size: 1rem;
}

h3 {
  font-family: Arial, Helvetica, sans-serif;
}

.fis {
  width: 16px;
  height: 16px;
  display: inline-block;
}
</style>