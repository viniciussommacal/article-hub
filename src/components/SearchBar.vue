<template>
  <div class="lg:w-[600px] mx-auto my-8">
    <div class="flex justify-center mb-5">
      <h1 class="font-bold text-center text-xl md:text-2xl dark:text-white">
        Welcome to article-hub :)
      </h1>
    </div>
    <div
      :class="[
        'flex relative bg-white border rounded-full w-full h-[56px] group ',
        'dark:bg-neutral-800 dark:border-neutral-700'
      ]"
    >
      <input
        v-model="query"
        type="text"
        placeholder="Digite aqui para buscar..."
        :class="[
          'grow px-5 outline-none pr-4 rounded-full placeholder:text-sm text-sm relative',
          'dark:placeholder-neutral-400 dark:text-white'
        ]"
        @keyup.enter="research"
      />

      <button
        :class="[
          'bg-primary hover:bg-primary-hover rounded-full w-10 h-10 text-white flex items-center justify-center ',
          'transition-all cursor-pointer absolute right-2 top-2/4 -translate-y-2/4 ',
          'disabled:cursor-not-allowed disabled:bg-white disabled:text-black ',
          'dark:disabled:text-neutral-400 dark:disabled:bg-neutral-800'
        ]"
        :disabled="!query"
        @click="research"
      >
        <Search :size="22" />
      </button>
      <button
        v-show="!!lastQuery"
        :class="[
          'text-xs absolute right-14 top-2/4 -translate-y-2/4 cursor-pointer p-1 invisible ',
          'group-hover:visible dark:text-white'
        ]"
        @click="clear"
      >
        Limpar
      </button>
    </div>
    <p
      class="text-xs px-4 mt-2 invisible dark:text-white"
      :class="{
        visible: !!lastQuery && postsPaginated.length
      }"
    >
      {{ postsPaginated.length }} resultado(s) encontrados para "{{
        lastQuery
      }}"
    </p>
  </div>
</template>
<script setup>
import { useRouter, useRoute } from 'vue-router';
import { Search } from 'lucide-vue-next';
import { usePosts } from '@/stores/posts';
import { storeToRefs } from 'pinia';

const route = useRoute();
const router = useRouter();
const postsStore = usePosts();
const { postsPaginated, query, lastQuery } = storeToRefs(postsStore);

function research() {
  postsStore
    .research()
    .then(() => {
      if (route.name !== 'articles') {
        router.push({ name: 'articles' });
      }
    })
    .catch(() => {});
}

function clear() {
  query.value = '';
  research();
}
</script>
