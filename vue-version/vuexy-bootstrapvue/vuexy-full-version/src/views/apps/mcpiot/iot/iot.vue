<template>
  <b-card title="ChatGPT解决专业问题">

    <b-card-text>

      <h6>GPT 人工智能回复：</h6>
      <b-card
          text-variant="dark"
          border-variant="info"
          class="mb-2"
      >
        <b-card-text>

          <br>
          <b-spinner variant="primary" label="Spinning"  v-if="status !== 1"></b-spinner>

          {{ posts }}

        </b-card-text>
      </b-card>

    </b-card-text>
    <br>

    <!--    -->
    <h6>请输入问题</h6>
    <b-form-input
        v-model="message"
        placeholder="试试输入：物联网是什么"
    />
    <br>

    <b-button
        variant="primary" pill
        @click="send"
    >

      发送
    </b-button>
    <!-- 加入空格 -->

    <div>
      <ChatLeftSideBar />
      <ChatLog />
      <ChatActiveChatContentDetailsSidebar />
      <!-- 其他模板内容 -->
    </div>


    &nbsp
    &nbsp
    &nbsp
    <br>
    举例：
    <br>

    <b-button
        variant="secondary" pill
        @click="send2"
    >

      10kV高压开关柜常用的速断整定值是多少
    </b-button>
    &nbsp
    &nbsp
    &nbsp

    <b-button
        variant="info" pill
        @click="send3"
    >

      10kV高压开关柜常用的定时限整定值是多少
    </b-button>

    &nbsp
    &nbsp
    &nbsp

    <b-button
        variant="dark" pill
        @click="send4"
    >
      无锡的美景有哪些
    </b-button>


  </b-card>

  <!--&lt;!&ndash;      写一个可以输入的文本框&ndash;&gt;-->
  <!--      <input type="text" v-model="message" />-->
  <!--&lt;!&ndash;      点击按钮发送&ndash;&gt;-->
  <!--      <button @click="send">发送</button>-->

</template>

<script>

import {
  BRow, BCol, BCard, BContainer, BButton, BButtonGroup, BFormInput, BModal,BSpinner,BCardText
  , BCollapse } from 'bootstrap-vue'
// import axios
import axios from 'axios'
import Spinner from "@/views/components/spinner/Spinner.vue";

import ChatLeftSidebar from './ChatLeftSidebar.vue'
import ChatActiveChatContentDetailsSidedbar from './ChatActiveChatContentDetailsSidedbar.vue'
import ChatLog from './ChatLog.vue'
// import useChat from './useChat'
// import chatStoreModule from './chatStoreModule'
export default {
  components: {
    BSpinner,
    BRow,
    BCol,
    BCard,
    BCardText,
    BButton,
    // eslint-disable-next-line vue/no-unused-components
    BButtonGroup,
    // b-container
    BContainer,
    BFormInput,
    BModal,
    BCollapse,

    ChatLeftSidebar,
    ChatActiveChatContentDetailsSidedbar,
    ChatLog,
  },
  data() {
    return {
      message: '',
      status: 1,
      posts: ''
    };
  },

  methods: {
    send() {
      axios.post('https://openai.api2d.net/v1/chat/completions', {
        model: 'gpt-3.5-turbo',
        messages: [{role: 'user', content: this.message}]
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer fk192265-RBY97zyLQHJYyhGpPNtoTw2ILhMNtkvW'
        }
      }).then(response => {
        // 等待5s
        setTimeout(() => {
          this.status = 1
          this.posts = response.data.choices[0].message.content
          console.log(response.data.choices[0].message.content)
          // console.log(response.data)
        }, 3000);
        this.status = 0

      })
          .catch(error => {
            console.log(error);
          });
    },
    send2() {
      axios.post('https://openai.api2d.net/v1/chat/completions', {
        model: 'gpt-3.5-turbo',
        messages: [{role: 'user', content: '10kV高压柜常用微机综保的速断整定值是多少，一般是多少，请举例'}]
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer fk192265-RBY97zyLQHJYyhGpPNtoTw2ILhMNtkvW'
        }
      }).then(response => {
        // 等待5s
        setTimeout(() => {
          this.status = 1
          this.posts = response.data.choices[0].message.content
          console.log(response.data.choices[0].message.content)
          // console.log(response.data)
        }, 3000);
        this.status = 0

      })
          .catch(error => {
            console.log(error);
          });
    },
    send3() {
      axios.post('https://openai.api2d.net/v1/chat/completions', {
        model: 'gpt-3.5-turbo',
        messages: [{role: 'user', content:  "10kV高压开关柜常用的定时限整定值是多少，一般是多少，请举例"}]
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer fk192265-RBY97zyLQHJYyhGpPNtoTw2ILhMNtkvW'
        }
      }).then(response => {
        // 等待5s
        setTimeout(() => {
          this.status = 1
          this.posts = response.data.choices[0].message.content
          console.log(response.data.choices[0].message.content)
          // console.log(response.data)
        }, 3000);
        this.status = 0

      })
          .catch(error => {
            console.log(error);
          });
    },
    send4() {
      axios.post('https://openai.api2d.net/v1/chat/completions', {
        model: 'gpt-3.5-turbo',
        messages: [{role: 'user', content: '无锡的美景有哪些，请安排一日游行程'}]
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer fk192265-RBY97zyLQHJYyhGpPNtoTw2ILhMNtkvW'
        }
      }).then(response => {
        // 等待5s
        setTimeout(() => {
          this.status = 1
          this.posts = response.data.choices[0].message.content
          console.log(response.data.choices[0].message.content)
          // console.log(response.data)
        }, 3000);
        this.status = 0

      })
          .catch(error => {
            console.log(error);
          });
    },
  }

};

</script>
