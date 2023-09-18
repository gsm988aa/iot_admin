<template>
  <b-row
    v-if="$route.meta.breadcrumb || $route.meta.pageTitle"
    class="content-header"
  >

    <!-- Content Left -->
    <b-col
      class="content-header-left mb-2"
      cols="12"
      md="9"
    >
      <b-row class="breadcrumbs-top">
        <b-col cols="12">
          <h2 class="content-header-title float-left pr-1 mb-0">
            {{ $route.meta.pageTitle }}
          </h2>
          <div class="breadcrumb-wrapper">
            <b-breadcrumb>
              <b-breadcrumb-item to="/">
                <feather-icon
                  icon="HomeIcon"
                  size="16"
                  class="align-text-top"
                />
              </b-breadcrumb-item>
              <b-breadcrumb-item
                v-for="item in $route.meta.breadcrumb"
                :key="item.text"
                :active="item.active"
                :to="item.to"
              >
                {{ item.text }}
              </b-breadcrumb-item>
            </b-breadcrumb>
          </div>
        </b-col>
      </b-row>
    </b-col>

    <!-- Content Right -->
    <b-col
      class="content-header-right text-md-right d-md-block d-none mb-1"
      md="3"
      cols="12"
    >
      <b-dropdown
        variant="link"
        no-caret
        toggle-class="p-0"
        right
      >
<!--        @click="handleFenZha"-->
        <template #button-content>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="danger"
            class="btn-icon"

          >

            <feather-icon icon="ZapIcon" />紧急分闸
          </b-button>
        </template>

        <b-dropdown-item  >
<!--          <feather-icon-->
<!--            icon="CheckSquareIcon"-->
<!--            size="16"-->
<!--          />-->
          <span class="align-middle ml-50">是否要</span>
        </b-dropdown-item>

        <b-dropdown-item >
<!--          <feather-icon-->
<!--            icon="MessageSquareIcon"-->
<!--            size="16"-->
<!--          />-->
          <span class="align-middle ml-50">紧急分闸？</span>
        </b-dropdown-item>

        <b-dropdown-item  >
          <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="danger"
              class="btn-icon"
              @click ="handleFenZha"
          >
            <feather-icon
                icon="CheckIcon"
                size="16"
            />
            <span class="align-middle ml-50">是,分闸！</span>

          </b-button>

        </b-dropdown-item>

        <b-dropdown-item  >
          <feather-icon
            icon="XCircleIcon"
            size="16"
          />
          <span class="align-middle ml-50">否，不分闸！</span>
        </b-dropdown-item>
      </b-dropdown>
    </b-col>
  </b-row>
</template>

<script>
import {
  BBreadcrumb, BBreadcrumbItem, BRow, BCol, BDropdown, BDropdownItem, BButton,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import axios from "axios";

export default {
  directives: {
    Ripple,
  },
  components: {
    BBreadcrumb,
    BBreadcrumbItem,
    BRow,
    BCol,
    BDropdown,
    BDropdownItem,
    BButton,
  },
  methods: {
    handleFenZha(append = false) {
      if (!this.isDisabled) {
        this.$bvToast.toast('正在分闸中,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 3000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 2 clicked!')
          this.isDisabled = false
          this.text = '指令发送成功！'
          axios.post('http://10.168.1.103/fenzha').then(response => {
          })
        }, 3000)
        this.text = '执行分闸'
      }
    },
  }
}
</script>
