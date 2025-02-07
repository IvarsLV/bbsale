<template>
  <div>
    <apexchart type="line" :options="options" :series="series"></apexchart>
  </div>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts';
import chartData from '../assets/langs/data.json'; // Импорт данных

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      series: [
        { name: 'Оборот', data: chartData.revenue }, // Используем данные из JSON
        { name: 'Активы', data: chartData.assets },
      ],
      options: {
        chart: { height: 400, type: 'line' },
        xaxis: { categories: chartData.years }, // Категории для оси X
      },
    };
  },
};
</script>