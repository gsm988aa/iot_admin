<template>
	<b-tab>
		<template #title>
			<feather-icon icon="GitCommitIcon" />
			<span>系统事件记录</span>
		</template>
		<!-- gsm 复制开始 -->
		<b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary" v-on:click="Send_serial5_1()">
			第0次事件码
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary" v-on:click="Send_serial5_2()">
			第0次事件返回值
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success" v-on:click="Send_serial5_3()">
			第0次事件时间——毫秒
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger" v-on:click="Send_serial5_4()">
			第0次事件时间——分钟
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning" v-on:click="Send_serial5_5()">
			第0次事件时间——小时
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info" v-on:click="Send_serial5_6()">
			第0次事件时间——故障录波号（低字节）+日期（低字节）
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark" v-on:click="Send_serial5_7()">
			第0次事件时间——故障录波号（高字节）+月（低字节）
		</b-button>
		&nbsp
		<!-- gsm 复制停止 -->

		<!-- gsm 复制开始 -->
		<b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary" v-on:click="Send_serial5_8()">
			第0次事件时间——年
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary" v-on:click="Send_serial5_9()">
			第30次事件码
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success" v-on:click="Send_serial5_10()">
			第30次事件返回值
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger" v-on:click="Send_serial5_11()">
			第30次事件时间——毫秒
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning" v-on:click="Send_serial5_12()">
			第30次事件时间——分钟
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning" v-on:click="Send_serial5_13()">
			第30次事件时间——小时
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info" v-on:click="Send_serial5_14()">
			第30次事件时间——故障录波号（低字节）+日期（低字节）
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark" v-on:click="Send_serial5_15()">
			第30次事件时间——故障录波号（高字节）+月（低字节）
		</b-button>
		&nbsp
		<!-- gsm 复制停止 -->

		<!-- gsm 复制开始 -->
		<b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary" v-on:click="Send_serial5_16()">
			第30次事件时间——年
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary" v-on:click="Send_serial5_17()">
			当前最新事件指针
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
			Send_serial5_1() {
				let _this = this

				axios.post('http://localhost:10866/di0cishijianma').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial5_2() {
				let _this = this

				axios.post('http://localhost:10866/di0cishijianfanhuizhi').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial5_3() {
				let _this = this

				axios.post('http://localhost:10866/di0cishijianshijian——haomiao').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial5_4() {
				let _this = this

				axios.post('http://localhost:10866/di0cishijianshijian——fenzhong').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial5_5() {
				let _this = this

				axios.post('http://localhost:10866/di0cishijianshijian——xiaoshi').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial5_6() {
				let _this = this

				axios.post('http://localhost:10866/di0cishijianshijian——guzhanglubohao（dizijie）').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial5_7() {
				let _this = this

				axios.post('http://localhost:10866/di0cishijianshijian——guzhanglubohao（gaozijie）').then(function(
					response) {
					_this.resp = response.data
				})

			},
			Send_serial5_8() {
				let _this = this

				axios.post('http://localhost:10866/di0cishijianshijian——nian').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial5_9() {
				let _this = this

				axios.post('http://localhost:10866/di30cishijianma').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial5_10() {
				let _this = this

				axios.post('http://localhost:10866/di30cishijianfanhuizhi').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial5_11() {
				let _this = this

				axios.post('http://localhost:10866/di30cishijianshijian——haomiao').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial5_12() {
				let _this = this

				axios.post('http://localhost:10866/di30cishijianshijian——fenzhong').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial5_13() {
				let _this = this

				axios.post('http://localhost:10866/di30cishijianshijian——xiaoshi').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial5_14() {
				let _this = this

				axios.post('http://localhost:10866/di30cishijianshijian——guzhanglubohao（dizijie）').then(function(
					response) {
					_this.resp = response.data
				})

			},
			Send_serial5_15() {
				let _this = this

				axios.post('http://localhost:10866/di30cishijianshijian——guzhanglubohao（gaozijie）').then(function(
					response) {
					_this.resp = response.data
				})

			},
			Send_serial5_16() {
				let _this = this

				axios.post('http://localhost:10866/di30cishijianshijian——nian').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial5_17() {
				let _this = this

				axios.post('http://localhost:10866/dangqianzuixinshijianzhizhen').then(function(response) {
					_this.resp = response.data
				})

			}
		},
	}
</script>

<style>
</style>
