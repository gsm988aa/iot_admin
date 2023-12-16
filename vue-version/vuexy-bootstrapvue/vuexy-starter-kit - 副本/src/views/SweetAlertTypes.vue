<template>
  <div class="demo-inline-spacing">

    <b-card
      title="是否要进行分闸操作？"
      style="height: 180px;overflow: auto;width: 390px"
    >
      <b-button
        v-ripple.400="'rgba(255, 159, 67, 0.15)'"
        size="lg"
        pill
        variant="outline-danger"
        class="xxxl"
        @click="confirmShutdown"
      >
        是,立即分闸
      </b-button>

      <b-button
        v-ripple.400="'rgba(0, 207, 232, 0.15)'"
        style="margin-left: 20px"
        size="lg"
        pill
        variant="outline-info"
        class="xxxl"
        @click="info"
      >
        不,不分闸

      </b-button>

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
  </div>
</template>

<script>
import { BCard, BCardText, BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codeTypes } from '@/views/emergence/code'
// import { codeTypes } from './code'

export default {
  components: {
    // BCardCode,
    BCard,
    BCardText,
    BButton,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      codeTypes,
    }
  },
  methods: {

    confirmShutdown() {
      this.$refs.confirmationModal.show()
    },
    performShutdown() {
      // Perform the actual "立即分闸" action here
      // For example: invoke an API, update a status, etc.
      this.closeModal()
    },
    closeModal() {
      this.$refs.confirmationModal.hide()
    },

    // success
    success() {
      this.$swal({
        title: '分闸成功!',
        text: '已经完成分闸操作',
        icon: 'success',
        customClass: {
          confirmButton: 'btn btn-primary',
        },
        buttonsStyling: false,
      })
    },

    // error
    error() {
      this.$swal({
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
      this.$swal({
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
      this.$swal({
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
  font-size: 22px;
}

.mb-0{
  font-family: 宋体;

}
.demo-inline-spacing{
  scale: 0.2;
}
</style>
