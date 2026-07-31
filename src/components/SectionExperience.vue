<script setup>
import { experience } from '../data/resume.json'
import SectionLabel from './SectionLabel.vue'
import ExperienceItem from './ExperienceItem.vue'
</script>

<template>
  <section class="mb-10">
    <SectionLabel text="Experience" />
    <div class="space-y-8">
      <ExperienceItem v-for="job in experience" :key="job.company" :job="job" />
    </div>
  </section>
</template>
