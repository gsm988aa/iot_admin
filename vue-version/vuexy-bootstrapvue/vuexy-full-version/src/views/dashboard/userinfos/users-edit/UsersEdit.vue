<template>
  <div>

    <!-- Media -->
<!--    <b-media class="mb-2">-->
<!--      <template #aside>-->
<!--        <b-avatar-->
<!--            ref="previewEl"-->
<!--            :src="userData.avatar"-->
<!--            :text="avatarText(userData.fullName)"-->
<!--            :variant="`light-${resolveUserRoleVariant(userData.role)}`"-->
<!--            size="90px"-->
<!--            rounded-->
<!--        />-->
<!--      </template>-->
<!--      <h4 class="mb-1">-->
<!--        {{ userData.fullName }}-->
<!--      </h4>-->
<!--      <div class="d-flex flex-wrap">-->
<!--        <b-button-->
<!--            variant="primary"-->
<!--            @click="$refs.refInputEl.click()"-->
<!--        >-->
<!--          <input-->
<!--              ref="refInputEl"-->
<!--              type="file"-->
<!--              class="d-none"-->
<!--              @input="inputImageRenderer"-->
<!--          >-->
<!--          <span class="d-none d-sm-inline">Update</span>-->
<!--          <feather-icon-->
<!--              icon="EditIcon"-->
<!--              class="d-inline d-sm-none"-->
<!--          />-->
<!--        </b-button>-->
<!--        <b-button-->
<!--            variant="outline-secondary"-->
<!--            class="ml-1"-->
<!--        >-->
<!--          <span class="d-none d-sm-inline">Remove</span>-->
<!--          <feather-icon-->
<!--              icon="TrashIcon"-->
<!--              class="d-inline d-sm-none"-->
<!--          />-->
<!--        </b-button>-->
<!--      </div>-->
<!--    </b-media>-->

    <!-- User Info: Input Fields -->
    <b-form>
      <b-row>

<!--        &lt;!&ndash; Field: Username &ndash;&gt;-->
<!--        <b-col-->
<!--            cols="12"-->
<!--            md="4"-->
<!--        >-->
<!--          <b-form-group-->
<!--              label="Username"-->
<!--              label-for="username"-->
<!--          >-->
<!--            <b-form-input-->
<!--                id="username"-->
<!--                v-model="userData.username"-->
<!--            />-->
<!--          </b-form-group>-->
<!--        </b-col>-->

<!--        &lt;!&ndash; Field: Full Name &ndash;&gt;-->
<!--        <b-col-->
<!--            cols="12"-->
<!--            md="4"-->
<!--        >-->
<!--          <b-form-group-->
<!--              label="Name"-->
<!--              label-for="full-name"-->
<!--          >-->
<!--            <b-form-input-->
<!--                id="full-name"-->
<!--                v-model="userData.fullName"-->
<!--            />-->
<!--          </b-form-group>-->
<!--        </b-col>-->

<!--        &lt;!&ndash; Field: Email &ndash;&gt;-->
<!--        <b-col-->
<!--            cols="12"-->
<!--            md="4"-->
<!--        >-->
<!--          <b-form-group-->
<!--              label="Email"-->
<!--              label-for="email"-->
<!--          >-->
<!--            <b-form-input-->
<!--                id="email"-->
<!--                v-model="userData.email"-->
<!--                type="email"-->
<!--            />-->
<!--          </b-form-group>-->
<!--        </b-col>-->

<!--        &lt;!&ndash; Field: Status &ndash;&gt;-->
<!--        <b-col-->
<!--            cols="12"-->
<!--            md="4"-->
<!--        >-->
<!--          <b-form-group-->
<!--              label="Status"-->
<!--              label-for="user-status"-->
<!--          >-->
<!--            <v-select-->
<!--                v-model="userData.status"-->
<!--                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"-->
<!--                :options="statusOptions"-->
<!--                :reduce="val => val.value"-->
<!--                :clearable="false"-->
<!--                input-id="user-status"-->
<!--            />-->
<!--          </b-form-group>-->
<!--        </b-col>-->

        <!-- Field: Role -->
        <b-col
            cols="12"
            md="4"
        >
