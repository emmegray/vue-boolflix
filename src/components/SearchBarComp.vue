<template>
  <div class="search">
    <select @change="changeGenre" name="genre" id="genre" v-model="genre">
      <option :value="null">Scegli un genere...</option>
      <option v-for="genre in genres" :key="genre.id" :value="genre.id">{{genre.name}}</option>
    </select>
    <input @keyup.enter="search" type="text" placeholder="Cosa vuoi guardare oggi?" name="search" v-model="query">
    <button class="btn-danger" @click="search"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
  </div>
</template>

<script>
import { getGenreMovieList, getGenreTvSeriesList } from '@/api'

export default {
  name: 'SearchBarComp',
  props: {
    page: String,
  },
  data (){
    return {
      query: '',
      genre: null,
      genres: []
    }
  },
  methods: {
    search () {
      this.$emit('search', this.query)
    },

    changeGenre () {
      this.$emit('changeGenre', this.genre)
    },

    saveGenres(axiosResponse) {
      this.genres = axiosResponse.data.genres
    },

    noGenres(axiosError) {
      if (axiosError.response.status === 404) {
        this.genres = []
      }
    },

    getGenres () {
      if (this.page === 'tv') getGenreTvSeriesList()
        .then(this.saveGenres)
        .catch(this.noGenres)
      if (this.page === 'movie') getGenreMovieList()
        .then(this.saveGenres)
        .catch(this.noGenres)
    },
  },
  watch: {
    page () {
      this.genre = null
      this.getGenres()
    }
  },
  mounted() {
    this.getGenres()
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