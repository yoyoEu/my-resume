<script setup>
import { profile } from '../data/resume.json'
</script>

<template>
  <header class="mb-10">
    <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight mb-1">{{ profile.name }}</h1>
    <p class="text-lg font-semibold text-accent mb-3">{{ profile.title }}</p>
    <ul class="flex flex-wrap gap-x-5 gap-y-2 text-sm text-neutral-500 dark:text-neutral-400">
      <li class="flex items-center gap-1.5">
        <svg class="w-4 h-4 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m2 6 10 7 10-7" />
        </svg>
        <a class="hover:text-accent hover:underline underline-offset-2" :href="`mailto:${profile.email}`">{{ profile.email }}</a>
      </li>
    </ul>
  </header>
</template>
