<script setup>
import { skillGroups } from '../data/resume.json'
import SectionLabel from './SectionLabel.vue'
import SkillTag from './SkillTag.vue'
</script>

<template>
  <section class="mb-10">
    <SectionLabel text="Skills" />
    <dl class="grid gap-4">
      <div
        v-for="group in skillGroups"
        :key="group.label"
        class="grid gap-2 sm:grid-cols-[140px_1fr] sm:items-start"
      >
        <dt class="pt-1 text-sm font-semibold text-neutral-400 dark:text-neutral-500">{{ group.label }}</dt>
        <dd class="flex flex-wrap gap-2">
          <SkillTag v-for="skill in group.skills" :key="skill" :label="skill" />
        </dd>
      </div>
    </dl>
  </section>
</template>
