<template>
  <b-row>
    <b-col cols="12">
      <b-card>
        <b-tabs
            v-model="activeTab"
            pills
            vertical  >
          <b-tab
              v-for="(tab, index) in tabs"
              :key="index"
              :title="tab.title"
              :disabled="index !== 0 && !isFirstTabValid"
          >

            <template>
              <!-- 第一个选项卡的内容 -->
              <div v-if="index === 0">

                <template>
                  <div>
                    <b-form-input v-model="username" placeholder="用户名"></b-form-input>
                    <b-form-input v-model="password" type="password" placeholder="密码"></b-form-input>
                    <b-button @click="login">登录</b-button>

                    <b-tabs v-model="activeTab">
                      <b-tab title="Tab 1">
                        <div v-if="isAdmin || activeTab === 0">
                          <!-- Tab 1 内容 -->
                        </div>
                      </b-tab>
                      <b-tab title="Tab 2">
                        <div v-if="isAdmin || activeTab === 1">
                          <!-- Tab 2 内容 -->
                        </div>
                      </b-tab>
                      <b-tab title="Tab 3">
                        <div v-if="isAdmin || activeTab === 2">
                          <!-- Tab 3 内容 -->
                        </div>
                      </b-tab>
                      <!-- 其他Tabs -->
                      <b-tab title="Tab 6">
                        <div v-if="isAdmin || activeTab === 5">
                          <!-- Tab 6 内容 -->
                        </div>
                      </b-tab>
                      <b-tab title="Tab 7" v-if="isAdmin">
                        <!-- Tab 7 内容 -->
                      </b-tab>
                      <b-tab title="Tab 8" v-if="isAdmin">
                        <!-- Tab 8 内容 -->
                      </b-tab>
                      <!-- 其他管理员权限Tabs -->
                    </b-tabs>
                  </div>
                </template>














              </div>
              <div v-if="index === 1">
                <YiJianShunKong/>
              </div>
              <div v-if="index === 2">
                <DuoDianCeWen/>
              </div>
              <div v-if="index === 3">
                <JinJiFenZha/>
              </div>
              <div v-if="index === 4">
                <ZhuangTai/>
              </div>

              <div v-if="index === 5">
               <SheZhi/>
              </div>

              <div v-if="index === 6">

                <ChatAI/>
              </div>



            </template>
          </b-tab>
        </b-tabs>
      </b-card>

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
import ChatAI from './ChatAI.vue'
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
    ChatAI,
    SheZhi,
    YiJianShunKong,
  },
  data() {
    return {
      activeTab: 0,
      isFirstTabValid: true,
      tabs: [
        { title: '用户管理' },
        { title: '一键控制' },
        { title: '六点测温' },
        { title: '紧急分闸' },
        { title: '状态' },
        { title: '设置' },
        { title: 'ChatGPT' },
        // 添加更多选项卡
      ],
    }
  },
}
</script>
