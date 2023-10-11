import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  // { path: '/', component: () => import('../views/Home.vue') },
  { path: '/movies', component: () => import('../components/Movies.vue') },
  { path: '/login', component: () => import('../components/LoginForm.vue') },
  // { path: '/profile', component: () => import('../views/Profile.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;