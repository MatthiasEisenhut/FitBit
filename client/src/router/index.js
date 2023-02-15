import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import StatisticsView from '../views/StatisticsView.vue';
import WorkoutView from '../views/WorkoutView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: StatisticsView,
    },
    {
      path: '/workout',
      name: 'workout',
      component: WorkoutView,
    },
  ],
});

export default router;
