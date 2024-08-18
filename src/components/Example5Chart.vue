<template>
  <card-template>
    <chart-template
      type="polarArea"
      :data="chartData"
      :options="chartOptions"
    />
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
    datasets: [
      {
        data: [7, 9, 5, 4, 6],
        backgroundColor: [
          '#ffe500',
          '#242dae',
          '#10b981',
          '#1187c7',
          '#64748b',
        ],
        label: 'Klienci',
      },
    ],
    labels: ['Elektronika', 'Meble', 'Jedzenie', 'Ubrania', 'Inne'],
  }
}

const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement)
  const textColor = documentStyle.getPropertyValue('--text-color')
  const surfaceBorder = documentStyle.getPropertyValue('--surface-border')

  return {
    plugins: {
      legend: {
        labels: {
          color: textColor,
        },
      },
    },
    scales: {
      r: {
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
  max-width: 300px;
}
</style>
