<script setup>
import { LineChart } from 'vue-chart-3';
import { Chart, registerables } from 'chart.js';
import { useWeightStore } from '../stores/weight.js';

const weightStore = useWeightStore();
const weights = weightStore.weights;

Chart.register(...registerables);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Weight',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};
</script>

<template>
  <div>
    <LineChart :chartData="data"></LineChart>
  </div>
</template>
