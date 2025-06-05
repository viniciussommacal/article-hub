<template>
  <div class="container p-4 pb-8 min-h-[400px]">
    <SearchBar />

    <div
      v-if="postsPaginated.length"
      class="flex flex-wrap items-center justify-center gap-6 mt-6"
    >
      <ArticleCard
        v-for="post in postsPaginated"
        :key="post.id"
        :article="post"
      />
    </div>

    <div
      v-if="lastQuery && !postsPaginated.length"
      class="my-10 text-center dark:text-neutral-400"
    >
      Nenhum resultado encontrado para
      <span class="font-bold"> "{{ lastQuery }}"... </span>
    </div>

    <button
      v-if="lastQuery && !postsPaginated.length"
      :class="`
        rounded p-3 cursor-pointer text-white text-sm block mx-auto transition-all
        bg-primary hover:bg-primary-hover
      `"
      @click="postsStore.clearSearch"
    >
      <Home class="inline mr-1" :size="20" /> Ir para página inicial
    </button>

    <p v-show="noMore" class="text-center mt-10 text-sm dark:text-white">
      Não há mais artigos disponíveis. :(
    </p>

    <button
      v-if="postsPaginated.length && !noMore"
      :class="`
        rounded mt-8 p-3 cursor-pointer text-white text-sm block mx-auto transition-all
        bg-accent hover:bg-accent-hover
      `"
      @click="postsStore.viewmore()"
    >
      <LoaderCircle
        v-show="loadingMore"
        :size="20"
        :stroke-width="2"
        class="animate-spin inline mr-1"
      />
      Ver mais
    </button>
  </div>
</template>
<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { Home, LoaderCircle } from 'lucide-vue-next';
import { usePosts } from '@/stores/posts';
import SearchBar from '@/components/SearchBar.vue';
import ArticleCard from '@/components/ArticleCard.vue';

const postsStore = usePosts();

// prettier-ignore
const {
  lastQuery,
  loadingMore,
  postsPaginated,
  noMore
} = storeToRefs(postsStore);

onMounted(postsStore.load);
</script>
