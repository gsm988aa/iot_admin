<template>
  <b-row>
    <b-col cols="12">

      <b-tabs
        pills
        card
        vertical
      >
        <b-tab
          title="紧急分闸"
          active
        >
          <b-card-text>
            <JinJiFenZha />
          </b-card-text>
        </b-tab>
        <b-tab title="多点测温">
          <b-card-text>
            <DuoDianCeWen />
          </b-card-text>
        </b-tab>
        <b-tab title="一键控制">
          <b-card-text>
            <YiJianShunKong />
          </b-card-text>
        </b-tab>
        <b-tab title="状态">
          <b-card-text>
            <ZhuangTai />
          </b-card-text>
        </b-tab>
        <b-tab title="设置">
          <b-card-text>
            <SheZhi />
          </b-card-text>
        </b-tab>

      </b-tabs>

    </b-col>
  </b-row>

</template>

<script>
import {
  BRow, BCol, BTab, BTabs, BCard, BCardText,
} from 'bootstrap-vue'
import DuoDianCeWen from './DuoDianCeWen.vue'
import JinJiFenZha from './JinJiFenZha.vue'
import ZhuangTai from './ZhuangTai.vue'
import SheZhi from './SheZhi.vue'
import YiJianShunKong from './YiJianShunKong.vue'

export default {
  components: {
    BRow,
    BCol,
    BTab,
    BTabs,
    BCard,
    BCardText,
    DuoDianCeWen,
    JinJiFenZha,
    ZhuangTai,
    SheZhi,
    YiJianShunKong,
  },

}
</script>
