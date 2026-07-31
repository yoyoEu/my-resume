<script setup>
defineProps({
  text: { type: String, required: true },
})
</script>

<template>
  <p class="flex items-center gap-3 mb-4 font-mono text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-500">
    {{ text }}
    <span class="h-px flex-1 bg-neutral-200 dark:bg-neutral-800"></span>
  </p>
</template>
