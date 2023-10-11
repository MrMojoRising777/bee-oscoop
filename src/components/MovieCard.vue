<template>
  <div class="col-lg-3 col-md-4 col-sm-6 mb-4"> <!-- Adjust the grid classes for different screen sizes -->
    <div class="card movie-card">
      <img :src="movie.Poster" class="card-img-top poster-image" :alt="movie.Title">
      <div class="card-body">
        <h5 class="card-title">{{ movie.Title }}</h5>
        <p class="card-text">Year: {{ movie.Year }}</p>
        <p class="card-text">Genre: {{ movie.Genre }}</p>
        <p class="card-text">Director: {{ movie.Director }}</p>
        <p class="card-text">IMDB Rating: {{ movie.imdbRating }}</p>
        <a href="#" class="btn btn-primary">Details</a>
      </div>
    </div>
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
  transition: all 0.3s; /* Smooth transition effect for all properties */

  /* Initial styles for unhovered cards */
  filter: brightness(100%);
  transform: scale(1);
}

.movie-card:hover {
  /* Hover styles for the hovered card */
  filter: brightness(130%); /* Brighten the card */
  transform: scale(1.05); /* Slightly enlarge the card */
}
/* Apply blur effect to other cards when one is hovered */
.movie-card:not(:hover) {
  filter: blur(3px);
  transform: scale(0.95);
}
</style>