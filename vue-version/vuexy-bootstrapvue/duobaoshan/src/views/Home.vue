<template>

  <b-container class="bv-example-row">
    <b-row>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
    </b-row>
    <b-row>
      <b-col cols="3">
      </b-col>

      <b-col cols="6">

        <div style="transform: scale(2);">
          <b-card >

            <b-button variant="primary" @click="handleClick1" :disabled="isDisabled">合闸</b-button>
            <br>
            <br>
            <b-button variant="secondary" @click="handleClick2" :disabled="isDisabled">分闸</b-button>
            <br>
            <br>
            <b-button variant="success" @click="handleClick3" :disabled="isDisabled">电机储能</b-button>
            <br>
            <br>
            <b-button variant="danger" @click="handleClick4" :disabled="isDisabled">手车驶入</b-button>
            <br>
            <br>
            <b-button variant="warning" @click="handleClick5" :disabled="isDisabled">手车驶出</b-button>
            <br>
            <br>
            <b-button variant="info" @click="handleClick6" :disabled="isDisabled">控制器复位</b-button>
            <br>
            <br>
            <b-form-input v-model="text"></b-form-input>
          </b-card>

        </div>

      </b-col>
      <b-col cols="3">
      </b-col>

    </b-row>
  </b-container>

</template>
 
<script>
import { BRow, BCol,BCard ,BContainer,BButton,BButtonGroup,BFormInput} from 'bootstrap-vue'


export default {
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    BButtonGroup,
    BFormInput

  },
  data(){
    return{
      text:'',
      isDisabled: false
    }
  },
  methods: {
    handleClick1() {
      if(!this.isDisabled){
        this.isDisabled = true;
        setTimeout(() => {
          console.log('Button clicked!')
          console.log('Button 1 clicked!')
          this.text = 'Button 1 clicked!'
          this.isDisabled = false;
        }, 3000);
      }
    },
    handleClick2() {
      if(!this.isDisabled){
        this.isDisabled = true;
        setTimeout(() => {
          console.log('Button 2 clicked!')
          this.text = 'Button 2 clicked!'
          this.isDisabled = false;
        }, 3000);
      }
    },
    handleClick3() {
      if(!this.isDisabled){
        this.isDisabled = true;
        setTimeout(() => {
          console.log('Button 3 clicked!')
          this.text = 'Button 3 clicked!'
          this.isDisabled = false;
        }, 3000);
      }
    },
    handleClick4() {
      if(!this.isDisabled){
        this.isDisabled = true;
        setTimeout(() => {
          console.log('Button 4 clicked!')
          this.text = 'Button 4 clicked!'
          this.isDisabled = false;
        }, 3000);
      }
    },
    handleClick5() {
      if(!this.isDisabled){
        this.isDisabled = true;
        setTimeout(() => {
          console.log('Button 5 clicked!')
          this.text = 'Button 5 clicked!'
          this.isDisabled = false;
        }, 3000);
      }
    },
    handleClick6() {
      if(!this.isDisabled){
        this.isDisabled = true;
        setTimeout(() => {
          console.log('Button 6 clicked!')
          this.text = 'Button 6 clicked!'
          this.isDisabled = false;
        }, 3000);
      }
    }
  }
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-sweetalert.scss';


</style>
