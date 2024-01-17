<template>
  <div class="demo-inline-spacing" style="width: 670px">
    <b-card style="position: relative;width: 100%;">
      <div>
        <b-table
          striped
          hover
          :items="items"
          thead-class="text-center"
          bordered
          style="table-layout: fixed; width: 100%;"
        >
          <template
            #cell(图1)="row"
            style="justify-content: center"
          >
<!--            <img src="@/assets/images/222.png" style="scale: 0.2"/>-->
            <ZhuangTaiImages :shiyanwei="shiyanwei" />
          </template>
          <template
            #cell(图2)="row"
            style="justify-content: center"
          >
            <ZhuangTaiImages :gongzuowei="gongzuowei" />
          </template>
          <template
            #cell(图3)="row"
            style="justify-content: center"
          >
            <ZhuangTaiImages :duanluhe="duanluhe" />
          </template>
          <template
            #cell(图4)="row"
            style="justify-content: center"
          >
            <ZhuangTaiImages :duanlufen="duanlufen" />
          </template>
          <template
            #cell(图5)="row"
            style="justify-content: center"
          >
            <ZhuangTaiImages :jiedifen="jiedifen" />
          </template>
          <template
            #cell(图6)="row"
            style="justify-content: center"
          >
            <ZhuangTaiImages :jiedihe="jiedihe" />
          </template>
        </b-table>
        <b-collapse v-model="isCollapsed">
          <b-table
            striped
            hover
            :items="dataitems"
            thead-class="table"
            class="text-sty"
            no-header
            :fields="['unit','图1', '图2', '图3', '图4', '图5', '图6']"
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

      <b-card style="margin-left: 20px;width: 100%;background-color: transparent;z-index: 9999">
        <b-card-text style="font-family: 黑体; font-size: 16px;">
          仿真测试:
        </b-card-text>
        <br>
        <b-row>
          <b-col
            cols="12"
            sm="6"
            md="6"
          >
            <b-button
              variant="outline-primary"
              style="margin-left: 50px;"
              @click="toggleshiyanwei"
            >
              更改第一台试验位置
            </b-button>

          </b-col>
          <b-col
            cols="12"
            sm="6"
            md="6"
          >
            <b-button
              variant="outline-secondary"
              style="margin-left: 40px;"
              @click="togglegongzuowei"
            >
              更改第二台工作位置
            </b-button>
          </b-col>
        </b-row>
        <br>
        <b-row>
          <b-col
            cols="12"
            sm="6"
            md="6"
          >
            <b-button
              variant="outline-success"
              style="margin-left: 50px;"
              @click="toggleduanluhe"
            >
              更改第三台断路器合闸
            </b-button>
          </b-col>
          <b-col
            cols="12"
            sm="6"
            md="6"
          >
            <b-button
              variant="outline-danger"
              style="margin-left: 40px;"
              @click="toggleduanlufen"
            >
              更改第四台断路器分闸
            </b-button>
          </b-col>
        </b-row>
        <br>
        <b-row>
          <b-col
            cols="12"
            sm="6"
            md="6"
          >
            <b-button
              variant="outline-warning"
              style="margin-left: 50px;"
              @click="togglejiedifen"
            >
              更改第五台接地刀分闸
            </b-button>
          </b-col>
          <b-col
            cols="12"
            sm="6"
            md="6"
          >
            <b-button
              variant="outline-info"
              style="margin-left: 40px;"
              @click="togglejiedihe"
            >
              更改第六台接地刀合闸
            </b-button>

          </b-col>
        </b-row>

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
          unit: 'Uab', 图1: 0, 图2: '10.1KV', 图3: '10.1KV', 图4: 0, 图5: '10.1KV', 图6: '10.1KV',
        },
        {
          unit: 'Ubc', 图1: 0, 图2: '10.1KV', 图3: '10.1KV', 图4: 0, 图5: '10.1KV', 图6: '10.1KV',
        },
        {
          unit: 'Uac', 图1: 0, 图2: '10.1KV', 图3: '10.1KV', 图4: 0, 图5: '10.1KV', 图6: '10.1KV',
        },
        {
          unit: 'Ia', 图1: 0.0, 图2: 0.0, 图3: 0.0, 图4: 0.0, 图5: 0.0, 图6: 0.0,
        },
        {
          unit: 'Ib', 图1: 0.6, 图2: 0.6, 图3: 0.6, 图4: 0.6, 图5: 0.6, 图6: 0.6,
        },
        {
          unit: 'Ic', 图1: 0.1, 图2: 0.1, 图3: 0.1, 图4: 0.1, 图5: 0.1, 图6: 0.1,
        },
        {
          unit: 'P功率', 图1: '50.1KW', 图2: '30.1KV', 图3: '40.1KV', 图4: '60.1KW', 图5: '20.1KV', 图6: '50.1KV',
        },
        {
          unit: 'T1°C', 图1: 22.0, 图2: 22.0, 图3: 22.0, 图4: 22.0, 图5: 22.0, 图6: 22.0,
        },
        {
          unit: 'T2°C', 图1: 10.6, 图2: 10.6, 图3: 10.6, 图4: 10.6, 图5: 10.6, 图6: 10.6,
        },
        {
          unit: '负载率', 图1: '0.0%', 图2: '0.0%', 图3: '0.0%', 图4: '0.0%', 图5: '0.0%', 图6: '0.0%',
        },
      ],
      items: [
        {
          参数: '',
          图1: 'value1_row1',
          图2: 'value2_row1',
          图3: 'value3_row1',
          图4: 'value4_row1',
          图5: 'value5_row1',
          图6: 'value6_row1',
        },
      ],
    }
  },
  mounted() {
    // 使用定时器每2秒更新数据
    setInterval(() => {
      this.updateUData()
    }, 2000)
    setInterval(() => {
      this.updateIData()
    }, 2000)
    setInterval(() => {
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
  font-size: 12px;
  text-align: center;
  width: 100%;
  table-layout: fixed;
}

</style>
