<template>
  <card-template header="Example 1">
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
  const documentStyle = getComputedStyle(document.documentElement)

  return {
    labels: ['', '', '', '', '', '', ''],
    datasets: [
      {
        label: 'Sprzedaż',
        fill: false,
        borderColor: '#ffe500',
        backgroundColor: '#ffe500',
        pointBackgroundColor: '#242dae',
        pointBorderColor: '#242dae',
        pointBorderWidth: 1,
        pointRadius: 4,
        pointHoverRadius: 5,
        yAxisID: 'y',
        tension: 0.4,
        data: [28, 48, 40, 19, 86, 27, 90],
      },
      {
        label: null,
        fill: false,
        borderColor: documentStyle.getPropertyValue('--gray-300'),
        borderDash: [10, 5],
        pointRadius: 0,
        pointHoverRadius: 0,
        yAxisID: 'y1',
        tension: 0.4,
        data: [25, 30, 40, 51, 36, 55, 60],
        interaction: {
          mode: null,
        },
        hover: {
          mode: null,
        },
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
  max-width: 500px;
}
</style>
