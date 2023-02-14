<template>
	<b-tab>
		<template #title>
			<feather-icon icon="CodepenIcon" />
			<span>通道系数</span>
		</template>
		<!-- gsm 复制开始 -->
		<b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary" v-on:click="Send_serial12_1()">
			附录12A相保护电流
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary" v-on:click="Send_serial12_2()">
			附录12C相保护电流
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success" v-on:click="Send_serial12_3()">
			附录12A相测量电流
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger" v-on:click="Send_serial12_4()">
			附录12B相测量电流
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning" v-on:click="Send_serial12_5()">
			附录12C相测量电流
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info" v-on:click="Send_serial12_6()">
			附录12A相测量电压
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark" v-on:click="Send_serial12_7()">
			附录12B相测量电压
		</b-button>
		&nbsp
		<!-- gsm 复制停止 -->

		<!-- gsm 复制开始 -->
		<b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary" v-on:click="Send_serial12_8()">
			附录12C相测量电压
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary" v-on:click="Send_serial12_9()">
			附录12AB线测量电压
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success" v-on:click="Send_serial12_10()">
			附录12BC线测量电压
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger" v-on:click="Send_serial12_11()">
			附录12CA线测量电压
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning" v-on:click="Send_serial12_12()">
			附录12零序保护电压
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info" v-on:click="Send_serial12_13()">
			附录12零序保护电流
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark" v-on:click="Send_serial12_14()">
			附录12B相保护电流
		</b-button>
		&nbsp
		<!-- gsm 复制停止 -->
		<!-- gsm 复制开始 -->
		<b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary" v-on:click="Send_serial12_15()">
			附录12绝缘电阻
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
			v-on:click="Send_serial12_16()">
			附录12备用
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success" v-on:click="Send_serial12_17()">
			附录12A相保护电流
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger" v-on:click="Send_serial12_18()">
			扩展功能使能
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
			Send_serial12_1() {
				let _this = this

				axios.post('http://localhost:10866/fulu12Axiangbaohudianliu').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial12_2() {
				let _this = this

				axios.post('http://localhost:10866/fulu12Cxiangbaohudianliu').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial12_3() {
				let _this = this

				axios.post('http://localhost:10866/fulu12Axiangceliangdianliu').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial12_4() {
				let _this = this

				axios.post('http://localhost:10866/fulu12Bxiangceliangdianliu').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial12_5() {
				let _this = this

				axios.post('http://localhost:10866/fulu12Cxiangceliangdianliu').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial12_6() {
				let _this = this

				axios.post('http://localhost:10866/fulu12Axiangceliangdianya').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial12_7() {
				let _this = this

				axios.post('http://localhost:10866/fulu12Bxiangceliangdianya').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial12_8() {
				let _this = this

				axios.post('http://localhost:10866/fulu12Cxiangceliangdianya').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial12_9() {
				let _this = this

				axios.post('http://localhost:10866/fulu12ABxianceliangdianya').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial12_10() {
				let _this = this

				axios.post('http://localhost:10866/fulu12BCxianceliangdianya').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial12_11() {
				let _this = this

				axios.post('http://localhost:10866/fulu12CAxianceliangdianya').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial12_12() {
				let _this = this

				axios.post('http://localhost:10866/fulu12lingxubaohudianya').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial12_13() {
				let _this = this

				axios.post('http://localhost:10866/fulu12lingxubaohudianliu').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial12_14() {
				let _this = this

				axios.post('http://localhost:10866/fulu12Bxiangbaohudianliu').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial12_15() {
				let _this = this

				axios.post('http://localhost:10866/fulu12jueyuandianzu').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial12_16() {
				let _this = this

				axios.post('http://localhost:10866/fulu12beiyong').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial12_17() {
				let _this = this

				axios.post('http://localhost:10866/fulu12Axiangbaohudianliu').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial12_18() {
				let _this = this

				axios.post('http://localhost:10866/kuozhangongnengshineng').then(function(response) {
					_this.resp = response.data
				})

			}
		},
	}
</script>

<style>
</style>
