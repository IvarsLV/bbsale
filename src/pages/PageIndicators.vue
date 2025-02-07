<template>
  <div class="main-container">
    <!-- Title -->
    <div class="main-title" style="justify-content: center;">
      <h2>{{ $t("kpi.kpiwelcome_title") }}</h2>
    </div>

    <!-- Two Cards Row -->
    <div class="main-card-2">
      <div class="card">
        <div class="card-inner">
          <h3>{{ $t("kpi.2023data_title") }}</h3>
          <span class="material-symbols-outlined">analytics</span>
        </div>
        <indicators-table />

      </div>
      <div class="card">
      <div class="card-inner">
        <h3>{{ $t("kpi.revenue_title") }}</h3>
        <span class="material-symbols-outlined">analytics</span>
      </div>
      <apexchart type="line" :options="revenueOptions" :series="revenueSeries"></apexchart>
    </div>

    <div class="card">
      <div class="card-inner">
        <h3>{{ $t("kpi.grossprofit_title") }}</h3>
        <span class="material-symbols-outlined">analytics</span>
      </div>
      <apexchart type="line" :options="grossProfitOptions" :series="grossProfitSeries"></apexchart>
    </div>

    <div class="card">
      <div class="card-inner">
        <h3>{{ $t("kpi.netprofit_title") }}</h3>
        <span class="material-symbols-outlined">analytics</span>
      </div>
      <apexchart type="line" :options="netProfitOptions" :series="netProfitSeries"></apexchart>
    </div>

    </div>

  </div>
</template>

<script>
import IndicatorsTable from '../components/IndicatorsTable.vue';
import VueApexCharts from 'vue3-apexcharts';
import data from "../assets/langs/data.json";

export default {
  components: {
    IndicatorsTable,
    apexchart: VueApexCharts,
  },
  data() {
    return {
      revenueSeries: [
        {
          name: this.$t('kpi.revenue_title'),
          data: Object.values(data.kpi).map(year => year.annual_revenue)
        }
      ],
      revenueOptions: {
        chart: {
          height: 350,
          type: 'line',
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          }
        },
        colors: ['#e67819'],
        xaxis: {
          categories: Object.keys(data.kpi)
        },
        tooltip: {
          y: {
            formatter: (value) => {
              return `${value} €`;
            },
            title: {
              formatter: () => {
                return this.$t('kpi.revenue_title');
              }
            }
          }
        },
        responsive: [
          {
            breakpoint: 1000,
            options: {
              chart: {
                height: 300
              }
            }
          },
          {
            breakpoint: 600,
            options: {
              chart: {
                height: 250
              }
            }
          }
        ]
      },
      grossProfitSeries: [
        {
          name: this.$t('kpi.grossprofit_title'),
          data: Object.values(data.kpi).map(year => year.gross_profit)
        }
      ],
      grossProfitOptions: {
        chart: {
          height: 350,
          type: 'line',
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          }
        },
        colors: ['#e67819'],
        xaxis: {
          categories: Object.keys(data.kpi)
        },
        tooltip: {
          y: {
            formatter: (value) => {
              return `${value} €`;
            },
            title: {
              formatter: () => {
                return this.$t('kpi.grossprofit_title');
              }
            }
          }
        },
        responsive: [
          {
            breakpoint: 1000,
            options: {
              chart: {
                height: 300
              }
            }
          },
          {
            breakpoint: 600,
            options: {
              chart: {
                height: 250
              }
            }
          }
        ]
      },
      netProfitSeries: [
        {
          name: this.$t('kpi.netprofit_title'),
          data: Object.values(data.kpi).map(year => year.net_profit)
        }
      ],
      netProfitOptions: {
        chart: {
          height: 350,
          type: 'line',
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          }
        },
        colors: ['#e67819'],
        xaxis: {
          categories: Object.keys(data.kpi)
        },
        tooltip: {
          y: {
            formatter: (value) => {
              return `${value} €`;
            },
            title: {
              formatter: () => {
                return this.$t('kpi.netprofit_title');
              }
            }
          }
        },
        responsive: [
          {
            breakpoint: 1000,
            options: {
              chart: {
                height: 300
              }
            }
          },
          {
            breakpoint: 600,
            options: {
              chart: {
                height: 250
              }
            }
          }
        ]
      }
    };
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      if (this.$refs.revenueChart && this.$refs.revenueChart.chart) {
        this.$refs.revenueChart.chart.resize();
      }
      if (this.$refs.grossProfitChart && this.$refs.grossProfitChart.chart) {
        this.$refs.grossProfitChart.chart.resize();
      }
      if (this.$refs.netProfitChart && this.$refs.netProfitChart.chart) {
        this.$refs.netProfitChart.chart.resize();
      }
    }
  }
};
</script>

<style scoped>
@import "../assets/css/style.css";
</style>