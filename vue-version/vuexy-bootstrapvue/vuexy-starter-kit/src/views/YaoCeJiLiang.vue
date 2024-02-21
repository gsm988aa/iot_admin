<template>
  <div style="width: 100%;position: absolute;flex-direction: column">

    <b-card style="position: relative;width: 100%">
      <b-button
        variant="outline-primary"
        @click="start201yaoce"
      >
        开启AH201遥测
      </b-button>
        &nbsp
      <b-button
        variant="outline-danger"
        @click="stop201yaoce"
      >
        关闭AH201遥测
      </b-button>
        &nbsp
      <b-button
        variant="outline-primary"
        @click="start202yaoce"
      >
        开启AH202遥测
      </b-button>
        &nbsp
      <b-button
        variant="outline-danger"
        @click="stop202yaoce"
      >
        关闭AH202遥测
      </b-button>
        &nbsp
      <b-button
        variant="outline-primary"
        @click="start203yaoce"
      >
        开启AH203遥测
      </b-button>
        &nbsp
      <b-button
        variant="outline-danger"
        @click="stop203yaoce"
      >
        关闭AH203遥测
      </b-button>
        &nbsp
      <br>      <br>
      <b-button
        variant="outline-primary"
        @click="start206yaoce"
      >
        开启AH206遥测
      </b-button>
        &nbsp
      <b-button
        variant="outline-danger"
        @click="stop206yaoce"
      >
        关闭AH206遥测
      </b-button>
        &nbsp

      <b-button
        variant="outline-primary"
        @click="start209yaoce"
      >
        开启AH209遥测
      </b-button>
        &nbsp
      <b-button
        variant="outline-danger"
        @click="stop209yaoce"
      >
        关闭AH209遥测
      </b-button>
        &nbsp

      <b-button
        variant="outline-primary"
        @click="start210yaoce"
      >
        开启AH210遥测
      </b-button>
        &nbsp
      <b-button
        variant="outline-danger"
        @click="stop210yaoce"
      >
        关闭AH210遥测
      </b-button>
        &nbsp

      <b-button
        variant="outline-primary"
        @click="start211yaoce"
      >
        开启AH211遥测
      </b-button>
        &nbsp
      <b-button
        variant="outline-danger"
        @click="stop211yaoce"
      >
        关闭AH211遥测
      </b-button>
        &nbsp

      <br>      <br>
      <b-card-text class="table-font">
        遥测量 实时电量
      </b-card-text>
      <b-card style="background-color: #f7f4fd;font-size: 18px">
        <b-card-text style="font-weight: bold;color: #0c1d2f">
          AH201数据：
        </b-card-text>
        Uab(v):{{ UabAH201 }} &nbsp &nbsp
        Ubc(v):{{ UbcAH201 }} &nbsp &nbsp
        Uca(v):{{ UcaAH201 }} &nbsp &nbsp
        Ua(v):{{ UaAH201 }} &nbsp &nbsp
        Ub(v):{{ UbAH201 }} &nbsp &nbsp
        Uc(v):{{ UcAH201 }} &nbsp &nbsp
        Ia(A):{{ IaAH201 }} &nbsp &nbsp
        Ib(A):{{ IbAH201 }} &nbsp &nbsp
        Ic(A):{{ IcAH201 }} &nbsp &nbsp
        I0(A):{{ I0AH201 }} &nbsp &nbsp
        p(w):{{ PAH201 }} &nbsp &nbsp
        Q(w):{{ QAH201 }} &nbsp &nbsp
        cos_phi(v):{{ cos_phiAH201 }} &nbsp &nbsp
        F(v):{{ FAH201 }} &nbsp &nbsp
        CL_3U0(v):{{ CL_3U0AH201 }} &nbsp &nbsp
        CL_I01(v):{{ CL_I01AH201 }} &nbsp &nbsp
        CL_I05(v):{{ CL_I05AH201 }} &nbsp &nbsp
        CL_AI01(v):{{ CL_AI01AH201 }} &nbsp &nbsp
        CL_AI05(v):{{ CL_AI05AH201 }} &nbsp &nbsp
      </b-card>
      <br>
      <b-card style="background-color: #f7f4fd;font-size: 18px">
        <b-card-text style="font-weight: bold;color: #0c1d2f">
          AH202数据：
        </b-card-text>
        Uab(v):{{ UabAH202 }} &nbsp &nbsp
        Ubc(v):{{ UbcAH202 }} &nbsp &nbsp
        Uca(v):{{ UcaAH202 }} &nbsp &nbsp
        Ua(v):{{ UaAH202 }} &nbsp &nbsp
        Ub(v):{{ UbAH202 }} &nbsp &nbsp
        Uc(v):{{ UcAH202 }} &nbsp &nbsp
        Ia(A):{{ IaAH202 }} &nbsp &nbsp
        Ib(A):{{ IbAH202 }} &nbsp &nbsp
        Ic(A):{{ IcAH202 }} &nbsp &nbsp
        I0(A):{{ I0AH202 }} &nbsp &nbsp
        p(w):{{ PAH202 }} &nbsp &nbsp
        Q(w):{{ QAH202 }} &nbsp &nbsp
        cos_phi(v):{{ cos_phiAH202 }} &nbsp &nbsp
        F(v):{{ FAH202 }} &nbsp &nbsp
        CL_3U0(v):{{ CL_3U0AH202 }} &nbsp &nbsp
        CL_I01(v):{{ CL_I01AH202 }} &nbsp &nbsp
        CL_I05(v):{{ CL_I05AH202 }} &nbsp &nbsp
        CL_AI01(v):{{ CL_AI01AH202 }} &nbsp &nbsp
        CL_AI05(v):{{ CL_AI05AH202 }} &nbsp &nbsp
      </b-card>
      <br>
      <b-card style="background-color: #f7f4fd;font-size: 18px">
        <b-card-text style="font-weight: bold;color: #0c1d2f">
          AH203数据：
        </b-card-text>
        Uab(v):{{ UabAH203 }} &nbsp &nbsp
        Ubc(v):{{ UbcAH203 }} &nbsp &nbsp
        Uca(v):{{ UcaAH203 }} &nbsp &nbsp
        Ua(v):{{ UaAH203 }} &nbsp &nbsp
        Ub(v):{{ UbAH203 }} &nbsp &nbsp
        Uc(v):{{ UcAH203 }} &nbsp &nbsp
        Ia(A):{{ IaAH203 }} &nbsp &nbsp
        Ib(A):{{ IbAH203 }} &nbsp &nbsp
        Ic(A):{{ IcAH203 }} &nbsp &nbsp
        I0(A):{{ I0AH203 }} &nbsp &nbsp
        p(w):{{ PAH203 }} &nbsp &nbsp
        Q(w):{{ QAH203 }} &nbsp &nbsp
        cos_phi(v):{{ cos_phiAH203 }} &nbsp &nbsp
        F(v):{{ FAH203 }} &nbsp &nbsp
        CL_3U0(v):{{ CL_3U0AH203 }} &nbsp &nbsp
        CL_I01(v):{{ CL_I01AH203 }} &nbsp &nbsp
        CL_I05(v):{{ CL_I05AH203 }} &nbsp &nbsp
        CL_AI01(v):{{ CL_AI01AH203 }} &nbsp &nbsp
        CL_AI05(v):{{ CL_AI05AH203 }} &nbsp &nbsp
      </b-card>
      <br>
      <b-card style="background-color: #f7f4fd;font-size: 18px">
        <b-card-text style="font-weight: bold;color: #0c1d2f">
          AH206数据：
        </b-card-text>
        Uab(v):{{ UabAH206 }} &nbsp &nbsp
        Ubc(v):{{ UbcAH206 }} &nbsp &nbsp
        Uca(v):{{ UcaAH206 }} &nbsp &nbsp
        Ua(v):{{ UaAH206 }} &nbsp &nbsp
        Ub(v):{{ UbAH206 }} &nbsp &nbsp
        Uc(v):{{ UcAH206 }} &nbsp &nbsp
        Ia(A):{{ IaAH206 }} &nbsp &nbsp
        Ib(A):{{ IbAH206 }} &nbsp &nbsp
        Ic(A):{{ IcAH206 }} &nbsp &nbsp
        I0(A):{{ I0AH206 }} &nbsp &nbsp
        p(w):{{ PAH206 }} &nbsp &nbsp
        Q(w):{{ QAH206 }} &nbsp &nbsp
        cos_phi(v):{{ cos_phiAH206 }} &nbsp &nbsp
        F(v):{{ FAH206 }} &nbsp &nbsp
        CL_3U0(v):{{ CL_3U0AH206 }} &nbsp &nbsp
        CL_I01(v):{{ CL_I01AH206 }} &nbsp &nbsp
        CL_I05(v):{{ CL_I05AH206 }} &nbsp &nbsp
        CL_AI01(v):{{ CL_AI01AH206 }} &nbsp &nbsp
        CL_AI05(v):{{ CL_AI05AH206 }} &nbsp &nbsp
      </b-card>
      <br>
      <b-card style="background-color: #f7f4fd;font-size: 18px">
        <b-card-text style="font-weight: bold;color: #0c1d2f">
          AH209数据：
        </b-card-text>
        Uab(v):{{ UabAH209 }} &nbsp &nbsp
        Ubc(v):{{ UbcAH209 }} &nbsp &nbsp
        Uca(v):{{ UcaAH209 }} &nbsp &nbsp
        Ua(v):{{ UaAH209 }} &nbsp &nbsp
        Ub(v):{{ UbAH209 }} &nbsp &nbsp
        Uc(v):{{ UcAH209 }} &nbsp &nbsp
        Ia(A):{{ IaAH209 }} &nbsp &nbsp
        Ib(A):{{ IbAH209 }} &nbsp &nbsp
        Ic(A):{{ IcAH209 }} &nbsp &nbsp
        I0(A):{{ I0AH209 }} &nbsp &nbsp
        p(w):{{ PAH209 }} &nbsp &nbsp
        Q(w):{{ QAH209 }} &nbsp &nbsp
        cos_phi(v):{{ cos_phiAH209 }} &nbsp &nbsp
        F(v):{{ FAH209 }} &nbsp &nbsp
        CL_3U0(v):{{ CL_3U0AH209 }} &nbsp &nbsp
        CL_I01(v):{{ CL_I01AH209 }} &nbsp &nbsp
        CL_I05(v):{{ CL_I05AH209 }} &nbsp &nbsp
        CL_AI01(v):{{ CL_AI01AH209 }} &nbsp &nbsp
        CL_AI05(v):{{ CL_AI05AH209 }} &nbsp &nbsp
      </b-card>
      <br>
      <b-card style="background-color: #f7f4fd;font-size: 18px">
        <b-card-text style="font-weight: bold;color: #0c1d2f">
          AH210数据：
        </b-card-text>
        Uab(v):{{ UabAH210 }} &nbsp &nbsp
        Ubc(v):{{ UbcAH210 }} &nbsp &nbsp
        Uca(v):{{ UcaAH210 }} &nbsp &nbsp
        Ua(v):{{ UaAH210 }} &nbsp &nbsp
        Ub(v):{{ UbAH210 }} &nbsp &nbsp
        Uc(v):{{ UcAH210 }} &nbsp &nbsp
        Ia(A):{{ IaAH210 }} &nbsp &nbsp
        Ib(A):{{ IbAH210 }} &nbsp &nbsp
        Ic(A):{{ IcAH210 }} &nbsp &nbsp
        I0(A):{{ I0AH210 }} &nbsp &nbsp
        p(w):{{ PAH210 }} &nbsp &nbsp
        Q(w):{{ QAH210 }} &nbsp &nbsp
        cos_phi(v):{{ cos_phiAH210 }} &nbsp &nbsp
        F(v):{{ FAH210 }} &nbsp &nbsp
        CL_3U0(v):{{ CL_3U0AH210 }} &nbsp &nbsp
        CL_I01(v):{{ CL_I01AH210 }} &nbsp &nbsp
        CL_I05(v):{{ CL_I05AH210 }} &nbsp &nbsp
        CL_AI01(v):{{ CL_AI01AH210 }} &nbsp &nbsp
        CL_AI05(v):{{ CL_AI05AH210 }} &nbsp &nbsp
      </b-card>
      <br>
      <b-card style="background-color: #f7f4fd;font-size: 18px">
        <b-card-text style="font-weight: bold;color: #0c1d2f">
          AH211数据：
        </b-card-text>
        Uab(v):{{ UabAH211 }} &nbsp &nbsp
        Ubc(v):{{ UbcAH211 }} &nbsp &nbsp
        Uca(v):{{ UcaAH211 }} &nbsp &nbsp
        Ua(v):{{ UaAH211 }} &nbsp &nbsp
        Ub(v):{{ UbAH211 }} &nbsp &nbsp
        Uc(v):{{ UcAH211 }} &nbsp &nbsp
        Ia(A):{{ IaAH211 }} &nbsp &nbsp
        Ib(A):{{ IbAH211 }} &nbsp &nbsp
        Ic(A):{{ IcAH211 }} &nbsp &nbsp
        I0(A):{{ I0AH211 }} &nbsp &nbsp
        p(w):{{ PAH211 }} &nbsp &nbsp
        Q(w):{{ QAH211 }} &nbsp &nbsp
        cos_phi(v):{{ cos_phiAH211 }} &nbsp &nbsp
        F(v):{{ FAH211 }} &nbsp &nbsp
        CL_3U0(v):{{ CL_3U0AH211 }} &nbsp &nbsp
        CL_I01(v):{{ CL_I01AH211 }} &nbsp &nbsp
        CL_I05(v):{{ CL_I05AH211 }} &nbsp &nbsp
        CL_AI01(v):{{ CL_AI01AH211 }} &nbsp &nbsp
        CL_AI05(v):{{ CL_AI05AH211 }} &nbsp &nbsp
      </b-card>

    </b-card>

    <b-card style="position: relative;width: 100%">

      <b-button
        variant="outline-primary"
        @click="start201jiliang"
      >
        开启201计量
      </b-button>
        <!--      空格-->
        &nbsp
      <b-button
        variant="outline-danger"
        @click="stop201jiliang"
      >
        关闭201计量
      </b-button>
        &nbsp

      <b-button
        variant="outline-primary"
        @click="start202jiliang"
      >
        开启202计量
      </b-button>
        <!--      空格-->
        &nbsp
      <b-button
        variant="outline-danger"
        @click="stop202jiliang"
      >
        关闭202计量
      </b-button>
        &nbsp

      <b-button
        variant="outline-primary"
        @click="start203jiliang"
      >
        开启203计量
      </b-button>
        <!--      空格-->
        &nbsp
      <b-button
        variant="outline-danger"
        @click="stop203jiliang"
      >
        关闭203计量
      </b-button>
        &nbsp

      <br>
      <b-button
        variant="outline-primary"
        @click="start206jiliang"
      >
        开启206计量
      </b-button>
        <!--      空格-->
        &nbsp
      <b-button
        variant="outline-danger"
        @click="stop206jiliang"
      >
        关闭206计量
      </b-button>
        &nbsp

      <b-button
        variant="outline-primary"
        @click="start209jiliang"
      >
        开启209计量
      </b-button>
        <!--      空格-->
        &nbsp
      <b-button
        variant="outline-danger"
        @click="stop209jiliang"
      >
        关闭209计量
      </b-button>
        &nbsp

      <b-button
        variant="outline-primary"
        @click="start210jiliang"
      >
        开启210计量
      </b-button>
        <!--      空格-->
        &nbsp
      <b-button
        variant="outline-danger"
        @click="stop210jiliang"
      >
        关闭210计量
      </b-button>
        &nbsp

      <b-button
        variant="outline-primary"
        @click="start211jiliang"
      >
        开启211计量
      </b-button>
        <!--      空格-->
        &nbsp
      <b-button
        variant="outline-danger"
        @click="stop211jiliang"
      >
        关闭211计量
      </b-button>
        &nbsp

      <br>
      <br>
      <b-card-text class="table-font">
        保护计算量 累计电能
      </b-card-text>
      <div style="overflow: auto;width: 100%" />

      <b-card style="background-color: #f7f4fd;font-size: 18px">
        <b-card-text style="font-weight: bold;color: #0c1d2f">
          AH201数据：
        </b-card-text>
        Ua(v):{{ UaAH201jiliang }} &nbsp &nbsp
        Ub(v):{{ UbAH201jiliang }} &nbsp &nbsp
        Uc(v):{{ UcAH201jiliang }} &nbsp &nbsp
        Ux(v):{{ UxAH201jiliang }} &nbsp &nbsp
        Ia(A):{{ IaAH201jiliang }} &nbsp &nbsp
        Ib(A):{{ IbAH201jiliang }} &nbsp &nbsp
        Ic(A):{{ IcAH201jiliang }} &nbsp &nbsp
        I0(A):{{ I0cAH201jiliang }} &nbsp &nbsp
        U2(v):{{ U2AH201jiliang }} &nbsp &nbsp
        Uab(v):{{ UabAH201jiliang }} &nbsp &nbsp
        Ubc(v):{{ UbcAH201jiliang }} &nbsp &nbsp
        Uca(v):{{ UcaAH201jiliang }} &nbsp &nbsp
        Uab_hua(v):{{ Uab_huaAH201jiliang }} &nbsp &nbsp
        Ubc_hua(v):{{ Ubc_huaAH201jiliang }} &nbsp &nbsp
        Uca_hua(v):{{ Uca_huaAH201jiliang }} &nbsp &nbsp
      </b-card>
      <br>
      <b-card style="background-color: #f7f4fd;font-size: 18px">
        <b-card-text style="font-weight: bold;color: #0c1d2f">
          AH202数据：
        </b-card-text>
        Ua(v):{{ UaAH202jiliang }} &nbsp &nbsp
        Ub(v):{{ UbAH202jiliang }} &nbsp &nbsp
        Uc(v):{{ UcAH202jiliang }} &nbsp &nbsp
        Ux(v):{{ UxAH202jiliang }} &nbsp &nbsp
        Ia(A):{{ IaAH202jiliang }} &nbsp &nbsp
        Ib(A):{{ IbAH202jiliang }} &nbsp &nbsp
        Ic(A):{{ IcAH202jiliang }} &nbsp &nbsp
        I0(A):{{ I0cAH202jiliang }} &nbsp &nbsp
        U2(v):{{ U2AH202jiliang }} &nbsp &nbsp
        Uab(v):{{ UabAH202jiliang }} &nbsp &nbsp
        Ubc(v):{{ UbcAH202jiliang }} &nbsp &nbsp
        Uca(v):{{ UcaAH202jiliang }} &nbsp &nbsp
        Uab_hua(v):{{ Uab_huaAH202jiliang }} &nbsp &nbsp
        Ubc_hua(v):{{ Ubc_huaAH202jiliang }} &nbsp &nbsp
        Uca_hua(v):{{ Uca_huaAH202jiliang }} &nbsp &nbsp
      </b-card>
      <br>
      <b-card style="background-color: #f7f4fd;font-size: 18px">
        <b-card-text style="font-weight: bold;color: #0c1d2f">
          AH203数据：
        </b-card-text>
        Ua(v):{{ UaAH203jiliang }} &nbsp &nbsp
        Ub(v):{{ UbAH203jiliang }} &nbsp &nbsp
        Uc(v):{{ UcAH203jiliang }} &nbsp &nbsp
        Ux(v):{{ UxAH203jiliang }} &nbsp &nbsp
        Ia(A):{{ IaAH203jiliang }} &nbsp &nbsp
        Ib(A):{{ IbAH203jiliang }} &nbsp &nbsp
        Ic(A):{{ IcAH203jiliang }} &nbsp &nbsp
        I0(A):{{ I0cAH203jiliang }} &nbsp &nbsp
        U2(v):{{ U2AH203jiliang }} &nbsp &nbsp
        Uab(v):{{ UabAH203jiliang }} &nbsp &nbsp
        Ubc(v):{{ UbcAH203jiliang }} &nbsp &nbsp
        Uca(v):{{ UcaAH203jiliang }} &nbsp &nbsp
        Uab_hua(v):{{ Uab_huaAH203jiliang }} &nbsp &nbsp
        Ubc_hua(v):{{ Ubc_huaAH203jiliang }} &nbsp &nbsp
        Uca_hua(v):{{ Uca_huaAH203jiliang }} &nbsp &nbsp
      </b-card>
      <br>
      <b-card style="background-color: #f7f4fd;font-size: 18px">
        <b-card-text style="font-weight: bold;color: #0c1d2f">
          AH206数据：
        </b-card-text>
        Ua(v):{{ UaAH206jiliang }} &nbsp &nbsp
        Ub(v):{{ UbAH206jiliang }} &nbsp &nbsp
        Uc(v):{{ UcAH206jiliang }} &nbsp &nbsp
        Ux(v):{{ UxAH206jiliang }} &nbsp &nbsp
        Ia(A):{{ IaAH206jiliang }} &nbsp &nbsp
        Ib(A):{{ IbAH206jiliang }} &nbsp &nbsp
        Ic(A):{{ IcAH206jiliang }} &nbsp &nbsp
        I0(A):{{ I0cAH206jiliang }} &nbsp &nbsp
        U2(v):{{ U2AH206jiliang }} &nbsp &nbsp
        Uab(v):{{ UabAH206jiliang }} &nbsp &nbsp
        Ubc(v):{{ UbcAH206jiliang }} &nbsp &nbsp
        Uca(v):{{ UcaAH206jiliang }} &nbsp &nbsp
        Uab_hua(v):{{ Uab_huaAH206jiliang }} &nbsp &nbsp
        Ubc_hua(v):{{ Ubc_huaAH206jiliang }} &nbsp &nbsp
        Uca_hua(v):{{ Uca_huaAH206jiliang }} &nbsp &nbsp
      </b-card>
      <br>
      <b-card style="background-color: #f7f4fd;font-size: 18px">
        <b-card-text style="font-weight: bold;color: #0c1d2f">
          AH209数据：
        </b-card-text>
        Ua(v):{{ UaAH209jiliang }} &nbsp &nbsp
        Ub(v):{{ UbAH209jiliang }} &nbsp &nbsp
        Uc(v):{{ UcAH209jiliang }} &nbsp &nbsp
        Ux(v):{{ UxAH209jiliang }} &nbsp &nbsp
        Ia(A):{{ IaAH209jiliang }} &nbsp &nbsp
        Ib(A):{{ IbAH209jiliang }} &nbsp &nbsp
        Ic(A):{{ IcAH209jiliang }} &nbsp &nbsp
        I0(A):{{ I0cAH209jiliang }} &nbsp &nbsp
        U2(v):{{ U2AH209jiliang }} &nbsp &nbsp
        Uab(v):{{ UabAH209jiliang }} &nbsp &nbsp
        Ubc(v):{{ UbcAH209jiliang }} &nbsp &nbsp
        Uca(v):{{ UcaAH209jiliang }} &nbsp &nbsp
        Uab_hua(v):{{ Uab_huaAH209jiliang }} &nbsp &nbsp
        Ubc_hua(v):{{ Ubc_huaAH209jiliang }} &nbsp &nbsp
        Uca_hua(v):{{ Uca_huaAH209jiliang }} &nbsp &nbsp
      </b-card>
      <br>
      <b-card style="background-color: #f7f4fd;font-size: 18px">
        <b-card-text style="font-weight: bold;color: #0c1d2f">
          AH210数据：
        </b-card-text>
        Ua(v):{{ UaAH210jiliang }} &nbsp &nbsp
        Ub(v):{{ UbAH210jiliang }} &nbsp &nbsp
        Uc(v):{{ UcAH210jiliang }} &nbsp &nbsp
        Ux(v):{{ UxAH210jiliang }} &nbsp &nbsp
        Ia(A):{{ IaAH210jiliang }} &nbsp &nbsp
        Ib(A):{{ IbAH210jiliang }} &nbsp &nbsp
        Ic(A):{{ IcAH210jiliang }} &nbsp &nbsp
        I0(A):{{ I0cAH210jiliang }} &nbsp &nbsp
        U2(v):{{ U2AH210jiliang }} &nbsp &nbsp
        Uab(v):{{ UabAH210jiliang }} &nbsp &nbsp
        Ubc(v):{{ UbcAH210jiliang }} &nbsp &nbsp
        Uca(v):{{ UcaAH210jiliang }} &nbsp &nbsp
        Uab_hua(v):{{ Uab_huaAH210jiliang }} &nbsp &nbsp
        Ubc_hua(v):{{ Ubc_huaAH210jiliang }} &nbsp &nbsp
        Uca_hua(v):{{ Uca_huaAH210jiliang }} &nbsp &nbsp
      </b-card>
      <br>
      <b-card style="background-color: #f7f4fd;font-size: 18px">
        <b-card-text style="font-weight: bold;color: #0c1d2f">
          AH211数据：
        </b-card-text>
        Ua(v):{{ UaAH211jiliang }} &nbsp &nbsp
        Ub(v):{{ UbAH211jiliang }} &nbsp &nbsp
        Uc(v):{{ UcAH211jiliang }} &nbsp &nbsp
        Ux(v):{{ UxAH211jiliang }} &nbsp &nbsp
        Ia(A):{{ IaAH211jiliang }} &nbsp &nbsp
        Ib(A):{{ IbAH211jiliang }} &nbsp &nbsp
        Ic(A):{{ IcAH211jiliang }} &nbsp &nbsp
        I0(A):{{ I0cAH211jiliang }} &nbsp &nbsp
        U2(v):{{ U2AH211jiliang }} &nbsp &nbsp
        Uab(v):{{ UabAH211jiliang }} &nbsp &nbsp
        Ubc(v):{{ UbcAH211jiliang }} &nbsp &nbsp
        Uca(v):{{ UcaAH211jiliang }} &nbsp &nbsp
        Uab_hua(v):{{ Uab_huaAH211jiliang }} &nbsp &nbsp
        Ubc_hua(v):{{ Ubc_huaAH211jiliang }} &nbsp &nbsp
        Uca_hua(v):{{ Uca_huaAH211jiliang }} &nbsp &nbsp
      </b-card>

    </b-card>

  </div>

