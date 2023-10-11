<template>
  <div>
    <h2>Movies</h2>
    <div class="input-container">
      <input class="form-control" type="text" id="searchItem" v-model="searchQuery" @input="searchMovies" placeholder="Search for movies...">
    </div>
    <div class="row">
      <MovieCard v-for="movie in movies" :key="movie.imdbID" :movie="movie" />
    </div>
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard.vue';

export default {
  name: "getMovies",
  components: {
    MovieCard,
  },
  data() {
    return {
      API_URL: `http://www.omdbapi.com/?apikey=`,
      API_KEY: '1f928ec1',
      searchQuery: "",
      movies: []
    }
  },
  mounted() {
    this.fetchMovies();
  },
  methods: {
    async fetchMovies() {
      const apiUrl = `${this.API_URL}${this.API_KEY}&s=${encodeURIComponent(this.searchQuery)}`;

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        this.movies = data.Search;
        console.log(this.movies);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    },
    searchMovies() {
      this.fetchMovies();
    }
  }
}
</script>

<style scoped>
.input-container {
  max-width: 300px;
  margin: 25px auto;
}
</style>