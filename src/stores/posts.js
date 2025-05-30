import { getArticles, getArticleById } from '@/api/articles';
import { defineStore } from 'pinia';

export const usePosts = defineStore('posts', {
  state: () => ({
    pageSize: 6,
    page: 1,
    query: '',
    lastQuery: '',
    posts: [],
    loading: false,
    loadingMore: false
  }),
  getters: {
    postsFiltered() {
      return this.posts.filter((post) => {
        return post.title.toLowerCase().includes(this.lastQuery.toLowerCase());
      });
    },

    postsPaginated() {
      return this.postsFiltered.slice(0, this.page * this.pageSize);
    },

    totalPages() {
      return Math.ceil(this.postsFiltered.length / this.pageSize);
    },

    noMore() {
      return this.page === this.totalPages;
    }
  },
  actions: {
    async load() {
      try {
        this.loading = true;
        const response = await getArticles();

        this.posts = response.map((item) => {
          return {
            id: item.id,
            title: item.title,
            summary:
              item.body.length > 100
                ? `${item.body.slice(0, 100)} ...`
                : item.body,
            image: `@/assets/images/default-thumbnail.png`
          };
        });

        this.loading = false;
      } catch (error) {
        this.loading = false;
        throw error;
      }
    },

    async research() {
      if (this.query == this.lastQuery) {
        return;
      }

      this.loading = true;
      // simula o tempo de carregamento a uma chamada na API
      await new Promise((resolve) => setTimeout(resolve, 1000));

      this.page = 1;
      this.lastQuery = this.query;
      this.loading = false;
    },

    async loadById(id) {
      try {
        this.loading = true;

        const response = await getArticleById(id);

        this.loading = false;

        return {
          ...response,
          image: `@/assets/images/default-thumbnail.png`
        };
      } catch (error) {
        this.loading = false;
      }
    },

    async viewmore() {
      if (this.noMore) {
        return;
      }

      this.loadingMore = true;

      await new Promise((resolve) => setTimeout(resolve, 1000));

      this.loadingMore = false;

      this.page++;
    },

    clearSearch() {
      this.query = '';
      this.lastQuery = '';

      this.research();
    }
  }
});