</template>

<script>
import {
  BTable, BCard, BCardText, BButton,
} from 'bootstrap-vue'
import axios from 'axios'

export default {
  components: {
    BTable,
    BCard,
    BButton,

    BCardText,
  },
  data() {
    return {
      UabAH201: 0,
      UbcAH201: 0,
      UcaAH201: 0,
      UaAH201: 0,
      UbAH201: 0,
      UcAH201: 0,
      IaAH201: 0,
      IbAH201: 0,
      IcAH201: 0,
      I0AH201: 0,
      PAH201: 0,
      QAH201: 0,
      cos_phiAH201: 0,
      FAH201: 0,
      CL_3U0AH201: 0,
      CL_I01AH201: 0,
      CL_I05AH201: 0,
      CL_Q1AH201: 0,
      CL_Q5AH201: 0,
      CL_AI01AH201: 0,
      CL_AI05AH201: 0,

      UabAH202: 0,
      UbcAH202: 0,
      UcaAH202: 0,
      UaAH202: 0,
      UbAH202: 0,
      UcAH202: 0,
      IaAH202: 0,
      IbAH202: 0,
      IcAH202: 0,
      I0AH202: 0,
      PAH202: 0,
      QAH202: 0,
      cos_phiAH202: 0,
      FAH202: 0,
      CL_3U0AH202: 0,
      CL_I01AH202: 0,
      CL_I05AH202: 0,
      CL_Q1AH202: 0,
      CL_Q5AH202: 0,
      CL_AI01AH202: 0,
      CL_AI05AH202: 0,

      UabAH203: 0,
      UbcAH203: 0,
      UcaAH203: 0,
      UaAH203: 0,
      UbAH203: 0,
      UcAH203: 0,
      IaAH203: 0,
      IbAH203: 0,
      IcAH203: 0,
      I0AH203: 0,
      PAH203: 0,
      QAH203: 0,
      cos_phiAH203: 0,
      FAH203: 0,
      CL_3U0AH203: 0,
      CL_I01AH203: 0,
      CL_I05AH203: 0,
      CL_Q1AH203: 0,
      CL_Q5AH203: 0,
      CL_AI01AH203: 0,
      CL_AI05AH203: 0,

      UabAH206: 0,
      UbcAH206: 0,
      UcaAH206: 0,
      UaAH206: 0,
      UbAH206: 0,
      UcAH206: 0,
      IaAH206: 0,
      IbAH206: 0,
      IcAH206: 0,
      I0AH206: 0,
      PAH206: 0,
      QAH206: 0,
      cos_phiAH206: 0,
      FAH206: 0,
      CL_3U0AH206: 0,
      CL_I01AH206: 0,
      CL_I05AH206: 0,
      CL_Q1AH206: 0,
      CL_Q5AH206: 0,
      CL_AI01AH206: 0,
      CL_AI05AH206: 0,

      UabAH209: 0,
      UbcAH209: 0,
      UcaAH209: 0,
      UaAH209: 0,
      UbAH209: 0,
      UcAH209: 0,
      IaAH209: 0,
      IbAH209: 0,
      IcAH209: 0,
      I0AH209: 0,
      PAH209: 0,
      QAH209: 0,
      cos_phiAH209: 0,
      FAH209: 0,
      CL_3U0AH209: 0,
      CL_I01AH209: 0,
      CL_I05AH209: 0,
      CL_Q1AH209: 0,
      CL_Q5AH209: 0,
      CL_AI01AH209: 0,
      CL_AI05AH209: 0,

      UabAH210: 0,
      UbcAH210: 0,
      UcaAH210: 0,
      UaAH210: 0,
      UbAH210: 0,
      UcAH210: 0,
      IaAH210: 0,
      IbAH210: 0,
      IcAH210: 0,
      I0AH210: 0,
      PAH210: 0,
      QAH210: 0,
      cos_phiAH210: 0,
      FAH210: 0,
      CL_3U0AH210: 0,
      CL_I01AH210: 0,
      CL_I05AH210: 0,
      CL_Q1AH210: 0,
      CL_Q5AH210: 0,
      CL_AI01AH210: 0,
      CL_AI05AH210: 0,

      UabAH211: 0,
      UbcAH211: 0,
      UcaAH211: 0,
      UaAH211: 0,
      UbAH211: 0,
      UcAH211: 0,
      IaAH211: 0,
      IbAH211: 0,
      IcAH211: 0,
      I0AH211: 0,
      PAH211: 0,
      QAH211: 0,
      cos_phiAH211: 0,
      FAH211: 0,
      CL_3U0AH211: 0,
      CL_I01AH211: 0,
      CL_I05AH211: 0,
      CL_Q1AH211: 0,
      CL_Q5AH211: 0,
      CL_AI01AH211: 0,
      CL_AI05AH211: 0,

      UaAH201jiliang: 0,
      UbAH201jiliang: 0,
      UcAH201jiliang: 0,
      UxAH201jiliang: 0,
      IaAH201jiliang: 0,
      IbAH201jiliang: 0,
      IcAH201jiliang: 0,
      I0cAH201jiliang: 0,
      U2AH201jiliang: 0,
      UabAH201jiliang: 0,
      UbcAH201jiliang: 0,
      UcaAH201jiliang: 0,
      Uab_huaAH201jiliang: 0,
      Ubc_huaAH201jiliang: 0,
      Uca_huaAH201jiliang: 0,

      UaAH202jiliang: 0,
      UbAH202jiliang: 0,
      UcAH202jiliang: 0,
      UxAH202jiliang: 0,
      IaAH202jiliang: 0,
      IbAH202jiliang: 0,
      IcAH202jiliang: 0,
      I0cAH202jiliang: 0,
      U2AH202jiliang: 0,
      UabAH202jiliang: 0,
      UbcAH202jiliang: 0,
      UcaAH202jiliang: 0,
      Uab_huaAH202jiliang: 0,
      Ubc_huaAH202jiliang: 0,
      Uca_huaAH202jiliang: 0,

      UaAH203jiliang: 0,
      UbAH203jiliang: 0,
      UcAH203jiliang: 0,
      UxAH203jiliang: 0,
      IaAH203jiliang: 0,
      IbAH203jiliang: 0,
      IcAH203jiliang: 0,
      I0cAH203jiliang: 0,
      U2AH203jiliang: 0,
      UabAH203jiliang: 0,
      UbcAH203jiliang: 0,
      UcaAH203jiliang: 0,
      Uab_huaAH203jiliang: 0,
      Ubc_huaAH203jiliang: 0,
      Uca_huaAH203jiliang: 0,

      UaAH206jiliang: 0,
      UbAH206jiliang: 0,
      UcAH206jiliang: 0,
      UxAH206jiliang: 0,
      IaAH206jiliang: 0,
      IbAH206jiliang: 0,
      IcAH206jiliang: 0,
      I0cAH206jiliang: 0,
      U2AH206jiliang: 0,
      UabAH206jiliang: 0,
      UbcAH206jiliang: 0,
      UcaAH206jiliang: 0,
      Uab_huaAH206jiliang: 0,
      Ubc_huaAH206jiliang: 0,
      Uca_huaAH206jiliang: 0,

      UaAH209jiliang: 0,
      UbAH209jiliang: 0,
      UcAH209jiliang: 0,
      UxAH209jiliang: 0,
      IaAH209jiliang: 0,
      IbAH209jiliang: 0,
      IcAH209jiliang: 0,
      I0cAH209jiliang: 0,
      U2AH209jiliang: 0,
      UabAH209jiliang: 0,
      UbcAH209jiliang: 0,
      UcaAH209jiliang: 0,
      Uab_huaAH209jiliang: 0,
      Ubc_huaAH209jiliang: 0,
      Uca_huaAH209jiliang: 0,

      UaAH210jiliang: 0,
      UbAH210jiliang: 0,
      UcAH210jiliang: 0,
      UxAH210jiliang: 0,
      IaAH210jiliang: 0,
      IbAH210jiliang: 0,
      IcAH210jiliang: 0,
      I0cAH210jiliang: 0,
      U2AH210jiliang: 0,
      UabAH210jiliang: 0,
      UbcAH210jiliang: 0,
      UcaAH210jiliang: 0,
      Uab_huaAH210jiliang: 0,
      Ubc_huaAH210jiliang: 0,
      Uca_huaAH210jiliang: 0,

      UaAH211jiliang: 0,
      UbAH211jiliang: 0,
      UcAH211jiliang: 0,
      UxAH211jiliang: 0,
      IaAH211jiliang: 0,
      IbAH211jiliang: 0,
      IcAH211jiliang: 0,
      I0cAH211jiliang: 0,
      U2AH211jiliang: 0,
      UabAH211jiliang: 0,
      UbcAH211jiliang: 0,
      UcaAH211jiliang: 0,
      Uab_huaAH211jiliang: 0,
      Ubc_huaAH211jiliang: 0,
      Uca_huaAH211jiliang: 0,
    }
  },
  mounted() {
    // 使用定时器每2秒更新数据
    // setInterval(() => {
    //   this.updateUData()
    //   this.updateIData()
    //   this.updateTempData()
    // }, 2000)

    // 初始化数据
    this.OneData()
    this.TwoData()
    this.ThreeData()
    this.SixData()
    this.NineData()
    this.TenData()
    this.ElevenData()
    this.oneJiLiangData()
    this.twoJiLiangData()
    this.threeJiLiangData()
    this.sixJiLiangData()
    this.nineJiLiangData()
    this.tenJiLiangData()
    this.elevenJiLiangData()
  },
  methods: {
    start201yaoce() {
      console.log('201遥测开始数据更新')
      // 开启数据更新逻辑
      this.timer = setInterval(() => {
        this.OneData()
      }, 4000)
    },
    start202yaoce() {
      console.log('202遥测开始数据更新')
      // 开启数据更新逻辑
      this.timer2 = setInterval(() => {
        this.TwoData()
      }, 4000)
    },
    start203yaoce() {
      console.log('203遥测开始数据更新')
      // 开启数据更新逻辑
      this.timer3 = setInterval(() => {
        this.ThreeData()
      }, 4000)
    },
    start206yaoce() {
      console.log('206遥测开始数据更新')
      // 开启数据更新逻辑
      this.timer6 = setInterval(() => {
        this.SixData()
      }, 4000)
    },
    start209yaoce() {
      console.log('209遥测开始数据更新')
      // 开启数据更新逻辑
      this.timer9 = setInterval(() => {
        this.NineData()
      }, 4000)
    },
    start210yaoce() {
      console.log('210遥测开始数据更新')
      // 开启数据更新逻辑
      this.timer10 = setInterval(() => {
        this.TenData()
      }, 4000)
    },
    start211yaoce() {
      console.log('211遥测开始数据更新')
      // 开启数据更新逻辑
      this.timer11 = setInterval(() => {
        this.ElevenData()
      }, 4000)
    },

    stop201yaoce() {
      axios.post('http://192.168.6.101/spyaoce').then(response => {
      })
        .catch(error => {
          console.error('数据获取失败', error)
        })
      clearInterval(this.timer)
    },
    stop202yaoce() {
      axios.post('http://192.168.6.102/spyaoce').then(response => {
      })
          .catch(error => {
            console.error('数据获取失败', error)
          })
      // 停止数据更新逻辑
      clearInterval(this.timer2)
    },
    stop203yaoce() {
      axios.post('http://192.168.6.103/spyaoce').then(response => {
      })
          .catch(error => {
            console.error('数据获取失败', error)
          })
      // 停止数据更新逻辑
      clearInterval(this.timer3)
    },
    stop206yaoce() {
      axios.post('http://192.168.6.104/spyaoce').then(response => {
      })
          .catch(error => {
            console.error('数据获取失败', error)
          })
      // 停止数据更新逻辑
      clearInterval(this.timer6)
    },
    stop209yaoce() {
      axios.post('http://192.168.6.105/spyaoce').then(response => {
      })
          .catch(error => {
            console.error('数据获取失败', error)
          })
      // 停止数据更新逻辑
      clearInterval(this.timer9)
    },
    stop210yaoce() {
      axios.post('http://192.168.6.106/spyaoce').then(response => {
      })
          .catch(error => {
            console.error('数据获取失败', error)
        })
      // 停止数据更新逻辑
      clearInterval(this.timer10)
    },
    stop211yaoce() {
      axios.post('http://192.168.6.107/spyaoce').then(response => {
      })
        .catch(error => {
          console.error('数据获取失败', error)
          })
      // 停止数据更新逻辑
      clearInterval(this.timer11)
    },

    start201jiliang() {
      console.log('201计量开始数据更新')
      // 开启数据更新逻辑
      this.timer = setInterval(() => {
        this.oneJiLiangData()
      }, 4000)
    },
    start202jiliang() {
      console.log('202计量开始数据更新')
      // 开启数据更新逻辑
      this.timer2 = setInterval(() => {
        this.twoJiLiangData()
      }, 4000)
    },
    start203jiliang() {
      console.log('203计量开始数据更新')
      // 开启数据更新逻辑
      this.timer3 = setInterval(() => {
        this.threeJiLiangData()
      }, 4000)
    },
    start206jiliang() {
      console.log('206计量开始数据更新')
      // 开启数据更新逻辑
      this.timer6 = setInterval(() => {
        this.sixJiLiangData()
      }, 4000)
    },
    start209jiliang() {
      console.log('209计量开始数据更新')
      // 开启数据更新逻辑
      this.timer9 = setInterval(() => {
        this.nineJiLiangData()
      }, 4000)
    },
    start210jiliang() {
      console.log('210计量开始数据更新')
      // 开启数据更新逻辑
      this.timer10 = setInterval(() => {
        this.tenJiLiangData()
      }, 4000)
    },
    start211jiliang() {
      console.log('211计量开始数据更新')
      // 开启数据更新逻辑
      this.timer11 = setInterval(() => {
        this.elevenJiLiangData()
      }, 4000)
    },

    stop201jiliang() {
      axios.post('http://192.168.6.101/spjiliang').then(response => {
      })
          .catch(error => {
            console.error('数据获取失败', error)
          })      // 停止数据更新逻辑
      clearInterval(this.timer)
    },
    stop202jiliang() {
      axios.post('http://192.168.6.102/spjiliang').then(response => {
      })
          .catch(error => {
            console.error('数据获取失败', error)
          })      // 停止数据更新逻辑
      // 停止数据更新逻辑
      clearInterval(this.timer2)
    },
    stop203jiliang() {
      axios.post('http://192.168.6.103/spjiliang').then(response => {
      })
          .catch(error => {
            console.error('数据获取失败', error)
          })      // 停止数据更新逻辑
      // 停止数据更新逻辑
      clearInterval(this.timer3)
    },
    stop206jiliang() {
      axios.post('http://192.168.6.104/spjiliang').then(response => {
      })
          .catch(error => {
            console.error('数据获取失败', error)
          })      // 停止数据更新逻辑
      // 停止数据更新逻辑
      clearInterval(this.timer6)
    },
    stop209jiliang() {
      axios.post('http://192.168.6.105/spjiliang').then(response => {
      })
          .catch(error => {
            console.error('数据获取失败', error)
          })      // 停止数据更新逻辑
      // 停止数据更新逻辑
      clearInterval(this.timer9)
    },
    stop210jiliang() {
      axios.post('http://192.168.6.106/spjiliang').then(response => {
      })
          .catch(error => {
            console.error('数据获取失败', error)
          })      // 停止数据更新逻辑
      // 停止数据更新逻辑
      clearInterval(this.timer10)
    },
    stop211jiliang() {
      axios.post('http://192.168.6.107/spjiliang').then(response => {
      })
          .catch(error => {
            console.error('数据获取失败', error)
          })      // 停止数据更新逻辑
      // 停止数据更新逻辑
      clearInterval(this.timer11)
    },

    OneData() {
      axios.get('http://192.168.6.101/yaoce')
        .then(response => {
          const { data } = response
          console.log(data)

          this.UabAH201 = data.Uab
          this.UbcAH201 = data.Ubc
          this.UcaAH201 = data.Uca
          this.UaAH201 = data.Ua
          this.UbAH201 = data.Ub
          this.UcAH201 = data.Uc
          this.IaAH201 = data.Ia
          this.IbAH201 = data.Ib
          this.IcAH201 = data.Ic
          this.I0AH201 = data.I0
          this.PAH201 = data.P
          this.QAH201 = data.Q
          this.cos_phiAH201 = data.cos_phi
          this.FAH201 = data.F
          this.CL_3U0AH201 = data.CL_3U0
          this.CL_I01AH201 = data.CL_I01
          this.CL_I05AH201 = data.CL_I05
          this.CL_Q1AH201 = data.CL_Q1
          this.CL_Q5AH201 = data.CL_Q5
          this.CL_AI01AH201 = data.CL_AI01
          this.CL_AI05AH201 = data.CL_AI05
        })
        .catch(error => {
          console.error('Error fetching data:', error)
        })
    },

    TwoData() {
      axios.get('http://192.168.6.102/yaoce')
        .then(response => {
          const { data } = response
          console.log(data)

          this.UabAH202 = data.Uab
          this.UbcAH202 = data.Ubc
          this.UcaAH202 = data.Uca
          this.UaAH202 = data.Ua
          this.UbAH202 = data.Ub
          this.UcAH202 = data.Uc
          this.IaAH202 = data.Ia
          this.IbAH202 = data.Ib
          this.IcAH202 = data.Ic
          this.I0AH202 = data.I0
          this.PAH202 = data.P
          this.QAH202 = data.Q
          this.cos_phiAH202 = data.cos_phi
          this.FAH202 = data.F
          this.CL_3U0AH202 = data.CL_3U0
          this.CL_I01AH202 = data.CL_I01
          this.CL_I05AH202 = data.CL_I05
          this.CL_Q1AH202 = data.CL_Q1
          this.CL_Q5AH202 = data.CL_Q5
          this.CL_AI01AH202 = data.CL_AI01
          this.CL_AI05AH202 = data.CL_AI05
        })
        .catch(error => {
          console.error('Error fetching data:', error)
        })
    },

    ThreeData() {
      axios.get('http://192.168.6.103/yaoce')
        .then(response => {
          const { data } = response
          console.log(data)

          this.UabAH203 = data.Uab
          this.UbcAH203 = data.Ubc
          this.UcaAH203 = data.Uca
          this.UaAH203 = data.Ua
          this.UbAH203 = data.Ub
          this.UcAH203 = data.Uc
          this.IaAH203 = data.Ia
          this.IbAH203 = data.Ib
          this.IcAH203 = data.Ic
          this.I0AH203 = data.I0
          this.PAH203 = data.P
          this.QAH203 = data.Q
          this.cos_phiAH203 = data.cos_phi
          this.FAH203 = data.F
          this.CL_3U0AH203 = data.CL_3U0
          this.CL_I01AH203 = data.CL_I01
          this.CL_I05AH203 = data.CL_I05
          this.CL_Q1AH203 = data.CL_Q1
          this.CL_Q5AH203 = data.CL_Q5
          this.CL_AI01AH203 = data.CL_AI01
          this.CL_AI05AH203 = data.CL_AI05
        })
        .catch(error => {
          console.error('Error fetching data:', error)
        })
    },

    SixData() {
      axios.get('http://192.168.6.104/yaoce')
        .then(response => {
          const { data } = response
          console.log(data)

          this.UabAH206 = data.Uab
          this.UbcAH206 = data.Ubc
          this.UcaAH206 = data.Uca
          this.UaAH206 = data.Ua
          this.UbAH206 = data.Ub
          this.UcAH206 = data.Uc
          this.IaAH206 = data.Ia
          this.IbAH206 = data.Ib
          this.IcAH206 = data.Ic
          this.I0AH206 = data.I0
          this.PAH206 = data.P
          this.QAH206 = data.Q
          this.cos_phiAH206 = data.cos_phi
          this.FAH206 = data.F
          this.CL_3U0AH206 = data.CL_3U0
          this.CL_I01AH206 = data.CL_I01
          this.CL_I05AH206 = data.CL_I05
          this.CL_Q1AH206 = data.CL_Q1
          this.CL_Q5AH206 = data.CL_Q5
          this.CL_AI01AH206 = data.CL_AI01
          this.CL_AI05AH206 = data.CL_AI05
        })
        .catch(error => {
          console.error('Error fetching data:', error)
        })
    },

    NineData() {
      axios.get('http://192.168.6.105/yaoce')
        .then(response => {
          const { data } = response
          console.log(data)

          this.UabAH209 = data.Uab
          this.UbcAH209 = data.Ubc
          this.UcaAH209 = data.Uca
          this.UaAH209 = data.Ua
          this.UbAH209 = data.Ub
          this.UcAH209 = data.Uc
          this.IaAH209 = data.Ia
          this.IbAH209 = data.Ib
          this.IcAH209 = data.Ic
          this.I0AH209 = data.I0
          this.PAH209 = data.P
          this.QAH209 = data.Q
          this.cos_phiAH209 = data.cos_phi
          this.FAH209 = data.F
          this.CL_3U0AH209 = data.CL_3U0
          this.CL_I01AH209 = data.CL_I01
          this.CL_I05AH209 = data.CL_I05
          this.CL_Q1AH209 = data.CL_Q1
          this.CL_Q5AH209 = data.CL_Q5
          this.CL_AI01AH209 = data.CL_AI01
          this.CL_AI05AH209 = data.CL_AI05
        })
        .catch(error => {
          console.error('Error fetching data:', error)
        })
    },

    TenData() {
      axios.get('http://192.168.6.106/yaoce')
        .then(response => {
          const { data } = response
          console.log(data)

          this.UabAH210 = data.Uab
          this.UbcAH210 = data.Ubc
          this.UcaAH210 = data.Uca
          this.UaAH210 = data.Ua
          this.UbAH210 = data.Ub
          this.UcAH210 = data.Uc
          this.IaAH210 = data.Ia
          this.IbAH210 = data.Ib
          this.IcAH210 = data.Ic
          this.I0AH210 = data.I0
          this.PAH210 = data.P
          this.QAH210 = data.Q
          this.cos_phiAH210 = data.cos_phi
          this.FAH210 = data.F
          this.CL_3U0AH210 = data.CL_3U0
          this.CL_I01AH210 = data.CL_I01
          this.CL_I05AH210 = data.CL_I05
          this.CL_Q1AH210 = data.CL_Q1
          this.CL_Q5AH210 = data.CL_Q5
          this.CL_AI01AH210 = data.CL_AI01
          this.CL_AI05AH210 = data.CL_AI05
        })
        .catch(error => {
          console.error('Error fetching data:', error)
        })
    },

    ElevenData() {
      axios.get('http://192.168.6.107/yaoce')
        .then(response => {
          const { data } = response
          console.log(data)

          this.UabAH211 = data.Uab
          this.UbcAH211 = data.Ubc
          this.UcaAH211 = data.Uca
          this.UaAH211 = data.Ua
          this.UbAH211 = data.Ub
          this.UcAH211 = data.Uc
          this.IaAH211 = data.Ia
          this.IbAH211 = data.Ib
          this.IcAH211 = data.Ic
          this.I0AH211 = data.I0
          this.PAH211 = data.P
          this.QAH211 = data.Q
          this.cos_phiAH211 = data.cos_phi
          this.FAH211 = data.F
          this.CL_3U0AH211 = data.CL_3U0
          this.CL_I01AH211 = data.CL_I01
          this.CL_I05AH211 = data.CL_I05
          this.CL_Q1AH211 = data.CL_Q1
          this.CL_Q5AH211 = data.CL_Q5
          this.CL_AI01AH211 = data.CL_AI01
          this.CL_AI05AH211 = data.CL_AI05
        })
        .catch(error => {
          console.error('Error fetching data:', error)
        })
    },

    oneJiLiangData() {
      axios.get('http://192.168.6.101/jiliang')
        .then(response => {
          const { data } = response
          console.log(data)

          this.UaAH201jiliang = data.Ua
          this.UbAH201jiliang = data.Ub
          this.UcAH201jiliang = data.Uc
          this.UxAH201jiliang = data.Ux
          this.IaAH201jiliang = data.Ia
          this.IbAH201jiliang = data.Ib
          this.IcAH201jiliang = data.Ic
          this.I0cAH201jiliang = data.I0c
          this.U2AH201jiliang = data.U2
          this.UabAH201jiliang = data.Uab
          this.UbcAH201jiliang = data.Ubc
          this.UcaAH201jiliang = data.Uca
          this.Uab_huaAH201jiliang = data.Uab_hua
          this.Ubc_huaAH201jiliang = data.Ubc_hua
          this.Uca_huaAH201jiliang = data.Uca_hua
        })
        .catch(error => {
          console.error('Error fetching data:', error)
        })
    },
    twoJiLiangData() {
      axios.get('http://192.168.6.102/jiliang')
        .then(response => {
          const { data } = response
          console.log(data)

          this.UaAH202jiliang = data.Ua
          this.UbAH202jiliang = data.Ub
          this.UcAH202jiliang = data.Uc
          this.UxAH202jiliang = data.Ux
          this.IaAH202jiliang = data.Ia
          this.IbAH202jiliang = data.Ib
          this.IcAH202jiliang = data.Ic
          this.I0cAH202jiliang = data.I0c
          this.U2AH202jiliang = data.U2
          this.UabAH202jiliang = data.Uab
          this.UbcAH202jiliang = data.Ubc
          this.UcaAH202jiliang = data.Uca
          this.Uab_huaAH202jiliang = data.Uab_hua
          this.Ubc_huaAH202jiliang = data.Ubc_hua
          this.Uca_huaAH202jiliang = data.Uca_hua
        })
        .catch(error => {
          console.error('Error fetching data:', error)
        })
    },
    threeJiLiangData() {
      axios.get('http://192.168.6.103/jiliang')
        .then(response => {
          const { data } = response
          console.log(data)

          this.UaAH203jiliang = data.Ua
          this.UbAH203jiliang = data.Ub
          this.UcAH203jiliang = data.Uc
          this.UxAH203jiliang = data.Ux
          this.IaAH203jiliang = data.Ia
          this.IbAH203jiliang = data.Ib
          this.IcAH203jiliang = data.Ic
          this.I0cAH203jiliang = data.I0c
          this.U2AH203jiliang = data.U2
          this.UabAH203jiliang = data.Uab
          this.UbcAH203jiliang = data.Ubc
          this.UcaAH203jiliang = data.Uca
          this.Uab_huaAH203jiliang = data.Uab_hua
          this.Ubc_huaAH203jiliang = data.Ubc_hua
          this.Uca_huaAH203jiliang = data.Uca_hua
        })
        .catch(error => {
          console.error('Error fetching data:', error)
        })
    },
    sixJiLiangData() {
      axios.get('http://192.168.6.104/jiliang')
        .then(response => {
          const { data } = response
          console.log(data)

          this.UaAH206jiliang = data.Ua
          this.UbAH206jiliang = data.Ub
          this.UcAH206jiliang = data.Uc
          this.UxAH206jiliang = data.Ux
          this.IaAH206jiliang = data.Ia
          this.IbAH206jiliang = data.Ib
          this.IcAH206jiliang = data.Ic
          this.I0cAH206jiliang = data.I0c
          this.U2AH206jiliang = data.U2
          this.UabAH206jiliang = data.Uab
          this.UbcAH206jiliang = data.Ubc
          this.UcaAH206jiliang = data.Uca
          this.Uab_huaAH206jiliang = data.Uab_hua
          this.Ubc_huaAH206jiliang = data.Ubc_hua
          this.Uca_huaAH206jiliang = data.Uca_hua
        })
        .catch(error => {
          console.error('Error fetching data:', error)
        })
    },
    nineJiLiangData() {
      axios.get('http://192.168.6.105/jiliang')
        .then(response => {
          const { data } = response
          console.log(data)

          this.UaAH209jiliang = data.Ua
          this.UbAH209jiliang = data.Ub
          this.UcAH209jiliang = data.Uc
          this.UxAH209jiliang = data.Ux
          this.IaAH209jiliang = data.Ia
          this.IbAH209jiliang = data.Ib
          this.IcAH209jiliang = data.Ic
          this.I0cAH209jiliang = data.I0c
          this.U2AH209jiliang = data.U2
          this.UabAH209jiliang = data.Uab
          this.UbcAH209jiliang = data.Ubc
          this.UcaAH209jiliang = data.Uca
          this.Uab_huaAH209jiliang = data.Uab_hua
          this.Ubc_huaAH209jiliang = data.Ubc_hua
          this.Uca_huaAH209jiliang = data.Uca_hua
        })
        .catch(error => {
          console.error('Error fetching data:', error)
        })
    },
    tenJiLiangData() {
      axios.get('http://192.168.6.106/jiliang')
        .then(response => {
          const { data } = response
          console.log(data)

          this.UaAH210jiliang = data.Ua
          this.UbAH210jiliang = data.Ub
          this.UcAH210jiliang = data.Uc
          this.UxAH210jiliang = data.Ux
          this.IaAH210jiliang = data.Ia
          this.IbAH210jiliang = data.Ib
          this.IcAH210jiliang = data.Ic
          this.I0cAH210jiliang = data.I0c
          this.U2AH210jiliang = data.U2
          this.UabAH210jiliang = data.Uab
          this.UbcAH210jiliang = data.Ubc
          this.UcaAH210jiliang = data.Uca
          this.Uab_huaAH210jiliang = data.Uab_hua
          this.Ubc_huaAH210jiliang = data.Ubc_hua
          this.Uca_huaAH210jiliang = data.Uca_hua
        })
        .catch(error => {
          console.error('Error fetching data:', error)
        })
    },
    elevenJiLiangData() {
      axios.get('http://192.168.6.107/jiliang')
        .then(response => {
          const { data } = response
          console.log(data)

          this.UaAH211jiliang = data.Ua
          this.UbAH211jiliang = data.Ub
          this.UcAH211jiliang = data.Uc
          this.UxAH211jiliang = data.Ux
          this.IaAH211jiliang = data.Ia
          this.IbAH211jiliang = data.Ib
          this.IcAH211jiliang = data.Ic
          this.I0cAH211jiliang = data.I0c
          this.U2AH211jiliang = data.U2
          this.UabAH211jiliang = data.Uab
          this.UbcAH211jiliang = data.Ubc
          this.UcaAH211jiliang = data.Uca
          this.Uab_huaAH211jiliang = data.Uab_hua
          this.Ubc_huaAH211jiliang = data.Ubc_hua
          this.Uca_huaAH211jiliang = data.Uca_hua
        })
        .catch(error => {
          console.error('Error fetching data:', error)
        })
    },

  },
}
</script>

<style scoped>
.text-center th {
  text-align: center;
}

.table thead th {
  display: none;
}
.text-sty{
  color: #109f0c;
  font-size: 17px;
  text-align: center;
  width: 1000px;
  table-layout: fixed;
}
.unit-text-color {
  color: #0d1e0d;
  font-size: 17px;
  text-align: center;
  width: 100%;
  font-weight: bold;
  table-layout: fixed;
}
.table-font{
  font-size: 30px;
  font-family: 华文中宋;
  color: #0c1d2f;
}
</style>
