<template>
  <card-template header="Example 3">
    <chart-template type="line" :data="chartData" :options="chartOptions" />
  </card-template>
</template>
<script setup>
import { ref, onMounted } from 'vue'

const chartData = ref()
const chartOptions = ref()

onMounted(() => {
  chartData.value = setChartData()
  chartOptions.value = setChartOptions()
})

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
      'Sierpień',
      'Wrzesień',
      'Październik',
      'Listopad',
      'Grudzień',

      'Styczeń',
      'Luty',
      'Marzec',
      'Kwiecień',
      'Maj',
      'Czerwiec',
      'Lipiec',
      'Sierpień',
      'Wrzesień',
      'Październik',
      'Listopad',
      'Grudzień',

      'Styczeń',
    ],
    datasets: [
      {
        label: 'Sprzedaż',
        fill: false,
        borderColor: '#ffe500',
        backgroundColor: '#ffe500',
        pointBackgroundColor: 'white',
        pointBorderColor: '#ffe500',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 5,
        yAxisID: 'y',
        tension: 0.4,
        data: [
          250000, 260000, 275000, 295000, 320000, 350000, 385000, 425000,
          470000, 520000, 570000, 625000, 675000, 725000, 770000, 810000,
          845000, 875000, 900000, 920000, 935000, 945000, 950000, 950000,
          930000,
        ],
      },
      {
        label: 'Dataset 2',
        fill: false,
        borderColor: getComputedStyle(
          document.documentElement
        ).getPropertyValue('--gray-200'),
        borderDash: [10, 5],
        pointRadius: 0,
        pointHoverRadius: 0,
        yAxisID: 'y1',
        tension: 0.5,
        data: [
          250000, 310000, 270000, 210000, 370000, 260000, 380000, 260000,
          320000, 280000, 220000, 380000, 270000, 390000, 270000, 330000,
          290000, 230000, 390000, 280000, 400000, 280000, 340000, 300000,
          240000,
        ],
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
      x: {
        ticks: {
          color: textColorSecondary,
          callback: function (value, index) {
            const yearLabels = ['2022', '2023', '2024']
            if (index % 12 === 0) {
              return yearLabels[Math.floor(index / 12)]
            }
            return ''
          },
        },
        grid: {
          color: surfaceBorder,
        },
      },
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        grid: {
          color: surfaceBorder,
        },
      },
      y1: {
        type: 'linear',
        display: false,
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
}
.p-card {
  width: 100%;
  max-width: 1065px;
}
</style>
