<template>
  <Card>
    <template #header v-if="header">
      <h2>{{ header }}</h2>
    </template>
    <template #content>
      <slot />
    </template>
  </Card>
</template>

<script setup lang="ts">
import { CardInterface } from '@/interfaces'

defineProps<CardInterface>()
</script>

<style scoped>
.p-card-header h2 {
  text-align: center;
  margin-bottom: 0;
}
</style>
