<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-6">
        <img :src="movie.Poster" class="img-fluid" :alt="movie.Title">
      </div>
      <div class="col-md-6">
        <h2>{{ movie.Title }}</h2>
        <p><strong>Year:</strong> {{ movie.Year }}</p>
        <p><strong>Genre:</strong> {{ movie.Genre }}</p>
        <p><strong>Director:</strong> {{ movie.Director }}</p>
        <p><strong>IMDB Rating:</strong> {{ movie.imdbRating }}</p>
        <p><strong>Plot:</strong> {{ movie.Plot }}</p>
        <a :href="movie.imdbID" target="_blank" class="btn btn-primary">IMDB Link</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      API_URL: `http://www.omdbapi.com/?apikey=`,
      API_KEY: '1f928ec1',
      movie: []
    }
  },
  mounted() {
    const movieId = this.$route.params.id;
    this.fetchMovie(movieId);
  },
  methods: {
    async fetchMovie(id) {
      const apiUrl = `${this.API_URL}${this.API_KEY}&i=${id}`;

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        this.movie = data; // Directly access the object data
        console.log(this.movie);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    },
  },
};
</script>

<style scoped>

</style>