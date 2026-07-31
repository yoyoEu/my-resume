<script setup>
import { education } from '../data/resume.json'
import SectionLabel from './SectionLabel.vue'
</script>

<template>
  <section class="mb-10">
    <SectionLabel text="Education" />
    <div
      v-for="edu in education"
      :key="edu.school"
      class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 rounded-xl border border-neutral-200 bg-white px-5 py-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
    >
      <div>
        <div class="font-bold">{{ edu.degree }}</div>
        <div class="text-sm text-neutral-500 dark:text-neutral-400">{{ edu.school }}</div>
      </div>
      <span class="font-mono text-xs text-neutral-400 dark:text-neutral-500">{{ edu.date }}</span>
    </div>
  </section>
</template>
