<template>
	<b-tab>
		<template #title>
			<feather-icon icon="AlignLeftIcon" />
			<span>测量值</span>
		</template>
		<!-- gsm 复制开始 -->
		<b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary" v-on:click="Send_serial7_1()">
			A相测量电流
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary" v-on:click="Send_serial7_2()">
			B相测量电流
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success" v-on:click="Send_serial7_3()">
			C相测量电流
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger" v-on:click="Send_serial7_4()">
			A相测量电压
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning" v-on:click="Send_serial7_5()">
			B相测量电压
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info" v-on:click="Send_serial7_6()">
			C相测量电压
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark" v-on:click="Send_serial7_7()">
			AB线测量电压
		</b-button>
		&nbsp
		<!-- gsm 复制停止 -->

		<!-- gsm 复制开始 -->
		<b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary" v-on:click="Send_serial7_8()">
			BC线测量电压
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary" v-on:click="Send_serial7_9()">
			CA线测量电压
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success" v-on:click="Send_serial7_10()">
			U0测量电压
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger" v-on:click="Send_serial7_11()">
			漏电测量电流
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning" v-on:click="Send_serial7_12()">
			附录7测量有功功率
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info" v-on:click="Send_serial7_13()">
			附录7测量无功功率
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark" v-on:click="Send_serial7_14()">
			附录7测量视在功率
		</b-button>
		&nbsp
		<!-- gsm 复制停止 -->

		<b-card-text>{{resp}}</b-card-text>
	</b-tab>

</template>

<script>
	import axios from 'axios'
	import {
		BButtonGroup,
		BButton,
		BCard,
		BCardText,
	} from 'bootstrap-vue'

	import Ripple from 'vue-ripple-directive'

	import BCardCode from '@core/components/b-card-code'
	import {
		BTabs,
		BTab,

		BRow,
		BCol,
		BCardGroup,

		BCardFooter,
		BCardBody,
		BCardTitle
	} from 'bootstrap-vue'


	export default {
		components: {
			BButtonGroup,
			BButton,
			BCard,
			BCardGroup,
			BRow,
			BCol,
			BCardFooter,
			BCardTitle,
			BCardCode,
			BTabs,
			BCardText,
			BTab,
		},
		directives: {
			Ripple,
		},
		data() {
			return {
				resp: '',

			}
		},

		methods: {
			Send_serial7_1() {
				let _this = this

				axios.post('http://localhost:10866/Axiangceliangdianliu').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial7_2() {
				let _this = this

				axios.post('http://localhost:10866/Bxiangceliangdianliu').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial7_3() {
				let _this = this

				axios.post('http://localhost:10866/Cxiangceliangdianliu').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial7_4() {
				let _this = this

				axios.post('http://localhost:10866/Axiangceliangdianya').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial7_5() {
				let _this = this

				axios.post('http://localhost:10866/Bxiangceliangdianya').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial7_6() {
				let _this = this

				axios.post('http://localhost:10866/Cxiangceliangdianya').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial7_7() {
				let _this = this

				axios.post('http://localhost:10866/ABxianceliangdianya').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial7_8() {
				let _this = this

				axios.post('http://localhost:10866/BCxianceliangdianya').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial7_9() {
				let _this = this

				axios.post('http://localhost:10866/CAxianceliangdianya').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial7_10() {
				let _this = this

				axios.post('http://localhost:10866/U0celiangdianya').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial7_11() {
				let _this = this

				axios.post('http://localhost:10866/loudianceliangdianliu').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial7_12() {
				let _this = this

				axios.post('http://localhost:10866/fulu7celiangyougonggonglue').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial7_13() {
				let _this = this

				axios.post('http://localhost:10866/fulu7celiangwugonggonglue').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial7_14() {
				let _this = this

				axios.post('http://localhost:10866/fulu7celiangshizaigonglue').then(function(response) {
					_this.resp = response.data
				})

			}
		},
	}
</script>

<style>
</style>
