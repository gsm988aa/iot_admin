<template>
  <div style="width: 100%;position: absolute;flex-direction: column">

    <b-card style="position: relative;width: 100%">
      默认开启
      <br>
      <b-button
          variant="outline-primary"
          @click="start201gaojing"
      >
        开启AH201告警
      </b-button>
      &nbsp
      <b-button
          variant="outline-danger"
          @click="stop201gaojing"
      >
        关闭AH201告警
      </b-button>
      &nbsp
      <b-button
          variant="outline-primary"
          @click="start202gaojing"
      >
        开启AH202告警
      </b-button>
      &nbsp
      <b-button
          variant="outline-danger"
          @click="stop202gaojing"
      >
        关闭AH202告警
      </b-button>
      &nbsp
      <b-button
          variant="outline-primary"
          @click="start203gaojing"
      >
        开启AH203告警
      </b-button>
      &nbsp
      <b-button
          variant="outline-danger"
          @click="stop203gaojing"
      >
        关闭AH203告警
      </b-button>
      &nbsp
      <br>      <br>
      <b-button
          variant="outline-primary"
          @click="start206gaojing"
      >
        开启AH206告警
      </b-button>
      &nbsp
      <b-button
          variant="outline-danger"
          @click="stop206gaojing"
      >
        关闭AH206告警
      </b-button>
      &nbsp

      <b-button
          variant="outline-primary"
          @click="start209gaojing"
      >
        开启AH209告警
      </b-button>
      &nbsp
      <b-button
          variant="outline-danger"
          @click="stop209gaojing"
      >
        关闭AH209告警
      </b-button>
      &nbsp

      <b-button
          variant="outline-primary"
          @click="start210gaojing"
      >
        开启AH210告警
      </b-button>
      &nbsp
      <b-button
          variant="outline-danger"
          @click="stop210gaojing"
      >
        关闭AH210告警
      </b-button>
      &nbsp

      <b-button
          variant="outline-primary"
          @click="start211gaojing"
      >
        开启AH211告警
      </b-button>
      &nbsp
      <b-button
          variant="outline-danger"
          @click="stop211gaojing"
      >
        关闭AH211告警
      </b-button>
      &nbsp
      <br>      <br>
      <b-card-text class="table-font">
        告警： 0 - 未告警    &nbsp &nbsp&nbsp&nbsp       1 - 告警
      </b-card-text>

    </b-card>
<b-card>
  <b-card-text>
    AH201告警：
  </b-card-text>
  装置上电:{{shangdian1}} &nbsp &nbsp
  存储器错误:{{cunchu1}} &nbsp &nbsp
  运行定值区无效错{{yunxing1}} &nbsp &nbsp
  定值校验错误:{{dingzhi1}} &nbsp &nbsp
  开入开出异常:{{kairu1}} &nbsp &nbsp
  采样异常:{{caiyang1}} &nbsp &nbsp
  程序校验错误:{{chengxu1}} &nbsp &nbsp
  监视模块告警:{{jianshi1}} &nbsp &nbsp
  过负荷告警:{{guofu1}} &nbsp &nbsp
  零流告警:{{lingliu1}} &nbsp &nbsp
  零压告警:{{lingya1}} &nbsp &nbsp
  TV断线:{{TVduan1}} &nbsp &nbsp
  控制回路断线:{{duanxian1}} &nbsp &nbsp
  跳闸失败:{{tiaozha1}} &nbsp &nbsp
  非电量1告警:{{feidianone1}} &nbsp &nbsp
  非电量2告警:{{feidiantwo1}} &nbsp &nbsp
  非电量3告警:{{feidianthree1}} &nbsp &nbsp
  非电量4告警:{{feidianfour1}} &nbsp &nbsp
  智能板通信告警:{{zhinengban1}} &nbsp &nbsp

