<template>
  <b-card
    title="Temperature"
    class="gsm-card"
  >
    <!--  kalman  -->
    <b-row>
      <div>
        <b-button
            :class="visible ? null : 'collapsed'"
          :aria-expanded="visible ? 'true' : 'false'"
          aria-controls="collapse-4"
            @click="visible = !visible"
        >
          卡尔曼曲线图
        </b-button>
        <b-collapse id="collapse-4" v-model="visible" class="mt-2">
          <b-card style="width: 750px;height: 100%;background-color: #c7bbee">
            <b-row>
              <b-col cols="6">
                <app-echart-line10 :option-data="option10" />
              </b-col>
              <b-col cols="6">
                <app-echart-line11 :option-data="option11" />
              </b-col>
            </b-row>

<!--            <b-row>-->
<!--              <b-col cols="6">-->
<!--                <app-echart-line12 :option-data="option12" />-->
<!--              </b-col>-->
<!--              <b-col cols="6">-->
<!--                <app-echart-line13 :option-data="option13" />-->
<!--              </b-col>-->
<!--            </b-row>-->

<!--            <b-row>-->

<!--              <b-col cols="6">-->
<!--                <app-echart-line14 :option-data="option14" />-->
<!--              </b-col>-->
<!--              <b-col cols="6">-->
<!--                <app-echart-line15 :option-data="option15" />-->
<!--              </b-col>-->
<!--            </b-row>-->

<!--            <b-row>-->
<!--              <b-col cols="6">-->
<!--                <app-echart-line16 :option-data="option16" />-->
<!--              </b-col>-->
<!--              <b-col cols="6">-->
<!--                <app-echart-line17 :option-data="option17" />-->
<!--              </b-col>-->
<!--              <b-col cols="6">-->
<!--                <app-echart-line18 :option-data="option18" />-->
<!--              </b-col>-->
<!--            </b-row>-->

          </b-card>
        </b-collapse>
      </div>
    </b-row>

    <div class="d-flex justify-content-between flex-wrap" >
      <div class="mb-1 mb-sm-0">
        <span class="text-muted">微机温度实时监测</span>
      </div>
      <div class="d-flex align-content-center mb-1 mb-sm-0">
        <h1 class="font-weight-bolder ">
          当前温度：
        </h1>
        <div class="pt-25 ml-75">
          <b-badge variant="light-secondary">
            <feather-icon
              icon="ArrowDownIcon"
              size="12"
              class="text-danger align-middle"
            />
            <span class="font-weight-bolder align-middle"> 24%</span>
          </b-badge>
        </div>
      </div>
    </div>

    <!-- echart -->
    <b-row>
      <b-col cols="6">
        <app-echart-line :option-data="option1" />
      </b-col>
      <b-col cols="6">
        <app-echart-line2 :option-data="option2" />
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="6">
        <app-echart-line3 :option-data="option3" />
      </b-col>
      <b-col cols="6">
        <app-echart-line4 :option-data="option4" />
      </b-col>
    </b-row>

    <b-row>

      <b-col cols="6">
        <app-echart-line5 :option-data="option5" />
      </b-col>
      <b-col cols="6">
        <app-echart-line6 :option-data="option6" />
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="6">
        <app-echart-line7 :option-data="option7" />
      </b-col>
      <b-col cols="6">
        <app-echart-line8 :option-data="option8" />
      </b-col>
      <b-col cols="6">
        <app-echart-line9 :option-data="option9" />
      </b-col>
    </b-row>

  </b-card>
</template>

<script>
import {
  BCard, BBadge, BRow, BCol, BFormCheckbox, BFormSelect, BCollapse, BButton,
} from 'bootstrap-vue'
import AppEchartLine from '@core/components/charts/echart/AppEchartLine.vue'
import AppEchartLine2 from '@core/components/charts/echart/AppEchartLine2.vue'
import AppEchartLine3 from '@core/components/charts/echart/AppEchartLine3.vue'
import AppEchartLine4 from '@core/components/charts/echart/AppEchartLine4.vue'
import AppEchartLine5 from '@core/components/charts/echart/AppEchartLine5.vue'
import AppEchartLine6 from '@core/components/charts/echart/AppEchartLine6.vue'
import AppEchartLine7 from '@core/components/charts/echart/AppEchartLine7.vue'
import AppEchartLine8 from '@core/components/charts/echart/AppEchartLine8.vue'
import AppEchartLine9 from '@core/components/charts/echart/AppEchartLine9.vue'
import AppEchartLine10 from '@core/components/charts/echart/AppEchartLine10.vue'
import AppEchartLine11 from '@core/components/charts/echart/AppEchartLine11.vue'
import axios from 'axios'

