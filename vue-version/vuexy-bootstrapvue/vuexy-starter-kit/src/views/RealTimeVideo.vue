<template>
  <b-card class="Rbackground">
    <h1 class="title">
      龙首矿西二采区辅助系统监控平台
    </h1>

    <div style="display: flex;">

      <!--左侧栏-->
      <div style="display: flex; flex-direction: column;margin-right: 460px;margin-top: -500px">
        <!-- 实时监控-->
        <div
          style="width: 3200px; height: 2000px;"
          class="video"
        >

          <div style="float: right;margin-right: 350px;margin-top: 40px">
            <div
              id="current-time"
              style="width: 500px;height: 200px;font-size: 50px;color: #fff5ef;"
            >
              {{ currentUpTime }}
            </div>
          </div>

          <!--第一排-->
          <div
            style="width: 700px;height: 700px"
            class="gif1"
          >
            <div
              id="current-time"
              style="width: 500px;height: 200px;font-size: 50px;color: #fff5ef;"
            >
              {{ currentVideoTime }}
            </div>
          </div>

          <div
            style="width: 700px;height: 700px"
            class="gif2"
          >
            <div
              id="current-time"
              style="width: 500px;height: 200px;font-size: 50px;color: #fff5ef;"
            >
              {{ currentVideoTime }}
            </div>
          </div>

          <div
            style="width: 700px;height: 700px"
            class="gif3"
          >
            <div
              id="current-time"
              style="width: 500px;height: 200px;font-size: 50px;color: #fff5ef;"
            >
              {{ currentVideoTime }}
            </div>
          </div>

          <!--第二排-->

          <div
            style="width: 700px;height: 700px"
            class="gif4"
          >
            <div
              id="current-time"
              style="width: 500px;height: 200px;font-size: 50px;color: #fff5ef;"
            >
              {{ currentVideoTime }}
            </div>
          </div>

          <div
            style="width: 700px;height: 700px"
            class="gif5"
          >
            <div
              id="current-time"
              style="width: 500px;height: 200px;font-size: 50px;color: #fff5ef;"
            >
              {{ currentVideoTime }}
            </div>
          </div>

          <div
            style="width: 700px;height: 700px"
            class="gif6"
          >
            <div
              id="current-time"
              style="width: 500px;height: 200px;font-size: 50px;color: #fff5ef;"
            >
              {{ currentVideoTime }}
            </div>
          </div>

          <div style="display: flex; flex-direction: column;margin-left: 2000px;margin-top: -1250px;background-color: #011026">
            <dv-border-box-10
              :border-style="'none'"
              style="height: 1300px"
            >
              <div style="display: flex; flex-direction: column;margin-top: 120px;margin-left:200px;gap: 100px;">
                <b-button
                  pill
                  variant="outline-info"
                  style="font-size: 70px; color: #ffffff;font-weight: bold;text-align: center;width: 800px;scale: 1.1;height: 150px;background-color: #183c75"
                  @click="showModal"
                >
                  查询历史监控记录
                </b-button>
              </div>

              <div style="display: flex; flex-direction: column;margin-top: 200px;margin-left:80px;gap: 100px;">
                <b-card-text style="font-size: 80px; color: #ffffff;font-weight: bold;text-align: center;">
                  上周总体人员到岗情况
                </b-card-text>
                <dv-capsule-chart
                  :config="config22"
                  style="width:300px;height:200px;scale: 3.6;margin-left: 350px;margin-top: 150px;color: #ffffff"
                />
              </div>
            </dv-border-box-10>
          </div>

        </div>

        <!--标题 监控-->
        <div
          id="realtime-video-btn"
          style="width:400px;height:100px;scale: 0.8;display: flex;margin-top: -520px"
          @click="goBack"
        >
          <dv-border-box-10
            :border-style="'none'"
          >
            <b-card-text style="font-size: 40px; color: #ffffff;font-weight: bold;margin-top: 40px;text-align: center">
              返回首页
            </b-card-text>
          </dv-border-box-10>
        </div>

      </div>

      <b-modal v-model="showHistoryModal" id="my-modal" title="历史监控记录">
        <p>暂无历史记录!</p>
      </b-modal>
    </div>

  </b-card>
</template>

<script>
import {
  BCard, BCardText, BButton,
} from 'bootstrap-vue'

import Vue from 'vue'
import DataView from '@jiaminghi/data-view'

Vue.use(DataView)

export default {
  name: 'GifExample',
  components: {
    BCard, BCardText, BButton,
  },
  data() {
    return {
      showHistoryModal: false,
      config22: {
        data: [
          {
            name: '周一',
            value: 80,
          },
          {
            name: '周二',
            value: 80,
          },
          {
            name: '周三',
            value: 78,
          },
          {
            name: '周四',
            value: 77,
          },
          {
            name: '周五',
            value: 80,
          },
          {
            name: '周六',
            value: 16,
          },
          {
            name: '周日',
            value: 10,
          },
        ],
      },
      currentVideoTime: '',
      currentUpTime: '',

    }
  },
  mounted() {
    // 每秒钟更新时间
    setInterval(this.updateTime, 1000)
    setInterval(this.updateUpTime, 1000)
  },
  methods: {
    showModal() {
      this.showHistoryModal = true
    },
    goBack() {
      window.location.href = 'BigData.vue'
    },
    getCurrentTime() {
      const now = new Date()
      const year = now.getFullYear().toString()
      const month = (now.getMonth() + 1).toString().padStart(2, '0')
      const date = now.getDate().toString().padStart(2, '0')
      // const day = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'][now.getDay()]
      const hours = now.getHours().toString().padStart(2, '0')
      const minutes = now.getMinutes().toString().padStart(2, '0')
      const seconds = now.getSeconds().toString().padStart(2, '0')
      return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`
    },
    getUpCurrentTime() {
      const now = new Date()
      const year = now.getFullYear().toString()
      const month = (now.getMonth() + 1).toString().padStart(2, '0')
      const date = now.getDate().toString().padStart(2, '0')
      const day = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'][now.getDay()]
      return `${year}-${month}-${date} ${day} `
    },
    // 更新时间显示
    updateTime() {
      this.currentVideoTime = this.getCurrentTime()
    },
    updateUpTime() {
      this.currentUpTime = this.getUpCurrentTime()
    },
  },
}
</script>

<style>
.Rbackground {
  background-image: url("../assets/images/ba.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  scale: 0.5;
  position: absolute;
  width: 1980px;
  height: 1200px;
  transform: translate(-50%, -50%);
}

.video {
  background-image: url("../assets/images/video.svg");
  background-size: cover;
  background-repeat: no-repeat;
  margin-left: -580px;
  margin-top: -10px;
  scale: 0.47;
}

.gif1 {
  background-image: url("../assets/images/1.gif");
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 300px;
  margin-left: 50px;
  scale: 0.8;
}

.gif2 {
  background-image: url("../assets/images/2.gif");
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: -700px;
  margin-left: 670px;
  scale: 0.8;
}

.gif3 {
  background-image: url("../assets/images/3.gif");
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: -700px;
  margin-left: 1290px;
  scale: 0.8;
}

.gif4 {
  background-image: url("../assets/images/4.gif");
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: -100px;
  margin-left: 50px;
  scale: 0.8;
}

.gif5 {
  background-image: url("../assets/images/5.gif");
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: -700px;
  margin-left: 670px;
  scale: 0.8;
}

.gif6 {
  background-image: url("../assets/images/6.gif");
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: -700px;
  margin-left: 1290px;
  scale: 0.8;
}
</style>
