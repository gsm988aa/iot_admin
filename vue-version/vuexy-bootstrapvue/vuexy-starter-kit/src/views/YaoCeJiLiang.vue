<template>
  <div style="width: 100%;position: absolute;flex-direction: column">

    <b-card style="position: relative;width: 100%">
      <b-button
          variant="outline-primary"
          @click="start201yaoce"
      >
        开启AH201遥测
      </b-button>
      &nbsp
      <b-button
          variant="outline-danger"
          @click="stop201yaoce"
      >
        关闭AH201遥测
      </b-button>
      &nbsp
      <b-button
          variant="outline-primary"
          @click="start202yaoce"
      >
        开启AH202遥测
      </b-button>
      &nbsp
      <b-button
          variant="outline-danger"
          @click="stop202yaoce"
      >
        关闭AH202遥测
      </b-button>
      &nbsp
      <b-button
          variant="outline-primary"
          @click="start203yaoce"
      >
        开启AH203遥测
      </b-button>
      &nbsp
      <b-button
          variant="outline-danger"
          @click="stop203yaoce"
      >
        关闭AH203遥测
      </b-button>
      &nbsp
      <br>      <br>
      <b-button
          variant="outline-primary"
          @click="start206yaoce"
      >
        开启AH206遥测
      </b-button>
      &nbsp
      <b-button
          variant="outline-danger"
          @click="stop206yaoce"
      >
        关闭AH206遥测
      </b-button>
      &nbsp

      <b-button
          variant="outline-primary"
          @click="start209yaoce"
      >
        开启AH209遥测
      </b-button>
      &nbsp
      <b-button
          variant="outline-danger"
          @click="stop209yaoce"
      >
        关闭AH209遥测
      </b-button>
      &nbsp

      <b-button
          variant="outline-primary"
          @click="start210yaoce"
      >
        开启AH210遥测
      </b-button>
      &nbsp
      <b-button
          variant="outline-danger"
          @click="stop210yaoce"
      >
        关闭AH210遥测
      </b-button>
      &nbsp

      <b-button
          variant="outline-primary"
          @click="start211yaoce"
      >
        开启AH211遥测
      </b-button>
      &nbsp
      <b-button
          variant="outline-danger"
          @click="stop211yaoce"
      >
        关闭AH211遥测
      </b-button>
      &nbsp

      <br>      <br>
      <b-card-text class="table-font">
        遥测量 实时电量
      </b-card-text>
      <b-table
          striped
          hover
          :items="dataitems"
          thead-class="table"
          class="text-sty"
          :fields="['unit','AH201', 'AH202', 'AH203','AH206','AH209', 'AH210', 'AH211']"
          bordered
      >
        <template #cell(unit)="data">
          <span class="unit-text-color">{{ data.value }}</span>
        </template>

        <template #cell(AH201)="Uabdata">
          <span>{{ Uabdata.value }}</span>
        </template>
      </b-table>
    </b-card>

    <b-card style="position: relative;width: 100%">

      <b-button
          variant="outline-primary"
          @click="start201jiliang"
      >
        开启201计量
      </b-button>
      <!--      空格-->
      &nbsp
      <b-button
          variant="outline-danger"
          @click="stop201jiliang"
      >
        关闭201计量
      </b-button>
      &nbsp

      <b-button
          variant="outline-primary"
          @click="start202jiliang"
      >
        开启202计量
      </b-button>
      <!--      空格-->
      &nbsp
      <b-button
          variant="outline-danger"
          @click="stop202jiliang"
      >
        关闭202计量
      </b-button>
      &nbsp

      <b-button
          variant="outline-primary"
          @click="start203jiliang"
      >
        开启203计量
      </b-button>
      <!--      空格-->
      &nbsp
      <b-button
          variant="outline-danger"
          @click="stop203jiliang"
      >
        关闭203计量
      </b-button>
      &nbsp

      <br>
      <b-button
          variant="outline-primary"
          @click="start206jiliang"
      >
        开启206计量
      </b-button>
      <!--      空格-->
      &nbsp
      <b-button
          variant="outline-danger"
          @click="stop206jiliang"
      >
        关闭206计量
      </b-button>
      &nbsp

      <b-button
          variant="outline-primary"
          @click="start209jiliang"
      >
        开启209计量
      </b-button>
      <!--      空格-->
      &nbsp
      <b-button
          variant="outline-danger"
          @click="stop209jiliang"
      >
        关闭209计量
      </b-button>
      &nbsp

      <b-button
          variant="outline-primary"
          @click="start210jiliang"
      >
        开启210计量
      </b-button>
      <!--      空格-->
      &nbsp
      <b-button
          variant="outline-danger"
          @click="stop210jiliang"
      >
        关闭210计量
      </b-button>
      &nbsp

      <b-button
          variant="outline-primary"
          @click="start211jiliang"
      >
        开启211计量
      </b-button>
      <!--      空格-->
      &nbsp
      <b-button
          variant="outline-danger"
          @click="stop211jiliang"
      >
        关闭211计量
      </b-button>
      &nbsp

      <br>
      <br>
      <b-card-text class="table-font">
        保护计算量 累计电能
      </b-card-text>
      <b-table
          striped
          hover
          :items="jiliangitems"
          thead-class="table"
          class="text-sty"
          :fields="['unit','AH201', 'AH202', 'AH203', 'AH206', 'AH209', 'AH210', 'AH211']"
          bordered
      >
        <template #cell(unit)="data">
          <span class="unit-text-color">{{ data.value }}</span>
        </template>
      </b-table>
    </b-card>

  </div>
