<template>
  <!--   <section id="dashboard-deviceinfos" class = "deviceinfos">
        11111
     </section> -->

  <b-row>
    <b-col cols="9">
      <!--      <b-card-->
      <!--          style="max-width: 50rem;"-->
      <!--          header="开关状态示意图"-->
      <!--          img-src="@/assets/images/kaiguan/kaiguanquanbai.png" img-alt="Card image" img-bottom>-->
      <!--        <b-card-text>-->

      <!--        </b-card-text>-->
      <!--      </b-card>-->
      <b-card
          style="max-width: 60rem;"
          header="开关状态示意图"
          img-src="@/assets/images/kaiguan/kaiguanquankai.png" img-alt="Card image" img-bottom
      >
<!--        <b-card-text>-->

<!--        </b-card-text>-->
      </b-card>
    </b-col>
    <b-col cols="3">
<!--      <b-card-->
<!--          style="max-width: 50rem;"-->
<!--      >-->
<!--        222-->
<!--      </b-card>-->
<!--      <b-card-->
<!--          style="max-width: 50rem;"-->
<!--      >-->
<!--        333-->
<!--      </b-card>-->
      <statistic-card-with-area-chart
          v-if="data.subscribersGained"
          icon="DropletIcon"
          :statistic="kFormatter(data.subscribersGained.analyticsData.humidity)"
          statistic-title="当前湿度(%)"
          :chart-data="data.subscribersGained.series"
      />
      <statistic-card-with-area-chart
          v-if="data.ordersRecevied"
          icon="ThermometerIcon"
          color="warning"
          :statistic="kFormatter(data.ordersRecevied.analyticsData.temperature)"
          statistic-title="当前温度(°C)"
          :chart-data="data.ordersRecevied.series"
      />
      <analytics-sales-radar-chart :data="data.salesChart" />
      <!--      <overlay-basic />
            <overlay-backdrop />
            <overlay-fade />
            <overlay-spinner />
            <overlay-corner-round />
            <overlay-custom-content />
            <overlay-no-wrap-mode />
            <overlay-form />
            <overlay-busy-state /> -->
    </b-col>
  </b-row>
</template>

<script>
import {
  BRow, BCol, BCardGroup, BCard, BCardText,
} from 'bootstrap-vue'
import AnalyticsCongratulation from '@/views/dashboard/analytics/AnalyticsCongratulation'
import AnalyticsAvgSessions from '@/views/dashboard/analytics/AnalyticsAvgSessions'
import StatisticCardWithAreaChart from '@core/components/statistics-cards/StatisticCardWithAreaChart'
import AnalyticsSupportTracker from '@/views/dashboard/analytics/AnalyticsSupportTracker'
import AnalyticsTimeline from '@/views/dashboard/analytics/AnalyticsTimeline'
import AnalyticsSalesRadarChart from '@/views/dashboard/analytics/AnalyticsSalesRadarChart'
import AnalyticsAppDesign from '@/views/dashboard/analytics/AnalyticsAppDesign'
import InvoiceList from '@/views/apps/invoice/invoice-list/InvoiceList'
import { kFormatter } from '@core/utils/filter'

export default {
  components: {
    BRow,
    BCol,
    BCardGroup,
    BCard,
    BCardText,
    AnalyticsCongratulation,
    AnalyticsAvgSessions,
    StatisticCardWithAreaChart,
    AnalyticsSupportTracker,
    AnalyticsTimeline,
    AnalyticsSalesRadarChart,
    AnalyticsAppDesign,
    InvoiceList,
  },
  data() {
    return {
      data: {},
    }
  },
  created() {
    // data
    this.$http.get('/analytics/data')
        .then(response => { this.data = response.data })
  },
  methods: {
    kFormatter,
  },
}
</script>

<style lang="scss" scoped>

@import '~@core/scss/base/bootstrap-extended/include';
@import '~@core/scss/base/components/variables-dark';

.dark-layout {
  div ::v-deep .card .card-body {
    .b-overlay {
      .bg-light {
        background-color: $theme-dark-body-bg !important;
      }
    }
  }
}

.gsm-card {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}


</style>


