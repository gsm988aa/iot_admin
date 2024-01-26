<template>
  <div style="width: 2000px;position: absolute">

    <b-spinner
      v-if="isDisabled"
      label="Loading..."
    />

    <b-card style="position: relative;width: 100%;">

      <b-table
        striped
        hover
        :items="items"
        thead-class="text-center"
        bordered
        style="table-layout: fixed; width: 100%;"
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
            v-if="shiyanwei01 === 1"
            src="@/assets/images/201/AH201shiyan.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="gongzuowei01 === 1"
            src="@/assets/images/201/AH201gongzuo.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="duanluhe01 === 1"
            src="@/assets/images/201/AH201duanluhe.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="duanlufen01 === 1"
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
            v-if="shiyanwei02 === 1"
            src="@/assets/images/202/AH202shiyan.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="gongzuowei02 === 1"
            src="@/assets/images/202/AH202gongzuo.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="duanluhe02 === 1"
            src="@/assets/images/202/AH202duanluhe.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="duanlufen02 === 1"
            src="@/assets/images/202/AH202duanlufen.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="jiedihe02 === 1"
            src="@/assets/images/202/AH202jiedihe.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="jiedifen02 === 1"
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
            v-if="shiyanwei03 === 1"
            src="@/assets/images/202/AH202shiyan.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="gongzuowei03 === 1"
            src="@/assets/images/202/AH202gongzuo.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="duanluhe03 === 1"
            src="@/assets/images/202/AH202duanluhe.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="duanlufen03 === 1"
            src="@/assets/images/202/AH202duanlufen.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="jiedihe03 === 1"
            src="@/assets/images/202/AH202jiedihe.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="jiedifen03 === 1"
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
            v-if="shiyanwei04 === 1"
            src="@/assets/images/204/AH204shiyan.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="gongzuowei04 === 1"
            src="@/assets/images/204/AH204gongzuo.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="duanluhe04 === 1"
            src="@/assets/images/204/AH204duanluhe.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="duanlufen04 === 1"
            src="@/assets/images/204/AH204duanlufen.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="jiedihe04 === 1"
            src="@/assets/images/204/AH204jiedihe.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="jiedifen04 === 1"
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
            v-if="shiyanwei05 === 1"
            src="@/assets/images/204/AH204shiyan.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="gongzuowei05 === 1"
            src="@/assets/images/204/AH204gongzuo.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="duanluhe05 === 1"
            src="@/assets/images/204/AH204duanluhe.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="duanlufen05 === 1"
            src="@/assets/images/204/AH204duanlufen.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="jiedihe05 === 1"
            src="@/assets/images/204/AH204jiedihe.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="jiedifen05 === 1"
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
            v-if="shiyanwei06 === 1"
            src="@/assets/images/206/AH206shiyan.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="gongzuowei06 === 1"
            src="@/assets/images/206/AH206gongzuo.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="duanluhe06 === 1"
            src="@/assets/images/206/AH206duanluhe.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="duanlufen06 === 1"
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
            v-if="shiyanwei07 === 1"
            src="@/assets/images/204/AH204shiyan.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="gongzuowei07 === 1"
            src="@/assets/images/204/AH204gongzuo.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="duanluhe07 === 1"
            src="@/assets/images/204/AH204duanluhe.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="duanlufen07 === 1"
            src="@/assets/images/204/AH204duanlufen.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="jiedihe07 === 1"
            src="@/assets/images/204/AH204jiedihe.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="jiedifen07 === 1"
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
            v-if="shiyanwei08 === 1"
            src="@/assets/images/204/AH204shiyan.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="gongzuowei08 === 1"
            src="@/assets/images/204/AH204gongzuo.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="duanluhe08 === 1"
            src="@/assets/images/204/AH204duanluhe.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="duanlufen08 === 1"
            src="@/assets/images/204/AH204duanlufen.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="jiedihe08 === 1"
            src="@/assets/images/204/AH204jiedihe.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="jiedifen08 === 1"
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
            v-if="shiyanwei09 === 1"
            src="@/assets/images/202/AH202shiyan.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="gongzuowei09 === 1"
            src="@/assets/images/202/AH202gongzuo.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="duanluhe09 === 1"
            src="@/assets/images/202/AH202duanluhe.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="duanlufen09 === 1"
            src="@/assets/images/202/AH202duanlufen.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="jiedihe09 === 1"
            src="@/assets/images/202/AH202jiedihe.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="jiedifen09 === 1"
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
            v-if="shiyanwei10 === 1"
            src="@/assets/images/202/AH202shiyan.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="gongzuowei10 === 1"
            src="@/assets/images/202/AH202gongzuo.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="duanluhe10 === 1"
            src="@/assets/images/202/AH202duanluhe.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="duanlufen10 === 1"
            src="@/assets/images/202/AH202duanlufen.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="jiedihe10 === 1"
            src="@/assets/images/202/AH202jiedihe.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="jiedifen10 === 1"
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
            v-if="shiyanwei11 === 1"
            src="@/assets/images/201/AH201shiyan.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="gongzuowei11 === 1"
            src="@/assets/images/201/AH201gongzuo.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="duanluhe11 === 1"
            src="@/assets/images/201/AH201duanluhe.svg"
            style="max-width: 100%; max-height: 100%"
          >
          <img
            v-else-if="duanlufen11 === 1"
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

      <div>

        <b-collapse v-model="isCollapsed">
          <b-table
            striped
            hover
            :items="dataitems"
            thead-class="table"
            class="text-sty"
            no-header
            :fields="['unit','AH201', 'AH202', 'AH203', 'AH204', 'AH205', 'AH206','AH200', 'AH207', 'AH208', 'AH209', 'AH210', 'AH211']"
            :thead-class="'d-none'"
            bordered
          >
            <template #cell(unit)="data">
              <span class="unit-text-color">{{ data.value }}</span>
            </template>
          </b-table>
        </b-collapse>
        <b-button
          variant="primary"
          @click="toggleCollapse"
        >
          {{ isCollapsed ? '收起' : '展开' }}
        </b-button>
      </div>

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

            <div style="display: flex; flex-direction: column;width: 100%;margin-top: -212px">
              <!--                点击位置后要再点一遍-->
              <!--                <br />-->
              <!--                复位后才能点其他按钮-->
              <b-button
                variant="outline-primary"
                class="button-3d-1"
                :disabled="isDisabled"
                @click="toggleshiyanwei01"
              >
                试验位置
              </b-button>
              <br>
              <b-button
                variant="outline-secondary"
                class="button-3d-2"
                :disabled="isDisabled"
                @click="togglegongzuowei01"
              >
                工作位置
              </b-button>

              <br>

              <b-button
                variant="outline-success"
                class="button-3d-3"
                :disabled="isDisabled"
                @click="toggleduanluhe01"
              >
                断路器合闸
              </b-button>
              <br>
              <b-button
                variant="outline-danger"
                class="button-3d-4"
                :disabled="isDisabled"
                @click="toggleduanlufen01"
              >
                断路器分闸
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
                @click="toggleshiyanwei02"
              >
                试验位置
              </b-button>
              <br>
              <b-button
                variant="outline-secondary"
                class="button-3d-2"
                :disabled="isDisabled"
                @click="togglegongzuowei02"
              >
                工作位置
              </b-button>

              <br>

              <b-button
                variant="outline-success"
                class="button-3d-3"
                :disabled="isDisabled"
                @click="toggleduanluhe02"
              >
                断路器合闸
              </b-button>
              <br>
              <b-button
                variant="outline-danger"
                class="button-3d-4"
                :disabled="isDisabled"
                @click="toggleduanlufen02"
              >
                断路器分闸
              </b-button>

              <br>
              <b-button
                variant="outline-warning"
                class="button-3d-5"
                :disabled="isDisabled"
                @click="togglejiedifen02"
              >
                断开接地刀
              </b-button>
              <br>
              <b-button
                variant="outline-info"
                class="button-3d-6"
                :disabled="isDisabled"
                @click="togglejiedihe02"
              >
                闭合接地刀
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
                @click="toggleshiyanwei03"
              >
                试验位置
              </b-button>
              <br>
              <b-button
                variant="outline-secondary"
                class="button-3d-2"
                :disabled="isDisabled"
                @click="togglegongzuowei03"
              >
                工作位置
              </b-button>

              <br>

              <b-button
                variant="outline-success"
                class="button-3d-3"
                :disabled="isDisabled"
                @click="toggleduanluhe03"
              >
                断路器合闸
              </b-button>
              <br>
              <b-button
                variant="outline-danger"
                :disabled="isDisabled"
                class="button-3d-4"
                @click="toggleduanlufen03"
              >
                断路器分闸
              </b-button>

              <br>
              <b-button
                variant="outline-warning"
                class="button-3d-5"
                :disabled="isDisabled"
                @click="togglejiedifen03"
              >
                断开接地刀
              </b-button>
              <br>
              <b-button
                variant="outline-info"
                class="button-3d-6"
                :disabled="isDisabled"
                @click="togglejiedihe03"
              >
                闭合接地刀
              </b-button>
            </div>

          </template>

          <template #cell(AH204)="data">

            <div
              style="display: flex; flex-direction: column;width: 100%;margin-top: 180px"
            >
              <!--                点击位置后要再点一遍-->
              <!--                <br />-->
              <!--                复位后才能点其他按钮-->

              <b-button
                variant="outline-success"
                class="button-3d-3"
                :disabled="isDisabled"
                @click="toggleduanluhe04"
              >
                断路器合闸
              </b-button>
              <br>
              <b-button
                variant="outline-danger"
                :disabled="isDisabled"
                class="button-3d-4"
                @click="toggleduanlufen04"
              >
                断路器分闸
              </b-button>

              <br>
              <b-button
                variant="outline-warning"
                class="button-3d-5"
                :disabled="isDisabled"
                @click="togglejiedifen04"
              >
                断开接地刀
              </b-button>
              <br>
              <b-button
                variant="outline-info"
                class="button-3d-6"
                :disabled="isDisabled"
                @click="togglejiedihe04"
              >
                闭合接地刀
              </b-button>
            </div>

          </template>

          <template #cell(AH205)="data">

            <div
              style="display: flex; flex-direction: column;width: 100%;margin-top: 180px"
            >
              <!--                点击位置后要再点一遍-->
              <!--                <br />-->
              <!--                复位后才能点其他按钮-->

              <b-button
                variant="outline-success"
                class="button-3d-3"
                :disabled="isDisabled"
                @click="toggleduanluhe05"
              >
                断路器合闸
              </b-button>
              <br>
              <b-button
                variant="outline-danger"
                class="button-3d-4"
                :disabled="isDisabled"
                @click="toggleduanlufen05"
              >
                断路器分闸
              </b-button>

              <br>
              <b-button
                variant="outline-warning"
                class="button-3d-5"
                :disabled="isDisabled"
                @click="togglejiedifen05"
              >
                断开接地刀
              </b-button>
              <br>
              <b-button
                variant="outline-info"
                class="button-3d-6"
                :disabled="isDisabled"
                @click="togglejiedihe05"
              >
                闭合接地刀
              </b-button>
            </div>

          </template>

          <template #cell(AH206)="data">

            <div style="display: flex; flex-direction: column;width: 100%;margin-top: -212px">
              <!--                点击位置后要再点一遍-->
              <!--                <br />-->
              <!--                复位后才能点其他按钮-->
              <b-button
                variant="outline-primary"
                class="button-3d-1"
                :disabled="isDisabled"
                @click="toggleshiyanwei06"
              >
                试验位置
              </b-button>
              <br>
              <b-button
                variant="outline-secondary"
                class="button-3d-2"
                :disabled="isDisabled"
                @click="togglegongzuowei06"
              >
                工作位置
              </b-button>

              <br>

              <b-button
                variant="outline-success"
                class="button-3d-3"
                :disabled="isDisabled"
                @click="toggleduanluhe06"
              >
                断路器合闸
              </b-button>
              <br>
              <b-button
                variant="outline-danger"
                class="button-3d-4"
                :disabled="isDisabled"
                @click="toggleduanlufen06"
              >
                断路器分闸
              </b-button>

            </div>

          </template>

          <template #cell(AH207)="data">

            <div
              style="display: flex; flex-direction: column;width: 100%;margin-top: 180px"
            >
              <!--                点击位置后要再点一遍-->
              <!--                <br />-->
              <!--                复位后才能点其他按钮-->

              <b-button
                variant="outline-success"
                class="button-3d-3"
                :disabled="isDisabled"
                @click="toggleduanluhe07"
              >
                断路器合闸
              </b-button>
              <br>
              <b-button
                variant="outline-danger"
                :disabled="isDisabled"
                class="button-3d-4"
                @click="toggleduanlufen07"
              >
                断路器分闸
              </b-button>

              <br>
              <b-button
                variant="outline-warning"
                class="button-3d-5"
                :disabled="isDisabled"
                @click="togglejiedifen07"
              >
                断开接地刀
              </b-button>
              <br>
              <b-button
                variant="outline-info"
                class="button-3d-6"
                :disabled="isDisabled"
                @click="togglejiedihe07"
              >
                闭合接地刀
              </b-button>
            </div>

          </template>

          <template #cell(AH208)="data">

            <div
              style="display: flex; flex-direction: column;width: 100%;margin-top: 180px"
            >
              <!--                点击位置后要再点一遍-->
              <!--                <br />-->
              <!--                复位后才能点其他按钮-->

              <b-button
                variant="outline-success"
                class="button-3d-3"
                :disabled="isDisabled"
                @click="toggleduanluhe08"
              >
                断路器合闸
              </b-button>
              <br>
              <b-button
                variant="outline-danger"
                class="button-3d-4"
                :disabled="isDisabled"
                @click="toggleduanlufen08"
              >
                断路器分闸
              </b-button>

              <br>
              <b-button
                variant="outline-warning"
                class="button-3d-5"
                :disabled="isDisabled"
                @click="togglejiedifen08"
              >
                断开接地刀
              </b-button>
              <br>
              <b-button
                variant="outline-info"
                class="button-3d-6"
                :disabled="isDisabled"
                @click="togglejiedihe08"
              >
                闭合接地刀
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
                @click="toggleshiyanwei09"
              >
                试验位置
              </b-button>
              <br>
              <b-button
                variant="outline-secondary"
                class="button-3d-2"
                :disabled="isDisabled"
                @click="togglegongzuowei09"
              >
                工作位置
              </b-button>

              <br>

              <b-button
                variant="outline-success"
                class="button-3d-3"
                :disabled="isDisabled"
                @click="toggleduanluhe09"
              >
                断路器合闸
              </b-button>
              <br>
              <b-button
                variant="outline-danger"
                class="button-3d-4"
                :disabled="isDisabled"
                @click="toggleduanlufen09"
              >
                断路器分闸
              </b-button>

              <br>
              <b-button
                variant="outline-warning"
                class="button-3d-5"
                :disabled="isDisabled"
                @click="togglejiedifen09"
              >
                断开接地刀
              </b-button>
              <br>
              <b-button
                variant="outline-info"
                class="button-3d-6"
                :disabled="isDisabled"
                @click="togglejiedihe09"
              >
                闭合接地刀
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
                @click="toggleshiyanwei10"
              >
                试验位置
              </b-button>
              <br>
              <b-button
                variant="outline-secondary"
                class="button-3d-2"
                :disabled="isDisabled"
                @click="togglegongzuowei10"
              >
                工作位置
              </b-button>

              <br>

              <b-button
                variant="outline-success"
                class="button-3d-3"
                :disabled="isDisabled"
                @click="toggleduanluhe10"
              >
                断路器合闸
              </b-button>
              <br>
              <b-button
                variant="outline-danger"
                class="button-3d-4"
                :disabled="isDisabled"
                @click="toggleduanlufen10"
              >
                断路器分闸
              </b-button>

              <br>
              <b-button
                variant="outline-warning"
                class="button-3d-5"
                :disabled="isDisabled"
                @click="togglejiedifen10"
              >
                断开接地刀
              </b-button>
              <br>
              <b-button
                variant="outline-info"
                class="button-3d-6"
                :disabled="isDisabled"
                @click="togglejiedihe10"
              >
                闭合接地刀
              </b-button>
            </div>

          </template>

          <template #cell(AH211)="data">

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
                @click="toggleshiyanwei11"
              >
                试验位置
              </b-button>
              <br>
              <b-button
                variant="outline-secondary"
                class="button-3d-2"
                :disabled="isDisabled"
                @click="togglegongzuowei11"
              >
                工作位置
              </b-button>

              <br>

              <b-button
                variant="outline-success"
                class="button-3d-3"
                :disabled="isDisabled"
                @click="toggleduanluhe11"
              >
                断路器合闸
              </b-button>
              <br>
              <b-button
                variant="outline-danger"
                class="button-3d-4"
                :disabled="isDisabled"
                @click="toggleduanlufen11"
              >
                断路器分闸
              </b-button>

              <br>
              <b-button
                variant="outline-warning"
                class="button-3d-5"
                :disabled="isDisabled"
                @click="togglejiedifen11"
              >
                断开接地刀
              </b-button>
              <br>
              <b-button
                variant="outline-info"
                class="button-3d-6"
                :disabled="isDisabled"
                @click="togglejiedihe11"
              >
                闭合接地刀
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

      shiyanwei01: 0,
      shiyanwei02: 0,
      shiyanwei03: 0,
      shiyanwei04: 0,
      shiyanwei05: 0,
      shiyanwei06: 0,
      shiyanwei07: 0,
      shiyanwei08: 0,
      shiyanwei09: 0,
      shiyanwei10: 0,
      shiyanwei11: 0,

      gongzuowei01: 0,
      gongzuowei02: 0,
      gongzuowei03: 0,
      gongzuowei04: 0,
      gongzuowei05: 0,
      gongzuowei06: 0,
      gongzuowei07: 0,
      gongzuowei08: 0,
      gongzuowei09: 0,
      gongzuowei10: 0,
      gongzuowei11: 0,

      jiedifen02: 0,
      jiedifen03: 0,
      jiedifen04: 0,
      jiedifen05: 0,
      jiedifen07: 0,
      jiedifen08: 0,
      jiedifen09: 0,
      jiedifen10: 0,
      jiedifen11: 0,

      jiedihe02: 0,
      jiedihe03: 0,
      jiedihe04: 0,
      jiedihe05: 0,
      jiedihe07: 0,
      jiedihe08: 0,
      jiedihe09: 0,
      jiedihe10: 0,
      jiedihe11: 0,

      duanluhe01: 0,
      duanluhe02: 0,
      duanluhe03: 0,
      duanluhe04: 0,
      duanluhe05: 0,
      duanluhe06: 0,
      duanluhe07: 0,
      duanluhe08: 0,
      duanluhe09: 0,
      duanluhe10: 0,
      duanluhe11: 0,

      duanlufen01: 0,
      duanlufen02: 0,
      duanlufen03: 0,
      duanlufen04: 0,
      duanlufen05: 0,
      duanlufen06: 0,
      duanlufen07: 0,
      duanlufen08: 0,
      duanlufen09: 0,
      duanlufen10: 0,
      duanlufen11: 0,

      // qianmen: 0,
      // houmen: 0,
      dataitems: [
        {
          unit: 'Uab',
          AH201: 0,
          AH202: '10.1KV',
          AH203: '10.1KV',
          AH204: 0,
          AH205: '10.1KV',
          AH206: '10.1KV',
          AH207: '10.1KV',
          AH208: '10.1KV',
          AH209: 0,
          AH210: '10.1KV',
          AH211: '10.1KV',
        },
        {
          unit: 'Ubc',
          AH201: 0,
          AH202: '10.1KV',
          AH203: '10.1KV',
          AH204: 0,
          AH205: '10.1KV',
          AH206: '10.1KV',
          AH207: '10.1KV',
          AH208: '10.1KV',
          AH209: 0,
          AH210: '10.1KV',
          AH211: '10.1KV',
        },
        {
          unit: 'Uac',
          AH201: 0,
          AH202: '10.1KV',
          AH203: '10.1KV',
          AH204: 0,
          AH205: '10.1KV',
          AH206: '10.1KV',
          AH207: '10.1KV',
          AH208: '10.1KV',
          AH209: 0,
          AH210: '10.1KV',
          AH211: '10.1KV',
        },
        {
          unit: 'Ia',
          AH201: 0.0,
          AH202: 0.0,
          AH203: 0.0,
          AH204: 0.0,
          AH205: 0.0,
          AH206: 0.0,
          AH207: 0.0,
          AH208: 0.0,
          AH209: 0.0,
          AH210: 0.0,
          AH211: 0.0,
        },
        {
          unit: 'Ib',
          AH201: 0.6,
          AH202: 0.6,
          AH203: 0.6,
          AH204: 0.6,
          AH205: 0.6,
          AH206: 0.6,
          AH207: 0.0,
          AH208: 0.0,
          AH209: 0.0,
          AH210: 0.0,
          AH211: 0.0,
        },
        {
          unit: 'Ic',
          AH201: 0.1,
          AH202: 0.1,
          AH203: 0.1,
          AH204: 0.1,
          AH205: 0.1,
          AH206: 0.1,
          AH207: 0.0,
          AH208: 0.0,
          AH209: 0.0,
          AH210: 0.0,
          AH211: 0.0,
        },
        {
          unit: 'P功率',
          AH201: '50.1KW',
          AH202: '30.1KV',
          AH203: '40.1KV',
          AH204: '60.1KW',
          AH205: '20.1KV',
          AH206: '50.1KV',
          AH200: '',
          AH207: '30.1KV',
          AH208: '40.1KV',
          AH209: '60.1KW',
          AH210: '20.1KV',
          AH211: '50.1KV',
        },
        {
          unit: 'T1°C',
          AH201: 22.0,
          AH202: 22.0,
          AH203: 22.0,
          AH204: 22.0,
          AH205: 22.0,
          AH206: 22.0,
          AH207: 22.0,
          AH208: 22.0,
          AH209: 22.0,
          AH210: 22.0,
          AH211: 22.0,
        },
        {
          unit: 'T2°C',
          AH201: 10.6,
          AH202: 10.6,
          AH203: 10.6,
          AH204: 10.6,
          AH205: 10.6,
          AH206: 10.6,
          AH207: 10.6,
          AH208: 10.6,
          AH209: 10.6,
          AH210: 10.6,
          AH211: 10.6,
        },
        {
          unit: '负载率',
          AH201: '0.0%',
          AH202: '0.0%',
          AH203: '0.0%',
          AH204: '0.0%',
          AH205: '0.0%',
          AH206: '0.0%',
          AH200: '',
          图8: '0.0%',
          AH208: '0.0%',
          AH209: '0.0%',
          AH210: '0.0%',
          AH211: '0.0%',
        },
      ],
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
    // 使用定时器每2秒更新数据
    setInterval(() => {
      this.updateUData()
      this.updateIData()
      this.updateTempData()
    }, 2000)

    // 初始化数据
    this.OneData()
    this.TwoData()
    this.ThreeData()
    this.FourData()
    this.FiveData()
    this.SixData()
    this.SevenData()
    this.EightData()
    this.NineData()
    this.TenData()
    this.ElevenData()

    // 定时更新数据
    setInterval(() => {
      this.OneData()
      this.TwoData()
      this.ThreeData()
      this.FourData()
      this.FiveData()
      this.SixData()
      this.SevenData()
      this.EightData()
      this.NineData()
      this.TenData()
      this.ElevenData()
    }, 3000)
  },
  methods: {
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed
    },
    toggleshiyanwei01(append = false) {
      this.shiyanwei01 = 1
      this.gongzuowei01 = 0
      this.duanluhe01 = 0
      this.duanlufen = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH201正在试验位置,请勿做其他操作...', {
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
          axios.post('http://192.168.6.101/shiyanwei01')
            .then(response => {
            })
        }, 1000)
        this.text = '执行试验位置'
      }
    },
    toggleshiyanwei02(append = false) {
      this.shiyanwei02 = 1
      this.gongzuowei02 = 0
      this.duanluhe02 = 0
      this.duanlufen02 = 0
      this.jiedihe02 = 0
      this.jiedifen02 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH202正在试验位置,请勿做其他操作...', {
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
          axios.post('http://192.168.6.102/shiyanwei02')
            .then(response => {
            })
        }, 1000)
        this.text = '执行试验位置'
      }
    },
    toggleshiyanwei03(append = false) {
      this.shiyanwei03 = 1
      this.gongzuowei03 = 0
      this.duanluhe03 = 0
      this.duanlufen03 = 0
      this.jiedihe03 = 0
      this.jiedifen03 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH203正在试验位置,请勿做其他操作...', {
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
          axios.post('http://192.168.6.103/shiyanwei03')
            .then(response => {
            })
        }, 1000)
        this.text = '执行试验位置'
      }
    },

    toggleshiyanwei06(append = false) {
      this.shiyanwei06 = 1
      this.gongzuowei06 = 0
      this.duanluhe06 = 0
      this.duanlufen06 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH206正在试验位置,请勿做其他操作...', {
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
          axios.post('http://192.168.6.106/shiyanwei06')
            .then(response => {
            })
        }, 1000)
        this.text = '执行试验位置'
      }
    },
    toggleshiyanwei09(append = false) {
      this.shiyanwei09 = 1
      this.gongzuowei09 = 0
      this.duanluhe09 = 0
      this.duanlufen09 = 0
      this.jiedihe09 = 0
      this.jiedifen09 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH209正在试验位置,请勿做其他操作...', {
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
          axios.post('http://192.168.6.109/shiyanwei09')
            .then(response => {
            })
        }, 1000)
        this.text = '执行试验位置'
      }
    },
    toggleshiyanwei10(append = false) {
      this.shiyanwei10 = 1
      this.gongzuowei10 = 0
      this.duanluhe10 = 0
      this.duanlufen10 = 0
      this.jiedihe10 = 0
      this.jiedifen10 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH210正在试验位置,请勿做其他操作...', {
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
          axios.post('http://192.168.6.110/shiyanwei10')
            .then(response => {
            })
        }, 1000)
        this.text = '执行试验位置'
      }
    },
    toggleshiyanwei11(append = false) {
      this.shiyanwei11 = 1
      this.gongzuowei11 = 0
      this.duanluhe11 = 0
      this.duanlufen11 = 0
      this.jiedihe11 = 0
      this.jiedifen11 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH211正在试验位置,请勿做其他操作...', {
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
          axios.post('http://192.168.6.111/shiyanwei11')
            .then(response => {
            })
        }, 1000)
        this.text = '执行试验位置'
      }
    },

    togglegongzuowei01(append = false) {
      this.shiyanwei01 = 0
      this.gongzuowei01 = 1
      this.duanluhe01 = 0
      this.duanlufen = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH201正在工作位置,请勿做其他操作...', {
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
          axios.post('http://192.168.6.101/gongzuowei01')
            .then(response => {
            })
        }, 1000)
        this.text = '执行工作位置'
      }
    },

    togglegongzuowei02(append = false) {
      this.shiyanwei02 = 0
      this.gongzuowei02 = 1
      this.duanluhe02 = 0
      this.duanlufen02 = 0
      this.jiedihe02 = 0
      this.jiedifen02 = 0

      // this.gongzuowei02 = this.gongzuowei02 === 0 ? 1 : 0
      if (!this.isDisabled) {
        this.$bvToast.toast('AH202正在工作位置,请勿做其他操作...', {
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
          axios.post('http://192.168.6.102/gongzuowei02')
            .then(response => {
            })
        }, 1000)
        this.text = '执行工作位置'
      }
    },
    togglegongzuowei03(append = false) {
      this.shiyanwei03 = 0
      this.gongzuowei03 = 1
      this.duanluhe03 = 0
      this.duanlufen03 = 0
      this.jiedihe03 = 0
      this.jiedifen03 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH203正在工作位置,请勿做其他操作...', {
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
          axios.post('http://192.168.6.103/gongzuowei03')
            .then(response => {
            })
        }, 1000)
        this.text = '执行工作位置'
      }
    },

    togglegongzuowei06(append = false) {
      this.shiyanwei06 = 0
      this.gongzuowei06 = 1
      this.duanluhe06 = 0
      this.duanlufen06 = 0
      this.jiedihe06 = 0
      this.jiedifen06 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH206正在工作位置,请勿做其他操作...', {
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
          axios.post('http://192.168.6.106/gongzuowei06')
            .then(response => {
            })
        }, 1000)
        this.text = '执行工作位置'
      }
    },
    togglegongzuowei09(append = false) {
      this.shiyanwei09 = 0
      this.gongzuowei09 = 1
      this.duanluhe09 = 0
      this.duanlufen09 = 0
      this.jiedihe09 = 0
      this.jiedifen09 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH209正在工作位置,请勿做其他操作...', {
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
          axios.post('http://192.168.6.109/gongzuowei09')
            .then(response => {
            })
        }, 1000)
        this.text = '执行工作位置'
      }
    },
    togglegongzuowei10(append = false) {
      this.shiyanwei10 = 0
      this.gongzuowei10 = 1
      this.duanluhe10 = 0
      this.duanlufen10 = 0
      this.jiedihe10 = 0
      this.jiedifen10 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH210正在工作位置,请勿做其他操作...', {
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
          axios.post('http://192.168.6.110/gongzuowei10')
            .then(response => {
            })
        }, 1000)
        this.text = '执行工作位置'
      }
    },
    togglegongzuowei11(append = false) {
      this.shiyanwei11 = 0
      this.gongzuowei11 = 1
      this.duanluhe11 = 0
      this.duanlufen11 = 0
      this.jiedihe11 = 0
      this.jiedifen11 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH211正在工作位置,请勿做其他操作...', {
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
          axios.post('http://192.168.6.111/gongzuowei11')
            .then(response => {
            })
        }, 1000)
        this.text = '执行工作位置'
      }
    },

    toggleduanluhe01(append = false) {
      this.shiyanwei01 = 0
      this.gongzuowei01 = 0
      this.duanluhe01 = 1
      this.duanlufen = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH201正在断路器合闸,请勿做其他操作...', {
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
          axios.post('http://192.168.6.101/duanluhe01')
            .then(response => {
            })
        }, 1000)
        this.text = '执行断路器合闸'
      }
    },
    toggleduanluhe02(append = false) {
      this.shiyanwei02 = 0
      this.gongzuowei02 = 0
      this.duanluhe02 = 1
      this.duanlufen02 = 0
      this.jiedihe02 = 0
      this.jiedifen02 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH202正在断路器合闸,请勿做其他操作...', {
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
          axios.post('http://192.168.6.102/duanluhe02')
            .then(response => {
            })
        }, 1000)
        this.text = '执行断路器合闸'
      }
    },
    toggleduanluhe03(append = false) {
      this.shiyanwei03 = 0
      this.gongzuowei03 = 0
      this.duanluhe03 = 1
      this.duanlufen03 = 0
      this.jiedihe03 = 0
      this.jiedifen03 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH203正在断路器合闸,请勿做其他操作...', {
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
          axios.post('http://192.168.6.103/duanluhe03')
            .then(response => {
            })
        }, 1000)
        this.text = '执行断路器合闸'
      }
    },
    toggleduanluhe04(append = false) {
      this.shiyanwei04 = 0
      this.gongzuowei04 = 0
      this.duanluhe04 = 1
      this.duanlufen04 = 0
      this.jiedihe04 = 0
      this.jiedifen04 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH204正在断路器合闸,请勿做其他操作...', {
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
          axios.post('http://192.168.6.104/duanluhe04')
            .then(response => {
            })
        }, 1000)
        this.text = '执行断路器合闸'
      }
    },
    toggleduanluhe05(append = false) {
      this.shiyanwei05 = 0
      this.gongzuowei05 = 0
      this.duanluhe05 = 1
      this.duanlufen05 = 0
      this.jiedihe05 = 0
      this.jiedifen05 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH205正在断路器合闸,请勿做其他操作...', {
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
          axios.post('http://192.168.6.105/duanluhe05')
            .then(response => {
            })
        }, 1000)
        this.text = '执行断路器合闸'
      }
    },
    toggleduanluhe06(append = false) {
      this.shiyanwei06 = 0
      this.gongzuowei06 = 0
      this.duanluhe06 = 1
      this.duanlufen06 = 0
      this.jiedihe06 = 0
      this.jiedifen06 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH206正在断路器合闸,请勿做其他操作...', {
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
          axios.post('http://192.168.6.106/duanluhe06')
            .then(response => {
            })
        }, 1000)
        this.text = '执行断路器合闸'
      }
    },
    toggleduanluhe07(append = false) {
      this.shiyanwei07 = 0
      this.gongzuowei07 = 0
      this.duanluhe07 = 1
      this.duanlufen07 = 0
      this.jiedihe07 = 0
      this.jiedifen07 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH207正在断路器合闸,请勿做其他操作...', {
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
          axios.post('http://192.168.6.107/duanluhe07')
            .then(response => {
            })
        }, 1000)
        this.text = '执行断路器合闸'
      }
    },
    toggleduanluhe08(append = false) {
      this.shiyanwei08 = 0
      this.gongzuowei08 = 0
      this.duanluhe08 = 1
      this.duanlufen08 = 0
      this.jiedihe08 = 0
      this.jiedifen08 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH208正在断路器合闸,请勿做其他操作...', {
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
          axios.post('http://192.168.6.108/duanluhe08')
            .then(response => {
            })
        }, 1000)
        this.text = '执行断路器合闸'
      }
    },
    toggleduanluhe09(append = false) {
      this.shiyanwei09 = 0
      this.gongzuowei09 = 0
      this.duanluhe09 = 1
      this.duanlufen09 = 0
      this.jiedihe09 = 0
      this.jiedifen09 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH209正在断路器合闸,请勿做其他操作...', {
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
          axios.post('http://192.168.6.109/duanluhe09')
            .then(response => {
            })
        }, 1000)
        this.text = '执行断路器合闸'
      }
    },
    toggleduanluhe10(append = false) {
      this.shiyanwei10 = 0
      this.gongzuowei10 = 0
      this.duanluhe10 = 1
      this.duanlufen10 = 0
      this.jiedihe10 = 0
      this.jiedifen10 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH210正在断路器合闸,请勿做其他操作...', {
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
          axios.post('http://192.168.6.110/duanluhe10')
            .then(response => {
            })
        }, 1000)
        this.text = '执行断路器合闸'
      }
    },
    toggleduanluhe11(append = false) {
      // this.duanluhe11 = this.duanluhe11 === 0 ? 1 : 0
      this.shiyanwei11 = 0
      this.gongzuowei11 = 0
      this.duanluhe11 = 1
      this.duanlufen11 = 0
      this.jiedihe11 = 0
      this.jiedifen11 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH211正在断路器合闸,请勿做其他操作...', {
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
          axios.post('http://192.168.6.111/duanluhe11')
            .then(response => {
            })
        }, 1000)
        this.text = '执行断路器合闸'
      }
    },

    toggleduanlufen01(append = false) {
      this.shiyanwei01 = 0
      this.gongzuowei01 = 0
      this.duanluhe01 = 0
      this.duanlufen = 1
      if (!this.isDisabled) {
        this.$bvToast.toast('AH201正在断路器分闸,请勿做其他操作...', {
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
          axios.post('http://192.168.6.101/duanlufen01')
            .then(response => {
            })
        }, 1000)
        this.text = '执行断路器分闸'
      }
    },
    toggleduanlufen02(append = false) {
      this.shiyanwei02 = 0
      this.gongzuowei02 = 0
      this.duanluhe02 = 0
      this.duanlufen02 = 1
      this.jiedihe02 = 0
      this.jiedifen02 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH202正在断路器分闸,请勿做其他操作...', {
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
          axios.post('http://192.168.6.102/duanlufen02')
            .then(response => {
            })
        }, 1000)
        this.text = '执行断路器分闸'
      }
    },
    toggleduanlufen03(append = false) {
      this.shiyanwei03 = 0
      this.gongzuowei03 = 0
      this.duanluhe03 = 0
      this.duanlufen03 = 1
      this.jiedihe03 = 0
      this.jiedifen03 = 0

      this.$bvToast.toast('AH203正在断路器分闸,请勿做其他操作...', {
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
        axios.post('http://192.168.6.103/duanlufen03')
          .then(response => {
          })
      }, 1000)
      this.text = '执行断路器分闸'
    },
    toggleduanlufen04(append = false) {
      this.shiyanwei04 = 0
      this.gongzuowei04 = 0
      this.duanluhe04 = 0
      this.duanlufen04 = 1
      this.jiedihe04 = 0
      this.jiedifen04 = 0

      this.$bvToast.toast('AH204正在断路器分闸,请勿做其他操作...', {
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
        axios.post('http://192.168.6.104/duanlufen04')
          .then(response => {
          })
      }, 1000)
      this.text = '执行断路器分闸'
    },

    toggleduanlufen05(append = false) {
      this.shiyanwei05 = 0
      this.gongzuowei05 = 0
      this.duanluhe05 = 0
      this.duanlufen05 = 1
      this.jiedihe05 = 0
      this.jiedifen05 = 0

      this.$bvToast.toast('AH205正在断路器分闸,请勿做其他操作...', {
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
        axios.post('http://192.168.6.105/duanlufen05')
          .then(response => {
          })
      }, 1000)
      this.text = '执行断路器分闸'
    },

    toggleduanlufen06(append = false) {
      this.shiyanwei06 = 0
      this.gongzuowei06 = 0
      this.duanluhe06 = 0
      this.duanlufen06 = 1
      this.jiedihe06 = 0
      this.jiedifen06 = 0

      this.$bvToast.toast('AH205正在断路器分闸,请勿做其他操作...', {
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
        axios.post('http://192.168.6.106/duanlufen06')
          .then(response => {
          })
      }, 1000)
      this.text = '执行断路器分闸'
    },

    toggleduanlufen07(append = false) {
      this.shiyanwei07 = 0
      this.gongzuowei07 = 0
      this.duanluhe07 = 0
      this.duanlufen07 = 1
      this.jiedihe07 = 0
      this.jiedifen07 = 0

      this.$bvToast.toast('AH207正在断路器分闸,请勿做其他操作...', {
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
        axios.post('http://192.168.6.107/duanlufen07')
          .then(response => {
          })
      }, 1000)
      this.text = '执行断路器分闸'
    },

    toggleduanlufen08(append = false) {
      this.shiyanwei08 = 0
      this.gongzuowei08 = 0
      this.duanluhe08 = 0
      this.duanlufen08 = 1
      this.jiedihe08 = 0
      this.jiedifen08 = 0

      this.$bvToast.toast('AH208正在断路器分闸,请勿做其他操作...', {
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
        axios.post('http://192.168.6.108/duanlufen08')
          .then(response => {
          })
      }, 1000)
      this.text = '执行断路器分闸'
    },

    toggleduanlufen09(append = false) {
      this.shiyanwei09 = 0
      this.gongzuowei09 = 0
      this.duanluhe09 = 0
      this.duanlufen09 = 1
      this.jiedihe09 = 0
      this.jiedifen09 = 0

      this.$bvToast.toast('AH209正在断路器分闸,请勿做其他操作...', {
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
        axios.post('http://192.168.6.109/duanlufen09')
          .then(response => {
          })
      }, 1000)
      this.text = '执行断路器分闸'
    },

    toggleduanlufen10(append = false) {
      this.shiyanwei10 = 0
      this.gongzuowei10 = 0
      this.duanluhe10 = 1
      this.duanlufen10 = 0
      this.jiedihe10 = 0
      this.jiedifen10 = 0

      this.$bvToast.toast('AH205正在断路器分闸,请勿做其他操作...', {
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
        axios.post('http://192.168.6.110/duanlufen10')
          .then(response => {
          })
      }, 1000)
      this.text = '执行断路器分闸'
    },

    toggleduanlufen11(append = false) {
      this.shiyanwei11 = 0
      this.gongzuowei11 = 0
      this.duanluhe11 = 0
      this.duanlufen11 = 1
      this.jiedihe11 = 0
      this.jiedifen11 = 0

      this.$bvToast.toast('AH211正在断路器分闸,请勿做其他操作...', {
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
        axios.post('http://192.168.6.111/duanlufen11')
          .then(response => {
          })
      }, 1000)
      this.text = '执行断路器分闸'
    },

    togglejiedihe02(append = false) {
      this.shiyanwei02 = 0
      this.gongzuowei02 = 0
      this.duanluhe02 = 0
      this.duanlufen02 = 0
      this.jiedihe02 = 1
      this.jiedifen02 = 0

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
          axios.post('http://192.168.6.102/jiedihe02').then(response => {
          })
        }, 1000)
        this.text = '执行闭合接地刀操作'
      }
    },
    togglejiedihe03(append = false) {
      this.shiyanwei03 = 0
      this.gongzuowei03 = 0
      this.duanluhe03 = 0
      this.duanlufen03 = 0
      this.jiedihe03 = 1
      this.jiedifen03 = 0

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
          axios.post('http://192.168.6.103/jiedihe03').then(response => {
          })
        }, 1000)
        this.text = '执行闭合接地刀操作'
      }
    },
    togglejiedihe04(append = false) {
      this.shiyanwei04 = 0
      this.gongzuowei04 = 0
      this.duanluhe04 = 0
      this.duanlufen04 = 0
      this.jiedihe04 = 1
      this.jiedifen04 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH204正在闭合接地刀中,请勿做其他操作...', {
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
          axios.post('http://192.168.6.104/jiedihe04').then(response => {
          })
        }, 1000)
        this.text = '执行闭合接地刀操作'
      }
    },
    togglejiedihe05(append = false) {
      this.shiyanwei05 = 0
      this.gongzuowei05 = 0
      this.duanluhe05 = 0
      this.duanlufen05 = 0
      this.jiedihe05 = 1
      this.jiedifen05 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH205正在闭合接地刀中,请勿做其他操作...', {
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
          axios.post('http://192.168.6.105/jiedihe05').then(response => {
          })
        }, 1000)
        this.text = '执行闭合接地刀操作'
      }
    },

    togglejiedihe07(append = false) {
      this.shiyanwei07 = 0
      this.gongzuowei07 = 0
      this.duanluhe07 = 0
      this.duanlufen07 = 0
      this.jiedihe07 = 1
      this.jiedifen07 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH207正在闭合接地刀中,请勿做其他操作...', {
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
          axios.post('http://192.168.6.107/jiedihe07').then(response => {
          })
        }, 1000)
        this.text = '执行闭合接地刀操作'
      }
    },
    togglejiedihe08(append = false) {
      this.shiyanwei08 = 0
      this.gongzuowei08 = 0
      this.duanluhe08 = 0
      this.duanlufen08 = 0
      this.jiedihe08 = 1
      this.jiedifen08 = 0

      if (!this.isDisabled) {
        this.$bvToast.toast('AH208正在闭合接地刀中,请勿做其他操作...', {
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
          axios.post('http://192.168.6.108/jiedihe08').then(response => {
          })
        }, 1000)
        this.text = '执行闭合接地刀操作'
      }
    },
    togglejiedihe09(append = false) {
      this.shiyanwei09 = 0
      this.gongzuowei09 = 0
      this.duanluhe09 = 0
      this.duanlufen09 = 0
      this.jiedihe09 = 1
      this.jiedifen09 = 0

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
          axios.post('http://192.168.6.109/jiedihe09').then(response => {
          })
        }, 1000)
        this.text = '执行闭合接地刀操作'
      }
    },
    togglejiedihe10(append = false) {
      this.shiyanwei10 = 0
      this.gongzuowei10 = 0
      this.duanluhe10 = 0
      this.duanlufen10 = 0
      this.jiedihe10 = 1
      this.jiedifen10 = 0

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
          axios.post('http://192.168.6.110/jiedihe10').then(response => {
          })
        }, 1000)
        this.text = '执行闭合接地刀操作'
      }
    },
    togglejiedihe11(append = false) {
      this.shiyanwei11 = 0
      this.gongzuowei11 = 0
      this.duanluhe11 = 0
      this.duanlufen11 = 0
      this.jiedihe11 = 1
      this.jiedifen11 = 0

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
          axios.post('http://192.168.6.111/jiedihe11').then(response => {
          })
        }, 1000)
        this.text = '执行闭合接地刀操作'
      }
    },

    togglejiedifen02(append = false) {
      this.shiyanwei02 = 0
      this.gongzuowei02 = 0
      this.duanluhe02 = 0
      this.duanlufen02 = 0
      this.jiedihe02 = 0
      this.jiedifen02 = 1

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
          axios.post('http://192.168.6.102/jiedifen02').then(response => {
          })
        }, 1000)
        this.text = '执行断开接地刀操作'
      }
    },
    togglejiedifen03(append = false) {
      this.shiyanwei03 = 0
      this.gongzuowei03 = 0
      this.duanluhe03 = 0
      this.duanlufen03 = 0
      this.jiedihe03 = 0
      this.jiedifen03 = 1

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
          axios.post('http://192.168.6.103/jiedifen03').then(response => {
          })
        }, 1000)
        this.text = '执行断开接地刀操作'
      }
    },
    togglejiedifen04(append = false) {
      this.shiyanwei04 = 0
      this.gongzuowei04 = 0
      this.duanluhe04 = 0
      this.duanlufen04 = 0
      this.jiedihe04 = 0
      this.jiedifen04 = 1

      if (!this.isDisabled) {
        this.$bvToast.toast('AH204正在断开接地刀中,请勿做其他操作...', {
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
          axios.post('http://192.168.6.104/jiedifen04').then(response => {
          })
        }, 1000)
        this.text = '执行断开接地刀操作'
      }
    },
    togglejiedifen05(append = false) {
      this.shiyanwei05 = 0
      this.gongzuowei05 = 0
      this.duanluhe05 = 0
      this.duanlufen05 = 0
      this.jiedihe05 = 0
      this.jiedifen05 = 1

      if (!this.isDisabled) {
        this.$bvToast.toast('AH205正在断开接地刀中,请勿做其他操作...', {
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
          axios.post('http://192.168.6.105/jiedifen05').then(response => {
          })
        }, 1000)
        this.text = '执行断开接地刀操作'
      }
    },
    togglejiedifen07(append = false) {
      this.shiyanwei07 = 0
      this.gongzuowei07 = 0
      this.duanluhe07 = 0
      this.duanlufen07 = 0
      this.jiedihe07 = 0
      this.jiedifen07 = 1

      if (!this.isDisabled) {
        this.$bvToast.toast('AH207正在断开接地刀中,请勿做其他操作...', {
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
          axios.post('http://192.168.6.107/jiedifen07').then(response => {
          })
        }, 1000)
        this.text = '执行断开接地刀操作'
      }
    },
    togglejiedifen08(append = false) {
      this.shiyanwei08 = 0
      this.gongzuowei08 = 0
      this.duanluhe08 = 0
      this.duanlufen08 = 0
      this.jiedihe08 = 0
      this.jiedifen08 = 1

      if (!this.isDisabled) {
        this.$bvToast.toast('AH208正在断开接地刀中,请勿做其他操作...', {
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
          axios.post('http://192.168.6.108/jiedifen08').then(response => {
          })
        }, 1000)
        this.text = '执行断开接地刀操作'
      }
    },
    togglejiedifen09(append = false) {
      this.shiyanwei09 = 0
      this.gongzuowei09 = 0
      this.duanluhe09 = 0
      this.duanlufen09 = 0
      this.jiedihe09 = 0
      this.jiedifen09 = 1

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
          axios.post('http://192.168.6.109/jiedifen09').then(response => {
          })
        }, 1000)
        this.text = '执行断开接地刀操作'
      }
    },
    togglejiedifen10(append = false) {
      this.shiyanwei10 = 0
      this.gongzuowei10 = 0
      this.duanluhe10 = 0
      this.duanlufen10 = 0
      this.jiedihe10 = 0
      this.jiedifen10 = 1

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
          axios.post('http://192.168.6.110/jiedifen10').then(response => {
          })
        }, 1000)
        this.text = '执行断开接地刀操作'
      }
    },
    togglejiedifen11(append = false) {
      this.shiyanwei11 = 0
      this.gongzuowei11 = 0
      this.duanluhe11 = 0
      this.duanlufen11 = 0
      this.jiedihe11 = 0
      this.jiedifen11 = 1

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
          axios.post('http://192.168.6.111/jiedife11').then(response => {
          })
        }, 1000)
        this.text = '执行断开接地刀操作'
      }
    },

    updateUData() { // 随机生成电压数据
      // 获取前三行数据
      for (let i = 0; i < 3; i += 1) {
        const row = this.dataitems[i]
        Object.keys(row).forEach(key => {
          if (key !== 'unit') {
            // 生成10到110之间的随机数
            row[key] = `${(Math.random() * (50 - 10 + 1) + 10).toFixed(1)}KV`
          }
        })
      }
    },

    updateIData() { // 随机生成电流数据
      // 获取电流数据
      for (let i = 3; i < 6; i += 1) {
        const row = this.dataitems[i]
        Object.keys(row).forEach(key => {
          if (key !== 'unit') {
            // 生成10到110之间的随机数
            row[key] = `${Math.floor(Math.random() * (15 - 10 + 1) + 2)}A`
          }
        })
      }
    },

    updateTempData() { // 随机生成温度数据
      // 获取电流数据
      for (let i = 7; i < 9; i += 1) {
        const row = this.dataitems[i]
        Object.keys(row).forEach(key => {
          if (key !== 'unit') {
            // 生成10到110之间的随机数
            row[key] = `${Math.floor(Math.random() * (60 - 10 + 1) + 20).toFixed(1)}°C`
          }
        })
      }
    },
    beforeMount() {
      axios.get('http://localhost:9999/switch_one')
        .then(response => {

        })
        .catch(err => {
          console.log(err)
        })
    },
    beforeDestroy() {
      axios.get('http://localhost:9999/switch_zero')
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    onupdate() {
      console.log('click on')
      axios.get('http://localhost:9999/switch_one')
        .then(response => {
          console.log('click on1')
          // console.log(response.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    offupdate() {
      console.log('click off')
      axios.get('http://localhost:9999/switch_zero')
      // eslint-disable-next-line no-unused-vars
        .then(response => {
          console.log('click off1')
          // console.log(response.data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    OneData() {
      axios.get('http://192.168.2.51:3000')
        .then(response => {
          this.shiyanwei01 = response.data.shiyanwei01
          this.gongzuowei01 = response.data.gongzuowei01
          this.duanlufen01 = response.data.duanlufen01
          this.duanluhe01 = response.data.duanluhe01

          console.log(this.$data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    TwoData() {
      axios.get('http://192.168.2.51:3000')
        .then(response => {
          this.shiyanwei02 = response.data.shiyanwei02
          this.gongzuowei02 = response.data.gongzuowei02
          this.duanlufen02 = response.data.duanlufen02
          this.duanluhe02 = response.data.duanluhe02
          this.jiedifen02 = response.data.jiedifen02
          this.jiedihe02 = response.data.jiedihe02

          console.log(this.$data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    ThreeData() {
      axios.get('http://192.168.2.51:3000')
        .then(response => {
          this.shiyanwei03 = response.data.shiyanwei03
          this.gongzuowei03 = response.data.gongzuowei03
          this.duanlufen03 = response.data.duanlufen03
          this.duanluhe03 = response.data.duanluhe03
          this.jiedifen03 = response.data.jiedifen03
          this.jiedihe03 = response.data.jiedihe03

          console.log(this.$data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    FourData() {
      axios.get('http://192.168.2.51:3000')
        .then(response => {
          this.shiyanwei04 = response.data.shiyanwei04
          this.gongzuowei04 = response.data.gongzuowei04
          this.duanlufen04 = response.data.duanlufen04
          this.duanluhe04 = response.data.duanluhe04
          this.jiedifen04 = response.data.jiedifen04
          this.jiedihe04 = response.data.jiedihe04

          console.log(this.$data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    FiveData() {
      axios.get('http://192.168.2.51:3000')
        .then(response => {
          this.shiyanwei05 = response.data.shiyanwei05
          this.gongzuowei05 = response.data.gongzuowei05
          this.duanlufen05 = response.data.duanlufen05
          this.duanluhe05 = response.data.duanluhe05
          this.jiedifen05 = response.data.jiedifen05
          this.jiedihe05 = response.data.jiedihe05

          console.log(this.$data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    SixData() {
      axios.get('http://192.168.2.51:3000')
        .then(response => {
          this.shiyanwei06 = response.data.shiyanwei06
          this.gongzuowei06 = response.data.gongzuowei06
          this.duanlufen06 = response.data.duanlufen06
          this.duanluhe06 = response.data.duanluhe06

          console.log(this.$data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    SevenData() {
      axios.get('http://192.168.2.51:3000')
        .then(response => {
          this.shiyanwei07 = response.data.shiyanwei07
          this.gongzuowei07 = response.data.gongzuowei07
          this.duanlufen07 = response.data.duanlufen07
          this.duanluhe07 = response.data.duanluhe07
          this.jiedifen07 = response.data.jiedifen07
          this.jiedihe07 = response.data.jiedihe07
          console.log(this.$data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    EightData() {
      axios.get('http://192.168.2.51:3000')
        .then(response => {
          this.shiyanwei08 = response.data.shiyanwei08
          this.gongzuowei08 = response.data.gongzuowei08
          this.duanlufen08 = response.data.duanlufen08
          this.duanluhe08 = response.data.duanluhe08
          this.jiedifen08 = response.data.jiedifen08
          this.jiedihe08 = response.data.jiedihe08

          console.log(this.$data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    NineData() {
      axios.get('http://192.168.2.51:3000')
        .then(response => {
          this.shiyanwei09 = response.data.shiyanwei04
          this.gongzuowei09 = response.data.gongzuowei09
          this.duanlufen09 = response.data.duanlufen09
          this.duanluhe09 = response.data.duanluhe09
          this.jiedifen09 = response.data.jiedifen09
          this.jiedihe09 = response.data.jiedihe09

          console.log(this.$data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    TenData() {
      axios.get('http://192.168.2.51:3000')
        .then(response => {
          this.shiyanwei10 = response.data.shiyanwei10
          this.gongzuowei10 = response.data.gongzuowei10
          this.duanlufen010 = response.data.duanlufen010
          this.duanluhe10 = response.data.duanluhe10
          this.jiedifen10 = response.data.jiedifen10
          this.jiedihe10 = response.data.jiedihe10

          console.log(this.$data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    ElevenData() {
      axios.get('http://192.168.2.51:3000')
        .then(response => {
          this.shiyanwei11 = response.data.shiyanwei11
          this.gongzuowei11 = response.data.gongzuowei11
          this.duanlufen11 = response.data.duanlufen11
          this.duanluhe11 = response.data.duanluhe11
          this.jiedifen11 = response.data.jiedifen11
          this.jiedihe11 = response.data.jiedihe11

          console.log(this.$data)
        })
        .catch(err => {
          console.log(err)
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
  width: 100%;
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
</style>
