<template>
  <div style="width: 2000px;position: absolute">

    <b-spinner
      v-if="isDisabled"
      label="Loading..."
    />

    <b-card style="position: relative;width: 100%">

      <b-table
        striped
        hover
        :items="items"
        thead-class="text-center"
        bordered
        style="table-layout: fixed; width: 100%"
      >
        <!--        <template-->
        <!--          #cell(unit)="row"-->
        <!--          style="justify-content: center;"-->
        <!--        >-->

        <!--          <b-button-->
        <!--            pill-->
        <!--            variant="warning"-->
        <!--            @click="onupdate"-->
        <!--          >-->
        <!--            开启更新状态-->
        <!--          </b-button>-->

        <!--          <b-button-->
        <!--            pill-->
        <!--            variant="info"-->
        <!--            @click="offupdate"-->
        <!--          >-->
        <!--            关闭更新状态-->
        <!--          </b-button>-->
        <!--        </template>-->

        <template
          #cell(AH201)="row"
          style="justify-content: center;"
        >
          <img
            v-if="hezha01 === 1"
            src="@/assets/images/201/AH201shiyan.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="fenzha01 === 1"
            src="@/assets/images/201/AH201gongzuo.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="cheru01 === 1"
            src="@/assets/images/201/AH201duanluhe.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="chechu01 === 1"
            src="@/assets/images/201/AH201duanlufen.svg"
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
            v-if="hezha02 === 1"
            src="@/assets/images/202/AH202shiyan.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="fenzha02 === 1"
            src="@/assets/images/202/AH202gongzuo.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="cheru02 === 1"
            src="@/assets/images/202/AH202duanluhe.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="chechu02 === 1"
            src="@/assets/images/202/AH202duanlufen.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="daohe02 === 1"
            src="@/assets/images/202/AH202jiedihe.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="daofen02 === 1"
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
          #cell(AH203)="row"
          style="justify-content: center"
        >
          <img
            v-if="hezha03 === 1"
            src="@/assets/images/202/AH202shiyan.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="fenzha03 === 1"
            src="@/assets/images/202/AH202gongzuo.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="cheru03 === 1"
            src="@/assets/images/202/AH202duanluhe.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="chechu03 === 1"
            src="@/assets/images/202/AH202duanlufen.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="daohe03 === 1"
            src="@/assets/images/202/AH202jiedihe.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="daofen03 === 1"
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
          #cell(AH204)="row"
          style="justify-content: center"
        >
          <img
            v-if="hezha04 === 1"
            src="@/assets/images/204/AH204shiyan.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="fenzha04 === 1"
            src="@/assets/images/204/AH204gongzuo.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="cheru04 === 1"
            src="@/assets/images/204/AH204duanluhe.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="chechu04 === 1"
            src="@/assets/images/204/AH204duanlufen.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="daohe04 === 1"
            src="@/assets/images/204/AH204jiedihe.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="daofen04 === 1"
            src="@/assets/images/204/AH204jiedifen.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else
            src="@/assets/images/AH204.svg"
            style="max-width: 100%; max-height: 100%"
          >
        </template>

        <template
          #cell(AH205)="row"
          style="justify-content: center"
        >
          <img
            v-if="hezha05 === 1"
            src="@/assets/images/204/AH204shiyan.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="fenzha05 === 1"
            src="@/assets/images/204/AH204gongzuo.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="cheru05 === 1"
            src="@/assets/images/204/AH204duanluhe.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="chechu05 === 1"
            src="@/assets/images/204/AH204duanlufen.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="daohe05 === 1"
            src="@/assets/images/204/AH204jiedihe.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="daofen05 === 1"
            src="@/assets/images/204/AH204jiedifen.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else
            src="@/assets/images/AH204.svg"
            style="max-width: 100%; max-height: 100%"
          >
        </template>

        <template
          #cell(AH206)="row"
          style="justify-content: center"
        >
          <img
            v-if="hezha06 === 1"
            src="@/assets/images/206/AH206shiyan.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="fenzha06 === 1"
            src="@/assets/images/206/AH206gongzuo.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="cheru06 === 1"
            src="@/assets/images/206/AH206duanluhe.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="chechu06 === 1"
            src="@/assets/images/206/AH206duanlufen.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else
            src="@/assets/images/AH206.svg"
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
          #cell(AH207)="row"
          style="justify-content: center"
        >
          <img
            v-if="hezha07 === 1"
            src="@/assets/images/204/AH204shiyan.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="fenzha07 === 1"
            src="@/assets/images/204/AH204gongzuo.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="cheru07 === 1"
            src="@/assets/images/204/AH204duanluhe.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="chechu07 === 1"
            src="@/assets/images/204/AH204duanlufen.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="daohe07 === 1"
            src="@/assets/images/204/AH204jiedihe.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="daofen07 === 1"
            src="@/assets/images/204/AH204jiedifen.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else
            src="@/assets/images/AH204.svg"
            style="max-width: 100%; max-height: 100%"
          >
        </template>

        <template
          #cell(AH208)="row"
          style="justify-content: center"
        >
          <img
            v-if="hezha08 === 1"
            src="@/assets/images/204/AH204shiyan.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="fenzha08 === 1"
            src="@/assets/images/204/AH204gongzuo.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="cheru08 === 1"
            src="@/assets/images/204/AH204duanluhe.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="chechu08 === 1"
            src="@/assets/images/204/AH204duanlufen.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="daohe08 === 1"
            src="@/assets/images/204/AH204jiedihe.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="daofen08 === 1"
            src="@/assets/images/204/AH204jiedifen.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else
            src="@/assets/images/AH204.svg"
            style="max-width: 100%; max-height: 100%"
          >
        </template>

        <template
          #cell(AH209)="row"
          style="justify-content: center"
        >
          <img
            v-if="hezha09 === 1"
            src="@/assets/images/202/AH202shiyan.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="fenzha09 === 1"
            src="@/assets/images/202/AH202gongzuo.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="cheru09 === 1"
            src="@/assets/images/202/AH202duanluhe.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="chechu09 === 1"
            src="@/assets/images/202/AH202duanlufen.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="daohe09 === 1"
            src="@/assets/images/202/AH202jiedihe.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="daofen09 === 1"
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
          #cell(AH210)="row"
          style="justify-content: center"
        >
          <img
            v-if="hezha10 === 1"
            src="@/assets/images/202/AH202shiyan.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="fenzha10 === 1"
            src="@/assets/images/202/AH202gongzuo.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="cheru10 === 1"
            src="@/assets/images/202/AH202duanluhe.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="chechu10 === 1"
            src="@/assets/images/202/AH202duanlufen.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="daohe10 === 1"
            src="@/assets/images/202/AH202jiedihe.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="daofen10 === 1"
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
            v-if="hezha11 === 1"
            src="@/assets/images/201/AH201shiyan.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="fenzha11 === 1"
            src="@/assets/images/201/AH201gongzuo.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="cheru11 === 1"
            src="@/assets/images/201/AH201duanluhe.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="chechu11 === 1"
            src="@/assets/images/201/AH201duanlufen.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else
            src="@/assets/images/AH201.svg"
            style="max-width: 100%; max-height: 100%"
          >
        </template>
      </b-table>

      <div />

      <!--      <b-card style="width: 100%;background-color: transparent;z-index: 9999">-->
      <!--        <b-card-text style="font-family: 黑体; font-size: 16px;">-->
      <!--          仿真测试:-->
      <!--        </b-card-text>-->
      <!--        <br>-->
      <div>
        <b-table
          striped
          hover
          :items="buttonitems"
          thead-class="table"
          style="table-layout: fixed;width: 100%"
          :fields="['unit','AH201', 'AH202', 'AH203', 'AH204', 'AH205', 'AH206','AH200', 'AH207', 'AH208', 'AH209', 'AH210', 'AH211']"
          :thead-class="'d-none'"
          bordered
        >
          <template #cell(AH201)="data">

            <div style="display: flex; flex-direction: column;width: 100%;margin-top: -170px">
              <!--                点击位置后要再点一遍-->
              <!--                <br />-->
              <!--                复位后才能点其他按钮-->
              <b-button
                variant="outline-primary"
                class="button-3d-1"
                :disabled="isDisabled"
                @click="togglehezha01"
              >
                合闸
              </b-button>
              <br>
              <b-button
                variant="outline-secondary"
                class="button-3d-2"
                :disabled="isDisabled"
                @click="togglefenzha01"
              >
                分闸
              </b-button>
              <br>
              <b-button
                variant="outline-success"
                class="button-3d-3"
                :disabled="isDisabled"
                @click="togglecheru01"
              >
                手车驶入
              </b-button>
              <br>
              <b-button
                variant="outline-danger"
                class="button-3d-4"
                :disabled="isDisabled"
                @click="togglechechu01"
              >
                手车驶出
              </b-button>
              <br>
              <b-button
                variant="outline-warning"
                class="button-3d-5"
                :disabled="isDisabled"
                @click="toggleyigong01"
              >
                一键送电
              </b-button>
              <br>
              <b-button
                variant="outline-info"
                class="button-3d-6"
                :disabled="isDisabled"
                @click="toggleyiduan01"
              >
                一键断电
              </b-button>
              <br>
              <b-button
                variant="outline-primary"
                class="button-3d-9"
                :disabled="isDisabled"
                @click="togglefuwei01"
              >
                复位
              </b-button>
            </div>

          </template>

          <template #cell(AH202)="data">

            <div
              style="display: flex; flex-direction: column;width: 100%;"
            >
              <!--                点击位置后要再点一遍-->
              <!--                <br />-->
              <!--                复位后才能点其他按钮-->
              <b-button
                variant="outline-primary"
                class="button-3d-1"
                :disabled="isDisabled"
                @click="togglehezha02"
              >
                合闸
              </b-button>
              <br>
              <b-button
                variant="outline-secondary"
                class="button-3d-2"
                :disabled="isDisabled"
                @click="togglefenzha02"
              >
                分闸
              </b-button>
              <br>
              <b-button
                variant="outline-success"
                class="button-3d-3"
                :disabled="isDisabled"
                @click="togglecheru02"
              >
                手车驶入
              </b-button>
              <br>
              <b-button
                variant="outline-danger"
                class="button-3d-4"
                :disabled="isDisabled"
                @click="togglechechu02"
              >
                手车驶出
              </b-button>
              <br>
              <b-button
                variant="outline-warning"
                class="button-3d-5"
                :disabled="isDisabled"
                @click="toggleyigong02"
              >
                一键送电
              </b-button>
              <br>
              <b-button
                variant="outline-info"
                class="button-3d-6"
                :disabled="isDisabled"
                @click="toggleyiduan02"
              >
                一键断电
              </b-button>
              <br>
              <b-button
                variant="outline-warning"
                class="button-3d-7"
                :disabled="isDisabled"
                @click="toggledaohe02"
              >
                接地刀合
              </b-button>
              <br>
              <b-button
                variant="outline-danger"
                class="button-3d-8"
                :disabled="isDisabled"
                @click="toggledaofen02"
              >
                接地刀分
              </b-button>
              <br>
              <b-button
                variant="outline-primary"
                class="button-3d-9"
                :disabled="isDisabled"
                @click="togglefuwei02"
              >
                复位
              </b-button>

            </div>

          </template>

          <template #cell(AH203)="data">

            <div
              style="display: flex; flex-direction: column;width: 100%;"
            >
              <!--                点击位置后要再点一遍-->
              <!--                <br />-->
              <!--                复位后才能点其他按钮-->
              <b-button
                variant="outline-primary"
                class="button-3d-1"
                :disabled="isDisabled"
                @click="togglehezha03"
              >
                合闸
              </b-button>
              <br>
              <b-button
                variant="outline-secondary"
                class="button-3d-2"
                :disabled="isDisabled"
                @click="togglefenzha03"
              >
                分闸
              </b-button>
              <br>
              <b-button
                variant="outline-success"
                class="button-3d-3"
                :disabled="isDisabled"
                @click="togglecheru03"
              >
                手车驶入
              </b-button>
              <br>
              <b-button
                variant="outline-danger"
                class="button-3d-4"
                :disabled="isDisabled"
                @click="togglechechu03"
              >
                手车驶出
              </b-button>
              <br>
              <b-button
                variant="outline-warning"
                class="button-3d-5"
                :disabled="isDisabled"
                @click="toggleyigong03"
              >
                一键送电
              </b-button>
              <br>
              <b-button
                variant="outline-info"
                class="button-3d-6"
                :disabled="isDisabled"
                @click="toggleyiduan03"
              >
                一键断电
              </b-button>
              <br>
              <b-button
                variant="outline-warning"
                class="button-3d-7"
                :disabled="isDisabled"
                @click="toggledaohe03"
              >
                接地刀合
              </b-button>
              <br>
              <b-button
                variant="outline-danger"
                class="button-3d-8"
                :disabled="isDisabled"
                @click="toggledaofen03"
              >
                接地刀分
              </b-button>
              <br>
              <b-button
                variant="outline-primary"
                class="button-3d-9"
                :disabled="isDisabled"
                @click="togglefuwei03"
              >
                复位
              </b-button>

            </div>

          </template>

          <template #cell(AH204)="data">

            <div
              style="display: flex; flex-direction: column;width: 100%;margin-top: -360px"
            >
              <!--                点击位置后要再点一遍-->
              <!--                <br />-->
              <!--                复位后才能点其他按钮-->

              <b-button
                variant="outline-primary"
                class="button-3d-1"
                :disabled="isDisabled"
                @click="togglehezha04"
              >
                合闸
              </b-button>
              <br>
              <b-button
                variant="outline-secondary"
                class="button-3d-2"
                :disabled="isDisabled"
                @click="togglefenzha04"
              >
                分闸
              </b-button>

            </div>

          </template>

          <template #cell(AH205)="data">

            <div
              style="display: flex; flex-direction: column;width: 100%;margin-top: -360px"
            >
              <!--                点击位置后要再点一遍-->
              <!--                <br />-->
              <!--                复位后才能点其他按钮-->

              <b-button
                variant="outline-primary"
                class="button-3d-1"
                :disabled="isDisabled"
                @click="togglehezha05"
              >
                合闸
              </b-button>
              <br>
              <b-button
                variant="outline-secondary"
                class="button-3d-2"
                :disabled="isDisabled"
                @click="togglefenzha05"
              >
                分闸
              </b-button>

            </div>

          </template>

          <template #cell(AH206)="data">

            <div style="display: flex; flex-direction: column;width: 100%;margin-top: -170px">
              <!--                点击位置后要再点一遍-->
              <!--                <br />-->
              <!--                复位后才能点其他按钮-->
              <b-button
                variant="outline-primary"
                class="button-3d-1"
                :disabled="isDisabled"
                @click="togglehezha06"
              >
                合闸
              </b-button>
              <br>
              <b-button
                variant="outline-secondary"
                class="button-3d-2"
                :disabled="isDisabled"
                @click="togglefenzha06"
              >
                分闸
              </b-button>
              <br>
              <b-button
                variant="outline-success"
                class="button-3d-3"
                :disabled="isDisabled"
                @click="togglecheru06"
              >
                手车驶入
              </b-button>
              <br>
              <b-button
                variant="outline-danger"
                class="button-3d-4"
                :disabled="isDisabled"
                @click="togglechechu06"
              >
                手车驶出
              </b-button>
              <br>
              <b-button
                variant="outline-warning"
                class="button-3d-5"
                :disabled="isDisabled"
                @click="toggleyigong06"
              >
                一键送电
              </b-button>
              <br>
              <b-button
                variant="outline-info"
                class="button-3d-6"
                :disabled="isDisabled"
                @click="toggleyiduan06"
              >
                一键断电
              </b-button>
              <br>
              <b-button
                variant="outline-primary"
                class="button-3d-9"
                :disabled="isDisabled"
                @click="togglefuwei06"
              >
                复位
              </b-button>

            </div>

          </template>

          <template #cell(AH207)="data">

            <div
              style="display: flex; flex-direction: column;width: 100%;margin-top: -360px"
            >
              <!--                点击位置后要再点一遍-->
              <!--                <br />-->
              <!--                复位后才能点其他按钮-->

              <b-button
                variant="outline-primary"
                class="button-3d-1"
                :disabled="isDisabled"
                @click="togglehezha07"
              >
                合闸
              </b-button>
              <br>
              <b-button
                variant="outline-secondary"
                class="button-3d-2"
                :disabled="isDisabled"
                @click="togglefenzha07"
              >
                分闸
              </b-button>

            </div>

          </template>

          <template #cell(AH208)="data">

            <div
              style="display: flex; flex-direction: column;width: 100%;margin-top: -360px"
            >
              <!--                点击位置后要再点一遍-->
              <!--                <br />-->
              <!--                复位后才能点其他按钮-->

              <b-button
                variant="outline-primary"
                class="button-3d-1"
                :disabled="isDisabled"
                @click="togglehezha08"
              >
                合闸
              </b-button>
              <br>
              <b-button
                variant="outline-secondary"
                class="button-3d-2"
                :disabled="isDisabled"
                @click="togglefenzha08"
              >
                分闸
              </b-button>
            </div>

          </template>

          <template #cell(AH209)="data">

            <div
              style="display: flex; flex-direction: column;width: 100%;"
            >
              <!--                点击位置后要再点一遍-->
              <!--                <br />-->
              <!--                复位后才能点其他按钮-->
              <b-button
                variant="outline-primary"
                class="button-3d-1"
                :disabled="isDisabled"
                @click="togglehezha09"
              >
                合闸
              </b-button>
              <br>
              <b-button
                variant="outline-secondary"
                class="button-3d-2"
                :disabled="isDisabled"
                @click="togglefenzha09"
              >
                分闸
              </b-button>
              <br>
              <b-button
                variant="outline-success"
                class="button-3d-3"
                :disabled="isDisabled"
                @click="togglecheru09"
              >
                手车驶入
              </b-button>
              <br>
              <b-button
                variant="outline-danger"
                class="button-3d-4"
                :disabled="isDisabled"
                @click="togglechechu09"
              >
                手车驶出
              </b-button>
              <br>
              <b-button
                variant="outline-warning"
                class="button-3d-5"
                :disabled="isDisabled"
                @click="toggleyigong09"
              >
                一键送电
              </b-button>
              <br>
              <b-button
                variant="outline-info"
                class="button-3d-6"
                :disabled="isDisabled"
                @click="toggleyiduan09"
              >
                一键断电
              </b-button>
              <br>
              <b-button
                variant="outline-warning"
                class="button-3d-7"
                :disabled="isDisabled"
                @click="toggledaohe09"
              >
                接地刀合
              </b-button>
              <br>
              <b-button
                variant="outline-danger"
                class="button-3d-8"
                :disabled="isDisabled"
                @click="toggledaofen09"
              >
                接地刀分
              </b-button>
              <br>
              <b-button
                variant="outline-primary"
                class="button-3d-9"
                :disabled="isDisabled"
                @click="togglefuwei09"
              >
                复位
              </b-button>

            </div>

          </template>

          <template #cell(AH210)="data">

            <div
              style="display: flex; flex-direction: column;width: 100%;"
            >
              <!--                点击位置后要再点一遍-->
              <!--                <br />-->
              <!--                复位后才能点其他按钮-->
              <b-button
                variant="outline-primary"
                class="button-3d-1"
                :disabled="isDisabled"
                @click="togglehezha10"
              >
                合闸
              </b-button>
              <br>
              <b-button
                variant="outline-secondary"
                class="button-3d-2"
                :disabled="isDisabled"
                @click="togglefenzha10"
              >
                分闸
              </b-button>
              <br>
              <b-button
                variant="outline-success"
                class="button-3d-3"
                :disabled="isDisabled"
                @click="togglecheru10"
              >
                手车驶入
              </b-button>
              <br>
              <b-button
                variant="outline-danger"
                class="button-3d-4"
                :disabled="isDisabled"
                @click="togglechechu10"
              >
                手车驶出
              </b-button>
              <br>
              <b-button
                variant="outline-warning"
                class="button-3d-5"
                :disabled="isDisabled"
                @click="toggleyigong10"
              >
                一键送电
              </b-button>
              <br>
              <b-button
                variant="outline-info"
                class="button-3d-6"
                :disabled="isDisabled"
                @click="toggleyiduan10"
              >
                一键断电
              </b-button>
              <br>
              <b-button
                variant="outline-warning"
                class="button-3d-7"
                :disabled="isDisabled"
                @click="toggledaohe10"
              >
                接地刀合
              </b-button>
              <br>
              <b-button
                variant="outline-danger"
                class="button-3d-8"
                :disabled="isDisabled"
                @click="toggledaofen10"
              >
                接地刀分
              </b-button>
              <br>
              <b-button
                variant="outline-primary"
                class="button-3d-9"
                :disabled="isDisabled"
                @click="togglefuwei10"
              >
                复位
              </b-button>

            </div>

          </template>

          <template #cell(AH211)="data">

            <div
              style="display: flex; flex-direction: column;width: 100%;"
            >
              <b-button
                variant="outline-primary"
                class="button-3d-1"
                :disabled="isDisabled"
                @click="togglehezha11"
              >
                合闸
              </b-button>
              <br>
              <b-button
                variant="outline-secondary"
                class="button-3d-2"
                :disabled="isDisabled"
                @click="togglefenzha11"
              >
                分闸
              </b-button>
              <br>
              <b-button
                variant="outline-success"
                class="button-3d-3"
                :disabled="isDisabled"
                @click="togglecheru11"
              >
                手车驶入
              </b-button>
              <br>
              <b-button
                variant="outline-danger"
                class="button-3d-4"
                :disabled="isDisabled"
                @click="togglechechu11"
              >
                手车驶出
              </b-button>
              <br>
              <b-button
                variant="outline-warning"
                class="button-3d-5"
                :disabled="isDisabled"
                @click="toggleyigong11"
              >
                一键送电
              </b-button>
              <br>
              <b-button
                variant="outline-info"
                class="button-3d-6"
                :disabled="isDisabled"
                @click="toggleyiduan11"
              >
                一键断电
              </b-button>
              <br>
              <b-button
                variant="outline-warning"
                class="button-3d-7"
                :disabled="isDisabled"
                @click="toggledaohe11"
              >
                接地刀合
              </b-button>
              <br>
              <b-button
                variant="outline-danger"
                class="button-3d-8"
                :disabled="isDisabled"
                @click="toggledaofen11"
              >
                接地刀分
              </b-button>
              <br>
              <b-button
                variant="outline-primary"
                class="button-3d-9"
                :disabled="isDisabled"
                @click="togglefuwei11"
              >
                复位
              </b-button>

            </div>

          </template>

        </b-table>

      </div>

      <!--      </b-card>-->

    </b-card>
  </div>
