<template>
  <div class="fixed w-screen h-screen bg-white opacity-70 z-20 top-0" />
  <div class="fixed w-[50px] h-[50px] top-2/4 left-2/4 z-25 text-primary">
    <LoaderCircle :size="40" :stroke-width="2" class="animate-spin" />
  </div>
</template>
<script setup>
import { LoaderCircle } from 'lucide-vue-next';
</script>
