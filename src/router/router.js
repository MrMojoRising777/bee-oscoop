import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: () => import('../components/Home.vue') },
  { path: '/movies', component: () => import('../components/Movies.vue') },
  { path: '/movie/:id', component: () => import('../components/MovieDetail.vue') },
  { path: '/tickets/:imdbID', component: () => import('../components/Tickets.vue') },
  { path: '/login', component: () => import('../components/LoginForm.vue') },
  { path: '/register', component: () => import('../components/RegistrationForm.vue') },
  // { path: '/profile', component: () => import('../views/Profile.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;