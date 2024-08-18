<template>
  <card-template>
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
    labels: ['', '', '', '', '', '', ''],
    datasets: [
      {
        label: 'Sprzedaż',
        fill: true,
        borderColor: getComputedStyle(
          document.documentElement
        ).getPropertyValue('--gray-600'),
        borderWidth: 1,
        backgroundColor: '#ffe50020',
        pointBackgroundColor: '#ffe500',
        pointBorderColor: '#ffe500',
        pointBorderWidth: 1,
        pointRadius: 4,
        pointHoverRadius: 5,
        yAxisID: 'y',
        tension: 0,
        data: [15, 5, 30, 42, 30, 45, 55],
      },
    ],
  }
}
const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement)
  const textColorSecondary = documentStyle.getPropertyValue(
    '--text-color-secondary'
  )
  const surfaceBorder = documentStyle.getPropertyValue('--surface-border')

  return {
    stacked: false,
    maintainAspectRatio: false,
    aspectRatio: 0.6,
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
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        ticks: {
          display: false,
        },
        grid: {
          color: surfaceBorder,
        },
      },
      y1: {
        type: 'linear',
        display: false,
        position: 'right',
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          drawOnChartArea: false,
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
  height: 170px;
}
.p-card {
  width: 100%;
  max-width: 320px;
}
</style>
