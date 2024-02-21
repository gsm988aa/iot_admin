<template>
  <div
    style="height: 100%;width:100%;font-size: 26px;position: absolute"
  >
    <b-card
      header="联排状态示意图(管理员可见)"
    >

      <div>
        <b-button
          variant="primary"
          @click="collapsed = !collapsed"
        >
          点击展开完整联排系统图
        </b-button>
        <b-collapse v-model="collapsed">
          <b-card style="overflow: auto;width: 100%;">
            <b-table
              striped
              hover
              :items="items"
              thead-class="text-center"
              bordered
              style="table-layout: fixed; width: 2000px;"
            >
              <template
                #cell(unit)="row"
                style="justify-content: center;"
              />
              <template
                #cell(AH201)="row"
                style="justify-content: center;"
              >
                <img
                  v-if="hezha01 === 1 && shiyanwei === 1"
                  src="@/assets/images/201/AH201shiyanhe.svg"
                  style="max-width: 100%; max-height: 100%"
                >
                <img
                  v-else-if="fenzha01 === 1 && shiyanwei == 1"
                  src="@/assets/images/201/AH201shiyanfen.svg"
                  style="max-width: 100%; max-height: 100%"
                >
                <img
                  v-else-if="hezha01 === 1 && gongzuowei === 1"
                  src="@/assets/images/201/AH201gongzuohe.svg"
                  style="max-width: 100%; max-height: 100%"
                >
                <img
                  v-else-if="fenzha01 === 1 && gongzuowei == 1"
                  src="@/assets/images/201/AH201gongzuofen.svg"
                  style="max-width: 100%; max-height: 100%"
                >
                <img
                  v-else
                  src="@/assets/images/AH201.svg"
                  style="max-width: 100%; max-height: 100%"
                >
              </template>

              <template
                #cell(AH202)="row"
                style="justify-content: center"
              >
                <img
                  v-if="daohe02 === 1 && shiyanwei == 1 && hezha02 === 1 "
                  src="@/assets/images/202/AH202jiedihe.svg"
                  style="max-width: 100%; max-height: 100%"
                >
                <img
                  v-else-if="daofen02 === 1 && gongzuowei == 1 && fenzha02 === 1 "
                  src="@/assets/images/202/AH202jiedifen.svg"
                  style="max-width: 100%; max-height: 100%"
                >
                <img
                  v-else-if="hezha02 === 1 && shiyanwei === 1"
                  src="@/assets/images/202/AH202shiyanhe.svg"
                  style="max-width: 100%; max-height: 100%"
                >
                <img
                  v-else-if="fenzha02 === 1 && shiyanwei == 1"
                  src="@/assets/images/202/AH202shiyanfen.svg"
                  style="max-width: 100%; max-height: 100%"
                >
                <img
                  v-else-if="hezha02 === 1 && gongzuowei === 1"
                  src="@/assets/images/202/AH202gongzuohe.svg"
                  style="max-width: 100%; max-height: 100%"
                >
                <img
                  v-else-if="fenzha02 === 1 && gongzuowei == 1"
                  src="@/assets/images/202/AH202gongzuofen.svg"
                  style="max-width: 100%; max-height: 100%"
                >
                <img
                  v-else
                  src="@/assets/images/AH202.svg"
                  style="max-width: 100%; max-height: 100%"
                >
              </template>

              <template
                #cell(AH203)="row"
                style="justify-content: center"
              >
                <img
                  v-if="daohe03 === 1 && shiyanwei == 1 && hezha03 === 1 "
                  src="@/assets/images/202/AH202jiedihe.svg"
                  style="max-width: 100%; max-height: 100%"
                >
                <img
                  v-else-if="daofen03 === 1 && gongzuowei == 1 && fenzha03 === 1 "
                  src="@/assets/images/202/AH202jiedifen.svg"
                  style="max-width: 100%; max-height: 100%"
                >
                <img
                  v-else-if="hezha03 === 1 && shiyanwei === 1"
                  src="@/assets/images/202/AH202shiyanhe.svg"
                  style="max-width: 100%; max-height: 100%"
                >
                <img
                  v-else-if="fenzha03 === 1 && shiyanwei == 1"
                  src="@/assets/images/202/AH202shiyanfen.svg"
                  style="max-width: 100%; max-height: 100%"
                >
                <img
                  v-else-if="hezha03 === 1 && gongzuowei === 1"
                  src="@/assets/images/202/AH202gongzuohe.svg"
                  style="max-width: 100%; max-height: 100%"
                >
                <img
                  v-else-if="fenzha03 === 1 && gongzuowei == 1"
                  src="@/assets/images/202/AH202gongzuofen.svg"
                  style="max-width: 100%; max-height: 100%"
                >
                <img
                  v-else
                  src="@/assets/images/AH202.svg"
                  style="max-width: 100%; max-height: 100%"
                >
              </template>

              <template
                #cell(AH206)="row"
                style="justify-content: center"
              >
                <img
                  v-if="hezha06 === 1 && shiyanwei === 1"
                  src="@/assets/images/206/AH206shiyanhe.svg"
                  style="max-width: 100%; max-height: 100%"
                >
                <img
                  v-else-if="fenzha06 === 1 && shiyanwei == 1"
                  src="@/assets/images/206/AH206shiyanfen.svg"
                  style="max-width: 100%; max-height: 100%"
                >
                <img
                  v-else-if="hezha06 === 1 && gongzuowei === 1"
                  src="@/assets/images/206/AH206gongzuohe.svg"
                  style="max-width: 100%; max-height: 100%"
                >
                <img
                  v-else-if="fenzha06 === 1 && gongzuowei == 1"
                  src="@/assets/images/206/AH206gongzuofen.svg"
                  style="max-width: 100%; max-height: 100%"
                >
                <img
                  v-else
                  src="@/assets/images/AH206.svg"
                  style="max-width: 100%; max-height: 100%"
                >
              </template>

              <template
                #cell(AH209)="row"
                style="justify-content: center"
              >
                <img
                  v-if="daohe09 === 1 && shiyanwei == 1 && hezha09 === 1 "
                  src="@/assets/images/202/AH202jiedihe.svg"
                  style="max-width: 100%; max-height: 100%"
                >
                <img
                  v-else-if="daofen09 === 1 && gongzuowei == 1 && fenzha09 === 1 "
                  src="@/assets/images/202/AH202jiedifen.svg"
                  style="max-width: 100%; max-height: 100%"
                >

                <img
                  v-else-if="hezha09 === 1 && shiyanwei === 1"
                  src="@/assets/images/202/AH202shiyanhe.svg"
                  style="max-width: 100%; max-height: 100%"
                >
                <img
                  v-else-if="fenzha09 === 1 && shiyanwei == 1"
                  src="@/assets/images/202/AH202shiyanfen.svg"
                  style="max-width: 100%; max-height: 100%"
                >
                <img
                  v-else-if="hezha09 === 1 && gongzuowei === 1"
                  src="@/assets/images/202/AH202gongzuohe.svg"
                  style="max-width: 100%; max-height: 100%"
                >
                <img
                  v-else-if="fenzha09 === 1 && gongzuowei == 1"
                  src="@/assets/images/202/AH202gongzuofen.svg"
                  style="max-width: 100%; max-height: 100%"
                >
                <img
                  v-else
                  src="@/assets/images/AH202.svg"
                  style="max-width: 100%; max-height: 100%"
                >
              </template>

              <template
                #cell(AH200)="row"
                style="justify-content: center"
              >
                <img
                  src="@/assets/images/AH200.svg"
                  style="max-width: 100%; max-height: 100%"
                >
              </template>

              <template
                #cell(AH210)="row"
                style="justify-content: center"
              >
                <img
                  v-if="hezha10 === 1 && shiyanwei === 1"
                  src="@/assets/images/202/AH202shiyanhe.svg"
                  style="max-width: 100%; max-height: 100%"
                >
                <img
                  v-else-if="fenzha10 === 1 && shiyanwei == 1"
                  src="@/assets/images/202/AH202shiyanfen.svg"
                  style="max-width: 100%; max-height: 100%"
                >
                <img
                  v-else-if="hezha10 === 1 && gongzuowei === 1"
                  src="@/assets/images/202/AH202gongzuohe.svg"
                  style="max-width: 100%; max-height: 100%"
                >
                <img
                  v-else-if="fenzha10 === 1 && gongzuowei == 1"
                  src="@/assets/images/202/AH202gongzuofen.svg"
                  style="max-width: 100%; max-height: 100%"
                >
                <img
                  v-else-if="daohe10 === 1 && shiyanwei == 1 && hezha10 === 1 "
                  src="@/assets/images/202/AH202jiedihe.svg"
                  style="max-width: 100%; max-height: 100%"
                >
                <img
                  v-else-if="daofen10 === 1 && gongzuowei == 1 && fenzha10 === 1 "
                  src="@/assets/images/202/AH202jiedifen.svg"
                  style="max-width: 100%; max-height: 100%"
                >
                <img
                  v-else
                  src="@/assets/images/AH202.svg"
                  style="max-width: 100%; max-height: 100%"
                >
              </template>

              <template
                #cell(AH211)="row"
                style="justify-content: center"
              >
                <img
                  v-if="hezha11 === 1 && shiyanwei === 1"
                  src="@/assets/images/201/AH201shiyanhe.svg"
                  style="max-width: 100%; max-height: 100%"
                >
                <img
                  v-else-if="fenzha11 === 1 && shiyanwei == 1"
                  src="@/assets/images/201/AH201shiyanfen.svg"
                  style="max-width: 100%; max-height: 100%"
                >
                <img
                  v-else-if="hezha11 === 1 && gongzuowei === 1"
                  src="@/assets/images/201/AH201gongzuohe.svg"
                  style="max-width: 100%; max-height: 100%"
                >
                <img
                  v-else-if="fenzha11 === 1 && gongzuowei == 1"
                  src="@/assets/images/201/AH201gongzuofen.svg"
                  style="max-width: 100%; max-height: 100%"
                >
                <img
                  v-else
                  src="@/assets/images/AH201.svg"
                  style="max-width: 100%; max-height: 100%"
                >
              </template>
            </b-table>
          </b-card>
        </b-collapse>
      </div>

      <br>
      <b-row>
        <b-button
          variant="outline-primary"
          @click="start201gaojing"
        >
          开启AH201示意图
        </b-button>
      &nbsp
        <b-button
          variant="outline-danger"
          @click="stop201gaojing"
        >
          关闭AH201示意图
        </b-button>
      &nbsp
        <b-button
          variant="outline-primary"
          @click="start202gaojing"
        >
          开启AH202示意图
        </b-button>
      &nbsp
        <b-button
          variant="outline-danger"
          @click="stop202gaojing"
        >
          关闭AH202示意图
        </b-button>
      &nbsp
        <b-button
          variant="outline-primary"
          @click="start203gaojing"
        >
          开启AH203示意图
        </b-button>

        <b-button
          variant="outline-danger"
          @click="stop203gaojing"
        >
          关闭AH203示意图
        </b-button>
      &nbsp

        <b-button
          variant="outline-primary"
          @click="start206gaojing"
        >
          开启AH206示意图
        </b-button>
      &nbsp
        <b-button
          variant="outline-danger"
          @click="stop206gaojing"
        >
          关闭AH206示意图
        </b-button>
      &nbsp

        <b-button
          variant="outline-primary"
          @click="start209gaojing"
        >
          开启AH209示意图
        </b-button>
      &nbsp
        <b-button
          variant="outline-danger"
          @click="stop209gaojing"
        >
          关闭AH209示意图
        </b-button>
      &nbsp

        <b-button
          variant="outline-primary"
          @click="start210gaojing"
        >
          开启AH210示意图
        </b-button>
      &nbsp
        <b-button
          variant="outline-danger"
          @click="stop210gaojing"
        >
          关闭AH210示意图
        </b-button>
      &nbsp

        <b-button
          variant="outline-primary"
          @click="start211gaojing"
        >
          开启AH211示意图
        </b-button>
      &nbsp
        <b-button
          variant="outline-danger"
          @click="stop211gaojing"
        >
          关闭AH211示意图
        </b-button>
      &nbsp
      </b-row>

      <br>
      <h6 class="text-position">
        AH201</h6>
      <!--            如果shiyanwei=0 代表没到位 如果 shiyanwei=1 代表到位-->
      <div style="display: flex;flex-direction: row;gap: 70px">

        <div style="display: flex;flex-direction: column">
          <h6 class="title">
            试验位置：</h6>
          <b-form-radio
            v-model="shiyanwei"
            :value="1"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            已到位
          </b-form-radio>
          <b-form-radio
            v-model="shiyanwei"
            :value="0"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            还未到位
          </b-form-radio>
        </div>
        <div style="display: flex;flex-direction: column">
          <h6 class="title">
            工作位置：
          </h6>
          <b-form-radio
            v-model="gongzuowei"
            :value="1"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            已到位
          </b-form-radio>
          <b-form-radio
            v-model="gongzuowei"
            :value="0"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            还未到位
          </b-form-radio>
        </div>

        <div style="display: flex;flex-direction: column">
          <h6 class="title">
            断路合闸：
          </h6>
          <b-form-radio
            v-model="hezha01"
            :value="1"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            已合闸
          </b-form-radio>
          <b-form-radio
            v-model="hezha01"
            :value="0"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            还未合闸
          </b-form-radio>
        </div>
        <div style="display: flex;flex-direction: column">
          <h6 class="title">
            断路分闸：
          </h6>
          <b-form-radio
            v-model="fenzha01"
            :value="1"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            已分闸
          </b-form-radio>
          <b-form-radio
            v-model="fenzha01"
            :value="0"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            还未分闸
          </b-form-radio>
        </div>
      </div>

      <br>
      <h6 class="text-position">
        AH202</h6>
      <!--            如果shiyanwei=0 代表没到位 如果 shiyanwei=1 代表到位-->
      <div style="display: flex;flex-direction: row;gap: 40px">

        <div style="display: flex;flex-direction: column">
          <h6 class="title">
            试验位置：</h6>
          <b-form-radio
            v-model="shiyanwei"
            :value="1"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            已到位
          </b-form-radio>
          <b-form-radio
            v-model="shiyanwei"
            :value="0"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            还未到位
          </b-form-radio>
        </div>
        <div style="display: flex;flex-direction: column">
          <h6 class="title">
            工作位置：
          </h6>
          <b-form-radio
            v-model="gongzuowei"
            :value="1"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            已到位
          </b-form-radio>
          <b-form-radio
            v-model="gongzuowei"
            :value="0"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            还未到位
          </b-form-radio>
        </div>

        <div style="display: flex;flex-direction: column">
          <h6 class="title">
            断路合闸：
          </h6>
          <b-form-radio
            v-model="hezha02"
            :value="1"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            已合闸
          </b-form-radio>
          <b-form-radio
            v-model="hezha02"
            :value="0"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            还未合闸
          </b-form-radio>
        </div>
        <div style="display: flex;flex-direction: column">
          <h6 class="title">
            断路分闸：
          </h6>
          <b-form-radio
            v-model="fenzha02"
            :value="1"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            已分闸
          </b-form-radio>
          <b-form-radio
            v-model="fenzha02"
            :value="0"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            还未分闸
          </b-form-radio>
        </div>
        <div style="display: flex;flex-direction: column">
          <h6 class="title">
            接地刀合闸：
          </h6>
          <b-form-radio
            v-model="daohe02"
            :value="1"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            已合闸
          </b-form-radio>
          <b-form-radio
            v-model="daohe02"
            :value="0"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            还未合闸
          </b-form-radio>
        </div>
        <div style="display: flex;flex-direction: column">
          <h6 class="title">
            接地刀分闸：
          </h6>
          <b-form-radio
            v-model="daofen02"
            :value="1"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            已分闸
          </b-form-radio>
          <b-form-radio
            v-model="daofen02"
            :value="0"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            还未分闸
          </b-form-radio>
        </div>
      </div>

      <br>
      <h6 class="text-position">
        AH203</h6>
      <!--            如果shiyanwei=0 代表没到位 如果 shiyanwei=1 代表到位-->
      <div style="display: flex;flex-direction: row;gap: 40px">

        <div style="display: flex;flex-direction: column">
          <h6 class="title">
            试验位置：</h6>
          <b-form-radio
            v-model="shiyanwei"
            :value="1"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            已到位
          </b-form-radio>
          <b-form-radio
            v-model="shiyanwei"
            :value="0"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            还未到位
          </b-form-radio>
        </div>
        <div style="display: flex;flex-direction: column">
          <h6 class="title">
            工作位置：
          </h6>
          <b-form-radio
            v-model="gongzuowei"
            :value="1"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            已到位
          </b-form-radio>
          <b-form-radio
            v-model="gongzuowei"
            :value="0"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            还未到位
          </b-form-radio>
        </div>

        <div style="display: flex;flex-direction: column">
          <h6 class="title">
            断路合闸：
          </h6>
          <b-form-radio
            v-model="hezha03"
            :value="1"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            已合闸
          </b-form-radio>
          <b-form-radio
            v-model="hezha03"
            :value="0"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            还未合闸
          </b-form-radio>
        </div>
        <div style="display: flex;flex-direction: column">
          <h6 class="title">
            断路分闸：
          </h6>
          <b-form-radio
            v-model="fenzha03"
            :value="1"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            已分闸
          </b-form-radio>
          <b-form-radio
            v-model="fenzha03"
            :value="0"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            还未分闸
          </b-form-radio>
        </div>
        <div style="display: flex;flex-direction: column">
          <h6 class="title">
            接地刀合闸：
          </h6>
          <b-form-radio
            v-model="daohe03"
            :value="1"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            已合闸
          </b-form-radio>
          <b-form-radio
            v-model="daohe03"
            :value="0"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            还未合闸
          </b-form-radio>
        </div>
        <div style="display: flex;flex-direction: column">
          <h6 class="title">
            接地刀分闸：
          </h6>
          <b-form-radio
            v-model="daofen03"
            :value="1"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            已分闸
          </b-form-radio>
          <b-form-radio
            v-model="daofen03"
            :value="0"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            还未分闸
          </b-form-radio>
        </div>
      </div>

      <br>
      <h6 class="text-position">
        AH206</h6>
      <!--            如果shiyanwei=0 代表没到位 如果 shiyanwei=1 代表到位-->
      <div style="display: flex;flex-direction: row;gap: 40px">

        <div style="display: flex;flex-direction: column">
          <h6 class="title">
            试验位置：</h6>
          <b-form-radio
            v-model="shiyanwei"
            :value="1"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            已到位
          </b-form-radio>
          <b-form-radio
            v-model="shiyanwei"
            :value="0"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            还未到位
          </b-form-radio>
        </div>
        <div style="display: flex;flex-direction: column">
          <h6 class="title">
            工作位置：
          </h6>
          <b-form-radio
            v-model="gongzuowei"
            :value="1"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            已到位
          </b-form-radio>
          <b-form-radio
            v-model="gongzuowei"
            :value="0"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            还未到位
          </b-form-radio>
        </div>

        <div style="display: flex;flex-direction: column">
          <h6 class="title">
            断路合闸：
          </h6>
          <b-form-radio
            v-model="hezha06"
            :value="1"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            已合闸
          </b-form-radio>
          <b-form-radio
            v-model="hezha06"
            :value="0"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            还未合闸
          </b-form-radio>
        </div>
        <div style="display: flex;flex-direction: column">
          <h6 class="title">
            断路分闸：
          </h6>
          <b-form-radio
            v-model="fenzha06"
            :value="1"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            已分闸
          </b-form-radio>
          <b-form-radio
            v-model="fenzha06"
            :value="0"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            还未分闸
          </b-form-radio>
        </div>
      </div>

      <br>
      <h6 class="text-position">
        AH209</h6>
      <!--            如果shiyanwei=0 代表没到位 如果 shiyanwei=1 代表到位-->
      <div style="display: flex;flex-direction: row;gap: 40px">

        <div style="display: flex;flex-direction: column">
          <h6 class="title">
            试验位置：</h6>
          <b-form-radio
            v-model="shiyanwei"
            :value="1"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            已到位
          </b-form-radio>
          <b-form-radio
            v-model="shiyanwei"
            :value="0"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            还未到位
          </b-form-radio>
        </div>
        <div style="display: flex;flex-direction: column">
          <h6 class="title">
            工作位置：
          </h6>
          <b-form-radio
            v-model="gongzuowei"
            :value="1"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            已到位
          </b-form-radio>
          <b-form-radio
            v-model="gongzuowei"
            :value="0"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            还未到位
          </b-form-radio>
        </div>

        <div style="display: flex;flex-direction: column">
          <h6 class="title">
            断路合闸：
          </h6>
          <b-form-radio
            v-model="hezha09"
            :value="1"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            已合闸
          </b-form-radio>
          <b-form-radio
            v-model="hezha09"
            :value="0"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            还未合闸
          </b-form-radio>
        </div>
        <div style="display: flex;flex-direction: column">
          <h6 class="title">
            断路分闸：
          </h6>
          <b-form-radio
            v-model="fenzha09"
            :value="1"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            已分闸
          </b-form-radio>
          <b-form-radio
            v-model="fenzha09"
            :value="0"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            还未分闸
          </b-form-radio>
        </div>
        <div style="display: flex;flex-direction: column">
          <h6 class="title">
            接地刀合闸：
          </h6>
          <b-form-radio
            v-model="daohe09"
            :value="1"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            已合闸
          </b-form-radio>
          <b-form-radio
            v-model="daohe09"
            :value="0"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            还未合闸
          </b-form-radio>
        </div>
        <div style="display: flex;flex-direction: column">
          <h6 class="title">
            接地刀分闸：
          </h6>
          <b-form-radio
            v-model="daofen09"
            :value="1"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            已分闸
          </b-form-radio>
          <b-form-radio
            v-model="daofen09"
            :value="0"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            还未分闸
          </b-form-radio>
        </div>
      </div>

      <br>
      <h6 class="text-position">
        AH210</h6>
      <!--            如果shiyanwei=0 代表没到位 如果 shiyanwei=1 代表到位-->
      <div style="display: flex;flex-direction: row;gap: 40px">

        <div style="display: flex;flex-direction: column">
          <h6 class="title">
            试验位置：</h6>
          <b-form-radio
            v-model="shiyanwei"
            :value="1"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            已到位
          </b-form-radio>
          <b-form-radio
            v-model="shiyanwei"
            :value="0"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            还未到位
          </b-form-radio>
        </div>
        <div style="display: flex;flex-direction: column">
          <h6 class="title">
            工作位置：
          </h6>
          <b-form-radio
            v-model="gongzuowei"
            :value="1"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            已到位
          </b-form-radio>
          <b-form-radio
            v-model="gongzuowei"
            :value="0"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            还未到位
          </b-form-radio>
        </div>

        <div style="display: flex;flex-direction: column">
          <h6 class="title">
            断路合闸：
          </h6>
          <b-form-radio
            v-model="hezha10"
            :value="1"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            已合闸
          </b-form-radio>
          <b-form-radio
            v-model="hezha10"
            :value="0"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            还未合闸
          </b-form-radio>
        </div>
        <div style="display: flex;flex-direction: column">
          <h6 class="title">
            断路分闸：
          </h6>
          <b-form-radio
            v-model="fenzha10"
            :value="1"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            已分闸
          </b-form-radio>
          <b-form-radio
            v-model="fenzha10"
            :value="0"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            还未分闸
          </b-form-radio>
        </div>
        <div style="display: flex;flex-direction: column">
          <h6 class="title">
            接地刀合闸：
          </h6>
          <b-form-radio
            v-model="daohe10"
            :value="1"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            已合闸
          </b-form-radio>
          <b-form-radio
            v-model="daohe10"
            :value="0"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            还未合闸
          </b-form-radio>
        </div>
        <div style="display: flex;flex-direction: column">
          <h6 class="title">
            接地刀分闸：
          </h6>
          <b-form-radio
            v-model="daofen10"
            :value="1"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            已分闸
          </b-form-radio>
          <b-form-radio
            v-model="daofen10"
            :value="0"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            还未分闸
          </b-form-radio>
        </div>
      </div>

      <br>
      <h6 class="text-position">
        AH211</h6>
      <!--            如果shiyanwei=0 代表没到位 如果 shiyanwei=1 代表到位-->
      <div style="display: flex;flex-direction: row;gap: 40px">

        <div style="display: flex;flex-direction: column">
          <h6 class="title">
            试验位置：</h6>
          <b-form-radio
            v-model="shiyanwei"
            :value="1"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            已到位
          </b-form-radio>
          <b-form-radio
            v-model="shiyanwei"
            :value="0"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            还未到位
          </b-form-radio>
        </div>
        <div style="display: flex;flex-direction: column">
          <h6 class="title">
            工作位置：
          </h6>
          <b-form-radio
            v-model="gongzuowei"
            :value="1"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            已到位
          </b-form-radio>
          <b-form-radio
            v-model="gongzuowei"
            :value="0"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            还未到位
          </b-form-radio>
        </div>

        <div style="display: flex;flex-direction: column">
          <h6 class="title">
            断路合闸：
          </h6>
          <b-form-radio
            v-model="hezha11"
            :value="1"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            已合闸
          </b-form-radio>
          <b-form-radio
            v-model="hezha11"
            :value="0"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            还未合闸
          </b-form-radio>
        </div>
        <div style="display: flex;flex-direction: column">
          <h6 class="title">
            断路分闸：
          </h6>
          <b-form-radio
            v-model="fenzha11"
            :value="1"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            已分闸
          </b-form-radio>
          <b-form-radio
            v-model="fenzha11"
            :value="0"
            :disabled="isLocked"
            style="padding: 0px 20px"
          >
            还未分闸
          </b-form-radio>
        </div>
      </div>

    </b-card>
  </div>
