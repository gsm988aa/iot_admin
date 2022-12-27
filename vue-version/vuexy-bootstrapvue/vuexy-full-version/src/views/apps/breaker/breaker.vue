<template>

  <!--   <section id="dashboard-deviceinfos" class = "deviceinfos">
        11111
     </section> -->

  <b-row>
      <h3>六点测温</h3>
    <br>
    <!--      <b-card-->
    <!--          style="max-width: 50rem;"-->
    <!--          header="开关状态示意图"-->
    <!--          img-src="@/assets/images/kaiguan/kaiguanquanbai.png" img-alt="Card image" img-bottom>-->
    <!--        <b-card-text>-->

    <!--        </b-card-text>-->
    <!--      </b-card>-->

    <b-col cols="3">

      <statistic-card-with-area-chart
          v-if="data.subscribersGained"
          icon="ThermometerIcon"
          :statistic="kFormatter(data.temperatureA.analyticsData.temperatureA)"
          statistic-title="触头A相温度(°C)"
          :chart-data="data.temperatureA.series"
      />

      <statistic-card-with-area-chart
          v-if="data.ordersRecevied"
          icon="ThermometerIcon"
          color="warning"
          :statistic="kFormatter(data.temperatureB.analyticsData.temperatureB)"
          statistic-title="触头B相温度(°C)"
          :chart-data="data.temperatureB.series"
      />
      <statistic-card-with-area-chart
          v-if="data.ordersRecevied"
          icon="ThermometerIcon"
          color="info"
          :statistic="kFormatter(data.temperatureC.analyticsData.temperatureC)"
          statistic-title="触头C相温度(°C)"
          :chart-data="data.temperatureC.series"
      />
      </b-col>

      <b-col cols="3">
        <statistic-card-with-area-chart
            v-if="data.subscribersGained"
            icon="ThermometerIcon"
            color="secondary"
            :statistic="kFormatter(data.temperatureB.analyticsData.temperatureB)"
            statistic-title="母排A相温度(°C)"
            :chart-data="data.temperatureB.series"
        />

        <statistic-card-with-area-chart
            v-if="data.ordersRecevied"
            icon="ThermometerIcon"
            color="dark"
            :statistic="kFormatter(data.temperatureA.analyticsData.temperatureA)"
            statistic-title="母排B相温度(°C)"
            :chart-data="data.temperatureA.series"
        />
        <statistic-card-with-area-chart
            v-if="data.ordersRecevied"
            icon="ThermometerIcon"
            color="danger"
            :statistic="kFormatter(data.temperatureC.analyticsData.temperatureC)"
            statistic-title="母排C相温度(°C)"
            :chart-data="data.temperatureC.series"
        />
      </b-col>

    <b-col cols="3">
      <h3>断路器开距,超程：</h3>
      <br>
      <h5>需要测距传感器</h5>
      <br>
      <statistic-card-with-area-chart
          v-if="data.ordersRecevied"
          icon="ShuffleIcon"

          :statistic="kFormatter(data.kaiju.analyticsData.kaiju)"
          statistic-title="开距(mm)"
          :chart-data="data.kaiju.series"
      />
      <statistic-card-with-area-chart
          v-if="data.ordersRecevied"
          icon="ShuffleIcon"

          :statistic="kFormatter(data.chaocheng.analyticsData.chaocheng)"
          statistic-title="超程(mm)"
          :chart-data="data.chaocheng.series"
      />

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

    StatisticCardWithAreaChart,

  },
  data() {
    return {
      data: {},
    }
  },
  created() {
    // data
    this.$http.get('/analytics/data')
        .then(response => {
          this.data = response.data
        })
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


