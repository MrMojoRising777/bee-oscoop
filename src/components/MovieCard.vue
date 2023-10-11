<template>
  <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
    <router-link :to="'/movie/' + movie.imdbID" class="card movie-card">
      <img :src="movie.Poster" class="card-img-top poster-image" :alt="movie.Title">
      <div class="card-body">
        <h5 class="card-title">{{ movie.Title }}</h5>
        <p class="card-text">Year: {{ movie.Year }}</p>
        <p class="card-text">Genre: {{ movie.Genre }}</p>
        <p class="card-text">Director: {{ movie.Director }}</p>
        <p class="card-text">IMDB Rating: {{ movie.imdbRating }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    movie: Object, // Pass movie data as prop to component
  },
};
</script>

<style scoped>
.poster-image {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
.movie-card {
  transition: all 0.3s;
}

.movie-card:hover {
  transform: scale(1.05);
}
</style>