<template>
  <div
    :class="[
      'shadow-xl group rounded-xl bg-white cursor-pointer w-[360px] border border-white ',
      'dark:border-neutral-700 dark:bg-neutral-800 overflow-hidden'
    ]"
  >
    <div
      class="h-[200px] w-[360px] overflow-hidden rounded-t-xl relative"
      @click="openArticle"
    >
      <img
        :src="getPath(article.image)"
        width="360"
        height="200"
        class="rounded-t-lg group-hover:scale-105 transition-all duration-300 ease-in-out"
        :alt="`Thumbnail article ${article.title}`"
      />
      <div
        :class="[
          'transition-all absolute opacity-0 top-0 left-0 ',
          'w-full h-full bg-gradient-to-r from-black to-transparent group-hover:opacity-70'
        ]"
      ></div>
      <button
        :class="[
          'cursor-pointer text-sm transition-all invisible absolute top-2/4 left-2/4 z-5 ',
          'border-white -translate-2/4 text-white font-bold flex items-end group-hover:visible'
        ]"
      >
        Ler mais
        <MoveUpRight :size="20" class="ml-2" />
      </button>
    </div>
    <div class="p-4">
      <h2 class="font-bold h-[50px] line-clamp-2 dark:text-white">
        {{ article.title }}
      </h2>
      <p class="text-gray-500 mt-2 text-sm dark:text-gray-300">
        {{ article.summary }}
      </p>
    </div>
  </div>
</template>
<script setup>
import { MoveUpRight } from 'lucide-vue-next';
import { getPath } from '@/utils/path';

const props = defineProps({
  article: {
    type: Object,
    required: true
  }
});

function openArticle() {
  window.open(`/article/${props.article.id}`);
}
</script>
