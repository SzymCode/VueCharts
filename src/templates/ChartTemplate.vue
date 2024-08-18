<template>
  <Chart :type="type" :data="chartData" :options="chartOptions" />
</template>

<script setup lang="ts">
import { ChartInterface } from '@/interfaces'

defineProps<ChartInterface>()
</script>
