<template>
  <b-card style="background-color: #f2f4f6;position: absolute">

    <b-card>
      <b-button
        style="font-size: 25px;font-family: 宋体,serif;position: relative;width: 100%;text-align: left;color: #3a3a3f;display: flex; justify-content: space-between; align-items: center;"
        variant="outline-light"
        @click="toggle"
      >
        注册邮箱用户
        <span style="font-size: 26px;text-align: right;color: #a5a5b2;font-weight: bold;"> > </span>
      </b-button>
      <b-collapse
        id="collapse-2"
        v-model="isCollapsed"
      >
        <b-card style="background-color: #F5F5F5;">
          <b-input-group
            prepend="发送到邮箱："
            class="one"
          >
            <b-form-input
              v-model="emailAddress"
              type="text"
              placeholder="807683237@qq.com"
            />
            <b-input-group-append>
              <b-button
                variant="outline-success"
                @click="storeEmailAddress"
              >
                保存
              </b-button>
              <b-button
                variant="info"
                @click="clearEmail"
              >
                清空
              </b-button>
            </b-input-group-append>
          </b-input-group>

          <b-modal
            ref="notificationModal"
            title="提示!"
            hide-footer
          >
            {{ notificationMessage }}
          </b-modal>
        </b-card>
      </b-collapse>
    </b-card>

    <b-card>
      <b-button
        style="font-size: 25px;font-family: 宋体,serif;position: relative;width: 100%;text-align: left;color: #3a3a3f;display: flex; justify-content: space-between; align-items: center;"
        variant="outline-light"
        @click="togglehistory"
      >
        多点测温历史数据(需要超级管理员权限)
        <span style="font-size: 26px;color: #a5a5b2;font-weight: bold"> > </span>
      </b-button>
      <b-collapse
        id="collapse-2"
        v-model="ishistory"
      >
        <b-card
          class="overflow-auto"
          style="background-color: #f2f2fa;margin-top: 50px"
        >
          <b-table
            id="data-table"
            class="table-item"
            :items="items"
            :per-page="perPage"
            :current-page="currentPage"
            :fields="tableFields"
            :bordered="bordered"
          />

          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
            class="page-item"
            first-number
            last-number
          />

          <p class="mt-3">
            当前页: {{ currentPage }}
          </p>
        </b-card>
      </b-collapse>
    </b-card>

    <b-card>
      <b-button
        style="font-size: 25px;font-family: 宋体,serif;position: relative;width: 100%;text-align: left;color: #3a3a3f;display: flex; justify-content: space-between; align-items: center;"
        variant="outline-light"
        @click="toggledianli"
      >
        电力状态
        <span style="font-size: 26px;color: #a5a5b2;font-weight: bold"> > </span>
      </b-button>
      <b-collapse
        id="collapse-2"
        v-model="isdianli"
      >
        <b-card style="background-color: #f5f4f4;margin-top: 50px">
          <div>

            <b-tabs card>
              <b-tab
                title="设备信息"
                active
                style="overflow-x: scroll;"
              >
                <b-card
                  style="background-color: #57585b;width: 100vh"
                >
                  <b-card-text style="margin-bottom: 25px;color: #fdfcfc;flex-direction: row;align-items: center;"><span>相电压</span>
                    <span
                      class="data-value"
                      style="margin-left: 100px;"
                    >{{ aPhaseVoltage }}</span> <span style="margin-left: 10px">V</span>
                  </b-card-text>

                  <b-card-text style="margin-bottom: 25px;color: #fdfcfc;flex-direction: row;align-items: center;">
                    <span>相电流</span><span
                      class="data-value"
                      style="margin-left: 100px"
                    >{{ aPhaseCurrent }}</span> <span style="margin-left: 10px">A</span>
                  </b-card-text>

                  <b-card-text style="margin-bottom: 25px;color: #fdfcfc;flex-direction: row;align-items: center;">
                    <span>总功率</span><span
                      class="data-value"
                      style="margin-left: 100px"
                    >{{ TotalActivePower }}</span> <span style="margin-left: 5px">W</span>
                  </b-card-text>

                  <b-card-text style="margin-bottom: 25px;color: #fdfcfc;flex-direction: row;align-items: center;">
                    频率<span
                      class="data-value"
                      style="margin-left: 120px"
                    >{{ Frequency }}</span><span style="margin-left: 10px">Hz</span>
                  </b-card-text>

                  <b-card-text style="margin-bottom: 25px;color: #fdfcfc;flex-direction: row;align-items: center;">
                    总千瓦时<span
                      class="data-value"
                      style="margin-left: 80px"
                    >{{ TotalKWH }}</span><span style="margin-left:10px">KWH</span>
                  </b-card-text>

                  <b-card-text style="color: #fdfcfc;flex-direction: row;align-items: center;">
                    总无功电能<span
                      class="data-value"
                      style="margin-left: 60px"
                    >{{ TotalKvarH }}</span><span style="margin-left:10px">KvarH</span></b-card-text>
                  <div class="line-divider" />
                  <b-card-text style="margin-top: 18px;color: #faae76;">当前时间<span style="background-color: #858282;text-align: center;margin-left: 80px;padding: 8px 25px;">{{ currenttime }}</span>
                  </b-card-text>
                </b-card>
              </b-tab>

              <b-tab
                title="详情信息"
                style="overflow-x: scroll"
              >
                <b-card style="background-color: #57585b;width: 100vh">
                  <b-row v-show="currentEquipPage === 1">
                    <b-card-text style="color: #eabe62">A相电压:
                      <span
                          class="data-value"
                          style="margin-left: 20px;color: #ffffff"
                      >{{ aPhaseVoltage }}</span> <span style="margin-left: 10px;color: #ffffff">V</span>
                    </b-card-text>
                    <b-card-text style="color: #eabe62;">B相电压:
                      <span
                          class="data-value"
                          style="margin-left: 20px;color: #ffffff"
                      >{{ bPhaseVoltage }}</span> <span style="margin-left: 10px;color: #ffffff">V</span>
                    </b-card-text>
                    <b-card-text style="color: #eabe62;margin-left: 40px;">C相电压:
                      <span
                          class="data-value"
                          style="margin-left: 20px;color: #ffffff"
                      >{{ cPhaseVoltage }}</span> <span style="margin-left: 10px;color: #ffffff">V</span>
                    </b-card-text>
                    <b-card-text style="color: #eabe62;margin-top: 25px">AB线电压:
                      <span
                        class="data-value"
                        style="margin-left: 20px;color: #ffffff"
                      >{{ ablineVoltage }}</span> <span style="margin-left: 10px;color: #ffffff">V</span>
                    </b-card-text>
                    <b-card-text style="color: #eabe62;margin-top: 25px;margin-left: 50px">BC线电压:
                      <span
                          class="data-value"
                          style="margin-left: 20px;color: #ffffff"
                      >{{ bclineVoltage }}</span> <span style="margin-left: 10px;color: #ffffff">V</span>
                    </b-card-text>
                    <b-card-text style="color: #eabe62;margin-top: 25px;margin-left: 25px;">CA线电压:
                      <span
                          class="data-value"
                          style="margin-left: 20px;color: #ffffff"
                      >{{ calineVoltage }}</span> <span style="margin-left: 10px;color: #ffffff">V</span>
                    </b-card-text>
                    <b-card-text style="color: #eabe62;margin-top: 25px">A相电流:
                      <span
                          class="data-value"
                          style="margin-left: 20px;color: #ffffff"
                      >{{ aPhaseCurrent }}</span> <span style="margin-left: 10px;color: #ffffff">A</span>
                    </b-card-text>
                    <b-card-text style="color: #eabe62;margin-top: 25px;margin-left: 35px">B相电流:
                      <span
                          class="data-value"
                          style="margin-left: 20px;color: #ffffff"
                      >{{ bPhaseCurrent }}</span> <span style="margin-left: 10px;color: #ffffff">A</span>
                    </b-card-text>
                    <b-card-text style="color: #eabe62;margin-top: 25px;margin-left: 40px">C相电流:
                      <span
                          class="data-value"
                          style="margin-left: 20px;color: #ffffff"
                      >{{ cPhaseCurrent }}</span> <span style="margin-left: 10px;color: #ffffff">A</span>
                    </b-card-text>

                    <b-button style="margin-top: 40px;margin-right: 100px" variant="primary" @click="nextPage(2)">下一页</b-button>
                  </b-row>

                  <b-row v-show="currentEquipPage === 2">
                    <b-card-text style="color: #eabe62">A相有功功率:
                      <span
                          class="data-value"
                          style="margin-left: 20px;color: #ffffff"
                      >{{ aphaseActivePower }}</span> <span style="margin-left: 10px;color: #ffffff">W</span>
                    </b-card-text>
                    <b-card-text style="color: #eabe62;margin-left: 50px">B相有功功率:
                      <span
                          class="data-value"
                          style="margin-left: 20px;color: #ffffff"
                      >{{ bphaseActivePower }}</span> <span style="margin-left: 10px;color: #ffffff">W</span>
                    </b-card-text>
                    <b-card-text style="color: #eabe62;">C相有功功率:
                      <span
                          class="data-value"
                          style="margin-left: 20px;color: #ffffff"
                      >{{ cphaseActivePower }}</span> <span style="margin-left: 10px;color: #ffffff">W</span>
                    </b-card-text>
                    <b-card-text style="color: #eabe62;margin-top: 25px">总有功功率:
                      <span
                          class="data-value"
                          style="margin-left: 20px;color: #ffffff"
                      >{{ TotalActivePower }}</span> <span style="margin-left: 10px;color: #ffffff">A</span>
                    </b-card-text>
                    <b-card-text style="color: #eabe62;margin-top: 25px">A相无功功率:
                      <span
                          class="data-value"
                          style="margin-left: 20px;color: #ffffff"
                      >{{ aphaseReactivePower }}</span> <span style="margin-left: 10px;color: #ffffff">A</span>
                    </b-card-text>
                    <b-card-text style="color: #eabe62;margin-top: 25px;margin-left: 17px">B相无功功率:
                      <span
                          class="data-value"
                          style="margin-left: 20px;color: #ffffff"
                      >{{ bphaseReactivePower }}</span> <span style="margin-left: 10px;color: #ffffff">A</span>
                    </b-card-text>
                    <b-card-text style="color: #eabe62;margin-top: 25px">C相无功功率:
                      <span
                          class="data-value"
                          style="margin-left: 20px;color: #ffffff"
                      >{{ cphaseReactivePower }}</span> <span style="margin-left: 10px;color: #ffffff">A</span>
                    </b-card-text>
                    <b-card-text style="color: #eabe62;margin-top: 25px;margin-left: 46px">总无功功率:
                      <span
                          class="data-value"
                          style="margin-left: 20px;color: #ffffff"
                      >{{ totalReactivePower }}</span> <span style="margin-left: 10px;color: #ffffff">A</span>
                    </b-card-text>
                    <b-card-text style="color: #eabe62;margin-top: 25px;margin-left: 37px">A相视在功率:
                      <span
                          class="data-value"
                          style="margin-left: 20px;color: #ffffff"
                      >{{ aphaseApperantPower }}</span> <span style="margin-left: 10px;color: #ffffff">A</span>
                    </b-card-text>
                    <b-button style="margin-top: 40px" variant="primary" @click="previousPage(currentEquipPage - 1)">上一页</b-button>
                    <b-button style="margin-top: 40px" variant="info" @click="nextPage(currentEquipPage + 1)" class="button-down">下一页</b-button>
                  </b-row>

                  <b-row v-show="currentEquipPage === 3">
                    <b-card-text style="color: #eabe62">B相位视在功率:
                      <span
                          class="data-value"
                          style="margin-left: 20px;color: #ffffff"
                      >{{ bphaseApperantPower }}</span> <span style="margin-left: 10px;color: #ffffff">A</span>
                    </b-card-text>
                    <b-card-text style="color: #eabe62;">C相位视在功率
                      <span
                          class="data-value"
                          style="margin-left: 20px;color: #ffffff"
                      >{{ cphaseApperantPower }}</span> <span style="margin-left: 10px;color: #ffffff">A</span>
                    </b-card-text>
                    <b-card-text style="color: #eabe62;">总视在功率:
                      <span
                          class="data-value"
                          style="margin-left: 20px;color: #ffffff"
                      >{{ TotalApperantPower }}</span> <span style="margin-left: 10px;color: #ffffff">A</span>
                    </b-card-text>
                    <b-card-text style="color: #eabe62;margin-top: 25px">A相位功率因数:
                      <span
                          class="data-value"
                          style="margin-left: 20px;color: #ffffff"
                      >{{ aphasePowerFactor }}</span> <span style="margin-left: 10px;color: #ffffff">A</span>
                    </b-card-text>
                    <b-card-text style="color: #eabe62;margin-top: 25px">B相位功率因数:
                      <span
                          class="data-value"
                          style="margin-left: 20px;color: #ffffff"
                      >{{ bphasePowerFactor }}</span> <span style="margin-left: 10px;color: #ffffff">A</span>
                    </b-card-text>
                    <b-card-text style="color: #eabe62;margin-top: 25px">C相位功率因数:
                      <span
                          class="data-value"
                          style="margin-left: 20px;color: #ffffff"
                      >{{ cphasePowerFactor }}</span> <span style="margin-left: 10px;color: #ffffff">A</span>
                    </b-card-text>
                    <b-card-text style="color: #eabe62;margin-top: 25px">功率因数:
                      <span
                          class="data-value"
                          style="margin-left: 20px;color: #ffffff"
                      >{{ PowerFactor }}</span> <span style="margin-left: 10px;color: #ffffff">A</span>
                    </b-card-text>
                    <b-card-text style="color: #eabe62;margin-top: 25px">频率:
                      <span
                          class="data-value"
                          style="margin-left: 20px;color: #ffffff"
                      >{{ Frequency }}</span> <span style="margin-left: 10px;color: #ffffff">A</span>
                    </b-card-text>
                    <b-card-text style="color: #eabe62;margin-top: 25px">总千瓦时:
                      <span
                          class="data-value"
                          style="margin-left: 20px;color: #ffffff"
                      >{{ TotalKWH }}</span> <span style="margin-left: 10px;color: #ffffff">A</span>
                    </b-card-text>
                    <b-button style="margin-top: 40px;margin-right: 100px" variant="primary" @click="previousPage(currentEquipPage - 1)">上一页</b-button>
                    <b-button style="margin-top: 40px;margin-left: -90px" variant="info" @click="nextPage(currentEquipPage + 1)" class="button-down">下一页</b-button>
                  </b-row>

                  <b-row v-show="currentEquipPage === 4">
                    <b-card-text style="color: #eabe62">总千瓦时2:
                      <span
                          class="data-value"
                          style="margin-left: 20px;color: #ffffff"
                      >{{ TotalKWH2 }}</span> <span style="margin-left: 10px;color: #ffffff">A</span>
                    </b-card-text>
                    <b-card-text style="color: #eabe62;">总无功电能:
                      <span
                          class="data-value"
                          style="margin-left: 20px;color: #ffffff"
                      >{{ TotalKvarH }}</span> <span style="margin-left: 10px;color: #ffffff">A</span>
                    </b-card-text>
                    <b-card-text style="color: #eabe62;">总无功电能2:
                      <span
                          class="data-value"
                          style="margin-left: 20px;color: #ffffff"
                      >{{ TotalKvarH2 }}</span> <span style="margin-left: 10px;color: #ffffff">A</span>
                    </b-card-text>
                    <b-button style="margin-top: 40px" variant="primary" @click="previousPage(currentEquipPage - 1)">上一页</b-button>
                  </b-row>

                </b-card>
              </b-tab>

            </b-tabs>

          </div>

        </b-card>
      </b-collapse>
    </b-card>

    <b-card>
      <b-button
        style="font-size: 25px;font-family: 宋体,serif;position: relative;width: 100%;text-align: left;color: #3a3a3f;display: flex; justify-content: space-between; align-items: center;"
        variant="outline-light"
        @click="togglerecord"
      >
        历史操作记录
        <span style="font-size: 26px;color: #a5a5b2;font-weight: bold"> > </span>
      </b-button>
      <b-collapse
        id="collapse-2"
        v-model="isrecord"
      >
        <b-card
          class="overflow-auto"
          style="margin-top: 50px"
        >

          <b-card style="width: 695px;background-color: #f2f2fa;justify-content: center">
            <b-table
              class="record-text"
              striped
              hover
              :items="reitems"
              :fields="recordFields1"
              :per-page="perPage"
              :current-page="currentPage"
            />

            <b-table
              class="record-text"
              striped
              hover
              :items="reitems"
              :fields="recordFields2"
              :per-page="perPage"
              :current-page="currentPage"
            />
            <b-pagination
              v-model="currentPage"
              :total-rows="rerows"
              :per-page="perPage"
              aria-controls="my-table"
              class="custom-warning"
              first-number
              last-number
            />

            <p class="mt-3">
              当前页: {{ currentPage }}
            </p>
          </b-card>

        </b-card>
      </b-collapse>
    </b-card>

  </b-card>

