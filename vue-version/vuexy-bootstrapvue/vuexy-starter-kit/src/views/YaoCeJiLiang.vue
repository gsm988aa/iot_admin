<template>
  <div style="width: 100%;position: absolute;flex-direction: column">

    <b-card style="position: relative;width: 100%">

      <b-card-text class="table-font">
        遥测量码表
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

      <b-card-text class="table-font">
        保护计算量码表
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
  BTable, BCard, BCardText,
} from 'bootstrap-vue'
import axios from 'axios'

export default {
  components: {
    BTable,
    BCard,

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

    // 定时更新数据
    setInterval(() => {
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
    }, 5000)
  },
  methods: {

    updateUData() { // 随机生成电压数据
      // 获取前三行数据
      for (let i = 0; i < 6; i += 1) {
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
      for (let i = 6; i < 10; i += 1) {
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
      for (let i = 10; i < 12; i += 1) {
        const row = this.dataitems[i]
        Object.keys(row).forEach(key => {
          if (key !== 'unit') {
            // 生成10到110之间的随机数
            row[key] = `${(Math.random() * (100 - 20 + 1) + 40).toFixed(1)}KV`
          }
        })
      }
    },

    hexToFloat(hex) {
      // 将十六进制字符串转换为32位有符号整数
      const num = parseInt(hex, 16)
      // 将整数转换为IEEE754浮点数
      const view = new DataView(new ArrayBuffer(4))
      view.setUint32(0, num, true) // false表示小端字节序
      return view.getFloat32(0)
    },

    OneData() {
      axios.get('http://192.168.6.121/yaoce')
        .then(response => {
          const hexData = response.data.yaoce
          // 从第7个字符开始，每8个字符为一组
          const hexDataWithoutSpaces = hexData.replace(/\s+/g, '') // 去掉空格
          const slicedData = hexDataWithoutSpaces.slice(6)
          const hexValues = slicedData.match(/.{1,8}/g)

          // 打印到控制台并更新数据项数组中的AH201列
          hexValues.forEach((value, index) => {
            const floatValue = this.hexToFloat(value) // 转换为浮点数
            const formattedValue = floatValue.toFixed(2) // 格式化为小数点后两位的字符串
            console.log(formattedValue) // 打印到控制台
            // 更新数据项数组中的AH201列
            this.dataitems[index].AH201 = formattedValue
          })
        })
        .catch(error => {
          console.error('Error fetching data:', error)
        })
    },

    TwoData() {
      axios.get('http://192.168.6.122/yaoce')
        .then(response => {
          const hexData = response.data.yaoce
          // 从第7个字符开始，每8个字符为一组
          const hexDataWithoutSpaces = hexData.replace(/\s+/g, '') // 去掉空格
          const slicedData = hexDataWithoutSpaces.slice(6)
          const hexValues = slicedData.match(/.{1,8}/g)

          // 打印到控制台并更新数据项数组中的AH202列
          hexValues.forEach((value, index) => {
            const floatValue = this.hexToFloat(value) // 转换为浮点数
            const formattedValue = floatValue.toFixed(2) // 格式化为小数点后两位的字符串

            // 更新数据项数组中的AH201列
            this.dataitems[index].AH202 = formattedValue
          })
        })
        .catch(error => {
          console.error('Error fetching data:', error)
        })
    },

    ThreeData() {
      axios.get('http://192.168.6.123/yaoce')
        .then(response => {
          const hexData = response.data.yaoce
          // 从第7个字符开始，每8个字符为一组
          const hexDataWithoutSpaces = hexData.replace(/\s+/g, '') // 去掉空格
          const slicedData = hexDataWithoutSpaces.slice(6)
          const hexValues = slicedData.match(/.{1,8}/g)

          // 打印到控制台并更新数据项数组中的AH203列
          hexValues.forEach((value, index) => {
            const floatValue = this.hexToFloat(value) // 转换为浮点数
            const formattedValue = floatValue.toFixed(2) // 格式化为小数点后两位的字符串

            // 更新数据项数组中的AH201列
            this.dataitems[index].AH203 = formattedValue
          })
        })
        .catch(error => {
          console.error('Error fetching data:', error)
        })
    },

    SixData() {
      axios.get('http://192.168.6.126/yaoce')
        .then(response => {
          const hexData = response.data.yaoce
          // 从第7个字符开始，每8个字符为一组
          const hexDataWithoutSpaces = hexData.replace(/\s+/g, '') // 去掉空格
          const slicedData = hexDataWithoutSpaces.slice(6)
          const hexValues = slicedData.match(/.{1,8}/g)

          // 打印到控制台并更新数据项数组中的AH206列
          hexValues.forEach((value, index) => {
            const floatValue = this.hexToFloat(value) // 转换为浮点数
            const formattedValue = floatValue.toFixed(2) // 格式化为小数点后两位的字符串

            // 更新数据项数组中的AH201列
            this.dataitems[index].AH206 = formattedValue
          })
        })
        .catch(error => {
          console.error('Error fetching data:', error)
        })
    },

    SevenData() {
      axios.get('http://192.168.6.127/yaoce')
        .then(response => {
          const hexData = response.data.yaoce
          // 从第7个字符开始，每8个字符为一组
          const hexDataWithoutSpaces = hexData.replace(/\s+/g, '') // 去掉空格
          const slicedData = hexDataWithoutSpaces.slice(6)
          const hexValues = slicedData.match(/.{1,8}/g)
          hexValues.forEach((value, index) => {
            const floatValue = this.hexToFloat(value) // 转换为浮点数
            const formattedValue = floatValue.toFixed(2) // 格式化为小数点后两位的字符串

            // 更新数据项数组中的AH201列
            this.dataitems[index].AH207 = formattedValue
          })
        })
        .catch(error => {
          console.error('Error fetching data:', error)
        })
    },

    EightData() {
      axios.get('http://192.168.6.128/yaoce')
        .then(response => {
          const hexData = response.data.yaoce
          // 从第7个字符开始，每8个字符为一组
          const hexDataWithoutSpaces = hexData.replace(/\s+/g, '') // 去掉空格
          const slicedData = hexDataWithoutSpaces.slice(6)
          const hexValues = slicedData.match(/.{1,8}/g)
          hexValues.forEach((value, index) => {
            const floatValue = this.hexToFloat(value) // 转换为浮点数
            const formattedValue = floatValue.toFixed(2) // 格式化为小数点后两位的字符串

            // 更新数据项数组中的AH208列
            this.dataitems[index].AH208 = formattedValue
          })
        })
        .catch(error => {
          console.error('Error fetching data:', error)
        })
    },

    NineData() {
      axios.get('http://192.168.6.129/yaoce')
        .then(response => {
          const hexData = response.data.yaoce
          // 从第7个字符开始，每8个字符为一组
          const hexDataWithoutSpaces = hexData.replace(/\s+/g, '') // 去掉空格
          const slicedData = hexDataWithoutSpaces.slice(6)
          const hexValues = slicedData.match(/.{1,8}/g)
          hexValues.forEach((value, index) => {
            const floatValue = this.hexToFloat(value) // 转换为浮点数
            const formattedValue = floatValue.toFixed(2) // 格式化为小数点后两位的字符串

            // 更新数据项数组中的AH209列
            this.dataitems[index].AH209 = formattedValue
          })
        })
        .catch(error => {
          console.error('Error fetching data:', error)
        })
    },

    TenData() {
      axios.get('http://192.168.6.130/yaoce')
        .then(response => {
          const hexData = response.data.yaoce
          // 从第7个字符开始，每8个字符为一组
          const hexDataWithoutSpaces = hexData.replace(/\s+/g, '') // 去掉空格
          const slicedData = hexDataWithoutSpaces.slice(6)
          const hexValues = slicedData.match(/.{1,8}/g)
          hexValues.forEach((value, index) => {
            const floatValue = this.hexToFloat(value) // 转换为浮点数
            const formattedValue = floatValue.toFixed(2) // 格式化为小数点后两位的字符串

            // 更新数据项数组中的AH210列
            this.dataitems[index].AH210 = formattedValue
          })
        })
        .catch(error => {
          console.error('Error fetching data:', error)
        })
    },

    ElevenData() {
      axios.get('http://192.168.6.131/yaoce')
        .then(response => {
          const hexData = response.data.yaoce
          // 从第7个字符开始，每8个字符为一组
          const hexDataWithoutSpaces = hexData.replace(/\s+/g, '') // 去掉空格
          const slicedData = hexDataWithoutSpaces.slice(6)
          const hexValues = slicedData.match(/.{1,8}/g)
          hexValues.forEach((value, index) => {
            const floatValue = this.hexToFloat(value) // 转换为浮点数
            const formattedValue = floatValue.toFixed(2) // 格式化为小数点后两位的字符串

            // 更新数据项数组中的AH211列
            this.dataitems[index].AH211 = formattedValue
          })
        })
        .catch(error => {
          console.error('Error fetching data:', error)
        })
    },

    oneJiLiangData() {
      axios.get('http://192.168.6.121/jiliang')
        .then(response => {
          const hexJiLiangData = response.data.jiliang
          // 从第7个字符开始，每8个字符为一组
          const hexDataWithoutSpaces = hexJiLiangData.replace(/\s+/g, '') // 去掉空格
          const slicedData = hexDataWithoutSpaces.slice(6)
          const hexValues = slicedData.match(/.{1,8}/g)
          hexValues.forEach((value, index) => {
            const floatValue = this.hexToFloat(value) // 转换为浮点数
            const formattedValue = floatValue.toFixed(2) // 格式化为小数点后两位的字符串

            // 更新数据项数组中的AH201列
            this.jiliangitems[index].AH201 = formattedValue
          })
        })
        .catch(error => {
          console.error('Error fetching data:', error)
        })
    },
    twoJiLiangData() {
      axios.get('http://192.168.6.122/jiliang')
        .then(response => {
          const hexJiLiangData = response.data.jiliang
          // 从第7个字符开始，每8个字符为一组
          const hexDataWithoutSpaces = hexJiLiangData.replace(/\s+/g, '') // 去掉空格
          const slicedData = hexDataWithoutSpaces.slice(6)
          const hexValues = slicedData.match(/.{1,8}/g)
          hexValues.forEach((value, index) => {
            const floatValue = this.hexToFloat(value) // 转换为浮点数
            const formattedValue = floatValue.toFixed(2) // 格式化为小数点后两位的字符串

            // 更新数据项数组中的AH202列
            this.jiliangitems[index].AH202 = formattedValue
          })
        })
        .catch(error => {
          console.error('Error fetching data:', error)
        })
    },
    threeJiLiangData() {
      axios.get('http://192.168.6.123/jiliang')
        .then(response => {
          const hexJiLiangData = response.data.jiliang
          // 从第7个字符开始，每8个字符为一组
          const hexDataWithoutSpaces = hexJiLiangData.replace(/\s+/g, '') // 去掉空格
          const slicedData = hexDataWithoutSpaces.slice(6)
          const hexValues = slicedData.match(/.{1,8}/g)
          hexValues.forEach((value, index) => {
            const floatValue = this.hexToFloat(value) // 转换为浮点数
            const formattedValue = floatValue.toFixed(2) // 格式化为小数点后两位的字符串

            // 更新数据项数组中的AH203列
            this.jiliangitems[index].AH203 = formattedValue
          })
        })
        .catch(error => {
          console.error('Error fetching data:', error)
        })
    },
    sixJiLiangData() {
      axios.get('http://192.168.6.126/jiliang')
        .then(response => {
          const hexJiLiangData = response.data.jiliang
          // 从第7个字符开始，每8个字符为一组
          const hexDataWithoutSpaces = hexJiLiangData.replace(/\s+/g, '') // 去掉空格
          const slicedData = hexDataWithoutSpaces.slice(6)
          const hexValues = slicedData.match(/.{1,8}/g)
          hexValues.forEach((value, index) => {
            const floatValue = this.hexToFloat(value) // 转换为浮点数
            const formattedValue = floatValue.toFixed(2) // 格式化为小数点后两位的字符串

            // 更新数据项数组中的AH206列
            this.jiliangitems[index].AH206 = formattedValue
          })
        })
        .catch(error => {
          console.error('Error fetching data:', error)
        })
    },
    nineJiLiangData() {
      axios.get('http://192.168.6.129/jiliang')
        .then(response => {
          const hexJiLiangData = response.data.jiliang
          // 从第7个字符开始，每8个字符为一组
          const hexDataWithoutSpaces = hexJiLiangData.replace(/\s+/g, '') // 去掉空格
          const slicedData = hexDataWithoutSpaces.slice(6)
          const hexValues = slicedData.match(/.{1,8}/g)
          hexValues.forEach((value, index) => {
            const floatValue = this.hexToFloat(value) // 转换为浮点数
            const formattedValue = floatValue.toFixed(2) // 格式化为小数点后两位的字符串

            // 更新数据项数组中的AH209列
            this.jiliangitems[index].AH209 = formattedValue
          })
        })
        .catch(error => {
          console.error('Error fetching data:', error)
        })
    },
    tenJiLiangData() {
      axios.get('http://192.168.6.130/jiliang')
        .then(response => {
          const hexJiLiangData = response.data.jiliang
          // 从第7个字符开始，每8个字符为一组
          const hexDataWithoutSpaces = hexJiLiangData.replace(/\s+/g, '') // 去掉空格
          const slicedData = hexDataWithoutSpaces.slice(6)
          const hexValues = slicedData.match(/.{1,8}/g)
          hexValues.forEach((value, index) => {
            const floatValue = this.hexToFloat(value) // 转换为浮点数
            const formattedValue = floatValue.toFixed(2) // 格式化为小数点后两位的字符串

            // 更新数据项数组中的AH210列
            this.jiliangitems[index].AH210 = formattedValue
          })
        })
        .catch(error => {
          console.error('Error fetching data:', error)
        })
    },
    elevenJiLiangData() {
      axios.get('http://192.168.6.131/jiliang')
        .then(response => {
          const hexJiLiangData = response.data.jiliang
          // 从第7个字符开始，每8个字符为一组
          const hexDataWithoutSpaces = hexJiLiangData.replace(/\s+/g, '') // 去掉空格
          const slicedData = hexDataWithoutSpaces.slice(6)
          const hexValues = slicedData.match(/.{1,8}/g)
          hexValues.forEach((value, index) => {
            const floatValue = this.hexToFloat(value) // 转换为浮点数
            const formattedValue = floatValue.toFixed(2) // 格式化为小数点后两位的字符串

            // 更新数据项数组中的AH211列
            this.jiliangitems[index].AH211 = formattedValue
          })
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