</b-card>
    <b-card>
      <b-card-text >
        AH202告警：
      </b-card-text>
      装置上电:{{shangdian2}} &nbsp &nbsp
      存储器错误:{{cunchu2}} &nbsp &nbsp
      运行定值区无效错{{yunxing2}} &nbsp &nbsp
      定值校验错误:{{dingzhi2}} &nbsp &nbsp
      开入开出异常:{{kairu2}} &nbsp &nbsp
      采样异常:{{caiyang2}} &nbsp &nbsp
      程序校验错误:{{chengxu2}} &nbsp &nbsp
      监视模块告警:{{jianshi2}} &nbsp &nbsp
      过负荷告警:{{guofu2}} &nbsp &nbsp
      零流告警:{{lingliu2}} &nbsp &nbsp
      零压告警:{{lingya2}} &nbsp &nbsp
      TV断线:{{TVduan2}} &nbsp &nbsp
      控制回路断线:{{duanxian2}} &nbsp &nbsp
      跳闸失败:{{tiaozha2}} &nbsp &nbsp
      非电量1告警:{{feidianone2}} &nbsp &nbsp
      非电量2告警:{{feidiantwo2}} &nbsp &nbsp
      非电量3告警:{{feidianthree2}} &nbsp &nbsp
      非电量4告警:{{feidianfour2}} &nbsp &nbsp
      智能板通信告警:{{zhinengban2}} &nbsp &nbsp

    </b-card>
    <b-card>
      <b-card-text >
        AH203告警：
      </b-card-text>
      装置上电:{{shangdian3}}&nbsp &nbsp
      存储器错误:{{cunchu3}}&nbsp &nbsp
      运行定值区无效错{{yunxing3}}&nbsp &nbsp
      定值校验错误:{{dingzhi3}}&nbsp &nbsp
      开入开出异常:{{kairu3}}&nbsp &nbsp
      采样异常:{{caiyang3}}&nbsp &nbsp
      程序校验错误:{{chengxu3}}&nbsp &nbsp
      监视模块告警:{{jianshi3}}&nbsp &nbsp
      过负荷告警:{{guofu3}}&nbsp &nbsp
      零流告警:{{lingliu3}}&nbsp &nbsp
      零压告警:{{lingya3}}&nbsp &nbsp
      TV断线:{{TVduan3}}&nbsp &nbsp
      控制回路断线:{{duanxian3}}&nbsp &nbsp
      跳闸失败:{{tiaozha3}}&nbsp &nbsp
      非电量1告警:{{feidianone3}}&nbsp &nbsp
      非电量2告警:{{feidiantwo3}}&nbsp &nbsp
      非电量3告警:{{feidianthree3}}&nbsp &nbsp
      非电量4告警:{{feidianfour3}}&nbsp &nbsp
      智能板通信告警:{{zhinengban3}}&nbsp &nbsp

    </b-card>
    <b-card>
      <b-card-text  >
        AH206告警：
      </b-card-text>
      装置上电:{{shangdian6}}&nbsp &nbsp
      存储器错误:{{cunchu6}}&nbsp &nbsp
      运行定值区无效错{{yunxing6}}&nbsp &nbsp
      定值校验错误:{{dingzhi6}}&nbsp &nbsp
      开入开出异常:{{kairu6}}&nbsp &nbsp
      采样异常:{{caiyang6}}&nbsp &nbsp
      程序校验错误:{{chengxu6}}&nbsp &nbsp
      监视模块告警:{{jianshi6}}&nbsp &nbsp
      过负荷告警:{{guofu6}}&nbsp &nbsp
      零流告警:{{lingliu6}}&nbsp &nbsp
      零压告警:{{lingya6}}&nbsp &nbsp
      TV断线:{{TVduan6}}&nbsp &nbsp
      控制回路断线:{{duanxian6}}&nbsp &nbsp
      跳闸失败:{{tiaozha6}}&nbsp &nbsp
      非电量1告警:{{feidianone6}}&nbsp &nbsp
      非电量2告警:{{feidiantwo6}}&nbsp &nbsp
      非电量3告警:{{feidianthree6}}&nbsp &nbsp
      非电量4告警:{{feidianfour6}}&nbsp &nbsp
      智能板通信告警:{{zhinengban6}}&nbsp &nbsp

    </b-card>

    <b-card>
      <b-card-text  >
        AH209告警：
      </b-card-text>
      装置上电:{{shangdian9}}&nbsp &nbsp
      存储器错误:{{cunchu9}}&nbsp &nbsp
      运行定值区无效错{{yunxing9}}&nbsp &nbsp
      定值校验错误:{{dingzhi9}}&nbsp &nbsp
      开入开出异常:{{kairu9}}&nbsp &nbsp
      采样异常:{{caiyang9}}&nbsp &nbsp
      程序校验错误:{{chengxu9}}&nbsp &nbsp
      监视模块告警:{{jianshi9}}&nbsp &nbsp
      过负荷告警:{{guofu9}}&nbsp &nbsp
      零流告警:{{lingliu9}}&nbsp &nbsp
      零压告警:{{lingya9}}&nbsp &nbsp
      TV断线:{{TVduan9}}&nbsp &nbsp
      控制回路断线:{{duanxian9}}&nbsp &nbsp
      跳闸失败:{{tiaozha9}}&nbsp &nbsp
      非电量1告警:{{feidianone9}}&nbsp &nbsp
      非电量2告警:{{feidiantwo9}}&nbsp &nbsp
      非电量3告警:{{feidianthree9}}&nbsp &nbsp
      非电量4告警:{{feidianfour9}}&nbsp &nbsp
      智能板通信告警:{{zhinengban9}}&nbsp &nbsp

    </b-card>
    <b-card>
      <b-card-text  >
        AH210告警：
      </b-card-text>
      装置上电:{{shangdian10}}&nbsp &nbsp
      存储器错误:{{cunchu10}}&nbsp &nbsp
      运行定值区无效错{{yunxing10}}&nbsp &nbsp
      定值校验错误:{{dingzhi10}}&nbsp &nbsp
      开入开出异常:{{kairu10}}&nbsp &nbsp
      采样异常:{{caiyang10}}&nbsp &nbsp
      程序校验错误:{{chengxu10}}&nbsp &nbsp
      监视模块告警:{{jianshi10}}&nbsp &nbsp
      过负荷告警:{{guofu10}}&nbsp &nbsp
      零流告警:{{lingliu10}}&nbsp &nbsp
      零压告警:{{lingya10}}&nbsp &nbsp
      TV断线:{{TVduan10}}&nbsp &nbsp
      控制回路断线:{{duanxian10}}&nbsp &nbsp
      跳闸失败:{{tiaozha10}}&nbsp &nbsp
      非电量1告警:{{feidianone10}}&nbsp &nbsp
      非电量2告警:{{feidiantwo10}}&nbsp &nbsp
      非电量3告警:{{feidianthree10}}&nbsp &nbsp
      非电量4告警:{{feidianfour10}}&nbsp &nbsp
      智能板通信告警:{{zhinengban10}}&nbsp &nbsp

    </b-card>

    <b-card>
      <b-card-text >
        AH211告警：
      </b-card-text>
      装置上电:{{shangdian11}}&nbsp &nbsp
      存储器错误:{{cunchu11}}&nbsp &nbsp
      运行定值区无效错{{yunxing11}}&nbsp &nbsp
      定值校验错误:{{dingzhi11}}&nbsp &nbsp
      开入开出异常:{{kairu11}}&nbsp &nbsp
      采样异常:{{caiyang11}}&nbsp &nbsp
      程序校验错误:{{chengxu11}}&nbsp &nbsp
      监视模块告警:{{jianshi11}}&nbsp &nbsp
      过负荷告警:{{guofu11}}&nbsp &nbsp
      零流告警:{{lingliu11}}&nbsp &nbsp
      零压告警:{{lingya11}}&nbsp &nbsp
      TV断线:{{TVduan11}}&nbsp &nbsp
      控制回路断线:{{duanxian11}}&nbsp &nbsp
      跳闸失败:{{tiaozha11}}&nbsp &nbsp
      非电量1告警:{{feidianone11}}&nbsp &nbsp
      非电量2告警:{{feidiantwo11}}&nbsp &nbsp
      非电量3告警:{{feidianthree11}}&nbsp &nbsp
      非电量4告警:{{feidianfour11}}&nbsp &nbsp
      智能板通信告警:{{zhinengban11}}&nbsp &nbsp

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

    BCard,
    BButton,

    BCardText,
  },
  data() {
    return {
      shangdian1: 0,
      shangdian2: 0,
      shangdian3: 0,
      shangdian6: 0,
      shangdian9: 0,
      shangdian10: 0,
      shangdian11: 0,
      cunchu1: 0,
      cunchu2: 0,
      cunchu3: 0,
      cunchu6: 0,
      cunchu9: 0,
      cunchu10: 0,
      cunchu11: 0,
      yunxing1: 0,
      yunxing2: 0,
      yunxing3: 0,
      yunxing6: 0,
      yunxing9: 0,
      yunxing10: 0,
      yunxing11: 0,
      dingzhi1: 0,
      dingzhi2: 0,
      dingzhi3: 0,
      dingzhi6: 0,
      dingzhi9: 0,
      dingzhi10: 0,
      dingzhi11: 0,
      kairu1: 0,
      kairu2: 0,
      kairu3: 0,
      kairu6: 0,
      kairu9: 0,
      kairu10: 0,
      kairu11: 0,
      caiyang1: 0,
      caiyang2: 0,
      caiyang3: 0,
      caiyang6: 0,
      caiyang9: 0,
      caiyang10: 0,
      caiyang11: 0,
      chengxu1: 0,
      chengxu2: 0,
      chengxu3: 0,
      chengxu6: 0,
      chengxu9: 0,
      chengxu10: 0,
      chengxu11: 0,
      jianshi1: 0,
      jianshi2: 0,
      jianshi3: 0,
      jianshi6: 0,
      jianshi9: 0,
      jianshi10: 0,
      jianshi11: 0,
      guofu1: 0,
      guofu2: 0,
      guofu3: 0,
      guofu6: 0,
      guofu9: 0,
      guofu10: 0,
      guofu11: 0,
      lingliu1: 0,
      lingliu2: 0,
      lingliu3: 0,
      lingliu6: 0,
      lingliu9: 0,
      lingliu10: 0,
      lingliu11: 0,
      lingya1: 0,
      lingya2: 0,
      lingya3: 0,
      lingya6: 0,
      lingya9: 0,
      lingya10: 0,
      lingya11: 0,
      TVduan1: 0,
      TVduan2: 0,
      TVduan3: 0,
      TVduan6: 0,
      TVduan9: 0,
      TVduan10: 0,
      TVduan11: 0,
      duanxian1: 0,
      duanxian2: 0,
      duanxian3: 0,
      duanxian6: 0,
      duanxian9: 0,
      duanxian10: 0,
      duanxian11: 0,
      tiaozha1: 0,
      tiaozha2: 0,
      tiaozha3: 0,
      tiaozha6: 0,
      tiaozha9: 0,
      tiaozha10: 0,
      tiaozha11: 0,
      feidianone1: 0,
      feidianone2: 0,
      feidianone3: 0,
      feidianone6: 0,
      feidianone9: 0,
      feidianone10: 0,
      feidianone11: 0,
      feidiantwo1: 0,
      feidiantwo2: 0,
      feidiantwo3: 0,
      feidiantwo6: 0,
      feidiantwo9: 0,
      feidiantwo10: 0,
      feidiantwo11: 0,
      feidianthree1: 0,
      feidianthree2: 0,
      feidianthree3: 0,
      feidianthree6: 0,
      feidianthree9: 0,
      feidianthree10: 0,
      feidianthree11: 0,
      feidianfour1: 0,
      feidianfour2: 0,
      feidianfour3: 0,
      feidianfour6: 0,
      feidianfour9: 0,
      feidianfour10: 0,
      feidianfour11: 0,
      zhinengban1: 0,
      zhinengban2: 0,
      zhinengban3: 0,
      zhinengban6: 0,
      zhinengban9: 0,
      zhinengban10: 0,
      zhinengban11: 0,


    }
  },
  mounted() {
    // 定时更新数据
    setInterval(() => {

    }, 5000)
  },

  methods: {
    start201gaojing() {
      console.log('201遥测开始数据更新')
      // 开启数据更新逻辑
      this.timer = setInterval(() => {
        this.OneData()
      }, 4000)
    },
    start202gaojing() {
      console.log('202遥测开始数据更新')
      // 开启数据更新逻辑
      this.timer2 = setInterval(() => {
        this.TwoData()
      }, 4000)
    },
    start203gaojing() {
      console.log('203遥测开始数据更新')
      // 开启数据更新逻辑
      this.timer3 = setInterval(() => {
        this.ThreeData()
      }, 4000)
    },
    start206gaojing() {
      console.log('206遥测开始数据更新')
      // 开启数据更新逻辑
      this.timer6 = setInterval(() => {
        this.SixData()
      }, 4000)
    },
    start209gaojing() {
      console.log('209遥测开始数据更新')
      // 开启数据更新逻辑
      this.timer9 = setInterval(() => {
        this.NineData()
      }, 4000)
    },
    start210gaojing() {
      console.log('210遥测开始数据更新')
      // 开启数据更新逻辑
      this.timer10 = setInterval(() => {
        this.TenData()
      }, 4000)
    },
    start211gaojing() {
      console.log('211遥测开始数据更新')
      // 开启数据更新逻辑
      this.timer11 = setInterval(() => {
        this.ElevenData()
      }, 4000)
    },

    stop201gaojing() {
      console.log('201遥测停止数据更新')
      // 停止数据更新逻辑
      clearInterval(this.timer)
    },
    stop202gaojing() {
      console.log('202遥测停止数据更新')
      // 停止数据更新逻辑
      clearInterval(this.timer2)
    },
    stop203gaojing() {
      console.log('203遥测停止数据更新')
      // 停止数据更新逻辑
      clearInterval(this.timer3)
    },
    stop206gaojing() {
      console.log('206遥测停止数据更新')
      // 停止数据更新逻辑
      clearInterval(this.timer6)
    },
    stop209gaojing() {
      console.log('209遥测停止数据更新')
      // 停止数据更新逻辑
      clearInterval(this.timer9)
    },
    stop210gaojing() {
      console.log('210遥测停止数据更新')
      // 停止数据更新逻辑
      clearInterval(this.timer10)
    },
    stop211gaojing() {
      console.log('211遥测停止数据更新')
      // 停止数据更新逻辑
      clearInterval(this.timer11)
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
