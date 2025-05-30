import http from '@/services/http';

export async function getArticles() {
  return await http.get('/posts');
}

export async function getArticleById(id) {
  return await http.get(`/posts/${id}`);
}