export default {
  components: {
    BCard,
    BRow,
    BCol,
    BFormCheckbox,
    BFormSelect,
    BCollapse,
    BButton,

    AppEchartLine,
    AppEchartLine2,
    AppEchartLine3,
    AppEchartLine4,
    AppEchartLine5,
    AppEchartLine6,
    AppEchartLine7,
    AppEchartLine8,
    AppEchartLine9,
    AppEchartLine10,
    AppEchartLine11,
    BBadge,
  },
  data() {
    return {
      showModal: false,
      visible: false,

      selectedTemperature: 30,
      temperature_options: [
        { value: 30, text: '30°C' },
        { value: 100, text: '100°C' },
      ],
      isEmailSent: false,
      checkedstatus: false,
      showKalman: false,

      option1: {
        xAxisData: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12', '17/12', '18/12', '19/12', '20/12'],
        series: ['290', '200', '210', '190', '250', '220', '80', '90', '200', '150', '160', '100', '140', '100', '30'],

      },
      option2: {
        xAxisData: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12', '17/12', '18/12', '19/12', '20/12'],
        series: ['290', '200', '210', '190', '250', '220', '80', '90', '200', '150', '160', '100', '140', '100', '30'],

      },
      option3: {
        xAxisData: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12', '17/12', '18/12', '19/12', '20/12'],
        series: ['290', '200', '210', '190', '250', '220', '80', '90', '200', '150', '160', '100', '140', '100', '30'],

      },
      option4: {
        xAxisData: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12', '17/12', '18/12', '19/12', '20/12'],
        series: ['290', '200', '210', '190', '250', '220', '80', '90', '200', '150', '160', '100', '140', '100', '30'],

      },
      option5: {
        xAxisData: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12', '17/12', '18/12', '19/12', '20/12'],
        series: ['290', '200', '210', '190', '250', '220', '80', '90', '200', '150', '160', '100', '140', '100', '30'],

      },
      option6: {
        xAxisData: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12', '17/12', '18/12', '19/12', '20/12'],
        series: ['290', '200', '210', '190', '250', '220', '80', '90', '200', '150', '160', '100', '140', '100', '30'],

      },
      option7: {
        xAxisData: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12', '17/12', '18/12', '19/12', '20/12'],
        series: ['290', '200', '210', '190', '250', '220', '80', '90', '200', '150', '160', '100', '140', '100', '30'],

      },
      option8: {
        xAxisData: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12', '17/12', '18/12', '19/12', '20/12'],
        series: ['290', '200', '210', '190', '250', '220', '80', '90', '200', '150', '160', '100', '140', '100', '30'],

      },
      option9: {
        xAxisData: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12', '17/12', '18/12', '19/12', '20/12'],
        series: ['290', '200', '210', '190', '250', '220', '80', '90', '200', '150', '160', '100', '140', '100', '30'],

      },
      option10: {
        xAxisData: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12', '17/12', '18/12', '19/12', '20/12'],
        series: ['290', '200', '210', '190', '250', '220', '80', '90', '200', '150', '160', '100', '140', '100', '30'],

      },
      option11: {
        xAxisData: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12', '17/12', '18/12', '19/12', '20/12'],
        series: ['290', '200', '210', '190', '250', '220', '80', '90', '200', '150', '160', '100', '140', '100', '30'],

      },
    }
  },
}
</script>

<style scoped>
.gsm-card {
  background: rgba( 255, 255, 255, 0.25 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  max-height: 100%; /* 设置一个适当的最大高度，内容超过该高度时将显示滚动条 */
  overflow-y: auto; /* 显示垂直滚动条，只在需要时显示 */
  background-color: #f1f1ef;
}

.mt-2{
  position: absolute;
  z-index: 1;
}
</style>