</template>

<script>
import {
  BTable, BCard, BButton, BCollapse, BCardText, BRow, BCol, BSpinner,
} from 'bootstrap-vue'
// import ZhuangTaiImages from '@/views/ZhuangTaiImages.vue'
import axios from 'axios'

export default {
  components: {
    BTable,
    BCard,
    BButton,
    BCollapse,
    BCardText,
    BRow,
    BCol,
    BSpinner,
  },
  data() {
    return {
      isDisabled: false,
      isCollapsed: true,
      columnName: 'unit',
      maxVal: null,
      minVal: null,

      hezha01: 0,
      hezha02: 0,
      hezha03: 0,
      hezha04: 0,
      hezha05: 0,
      hezha06: 0,
      hezha07: 0,
      hezha08: 0,
      hezha09: 0,
      hezha10: 0,
      hezha11: 0,

      fenzha01: 0,
      fenzha02: 0,
      fenzha03: 0,
      fenzha04: 0,
      fenzha05: 0,
      fenzha06: 0,
      fenzha07: 0,
      fenzha08: 0,
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

      cheru01: 0,
      cheru02: 0,
      cheru03: 0,
      cheru04: 0,
      cheru05: 0,
      cheru06: 0,
      cheru07: 0,
      cheru08: 0,
      cheru09: 0,
      cheru10: 0,
      cheru11: 0,

      chechu01: 0,
      chechu02: 0,
      chechu03: 0,
      chechu04: 0,
      chechu05: 0,
      chechu06: 0,
      chechu07: 0,
      chechu08: 0,
      chechu09: 0,
      chechu10: 0,
      chechu11: 0,

      items: [
        {
          unit: '',
          AH201: 'value1_row1',
          AH202: 'value2_row1',
          AH203: 'value3_row1',
          AH204: 'value4_row1',
          AH205: 'value5_row1',
          AH206: 'value6_row1',
          AH200: 'value1_row1',
          AH207: 'value2_row1',
          AH208: 'value3_row1',
          AH209: 'value4_row1',
          AH210: 'value5_row1',
          AH211: 'value6_row1',
        },
      ],
      buttonitems: [
        {
          unit: '',
          AH201: '',
          AH202: '',
          AH203: '',
          AH204: '',
          AH205: '',
          AH206: '',
          AH200: '',
          AH207: '',
          AH208: '',
          AH209: '',
          AH210: '',
          AH211: '',
        },
      ],
    }
  },
  mounted() {

  },
  methods: {

    togglehezha01(append = false) {
      this.hezha01 = 1
      this.fenzha01 = 0
      this.cheru01 = 0
      this.chechu01 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH201正在合闸,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 8 clicked!')
          this.text = 'Button 8 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          // eslint-disable-next-line no-unused-vars
          axios.post('http://192.168.6.101/hezha')
            .then(response => {
            })
        }, 1000)
        this.text = '执行合闸'
      }
    },
    togglehezha02(append = false) {
      this.hezha02 = 1
      this.fenzha02 = 0
      this.cheru02 = 0
      this.chechu02 = 0
      this.daohe02 = 0
      this.daofen02 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH202正在合闸,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 8 clicked!')
          this.text = 'Button 8 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          // eslint-disable-next-line no-unused-vars
          axios.post('http://192.168.6.102/hezha')
            .then(response => {
            })
        }, 1000)
        this.text = '执行合闸'
      }
    },
    togglehezha03(append = false) {
      this.hezha03 = 1
      this.fenzha03 = 0
      this.cheru03 = 0
      this.chechu03 = 0
      this.daohe03 = 0
      this.daofen03 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH203正在合闸,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 8 clicked!')
          this.text = 'Button 8 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          // eslint-disable-next-line no-unused-vars
          axios.post('http://192.168.6.103/hezha')
            .then(response => {
            })
        }, 1000)
        this.text = '执行合闸'
      }
    },

    togglehezha04(append = false) {
      this.hezha04 = 1
      this.fenzha04 = 0
      this.cheru04 = 0
      this.chechu04 = 0
      this.daohe04 = 0
      this.daofen04 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH204正在合闸,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 8 clicked!')
          this.text = 'Button 8 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          // eslint-disable-next-line no-unused-vars
          axios.post('http://192.168.6.104/hezha')
            .then(response => {
            })
        }, 1000)
        this.text = '执行合闸'
      }
    },

    togglehezha05(append = false) {
      this.hezha05 = 1
      this.fenzha05 = 0
      this.cheru05 = 0
      this.chechu05 = 0
      this.daohe05 = 0
      this.daofen05 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH203正在合闸,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 8 clicked!')
          this.text = 'Button 8 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          // eslint-disable-next-line no-unused-vars
          axios.post('http://192.168.6.105/hezha')
            .then(response => {
            })
        }, 1000)
        this.text = '执行合闸'
      }
    },

    togglehezha06(append = false) {
      this.hezha06 = 1
      this.fenzha06 = 0
      this.cheru06 = 0
      this.chechu06 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH206正在合闸,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 8 clicked!')
          this.text = 'Button 8 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          // eslint-disable-next-line no-unused-vars
          axios.post('http://192.168.6.106/hezha')
            .then(response => {
            })
        }, 1000)
        this.text = '执行合闸'
      }
    },
    togglehezha07(append = false) {
      this.hezha07 = 1
      this.fenzha07 = 0
      this.cheru07 = 0
      this.chechu07 = 0
      this.daohe07 = 0
      this.daofen07 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH207正在合闸,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 8 clicked!')
          this.text = 'Button 8 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          // eslint-disable-next-line no-unused-vars
          axios.post('http://192.168.6.107/hezha')
              .then(response => {
              })
        }, 1000)
        this.text = '执行合闸'
      }
    },

    togglehezha08(append = false) {
      this.hezha08 = 1
      this.fenzha08 = 0
      this.cheru08 = 0
      this.chechu08 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH208正在合闸,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 8 clicked!')
          this.text = 'Button 8 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          // eslint-disable-next-line no-unused-vars
          axios.post('http://192.168.6.108/hezha')
              .then(response => {
              })
        }, 1000)
        this.text = '执行合闸'
      }
    },
    togglehezha09(append = false) {
      this.hezha09 = 1
      this.fenzha09 = 0
      this.cheru09 = 0
      this.chechu09 = 0
      this.daohe09 = 0
      this.daofen09 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH209正在合闸,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 8 clicked!')
          this.text = 'Button 8 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          // eslint-disable-next-line no-unused-vars
          axios.post('http://192.168.6.109/hezha')
            .then(response => {
            })
        }, 1000)
        this.text = '执行合闸'
      }
    },
    togglehezha10(append = false) {
      this.hezha10 = 1
      this.fenzha10 = 0
      this.cheru10 = 0
      this.chechu10 = 0
      this.daohe10 = 0
      this.daofen10 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH210正在合闸,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 8 clicked!')
          this.text = 'Button 8 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          // eslint-disable-next-line no-unused-vars
          axios.post('http://192.168.6.110/hezha')
            .then(response => {
            })
        }, 1000)
        this.text = '执行合闸'
      }
    },
    togglehezha11(append = false) {
      this.hezha11 = 1
      this.fenzha11 = 0
      this.cheru11 = 0
      this.chechu11 = 0
      this.daohe11 = 0
      this.daofen11 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH211正在合闸,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 8 clicked!')
          this.text = 'Button 8 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          // eslint-disable-next-line no-unused-vars
          axios.post('http://192.168.6.111/hezha')
            .then(response => {
            })
        }, 1000)
        this.text = '执行合闸'
      }
    },

    togglefenzha01(append = false) {
      this.hezha01 = 0
      this.fenzha01 = 1
      this.cheru01 = 0
      this.chechu01 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH201正在分闸,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 8 clicked!')
          this.text = 'Button 8 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          // eslint-disable-next-line no-unused-vars
          axios.post('http://192.168.6.101/fenzha')
            .then(response => {
            })
        }, 1000)
        this.text = '执行分闸'
      }
    },

    togglefenzha02(append = false) {
      this.hezha02 = 0
      this.fenzha02 = 1
      this.cheru02 = 0
      this.chechu02 = 0
      this.daohe02 = 0
      this.daofen02 = 0

      // this.fenzha02 = this.fenzha02 === 0 ? 1 : 0
      if (!this.isDisabled) {
        this.$bvToast.toast('AH202正在分闸,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 8 clicked!')
          this.text = 'Button 8 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          // eslint-disable-next-line no-unused-vars
          axios.post('http://192.168.6.102/fenzha')
            .then(response => {
            })
        }, 1000)
        this.text = '执行分闸'
      }
    },
    togglefenzha03(append = false) {
      this.hezha03 = 0
      this.fenzha03 = 1
      this.cheru03 = 0
      this.chechu03 = 0
      this.daohe03 = 0
      this.daofen03 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH203正在分闸,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 8 clicked!')
          this.text = 'Button 8 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          // eslint-disable-next-line no-unused-vars
          axios.post('http://192.168.6.103/fenzha')
            .then(response => {
            })
        }, 1000)
        this.text = '执行分闸'
      }
    },
    togglefenzha04(append = false) {
      this.hezha04 = 0
      this.fenzha04 = 1
      this.cheru04 = 0
      this.chechu04 = 0
      this.daohe04 = 0
      this.daofen04 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH204正在分闸,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 8 clicked!')
          this.text = 'Button 8 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          // eslint-disable-next-line no-unused-vars
          axios.post('http://192.168.6.104/fenzha')
              .then(response => {
              })
        }, 1000)
        this.text = '执行分闸'
      }
    },

    togglefenzha05(append = false) {
      this.hezha05 = 0
      this.fenzha05 = 1
      this.cheru05 = 0
      this.chechu05 = 0
      this.daohe05 = 0
      this.daofen05 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH205正在分闸,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 8 clicked!')
          this.text = 'Button 8 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          // eslint-disable-next-line no-unused-vars
          axios.post('http://192.168.6.105/fenzha')
              .then(response => {
              })
        }, 1000)
        this.text = '执行分闸'
      }
    },
    togglefenzha06(append = false) {
      this.hezha06 = 0
      this.fenzha06 = 1
      this.cheru06 = 0
      this.chechu06 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH206正在分闸,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 8 clicked!')
          this.text = 'Button 8 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          // eslint-disable-next-line no-unused-vars
          axios.post('http://192.168.6.106/fenzha')
            .then(response => {
            })
        }, 1000)
        this.text = '执行分闸'
      }
    },
    togglefenzha07(append = false) {
      this.hezha07 = 0
      this.fenzha07 = 1
      this.cheru07 = 0
      this.chechu07 = 0
      this.daohe07 = 0
      this.daofen07 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH207正在分闸,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 8 clicked!')
          this.text = 'Button 8 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          // eslint-disable-next-line no-unused-vars
          axios.post('http://192.168.6.107/fenzha')
              .then(response => {
              })
        }, 1000)
        this.text = '执行分闸'
      }
    },

    togglefenzha08(append = false) {
      this.hezha08 = 0
      this.fenzha08 = 1
      this.cheru08 = 0
      this.chechu08 = 0
      this.daohe08 = 0
      this.daofen08 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH208正在分闸,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 8 clicked!')
          this.text = 'Button 8 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          // eslint-disable-next-line no-unused-vars
          axios.post('http://192.168.6.108/fenzha')
              .then(response => {
              })
        }, 1000)
        this.text = '执行分闸'
      }
    },
    togglefenzha09(append = false) {
      this.hezha09 = 0
      this.fenzha09 = 1
      this.cheru09 = 0
      this.chechu09 = 0
      this.daohe09 = 0
      this.daofen09 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH209正在分闸,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 8 clicked!')
          this.text = 'Button 8 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          // eslint-disable-next-line no-unused-vars
          axios.post('http://192.168.6.109/fenzha')
            .then(response => {
            })
        }, 1000)
        this.text = '执行分闸'
      }
    },
    togglefenzha10(append = false) {
      this.hezha10 = 0
      this.fenzha10 = 1
      this.cheru10 = 0
      this.chechu10 = 0
      this.daohe10 = 0
      this.daofen10 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH210正在分闸,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 8 clicked!')
          this.text = 'Button 8 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          // eslint-disable-next-line no-unused-vars
          axios.post('http://192.168.6.110/fenzha')
            .then(response => {
            })
        }, 1000)
        this.text = '执行分闸'
      }
    },
    togglefenzha11(append = false) {
      this.hezha11 = 0
      this.fenzha11 = 1
      this.cheru11 = 0
      this.chechu11 = 0
      this.daohe11 = 0
      this.daofen11 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH211正在分闸,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 8 clicked!')
          this.text = 'Button 8 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          // eslint-disable-next-line no-unused-vars
          axios.post('http://192.168.6.111/fenzha')
            .then(response => {
            })
        }, 1000)
        this.text = '执行分闸'
      }
    },

    togglecheru01(append = false) {
      this.hezha01 = 0
      this.fenzha01 = 0
      this.cheru01 = 1
      this.chechu01 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH201正在手车驶入,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 8 clicked!')
          this.text = 'Button 8 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          // eslint-disable-next-line no-unused-vars
          axios.post('http://192.168.6.101/cheru')
            .then(response => {
            })
        }, 1000)
        this.text = '执行手车驶入'
      }
    },
    togglecheru02(append = false) {
      this.hezha02 = 0
      this.fenzha02 = 0
      this.cheru02 = 1
      this.chechu02 = 0
      this.daohe02 = 0
      this.daofen02 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH202正在手车驶入,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 8 clicked!')
          this.text = 'Button 8 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          // eslint-disable-next-line no-unused-vars
          axios.post('http://192.168.6.102/cheru')
            .then(response => {
            })
        }, 1000)
        this.text = '执行手车驶入'
      }
    },
    togglecheru03(append = false) {
      this.hezha03 = 0
      this.fenzha03 = 0
      this.cheru03 = 1
      this.chechu03 = 0
      this.daohe03 = 0
      this.daofen03 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH203正在手车驶入,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 8 clicked!')
          this.text = 'Button 8 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          // eslint-disable-next-line no-unused-vars
          axios.post('http://192.168.6.103/cheru')
            .then(response => {
            })
        }, 1000)
        this.text = '执行手车驶入'
      }
    },

    togglecheru06(append = false) {
      this.hezha06 = 0
      this.fenzha06 = 0
      this.cheru06 = 1
      this.chechu06 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH206正在手车驶入,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 8 clicked!')
          this.text = 'Button 8 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          // eslint-disable-next-line no-unused-vars
          axios.post('http://192.168.6.106/cheru')
            .then(response => {
            })
        }, 1000)
        this.text = '执行手车驶入'
      }
    },
    togglecheru09(append = false) {
      this.hezha09 = 0
      this.fenzha09 = 0
      this.cheru09 = 1
      this.chechu09 = 0
      this.daohe09 = 0
      this.daofen09 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH209正在手车驶入,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 8 clicked!')
          this.text = 'Button 8 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          // eslint-disable-next-line no-unused-vars
          axios.post('http://192.168.6.109/cheru')
            .then(response => {
            })
        }, 1000)
        this.text = '执行手车驶入'
      }
    },
    togglecheru10(append = false) {
      this.hezha10 = 0
      this.fenzha10 = 0
      this.cheru10 = 1
      this.chechu10 = 0
      this.daohe10 = 0
      this.daofen10 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH210正在手车驶入,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 8 clicked!')
          this.text = 'Button 8 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          // eslint-disable-next-line no-unused-vars
          axios.post('http://192.168.6.110/cheru')
            .then(response => {
            })
        }, 1000)
        this.text = '执行手车驶入'
      }
    },
    togglecheru11(append = false) {
      // this.cheru11 = this.cheru11 === 0 ? 1 : 0
      this.hezha11 = 0
      this.fenzha11 = 0
      this.cheru11 = 1
      this.chechu11 = 0
      this.daohe11 = 0
      this.daofen11 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH211正在手车驶入,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 8 clicked!')
          this.text = 'Button 8 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          // eslint-disable-next-line no-unused-vars
          axios.post('http://192.168.6.111/cheru')
            .then(response => {
            })
        }, 1000)
        this.text = '执行手车驶入'
      }
    },

    togglechechu01(append = false) {
      this.hezha01 = 0
      this.fenzha01 = 0
      this.cheru01 = 0
      this.chechu01 = 1
      if (!this.isDisabled) {
        this.$bvToast.toast('AH201正在手车驶出,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 8 clicked!')
          this.text = 'Button 8 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          // eslint-disable-next-line no-unused-vars
          axios.post('http://192.168.6.101/chechu')
            .then(response => {
            })
        }, 1000)
        this.text = '执行手车驶出'
      }
    },
    togglechechu02(append = false) {
      this.hezha02 = 0
      this.fenzha02 = 0
      this.cheru02 = 0
      this.chechu02 = 1
      this.daohe02 = 0
      this.daofen02 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH202正在手车驶出,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 8 clicked!')
          this.text = 'Button 8 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          // eslint-disable-next-line no-unused-vars
          axios.post('http://192.168.6.102/chechu')
            .then(response => {
            })
        }, 1000)
        this.text = '执行手车驶出'
      }
    },
    togglechechu03(append = false) {
      this.hezha03 = 0
      this.fenzha03 = 0
      this.cheru03 = 0
      this.chechu03 = 1
      this.daohe03 = 0
      this.daofen03 = 0

      this.$bvToast.toast('AH203正在手车驶出,请勿做其他操作...', {
        title: '温馨提示',
        autoHideDelay: 1000,
        appendToast: Boolean(append),
      })
      this.isDisabled = true
      setTimeout(() => {
        console.log('Button 8 clicked!')
        this.text = 'Button 8 clicked!'
        this.isDisabled = false
        this.text = '指令发送成功！'
        // eslint-disable-next-line no-unused-vars
        axios.post('http://192.168.6.103/chechu')
          .then(response => {
          })
      }, 1000)
      this.text = '执行手车驶出'
    },


    togglechechu06(append = false) {
      this.hezha06 = 0
      this.fenzha06 = 0
      this.cheru06 = 0
      this.chechu06 = 1
      this.daohe06 = 0
      this.daofen06 = 0

      this.$bvToast.toast('AH205正在手车驶出,请勿做其他操作...', {
        title: '温馨提示',
        autoHideDelay: 1000,
        appendToast: Boolean(append),
      })
      this.isDisabled = true
      setTimeout(() => {
        console.log('Button 8 clicked!')
        this.text = 'Button 8 clicked!'
        this.isDisabled = false
        this.text = '指令发送成功！'
        // eslint-disable-next-line no-unused-vars
        axios.post('http://192.168.6.106/chechu')
          .then(response => {
          })
      }, 1000)
      this.text = '执行手车驶出'
    },
    togglechechu09(append = false) {
      this.hezha09 = 0
      this.fenzha09 = 0
      this.cheru09 = 0
      this.chechu09 = 1
      this.daohe09 = 0
      this.daofen09 = 0

      this.$bvToast.toast('AH209正在手车驶出,请勿做其他操作...', {
        title: '温馨提示',
        autoHideDelay: 1000,
        appendToast: Boolean(append),
      })
      this.isDisabled = true
      setTimeout(() => {
        console.log('Button 8 clicked!')
        this.text = 'Button 8 clicked!'
        this.isDisabled = false
        this.text = '指令发送成功！'
        // eslint-disable-next-line no-unused-vars
        axios.post('http://192.168.6.109/chechu')
          .then(response => {
          })
      }, 1000)
      this.text = '执行手车驶出'
    },

    togglechechu10(append = false) {
      this.hezha10 = 0
      this.fenzha10 = 0
      this.cheru10 = 1
      this.chechu10 = 0
      this.daohe10 = 0
      this.daofen10 = 0

      this.$bvToast.toast('AH205正在手车驶出,请勿做其他操作...', {
        title: '温馨提示',
        autoHideDelay: 1000,
        appendToast: Boolean(append),
      })
      this.isDisabled = true
      setTimeout(() => {
        console.log('Button 8 clicked!')
        this.text = 'Button 8 clicked!'
        this.isDisabled = false
        this.text = '指令发送成功！'
        // eslint-disable-next-line no-unused-vars
        axios.post('http://192.168.6.110/chechu')
          .then(response => {
          })
      }, 1000)
      this.text = '执行手车驶出'
    },

    togglechechu11(append = false) {
      this.hezha11 = 0
      this.fenzha11 = 0
      this.cheru11 = 0
      this.chechu11 = 1
      this.daohe11 = 0
      this.daofen11 = 0

      this.$bvToast.toast('AH211正在手车驶出,请勿做其他操作...', {
        title: '温馨提示',
        autoHideDelay: 1000,
        appendToast: Boolean(append),
      })
      this.isDisabled = true
      setTimeout(() => {
        console.log('Button 8 clicked!')
        this.text = 'Button 8 clicked!'
        this.isDisabled = false
        this.text = '指令发送成功！'
        // eslint-disable-next-line no-unused-vars
        axios.post('http://192.168.6.111/chechu')
          .then(response => {
          })
      }, 1000)
      this.text = '执行手车驶出'
    },

    toggledaohe02(append = false) {
      this.hezha02 = 0
      this.fenzha02 = 0
      this.cheru02 = 0
      this.chechu02 = 0
      this.daohe02 = 1
      this.daofen02 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH202正在闭合接地刀中,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 3 clicked!')
          this.text = 'Button 3 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          axios.post('http://192.168.6.102/daohe').then(response => {
          })
        }, 1000)
        this.text = '执行闭合接地刀操作'
      }
    },
    toggledaohe03(append = false) {
      this.hezha03 = 0
      this.fenzha03 = 0
      this.cheru03 = 0
      this.chechu03 = 0
      this.daohe03 = 1
      this.daofen03 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH203正在闭合接地刀中,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 3 clicked!')
          this.text = 'Button 3 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          axios.post('http://192.168.6.103/daohe').then(response => {
          })
        }, 1000)
        this.text = '执行闭合接地刀操作'
      }
    },
    toggledaohe09(append = false) {
      this.hezha09 = 0
      this.fenzha09 = 0
      this.cheru09 = 0
      this.chechu09 = 0
      this.daohe09 = 1
      this.daofen09 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH209正在闭合接地刀中,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 3 clicked!')
          this.text = 'Button 3 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          axios.post('http://192.168.6.109/daohe').then(response => {
          })
        }, 1000)
        this.text = '执行闭合接地刀操作'
      }
    },
    toggledaohe10(append = false) {
      this.hezha10 = 0
      this.fenzha10 = 0
      this.cheru10 = 0
      this.chechu10 = 0
      this.daohe10 = 1
      this.daofen10 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH210正在闭合接地刀中,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 3 clicked!')
          this.text = 'Button 3 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          axios.post('http://192.168.6.110/daohe').then(response => {
          })
        }, 1000)
        this.text = '执行闭合接地刀操作'
      }
    },
    toggledaohe11(append = false) {
      this.hezha11 = 0
      this.fenzha11 = 0
      this.cheru11 = 0
      this.chechu11 = 0
      this.daohe11 = 1
      this.daofen11 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH211正在闭合接地刀中,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 3 clicked!')
          this.text = 'Button 3 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          axios.post('http://192.168.6.111/daohe').then(response => {
          })
        }, 1000)
        this.text = '执行闭合接地刀操作'
      }
    },

    toggledaofen02(append = false) {
      this.hezha02 = 0
      this.fenzha02 = 0
      this.cheru02 = 0
      this.chechu02 = 0
      this.daohe02 = 0
      this.daofen02 = 1

      if (!this.isDisabled) {
        this.$bvToast.toast('AH202正在断开接地刀中,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 3 clicked!')
          this.text = 'Button 3 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          axios.post('http://192.168.6.102/daofen').then(response => {
          })
        }, 1000)
        this.text = '执行断开接地刀操作'
      }
    },
    toggledaofen03(append = false) {
      this.hezha03 = 0
      this.fenzha03 = 0
      this.cheru03 = 0
      this.chechu03 = 0
      this.daohe03 = 0
      this.daofen03 = 1

      if (!this.isDisabled) {
        this.$bvToast.toast('AH203正在断开接地刀中,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 3 clicked!')
          this.text = 'Button 3 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          axios.post('http://192.168.6.103/daofen').then(response => {
          })
        }, 1000)
        this.text = '执行断开接地刀操作'
      }
    },
    toggledaofen09(append = false) {
      this.hezha09 = 0
      this.fenzha09 = 0
      this.cheru09 = 0
      this.chechu09 = 0
      this.daohe09 = 0
      this.daofen09 = 1

      if (!this.isDisabled) {
        this.$bvToast.toast('AH209正在断开接地刀中,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 3 clicked!')
          this.text = 'Button 3 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          axios.post('http://192.168.6.109/daofen').then(response => {
          })
        }, 1000)
        this.text = '执行断开接地刀操作'
      }
    },
    toggledaofen10(append = false) {
      this.hezha10 = 0
      this.fenzha10 = 0
      this.cheru10 = 0
      this.chechu10 = 0
      this.daohe10 = 0
      this.daofen10 = 1

      if (!this.isDisabled) {
        this.$bvToast.toast('AH210正在断开接地刀中,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 3 clicked!')
          this.text = 'Button 3 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          axios.post('http://192.168.6.110/daofen').then(response => {
          })
        }, 1000)
        this.text = '执行断开接地刀操作'
      }
    },
    toggledaofen11(append = false) {
      this.hezha11 = 0
      this.fenzha11 = 0
      this.cheru11 = 0
      this.chechu11 = 0
      this.daohe11 = 0
      this.daofen11 = 1

      if (!this.isDisabled) {
        this.$bvToast.toast('AH211正在断开接地刀中,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 3 clicked!')
          this.text = 'Button 3 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          axios.post('http://192.168.6.111/jiedife').then(response => {
          })
        }, 1000)
        this.text = '执行断开接地刀操作'
      }
    },



    toggleyigong01(append = false) {

      if (!this.isDisabled) {
        this.$bvToast.toast('AH201正在一键送电,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 3 clicked!')
          this.text = 'Button 3 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          axios.post('http://192.168.6.101/yigong').then(response => {
          })
        }, 1000)
        this.text = '执行一键送电'
      }
    },

    toggleyigong02(append = false) {

      if (!this.isDisabled) {
        this.$bvToast.toast('AH202正在一键送电,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 3 clicked!')
          this.text = 'Button 3 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          axios.post('http://192.168.6.102/yigong').then(response => {
          })
        }, 1000)
        this.text = '执行一键送电'
      }
    },

    toggleyigong03(append = false) {

      if (!this.isDisabled) {
        this.$bvToast.toast('AH203正在一键送电,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 3 clicked!')
          this.text = 'Button 3 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          axios.post('http://192.168.6.103/yigong').then(response => {
          })
        }, 1000)
        this.text = '执行一键送电'
      }
    },

    toggleyigong06(append = false) {

      if (!this.isDisabled) {
        this.$bvToast.toast('AH206正在一键送电,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 3 clicked!')
          this.text = 'Button 3 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          axios.post('http://192.168.6.106/yigong').then(response => {
          })
        }, 1000)
        this.text = '执行一键送电'
      }
    },

    toggleyigong09(append = false) {

      if (!this.isDisabled) {
        this.$bvToast.toast('AH209正在一键送电,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 3 clicked!')
          this.text = 'Button 3 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          axios.post('http://192.168.6.109/yigong').then(response => {
          })
        }, 1000)
        this.text = '执行一键送电'
      }
    },

    toggleyigong10(append = false) {

      if (!this.isDisabled) {
        this.$bvToast.toast('AH210正在一键送电,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 3 clicked!')
          this.text = 'Button 3 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          axios.post('http://192.168.6.110/yigong').then(response => {
          })
        }, 1000)
        this.text = '执行一键送电'
      }
    },
    toggleyigong11(append = false) {

      if (!this.isDisabled) {
        this.$bvToast.toast('AH211正在一键送电,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 3 clicked!')
          this.text = 'Button 3 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          axios.post('http://192.168.6.111/yigong').then(response => {
          })
        }, 1000)
        this.text = '执行一键送电'
      }
    },
    
    toggleyiduan01(append = false) {

      if (!this.isDisabled) {
        this.$bvToast.toast('AH201正在一键断电,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 3 clicked!')
          this.text = 'Button 3 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          axios.post('http://192.168.6.101/yiduan').then(response => {
          })
        }, 1000)
        this.text = '执行一键断电'
      }
    },

    toggleyiduan02(append = false) {

      if (!this.isDisabled) {
        this.$bvToast.toast('AH202正在一键断电,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 3 clicked!')
          this.text = 'Button 3 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          axios.post('http://192.168.6.102/yiduan').then(response => {
          })
        }, 1000)
        this.text = '执行一键断电'
      }
    },

    toggleyiduan03(append = false) {

      if (!this.isDisabled) {
        this.$bvToast.toast('AH203正在一键断电,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 3 clicked!')
          this.text = 'Button 3 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          axios.post('http://192.168.6.103/yiduan').then(response => {
          })
        }, 1000)
        this.text = '执行一键断电'
      }
    },

    toggleyiduan06(append = false) {

      if (!this.isDisabled) {
        this.$bvToast.toast('AH206正在一键断电,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 3 clicked!')
          this.text = 'Button 3 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          axios.post('http://192.168.6.106/yiduan').then(response => {
          })
        }, 1000)
        this.text = '执行一键断电'
      }
    },

    toggleyiduan09(append = false) {

      if (!this.isDisabled) {
        this.$bvToast.toast('AH209正在一键断电,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 3 clicked!')
          this.text = 'Button 3 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          axios.post('http://192.168.6.109/yiduan').then(response => {
          })
        }, 1000)
        this.text = '执行一键断电'
      }
    },

    toggleyiduan10(append = false) {

      if (!this.isDisabled) {
        this.$bvToast.toast('AH210正在一键断电,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 3 clicked!')
          this.text = 'Button 3 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          axios.post('http://192.168.6.110/yiduan').then(response => {
          })
        }, 1000)
        this.text = '执行一键断电'
      }
    },

    toggleyiduan11(append = false) {

      if (!this.isDisabled) {
        this.$bvToast.toast('AH211正在一键断电,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 3 clicked!')
          this.text = 'Button 3 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          axios.post('http://192.168.6.111/yiduan').then(response => {
          })
        }, 1000)
        this.text = '执行一键断电'
      }
    },

    togglefuwei01(append = false) {

      if (!this.isDisabled) {
        this.$bvToast.toast('AH201正在复位,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 3 clicked!')
          this.text = 'Button 3 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          axios.post('http://192.168.6.101/reboot').then(response => {
          })
        }, 1000)
        this.text = '执行复位'
      }
    },
    togglefuwei02(append = false) {

      if (!this.isDisabled) {
        this.$bvToast.toast('AH202正在复位,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 3 clicked!')
          this.text = 'Button 3 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          axios.post('http://192.168.6.102/reboot').then(response => {
          })
        }, 1000)
        this.text = '执行复位'
      }
    },

    togglefuwei03(append = false) {

      if (!this.isDisabled) {
        this.$bvToast.toast('AH203正在复位,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 3 clicked!')
          this.text = 'Button 3 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          axios.post('http://192.168.6.103/reboot').then(response => {
          })
        }, 1000)
        this.text = '执行复位'
      }
    },

    togglefuwei06(append = false) {

      if (!this.isDisabled) {
        this.$bvToast.toast('AH206正在复位,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 3 clicked!')
          this.text = 'Button 3 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          axios.post('http://192.168.6.106/reboot').then(response => {
          })
        }, 1000)
        this.text = '执行复位'
      }
    },

    togglefuwei09(append = false) {

      if (!this.isDisabled) {
        this.$bvToast.toast('AH209正在复位,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 3 clicked!')
          this.text = 'Button 3 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          axios.post('http://192.168.6.109/reboot').then(response => {
          })
        }, 1000)
        this.text = '执行复位'
      }
    },

    togglefuwei10(append = false) {

      if (!this.isDisabled) {
        this.$bvToast.toast('AH210正在复位,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 3 clicked!')
          this.text = 'Button 3 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          axios.post('http://192.168.6.110/reboot').then(response => {
          })
        }, 1000)
        this.text = '执行复位'
      }
    },
    togglefuwei11(append = false) {

      if (!this.isDisabled) {
        this.$bvToast.toast('AH211正在复位,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 3 clicked!')
          this.text = 'Button 3 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          axios.post('http://192.168.6.111/reboot').then(response => {
          })
        }, 1000)
        this.text = '执行复位'
      }
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

