<template>
  <button
    :class="`
      rounded-sm p-1.5 px-2 cursor-pointer slate-900 transition-all
      hover:bg-zinc-100 dark:hover:bg-neutral-800
    `"
  >
    <slot></slot>
  </button>
</template>
