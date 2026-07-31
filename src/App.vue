<script setup>
import AppHeader from './components/AppHeader.vue'
import SectionSummary from './components/SectionSummary.vue'
import SectionSkills from './components/SectionSkills.vue'
import SectionExperience from './components/SectionExperience.vue'
import SectionEducation from './components/SectionEducation.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div class="mx-auto max-w-3xl px-6 py-14 sm:py-16">
    <AppHeader />
    <SectionSummary />
    <SectionSkills />
    <SectionExperience />
    <SectionEducation />
    <AppFooter />
  </div>
</template>
