<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">


      <b-link class="brand-logo" >
        <vuexy-logo  />
        <h2 class="brand-text text-primary ml-1" >
          智能柜
        </h2>
      </b-link>

      <!--图片-->
      <b-col
          lg="9"
          class="d-none d-lg-flex align-items-center p-5 " style="background-color: #F5F5F5"
      >
        <div class="w-100 d-lg-flex align-items-center justify-content-center px-5">
          <b-img
              fluid
              :src="imgUrl"
              alt="Login V2"
          />
        </div>
      </b-col>

      <!-- 登录表单 -->
      <b-col lg="3">
        <div class="form-container2" style="height: 100vh;margin: 0; display: flex; align-items: center; justify-content: center;" >
          <b-col lg="12" class="d-flex align-items-center auth-bg px-2 p-lg-5">
            <b-col md="12" lg="12" class="px-xl-2 mx-auto">
              <b-card-title
                  class="mb-1 font-weight-bold"
                  title-tag="h2"
              >
                欢迎登陆 👋
              </b-card-title>


              <!--  整理了布局    -->
              <validation-observer
                  ref="loginForm"
                  #default="{invalid}"
              >
                <!--表单内容-->
                <div v-if="!loggedIn" class="container">
                  <b-form @submit.prevent="login" class="my-4">
                    <b-form-group
                        label="用户名"
                        label-for="login-email"
                        class="form-label"
                    >
                      <validation-provider
                          #default="{ errors }"
                          name="username"
                          vid="username"
                          rules="required"
                      >
                        <b-form-input
                            id="username"
                            v-model="username"
                            :state="errors.length > 0 ? false:null"
                            class="form-control"
                        />
                        <small v-if="errors.length > 0" class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                    </b-form-group>


                    <!-- forgot password -->
                    <b-form-group>
                      <div class="d-flex justify-content-between">
                        <label for="login-password">密码</label>
                        <b-link :to="{name:'auth-forgot-password'}">
                          <small>Forgot Password?</small>
                        </b-link>
                      </div>
                      <validation-provider
                          #default="{ errors }"
                          name="Password"
                          vid="password"
                          rules="required"
                      >
                        <b-input-group
                            class="input-group-merge"
                            :class="errors.length > 0 ? 'is-invalid':null"
                        >
                          <b-form-input
                              id="login-password"
                              v-model="password"
                              :state="errors.length > 0 ? false:null"
                              class="form-control-merge"
                              :type="passwordFieldType"
                              name="login-password"
                              placeholder="Password"
                          />
                          <b-input-group-append is-text>
                            <feather-icon
                                class="cursor-pointer"
                                :icon="passwordToggleIcon"
                                @click="togglePasswordVisibility"
                            />
                          </b-input-group-append>
                        </b-input-group>
                        <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                    </b-form-group>

                    <!-- checkbox -->
                    <b-form-group>
                      <b-form-checkbox
                          id="remember-me"
                          v-model="status"
                          name="checkbox-1"
                      >
                        记住密码
                      </b-form-checkbox>
                    </b-form-group>

                    <!--添加radio单选框-->
                    <div class="radio-wrapper">
                      <span>您是：</span>
                      <b-form-radio-group id="radio-group-2"  class="d-flex" >
                        <b-form-radio value="admin">管理员</b-form-radio>
                        <b-form-radio value="observer" >观察员</b-form-radio>
                      </b-form-radio-group>
                    </div>

                    <!-- submit buttons -->
                    <b-button
                        type="submit"
                        variant="primary"
                        block
                        :disabled="invalid"
                        @click="login"
                    >
                      登录
                    </b-button>
                  </b-form>
                </div>


                <!--      欢迎 选择退出登录-->
                <div v-else>
                  <h2>Welcome, {{ username }}!</h2>
                  <button @click="logout">Logout</button>
                  <div v-if="users">
                    <h3>Users</h3>
                    <ul>
                      <li v-for="user in users" :key="user.id">{{ user.username }}</li>
                    </ul>
                  </div>
                </div>
              </validation-observer>

              <b-card-text class="text-center mt-2">
                <!--            <span>New on our platform? </span>-->
                <b-link :to="{name:'auth-register'}">
                  <span>&nbsp;创建新账户</span>
                </b-link>
              </b-card-text>
            </b-col>
          </b-col>

        </div>
      </b-col>


      <!--   在小屏幕（sm）上，该列将占据x个网格单元，即占据整个父容器的宽度的 x%     -->
      <!--   在中等屏幕（md）上，该列将占据x个网格单元，即占据整个父容器的宽度的 x%-->
      <!--   在大屏幕（lg）上，该列将占据x个网格单元，即占据整个父容器的宽度的 x%-->



    </b-row>

  </div>
