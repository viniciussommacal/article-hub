import http from '@/services/http';

export async function getArticles() {
  return http.get('/posts');
}

export async function getArticleById(id) {
  return http.get(`/posts/${id}`);
}