</template>

<script>
import {
  BTable, BCard, BCardText, BButton,
} from 'bootstrap-vue'
import axios from 'axios'

export default {
  components: {
    BTable,
    BCard,
    BButton,

    BCardText,
  },
  data() {
    return {
      jiliangitems: [
        {
          unit: 'Ua(v)',
          AH201: '0.0v',
          AH202: '0.0v',
          AH203: '0.0v',
          AH206: '0.0v',
          AH209: '0.0v',
          AH210: '0.0v',
          AH211: '0.0v',
        },
        {
          unit: 'Ub(v)',
          AH201: '0.0v',
          AH202: '0.0v',
          AH203: '0.0v',

          AH206: '0.0v',

          AH209: '0.0v',
          AH210: '0.0v',
          AH211: '0.0v',
        },
        {
          unit: 'Uc(v)',
          AH201: '0.0v',
          AH202: '0.0v',
          AH203: '0.0v',

          AH206: '0.0v',

          AH209: '0.0v',
          AH210: '0.0v',
          AH211: '0.0v',
        },
        {
          unit: 'Ux(v)',
          AH201: '0.0v',
          AH202: '0.0v',
          AH203: '0.0v',

          AH206: '0.0v',

          AH209: '0.0v',
          AH210: '0.0v',
          AH211: '0.0v',
        },
        {
          unit: 'Ia(A)',
          AH201: 0.0,
          AH202: 0.0,
          AH203: 0.0,

          AH206: 0.0,

          AH209: 0.0,
          AH210: 0.0,
          AH211: 0.0,
        },
        {
          unit: 'Ib(A)',
          AH201: 0.0,
          AH202: 0.0,
          AH203: 0.0,

          AH206: 0.0,

          AH209: 0.0,
          AH210: 0.0,
          AH211: 0.0,
        },
        {
          unit: 'Ic(A)',
          AH201: 0.0,
          AH202: 0.0,
          AH203: 0.0,

          AH206: 0.0,

          AH209: 0.0,
          AH210: 0.0,
          AH211: 0.0,
        },
        {
          unit: 'I0c(A)',
          AH201: 0.6,
          AH202: 0.6,
          AH203: 0.6,

          AH206: 0.6,

          AH209: 0.0,
          AH210: 0.0,
          AH211: 0.0,
        },
        {
          unit: 'U2(v)',
          AH201: '0.0v',
          AH202: '0.0v',
          AH203: '0.0v',

          AH206: '0.0v',

          AH209: '0.0v',
          AH210: '0.0v',
          AH211: '0.0v',
        },
        {
          unit: 'Uab(v)',
          AH201: '0.0v',
          AH202: '0.0v',
          AH203: '0.0v',

          AH206: '0.0v',

          AH209: '0.0v',
          AH210: '0.0v',
          AH211: '0.0v',
        },
        {
          unit: 'Ubc(v)',
          AH201: '0.0v',
          AH202: '0.0v',
          AH203: '0.0v',

          AH206: '0.0v',

          AH209: '0.0v',
          AH210: '0.0v',
          AH211: '0.0v',
        },
        {
          unit: 'Uca(v)',
          AH201: '0.0v',
          AH202: '0.0v',
          AH203: '0.0v',

          AH206: '0.0v',

          AH209: '0.0v',
          AH210: '0.0v',
          AH211: '0.0v',
        },
        {
          unit: 'Uab滑差(v)',
          AH201: '0.0v',
          AH202: '0.0v',
          AH203: '0.0v',

          AH206: '0.0v',

          AH209: '0.0v',
          AH210: '0.0v',
          AH211: '0.0v',
        },
        {
          unit: 'Ubc滑差(v)',
          AH201: '0.0v',
          AH202: '0.0v',
          AH203: '0.0v',

          AH206: '0.0v',

          AH209: '0.0v',
          AH210: '0.0v',
          AH211: '0.0v',
        },
        {
          unit: 'Uca滑差(v)',
          AH201: '0.0v',
          AH202: '0.0v',
          AH203: '0.0v',

          AH206: '0.0v',

          AH209: '0.0v',
          AH210: '0.0v',
          AH211: '0.0v',
        },
        {
          unit: '母线F滑差(v)',
          AH201: 0.0,
          AH202: 0.0,
          AH203: 0.0,

          AH206: 0.0,

          AH209: 0.0,
          AH210: 0.0,
          AH211: 0.0,
        },
        {
          unit: '同期频差(v)',
          AH201: 0.0,
          AH202: 0.0,
          AH203: 0.0,

          AH206: 0.0,

          AH209: 0.0,
          AH210: 0.0,
          AH211: 0.0,
        },
        {
          unit: '同期df差(v)',
          AH201: 0.0,
          AH202: 0.0,
          AH203: 0.0,

          AH206: 0.0,

          AH209: 0.0,
          AH210: 0.0,
          AH211: 0.0,
        },
      ],

      dataitems: [
        {
          unit: 'Uab(v)',
          AH201: '0.0v',
          AH202: '0.0v',
          AH203: '0.0v',

          AH206: '0.0v',

          AH209: '0.0v',
          AH210: '0.0v',
          AH211: '0.0v',
        },
        {
          unit: 'Ubc(v)',
          AH201: '0.0v',
          AH202: '0.0v',
          AH203: '0.0v',

          AH206: '0.0v',

          AH209: '0.0v',
          AH210: '0.0v',
          AH211: '0.0v',
        },
        {
          unit: 'Uca(v)',
          AH201: '0.0v',
          AH202: '0.0v',
          AH203: '0.0v',

          AH206: '0.0v',

          AH209: '0.0v',
          AH210: '0.0v',
          AH211: '0.0v',
        },
        {
          unit: 'Ua(v)',
          AH201: '0.0v',
          AH202: '0.0v',
          AH203: '0.0v',

          AH206: '0.0v',

          AH209: '0.0v',
          AH210: '0.0v',
          AH211: '0.0v',
        },
        {
          unit: 'Ub(v)',
          AH201: '0.0v',
          AH202: '0.0v',
          AH203: '0.0v',

          AH206: '0.0v',

          AH209: '0.0v',
          AH210: '0.0v',
          AH211: '0.0v',
        },
        {
          unit: 'Uc(v)',
          AH201: '0.0v',
          AH202: '0.0v',
          AH203: '0.0v',

          AH206: '0.0v',

          AH209: '0.0v',
          AH210: '0.0v',
          AH211: '0.0v',
        },
        {
          unit: 'Ia(A)',
          AH201: 0.0,
          AH202: 0.0,
          AH203: 0.0,

          AH206: 0.0,

          AH209: 0.0,
          AH210: 0.0,
          AH211: 0.0,
        },
        {
          unit: 'Ib(A)',
          AH201: 0.6,
          AH202: 0.6,
          AH203: 0.6,

          AH206: 0.6,

          AH209: 0.0,
          AH210: 0.0,
          AH211: 0.0,
        },
        {
          unit: 'Ic(A)',
          AH201: 0.1,
          AH202: 0.1,
          AH203: 0.1,

          AH206: 0.1,

          AH209: 0.0,
          AH210: 0.0,
          AH211: 0.0,
        },
        {
          unit: 'I0(A)',
          AH201: 0.1,
          AH202: 0.1,
          AH203: 0.1,

          AH206: 0.1,

          AH209: 0.0,
          AH210: 0.0,
          AH211: 0.0,
        },
        {
          unit: 'P功率（W）',
          AH201: '0.0w',
          AH202: '0.0w',
          AH203: '0.0w',

          AH206: '0.0w',

          AH209: '0.0w',
          AH210: '0.0w',
          AH211: '0.0w',
        },
        {
          unit: 'Q（W）',
          AH201: '0.0w',
          AH202: '0.0w',
          AH203: '0.0w',

          AH206: '0.0w',

          AH209: '0.0w',
          AH210: '0.0w',
          AH211: '0.0w',
        },
        {
          unit: 'COSθ',
          AH201: '0.0v',
          AH202: '0.0v',
          AH203: '0.0v',
          AH206: '0.0v',

          AH209: '0.0v',
          AH210: '0.0v',
          AH211: '0.0v',
        },
        {
          unit: 'F',
          AH201: '0.0v',
          AH202: '0.0v',
          AH203: '0.0v',
          AH206: '0.0v',

          AH209: '0.0v',
          AH210: '0.0v',
          AH211: '0.0v',
        },
        {
          unit: 'CL_3U0',
          AH201: '0',
          AH202: '0',
          AH203: '0',
          AH206: '0',
          AH200: '',
          AH209: '0',
          AH210: '0',
          AH211: '0',
        },
        {
          unit: 'CL_I01',
          AH201: '0',
          AH202: '0',
          AH203: '0',
          AH206: '0',
          AH200: '',
          AH209: '0',
          AH210: '0',
          AH211: '0',
        },
        {
          unit: 'CL_I05',
          AH201: '0',
          AH202: '0',
          AH203: '0',
          AH206: '0',
          AH200: '',
          AH209: '0',
          AH210: '0',
          AH211: '0',
        },
        {
          unit: 'CL_Q1',
          AH201: '0',
          AH202: '0',
          AH203: '0',
          AH206: '0',
          AH200: '',
          AH209: '0',
          AH210: '0',
          AH211: '0',
        },
        {
          unit: 'CL_Q5',
          AH201: '0',
          AH202: '0',
          AH203: '0',
          AH206: '0',
          AH200: '',
          AH209: '0',
          AH210: '0',
          AH211: '0',
        },
        {
          unit: 'CL_AI01',
          AH201: '0',
          AH202: '0',
          AH203: '0',
          AH206: '0',
          AH200: '',
          AH209: '0',
          AH210: '0',
          AH211: '0',
        },
        {
          unit: 'CL_AI05',
          AH201: '0',
          AH202: '0',
          AH203: '0',
          AH206: '0',
          AH200: '',
          AH209: '0',
          AH210: '0',
          AH211: '0',
        },
      ],

    }
  },
  mounted() {
    // 使用定时器每2秒更新数据
    // setInterval(() => {
    //   this.updateUData()
    //   this.updateIData()
    //   this.updateTempData()
    // }, 2000)

    // 初始化数据
    this.OneData()
    this.TwoData()
    this.ThreeData()
    this.SixData()
    this.NineData()
    this.TenData()
    this.ElevenData()
    this.oneJiLiangData()
    this.twoJiLiangData()
    this.threeJiLiangData()
    this.sixJiLiangData()
    this.nineJiLiangData()
    this.tenJiLiangData()
    this.elevenJiLiangData()

    // // 定时更新数据
    // setInterval(() => {
    //   this.OneData()
    //   this.TwoData()
    //   this.ThreeData()
    //   this.SixData()
    //   this.NineData()
    //   this.TenData()
    //   this.ElevenData()
    //
    //   this.oneJiLiangData()
    //   this.twoJiLiangData()
    //   this.threeJiLiangData()
    //   this.sixJiLiangData()
    //   this.nineJiLiangData()
    //   this.tenJiLiangData()
    //   this.elevenJiLiangData()
    // }, 5000)
  },
  methods: {
    start201yaoce() {
      console.log('201遥测开始数据更新')
      // 开启数据更新逻辑
      this.timer = setInterval(() => {
        this.OneData()
      }, 4000)
    },
    start202yaoce() {
      console.log('202遥测开始数据更新')
      // 开启数据更新逻辑
      this.timer2 = setInterval(() => {
        this.TwoData()
      }, 4000)
    },
    start203yaoce() {
      console.log('203遥测开始数据更新')
      // 开启数据更新逻辑
      this.timer3 = setInterval(() => {
        this.ThreeData()
      }, 4000)
    },
    start206yaoce() {
      console.log('206遥测开始数据更新')
      // 开启数据更新逻辑
      this.timer6 = setInterval(() => {
        this.SixData()
      }, 4000)
    },
    start209yaoce() {
      console.log('209遥测开始数据更新')
      // 开启数据更新逻辑
      this.timer9 = setInterval(() => {
        this.NineData()
      }, 4000)
    },
    start210yaoce() {
      console.log('210遥测开始数据更新')
      // 开启数据更新逻辑
      this.timer10 = setInterval(() => {
        this.TenData()
      }, 4000)
    },
    start211yaoce() {
      console.log('211遥测开始数据更新')
      // 开启数据更新逻辑
      this.timer11 = setInterval(() => {
        this.ElevenData()
      }, 4000)
    },

    stop201yaoce() {
      console.log('201遥测停止数据更新')
      // 停止数据更新逻辑
      clearInterval(this.timer)
    },
    stop202yaoce() {
      console.log('202遥测停止数据更新')
      // 停止数据更新逻辑
      clearInterval(this.timer2)
    },
    stop203yaoce() {
      console.log('203遥测停止数据更新')
      // 停止数据更新逻辑
      clearInterval(this.timer3)
    },
    stop206yaoce() {
      console.log('206遥测停止数据更新')
      // 停止数据更新逻辑
      clearInterval(this.timer6)
    },
    stop209yaoce() {
      console.log('209遥测停止数据更新')
      // 停止数据更新逻辑
      clearInterval(this.timer9)
    },
    stop210yaoce() {
      console.log('210遥测停止数据更新')
      // 停止数据更新逻辑
      clearInterval(this.timer10)
    },
    stop211yaoce() {
      console.log('211遥测停止数据更新')
      // 停止数据更新逻辑
      clearInterval(this.timer11)
    },




    start201jiliang() {
      console.log('201计量开始数据更新')
      // 开启数据更新逻辑
      this.timer = setInterval(() => {
        this.OneData()
      }, 4000)
    },
    start202jiliang() {
      console.log('202计量开始数据更新')
      // 开启数据更新逻辑
      this.timer2 = setInterval(() => {
        this.TwoData()
      }, 4000)
    },
    start203jiliang() {
      console.log('203计量开始数据更新')
      // 开启数据更新逻辑
      this.timer3 = setInterval(() => {
        this.ThreeData()
      }, 4000)
    },
    start206jiliang() {
      console.log('206计量开始数据更新')
      // 开启数据更新逻辑
      this.timer6 = setInterval(() => {
        this.SixData()
      }, 4000)
    },
    start209jiliang() {
      console.log('209计量开始数据更新')
      // 开启数据更新逻辑
      this.timer9 = setInterval(() => {
        this.NineData()
      }, 4000)
    },
    start210jiliang() {
      console.log('210计量开始数据更新')
      // 开启数据更新逻辑
      this.timer10 = setInterval(() => {
        this.TenData()
      }, 4000)
    },
    start211jiliang() {
      console.log('211计量开始数据更新')
      // 开启数据更新逻辑
      this.timer11 = setInterval(() => {
        this.ElevenData()
      }, 4000)
    },

    stop201jiliang() {
      console.log('201计量停止数据更新')
      // 停止数据更新逻辑
      clearInterval(this.timer)
    },
    stop202jiliang() {
      console.log('202计量停止数据更新')
      // 停止数据更新逻辑
      clearInterval(this.timer2)
    },
    stop203jiliang() {
      console.log('203计量停止数据更新')
      // 停止数据更新逻辑
      clearInterval(this.timer3)
    },
    stop206jiliang() {
      console.log('206计量停止数据更新')
      // 停止数据更新逻辑
      clearInterval(this.timer6)
    },
    stop209jiliang() {
      console.log('209计量停止数据更新')
      // 停止数据更新逻辑
      clearInterval(this.timer9)
    },
    stop210jiliang() {
      console.log('210计量停止数据更新')
      // 停止数据更新逻辑
      clearInterval(this.timer10)
    },
    stop211jiliang() {
      console.log('211计量停止数据更新')
      // 停止数据更新逻辑
      clearInterval(this.timer11)
    },


    OneData() {
      axios.get('http://192.168.2.51:3000/tongpai')
          .then(response => {
            const { data } = response
            console.log(data)

            const index = 0
            this.dataitems[index].AH201 = data.Uab
            this.dataitems[index + 1].AH201 = data.Ubc
            this.dataitems[index + 2].AH201 = data.Uca
            this.dataitems[index + 3].AH201 = data.Ua
            this.dataitems[index + 4].AH201 = data.Ub
            this.dataitems[index + 5].AH201 = data.Uc
            this.dataitems[index + 6].AH201 = data.Ia
            this.dataitems[index + 7].AH201 = data.Ib
            this.dataitems[index + 8].AH201 = data.Ic
            this.dataitems[index + 9].AH201 = data.I0
            this.dataitems[index + 10].AH201 = data.P
            this.dataitems[index + 11].AH201 = data.Q
            this.dataitems[index + 12].AH201 = data.cos_phi
            this.dataitems[index + 13].AH201 = data.F
            this.dataitems[index + 14].AH201 = data.CL_3U0
            this.dataitems[index + 15].AH201 = data.CL_I01
            this.dataitems[index + 16].AH201 = data.CL_I05
            this.dataitems[index + 17].AH201 = data.CL_Q1
            this.dataitems[index + 18].AH201 = data.CL_Q5
            this.dataitems[index + 19].AH201 = data.CL_AI01
            this.dataitems[index + 20].AH201 = data.CL_AI05
          })
          .catch(error => {
            console.error('Error fetching data:', error)
          })
    },

    TwoData() {
      axios.get('http://192.168.6.102/yaoce')
          .then(response => {
            const { data } = response
            console.log(data)

            const index = 0
            this.dataitems[index].AH202 = data.Uab
            this.dataitems[index + 1].AH202 = data.Ubc
            this.dataitems[index + 2].AH202 = data.Uca
            this.dataitems[index + 3].AH202 = data.Ua
            this.dataitems[index + 4].AH202 = data.Ub
            this.dataitems[index + 5].AH202 = data.Uc
            this.dataitems[index + 6].AH202 = data.Ia
            this.dataitems[index + 7].AH202 = data.Ib
            this.dataitems[index + 8].AH202 = data.Ic
            this.dataitems[index + 9].AH202 = data.I0
            this.dataitems[index + 10].AH202 = data.P
            this.dataitems[index + 11].AH202 = data.Q
            this.dataitems[index + 12].AH202 = data.cos_phi
            this.dataitems[index + 13].AH202 = data.F
            this.dataitems[index + 14].AH202 = data.CL_3U0
            this.dataitems[index + 15].AH202 = data.CL_I01
            this.dataitems[index + 16].AH202 = data.CL_I05
            this.dataitems[index + 17].AH202 = data.CL_Q1
            this.dataitems[index + 18].AH202 = data.CL_Q5
            this.dataitems[index + 19].AH202 = data.CL_AI01
            this.dataitems[index + 20].AH202 = data.CL_AI05
          })
          .catch(error => {
            console.error('Error fetching data:', error)
          })
    },

    ThreeData() {
      axios.get('http://192.168.6.103/yaoce')
          .then(response => {
            const { data } = response
            console.log(data)

            const index = 0
            this.dataitems[index].AH203 = data.Uab
            this.dataitems[index + 1].AH203 = data.Ubc
            this.dataitems[index + 2].AH203 = data.Uca
            this.dataitems[index + 3].AH203 = data.Ua
            this.dataitems[index + 4].AH203 = data.Ub
            this.dataitems[index + 5].AH203 = data.Uc
            this.dataitems[index + 6].AH203 = data.Ia
            this.dataitems[index + 7].AH203 = data.Ib
            this.dataitems[index + 8].AH203 = data.Ic
            this.dataitems[index + 9].AH203 = data.I0
            this.dataitems[index + 10].AH203 = data.P
            this.dataitems[index + 11].AH203 = data.Q
            this.dataitems[index + 12].AH203 = data.cos_phi
            this.dataitems[index + 13].AH203 = data.F
            this.dataitems[index + 14].AH203 = data.CL_3U0
            this.dataitems[index + 15].AH203 = data.CL_I01
            this.dataitems[index + 16].AH203 = data.CL_I05
            this.dataitems[index + 17].AH203 = data.CL_Q1
            this.dataitems[index + 18].AH203 = data.CL_Q5
            this.dataitems[index + 19].AH203 = data.CL_AI01
            this.dataitems[index + 20].AH203 = data.CL_AI05
          })
          .catch(error => {
            console.error('Error fetching data:', error)
          })
    },

    SixData() {
      axios.get('http://192.168.6.106/yaoce')
          .then(response => {
            const { data } = response
            console.log(data)

            const index = 0
            this.dataitems[index].AH206 = data.Uab
            this.dataitems[index + 1].AH206 = data.Ubc
            this.dataitems[index + 2].AH206 = data.Uca
            this.dataitems[index + 3].AH206 = data.Ua
            this.dataitems[index + 4].AH206 = data.Ub
            this.dataitems[index + 5].AH206 = data.Uc
            this.dataitems[index + 6].AH206 = data.Ia
            this.dataitems[index + 7].AH206 = data.Ib
            this.dataitems[index + 8].AH206 = data.Ic
            this.dataitems[index + 9].AH206 = data.I0
            this.dataitems[index + 10].AH206 = data.P
            this.dataitems[index + 11].AH206 = data.Q
            this.dataitems[index + 12].AH206 = data.cos_phi
            this.dataitems[index + 13].AH206 = data.F
            this.dataitems[index + 14].AH206 = data.CL_3U0
            this.dataitems[index + 15].AH206 = data.CL_I01
            this.dataitems[index + 16].AH206 = data.CL_I05
            this.dataitems[index + 17].AH206 = data.CL_Q1
            this.dataitems[index + 18].AH206 = data.CL_Q5
            this.dataitems[index + 19].AH206 = data.CL_AI01
            this.dataitems[index + 20].AH206 = data.CL_AI05
          })
          .catch(error => {
            console.error('Error fetching data:', error)
          })
    },


    NineData() {
      axios.get('http://192.168.6.109/yaoce')
          .then(response => {
            const { data } = response
            console.log(data)

            const index = 0
            this.dataitems[index].AH209 = data.Uab
            this.dataitems[index + 1].AH209 = data.Ubc
            this.dataitems[index + 2].AH209 = data.Uca
            this.dataitems[index + 3].AH209 = data.Ua
            this.dataitems[index + 4].AH209 = data.Ub
            this.dataitems[index + 5].AH209 = data.Uc
            this.dataitems[index + 6].AH209 = data.Ia
            this.dataitems[index + 7].AH209 = data.Ib
            this.dataitems[index + 8].AH209 = data.Ic
            this.dataitems[index + 9].AH209 = data.I0
            this.dataitems[index + 10].AH209 = data.P
            this.dataitems[index + 11].AH209 = data.Q
            this.dataitems[index + 12].AH209 = data.cos_phi
            this.dataitems[index + 13].AH209 = data.F
            this.dataitems[index + 14].AH209 = data.CL_3U0
            this.dataitems[index + 15].AH209 = data.CL_I01
            this.dataitems[index + 16].AH209 = data.CL_I05
            this.dataitems[index + 17].AH209 = data.CL_Q1
            this.dataitems[index + 18].AH209 = data.CL_Q5
            this.dataitems[index + 19].AH209 = data.CL_AI01
            this.dataitems[index + 20].AH209 = data.CL_AI05
          })
          .catch(error => {
            console.error('Error fetching data:', error)
          })
    },

    TenData() {
      axios.get('http://192.168.6.110/yaoce')
          .then(response => {
            const { data } = response
            console.log(data)

            const index = 0
            this.dataitems[index].AH210 = data.Uab
            this.dataitems[index + 1].AH210 = data.Ubc
            this.dataitems[index + 2].AH210 = data.Uca
            this.dataitems[index + 3].AH210 = data.Ua
            this.dataitems[index + 4].AH210 = data.Ub
            this.dataitems[index + 5].AH210 = data.Uc
            this.dataitems[index + 6].AH210 = data.Ia
            this.dataitems[index + 7].AH210 = data.Ib
            this.dataitems[index + 8].AH210 = data.Ic
            this.dataitems[index + 9].AH210 = data.I0
            this.dataitems[index + 10].AH210 = data.P
            this.dataitems[index + 11].AH210 = data.Q
            this.dataitems[index + 12].AH210 = data.cos_phi
            this.dataitems[index + 13].AH210 = data.F
            this.dataitems[index + 14].AH210 = data.CL_3U0
            this.dataitems[index + 15].AH210 = data.CL_I01
            this.dataitems[index + 16].AH210 = data.CL_I05
            this.dataitems[index + 17].AH210 = data.CL_Q1
            this.dataitems[index + 18].AH210 = data.CL_Q5
            this.dataitems[index + 19].AH210 = data.CL_AI01
            this.dataitems[index + 20].AH210 = data.CL_AI05
          })
          .catch(error => {
            console.error('Error fetching data:', error)
          })
    },

    ElevenData() {
      axios.get('http://192.168.6.111/yaoce')
          .then(response => {
            const { data } = response
            console.log(data)

            const index = 0
            this.dataitems[index].AH211 = data.Uab
            this.dataitems[index + 1].AH211 = data.Ubc
            this.dataitems[index + 2].AH211 = data.Uca
            this.dataitems[index + 3].AH211 = data.Ua
            this.dataitems[index + 4].AH211 = data.Ub
            this.dataitems[index + 5].AH211 = data.Uc
            this.dataitems[index + 6].AH211 = data.Ia
            this.dataitems[index + 7].AH211 = data.Ib
            this.dataitems[index + 8].AH211 = data.Ic
            this.dataitems[index + 9].AH211 = data.I0
            this.dataitems[index + 10].AH211 = data.P
            this.dataitems[index + 11].AH211 = data.Q
            this.dataitems[index + 12].AH211 = data.cos_phi
            this.dataitems[index + 13].AH211 = data.F
            this.dataitems[index + 14].AH211 = data.CL_3U0
            this.dataitems[index + 15].AH211 = data.CL_I01
            this.dataitems[index + 16].AH211 = data.CL_I05
            this.dataitems[index + 17].AH211 = data.CL_Q1
            this.dataitems[index + 18].AH211 = data.CL_Q5
            this.dataitems[index + 19].AH211 = data.CL_AI01
            this.dataitems[index + 20].AH211 = data.CL_AI05
          })
          .catch(error => {
            console.error('Error fetching data:', error)
          })
    },

    oneJiLiangData() {
      axios.get('http://192.168.6.101/jiliang')
          .then(response => {
            const { data } = response
            console.log(data)

            const index = 0
            this.jiliangitems[index].AH201 = data.Ua
            this.jiliangitems[index + 1].AH201 = data.Ub
            this.jiliangitems[index + 2].AH201 = data.Uc
            this.jiliangitems[index + 3].AH201 = data.Ux
            this.jiliangitems[index + 4].AH201 = data.Ia
            this.jiliangitems[index + 5].AH201 = data.Ib
            this.jiliangitems[index + 6].AH201 = data.Ic
            this.jiliangitems[index + 7].AH201 = data.I0c
            this.jiliangitems[index + 8].AH201 = data.U2
            this.jiliangitems[index + 9].AH201 = data.Uab
            this.jiliangitems[index + 10].AH201 = data.Ubc
            this.jiliangitems[index + 11].AH201 = data.Uca
            this.jiliangitems[index + 12].AH201 = data.Uab_hua
            this.jiliangitems[index + 13].AH201 = data.Ubc_hua
            this.jiliangitems[index + 14].AH201 = data.Uca_hua
          })
          .catch(error => {
            console.error('Error fetching data:', error)
          })
    },
    twoJiLiangData() {
      axios.get('http://192.168.6.102/jiliang')
          .then(response => {
            const { data } = response
            console.log(data)

            const index = 0
            this.jiliangitems[index].AH202 = data.Ua
            this.jiliangitems[index + 1].AH202 = data.Ub
            this.jiliangitems[index + 2].AH202 = data.Uc
            this.jiliangitems[index + 3].AH202 = data.Ux
            this.jiliangitems[index + 4].AH202 = data.Ia
            this.jiliangitems[index + 5].AH202 = data.Ib
            this.jiliangitems[index + 6].AH202 = data.Ic
            this.jiliangitems[index + 7].AH202 = data.I0c
            this.jiliangitems[index + 8].AH202 = data.U2
            this.jiliangitems[index + 9].AH202 = data.Uab
            this.jiliangitems[index + 10].AH202 = data.Ubc
            this.jiliangitems[index + 11].AH202 = data.Uca
            this.jiliangitems[index + 12].AH202 = data.Uab_hua
            this.jiliangitems[index + 13].AH202 = data.Ubc_hua
            this.jiliangitems[index + 14].AH202 = data.Uca_hua
          })
          .catch(error => {
            console.error('Error fetching data:', error)
          })
    },
    threeJiLiangData() {
      axios.get('http://192.168.6.103/jiliang')
          .then(response => {
            const { data } = response
            console.log(data)

            const index = 0
            this.jiliangitems[index].AH203 = data.Ua
            this.jiliangitems[index + 1].AH203 = data.Ub
            this.jiliangitems[index + 2].AH203 = data.Uc
            this.jiliangitems[index + 3].AH203 = data.Ux
            this.jiliangitems[index + 4].AH203 = data.Ia
            this.jiliangitems[index + 5].AH203 = data.Ib
            this.jiliangitems[index + 6].AH203 = data.Ic
            this.jiliangitems[index + 7].AH203 = data.I0c
            this.jiliangitems[index + 8].AH203 = data.U2
            this.jiliangitems[index + 9].AH203 = data.Uab
            this.jiliangitems[index + 10].AH203 = data.Ubc
            this.jiliangitems[index + 11].AH203 = data.Uca
            this.jiliangitems[index + 12].AH203 = data.Uab_hua
            this.jiliangitems[index + 13].AH203 = data.Ubc_hua
            this.jiliangitems[index + 14].AH203 = data.Uca_hua
          })
          .catch(error => {
            console.error('Error fetching data:', error)
          })
    },
    sixJiLiangData() {
      axios.get('http://192.168.6.106/jiliang')
          .then(response => {
            const { data } = response
            console.log(data)

            const index = 0
            this.jiliangitems[index].AH206 = data.Ua
            this.jiliangitems[index + 1].AH206 = data.Ub
            this.jiliangitems[index + 2].AH206 = data.Uc
            this.jiliangitems[index + 3].AH206 = data.Ux
            this.jiliangitems[index + 4].AH206 = data.Ia
            this.jiliangitems[index + 5].AH206 = data.Ib
            this.jiliangitems[index + 6].AH206 = data.Ic
            this.jiliangitems[index + 7].AH206 = data.I0c
            this.jiliangitems[index + 8].AH206 = data.U2
            this.jiliangitems[index + 9].AH206 = data.Uab
            this.jiliangitems[index + 10].AH206 = data.Ubc
            this.jiliangitems[index + 11].AH206 = data.Uca
            this.jiliangitems[index + 12].AH206 = data.Uab_hua
            this.jiliangitems[index + 13].AH206 = data.Ubc_hua
            this.jiliangitems[index + 14].AH206 = data.Uca_hua
          })
          .catch(error => {
            console.error('Error fetching data:', error)
          })
    },
    nineJiLiangData() {
      axios.get('http://192.168.6.109/jiliang')
          .then(response => {
            const { data } = response
            console.log(data)

            const index = 0
            this.jiliangitems[index].AH209 = data.Ua
            this.jiliangitems[index + 1].AH209 = data.Ub
            this.jiliangitems[index + 2].AH209 = data.Uc
            this.jiliangitems[index + 3].AH209 = data.Ux
            this.jiliangitems[index + 4].AH209 = data.Ia
            this.jiliangitems[index + 5].AH209 = data.Ib
            this.jiliangitems[index + 6].AH209 = data.Ic
            this.jiliangitems[index + 7].AH209 = data.I0c
            this.jiliangitems[index + 8].AH209 = data.U2
            this.jiliangitems[index + 9].AH209 = data.Uab
            this.jiliangitems[index + 10].AH209 = data.Ubc
            this.jiliangitems[index + 11].AH209 = data.Uca
            this.jiliangitems[index + 12].AH209 = data.Uab_hua
            this.jiliangitems[index + 13].AH209 = data.Ubc_hua
            this.jiliangitems[index + 14].AH209 = data.Uca_hua
          })
          .catch(error => {
            console.error('Error fetching data:', error)
          })
    },
    tenJiLiangData() {
      axios.get('http://192.168.6.110/jiliang')
          .then(response => {
            const { data } = response
            console.log(data)

            const index = 0
            this.jiliangitems[index].AH210 = data.Ua
            this.jiliangitems[index + 1].AH210 = data.Ub
            this.jiliangitems[index + 2].AH210 = data.Uc
            this.jiliangitems[index + 3].AH210 = data.Ux
            this.jiliangitems[index + 4].AH210 = data.Ia
            this.jiliangitems[index + 5].AH210 = data.Ib
            this.jiliangitems[index + 6].AH210 = data.Ic
            this.jiliangitems[index + 7].AH210 = data.I0c
            this.jiliangitems[index + 8].AH210 = data.U2
            this.jiliangitems[index + 9].AH210 = data.Uab
            this.jiliangitems[index + 10].AH210 = data.Ubc
            this.jiliangitems[index + 11].AH210 = data.Uca
            this.jiliangitems[index + 12].AH210 = data.Uab_hua
            this.jiliangitems[index + 13].AH210 = data.Ubc_hua
            this.jiliangitems[index + 14].AH210 = data.Uca_hua
          })
          .catch(error => {
            console.error('Error fetching data:', error)
          })
    },
    elevenJiLiangData() {
      axios.get('http://192.168.6.111/jiliang')
          .then(response => {
            const { data } = response
            console.log(data)

            const index = 0
            this.jiliangitems[index].AH211 = data.Ua
            this.jiliangitems[index + 1].AH211 = data.Ub
            this.jiliangitems[index + 2].AH211 = data.Uc
            this.jiliangitems[index + 3].AH211 = data.Ux
            this.jiliangitems[index + 4].AH211 = data.Ia
            this.jiliangitems[index + 5].AH211 = data.Ib
            this.jiliangitems[index + 6].AH211 = data.Ic
            this.jiliangitems[index + 7].AH211 = data.I0c
            this.jiliangitems[index + 8].AH211 = data.U2
            this.jiliangitems[index + 9].AH211 = data.Uab
            this.jiliangitems[index + 10].AH211 = data.Ubc
            this.jiliangitems[index + 11].AH211 = data.Uca
            this.jiliangitems[index + 12].AH211 = data.Uab_hua
            this.jiliangitems[index + 13].AH211 = data.Ubc_hua
            this.jiliangitems[index + 14].AH211 = data.Uca_hua
          })
          .catch(error => {
            console.error('Error fetching data:', error)
          })
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
.unit-text-color {
  color: #0d1e0d;
  font-size: 17px;
  text-align: center;
  width: 100%;
  font-weight: bold;
  table-layout: fixed;
}
.table-font{
  font-size: 30px;
  font-family: 华文中宋;
  color: #0c1d2f;
}
</style>
