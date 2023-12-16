<template>
  <b-row class="match-height">
    <b-col cols="12">
      <modal-basic />
    </b-col>
    <b-col cols="12">
      <modal-theme />
    </b-col>

  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'


import ModalTheme from './ModalTheme.vue'

import ModalBasic from './ModalBasic.vue'


export default {
  components: {
    BCol,
    BRow,

    ModalTheme,

    ModalBasic,

  },
}
</script>