<!--          <b-form-group-->
<!--              label="User Role"-->
<!--              label-for="user-role"-->
<!--          >-->
<!--            <v-select-->
<!--                v-model="userData.role"-->
<!--                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"-->
<!--                :options="roleOptions"-->
<!--                :reduce="val => val.value"-->
<!--                :clearable="false"-->
<!--                input-id="user-role"-->
<!--            />-->
<!--          </b-form-group>-->
        </b-col>

        <!-- Field: Email -->
        <b-col
            cols="12"
            md="4"
        >
<!--          <b-form-group-->
<!--              label="Company"-->
<!--              label-for="company"-->
<!--          >-->
<!--            <b-form-input-->
<!--                id="company"-->
<!--                v-model="userData.company"-->
<!--            />-->
<!--          </b-form-group>-->
        </b-col>

      </b-row>
    </b-form>

    <!-- PERMISSION TABLE -->
    <b-card
        no-body
        class="border mt-1"
    >
      <b-card-header class="p-1">
        <b-card-title class="font-medium-2">
          <feather-icon
              icon="LockIcon"
              size="18"
          />
          <span class="align-middle ml-50">权限</span>
        </b-card-title>
      </b-card-header>
      <b-table
          striped
          responsive
          class="mb-0"
          :items="permissionsData"
      >
        <template #cell(module)="data">
          {{ data.value }}
        </template>
        <template #cell()="data">
          <b-form-checkbox :checked="data.value" />
        </template>
      </b-table>
    </b-card>

    <!-- Action Buttons -->
    <b-button
        variant="primary"
        class="mb-1 mb-sm-0 mr-0 mr-sm-1"
        :block="$store.getters['app/currentBreakPoint'] === 'xs'"
    >
      保存修改
    </b-button>
    <b-button
        variant="outline-secondary"
        type="reset"
        :block="$store.getters['app/currentBreakPoint'] === 'xs'"
    >
      重置
    </b-button>
    <br>
    <br>
    <br>

    <b-card>
      <!-- form -->
      <b-form>
        <b-row>
          <!-- old password -->
          <b-col md="6">
            <h3>修改当前用户密码</h3>
            <b-form-group
                label="旧密码"
                label-for="account-old-password"
            >
              <b-input-group class="input-group-merge">
                <b-form-input
                    id="account-old-password"
                    v-model="passwordValueOld"
                    name="old-password"
                    :type="passwordFieldTypeOld"
                    placeholder="Old Password"
                />
                <b-input-group-append is-text>
                  <feather-icon
                      :icon="passwordToggleIconOld"
                      class="cursor-pointer"
                      @click="togglePasswordOld"
                  />
                </b-input-group-append>
              </b-input-group>
            </b-form-group>
          </b-col>
          <!--/ old password -->
        </b-row>
        <b-row>
          <!-- new password -->
          <b-col md="6">
            <b-form-group
                label-for="account-new-password"
                label="新密码"
            >
              <b-input-group class="input-group-merge">
                <b-form-input
                    id="account-new-password"
                    v-model="newPasswordValue"
                    :type="passwordFieldTypeNew"
                    name="new-password"
                    placeholder="New Password"
                />
                <b-input-group-append is-text>
                  <feather-icon
                      :icon="passwordToggleIconNew"
                      class="cursor-pointer"
                      @click="togglePasswordNew"
                  />
                </b-input-group-append>
              </b-input-group>
            </b-form-group>
          </b-col>
          <!--/ new password -->

          <!-- retype password -->
          <b-col md="6">
            <b-form-group
                label-for="account-retype-new-password"
                label="重复新密码"
            >
              <b-input-group class="input-group-merge">
                <b-form-input
                    id="account-retype-new-password"
                    v-model="RetypePassword"
                    :type="passwordFieldTypeRetype"
                    name="retype-password"
                    placeholder="New Password"
                />
                <b-input-group-append is-text>
                  <feather-icon
                      :icon="passwordToggleIconRetype"
                      class="cursor-pointer"
                      @click="togglePasswordRetype"
                  />
                </b-input-group-append>
              </b-input-group>
            </b-form-group>
          </b-col>
          <!--/ retype password -->

          <!-- buttons -->
          <b-col cols="12">
            <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                variant="primary"
                class="mt-1 mr-1"
            >
              Save changes
            </b-button>
            <b-button
                v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                type="reset"
                variant="outline-secondary"
                class="mt-1"
            >
              Reset
            </b-button>
          </b-col>
          <!--/ buttons -->
        </b-row>
      </b-form>
    </b-card>

  </div>
