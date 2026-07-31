<script setup>
defineProps({
  job: { type: Object, required: true },
})
</script>

<template>
  <div class="relative border-l-2 border-neutral-200 pl-6 dark:border-neutral-800">
    <span class="absolute -left-[7px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-accent/15"></span>
    <div class="mb-0.5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
      <h3 class="text-base font-bold">
        {{ job.role }}, <span class="text-accent">{{ job.company }}</span>
      </h3>
      <span class="whitespace-nowrap font-mono text-xs text-neutral-400 dark:text-neutral-500">{{ job.date }}</span>
    </div>
    <p class="mb-3 text-sm italic text-neutral-400 dark:text-neutral-500">{{ job.stack }}</p>
    <ul class="list-disc space-y-2 pl-[18px] text-neutral-600 marker:text-accent dark:text-neutral-300">
      <li v-for="(item, i) in job.highlights" :key="i">{{ item }}</li>
    </ul>
  </div>
</template>
