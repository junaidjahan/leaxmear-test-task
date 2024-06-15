import { createRouter, createWebHistory } from 'vue-router';
import Rooms from "../pages/rooms/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Rooms',
      component: Rooms
    }
  ]
})

export default router
 