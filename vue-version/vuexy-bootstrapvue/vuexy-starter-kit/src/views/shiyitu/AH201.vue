<template>
  <b-card
    style="height: 900px;width:700px;font-size: 17px;"
    header="开关状态示意图(超级管理员可见)"
  >
    <b-form-select
      v-model="ip"
      :options="options"
    />
    <div style="font-size: 15px">
      选中的IP地址是：{{ ip }}
    </div>

      <b-button
          variant="outline-primary"
          @click="start201gaojing"
      >
        开启AH201
      </b-button>
      &nbsp
      <b-button
          variant="outline-danger"
          @click="stop201gaojing"
      >
        关闭AH201
      </b-button>
      &nbsp
      <b-button
          variant="outline-primary"
          @click="start202gaojing"
      >
        开启AH202
      </b-button>
      &nbsp
      <b-button
          variant="outline-danger"
          @click="stop202gaojing"
      >
        关闭AH202
      </b-button>
      &nbsp
      <b-button
          variant="outline-primary"
          @click="start203gaojing"
      >
        开启AH203
      </b-button>
      &nbsp
      <b-button
          variant="outline-danger"
          @click="stop203gaojing"
      >
        关闭AH203
      </b-button>
      &nbsp
      <br>      <br>
      <b-button
          variant="outline-primary"
          @click="start206gaojing"
      >
        开启AH206
      </b-button>
      &nbsp
      <b-button
          variant="outline-danger"
          @click="stop206gaojing"
      >
        关闭AH206
      </b-button>
      &nbsp

      <b-button
          variant="outline-primary"
          @click="start209gaojing"
      >
        开启AH209
      </b-button>
      &nbsp
      <b-button
          variant="outline-danger"
          @click="stop209gaojing"
      >
        关闭AH209
      </b-button>
      &nbsp

      <b-button
          variant="outline-primary"
          @click="start210gaojing"
      >
        开启AH210
      </b-button>
      &nbsp
      <b-button
          variant="outline-danger"
          @click="stop210gaojing"
      >
        关闭AH210
      </b-button>
      &nbsp

      <b-button
          variant="outline-primary"
          @click="start211gaojing"
      >
        开启AH211
      </b-button>
      &nbsp
      <b-button
          variant="outline-danger"
          @click="stop211gaojing"
      >
        关闭AH211
      </b-button>


    <br>
    <!--            如果shiyanwei=0 代表没到位 如果 shiyanwei=1 代表到位-->
    <div style="display: flex;flex-direction: column">
      <b-row style="margin-left: 20px;display: block;padding:20px 10px">
        <h6 class="title">
          试验位置：</h6>
        <b-row>
          <b-form-radio
            v-model="shiyanwei"
            value="0"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            还未到位
          </b-form-radio>
          <b-form-radio
            v-model="shiyanwei"
            value="1"
            class="custom-radio"
            :disabled="isLocked"
          >
            已到位
          </b-form-radio>
        </b-row>

        <h6 class="title">
          工作位置：
        </h6>
        <b-row>
          <b-form-radio
            v-model="gongzuowei"
            value="0"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            还未到位
          </b-form-radio>
          <b-form-radio
            v-model="gongzuowei"
            value="1"
            class="custom-radio"
            :disabled="isLocked"
          >
            已到位
          </b-form-radio>
        </b-row>

        <h6 class="title">
          接地开关分断：
        </h6>
        <b-row>
          <b-form-radio
            v-model="jiedifen"
            value="0"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            还未分断
          </b-form-radio>
          <b-form-radio
            v-model="jiedifen"
            value="1"
            class="custom-radio"
            :disabled="isLocked"
          >
            已分断
          </b-form-radio>
        </b-row>

        <h6 class="title">
          接地开关闭合：
        </h6>
        <b-row>
          <b-form-radio
            v-model="jiedihe"
            value="0"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            还未闭合
          </b-form-radio>
          <b-form-radio
            v-model="jiedihe"
            value="1"
            class="custom-radio"
            :disabled="isLocked"
          >
            已闭合
          </b-form-radio>
        </b-row>

        <h6 class="title">
          断路合闸：
        </h6>
        <b-row>
          <b-form-radio
            v-model="hezha02"
            value="0"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            还未合闸
          </b-form-radio>
          <b-form-radio
            v-model="hezha02"
            value="1"
            class="custom-radio"
            :disabled="isLocked"
          >
            已合闸
          </b-form-radio>
        </b-row>

        <h6 class="title">
          断路分闸：
        </h6>
        <b-row>
          <b-form-radio
            v-model="fenzha02"
            value="0"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            还未分闸
          </b-form-radio>
          <b-form-radio
            v-model="fenzha02"
            value="1"
            class="custom-radio"
            :disabled="isLocked"
          >
            已分闸
          </b-form-radio>
        </b-row>

      </b-row>
    </div>


    <div
        v-if="ip==='192.168.6.101'"
        style="margin-left: 170px;margin-top: -520px;scale: 0.55">
      <img
          v-if="shiyanwei === 1 && hezha11 === 1"
          src="@/assets/images/201/AH201shiyanhe.svg"
      >
      <img
          v-else-if="shiyanwei === 1 && fenzha11 === 1"
          src="@/assets/images/201/AH201shiyanfen.svg"
      >
      <img
          v-else-if="gongzuowei === 1 && hezha11 === 1"
          src="@/assets/images/201/AH201gongzuohe.svg"
      >
      <img
          v-else-if="gongzuowei === 1 && fenzha11 === 1"
          src="@/assets/images/201/AH201gongzuofen.svg"
      >
      <img
          v-else
          src="@/assets/images/AH201.svg"
      >
    </div>

    <div
        v-if="ip==='192.168.6.102'"
        style="margin-left: 170px;margin-top: -520px;scale: 0.55">
      <img
        v-if="shiyanwei === 1 && hezha02 === 1"
        src="@/assets/images/202/AH202shiyanhe.svg"
      >
      <img
        v-else-if="shiyanwei === 1 && fenzha02 === 1"
        src="@/assets/images/202/AH202shiyanfen.svg"
      >
      <img
        v-else-if="gongzuowei === 1 && hezha02 === 1"
        src="@/assets/images/202/AH202gongzuohe.svg"
      >
      <img
        v-else-if="gongzuowei === 1 && fenzha02 === 1"
        src="@/assets/images/202/AH202gongzuofen.svg"
      >
      <img
        v-else-if="gongzuowei === 1 && daofen02 === 1"
        src="@/assets/images/202/AH202jiedifen.svg"
      >
      <img
        v-else-if="shiyanwei === 1 && daohe02 === 1"
        src="@/assets/images/202/AH202jiedihe.svg"
      >
      <img
        v-else
        src="@/assets/images/AH202.svg"
      >
    </div>

    <div
        v-if="ip==='192.168.6.103'"
        style="margin-left: 170px;margin-top: -520px;scale: 0.55">
      <img
          v-if="shiyanwei === 1 && hezha03 === 1"
          src="@/assets/images/202/AH202shiyanhe.svg"
      >
      <img
          v-else-if="shiyanwei === 1 && fenzha03 === 1"
          src="@/assets/images/202/AH202shiyanfen.svg"
      >
      <img
          v-else-if="gongzuowei === 1 && hezha03 === 1"
          src="@/assets/images/202/AH202gongzuohe.svg"
      >
      <img
          v-else-if="gongzuowei === 1 && fenzha03 === 1"
          src="@/assets/images/202/AH202gongzuofen.svg"
      >
      <img
          v-else-if="gongzuowei === 1 && daofen03 === 1"
          src="@/assets/images/202/AH202jiedifen.svg"
      >
      <img
          v-else-if="shiyanwei === 1 && daohe03 === 1"
          src="@/assets/images/202/AH202jiedihe.svg"
      >
      <img
          v-else
          src="@/assets/images/AH202.svg"
      >
    </div>

    <div
        v-if="ip==='192.168.6.106'"
        style="margin-left: 170px;margin-top: -520px;scale: 0.55">
      <img
          v-if="shiyanwei === 1 && hezha06 === 1"
          src="@/assets/images/206/AH206shiyanhe.svg"
      >
      <img
          v-else-if="shiyanwei === 1 && fenzha06 === 1"
          src="@/assets/images/206/AH206shiyanfen.svg"
      >
      <img
          v-else-if="gongzuowei === 1 && hezha06 === 1"
          src="@/assets/images/206/AH206gongzuohe.svg"
      >
      <img
          v-else-if="gongzuowei === 1 && fenzha06 === 1"
          src="@/assets/images/206/AH206gongzuofen.svg"
      >
      <img
          v-else
          src="@/assets/images/AH206.svg"
      >
    </div>

    <div
        v-if="ip==='192.168.6.109'"
        style="margin-left: 170px;margin-top: -520px;scale: 0.55">
      <img
          v-if="shiyanwei === 1 && hezha09 === 1"
          src="@/assets/images/202/AH202shiyanhe.svg"
      >
      <img
          v-else-if="shiyanwei === 1 && fenzha09 === 1"
          src="@/assets/images/202/AH202shiyanfen.svg"
      >
      <img
          v-else-if="gongzuowei === 1 && hezha09 === 1"
          src="@/assets/images/202/AH202gongzuohe.svg"
      >
      <img
          v-else-if="gongzuowei === 1 && fenzha09 === 1"
          src="@/assets/images/202/AH202gongzuofen.svg"
      >
      <img
          v-else-if="gongzuowei === 1 && daofen09 === 1"
          src="@/assets/images/202/AH202jiedifen.svg"
      >
      <img
          v-else-if="shiyanwei === 1 && daohe09 === 1"
          src="@/assets/images/202/AH202jiedihe.svg"
      >
      <img
          v-else
          src="@/assets/images/AH202.svg"
      >
    </div>

    <div
        v-if="ip==='192.168.6.110'"
        style="margin-left: 170px;margin-top: -520px;scale: 0.55">
      <img
          v-if="shiyanwei === 1 && hezha10 === 1"
          src="@/assets/images/202/AH202shiyanhe.svg"
      >
      <img
          v-else-if="shiyanwei === 1 && fenzha10 === 1"
          src="@/assets/images/202/AH202shiyanfen.svg"
      >
      <img
          v-else-if="gongzuowei === 1 && hezha10 === 1"
          src="@/assets/images/202/AH202gongzuohe.svg"
      >
      <img
          v-else-if="gongzuowei === 1 && fenzha10 === 1"
          src="@/assets/images/202/AH202gongzuofen.svg"
      >
      <img
          v-else-if="gongzuowei === 1 && daofen10 === 1"
          src="@/assets/images/202/AH202jiedifen.svg"
      >
      <img
          v-else-if="shiyanwei === 1 && daohe10 === 1"
          src="@/assets/images/202/AH202jiedihe.svg"
      >
      <img
          v-else
          src="@/assets/images/AH202.svg"
      >
    </div>

    <div
        v-if="ip==='192.168.6.111'"
        style="margin-left: 170px;margin-top: -520px;scale: 0.55">
      <img
          v-if="shiyanwei === 1 && hezha11 === 1"
          src="@/assets/images/201/AH201shiyanhe.svg"
      >
      <img
          v-else-if="shiyanwei === 1 && fenzha11 === 1"
          src="@/assets/images/201/AH201shiyanfen.svg"
      >
      <img
          v-else-if="gongzuowei === 1 && hezha11 === 1"
          src="@/assets/images/201/AH201gongzuohe.svg"
      >
      <img
          v-else-if="gongzuowei === 1 && fenzha11 === 1"
          src="@/assets/images/201/AH201gongzuofen.svg"
      >
      <img
          v-else
          src="@/assets/images/AH201.svg"
      >
    </div>

    <!--    <b-form-input class="input" />-->
  </b-card>
