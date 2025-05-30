<template>
  <div
    :class="[
      'fixed z-16 w-screen shadow-lg py-2 bg-white border-b border-white ',
      'dark:bg-neutral-900 dark:border-neutral-700'
    ]"
  >
    <div class="container mx-auto px-4 flex justify-between">
      <RouterLink to="/">
        <span class="text-background font-bold text-sm dark:text-primary"
          >Logo Here</span
        >
        <span class="w-2 h-2 bg-accent inline-block rounded-full ml-1" />
      </RouterLink>
      <ul class="flex text-sm space-x-2 dark:text-white">
        <li>
          <SwitchTheme />
        </li>
        <li>
          <ToolbarButton
            @click="openUrl('https://github.com/viniciussommacal/article-hub')"
          >
            <Github :size="16" />
          </ToolbarButton>
        </li>
        <li>
          <ToolbarButton
            @click="openUrl('https://www.linkedin.com/in/vinicius-sommacal/')"
          >
            <Linkedin :size="16" />
          </ToolbarButton>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { Github, Linkedin } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';
import SwitchTheme from './SwitchTheme.vue';
import ToolbarButton from './ToolbarButton.vue';

function openUrl(link) {
  window.open(link, 'blank');
}
</script>
