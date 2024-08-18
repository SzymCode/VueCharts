<template>
  <card-template>
    <chart-template type="pie" :data="chartData" :options="chartOptions" />
  </card-template>
</template>

<script setup>
import { ref, onMounted } from 'vue'

onMounted(() => {
  chartData.value = setChartData()
  chartOptions.value = setChartOptions()
})

const chartData = ref()
const chartOptions = ref()

const setChartData = () => {
  return {
    labels: ['Przychód z reklam', 'Wydatki na reklamy'],
    datasets: [
      {
        data: [702, 50],
        backgroundColor: ['#ffe500', '#242dae'],
        hoverBackgroundColor: ['#ffe500', '#242dae'],
      },
    ],
  }
}

const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement)
  const textColor = documentStyle.getPropertyValue('--p-text-color')

  return {
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
          color: textColor,
        },
      },
    },
  }
}
</script>
