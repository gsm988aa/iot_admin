<template>
  <div style="width: 2000px;position: absolute">
    <b-card style="position: relative;width: 100%;">

      <b-table
          striped
          hover
          :items="items"
          thead-class="text-center"
          bordered
          style="table-layout: fixed; width: 100%;"
      >
        <template
            #cell(AH201)="row"
            style="justify-content: center"
        >
          <img
              v-if="shiyanwei === 1"
              src="@/assets/images/201/AH201shiyan.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="gongzuowei === 1"
              src="@/assets/images/201/AH201gongzuo.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="duanluhe === 1"
              src="@/assets/images/201/AH201duanluhe.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="duanlufen === 1"
              src="@/assets/images/201/AH201duanlufen.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else
              src="@/assets/images/AH201.svg"
              style="max-width: 100%; max-height: 100%"
          >
        </template>

        <template
            #cell(AH202)="row"
            style="justify-content: center"
        >
          <img
              v-if="shiyanwei === 1"
              src="@/assets/images/202/AH202shiyan.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="gongzuowei === 1"
              src="@/assets/images/202/AH202gongzuo.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="duanluhe === 1"
              src="@/assets/images/202/AH202duanluhe.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="duanlufen === 1"
              src="@/assets/images/202/AH202duanlufen.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="jiedihe === 1"
              src="@/assets/images/202/AH202jiedihe.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="jiedifen === 1"
              src="@/assets/images/202/AH202jiedifen.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else
              src="@/assets/images/AH202.svg"
              style="max-width: 100%; max-height: 100%"
          >
        </template>

        <template
            #cell(AH203)="row"
            style="justify-content: center"
        >
          <img
              v-if="shiyanwei === 1"
              src="@/assets/images/202/AH202shiyan.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="gongzuowei === 1"
              src="@/assets/images/202/AH202gongzuo.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="duanluhe === 1"
              src="@/assets/images/202/AH202duanluhe.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="duanlufen === 1"
              src="@/assets/images/202/AH202duanlufen.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="jiedihe === 1"
              src="@/assets/images/202/AH202jiedihe.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="jiedifen === 1"
              src="@/assets/images/202/AH202jiedifen.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else
              src="@/assets/images/AH202.svg"
              style="max-width: 100%; max-height: 100%"
          >
        </template>

        <template
            #cell(AH204)="row"
            style="justify-content: center"
        >
          <img
              v-if="shiyanwei === 1"
              src="@/assets/images/204/AH204shiyan.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="gongzuowei === 1"
              src="@/assets/images/204/AH204gongzuo.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="duanluhe === 1"
              src="@/assets/images/204/AH204duanluhe.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="duanlufen === 1"
              src="@/assets/images/204/AH204duanlufen.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="jiedihe === 1"
              src="@/assets/images/204/AH204jiedihe.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="jiedifen === 1"
              src="@/assets/images/204/AH204jiedifen.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else
              src="@/assets/images/AH204.svg"
              style="max-width: 100%; max-height: 100%"
          >
        </template>

        <template
            #cell(AH205)="row"
            style="justify-content: center"
        >
          <img
              v-if="shiyanwei === 1"
              src="@/assets/images/204/AH204shiyan.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="gongzuowei === 1"
              src="@/assets/images/204/AH204gongzuo.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="duanluhe === 1"
              src="@/assets/images/204/AH204duanluhe.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="duanlufen === 1"
              src="@/assets/images/204/AH204duanlufen.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="jiedihe === 1"
              src="@/assets/images/204/AH204jiedihe.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="jiedifen === 1"
              src="@/assets/images/204/AH204jiedifen.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else
              src="@/assets/images/AH204.svg"
              style="max-width: 100%; max-height: 100%"
          >
        </template>

        <template
            #cell(AH206)="row"
            style="justify-content: center"
        >
          <img
              v-if="shiyanwei === 1"
              src="@/assets/images/206/AH206shiyan.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="gongzuowei === 1"
              src="@/assets/images/206/AH206gongzuo.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="duanluhe === 1"
              src="@/assets/images/206/AH206duanluhe.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="duanlufen === 1"
              src="@/assets/images/206/AH206duanlufen.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else
              src="@/assets/images/AH206.svg"
              style="max-width: 100%; max-height: 100%"
          >
        </template>

        <template
            #cell(AH200)="row"
            style="justify-content: center"
        >
          <img
              src="@/assets/images/AH200.svg"
              style="max-width: 100%; max-height: 100%"
          >
        </template>

        <template
            #cell(AH207)="row"
            style="justify-content: center"
        >
          <img
              v-if="shiyanwei === 1"
              src="@/assets/images/204/AH204shiyan.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="gongzuowei === 1"
              src="@/assets/images/204/AH204gongzuo.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="duanluhe === 1"
              src="@/assets/images/204/AH204duanluhe.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="duanlufen === 1"
              src="@/assets/images/204/AH204duanlufen.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="jiedihe === 1"
              src="@/assets/images/204/AH204jiedihe.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="jiedifen === 1"
              src="@/assets/images/204/AH204jiedifen.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else
              src="@/assets/images/AH204.svg"
              style="max-width: 100%; max-height: 100%"
          >
        </template>

        <template
            #cell(AH208)="row"
            style="justify-content: center"
        >
          <img
              v-if="shiyanwei === 1"
              src="@/assets/images/204/AH204shiyan.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="gongzuowei === 1"
              src="@/assets/images/204/AH204gongzuo.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="duanluhe === 1"
              src="@/assets/images/204/AH204duanluhe.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="duanlufen === 1"
              src="@/assets/images/204/AH204duanlufen.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="jiedihe === 1"
              src="@/assets/images/204/AH204jiedihe.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="jiedifen === 1"
              src="@/assets/images/204/AH204jiedifen.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else
              src="@/assets/images/AH204.svg"
              style="max-width: 100%; max-height: 100%"
          >
        </template>

        <template
            #cell(AH209)="row"
            style="justify-content: center"
        >
          <img
              v-if="shiyanwei === 1"
              src="@/assets/images/202/AH202shiyan.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="gongzuowei === 1"
              src="@/assets/images/202/AH202gongzuo.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="duanluhe === 1"
              src="@/assets/images/202/AH202duanluhe.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="duanlufen === 1"
              src="@/assets/images/202/AH202duanlufen.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="jiedihe === 1"
              src="@/assets/images/202/AH202jiedihe.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="jiedifen === 1"
              src="@/assets/images/202/AH202jiedifen.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else
              src="@/assets/images/AH202.svg"
              style="max-width: 100%; max-height: 100%"
          >
        </template>

        <template
            #cell(AH210)="row"
            style="justify-content: center"
        >
          <img
              v-if="shiyanwei === 1"
              src="@/assets/images/202/AH202shiyan.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="gongzuowei === 1"
              src="@/assets/images/202/AH202gongzuo.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="duanluhe === 1"
              src="@/assets/images/202/AH202duanluhe.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="duanlufen === 1"
              src="@/assets/images/202/AH202duanlufen.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="jiedihe === 1"
              src="@/assets/images/202/AH202jiedihe.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="jiedifen === 1"
              src="@/assets/images/202/AH202jiedifen.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else
              src="@/assets/images/AH202.svg"
              style="max-width: 100%; max-height: 100%"
          >
        </template>

        <template
            #cell(AH211)="row"
            style="justify-content: center"
        >
          <img
              v-if="shiyanwei === 1"
              src="@/assets/images/201/AH201shiyan.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="gongzuowei === 1"
              src="@/assets/images/201/AH201gongzuo.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="duanluhe === 1"
              src="@/assets/images/201/AH201duanluhe.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else-if="duanlufen === 1"
              src="@/assets/images/201/AH201duanlufen.svg"
              style="max-width: 100%; max-height: 100%"
          >
          <img
              v-else
              src="@/assets/images/AH201.svg"
              style="max-width: 100%; max-height: 100%"
          >
        </template>
      </b-table>

      <div>

        <b-collapse v-model="isCollapsed">
          <b-table
              striped
              hover
              :items="dataitems"
              thead-class="table"
              class="text-sty"
              no-header
              :fields="['unit','AH201', 'AH202', 'AH203', 'AH204', 'AH205', 'AH206','AH200', 'AH207', 'AH208', 'AH209', 'AH210', 'AH211']"
              :thead-class="'d-none'"
              bordered
          />
        </b-collapse>
        <b-button
            variant="primary"
            @click="toggleCollapse"
        >
          {{ isCollapsed ? '收起' : '展开' }}
        </b-button>
      </div>

      <b-card style="margin-left: 40px;width: 100%;background-color: transparent;z-index: 9999">
        <b-card-text style="font-family: 黑体; font-size: 16px;">
          仿真测试:
        </b-card-text>
        <br>

        <div style="flex-direction: row;margin-left: 50px">
          <b-button
              variant="outline-primary"
              @click="toggleshiyanwei"
          >
            更改第一台试验位置
          </b-button>
          <b-button
              variant="outline-secondary"
              style="margin-left: 65px"
              @click="togglegongzuowei"
          >
            更改第二台工作位置
          </b-button>
        </div>
        <br/>

        <div style="flex-direction: row;margin-left: 50px">
          <b-button
              variant="outline-success"
              @click="toggleduanluhe"
          >
            更改第三台断路器合闸
          </b-button>
          <b-button
              variant="outline-danger"
              style="margin-left: 50px"
              @click="toggleduanlufen"
          >
            更改第四台断路器分闸
          </b-button>
        </div>
        <br/>

        <div style="flex-direction: row;margin-left: 50px">
          <b-button
              variant="outline-warning"
              @click="togglejiedifen"
          >
            更改第五台接地刀分闸
          </b-button>
          <b-button
              variant="outline-info"
              style="margin-left: 50px"
              @click="togglejiedihe"
          >
            更改第六台接地刀合闸
          </b-button>
        </div>

      </b-card>

    </b-card>
  </div>
