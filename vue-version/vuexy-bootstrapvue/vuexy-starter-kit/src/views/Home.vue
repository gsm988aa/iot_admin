<template>

  <!--  <b-row>-->
  <!--    <b-col cols="12">-->

  <!--      <b-tabs-->
  <!--        pills-->
  <!--        card-->
  <!--        vertical-->
  <!--      >-->
  <!--        <b-tab-->
  <!--          title="紧急分闸"-->
  <!--          active-->
  <!--        >-->
  <!--          <b-card-text>-->
  <!--            <JinJiFenZha />-->
  <!--          </b-card-text>-->
  <!--        </b-tab>-->

  <!--        <b-tab title="多点测温">-->
  <!--          <b-card-text>-->
  <!--            <DuoDianCeWen />-->
  <!--          </b-card-text>-->
  <!--        </b-tab>-->

  <!--        <b-tab title="一键控制">-->
  <!--          <b-card-text>-->
  <!--            <YiJianShunKong />-->
  <!--          </b-card-text>-->
  <!--        </b-tab>-->

  <!--        <b-tab title="状态">-->
  <!--          <b-card-text>-->
  <!--            <ZhuangTai />-->
  <!--          </b-card-text>-->
  <!--        </b-tab>-->

  <!--        <b-tab title="设置">-->
  <!--          <b-card-text>-->
  <!--            <SheZhi />-->
  <!--          </b-card-text>-->
  <!--        </b-tab>-->

  <!--      </b-tabs>-->

  <!--    </b-col>-->
  <!--  </b-row>-->

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
          <b-card>

            <h6>默认管理员账户是admin 管理员拥有控制权限 普通用户有观察权限 超级管理员有邮件预警 示意图权限</h6>
            <h6 class="introduction">
              这是一段介绍文字。{{ ChuanCan }}
            </h6>

            <br>
            <h6>如需要控制智能柜请输入管理员/超级管理员账户与密码：</h6>
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
          </b-card>

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

      <b-tab title="示意图">
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

      <b-tab title="多点测温">
        <div v-if="isAdmin || activeTab === 3 || (username === 'observer' && password === 'observer')">
          <!-- Tab 6 内容 -->
          <DuoDianCeWen />
        </div>
      </b-tab>
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
      <!-- 其他管理员权限Tabs -->
    </b-tabs>
  </div>
</template>
<script>
import {
  BRow, BCol, BTab, BTabs, BCard, BCardText, BButton, BFormInput,
} from 'bootstrap-vue'

import DuoDianCeWen from '@/views/DuoDianCeWen.vue'
import ChatAI from '@/views/ChatAI.vue'
import JinJiFenZha from './JinJiFenZha.vue'
import ZhuangTai from './ZhuangTai.vue'
import SheZhi from './SheZhi.vue'
import YiJianShunKong from './YiJianShunKong.vue'

export default {
  components: {
    ChatAI,
    BRow,
    BCol,
    BCard,
    DuoDianCeWen,
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
        { title: 'Tab 4', content: '多点测温' },
        { title: 'Tab 5', content: '设置' },
        { title: 'Tab 6', content: '一键顺控' },
        { title: 'Tab 7', content: 'Tab 8 内容 (管理员权限)' },
      ],
    }
  },
  computed: {
    ChuanCan() {
      this.adminpass = this.$store.getters.getChuanCan
      return this.$store.getters.getChuanCan
    },
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
  color: #fdfdfd;
}

</style>
