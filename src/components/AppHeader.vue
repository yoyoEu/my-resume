<script setup>
import { profile } from '../data/resume.json'
</script>

<template>
  <header class="mb-10">
    <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight mb-1">{{ profile.name }}</h1>
    <p class="text-lg font-semibold text-accent">{{ profile.title }}</p>
  </header>
</template>
