<template>
  <div>
    <b-tabs v-model="activeTab" vertical>
      <b-tab title="用户">
        <div v-if="isAdmin || activeTab === 0">
          <!-- Tab 1 内容 -->
          <h6>默认管理员账户是admin默认管理员密码是admin 管理员拥有控制权限 普通用户有观察权限</h6>
          <h6 class="introduction">这是一段介绍文字。{{ChuanCan}}</h6>
          <h6>请在设置中修改密码</h6>
          <b-form-input
              v-model="username"
              placeholder="用户名"
          />
          <b-form-input
              v-model="password"
              type="password"
              placeholder="密码"
          />
          <b-button @click="login">
            登录
          </b-button>

        </div>
      </b-tab>
      <b-tab title="系统状态">
        <div v-if="isAdmin || activeTab === 1">
          <!-- Tab 2 内容 -->
<!--          <ZhuangTai/>-->
        </div>
      </b-tab>
      <b-tab title="紧急分闸">
        <div v-if="isAdmin || activeTab === 2">
          <SweetAlertTypes/>
          <!-- Tab 3 内容 -->
        </div>
      </b-tab>
<!--      <b-tab title="电力状态">-->
<!--        <div v-if="isAdmin || activeTab === 3">-->
<!--          <YiJianShunKong/>-->
<!--          &lt;!&ndash; Tab 3 内容 &ndash;&gt;-->
<!--        </div>-->
<!--      </b-tab>-->
      <!-- 其他Tabs -->
      <b-tab title="多点测温">
        <div v-if="isAdmin || activeTab === 4">
          <!-- Tab 6 内容 -->
          <DuoDianCeWen/>
        </div>
      </b-tab>
      <b-tab
        v-if="isAdmin || activeTab === 5"
        title="设置"
      >
        <SheZhi />

        <!-- Tab 7 内容 -->
      </b-tab>
      <b-tab
         v-if="isAdmin || activeTab === 6"
        title="一键顺控"
      >
        <YiJianShunKong />
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

import SweetAlertTypes  from '@/views/SweetAlertTypes.vue'
import JinJiFenZha from './JinJiFenZha.vue'
import ZhuangTai from './ZhuangTai.vue'
import SheZhi from './SheZhi.vue'
import ChatAI from './ChatAI.vue'
import YiJianShunKong from './YiJianShunKong.vue'

import DuoDianCeWen from '@/views/DuoDianCeWen.vue'



export default {
  components: {
    DuoDianCeWen,
    YiJianShunKong,
    ZhuangTai,
    SheZhi,
    BTabs,
    BTab,
    BFormInput,
    BButton,
    SweetAlertTypes,
  },
  data() {
    return {
      username: '',
      adminpass: '',
      password: '',
      isAdmin: false,
      activeTab: 0,
      tabs: [
        { title: '用户登录', content: '用户登录' },
        { title: 'Tab 2', content: '系统状态' },
        { title: 'Tab 3', content: '紧急分闸' },
        { title: 'Tab 4', content: '电力状态' },
        { title: 'Tab 5', content: '多点测温' },
        { title: 'Tab 6', content: '设置' },
        { title: 'Tab 7', content: '一键顺控' },
        { title: 'Tab 8', content: 'Tab 8 内容 (管理员权限)' },
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
      } else if (this.username === 'observer' && this.password === 'observer') {
        this.isAdmin = false
      } else {
        console.log(this.password)
        alert("管理员密码不正确")
        // 用户名或密码不正确
        // 可以显示错误信息给用户
      }
    },
  },
}
</script>

<style scoped>
.introduction  {
  color: #f8f8f8;
}

</style>

