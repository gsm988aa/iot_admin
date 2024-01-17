<template>
  <div class="demo-inline-spacing">

    <b-card
      title="是否要进行分闸操作？"
      style="width: 100%;height: 100%"
    >
      <b-row style="margin-top: 50px;align-items: center;justify-content: center;margin-left: 50px">
        <b-col cols="12" sm="12" md="6">
          <b-button

            pill
            variant="outline-danger"
            class="xxxl"
            style="scale: 1.1"
            @click="confirmShutdown"
          >
            是,立即分闸
          </b-button>
        </b-col>
        <b-col cols="12" sm="12" md="6">
          <b-button
            v-ripple.400="'rgba(0, 207, 232, 0.15)'"

            pill
            variant="outline-info"
            class="xxxl"
            style="scale: 1.1"
            @click="info"
          >
            不,不分闸

          </b-button>
        </b-col>
      </b-row>

      <b-modal
        ref="confirmationModal"
        hide-footer
        title="请确认是否要立即进行分闸？"
      >
        <b-button
          variant="danger"
          @click="performShutdown"
        >
          确认分闸
        </b-button>
        <b-button
          variant="secondary"
          style="margin-left: 20px"
          @click="closeModal"
        >
          取消
        </b-button>
      </b-modal>

    </b-card>
<!--                <img src="@/assets/images/222.png" style="scale: 0.2"/>-->
  </div>
</template>

<script>
// import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import {
  BCard, BButton, BCol, BRow,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
// import { codeTypes } from './code'
import Swal from 'sweetalert2'
import axios from 'axios'

export default {
  components: {
    // BCardCode,
    BCard,
    // BCardText,
    BButton,
    BCol,
    BRow,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      // codeTypes,
      userChoice: false, // 默认不分闸
    }
  },
  methods: {
    closeModal() {
      this.$refs.confirmationModal.hide()
    },
    confirmShutdown() {
      this.$refs.confirmationModal.show()
      // 用户选择分闸
      this.userChoice = true
      this.closeModal()
    },

    performShutdown() {
      this.closeModal() // 确认分闸则关闭弹窗
      this.showProcessingAlert()
      setTimeout(() => {
        this.showSuccessAlert()
      }, 2000) // 等待3秒后显示分闸成功
    },
    showProcessingAlert() {
      // eslint-disable-next-line no-unused-vars
      axios.post('http://10.168.1.103/fenzha').then(response => {
      })

      Swal.fire({
        title: '正在分闸中...',
        icon: 'warning',
        customClass: {
          confirmButton: 'btn btn-primary',
        },
        buttonsStyling: false,
        timer: 2000, // 8秒的定时器，自动关闭
        timerProgressBar: true,
      })
    },
    showSuccessAlert() {
      Swal.fire({
        title: '分闸成功!',
        text: '已经完成分闸操作',
        icon: 'success',
        customClass: {
          confirmButton: 'btn btn-primary',
        },
        buttonsStyling: false,
      })
    },

    error() {
      Swal.fire({
        title: 'Error!',
        text: ' You clicked the button!',
        icon: 'error',
        customClass: {
          confirmButton: 'btn btn-primary',
        },
        buttonsStyling: false,
      })
    },

    // warning
    warning() {
      Swal.fire({
        title: 'Warning!',
        text: ' You clicked the button!',
        icon: 'warning',
        customClass: {
          confirmButton: 'btn btn-primary',
        },
        buttonsStyling: false,
      })
    },

    // info
    info() {
      Swal.fire({
        title: '中断分闸!',
        text: '请按主页返回，检查柜状态',
        icon: 'info',
        customClass: {
          confirmButton: 'btn btn-primary',
        },
        buttonsStyling: false,
      })
    },
  },
}
</script>
<style lang="scss">
@import '@core/scss/vue/libs/vue-sweetalert.scss';
.xxxl
{
  font-size: 42px;
  justify-content: center;
}

.mb-0{
  font-family: 宋体;

}
</style>
