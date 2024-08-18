<template>
  <card-template header="Example 2">
    <chart-template type="line" :data="chartData" :options="chartOptions" />
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
    labels: [
      'Styczeń',
      'Luty',
      'Marzec',
      'Kwiecień',
      'Maj',
      'Czerwiec',
      'Lipiec',
    ],
    datasets: [
      {
        label: 'Przychód',
        borderColor: '#242dae',
        backgroundColor: '#242dae60',
        pointBackgroundColor: '#242dae',
        pointRadius: 0,
        data: [40, 55, 56, 71, 65, 90, 96],
      },
    ],
  }
}

const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement)
  const textColorSecondary = documentStyle.getPropertyValue(
    '--p-text-muted-color'
  )
  const surfaceBorder = documentStyle.getPropertyValue(
    '--p-content-border-color'
  )

  return {
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    fill: true,
    plugins: {
      legend: {
        display: false,
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
          display: false,
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
}
.p-card {
  width: 100%;
  max-width: 700px;
}
</style>