</template>

<script>

import {
  BButton,
  BCard,
  BCardText,
  BFormInput,
  BInputGroup,
  BInputGroupAppend,
  BInputGroupPrepend,
  BModal,
  BPagination,
  BTab,
  BTable,
  BTabs,
  BCollapse,
  BRow,
} from 'bootstrap-vue'
import axios from 'axios'

export default {
  components: {
    BPagination,
    BButton,
    BCard,
    BCardText,
    BInputGroup,
    // eslint-disable-next-line vue/no-unused-components
    BInputGroupPrepend,
    BFormInput,
    BInputGroupAppend,
    BModal,
    BTable,
    BTab,
    BTabs,
    BCollapse,
    BRow,
  },
  data() {
    return {
      // 设备信息初始化
      aPhaseVoltage: 0,
      bPhaseVoltage: 0,
      cPhaseVoltage: 0,
      ablineVoltage: 0,
      bclineVoltage: 0,
      calineVoltage: 0,
      aPhaseCurrent: 0,
      bPhaseCurrent: 0,
      cPhaseCurrent: 0,
      aphaseActivePower: 0,
      bphaseActivePower: 0,
      cphaseActivePower: 0,
      TotalActivePower: 0,
      aphaseReactivePower: 0,
      bphaseReactivePower: 0,
      cphaseReactivePower: 0,
      totalReactivePower: 0,
      aphaseApperantPower: 0,
      bphaseApperantPower: 0,
      cphaseApperantPower: 0,
      TotalApperantPower: 0,
      aphasePowerFactor: 0,
      bphasePowerFactor: 0,
      cphasePowerFactor: 0,
      PowerFactor: 0,
      Frequency: 0,
      TotalKWH: 0,
      TotalKWH2: 0,
      TotalKvarH: 0,
      TotalKvarH2: 0,

      currentEquipPage: 1,
      currenttime:'',
      isrecord: false,
      isdianli: false,
      ishistory: false,
      isCollapsed: false,
      bordered: true, // 在table里增加竖线
      notificationMessage: '',
      perPage: 5, // 当前页最多5行
      currentPage: 1, // 初始化当前页为1
      time: null, // 定时器初始化为空
      items: [], // 存储历史温度数据 初始化为空
      reitems: [], // 存储历史操作记录
      chatInstance: null,
      recordFields1: [
        { key: 'id', sortable: true, label: 'id' },
        { key: 'jiedifen', label: '接地开关分断' },
        { key: 'houmen', label: '后门闭锁条件' },
        { key: 'qianmen', label: '前门闭锁条件' },
        { key: 'duanluhe', label: '断路合闸' },
        { key: 'currenttime', sortable: true, label: '历史时间' },
      ],
      recordFields2: [
        { key: 'id', sortable: true, label: 'id' },
        { key: 'jiedihe', label: '接地开关闭合' },
        { key: 'gongzuowei', label: '工作位置' },
        { key: 'shiyanwei', label: '试验位置' },
        { key: 'duanlufen', label: '接地开关分断' },
        { key: 'currenttime', sortable: true, label: '历史时间' },
      ],
      tableFields: [
        { key: 'id', sortable: true, label: 'id' },
        { key: 'historysensor1', label: '传感器1', formatter: value => `${value}°C` },
        { key: 'historysensor2', label: '传感器2', formatter: value => `${value}°C` },
        { key: 'historysensor3', label: '传感器3', formatter: value => `${value}°C` },
        { key: 'historysensor4', label: '传感器4', formatter: value => `${value}°C` },
        { key: 'historysensor5', label: '传感器5', formatter: value => `${value}°C` },
        { key: 'historysensor6', label: '传感器6', formatter: value => `${value}°C` },
        { key: 'historytime', sortable: true, label: '历史时间' },
      ], // 列定义
      communication: [],
    }
  },
  computed: {
    ChuanCan() {
      return this.$store.getters.getChuanCan
    },
    emailAddress: {
      get() {
        return this.$store.getters.getemailAddress
      },
      set(value) {
        this.$store.dispatch('setEmailAddress', value)
      },
    },
    rows() {
      return this.items.length
    },
    corows() {
      return this.communication.length
    },
    rerows() {
      return this.reitems.length
    },
  },
  mounted() {
    this.fetchrecord()
    this.startDataUpdates() // 初始化设备信息

    this.timer = setInterval(() => {
      this.startDataUpdates()
    }, 5000) // 5秒请求一次多功能表数据

    console.log('Component mounted')
    // this.fetchTemperatures()
    //
    // this.fetchInterval = setInterval(() => {
    //   this.fetchTemperatures()
    // }, 5000) // 5秒请求一次温度数据

    setInterval(() => {
      this.updateCurrentTime()
    }, 1000) // 更新电力状态里的当前时间
  },
  beforeDestroy() {
    clearInterval(this.fetchInterval)
    clearInterval(this.timer)
  },
  methods: {
    startDataUpdates() {
      setInterval(() => {
        // 模拟实时数据更新
        this.aPhaseVoltage = (Math.random() * 100 + 200).toFixed(2)// 随机生成电压数据 并保留两位小数
        this.aPhaseCurrent = (Math.random() * 5 + 5).toFixed(2) // 随机生成电流数据
        this.TotalActivePower = (Math.random() * 100 + 190).toFixed(2)
        this.Frequency = (Math.random() * 80 + 200).toFixed(2)
        this.TotalKWH = (Math.random() * 250 + 150).toFixed(2)
        this.TotalKvarH = (Math.random() * 70 + 200).toFixed(2)
      }, 3000) // 每2秒更新一次数据
    },

    // startDataUpdates() {
    //   const fetchData = () => {
    //     // 使用axios发送GET请求 获取电表数据
    //     axios.get('http://localhost:10866/equipData')
    //       .then(response => {
    //         // 处理后端返回的数据
    //         const responseData = response.data
    //         console.log('Received data from backend:', responseData)
    //         this.aPhaseVoltage = responseData.aPhaseVoltage
    //         this.bPhaseVoltage = responseData.bPhaseVoltage
    //         this.cPhaseVoltage = responseData.cPhaseVoltage
    //         this.ablineVoltage = responseData.ablineVoltage
    //         this.bclineVoltage = responseData.bclineVoltage
    //         this.calineVoltage = responseData.calineVoltage
    //         this.aPhaseCurrent = responseData.aPhaseCurrent
    //         this.bPhaseCurrent = responseData.bPhaseCurrent
    //         this.cPhaseCurrent = responseData.cPhaseCurrent
    //         this.aphaseActivePower = responseData.aphaseActivePower
    //         this.bphaseActivePower = responseData.bphaseActivePower
    //         this.cphaseActivePower = responseData.cphaseActivePower
    //         this.TotalActivePower = responseData.TotalActivePower
    //         this.aphaseReactivePower = responseData.aphaseReactivePower
    //         this.bphaseReactivePower = responseData.bphaseReactivePower
    //         this.cphaseReactivePower = responseData.cphaseReactivePower
    //         this.totalReactivePower = responseData.totalReactivePower
    //         this.aphaseApperantPower = responseData.aphaseApperantPower
    //         this.bphaseApperantPower = responseData.bphaseApperantPower
    //         this.cphaseApperantPower = responseData.cphaseApperantPower
    //         this.TotalApperantPower = responseData.TotalApperantPower
    //         this.aphasePowerFactor = responseData.aphasePowerFactor
    //         this.bphasePowerFactor = responseData.bphasePowerFactor
    //         this.cphasePowerFactor = responseData.cphasePowerFactor
    //         this.PowerFactor = responseData.PowerFactor
    //         this.Frequency = responseData.Frequency
    //         this.TotalKWH = responseData.TotalKWH
    //         this.TotalKWH2 = responseData.TotalKWH2
    //         this.TotalKvarH = responseData.TotalKvarH
    //         this.TotalKvarH2 = responseData.TotalKvarH2
    //       })
    //       .catch(error => {
    //         // 处理请求错误
    //         console.error(error)
    //       })
    //   }
    //   fetchData() // 初始化数据
    //   // 每3秒更新一次数据
    //   const updateInterval = 3000
    //   setInterval(fetchData, updateInterval)
    // },

    updateCurrentTime() {
      const now = new Date()
      // 格式化当前时间，包括年月日、时分秒
      this.currenttime = `${now.getFullYear()}-${this.padZero(now.getMonth() + 1)}-${this.padZero(now.getDate())} ${this.padZero(now.getHours())}:${this.padZero(now.getMinutes())}:${this.padZero(now.getSeconds())}` // 更新当前时间
    },
    padZero(value) {
      // 辅助函数，用于在数字小于10时前面添加0
      return value < 10 ? `0${value}` : value
    },
    fetchrecord() {
      axios.get('http://localhost:9999/records')
        .then(response => {
          console.log('get the recordData')
          this.reitems = response.data
          console.log('reitems:', this.reitems)
        })
        .catch(error => {
          console.error('Request failed:', error)
        })
    },
    nextPage(nextPageNumber) {
      if (nextPageNumber <= 4) {
        this.currentEquipPage = nextPageNumber
      }
    },
    previousPage(previousPageNumber) {
      if (previousPageNumber >= 1) {
        this.currentEquipPage = previousPageNumber
      }
    },
    // fetchTemperatures() {
    //   axios.get('http://localhost:10866/historytemperature')
    //     .then(response => {
    //       console.log('get the historytemperature')
    //       this.items = response.data
    //     })
    //     .catch(error => {
    //       console.error('Request failed:', error)
    //     })
    // },
    clearEmail() {
      this.emailAddress = '' // 清空输入框
    },
    async storeEmailAddress() {
      // 保存
      await this.$store.dispatch('setEmailAddress', this.emailAddress)

      const { emailAddress } = this
      if (emailAddress) {
        try {
          // 发送邮箱到后端
          const response = await axios.post('http://localhost:3000/saveemail', { email: emailAddress })
          if (response.status === 200) {
            // 邮件保存成功
            this.notificationMessage = '用户邮箱保存成功！'
          } else {
            console.error('没有保存用户邮箱:', response.data.message)
          }
        } catch (error) {
          this.notificationMessage = '保存用户邮箱失败'
          console.error('保存用户邮箱失败:', error)
        }
        this.$refs.notificationModal.show()
      } else {
        console.log('邮箱地址没有设置.')
        this.$refs.notificationModal.show()
      }
    },
    sendEmail() {
      const emailAddress = this.$store.getters.getemailAddress
      // eslint-disable-next-line no-empty
      if (emailAddress) {
      } else {
        console.log('Email address is not set.')
      }
    },
    toggle() {
      this.isCollapsed = !this.isCollapsed
    },
    togglehistory() {
      this.ishistory = !this.ishistory
    },
    toggledianli() {
      this.isdianli = !this.isdianli
    },
    togglerecord() {
      this.isrecord = !this.isrecord
    },
  },
}
</script>
<style scoped>
.page-item{
  justify-content: center;
}
.table-item{
  font-size: 14px;
  text-align: center;
}

.table-item th {
  text-align: center;
  font-size: 16px;
}

.introduction2 {
  font-size: 1px;
  font-family: 微软雅黑;
  color: #fdfdfd;

}

.card-text {
  font-size: 20px;
  font-family: 华文中宋,serif;
  margin-left: 10px;
  color:#6A5ACD;
//background-color: lavender;
}

.communication-text{
  text-align: center;
  overflow: scroll;
}

.button-down{
  margin-left: 10px;
}

.custom-warning {
  justify-content: center;
  border-color: #f0ad4e; /* 警告边框颜色 */
  color: #fff; /* 警告文本颜色 */
  margin-top: 20px;
  overflow: scroll;
}
.data-value {
  background-color: #9d9c9c;
  padding: 8px 30px;
//border: 1px solid #e8e7e7;
  margin-left: 75px;
  text-align: center;
}

.line-divider {
  margin-top: 25px; /* 调整线的位置 */
  border-top: 2px solid #fdfcfc; /* 绘制一条横线 */
  width: 100%; /* 让线占满整个宽度 */
}
.record-text{
  text-align: center;
  width: 100%;
}

</style>
