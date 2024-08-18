<template>
  <card-template>
    <chart-template type="doughnut" :data="chartData" :options="chartOptions" />
  </card-template>
</template>

<script setup>
import { ref, onMounted } from 'vue'

onMounted(() => {
  chartData.value = setChartData()
  chartOptions.value = setChartOptions()
})

const chartData = ref()
const chartOptions = ref(null)

const setChartData = () => {
  return {
    labels: ['A', 'B', 'C'],
    datasets: [
      {
        data: [540, 325, 702],
        backgroundColor: ['#ffe500', '#242dae', '#64748b'],
        hoverBackgroundColor: ['#ffe500', '#242dae', '#64748b'],
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
          cutout: '60%',
          color: textColor,
        },
      },
    },
  }
}
</script>