</template>

<script>
import {
  BRow, BCol, BCard, BCardText, BButton, BFormRadio, BCollapse, BTable,
} from 'bootstrap-vue'
import axios from 'axios'

export default {
  components: {
    BRow,

    BCol,
    BCard,
    BCardText,
    BButton,
    BFormRadio,
    BCollapse,
    BTable,
  },
  data() {
    return {
      collapsed: true, // 初始状态为折叠
      isLocked: true, // 控制是否锁定复选框

      shiyanwei: 0,
      gongzuowei: 0,
      jiedifen: 0,
      jiedihe: 0,
      duanluhe: 0,
      duanlufen: 0,
      qianmen: 0,
      houmen: 0,

      hezha01: 0,
      hezha02: 0,
      hezha03: 0,
      hezha06: 0,
      hezha09: 0,
      hezha10: 0,
      hezha11: 0,

      fenzha01: 0,
      fenzha02: 0,
      fenzha03: 0,
      fenzha06: 0,
      fenzha09: 0,
      fenzha10: 0,
      fenzha11: 0,

      daofen02: 0,
      daofen03: 0,
      daofen04: 0,
      daofen05: 0,
      daofen07: 0,
      daofen08: 0,
      daofen09: 0,
      daofen10: 0,
      daofen11: 0,

      daohe02: 0,
      daohe03: 0,
      daohe04: 0,
      daohe05: 0,
      daohe07: 0,
      daohe08: 0,
      daohe09: 0,
      daohe10: 0,
      daohe11: 0,

      chuneng: 0,
      text1: '',
      timer: 0,
      items: [
        {
          AH201: 'value1_row1',
          AH202: 'value2_row1',
          AH203: 'value3_row1',
          AH206: 'value6_row1',
          AH200: 'value1_row1',
          AH209: 'value4_row1',
          AH210: 'value5_row1',
          AH211: 'value6_row1',
        },
      ],
    }
  },

  methods: {

    start201gaojing() {
      console.log('开启201示意图')
      // 开启数据更新逻辑
      this.timer1 = setInterval(() => {
        axios.get('http://192.168.6.101/getss')
        // axios.get('http://localhost:3000')
          .then(response => {
            const { data } = response
            console.log(data)

            // 根据实际需求更新hezha01对应的数据属性的值
            this.hezha01 = data.hezhawei
            this.fenzha01 = this.hezha01 === 1 ? 0 : 1
            this.shiyanwei = data.shiyanwei
            this.gongzuowei = data.gongzuowei

            console.log(this.gongzuowei)
            console.log(this.shiyanwei)
          })
          .catch(error => {
            console.error('数据获取失败', error)
          })
      }, 4000)
    },
    start202gaojing() {
      console.log('开启202示意图')
      // 开启数据更新逻辑
      this.timer2 = setInterval(() => {
        axios.get('http://192.168.6.102/getss')
        // axios.get('http://localhost:3000')
          .then(response => {
            const { data } = response
            console.log(data)

            // 根据实际需求更新hezha02对应的数据属性的值
            this.hezha02 = data.hezhawei
            this.fenzha02 = this.hezha02 === 1 ? 0 : 1
            this.shiyanwei = data.shiyanwei
            this.gongzuowei = data.gongzuowei
            this.daohe02 = data.jiedihe
            this.daofen02 = this.daohe02 === 1 ? 0 : 1

            console.log(this.hezha02)
          })
          .catch(error => {
            console.error('数据获取失败', error)
          })
      }, 4000)
    },
    start203gaojing() {
      console.log('开启203示意图')
      // 开启数据更新逻辑
      this.timer3 = setInterval(() => {
        axios.get('http://192.168.6.103/getss')
          .then(response => {
            const { data } = response
            console.log(data)

            // 根据实际需求更新hezha03对应的数据属性的值
            this.hezha03 = data.hezhawei
            this.fenzha03 = this.hezha03 === 1 ? 0 : 1
            this.shiyanwei = data.shiyanwei
            this.gongzuowei = data.gongzuowei
            this.daohe03 = data.jiedihe
            this.daofen03 = this.daohe03 === 1 ? 0 : 1

            console.log(this.hezha03)
          })
          .catch(error => {
            console.error('数据获取失败', error)
          })
      }, 4000)
    },
    start206gaojing() {
      console.log('开启206示意图')
      // 开启数据更新逻辑
      this.timer4 = setInterval(() => {
        axios.get('http://192.168.6.104/getss')
          .then(response => {
            const { data } = response
            console.log(data)

            // 根据实际需求更新hezha06对应的数据属性的值
            this.hezha06 = data.hezhawei
            this.fenzha06 = this.hezha06 === 1 ? 0 : 1
            this.shiyanwei = data.shiyanwei
            this.gongzuowei = data.gongzuowei

            console.log(this.hezha06)
          })
          .catch(error => {
            console.error('数据获取失败', error)
          })
      }, 4000)
    },
    start209gaojing() {
      console.log('开启209示意图')
      // 开启数据更新逻辑
      this.timer5 = setInterval(() => {
        axios.get('http://192.168.6.105/getss')
          .then(response => {
            const { data } = response
            console.log(data)

            // 根据实际需求更新hezha09对应的数据属性的值
            this.hezha09 = data.hezhawei
            this.fenzha09 = this.hezha09 === 1 ? 0 : 1
            this.shiyanwei = data.shiyanwei
            this.gongzuowei = data.gongzuowei
            this.daohe09 = data.jiedihe
            this.daofen09 = this.daohe09 === 1 ? 0 : 1

            console.log(this.hezha09)
          })
          .catch(error => {
            console.error('数据获取失败', error)
          })
      }, 4000)
    },
    start210gaojing() {
      console.log('开启210示意图')
      // 开启数据更新逻辑
      this.timer6 = setInterval(() => {
        axios.get('http://192.168.6.106/getss')
          .then(response => {
            const { data } = response
            console.log(data)

            // 根据实际需求更新hezha10对应的数据属性的值
            this.hezha10 = data.hezhawei
            this.fenzha10 = this.hezha10 === 1 ? 0 : 1
            this.shiyanwei = data.shiyanwei
            this.gongzuowei = data.gongzuowei
            this.daohe10 = data.jiedihe
            this.daofen10 = this.daohe10 === 1 ? 0 : 1

            console.log(this.hezha10)
          })
          .catch(error => {
            console.error('数据获取失败', error)
          })
      }, 4000)
    },
    start211gaojing() {
      console.log('开启211示意图')
      // 开启数据更新逻辑
      this.timer7 = setInterval(() => {
        axios.get('http://192.168.6.107/getss')
        // axios.get('http://localhost:3000')
          .then(response => {
            const { data } = response
            console.log(data)

            // 根据实际需求更新hezha11对应的数据属性的值
            this.hezha11 = data.hezhawei
            this.fenzha11 = this.hezha11 === 1 ? 0 : 1
            this.shiyanwei = data.shiyanwei
            this.gongzuowei = data.gongzuowei

            console.log(this.hezha11)
          })
          .catch(error => {
            console.error('数据获取失败', error)
          })
      }, 4000)
    },
    stop201gaojing() {
      axios.post('http://192.168.6.101/spyaoxin').then(response => {
      })
          .catch(error => {
            console.error('数据获取失败', error)
          })      // 停止数据更新逻辑
      // 停止数据更新逻辑
      clearInterval(this.timer1)
    },
    stop202gaojing() {
      axios.post('http://192.168.6.102/spyaoxin').then(response => {
      })
          .catch(error => {
            console.error('数据获取失败', error)
          })      // 停止数据更新逻辑
      // 停止数据更新逻辑
      clearInterval(this.timer2)
    },
    stop203gaojing() {
      axios.post('http://192.168.6.103/spyaoxin').then(response => {
      })
          .catch(error => {
            console.error('数据获取失败', error)
          })      // 停止数据更新逻辑
      // 停止数据更新逻辑
      clearInterval(this.timer3)
    },
    stop206gaojing() {
      axios.post('http://192.168.6.104/spyaoxin').then(response => {
      })
          .catch(error => {
            console.error('数据获取失败', error)
          })      // 停止数据更新逻辑
      // 停止数据更新逻辑
      clearInterval(this.timer4)
    },
    stop209gaojing() {
      axios.post('http://192.168.6.105/spyaoxin').then(response => {
      })
          .catch(error => {
            console.error('数据获取失败', error)
          })      // 停止数据更新逻辑
      // 停止数据更新逻辑
      clearInterval(this.timer5)
    },
    stop210gaojing() {
      axios.post('http://192.168.6.106/spyaoxin').then(response => {
      })
          .catch(error => {
            console.error('数据获取失败', error)
          })      // 停止数据更新逻辑
      // 停止数据更新逻辑
      clearInterval(this.timer6)
    },
    stop211gaojing() {
      axios.post('http://192.168.6.107/spyaoxin').then(response => {
      })
          .catch(error => {
            console.error('数据获取失败', error)
          })      // 停止数据更新逻辑
      // 停止数据更新逻辑
      clearInterval(this.timer7)
    },
  },
}
</script>

<style>

.title{
  font-family: 新宋体,serif;
  font-size: 16px;
  font-weight: bolder;
}
.custom-control-input:checked ~ .custom-control-label::before,
.custom-radio .custom-control-input:checked:disabled ~ .custom-control-label::before {
  background-color: #33ff44;
  border: #09280b;
}
.custom-radio .custom-control-label {
  color: #000000 !important; /* Use !important to ensure it takes precedence */

}
.text-position{
  font-size: 20px;
  font-weight: bold;
  font-family: 方正姚体;
  color: #000000;
}
</style>
