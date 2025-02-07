<!-- filepath: /Users/ivarsplisko/PY_Projects/BB Sale/bbsale/src/components/IndicatorsTable.vue -->
<template>
  <div>
    <table class="indicators-table">
      <tbody v-if="kpi['2023']">
        <tr>
          <td>{{ $t('kpi.annual_revenue') }}</td>
          <td>{{ formatCurrency(kpi['2023'].annual_revenue) }}</td>
        </tr>
        <tr>
          <td>{{ $t('kpi.gross_profit') }}</td>
          <td>{{ formatCurrency(kpi['2023'].gross_profit) }}</td>
        </tr>
        <tr>
          <td>{{ $t('kpi.net_profit') }}</td>
          <td>{{ formatCurrency(kpi['2023'].net_profit) }}</td>
        </tr>
        <tr>
          <td>{{ $t('kpi.total_assets') }}</td>
          <td>{{ formatCurrency(kpi['2023'].total_assets) }}</td>
        </tr>
        <tr>
          <td>{{ $t('kpi.short_term_liabilities') }}</td>
          <td>{{ formatCurrency(kpi['2023'].short_term_liabilities) }}</td>
        </tr>
        <tr>
          <td>{{ $t('kpi.long_term_liabilities') }}</td>
          <td>{{ formatCurrency(kpi['2023'].long_term_liabilities) }}</td>
        </tr>
        <tr>
          <td>{{ $t('kpi.administrative_staff') }}</td>
          <td>{{ kpi['2023'].administrative_staff }}</td>
        </tr>
        <tr>
          <td>{{ $t('kpi.cost_of_sales') }}</td>
          <td>{{ formatCurrency(kpi['2023'].cost_of_sales) }}</td>
        </tr>
        <tr>
          <td>{{ $t('kpi.equity') }}</td>
          <td>{{ formatCurrency(kpi['2023'].equity) }}</td>
        </tr>
        <tr>
          <td>{{ $t('kpi.ebidta') }}</td>
          <td>{{ formatCurrency(kpi['2023'].ebidta) }}</td>
        </tr>
        <tr>
          <td>{{ $t('kpi.ebidta_margin') }}</td>
          <td>{{ formatNumber(kpi['2023'].ebidta_margin) }}</td>
        </tr>
        <tr>
          <td>{{ $t('kpi.dscr') }}</td>
          <td>{{ formatNumber(kpi['2023'].dscr) }}</td>
        </tr>
        <tr>
          <td>{{ $t('kpi.net_liabilities_to_ebidta') }}</td>
          <td>{{ formatNumber(kpi['2023'].net_liabilities_to_ebidta) }}</td>
        </tr>
        <tr>
          <td>{{ $t('kpi.liquidity_ratio') }}</td>
          <td>{{ formatNumber(kpi['2023'].liquidity_ratio) }}</td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan="2">Loading...</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import data from "../assets/langs/data.json";
import { useI18n } from 'vue-i18n';
import { ref, onMounted } from 'vue';

export default {
  name: 'IndicatorsTable',
  setup() {
    const { t } = useI18n();
    const kpi = ref({});

    onMounted(() => {
      console.log('Loading data...');
      kpi.value = data.kpi;
      console.log('Data loaded:', kpi.value);
    });

    const formatCurrency = (value) => {
      if (value === null || value === undefined) return '-';
      const formattedValue = value.toFixed(4).replace(/\.?0+$/, '');
      return `${formattedValue} €`;
    };

    const formatNumber = (value) => {
      if (value === null || value === undefined) return '-';
      return value.toFixed(4).replace(/\.?0+$/, '');
    };

    return {
      t,
      kpi,
      formatCurrency,
      formatNumber
    };
  }
};
</script>