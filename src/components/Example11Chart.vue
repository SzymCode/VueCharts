
<template>
  <card-template>
    <chart-template type="bar" :data="chartData" :options="chartOptions"  />
  </card-template>
</template>

<script setup>
import {ref, onMounted} from "vue";

onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
  return {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Przychód',
        backgroundColor: '#ffe50099',
        borderColor: '#ffe500',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: 'Wydatki',
        backgroundColor: '#242dae99',
        borderColor: '#242dae',
        borderWidth: 2,
        data: [8, 8, 4, 5, 6, 7, 9]
      },
      {
        label: 'Dochód',
        backgroundColor: '#10b98199',
        borderColor: '#10b981',
        borderWidth: 2,
        data: [57, 51, 76, 76, 50, 48, 31]
      },
    ]
  };
};
const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--p-text-color');
  const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
  const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

  return {
    indexAxis: 'y',
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      legend: {
        labels: {
          color: textColor
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary,
          font: {
            weight: 500
          }
        },
        grid: {
          display: false,
          drawBorder: false
        }
      },
      y: {
        ticks: {
          color: textColorSecondary
        },
        grid: {
          color: surfaceBorder,
          drawBorder: false
        }
      }
    }
  };
}
</script>

<style scoped>
.p-chart {
  width: 100%;
  height: 500px;
}
.p-card {
  width: 100%;
  max-width: 720px;
}
</style>
