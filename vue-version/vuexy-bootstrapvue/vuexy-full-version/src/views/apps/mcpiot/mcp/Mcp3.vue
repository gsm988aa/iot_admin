<template>
	<b-tab>
		<template #title>
			<feather-icon icon="TrendingUpIcon" />
			<span>电度量</span>
		</template>
		<!-- gsm 复制开始 -->
		<b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary" v-on:click="Send_serial3_1()">
			测量有功电度
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary" v-on:click="Send_serial3_2()">
			测量无功电度
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success" v-on:click="Send_serial3_3()">
			脉冲有功电度
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger" v-on:click="Send_serial3_4()">
			脉冲无功电度
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning" v-on:click="Send_serial3_5()">
			测量尖有功电度
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info" v-on:click="Send_serial3_6()">
			测量尖无功电度
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark" v-on:click="Send_serial3_7()">
			测量峰有功电度
		</b-button>
		&nbsp
		<!-- gsm 复制停止 -->

		<!-- gsm 复制开始 -->
		<b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary" v-on:click="Send_serial3_8()">
			测量峰无功电度
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary" v-on:click="Send_serial3_9()">
			测量谷有功电度
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success" v-on:click="Send_serial3_10()">
			测量谷无功电度
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger" v-on:click="Send_serial3_11()">
			测量平有功电度
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning" v-on:click="Send_serial3_12()">
			测量平无功电度
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

		methods: { // 附录3
			Send_serial3_1() {
				let _this = this

				axios.post('http://localhost:10866/celiangyougongdiandu').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial3_2() {
				let _this = this

				axios.post('http://localhost:10866/celiangwugongdiandu').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial3_3() {
				let _this = this

				axios.post('http://localhost:10866/mochongyougongdiandu').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial3_4() {
				let _this = this

				axios.post('http://localhost:10866/mochongwugongdiandu').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial3_5() {
				let _this = this

				axios.post('http://localhost:10866/celiangjianyougongdiandu').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial3_6() {
				let _this = this

				axios.post('http://localhost:10866/celiangjianwugongdiandu').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial3_7() {
				let _this = this

				axios.post('http://localhost:10866/celiangfengyougongdiandu').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial3_8() {
				let _this = this

				axios.post('http://localhost:10866/celiangfengwugongdiandu').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial3_9() {
				let _this = this

				axios.post('http://localhost:10866/celiangguyougongdiandu').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial3_10() {
				let _this = this

				axios.post('http://localhost:10866/celiangguwugongdiandu').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial3_11() {
				let _this = this

				axios.post('http://localhost:10866/celiangpingyougongdiandu').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial3_12() {
				let _this = this

				axios.post('http://localhost:10866/celiangpingwugongdiandu').then(function(response) {
					_this.resp = response.data
				})

			},
		}
	}
</script>

<style>
</style>
