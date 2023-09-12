<template>
  <div>
    <b-tabs v-model="activeTab">
      <b-tab title="Tab 1">
        <div v-if="isAdmin || activeTab === 0">
          <!-- Tab 1 内容 -->
          <h3>默认管理员账户是admin默认管理员密码是admin 管理员拥有控制权限 普通用户有观察权限</h3>
          <p class="introduction">这是一段介绍文字。{{ChuanCan}}</p>
          <h3>请在设置中修改密码</h3>
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
      <b-tab title="Tab 2">
        <div v-if="isAdmin || activeTab === 1">
          <!-- Tab 2 内容 -->
        </div>
      </b-tab>
      <b-tab title="Tab 3">
        <div v-if="isAdmin || activeTab === 2">
          <!-- Tab 3 内容 -->
        </div>
      </b-tab>
      <!-- 其他Tabs -->
      <b-tab title="Tab 6">
        <div v-if="isAdmin || activeTab === 5">
          <!-- Tab 6 内容 -->
        </div>
      </b-tab>
      <b-tab
        v-if="isAdmin"
        title="Tab 7"
      >
        <SheZhi/>

        <!-- Tab 7 内容 -->
      </b-tab>
      <b-tab
        v-if="isAdmin"
        title="Tab 8"
      >
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
import DuoDianCeWen from './DuoDianCeWen.vue'
import JinJiFenZha from './JinJiFenZha.vue'
import ZhuangTai from './ZhuangTai.vue'
import SheZhi from './SheZhi.vue'
import ChatAI from './ChatAI.vue'
import YiJianShunKong from './YiJianShunKong.vue'


export default {
  components: {
    SheZhi,
    BTabs,
    BTab,
    BFormInput,
    BButton,
  },
  data() {
    return {
      username: '',
      adminpass: '',
      password: '',
      isAdmin: false,
      activeTab: 0,
      tabs: [
        { title: 'Tab 1', content: 'Tab 1 内容' },
        { title: 'Tab 2', content: 'Tab 2 内容' },
        { title: 'Tab 3', content: 'Tab 3 内容' },
        { title: 'Tab 4', content: 'Tab 4 内容' },
        { title: 'Tab 5', content: 'Tab 5 内容' },
        { title: 'Tab 6', content: 'Tab 6 内容' },
        { title: 'Tab 7', content: 'Tab 7 内容 (管理员权限)' },
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

