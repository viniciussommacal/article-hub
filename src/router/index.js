import { createRouter, createWebHistory } from 'vue-router';
import Articles from '@/views/ArticlesPage.vue';
import ArticleViewPage from '@/views/ArticleViewPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      component: ArticleViewPage
    }
  ]
});

export default router;
