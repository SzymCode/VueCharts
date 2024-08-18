<template>
  <card-template>
    <chart-template type="radar" :data="chartData" :options="chartOptions" />
  </card-template>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const chartData = ref(null)
const chartOptions = ref(null)

onMounted(() => {
  chartData.value = setChartData()
  chartOptions.value = setChartOptions()
})

const setChartData = () => {
  return {
    labels: ['Elektronika', 'Ubrania', 'Meble', 'Jedzenie', 'Inne'],
    datasets: [
      {
        label: 'Klienci',
        borderColor: '#242dae',
        backgroundColor: '#242dae60',
        pointBackgroundColor: '#242dae',
        pointBorderColor: '#242dae',
        pointHoverBackgroundColor: '#242dae',
        pointHoverBorderColor: '#242dae',
        data: [4, 3, 4, 2, 3],
      },
    ],
  }
}

const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement)
  const textColorSecondary = documentStyle.getPropertyValue(
    '--text-color-secondary'
  )

  return {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        intersect: false,
      },
    },
    scales: {
      r: {
        grid: {
          color: textColorSecondary,
        },
        min: 0,
        max: 5,
        ticks: {
          stepSize: 1,
        },
      },
    },
  }
}
</script>
