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
                  默认管理员账户是admin 管理员拥有控制权限 普通用户有观察权限 </h6>
                <h6 class="introduction">
                   普通用户密码是：{{ ChuanCan*0 }} 0
                </h6>

                <h6 style="color: #000000;font-size: 16px;font-family: 微软雅黑">
                  如需要控制智能柜请输入管理员/超级管理员账户与密码：
                </h6>
                <b-form-input
                    v-model="username"
                    placeholder="用户名"
                >{{ username }}
                </b-form-input>
                <h5>密码请点击以下两个按键输入密码  已输入数字：{{ shiwei*10 + gewei}}</h5>
                <b-form-spinbutton
                    v-model="shiwei"
                    min="0"
                    max="9"
                    wrap
                    vertical
                />
                <b-form-spinbutton
                    v-model="gewei"
                    min="0"
                    max="9"
                    wrap
                    vertical
                />

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

<!--      <b-tab-->
<!--          title="示意图"-->
<!--          style="overflow: hidden;width: 100vh"-->
<!--      >-->
<!--        <div v-if="isAdmin || activeTab === 1 || (username === 'observer' && password === 'observer')">-->
<!--          &lt;!&ndash; Tab 2 内容 &ndash;&gt;-->
<!--          <ZhuangTai />-->
<!--        </div>-->
<!--      </b-tab>-->
<!--      <b-tab title="紧急分闸">-->
<!--        <div v-if="isAdmin || activeTab === 2 || (username === 'observer' && password === 'observer')">-->
<!--          <JinJiFenZha />-->
<!--          &lt;!&ndash; Tab 3 内容 &ndash;&gt;-->
<!--        </div>-->
<!--      </b-tab>-->

      <!--      <b-tab title="多点测温">-->
      <!--        <div v-if="isAdmin || activeTab === 3 || (username === 'observer' && password === 'observer')">-->
      <!--          &lt;!&ndash; Tab 6 内容 &ndash;&gt;-->
      <!--          <DuoDianCeWen />-->
      <!--        </div>-->
      <!--      </b-tab>-->
<!--      <b-tab-->
<!--          v-if="isAdmin || activeTab === 4"-->
<!--          title="设置"-->
<!--      >-->
<!--        <SheZhi />-->

<!--        &lt;!&ndash; Tab 7 内容 &ndash;&gt;-->
<!--      </b-tab>-->
<!--      <b-tab-->
<!--          v-if="isAdmin || activeTab === 5"-->
<!--          title="一键顺控"-->
<!--      >-->
<!--        <YiJianShunKong />-->

<!--        &lt;!&ndash; Tab 8 内容 &ndash;&gt;-->
<!--      </b-tab>-->
<!--      <b-tab-->
<!--          v-if="isAdmin || activeTab === 6"-->
<!--          title="ChartGPT"-->
<!--      >-->
<!--        <ChatAI />-->
<!--        &lt;!&ndash; Tab 8 内容 &ndash;&gt;-->
<!--      </b-tab>-->

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
          title="一键顺控"
          style="overflow: hidden;width: 100vh"
      >
        <SheBeiCanShu />
      </b-tab>

      <b-tab
          v-if="isAdmin === false  || activeTab === 10 || isAdmin=== true  "
          title="微机告警"
          style="overflow: hidden;width: 100vh"
      >
        <Mcp1 />
      </b-tab>


            <b-tab
                v-if="isAdmin === true || activeTab === 11   "
                title="参数与摄像"
                style="overflow: hidden;width: 100vh"
            >
<!--              <RealTimeVideo />-->
              <Mcp2 />
            </b-tab>

      <!--      <b-tab-->
      <!--          v-if="isAdmin || activeTab === 11"-->
      <!--          title="西二配电"-->
      <!--          style="overflow: hidden;width: 100vh"-->
      <!--      >-->
      <!--        <XiPei />-->
      <!--      </b-tab>-->

            <b-tab
                v-if="isAdmin=== false    || activeTab === 12 ||  isAdmin=== true  "
                title="遥测计量"
                style="overflow: hidden;width: 100vh"
            >
              <YaoCeJiLiang />
            </b-tab>

      <!-- 其他管理员权限Tabs -->
    </b-tabs>
  </div>
</template>
<script>
import {
  BRow, BCol, BTab, BTabs, BCard, BButton, BFormInput, BFormSpinbutton,
} from 'bootstrap-vue'

// import DuoDianCeWen from '@/views/DuoDianCeWen.vue'
// import ChatAI from '@/views/ChatAI.vue'
// import ThreeD from '@/views/ThreeD.vue'
// import BigData from '@/views/BigData.vue'
import * as THREE from 'three'
import clouds from 'vanta/src/vanta.clouds'
import YaoCeJiLiang from '@/views/YaoCeJiLiang.vue'
import JinJiFenZha from './JinJiFenZha.vue'
// import ZhuangTai from './ZhuangTai.vue'
import SheZhi from './SheZhi.vue'
// import YiJianShunKong from './YiJianShunKong.vue'
import SheBeiCanShu from './SheBeiCanShu.vue'
import Mcp from './Mcp.vue'
import Mcp1 from '@/views/Mcp1.vue'
import Mcp2 from '@/views/Mcp2.vue'
// import RealTimeVideo from '@/views/RealTimeVideo.vue'
// import XiPei from '@/views/XiPei.vue'

export default {
  name: 'Hello',
  components: {
    Mcp2,
    Mcp1,
    YaoCeJiLiang,
    // XiPei,
    // RealTimeVideo,
    // Mcp,
    SheBeiCanShu,
    // ThreeD,
    // BigData,
    // ChatAI,
    // eslint-disable-next-line vue/no-unused-components
    BFormSpinbutton,
    BRow,
    // eslint-disable-next-line vue/no-unused-components
    BCol,
    BCard,
    // DuoDianCeWen,
    // YiJianShunKong,
    // ZhuangTai,
    // SheZhi,
    BTabs,
    BTab,
    BFormInput,
    BButton,
    // JinJiFenZha,
  },
  data() {
    return {
      username: 'admin',
      adminpass: '',
      password: 99,
      gewei: 0,
      shiwei: 0,
      isAdmin: false,
      activeTab: 0,
      tabs: [
        { title: '用户登录', content: '用户登录' },
        // { title: 'Tab 1', content: '系统状态' },
        // { title: 'Tab 2', content: '紧急分闸' },
        { title: 'Tab 3', content: '电力状态' },
        // { title: 'Tab 4', content: '多点测温' },
        { title: 'Tab 5', content: '设置' },
        // { title: 'Tab 6', content: '一键顺控' },
        { title: 'Tab 7', content: 'Tab 8 内容 (管理员权限)' },
        // { title: 'Tab 8', content: '数据分析' },
        { title: 'Tab 9', content: '微机告警' },
        { title: 'Tab 10', content: '一键顺控' },
        { title: 'Tab 11', content: '参数整定' },
        { title: 'Tab 12', content: '遥测计量' },
        // { title: 'Tab 13', content: '西二配电' },
        { title: 'Tab 14', content: '微机参数' },
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
      // console.log('adminpass==', this.adminpass)
      // 模拟验证用户名和密码
      let passx = this.shiwei * 10 + this.gewei
      if (this.username === 'admin' && passx === this.adminpass) {
        // console.log('here', this.adminpass)
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
