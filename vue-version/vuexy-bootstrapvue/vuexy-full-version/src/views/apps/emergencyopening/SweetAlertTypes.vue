<template>
  <b-card  title="是否要进行分闸操作？">
    <b-card-text>
     请确认是否有立即进行分闸？
    </b-card-text>

    <!-- trigger button -->
    <div class="demo-inline-spacing">
<!--      <b-button-->
<!--        v-ripple.400="'rgba(40, 199, 111, 0.15)'"-->
<!--        variant="outline-success"-->
<!--        @click="success"-->
<!--      >-->
<!--        Success-->
<!--      </b-button>-->
<!--      <b-button-->
<!--        v-ripple.400="'rgba(234, 84, 85, 0.15)'"-->
<!--        variant="outline-danger"-->
<!--        @click="error"-->
<!--      >-->
<!--        Error-->
<!--      </b-button>-->
      <b-button
          size="lg"
          pill
        v-ripple.400="'rgba(255, 159, 67, 0.15)'"
        variant="outline-danger"
        @click="success"
          class="xxxl"
      >
        是,立即分闸
      </b-button>
      <b-button
          size="lg"
          pill
        v-ripple.400="'rgba(0, 207, 232, 0.15)'"
        variant="outline-info"
        @click="info"
          class="xxxl"
      >
        不,不分闸

      </b-button>
    </div>

<!--    <template #code>-->
<!--      {{ codeTypes }}-->
<!--    </template>-->
  </b-card >
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import {BCard, BCardText, BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codeTypes } from './code'

export default {
  components: {
    BCardCode,
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
font-size: 42px;
}
</style>
