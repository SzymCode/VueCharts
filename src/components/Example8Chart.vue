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
        type: 'bar',
        label: 'Dataset 1',
        backgroundColor: '#242dae',
        data: [50, 25, 12, 48, 90, 76, 42],
      },
      {
        type: 'bar',
        label: 'Dataset 2',
        backgroundColor: '#64748b',
        data: [21, 84, 24, 75, 37, 65, 34],
      },
      {
        type: 'bar',
        label: 'Dataset 3',
        backgroundColor: '#ffe500',
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
    aspectRatio: 0.8,
    plugins: {
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      legend: {
        labels: {
          color: textColor,
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
      y: {
        stacked: true,
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
