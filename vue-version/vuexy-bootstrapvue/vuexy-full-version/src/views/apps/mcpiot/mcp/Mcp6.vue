<template>
	<b-tab>
		<template #title>
			<feather-icon icon="GitMergeIcon" />
			<span>故障事件记录</span>
		</template>
		<!-- gsm 复制开始 -->
		<b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary" v-on:click="Send_serial6_1()">
			第0次系统事件码
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary" v-on:click="Send_serial6_2()">
			第0次故障返回值
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success" v-on:click="Send_serial6_3()">
			第0次故障时间――秒
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger" v-on:click="Send_serial6_4()">
			第0次故障时间――分钟
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning" v-on:click="Send_serial6_5()">
			第0次故障时间――小时
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info" v-on:click="Send_serial6_6()">
			第0次事件时间――故障录波号（低字节）+日期（低字节）
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark" v-on:click="Send_serial6_7()">
			第0次事件时间――故障录波号（高字节）+月（低字节）
		</b-button>
		&nbsp
		<!-- gsm 复制停止 -->

		<!-- gsm 复制开始 -->
		<b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary" v-on:click="Send_serial6_8()">
			第0次故障时间――年
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary" v-on:click="Send_serial6_9()">
			第30次故障码
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success" v-on:click="Send_serial6_10()">
			第30次故障返回值
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger" v-on:click="Send_serial6_11()">
			第30次故障时间――秒
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning" v-on:click="Send_serial6_12()">
			第30次故障时间――分钟
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info" v-on:click="Send_serial6_13()">
			第30次故障时间――小时
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark" v-on:click="Send_serial6_14()">
			第30次事件时间――故障录波号（低字节）+日期（低字节）
		</b-button>
		&nbsp
		<!-- gsm 复制停止 -->

		<!-- gsm 复制开始 -->
		<b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary" v-on:click="Send_serial6_15()">
			第30次事件时间――故障录波号（高字节）+月（低字节）
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary" v-on:click="Send_serial6_16()">
			第30次故障时间――年
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success" v-on:click="Send_serial6_17()">
			附录6当前最新事件指针
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
			Send_serial6_1() {
				let _this = this

				axios.post('http://localhost:10866/di0cixitongshijianma').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial6_2() {
				let _this = this

				axios.post('http://localhost:10866/di0ciguzhangfanhuizhi').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial6_3() {
				let _this = this

				axios.post('http://localhost:10866/di0ciguzhangshijian——miao').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial6_4() {
				let _this = this

				axios.post('http://localhost:10866/di0ciguzhangshijian——fenzhong').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial6_5() {
				let _this = this

				axios.post('http://localhost:10866/di0ciguzhangshijian——xiaoshi').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial6_6() {
				let _this = this

				axios.post('http://localhost:10866/di0cishijianshijian——guzhanglubohao（dizijie）').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial6_7() {
				let _this = this

				axios.post('http://localhost:10866/di0cishijianshijian——guzhanglubohao（gaozijie）').then(function(
					response) {
					_this.resp = response.data
				})

			},
			Send_serial6_8() {
				let _this = this

				axios.post('http://localhost:10866/di0ciguzhangshijian——nian').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial6_9() {
				let _this = this

				axios.post('http://localhost:10866/di30ciguzhangma').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial6_10() {
				let _this = this

				axios.post('http://localhost:10866/di30ciguzhangfanhuizhi').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial6_11() {
				let _this = this

				axios.post('http://localhost:10866/di30ciguzhangshijian——miao').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial6_12() {
				let _this = this

				axios.post('http://localhost:10866/di30ciguzhangshijian——fenzhong').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial6_13() {
				let _this = this

				axios.post('http://localhost:10866/di30ciguzhangshijian——xiaoshi').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial6_14() {
				let _this = this

				axios.post('http://localhost:10866/di30cishijianshijian——guzhanglubohao（dizijie）').then(function(
					response) {
					_this.resp = response.data
				})

			},
			Send_serial6_15() {
				let _this = this

				axios.post('http://localhost:10866/di30cishijianshijian——guzhanglubohao（gaozijie）').then(function(
					response) {
					_this.resp = response.data
				})

			},
			Send_serial6_16() {
				let _this = this

				axios.post('http://localhost:10866/di30ciguzhangshijian——nian').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial6_17() {
				let _this = this

				axios.post('http://localhost:10866/fulu6dangqianzuixinshijianzhizhen').then(function(response) {
					_this.resp = response.data
				})

			}
		},
	}
</script>

<style>
</style>