</template>

<script>
import {
  BTable, BCard, BButton, BCollapse, BCardText, BRow, BCol,
} from 'bootstrap-vue'
import ZhuangTaiImages from '@/views/ZhuangTaiImages.vue'

export default {
  components: {
    BTable, BCard, ZhuangTaiImages, BButton, BCollapse, BCardText, BRow, BCol,
  },
  data() {
    return {
      isCollapsed: true,
      shiyanwei: 0,
      gongzuowei: 0,
      jiedifen: 0,
      jiedihe: 0,
      duanluhe: 0,
      duanlufen: 0,
      qianmen: 0,
      houmen: 0,
      dataitems: [
        {
          unit: 'Uab', AH201: 0, AH202: '10.1KV', AH203: '10.1KV', AH204: 0, AH205: '10.1KV', AH206: '10.1KV', AH207: '10.1KV', AH208: '10.1KV', AH209: 0, AH210: '10.1KV', AH211: '10.1KV',
        },
        {
          unit: 'Ubc', AH201: 0, AH202: '10.1KV', AH203: '10.1KV', AH204: 0, AH205: '10.1KV', AH206: '10.1KV', AH207: '10.1KV', AH208: '10.1KV', AH209: 0, AH210: '10.1KV', AH211: '10.1KV',
        },
        {
          unit: 'Uac', AH201: 0, AH202: '10.1KV', AH203: '10.1KV', AH204: 0, AH205: '10.1KV', AH206: '10.1KV', AH207: '10.1KV', AH208: '10.1KV', AH209: 0, AH210: '10.1KV', AH211: '10.1KV',
        },
        {
          unit: 'Ia', AH201: 0.0, AH202: 0.0, AH203: 0.0, AH204: 0.0, AH205: 0.0, AH206: 0.0, AH207: 0.0, AH208: 0.0, AH209: 0.0, AH210: 0.0, AH211: 0.0,
        },
        {
          unit: 'Ib', AH201: 0.6, AH202: 0.6, AH203: 0.6, AH204: 0.6, AH205: 0.6, AH206: 0.6, AH207: 0.0, AH208: 0.0, AH209: 0.0, AH210: 0.0, AH211: 0.0,
        },
        {
          unit: 'Ic', AH201: 0.1, AH202: 0.1, AH203: 0.1, AH204: 0.1, AH205: 0.1, AH206: 0.1, AH207: 0.0, AH208: 0.0, AH209: 0.0, AH210: 0.0, AH211: 0.0,
        },
        {
          unit: 'P功率', AH201: '50.1KW', AH202: '30.1KV', AH203: '40.1KV', AH204: '60.1KW', AH205: '20.1KV', AH206: '50.1KV', AH200: '', AH207: '30.1KV', AH208: '40.1KV', AH209: '60.1KW', AH210: '20.1KV', AH211: '50.1KV',
        },
        {
          unit: 'T1°C', AH201: 22.0, AH202: 22.0, AH203: 22.0, AH204: 22.0, AH205: 22.0, AH206: 22.0, AH207: 22.0, AH208: 22.0, AH209: 22.0, AH210: 22.0, AH211: 22.0,
        },
        {
          unit: 'T2°C', AH201: 10.6, AH202: 10.6, AH203: 10.6, AH204: 10.6, AH205: 10.6, AH206: 10.6, AH207: 10.6, AH208: 10.6, AH209: 10.6, AH210: 10.6, AH211: 10.6,
        },
        {
          unit: '负载率', AH201: '0.0%', AH202: '0.0%', AH203: '0.0%', AH204: '0.0%', AH205: '0.0%', AH206: '0.0%', AH200: '', 图8: '0.0%', AH208: '0.0%', AH209: '0.0%', AH210: '0.0%', AH211: '0.0%',
        },
      ],
      items: [
        {
          参数: '',
          AH201: 'value1_row1',
          AH202: 'value2_row1',
          AH203: 'value3_row1',
          AH204: 'value4_row1',
          AH205: 'value5_row1',
          AH206: 'value6_row1',
          AH200: 'value1_row1',
          AH207: 'value2_row1',
          AH208: 'value3_row1',
          AH209: 'value4_row1',
          AH210: 'value5_row1',
          AH211: 'value6_row1',
        },
      ],
    }
  },
  mounted() {
    // 使用定时器每2秒更新数据
    setInterval(() => {
      this.updateUData()
      this.updateIData()
      this.updateTempData()
    }, 2000)
  },
  methods: {
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed
    },
    toggleshiyanwei() {
      this.shiyanwei = this.shiyanwei === 0 ? 1 : 0
    },
    togglegongzuowei() {
      this.gongzuowei = this.gongzuowei === 0 ? 1 : 0
    },
    toggleduanluhe() {
      this.duanluhe = this.duanluhe === 0 ? 1 : 0
    },
    toggleduanlufen() {
      this.duanlufen = this.duanlufen === 0 ? 1 : 0
    },
    togglejiedihe() {
      this.jiedihe = this.jiedihe === 0 ? 1 : 0
    },
    togglejiedifen() {
      this.jiedifen = this.jiedifen === 0 ? 1 : 0
    },

    updateUData() { // 随机生成电压数据
      // 获取前三行数据
      for (let i = 0; i < 3; i += 1) {
        const row = this.dataitems[i]
        Object.keys(row).forEach(key => {
          if (key !== 'unit') {
            // 生成10到110之间的随机数
            row[key] = `${(Math.random() * (50 - 10 + 1) + 10).toFixed(1)}KV`
          }
        })
      }
    },

    updateIData() { // 随机生成电流数据
      // 获取电流数据
      for (let i = 3; i < 6; i += 1) {
        const row = this.dataitems[i]
        Object.keys(row).forEach(key => {
          if (key !== 'unit') {
            // 生成10到110之间的随机数
            row[key] = `${Math.floor(Math.random() * (15 - 10 + 1) + 2)}A`
          }
        })
      }
    },

    updateTempData() { // 随机生成温度数据
      // 获取电流数据
      for (let i = 7; i < 9; i += 1) {
        const row = this.dataitems[i]
        Object.keys(row).forEach(key => {
          if (key !== 'unit') {
            // 生成10到110之间的随机数
            row[key] = `${Math.floor(Math.random() * (60 - 10 + 1) + 20).toFixed(1)}°C`
          }
        })
      }
    },

  },
}
</script>

<style scoped>
.text-center th {
  text-align: center;
}

.table thead th {
  display: none;
}
.text-sty{
  color: #109f0c;
  font-size: 17px;
  text-align: center;
  width: 100%;
  table-layout: fixed;
}
</style>
