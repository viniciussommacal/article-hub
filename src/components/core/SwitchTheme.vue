<template>
  <ToolbarButton @click="toggleDark()">
    <Moon v-if="isDark" class="text-black dark:text-zinc-100" :size="16" />
    <Sun v-else class="text-black" :size="16" />
  </ToolbarButton>
</template>
<script setup>
import ToolbarButton from './ToolbarButton.vue';
import { useDark, useToggle } from '@vueuse/core';
import { Moon, Sun } from 'lucide-vue-next';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
