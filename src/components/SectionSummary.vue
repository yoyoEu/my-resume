<script setup>
import { profile } from '../data/resume.json'
import SectionLabel from './SectionLabel.vue'
</script>

<template>
  <section class="mb-10">
    <SectionLabel text="Summary" />
    <p class="max-w-2xl text-neutral-600 dark:text-neutral-300">{{ profile.summary }}</p>
  </section>
</template>
