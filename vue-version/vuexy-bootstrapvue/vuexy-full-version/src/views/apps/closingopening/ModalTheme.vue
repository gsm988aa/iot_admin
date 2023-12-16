<template>
  <b-card title="开关柜状态以及控制：">
    <h3>状态栏：</h3>
    <div class="demo-inline-spacing">

      <br>

      <b-button variant="gradient-primary">
        断路器合闸：{{ duanluqihezha }}
      </b-button>
      <b-button variant="gradient-secondary">
        断路器分闸：{{ duanluqifenzha }}
      </b-button>
      <b-button variant="gradient-success">
        手车工作位置：{{ shouchegongzuoweizhi }}
      </b-button>
      <b-button variant="gradient-danger">
        手车试验位置：{{ shoucheshiyanweizhi }}
      </b-button>
      <b-button variant="gradient-warning">
        接地刀合位： {{ jiedidaohewei }}
      </b-button>
      <b-button variant="gradient-info">
        接地刀分位：{{ jiedidaofenwei }}
      </b-button>
      <b-button variant="gradient-dark">
        <!--        {{states.chushizhuangzhi}}-->
        除湿装置自动位置：{{ panduan }}
      </b-button>
    </div>
    <br>
    <br>
    <b-card-text class="mb-0">
      <span><h3>控制命令：</h3> </span>
      <!--      <code>modal-class="modal-{color}"</code>-->
      <!--      <span> with your </span>-->
      <!--      <code>&lt;b-modal&gt;</code>-->
      <!--      <span> to change theme of modal</span>-->
    </b-card-text>

    <!-- button trigger -->
    <div class="demo-inline-spacing">
      <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-modal.modal-primary
          variant="outline-primary"
      >
        断路器合闸
      </b-button>
      <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          v-b-modal.modal-seconday
          variant="outline-secondary"
      >
        断路器分闸
      </b-button>
      <b-button
          v-ripple.400="'rgba(40, 199, 111, 0.15)'"
          v-b-modal.modal-success
          variant="outline-success"
      >
        手车推入
      </b-button>
      <b-button
          v-ripple.400="'rgba(234, 84, 85, 0.15)'"
          v-b-modal.modal-danger
          variant="outline-danger"
      >
        手车推出
      </b-button>
      <b-button
          v-ripple.400="'rgba(255, 159, 67, 0.15)'"
          v-b-modal.modal-warning
          variant="outline-warning"
      >
        接地刀合入
      </b-button>
      <b-button
          v-ripple.400="'rgba(0, 207, 232, 0.15)'"
          v-b-modal.modal-info
          variant="outline-info"
      >
        接地刀分断
      </b-button>
      <b-button
          v-ripple.400="'rgba(30, 30, 30, 0.15)'"
          v-b-modal.modal-dark
          variant="outline-dark"
      >
        除湿装置切换自动手动
      </b-button>

      <b-button
          v-ripple.400="'rgba(30, 30, 30, 0.15)'"
          v-b-modal.modal-dark2
          variant="outline-primary"
      >
        一键送电
      </b-button>


      <b-button
          v-ripple.400="'rgba(30, 30, 30, 0.15)'"
          v-b-modal.modal-dark3
          variant="outline-secondary"
      >
        一键断电
      </b-button>


    </div>

    <!-- modal -->
    <b-modal
        id="modal-primary"
        ok-only
        ok-title="是的"
        @ok="handleduanluqihezhaOk"
        modal-class="modal-primary"
        centered
        title="是否要对断路器进行合闸操作"
    >
      <b-card-text>
        (需要底盘车处于工作位置 接地刀处于分断位置)
      </b-card-text>
    </b-modal>

    <b-modal
        id="modal-seconday"
        ok-only
        ok-variant="secondary"
        ok-title="是的"
        @ok="handleduanluqifenzhaOk"
        modal-class="modal-secondary"
        centered
        title="是否要对断路器进行分闸操作"
    >
      <b-card-text>
        (对断路器进行分闸操作)
      </b-card-text>
    </b-modal>

    <b-modal
        id="modal-success"
        ok-only
        ok-variant="success"
        ok-title="是的"
        @ok="handleshouchetuiruOk"
        modal-class="modal-success"
        centered
        title="是否要摇入电动底盘车？"
    >
      <b-card-text>
        (需要电动底盘车以及驱动 需要底盘车处于试验位置 接地刀处于分断位置 断路器处于分闸位置)
      </b-card-text>
    </b-modal>

    <b-modal
        id="modal-danger"
        ok-only
        ok-variant="danger"
        ok-title="是的"
        @ok="handleshouchetuichuOk"
        modal-class="modal-danger"
        centered
        title="是否要摇出电动底盘车？"
    >
      <b-card-text>
        (需要电动底盘车以及驱动 需要 接地刀处于分断位置 断路器处于分闸位置)
      </b-card-text>
    </b-modal>

    <b-modal
        id="modal-warning"
        ok-only
        ok-variant="warning"
        ok-title="是的"
        @ok="handlejiedidaoheweiOk"
        modal-class="modal-warning"
        centered
        title="是否要合上接地刀？"
    >
      <b-card-text>
        (需要电动接地刀以及驱动 需要底盘车处于试验位置 断路器处于分闸位置)
      </b-card-text>
    </b-modal>

    <b-modal
        id="modal-info"
        ok-only
        ok-variant="info"

        ok-title="是的"
        @ok="handlejiedidaofenweiOk"
        modal-class="modal-info"
        centered
        title="是否要分断接地刀？"
    >
      <b-card-text>
        (需要电动接地刀以及驱动 需要底盘车处于试验位置 断路器处于分闸位置)
      </b-card-text>
    </b-modal>

    <b-modal
        id="modal-dark"
        ok-only
        ok-variant="dark"
        ok-title="切换"
        @ok="handlechushiOk"
        modal-class="modal-dark"
        centered
        title="是否要一键送电？"
    >
      <b-card-text>
        是否要切换除湿装置自动手动？
      </b-card-text>
    </b-modal>

    <b-modal
        id="modal-dark2"
        ok-only
        ok-variant="dark"
        ok-title="一键送电"
        @ok="yijiansongdianOk"
        modal-class="modal-dark"
        centered
        title="是否要一键送电？"
    >
      <b-card-text>
        是否要一键送电？
      </b-card-text>
    </b-modal>
    <b-modal
        id="modal-dark3"
        ok-only
        ok-variant="dark"
        ok-title="一键断电"
        @ok="yijianduandianOk"
        modal-class="modal-dark"
        centered
        title="是否要一键断电？"
    >
      <b-card-text>
        是否要一键断电？
      </b-card-text>
    </b-modal>


    <br>
    <br>
    <br>
    <h3>附加功能：</h3>
    <b-button variant="gradient-info"> pwm调速：
    </b-button>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <b-button variant="gradient-info">设置保存并应用
    </b-button>
    <b-form>
      <b-form-textarea
          id="textarea"
          v-model="value"
          placeholder="90"
          rows="1"
          max-rows="6"
      >
      </b-form-textarea>
      <b-form-spinbutton id="demo-sb" v-model="value" min="0.1" max="100"></b-form-spinbutton>
    </b-form>
    <br> <br>
    <b-progress :value="value" :max="max" show-progress animated></b-progress>
    <br> <br>
    <b-button variant="gradient-success"> PID控制：
    </b-button>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <b-button variant="gradient-success">参数保存并应用
    </b-button>

    <b-form-textarea
        id="textarea"
        v-model="value1"
        placeholder="90"
        rows="1"
        max-rows="3"
    >
    </b-form-textarea>
    <b-form-spinbutton id="demo-sb" v-model="value1" min="0.1" max="100"></b-form-spinbutton>
    <h6>Kp: {{ value1 }}</h6>
    <b-progress :value="value1" :max="max" show-progress animated></b-progress>

    <h6>Ki:</h6>
    <b-form-textarea
        id="textarea"
        v-model="value2"
        placeholder="90"
        rows="1"
        max-rows="6"
    >
    </b-form-textarea>
    <b-form-spinbutton id="demo-sb" v-model="value2" min="0.1" max="100"></b-form-spinbutton>
    <h6>Ki: {{ value2 }}</h6>
    <b-progress :value="value2" :max="max" show-progress animated></b-progress>
    <b-form-textarea
        id="textarea"
        v-model="value3"
        placeholder="90"
        rows="1"
        max-rows="3"
    >
    </b-form-textarea>
    <b-form-spinbutton id="demo-sb" v-model="value3" min="0.1" max="300"></b-form-spinbutton>
    <h6>Kd: {{ value3 }}</h6>
    <b-progress :value="value3" :max="max" show-progress animated></b-progress>
    <br> <br>

  </b-card>
