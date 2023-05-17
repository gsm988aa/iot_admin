<template>

  <!--   <section id="dashboard-deviceinfos" class = "deviceinfos">
        11111
     </section> -->
<!--    <v-chart :options="chartOptions"></v-chart>-->
    <div>

        <b-button @click =  "handleClick1" variant="primary">
            获取九点测温温度值
        </b-button>

        <b-form-textarea
                id="textarea"
                v-model="text"
                placeholder="Enter something..."
                rows="3"
                max-rows="6"
        >
            {{text}}
        </b-form-textarea>

    </div>

</template>

<script>
import {
  BRow, BCol, BCardGroup, BCard, BCardText,BButton , BFormTextarea
} from 'bootstrap-vue'

import  axios from 'axios'

export default {
    components: {
        BFormTextarea,
        BButton,

    },
    data() {
        return {
            text: 'information',

        }
    },
    methods: {

        handleClick1() {

            axios.get('http://localhost:10866/getdbtemperature').then((response) => {
                this.text = response.data
            })
        },

      },
  }

</script>



