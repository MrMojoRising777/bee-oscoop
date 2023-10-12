<template>
  <div class="container mt-4">
    <h2>{{ movie.Title }}</h2>
    <div class="row">
      <div class="col-md-6">
        <img :src="movie.Poster" class="img-fluid" :alt="movie.Title">
        <p><span>Rated: </span><span>{{ movie.Rated }}</span></p>
        <p><span>Directed by: </span><span>{{ movie.Director }}</span></p>
        <p><span>Starring: </span><span>{{ movie.Actors }}</span></p>
        <p><span>Written by: </span><span>{{ movie.Writer }}</span></p>
      </div>
      <div class="col-md-6">
        <router-link to="/tickets">
          <button class="btn btn-warning">Tickets</button>
        </router-link>
        <p><span>Released: </span><span>{{ movie.Released }}</span></p>
        <p><span>Duration: </span><span>{{ movie.Runtime }}</span></p>
        <p><span>Language: </span><span>{{ movie.Language }}</span></p>
        <p><span>Genre: </span><span>{{ movie.Genre }}</span></p>
        <p><span>IMDB Rating: </span><span>{{ movie.imdbRating }}</span></p>
        <p><span>Awards won: </span><span>{{ movie.Awards }}</span></p>
        <p><span>Plot: </span><span>{{ movie.Plot }}</span></p>
        <a :href="'https://www.imdb.com/title/' + movie.imdbID" target="_blank" class="btn btn-primary mt-3">IMDB Link</a>
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