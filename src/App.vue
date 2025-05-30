<template>
  <main class="relative bg-gray-100 dark:bg-neutral-900">
    <AppToolbar />
    <div class="pt-12 min-h-[calc(100vh-49px)]">
      <RouterView />
    </div>
    <AppLoader v-if="loading" />
    <AppFooter />
  </main>
</template>
<script setup>
import { storeToRefs } from 'pinia';
import { RouterView } from 'vue-router';
import { usePosts } from '@/stores/posts';
import AppToolbar from '@/components/core/AppToolbar.vue';
import AppFooter from '@/components/core/AppFooter.vue';
import AppLoader from '@/components/core/AppLoader.vue';

const postsStore = usePosts();
const { loading } = storeToRefs(postsStore);
</script>