.button-3d-1{
  position: relative;
  background: #ad65dc;
  border: none;
  color: #ffffff;
  padding: 15px 24px;
  font-size: 1.3rem;
  font-weight: bold;
  outline: none;
  box-shadow: -6px 6px 0 hsl(283, 33%, 41%);
}
.button-3d-2{
  position: relative;
  background: #9a999a;
  border: none;
  color: #ffffff;
  padding: 15px 24px;
  font-size: 1.3rem;
  font-weight: bold;
  outline: none;
  box-shadow: -6px 6px 0 hsl(300, 1%, 30%);
}
.button-3d-3{
  position: relative;
  background: #57cc3c;
  border: none;
  color: #ffffff;
  padding: 15px 24px;
  font-size: 1.3rem;
  font-weight: bold;
  outline: none;
  box-shadow: -6px 6px 0 hsl(117, 35%, 31%);
}
.button-3d-4{
  position: relative;
  background: #e1485f;
  border: none;
  color: #ffffff;
  padding: 15px 24px;
  font-size: 1.3rem;
  font-weight: bold;
  outline: none;
  box-shadow: -6px 6px 0 hsl(355, 100%, 30%);
}
.button-3d-5{
  position: relative;
  background: #e5c106;
  border: none;
  color: #ffffff;
  padding: 15px 24px;
  font-size: 1.3rem;
  font-weight: bold;
  outline: none;
  box-shadow: -6px 6px 0 hsl(48, 100%, 30%);
}
.button-3d-6{
  position: relative;
  background: #16dee5;
  border: none;
  color: #ffffff;
  padding: 15px 24px;
  font-size: 1.3rem;
  font-weight: bold;
  outline: none;
  box-shadow: -6px 6px 0 hsl(178, 100%, 30%);
}

.button-3d-7{
  position: relative;
  background: #de7b2d;
  border: none;
  color: #ffffff;
  padding: 15px 24px;
  font-size: 1.3rem;
  font-weight: bold;
  outline: none;
  box-shadow: -6px 6px 0 hsl(30, 63%, 34%);
}

.button-3d-8{
  position: relative;
  background: #e16cb9;
  border: none;
  color: #ffffff;
  padding: 15px 24px;
  font-size: 1.3rem;
  font-weight: bold;
  outline: none;
  box-shadow: -6px 6px 0 hsl(298, 100%, 30%);
}

.button-3d-9{
  position: relative;
  background: #6b6be0;
  border: none;
  color: #ffffff;
  padding: 15px 24px;
  font-size: 1.3rem;
  font-weight: bold;
  outline: none;
  box-shadow: -6px 6px 0 hsl(240, 54%, 54%);
}

</style>
