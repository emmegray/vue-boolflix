<template>
  <div class="search">
    <select @change="searchMovieGenre" name="genre" id="genre" v-model="genre">
      <option :value="null">Scegli un genere...</option>
      <option v-for="genre in genres" :key="genre.id" :value="genre.id">{{genre.name}}</option>
    </select>
    <input @keyup.enter="searchMovie" type="text" placeholder="Cosa vuoi guardare oggi?" name="search" v-model="search">
    <button class="btn-danger" @click="searchMovie"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
  </div>
</template>

<script>
import { getGenreMovieList } from '@/api'

export default {
  name: 'SearchBarComp',
  data (){
    return {
      search: '',
      genre: null,
      genres: []
    }
  },
  methods: {
    searchMovie () {
      this.$emit("searchMovie", this.search)
    },

    searchMovieGenre () {
      this.$emit("searchMovieGenre", this.genre);
    },

    saveGenres(axiosResponse) {
      this.genres = axiosResponse.data.genres;
    },

    noGenres(axiosError) {
      if (axiosError.response.status === 404) {
        this.genres = [];
      }
    },

    getGenres () {
      getGenreMovieList()
        .then(this.saveGenres)
        .catch(this.noGenres)
    },
  },
  mounted() {
    this.getGenres();
  }
}
</script>

<style lang="scss" scoped>
input, select {
  padding: 10px;
  margin-right: 10px;
  border-radius: 10px;
}

button {
  padding: 10px 15px;
  border-radius: 10px;
}
</style>