</template>

<script>
/* eslint-disable global-require */
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import {
  BRow, BCol, BLink, BFormGroup, BFormInput, BInputGroupAppend, BInputGroup, BFormCheckbox, BCardText, BCardTitle, BImg, BForm, BButton, BAlert, VBTooltip, BFormCheckboxGroup,BFormRadioGroup,BFormRadio,
} from 'bootstrap-vue'
// import useJwt from '@/auth/jwt/useJwt'
import { required, email } from '@validations'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import store from '@/store/index'
import { getHomeRouteForLoggedInUser } from '@/auth/utils'

import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'


import axios from "axios";
// import images from "swiper/src/components/core/images";


export default {
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sideImg = require('@/assets/images/pages/login-v2-dark.svg')
        return this.sideImg
      }
      return this.sideImg
    },
  },
  directives: {
    'b-tooltip': VBTooltip,
  },
  components: {
    BRow,
    BCol,
    BLink,
    BFormGroup,
    BFormInput,
    BInputGroupAppend,
    BInputGroup,
    BFormCheckbox,
    BFormCheckboxGroup,
    BFormRadioGroup,
    BFormRadio,
    BCardText,
    BCardTitle,
    BImg,
    BForm,
    BButton,
    BAlert,
    VuexyLogo,
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility],


  data() {
    return {
      loggedIn: false,
      username: 'admin',
      password: '',
      rolegroup: 2,

      users: [],

      options: [
        { text: '管理员', value: 'admin' },
        { text: '观察员', value: 'observer' },
      ],

      status: '',
      userEmail: 'admin@demo.com',

      sideImg: require('@/assets/images/pages/login-v2.svg'),

      // validation rules
      required,
      email,
    }
  },

  methods: {
    async login() {
      try {

        const response = await axios.post('http://localhost:10866/login', {
          username: this.username,
          password: this.password,
          rolegroup:this.rolegroup
        })
        const {token} = response.data
        this.rolegroup = response.data.rolegroup
        localStorage.setItem('token', token)
        this.loggedIn = true
        // this.username = ''
        // this.password = ''
        await this.getUsers()
        if (this.rolegroup === 0) {
          // rolegroup为0时跳转到apps-shortcuts页面
          await this.$router.push({name: 'apps-shortcuts-shortcuts.vue'})
        }
        if (this.rolegroup === 1){

        }

        this.$router.replace(getHomeRouteForLoggedInUser(this.rolegroup))
            .then(() => {

              let rolegroup = this.rolegroup === 0 ? {role: '管理员'} : {role: '观察员'}

              this.$toast({
                component: ToastificationContent,
                position: 'top-right',
                props: {
                  // title: `Welcome ${userData.fullName || userData.username}`,
                  icon: 'CoffeeIcon',
                  variant: 'success',
                  text: `You have successfully logged in as ${rolegroup.role}. Now you can start to explore!`,
                },
              })
            })
      } catch (error) {
        console.error(error)
      }
    },
    async logout() {
      localStorage.removeItem('token')
      this.loggedIn = false
      this.users = null
    },
    async getUsers() {
      try {
        const token = localStorage.getItem('token')
        const response = await axios.get('http://localhost:10866/users', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        this.users = response.data

      } catch (error) {
        console.error(error)
      }
    }
  },

  created() {
    const token = localStorage.getItem('token')
    if (token) {
      this.loggedIn = true
      this.getUsers()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@core/scss/vue/pages/page-auth.scss';

//管理员和观察员的单选按钮样式
.radio-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4vh; /* 可根据需要调整高度 */

}


@media (min-width: 992px) {
  .auth-inner {
    display: flex;
    justify-content: space-between;
  }

  .auth-inner > .col-lg-4 {
    flex-basis: 75%;
  }

  .auth-inner > .col-lg-8 {
    flex-basis: 25%;
  }
}

</style>
