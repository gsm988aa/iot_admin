<template>
  <div>
    <b-tabs
        v-model="activeTab"
        vertical
        pills
        card
    >
      <b-tab title="用户">
        <div v-if="isAdmin || activeTab === 0">
          <!-- Tab 1 内容 -->
          <div>
            <!-- vanta -->
            <div
                ref="vantaRef"
                style="width:100%;height:100vh;position: relative;"
            />

            <div class="my_title">
              <b-card style="background-color: rgba(232,232,232,20%); display: flex;">
                <h6 class="home-text">
                  默认管理员账户是admin 管理员拥有控制权限 普通用户有观察权限 超级管理员有邮件预警 示意图权限</h6>
                <h6 class="introduction">
                  这是一段介绍文字:{{ ChuanCan }}
                </h6>
                <br>
                <h6 style="color: #000000;font-size: 16px;font-family: 微软雅黑">
                  如需要控制智能柜请输入管理员/超级管理员账户与密码：
                </h6>
                <b-form-input
                    v-model="username"
                    placeholder="用户名"
                >{{ username }}
                </b-form-input>

                <b-form-input
                    v-model="password"
                    type="password"
                    placeholder="密码"
                >
                  {{ password }}
                </b-form-input>
                <b-row style="align-items: center;justify-content: center">
                  <b-button
                      variant="danger"
                      @click="login"
                  >
                    登录
                  </b-button>
                  &nbsp;
                  &nbsp;
                  &nbsp;
                  <b-button
                      variant="primary"
                      @click="logout"
                  >
                    注销
                  </b-button>
                </b-row>

              </b-card>
            </div>
          </div>

          <b-modal
              ref="loginModal"
              title="提示"
              ok-only
              :ok-title="'确定'"
              hide-backdrop
              content-class="shadow"
          >
            恭喜！您已成功登录！

          </b-modal>
        </div>
      </b-tab>

      <b-tab
          title="示意图"
          style="overflow: hidden;width: 100vh"
      >
        <div v-if="isAdmin || activeTab === 1 || (username === 'observer' && password === 'observer')">
          <!-- Tab 2 内容 -->
          <ZhuangTai />
        </div>
      </b-tab>
      <b-tab title="紧急分闸">
        <div v-if="isAdmin || activeTab === 2 || (username === 'observer' && password === 'observer')">
          <JinJiFenZha />
          <!-- Tab 3 内容 -->
        </div>
      </b-tab>

      <!--      <b-tab title="多点测温">-->
      <!--        <div v-if="isAdmin || activeTab === 3 || (username === 'observer' && password === 'observer')">-->
      <!--          &lt;!&ndash; Tab 6 内容 &ndash;&gt;-->
      <!--          <DuoDianCeWen />-->
      <!--        </div>-->
      <!--      </b-tab>-->
      <b-tab
          v-if="isAdmin || activeTab === 4"
          title="设置"
      >
        <SheZhi />

        <!-- Tab 7 内容 -->
      </b-tab>
      <b-tab
          v-if="isAdmin || activeTab === 5"
          title="一键顺控"
      >
        <YiJianShunKong />

        <!-- Tab 8 内容 -->
      </b-tab>
      <b-tab
          v-if="isAdmin || activeTab === 6"
          title="ChartGPT"
      >
        <ChatAI />
        <!-- Tab 8 内容 -->
      </b-tab>

      <!-- Tab 9 内容 -->
      <!--      <b-tab-->
      <!--        v-if="isAdmin || activeTab === 7"-->
      <!--        title="数据分析"-->
      <!--      >-->
      <!--        <BigData />-->
      <!--        &lt;!&ndash; Tab 9 内容 &ndash;&gt;-->
      <!--      </b-tab>-->

      <!--      &lt;!&ndash; Tab 10 内容 &ndash;&gt;-->
      <!--      <b-tab-->
      <!--        v-if="isAdmin || activeTab === 8"-->
      <!--        title="3D模型图"-->
      <!--        style="overflow: hidden;width: 100vh"-->
      <!--      >-->
      <!--        <ThreeD />-->
      <!--        &lt;!&ndash; Tab 10 内容 &ndash;&gt;-->
      <!--      </b-tab>-->

      <b-tab
          v-if="isAdmin || activeTab === 9"
          title="设备参数"
          style="overflow: hidden;width: 100vh"
      >
        <SheBeiCanShu />
      </b-tab>

      <b-tab
          v-if="isAdmin || activeTab === 10"
          title="微机综保"
          style="overflow: hidden;width: 100vh"
      >
        <Mcp />
      </b-tab>

      <!--      <b-tab-->
      <!--          v-if="isAdmin || activeTab === 11"-->
      <!--          title="实时监控"-->
      <!--          style="overflow: hidden;width: 100vh"-->
      <!--      >-->
      <!--        <RealTimeVideo />-->
      <!--      </b-tab>-->

      <!--      <b-tab-->
      <!--          v-if="isAdmin || activeTab === 11"-->
      <!--          title="西二配电"-->
      <!--          style="overflow: hidden;width: 100vh"-->
      <!--      >-->
      <!--        <XiPei />-->
      <!--      </b-tab>-->

      <!-- 其他管理员权限Tabs -->
    </b-tabs>
  </div>
