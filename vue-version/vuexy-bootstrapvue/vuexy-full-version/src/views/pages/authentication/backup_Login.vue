<template>

  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">

      <!-- Brand logo-->
      <b-link class="brand-logo" >
        <vuexy-logo  />
        <h2 class="brand-text text-primary ml-1" >
          智能柜
        </h2>
      </b-link>
      <!-- /Brand logo-->

      <!-- Left Text-->
      <b-col
          lg="4"
          class="d-none d-lg-flex align-items-center p-5"
      >
        <div class="w-100 d-lg-flex align-items-center justify-content-center px-5">
          <b-img
              fluid
              :src="imgUrl"
              alt="Login V2"
          />
        </div>
      </b-col>
      <!-- /Left Text-->

      <!-- Login-->
      <b-col
          lg="8"
          class="d-flex align-items-center auth-bg px-2 p-lg-5"
      >
        <b-col
            sm="8"
            md="6"
            lg="12"
            class="px-xl-2 mx-auto"
        >
          <b-card-title
              class="mb-1 font-weight-bold"
              title-tag="h2"
          >
            欢迎登陆 👋
          </b-card-title>
          <!--          <b-card-text class="mb-2">-->
          <!--&lt;!&ndash;            Please sign-in to your account and start the adventure&ndash;&gt;-->
          <!--          请输入您的账号-->
          <!--          </b-card-text>-->

          <!--          <b-alert-->
          <!--            variant="primary"-->
          <!--            show-->
          <!--          >-->
          <!--            <div class="alert-body font-small-2">-->
          <!--              <p>-->
          <!--                <small class="mr-50"><span class="font-weight-bold">Admin:</span> admin@demo.com | admin</small>-->
          <!--              </p>-->
          <!--              <p>-->
          <!--                <small class="mr-50"><span class="font-weight-bold">Client:</span> client@demo.com | client</small>-->
          <!--              </p>-->
          <!--            </div>-->
          <!--            <feather-icon-->
          <!--              v-b-tooltip.hover.left="'输入您的账号'"-->
          <!--              icon="HelpCircleIcon"-->
          <!--              size="18"-->
          <!--              class="position-absolute"-->
          <!--              style="top: 10px; right: 10px;"-->
          <!--            />-->
          <!--          </b-alert>-->

          <!-- form -->
          <validation-observer
              ref="loginForm"
              #default="{invalid}"
          >
            <b-form
                class="auth-login-form mt-2"
                @submit.prevent="login"
            >
              <!-- email -->
              <b-form-group
                  label="用户名/邮箱"
                  label-for="login-email"
                  class="form-label"
              >
                <validation-provider
                    #default="{ errors }"
                    name="Email"
                    vid="email"
                    rules="required|email"
                >
                  <b-form-input
                      id="login-email"
                      v-model="userEmail"
                      :state="errors.length > 0 ? false:null"
                      name="login-email"
                      placeholder="john@example.com"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
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
                <b-form-radio-group id="radio-group-2" v-model="selected" class="d-flex" >
                  <b-form-radio value="admin" @change="handleRadioChange">管理员</b-form-radio>
                  <b-form-radio value="observer" @change="handleRadioChange">观察员</b-form-radio>
                </b-form-radio-group>

              </div>


              <!-- submit buttons -->
              <b-button
                  type="submit"
                  variant="primary"
                  block
                  :disabled="invalid"
              >
                登录
              </b-button>
            </b-form>
          </validation-observer>

          <b-card-text class="text-center mt-2">
            <!--            <span>New on our platform? </span>-->
            <b-link :to="{name:'auth-register'}">
              <span>&nbsp;创建新账户</span>
            </b-link>
          </b-card-text>

          <!-- divider -->
          <!--          <div class="divider my-2">-->
          <!--            <div class="divider-text">-->
          <!--&lt;!&ndash;              或者or&ndash;&gt;-->
          <!--            </div>-->
          <!--          </div>-->

          <!-- social buttons -->
          <!--          <div class="auth-footer-btn d-flex justify-content-center">-->
          <!--            <b-button-->
          <!--              variant="facebook"-->
          <!--              href="javascript:void(0)"-->
          <!--            >-->
          <!--              <feather-icon icon="FacebookIcon" />-->
          <!--            </b-button>-->
          <!--            <b-button-->
          <!--              variant="twitter"-->
          <!--              href="javascript:void(0)"-->
          <!--            >-->
          <!--              <feather-icon icon="TwitterIcon" />-->
          <!--            </b-button>-->
          <!--            <b-button-->
          <!--              variant="google"-->
          <!--              href="javascript:void(0)"-->
          <!--            >-->
          <!--              <feather-icon icon="MailIcon" />-->
          <!--            </b-button>-->
          <!--            <b-button-->
          <!--              variant="github"-->
          <!--              href="javascript:void(0)"-->
          <!--            >-->
          <!--              <feather-icon icon="GithubIcon" />-->
          <!--            </b-button>-->
          <!--          </div>-->
        </b-col>
      </b-col>
      <!-- /Login-->
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
import useJwt from '@/auth/jwt/useJwt'
import { required, email } from '@validations'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import store from '@/store/index'
import { getHomeRouteForLoggedInUser } from '@/auth/utils'

import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

import axios from "axios";


// import 'bootstrap/dist/css/bootstrap.css'

export default {
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

      selected:"admin",//默认选择管理员
      loggedIn: false,

      username: '',
      password: '',
      rolegroup:2,
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
  // mounted() {
  //   const router = useRouter();
  //   // 其他登录逻辑
  //
  //   // 登录成功后跳转到指定页面
  //   router.push('/dashboard');
  // },

  methods: {

    handleRadioChange() {
      if (this.selected === "admin") {
        // 管理者权限
        this.allowedRoutes = [
          "break",
          "shortcuts",
          "#device infos",
          "#user infos",
          "emergency opening",
          "mcp",
          "user settings",
          "other settings",
          "chat"
        ];
      } else if (this.selected === "observer") {
        // 观察者权限
        this.allowedRoutes = ["break", "deviceinfos", "chat"];
      }
    },

    async login() {
      try {

        const response = await axios.post('http://localhost:10866/login', {
          username: this.username,
          password: this.password,
          rolegroup:this.rolegroup
        })
        const {token} = response.data
        localStorage.setItem('token', token)
        this.loggedIn = true
        // this.username = ''
        // this.password = ''
        this.getUsers()


        this.$router.replace(getHomeRouteForLoggedInUser(rolegroup))
            .then(() => {
              this.$toast({
                component: ToastificationContent,
                position: 'top-right',
                props: {
                  // title: `Welcome ${userData.fullName || userData.username}`,
                  icon: 'CoffeeIcon',
                  variant: 'success',
                  text: `You have successfully logged in as ${userData.role}. Now you can start to explore!`,
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
  },

}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';

//管理员和观察员的单选按钮样式
.radio-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4vh; /* 可根据需要调整高度 */

}


</style>