</template>

<script lang="js">
import {
  BButton, BFormSpinbutton, BModal, VBModal, BCardText, BCard, BProgress, BFormTextarea, BFormGroup, BForm
} from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import Ripple from 'vue-ripple-directive'
import axios from 'axios'

// set ripple zIndex to 1 so it doesn't overlap on modal
Ripple.zIndex = 1

export default {
  components: {
    BForm,
    BFormSpinbutton,
    BFormTextarea,
    BFormGroup,
    BProgress,
    BCardCode,
    BButton,
    BCard,
    BCardText,
    BModal,
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
  methods: {

    handleduanluqihezhaOk() {
      this.duanluqihezhacount = 1,
          this.duanluqifenzhacount = 0,
          // console.log("hewei",this.jiedidaoheweicount),
          // console.log("fenwei",this.jiedidaofenweicount),
          this.duanluqihezhacount == 1 ? this.duanluqihezha = '√' : this.duanluqihezha = '×'
      this.duanluqifenzhacount == 1 ? this.duanluqifenzha = '√' : this.duanluqifenzha = '×'

      let _this = this
      axios.post('http://localhost:10866/duanluqihezha').then(function(response) {
        _this.resp = response.data
      })

    },
    handleduanluqifenzhaOk() {
      this.duanluqihezhacount = 0,
          this.duanluqifenzhacount = 1,
          // console.log("hewei",this.jiedidaoheweicount),
          // console.log("fenwei",this.jiedidaofenweicount),
          this.duanluqihezhacount == 1 ? this.duanluqihezha = '√' : this.duanluqihezha = '×'
      this.duanluqifenzhacount == 1 ? this.duanluqifenzha = '√' : this.duanluqifenzha = '×'
      let _this = this
      axios.post('http://localhost:10866/duanluqifenzha').then(function(response) {
        _this.resp = response.data
      })
    },
    handleshouchetuiruOk() {
      console.log(this.duanluqifenzhacount)
      if (this.duanluqifenzhacount == 1) {
        if (this.jiedidaoheweicount == 1) {
          this.shouchetuirucount = 1,
              this.shouchetuichucount = 0,
              // console.log("hewei",this.jiedidaoheweicount),
              // console.log("fenwei",this.jiedidaofenweicount),
              this.shouchetuirucount == 1 ? this.shouchegongzuoweizhi = '√' : this.shouchegongzuoweizhi = '×'
          this.shouchetuichucount == 1 ? this.shoucheshiyanweizhi = '√' : this.shoucheshiyanweizhi = '×'

          let _this = this
          axios.post('http://localhost:10866/shouchetuiru').then(function(response) {
            _this.resp = response.data
          })
        } else {
          alert("请先合上接地刀")
        }
      } else {
        alert("请先切换到分闸状态")
      }

      
    },

    handleshouchetuichuOk() {
      if (this.duanluqihezhacount == 1) {
        alert("请先将断路器分闸");
      } else {
        // console.log(this.jiedidaofenweicount)
        if (this.jiedidaofenweicount == 1) {
          this.shouchetuirucount = 0,
              this.shouchetuichucount = 1,
              // console.log("hewei",this.jiedidaoheweicount),
              // console.log("fenwei",this.jiedidaofenweicount),
              this.shouchetuirucount == 1 ? this.shouchegongzuoweizhi = '√' : this.shouchegongzuoweizhi = '×';
          this.shouchetuichucount == 1 ? this.shoucheshiyanweizhi = '√' : this.shoucheshiyanweizhi = '×';

          let _this = this
          axios.post('http://localhost:10866/shouchetuichu').then(function(response) {
            _this.resp = response.data
          })
        } else {
          alert("请先将接地刀分断");
        }
      }

    },
    handlejiedidaoheweiOk() {

      this.jiedidaoheweicount = 1,
          this.jiedidaofenweicount = 0,
          console.log("hewei", this.jiedidaoheweicount),
          console.log("fenwei", this.jiedidaofenweicount),
          this.jiedidaoheweicount == 0 ? this.jiedidaohewei = '×' : this.jiedidaohewei = '√'
      this.jiedidaofenweicount == 0 ? this.jiedidaofenwei = '×' : this.jiedidaofenwei = '√'

      let _this = this
      axios.post('http://localhost:10866/jiedidaohewei').then(function(response) {
        _this.resp = response.data
      })
    },
    handlejiedidaofenweiOk() {
      this.jiedidaoheweicount = 0,
          this.jiedidaofenweicount = 1,
          console.log("hewei", this.jiedidaoheweicount),
          console.log("fenwei", this.jiedidaofenweicount),
          this.jiedidaoheweicount == 0 ? this.jiedidaohewei = '×' : this.jiedidaohewei = '√'
      this.jiedidaofenweicount == 0 ? this.jiedidaofenwei = '×' : this.jiedidaofenwei = '√'

      let _this = this
      axios.post('http://localhost:10866/jiedidaofenwei').then(function(response) {
        _this.resp = response.data
      })
    },
    handlechushiOk() {
      this.chushicount += 1,
          this.chushicount % 2 == 1 ? this.panduan = '手动' : this.panduan = '自动'
    },

    yijiansongdianOk() {

      let _this = this
      axios.post('http://localhost:10866/yijiansongdian').then(function(response) {
        _this.resp = response.data
      })
    },

    yijianduandianOk() {

      let _this = this
      axios.post('http://localhost:10866/yijianduandian').then(function(response) {
        _this.resp = response.data
      })
    },

  },
  data() {
    return {
      value: 90,
      value1: 3,
      value2: 20,
      value3: 50,
      max: 100,

      duanluqihezhacount: 1,
      duanluqifenzhacount: 0,
      shouchetuirucount: 1,
      shouchetuichucount: 0,
      jiedidaoheweicount: 0,
      jiedidaofenweicount: 1,
      chushicount: 0,


      panduan: '自动',
      duanluqihezha: '√',
      duanluqifenzha: '×',
      shouchegongzuoweizhi: '√',
      shoucheshiyanweizhi: '×',
      jiedidaohewei: '×',
      jiedidaofenwei: '√'

    }
  },
}
</script>
