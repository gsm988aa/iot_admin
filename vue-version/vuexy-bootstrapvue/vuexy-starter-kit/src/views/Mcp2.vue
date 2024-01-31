<template>
  <div style="width: 100%;position: absolute;flex-direction: column">



    <b-card>
      AH201 摄像头 用户名admin 密码 123456789D
<!--      写一个跳转链接到 192.168.6.180-->
      <br>
      <a href="http://192.168.6.180" target="_blank">192.168.6.180 点击跳转</a>
      <br>
      <a href="http://192.168.6.181" target="_blank">192.168.6.181 点击跳转</a>
      <br>
      <a href="http://192.168.6.21:8090" target="_blank"> 双摄像头同时观看  需开启DVR </a>
    </b-card>
    <b-card>
      AH202 摄像头 用户名admin 密码 123456789D
      <br>
      <a href="http://192.168.6.182" target="_blank">192.168.6.182 点击跳转</a>
      <br>
      <a href="http://192.168.6.183" target="_blank">192.168.6.183 点击跳转</a>
      <br>
      <a href="http://192.168.6.22:8090" target="_blank"> 双摄像头同时观看  需开启DVR </a>
    </b-card>
    <b-card>
      AH203 摄像头 用户名admin 密码 123456789D
      <br>
      <a href="http://192.168.6.184" target="_blank">192.168.6.184 点击跳转</a>
      <br>
      <a href="http://192.168.6.185" target="_blank">192.168.6.185 点击跳转</a>
      <br>
      <a href="http://192.168.6.23:8090" target="_blank"> 双摄像头同时观看  需开启DVR </a>
    </b-card>

    <b-card>
      AH206 摄像头 用户名admin 密码 123456789D
      <br>
      <a href="http://192.168.6.186" target="_blank">192.168.6.186 点击跳转</a>
      <br>
      <a href="http://192.168.6.187" target="_blank">192.168.6.187 点击跳转</a>
      <br>
      <a href="http://192.168.6.24:8090" target="_blank"> 双摄像头同时观看  需开启DVR </a>
    </b-card>

    <b-card>
      AH209 摄像头 用户名admin 密码 123456789D
      <br>
      <a href="http://192.168.6.188" target="_blank">192.168.6.188 点击跳转</a>
      <br>
      <a href="http://192.168.6.189" target="_blank">192.168.6.189 点击跳转</a>
      <br>
      <a href="http://192.168.6.25:8090" target="_blank"> 双摄像头同时观看  需开启DVR </a>
    </b-card>
    <b-card>
      AH210 摄像头 用户名admin 密码 123456789D
      <br>
      <a href="http://192.168.6.190" target="_blank">192.168.6.190 点击跳转</a>
      <br>
      <a href="http://192.168.6.191" target="_blank">192.168.6.191 点击跳转</a>
      <br>
      <a href="http://192.168.6.26:8090" target="_blank"> 双摄像头同时观看  需开启DVR </a>
    </b-card>
    <b-card>
      AH211 摄像头 用户名admin 密码 123456789D
      <br>
      <a href="http://192.168.6.192" target="_blank">192.168.6.192 点击跳转</a>
      <br>
      <a href="http://192.168.6.193" target="_blank">192.168.6.193 点击跳转</a>
      <br>
      <a href="http://192.168.6.27:8090" target="_blank"> 双摄像头同时观看  需开启DVR </a>
    </b-card>




    <b-card style="position: relative;width: 100%">
      参数整定  与 保护压板 设置 有风险  请联系
      <br>
      17625000096 高工  获取最高权限
      <br>
      发送自定义指令到
      AH201:
      <b-form-input
        v-model="send1"
        placeholder="AH201"
    >{{ send1 }}
    </b-form-input>
      <br>
      AH202:
      <b-form-input
          v-model="send2"
          placeholder="AH202"
      >{{ send2 }}
      </b-form-input>
      <br>
      AH203:
      <b-form-input
          v-model="send3"
          placeholder="AH203"
      >{{ send3 }}
      </b-form-input>
      <br>
      AH206:
      <b-form-input
          v-model="send6"
          placeholder="AH206"
      >{{ send6 }}
      </b-form-input>
      <br>
      AH209:
      <b-form-input
          v-model="send9"
          placeholder="AH209"
      >{{ send9 }}
      </b-form-input>
      <br>
      AH210:
      <b-form-input
          v-model="send10"
          placeholder="AH210"
      >{{ send10 }}
      </b-form-input>
      <br>
      AH211:
      <b-form-input
          v-model="send11"
          placeholder="AH211"
      >{{ send11 }}
      </b-form-input>
      <b-button @click = "senduart">
        解锁最高权限并发送
      </b-button>

    </b-card>

  </div>
</template>

<script>
import {
    BCard, BCardText, BButton, BFormInput
} from 'bootstrap-vue'
import axios from 'axios'

export default {
  components: {
    BFormInput,
    BCard,
    BButton,

    BCardText,
  },
  data() {
    return {
      send1: '',
      send2: '',
      send3: '',
      send6: '',
      send9: '',
      send10: '',
      send11: '',


    }
  },
  mounted() {
    // 定时更新数据
    // setInterval(() => {
    //
    // }, 5000)
  },

  methods: {


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
