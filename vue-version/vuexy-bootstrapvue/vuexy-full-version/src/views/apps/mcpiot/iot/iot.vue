<template>
  <b-card title="ChatGPT解决专业问题" style="background-color: #edefff">
    <b-card-text>
      <!-- message-warpper是GPT回复框的div-->
      <div class="message-wrapper" >

        <!-- message-avatar是头像的div-->
        <div class="message-content">
          <b-row>
            <div class="message-avatar" >
              <img src="../pc/hema.png" alt="头像" style="width: 40px; height: 40px;margin-bottom: 20px">
              你好我是小智，有什么问题尽管问我哦~
            </div>
          </b-row>


          <!--对话框 -->
          <b-card
              text-variant="dark"
              border-variant="info"
              class="mb-2"
          >

            <!--用户的对话消息条-->
            <div v-for="post in posts" :key="post.id" class="message-item" style="text-align: right">
              <template v-if="post.role === 'user'">

                <!--用户的头像-->
                <div class="message-picture ">
                  <img src="../pc/me.png" alt="头像" style="width: 45px; height: 40px; margin-right: 10px;">
                </div>
                <div class="message-content ">
                  <!--                <h6 style="font-family:微软雅黑;font-weight: bold">{{ post.role }}：</h6>-->
                  <div class="user-message" >
                    <p>{{ post.content }}</p>
                  </div>

                </div>
              </template>

              <!--GPT小智的对话消息条-->
              <template v-else>
                <div class="message-zhi" style="padding-right: 100px">

                  <!--GPT的头像-->
                  <div class="message-avatar" >
                    <img src="../pc/happy.png" alt="头像" style="width: 40px; height: 40px;">
                  </div>
                  <!--                  <h6 style="font-family:微软雅黑;font-weight: bold">{{ post.role }}：</h6>-->
                  <div class="message-compare ">
                    <div class="gpt-message" >
                      <p>{{ post.content }}</p>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </b-card>


        </div>
      </div>

      <div class="message-input">
        <b-row class="align-items-center  justify-content-end">
          <b-col  class="ml-auto">
            <!--      <h6 >请输入问题</h6>-->
            <b-form-input
                v-model="message"
                @keydown.enter="sendMessage"
                placeholder="试试输入：物联网是什么"

            />

          </b-col>

          <b-col cols="auto" class="text-right">
            <b-button
                variant="primary" pill
                @click="send"
            >
              发送
            </b-button>
          </b-col>

        </b-row>
      </div>


    </b-card-text>
    <br>
    <!--    -->

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
        variant="secondary"
        pill
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

    // KeyBoard,
    ChatLeftSidebar,
    ChatActiveChatContentDetailsSidedbar,
    ChatLog,
  },
  data() {
    return {
      message: '',
      // message1:'',
      // message2:'',
      // message3:'',
      status: 1,
      posts: [],
    };
  },


  mounted() {

    // 每5分钟自动保存数据
    // setInterval(this.saveData, 5 * 60 * 1000);
  },



  methods: {
    sendMessage() {
      this.send();
      this.send2();
      this.send3();
      this.send4();
    },
    send() {
      // 构造消息对象
      const messageObject = {
        role: 'user',
        content: this.message
      };

      // 将用户消息添加到消息列表中
      this.posts.push(messageObject);
      // 发送请求给GPT模型
      axios
          .post('https://openai.api2d.net/v1/chat/completions', {
            model: 'gpt-3.5-turbo',
            messages: [messageObject]
          }, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer fk192265-RBY97zyLQHJYyhGpPNtoTw2ILhMNtkvW'
            }
          })
          .then(response => {
            // 接收到GPT模型的响应
            const gptResponse = response.data.choices[0].message.content;

            // 将GPT模型的响应添加到消息列表中
            this.posts.push({role: 'GPT小智', content: gptResponse});

            // 清空输入框
            this.message = '';
          })

          .catch(error => {
            console.log(error);
          });
      this.message = '';

    }
  },
  send2() {
    this.message = '10kV高压开关柜常用的速断整定值是多少';
    this.posts.push({ role: 'user', content: this.message });

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
        // this.posts = response.data.choices[0].message.content
        this.posts.push({ role: 'GPT小智', content: response.data.choices[0].message.content });

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
      messages: [{role: 'user', content: "10kV高压开关柜常用的定时限整定值是多少，一般是多少，请举例"}]
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
      }, 1000);
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

  // 保存该页面所有数据
  // async saveData() {
  //   try {
  //     // 直接使用 this 获取整个页面的数据对象 用dataToSend集合
  //     const dataToSend = {
  //       message:this.message,
  //       posts:this.posts,
  //     };
  //
  //     // 发送 POST 请求，将数据保存到服务器
  //     await axios.post('http://localhost:8080/saveData', dataToSend);
  //     console.log("Data saved successfully.");
  //   } catch (error) {
  //     console.error("Error occurred while saving data:", error);
  //   }
  // },

};

</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.message-wrapper {
  display: flex;
  align-items: flex-start;
  height: 250px; /* 设置容器的固定高度 */
  overflow-y: scroll; /* 启用垂直滚动条 */
}

.message-avatar {
  margin-right: 10px;
}

.message-input {
  margin-top: 10px;
}

.message-item {
  display: flex;
  flex-direction: row-reverse;
}

.message-content {
  margin-left: 10px;
  flex-grow: 1;
}

.message-zhi {
  display: flex;
  justify-content: flex-start;
}

.message-compare {
  margin-right: 750px;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
}
@media (max-width: 1200px) {
  .message-compare {
    margin-right: 500px;
  }
}

@media (max-width: 992px) {
  .message-compare {
    margin-right: 400px;
  }
}

@media (max-width: 768px) {
  .message-compare {
    margin-right: 250px;
  }
}

@media (max-width: 576px) {
  .message-compare {
    margin-right: 0;
  }
}

.user-message{
  background-color: #FAFAD2;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  align-self: flex-end;
  text-align: center;
  display: inline-block;
  max-width: 80%; /* 根据需要调整最大宽度的比例 */
}

.gpt-message{
  background-color: #cff7ff;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  text-align: center;
  align-self: flex-start;
}

</style>