</template>

<script>
import {
  BRow, BCol, BCard, BCardText, BButton, BFormRadio, BFormSelect,
} from 'bootstrap-vue'
import axios from 'axios'

export default {
  components: {
    BRow,

    BCol,
    BCard,
    BCardText,
    BButton,
    BFormRadio,
    BFormSelect,
  },
  data() {
    return {
      ip: '192.168.6.108',
      isLocked: true, // 控制是否锁定复选框

      shiyanwei: 0,
      gongzuowei: 0,
      jiedifen: 0,
      jiedihe: 0,
      duanluhe: 0,
      duanlufen: 0,

      hezha01: 0,
      hezha02: 0,
      hezha03: 0,
      hezha04: 0,
      hezha05: 0,
      hezha06: 0,
      hezha07: 0,
      hezha08: 0,
      hezha09: 0,
      hezha10: 0,
      hezha11: 0,

      fenzha01: 0,
      fenzha02: 0,
      fenzha03: 0,
      fenzha04: 0,
      fenzha05: 0,
      fenzha06: 0,
      fenzha07: 0,
      fenzha08: 0,
      fenzha09: 0,
      fenzha10: 0,
      fenzha11: 0,

      daofen02: 0,
      daofen03: 0,
      daofen04: 0,
      daofen05: 0,
      daofen07: 0,
      daofen08: 0,
      daofen09: 0,
      daofen10: 0,
      daofen11: 0,

      daohe02: 0,
      daohe03: 0,
      daohe04: 0,
      daohe05: 0,
      daohe07: 0,
      daohe08: 0,
      daohe09: 0,
      daohe10: 0,
      daohe11: 0,

      cheru01: 0,
      cheru02: 0,
      cheru03: 0,
      cheru04: 0,
      cheru05: 0,
      cheru06: 0,
      cheru07: 0,
      cheru08: 0,
      cheru09: 0,
      cheru10: 0,
      cheru11: 0,

      chechu01: 0,
      chechu02: 0,
      chechu03: 0,
      chechu04: 0,
      chechu05: 0,
      chechu06: 0,
      chechu07: 0,
      chechu08: 0,
      chechu09: 0,
      chechu10: 0,
      chechu11: 0,

      options: [
        { value: '192.168.6.101', text: '192.168.6.101' },
        { value: '192.168.6.102', text: '192.168.6.102' },
        { value: '192.168.6.103', text: '192.168.6.103' },
        { value: '192.168.6.106', text: '192.168.6.106' },
        { value: '192.168.6.109', text: '192.168.6.109' },
        { value: '192.168.6.110', text: '192.168.6.110' },
        { value: '192.168.6.111', text: '192.168.6.111' },
      ],

    }
  },

  watch: {
    ip(newValue, oldValue) {
      console.log(`IP地址已更新，新值为：${newValue}`)
      // 在IP地址变化时立即启动数据更新逻辑
      clearInterval(this.timer)
      this.start202gaojing()
    }
  },

  methods: {
    start201gaojing() {
      console.log('开启201示意图')
      // 开启数据更新逻辑
      console.log(this.ip)
      this.timer = setInterval(() => {
        axios.post(`http://${this.ip}/getss`).then(response => {
          const { data } = response
          console.log(data)

          // 根据实际需求更新hezha01对应的数据属性的值
          this.hezha01 = data.hezhawei
          this.fenzha01 = this.hezha01 === 1 ? 0 : 1
          this.shiyanwei = data.shiyanwei
          this.gongzuowei = data.gongzuowei
          this.jiedihe = data.jiedihe
          this.jiedifen = this.jiedihe === 1 ? 0 : 1
          this.chuneng = data.chunengwei

          console.log(this.hezha01)
        })
          .catch(error => {
            console.error('数据获取失败', error)
          })
      }, 4000)


    },
    start202gaojing() {
      console.log('开启202示意图')
      // 开启数据更新逻辑
      this.timer = setInterval(() => {
        axios.post(`http://${this.ip}/getss`).then(response => {
          const { data } = response
          console.log(data)

          // 根据实际需求更新hezha02对应的数据属性的值
          this.hezha02 = data.hezhawei
          this.fenzha02 = this.hezha02 === 1 ? 0 : 1
          this.shiyanwei = data.shiyanwei
          this.gongzuowei = data.gongzuowei
          this.jiedihe = data.jiedihe
          this.jiedifen = this.jiedihe === 1 ? 0 : 1
          this.chuneng = data.chunengwei

          console.log(this.hezha02)
        })
          .catch(error => {
            console.error('数据获取失败', error)
          })
      }, 4000)
    },
    start203gaojing() {
      console.log('开启203示意图')
      // 开启数据更新逻辑
      this.timer = setInterval(() => {
        axios.post(`http://${this.ip}/getss`).then(response => {
          const { data } = response
          console.log(data)

          // 根据实际需求更新hezha03对应的数据属性的值
          this.hezha03 = data.hezhawei
          this.fenzha03 = this.hezha03 === 1 ? 0 : 1
          this.shiyanwei = data.shiyanwei
          this.gongzuowei = data.gongzuowei
          this.jiedihe = data.jiedihe
          this.jiedifen = this.jiedihe === 1 ? 0 : 1
          this.chuneng = data.chunengwei

          console.log(this.hezha03)
        })
          .catch(error => {
            console.error('数据获取失败', error)
          })
      }, 4000)
    },
    start206gaojing() {
      console.log('开启206示意图')
      // 开启数据更新逻辑
      this.timer = setInterval(() => {
        axios.post(`http://${this.ip}/getss`).then(response => {
          const { data } = response
          console.log(data)

          // 根据实际需求更新hezha06对应的数据属性的值
          this.hezha06 = data.hezhawei
          this.fenzha06 = this.hezha06 === 1 ? 0 : 1
          this.shiyanwei = data.shiyanwei
          this.gongzuowei = data.gongzuowei
          this.jiedihe = data.jiedihe
          this.jiedifen = this.jiedihe === 1 ? 0 : 1
          this.chuneng = data.chunengwei

          console.log(this.hezha06)
        })
          .catch(error => {
            console.error('数据获取失败', error)
          })
      }, 4000)
    },
    start209gaojing() {
      console.log('开启209示意图')
      // 开启数据更新逻辑
      this.timer = setInterval(() => {
        axios.post(`http://${this.ip}/getss`).then(response => {
          const { data } = response
          console.log(data)

          // 根据实际需求更新hezha09对应的数据属性的值
          this.hezha09 = data.hezhawei
          this.fenzha09 = this.hezha09 === 1 ? 0 : 1
          this.shiyanwei = data.shiyanwei
          this.gongzuowei = data.gongzuowei
          this.jiedihe = data.jiedihe
          this.jiedifen = this.jiedihe === 1 ? 0 : 1
          this.chuneng = data.chunengwei

          console.log(this.hezha09)
        })
          .catch(error => {
            console.error('数据获取失败', error)
          })
      }, 4000)
    },
    start210gaojing() {
      console.log('开启210示意图')
      // 开启数据更新逻辑
      this.timer = setInterval(() => {
        axios.post(`http://${this.ip}/getss`).then(response => {
          const { data } = response
          console.log(data)

          // 根据实际需求更新hezha10对应的数据属性的值
          this.hezha10 = data.hezhawei
          this.fenzha10 = this.hezha10 === 1 ? 0 : 1
          this.shiyanwei = data.shiyanwei
          this.gongzuowei = data.gongzuowei
          this.jiedihe = data.jiedihe
          this.jiedifen = this.jiedihe === 1 ? 0 : 1
          this.chuneng = data.chunengwei

          console.log(this.hezha10)
        })
          .catch(error => {
            console.error('数据获取失败', error)
          })
      }, 4000)
    },
    start211gaojing() {
      console.log('开启211示意图')
      // 开启数据更新逻辑
      this.timer = setInterval(() => {
        axios.post(`http://${this.ip}/getss`).then(response => {
          const { data } = response
          console.log(data)

          // 根据实际需求更新hezha11对应的数据属性的值
          this.hezha11 = data.hezhawei
          this.fenzha11 = this.hezha11 === 1 ? 0 : 1
          this.shiyanwei = data.shiyanwei
          this.gongzuowei = data.gongzuowei
          this.jiedihe = data.jiedihe
          this.jiedifen = this.jiedihe === 1 ? 0 : 1
          this.chuneng = data.chunengwei

          console.log(this.hezha11)
        })
          .catch(error => {
            console.error('数据获取失败', error)
          })
      }, 4000)
    },

    stop201gaojing() {
      console.log('关闭201示意图')
      // 停止数据更新逻辑
      clearInterval(this.timer)
    },
    stop202gaojing() {
      console.log('关闭202示意图')
      // 停止数据更新逻辑
      clearInterval(this.timer)
    },
    stop203gaojing() {
      console.log('关闭203示意图')
      // 停止数据更新逻辑
      clearInterval(this.timer)
    },
    stop206gaojing() {
      console.log('关闭206示意图')
      // 停止数据更新逻辑
      clearInterval(this.timer)
    },
    stop209gaojing() {
      console.log('关闭209示意图')
      // 停止数据更新逻辑
      clearInterval(this.timer)
    },
    stop210gaojing() {
      console.log('关闭210示意图')
      // 停止数据更新逻辑
      clearInterval(this.timer)
    },
    stop211gaojing() {
      console.log('关闭211示意图')
      // 停止数据更新逻辑
      clearInterval(this.timer)
    },
  },
}
</script>

<style>

.title{
  font-family: 新宋体,serif;
  font-size: 16px;
  font-weight: bolder;
}
.custom-control-input:checked ~ .custom-control-label::before,
.custom-radio .custom-control-input:checked:disabled ~ .custom-control-label::before {
  background-color: #33ff44;
  border: #09280b;
}
.custom-radio .custom-control-label {
  color: #000000 !important; /* Use !important to ensure it takes precedence */

}

</style>
