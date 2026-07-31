<script setup>
defineProps({
  label: { type: String, required: true },
})
</script>

<template>
  <span
    class="rounded-md border border-neutral-200 bg-neutral-100 px-2.5 py-1 text-sm font-medium text-neutral-800 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
  >
    {{ label }}
  </span>
</template>
