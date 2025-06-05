import { createRouter, createWebHashHistory } from 'vue-router';
import Articles from '@/views/ArticlesPage.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'articles',
      component: Articles
    },
    {
      path: '/article/:id',
      name: 'articleView',
      props: true,
      component: () => import('@/views/ArticleViewPage.vue')
    }
  ]
});

export default router;