</template>

<script>
import {
  BButton, BMedia, BAvatar, BRow, BCol, BFormGroup, BFormInput, BForm, BTable, BCard, BCardHeader, BCardTitle, BFormCheckbox,
} from 'bootstrap-vue'
import { avatarText } from '@core/utils/filter'
import vSelect from 'vue-select'
import { useInputImageRenderer } from '@core/comp-functions/forms/form-utils'
import { ref } from '@vue/composition-api'
import useUsersList from '../users-list/useUsersList'
import Ripple from 'vue-ripple-directive'

import {
   BInputGroup, BInputGroupAppend,
} from 'bootstrap-vue'
export default {
  components: {
    BButton,
    BMedia,
    BAvatar,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BForm,
    BTable,
    BCard,
    BCardHeader,
    BCardTitle,
    BFormCheckbox,
    BButton,
    BForm,
    BFormGroup,
    BFormInput,
    BRow,
    BCol,
    BCard,
    BInputGroup,
    BInputGroupAppend,
    vSelect,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      passwordValueOld: '',
      newPasswordValue: '',
      RetypePassword: '',
      passwordFieldTypeOld: 'password',
      passwordFieldTypeNew: 'password',
      passwordFieldTypeRetype: 'password',
    }
  },
  computed: {
    passwordToggleIconOld() {
      return this.passwordFieldTypeOld === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
    passwordToggleIconNew() {
      return this.passwordFieldTypeNew === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
    passwordToggleIconRetype() {
      return this.passwordFieldTypeRetype === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
  },
  methods: {
    togglePasswordOld() {
      this.passwordFieldTypeOld = this.passwordFieldTypeOld === 'password' ? 'text' : 'password'
    },
    togglePasswordNew() {
      this.passwordFieldTypeNew = this.passwordFieldTypeNew === 'password' ? 'text' : 'password'
    },
    togglePasswordRetype() {
      this.passwordFieldTypeRetype = this.passwordFieldTypeRetype === 'password' ? 'text' : 'password'
    },
  },
  props: {
    userData: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { resolveUserRoleVariant } = useUsersList()

    const roleOptions = [
      { label: 'Admin', value: 'admin' },
      { label: 'Author', value: 'author' },
      { label: 'Editor', value: 'editor' },
      { label: 'Maintainer', value: 'maintainer' },
      { label: 'Subscriber', value: 'subscriber' },
    ]

    const statusOptions = [
      { label: 'Pending', value: 'pending' },
      { label: 'Active', value: 'active' },
      { label: 'Inactive', value: 'inactive' },
    ]

    const permissionsData = [
      {
        module: '管理员',
        读取信息: true,
        修改权限: true,
        远程控制: true,
        删除数据: true,
      },
      {
        module: '操作员',
        读取信息: true,
        修改权限: false,
        远程控制: true,
        删除数据: false,
      },
      {
        module: '员工',
        读取信息: true,
        修改权限: false,
        远程控制: false,
        删除数据: false,
      },
      {
        module: '工程师',
        读取信息: true,
        修改权限: false,
        远程控制: true,
        删除数据: true,
      },
      {
        module: '网络维护者',
        读取信息: true,
        修改权限: true,
        远程控制: true,
        删除数据: false,
      },
    ]

    // ? Demo Purpose => Update image on click of update
    const refInputEl = ref(null)
    const previewEl = ref(null)

    const { inputImageRenderer } = useInputImageRenderer(refInputEl, base64 => {
      // eslint-disable-next-line no-param-reassign
      props.userData.avatar = base64
    })

    return {
      resolveUserRoleVariant,
      avatarText,
      roleOptions,
      statusOptions,
      permissionsData,

      //  ? Demo - Update Image on click of update button
      refInputEl,
      previewEl,
      inputImageRenderer,
    }
  },
}



</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