</template>
<script>
import {
  BRow, BCol, BTab, BTabs, BCard, BButton, BFormInput,
} from 'bootstrap-vue'

// import DuoDianCeWen from '@/views/DuoDianCeWen.vue'
import ChatAI from '@/views/ChatAI.vue'
// import ThreeD from '@/views/ThreeD.vue'
// import BigData from '@/views/BigData.vue'
import * as THREE from 'three'
import clouds from 'vanta/src/vanta.clouds'
import JinJiFenZha from './JinJiFenZha.vue'
import ZhuangTai from './ZhuangTai.vue'
import SheZhi from './SheZhi.vue'
import YiJianShunKong from './YiJianShunKong.vue'
import SheBeiCanShu from './SheBeiCanShu.vue'
import Mcp from './Mcp.vue'
// import RealTimeVideo from '@/views/RealTimeVideo.vue'
// import XiPei from '@/views/XiPei.vue'

export default {
  name: 'Hello',
  components: {
    // XiPei,
    // RealTimeVideo,
    Mcp,
    SheBeiCanShu,
    // ThreeD,
    // BigData,
    ChatAI,
    BRow,
    BCol,
    BCard,
    // DuoDianCeWen,
    YiJianShunKong,
    ZhuangTai,
    SheZhi,
    BTabs,
    BTab,
    BFormInput,
    BButton,
    JinJiFenZha,
  },
  data() {
    return {
      username: 'admin',
      adminpass: '',
      password: 'admin',
      isAdmin: false,
      activeTab: 0,
      tabs: [
        { title: '用户登录', content: '用户登录' },
        { title: 'Tab 1', content: '系统状态' },
        { title: 'Tab 2', content: '紧急分闸' },
        { title: 'Tab 3', content: '电力状态' },
        // { title: 'Tab 4', content: '多点测温' },
        { title: 'Tab 5', content: '设置' },
        { title: 'Tab 6', content: '一键顺控' },
        { title: 'Tab 7', content: 'Tab 8 内容 (管理员权限)' },
        // { title: 'Tab 8', content: '数据分析' },
        // { title: 'Tab 9', content: '3D模型图' },
        { title: 'Tab 10', content: '设备参数' },
        { title: 'Tab 11', content: '微机综保' },
        // { title: 'Tab 12', content: '实时监控' },
        // { title: 'Tab 13', content: '西二配电' },
      ],
    }
  },
  computed: {
    ChuanCan() {
      this.adminpass = this.$store.getters.getChuanCan
      return this.$store.getters.getChuanCan
    },
  },
  mounted() {
    this.vantaEffect = clouds({
      el: this.$refs.vantaRef,
      THREE,
    })
  },
  beforeDestroy() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy()
    }
  },
  methods: {
    login() {
      console.log('adminpass==', this.adminpass)
      // 模拟验证用户名和密码
      if (this.username === 'admin' && this.password === this.adminpass) {
        console.log('here', this.adminpass)
        this.isAdmin = true
        this.$refs.loginModal.show()
      } else if (this.username === 'observer' && this.password === 'observer') {
        this.isAdmin = false
        // 显示登录成功的模态框
        this.$refs.loginModal.show()
      } else {
        console.log(this.password)
        alert('管理员密码不正确')
        // 用户名或密码不正确
        // 可以显示错误信息给用户
      }
    },
    logout() {
      this.isAdmin = false
    },
  },
}
</script>

<style scoped>
.introduction  {
  color: #000000;
}
.my_title{
  z-index: 999;
  position: absolute;
  top: 15%;
  left: 12%;
  color: aquamarine;
  font-size: 100px;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
}
.home-text{
  color: #000000;
}

</style>
