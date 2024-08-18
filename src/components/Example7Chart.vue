<template>
  <card-template>
    <chart-template type="bar" :data="chartData" :options="chartOptions" />
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
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        type: 'line',
        label: 'Dataset 1',
        backgroundColor: '#ffe500',
        borderColor: '#ffe500',
        borderWidth: 2,
        tension: 0.4,
        data: [50, 25, 12, 48, 56, 76, 42],
      },
      {
        type: 'bar',
        label: 'Dataset 2',
        backgroundColor: '#64748b',
        borderColor: '#64748b',
        data: [21, 84, 24, 75, 37, 65, 34],
      },
      {
        type: 'bar',
        label: 'Dataset 3',
        backgroundColor: '#242dae',
        borderColor: '#242dae',
        data: [41, 52, 24, 74, 23, 21, 32],
      },
    ],
  }
}
const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement)
  const textColor = documentStyle.getPropertyValue('--p-text-color')
  const textColorSecondary = documentStyle.getPropertyValue(
    '--p-text-muted-color'
  )
  const surfaceBorder = documentStyle.getPropertyValue(
    '--p-content-border-color'
  )

  return {
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      legend: {
        labels: {
          color: textColor,
        },
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
      y: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
    },
  }
}
</script>

<style scoped>
.p-chart {
  width: 100%;
  height: 250px;
}
.p-card {
  width: 100%;
  max-width: 1000px;
}
</style>
