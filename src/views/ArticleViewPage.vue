<template>
  <div class="container p-6 mx-auto">
    <SearchBar />

    <div
      :class="`
        shadow-lg bg-white p-6 rounded-lg border border-white overflow-hidden
        dark:border-neutral-700 dark:bg-neutral-800
      `"
    >
      <div
        class="flex flex-col-reverse flex-col md:flex-row gap-4 items-center"
      >
        <div class="w-full md:w-3/5">
          <h1 class="font-bold text-2xl dark:text-white">
            {{ article.title }}
          </h1>
          <p class="mt-5 dark:text-white">
            {{ article.body }}
          </p>
        </div>

        <div class="w-full md:w-2/5">
          <img
            src="@/assets/images/default-thumbnail.png"
            :alt="`Thumbnail article ${article.title}`"
            class="rounded-lg block mx-auto"
          />
        </div>
      </div>
    </div>

    <button
      :class="`
        rounded p-3 mt-10 mb-5 cursor-pointer text-white text-sm block mx-auto transition-all
        bg-primary hover:bg-primary-hover
      `"
      @click="goHome"
    >
      <Home class="inline mr-1" :size="20" />
      Ir para página inicial
    </button>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { onMounted, reactive } from 'vue';
import { usePosts } from '@/stores/posts';
import { Home } from 'lucide-vue-next';
import SearchBar from '@/components/SearchBar.vue';

const props = defineProps({
  id: {
    type: [String, Number],
    required: true
  }
});

const router = useRouter();
const postsStore = usePosts();
const article = reactive({});

function goHome() {
  router.push({ name: 'articles' });
}

onMounted(async () => {
  const response = await postsStore.loadById(props.id);
  Object.assign(article, response);
});
</script>
