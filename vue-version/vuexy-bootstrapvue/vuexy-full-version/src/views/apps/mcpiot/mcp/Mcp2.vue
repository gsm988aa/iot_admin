<template>
	<b-tab>
		<template #title>
			<feather-icon icon="SunsetIcon" />
			<span>保护定值</span>
		</template>
		<!-- gsm 复制开始 -->
		<b-card>
			<b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
				v-on:click="Send_serial2_1()">
				速断保护电流定值
			</b-button>
			&nbsp
			<b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
				v-on:click="Send_serial2_2()">
				限时速断保护电流定值
			</b-button>
			&nbsp
			<b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success" v-on:click="Send_serial2_3()">
				限时速断保护时间定值
			</b-button>
			&nbsp
			<b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger" v-on:click="Send_serial2_4()">
				定时限过流保护电流定值
			</b-button>
			&nbsp
			<b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning" v-on:click="Send_serial2_5()">
				定时限过流保护时间定值
			</b-button>
			&nbsp
			<b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info" v-on:click="Send_serial2_6()">
				反时限过流保护电流定值
			</b-button>
			&nbsp
			<b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark" v-on:click="Send_serial2_7()">
				反时限过流保护时间倍数
			</b-button>
			&nbsp
			<!-- gsm 复制停止 -->
		</b-card>

		<!-- gsm 复制开始 -->
		<b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary" v-on:click="Send_serial2_8()">
			反时限曲线种类
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary" v-on:click="Send_serial2_9()">
			零序过流保护电流定值
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success" v-on:click="Send_serial2_10()">
			零序过流保护时间定值
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger" v-on:click="Send_serial2_11()">
			NULL1
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning" v-on:click="Send_serial2_12()">
			NULL2
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info" v-on:click="Send_serial2_13()">
			功率方向零序过流保护定值
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark" v-on:click="Send_serial2_14()">
			功率方向零序过流保护时间
		</b-button>
		&nbsp
		<!-- gsm 复制停止 -->

		<!-- gsm 复制开始 -->
		<b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary" v-on:click="Send_serial2_15()">
			低电压保护电压定值
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary" v-on:click="Send_serial2_16()">
			低电压保护时间定值
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success" v-on:click="Send_serial2_17()">
			过电压保护电压定值
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger" v-on:click="Send_serial2_18()">
			过电压保护时间定值
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning" v-on:click="Send_serial2_19()">
			零序过电压保护电压定值
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info" v-on:click="Send_serial2_20()">
			绝缘电阻监测电阻低定值
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark" v-on:click="Send_serial2_21()">
			绝缘电阻监测电阻低定值
		</b-button>
		&nbsp
		<!-- gsm 复制停止 -->

		<!-- gsm 复制开始 -->
		<b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary" v-on:click="Send_serial2_22()">
			绝缘电阻监测时间定值
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary" v-on:click="Send_serial2_23()">
			PT断线报警延时时间
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success" v-on:click="Send_serial2_24()">
			开入保护延时定值
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger" v-on:click="Send_serial2_25()">
			附录2NULL
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning" v-on:click="Send_serial2_26()">
			高温跳闸保护温度定值
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info" v-on:click="Send_serial2_27()">
			高温跳闸保护时间
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark" v-on:click="Send_serial2_28()">
			加热除湿保护湿度定值
		</b-button>
		&nbsp
		<!-- gsm 复制停止 -->

		<!-- gsm 复制开始 -->
		<b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary" v-on:click="Send_serial2_29()">
			失压保护电压定值
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary" v-on:click="Send_serial2_30()">
			失压保护时间定值
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success" v-on:click="Send_serial2_31()">
			线圈接地零序过流保护定值
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger" v-on:click="Send_serial2_32()">
			线圈接地零序过流保护时间
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning" v-on:click="Send_serial2_33()">
			线圈接地零序过压保护定值
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info" v-on:click="Send_serial2_34()">
			功率方向闭锁零序
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark" v-on:click="Send_serial2_35()">
			附录2备用
		</b-button>
		&nbsp
		<!-- gsm 复制停止 -->

		<!-- gsm 复制开始 -->
		<b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary" v-on:click="Send_serial2_36()">
			2次谐波闭锁速断
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary" v-on:click="Send_serial2_37()">
			2次谐波闭锁限时速断
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success" v-on:click="Send_serial2_38()">
			2次谐波闭锁定时限过流
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger" v-on:click="Send_serial2_39()">
			二次谐波闭锁系数
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

		methods: { // 附录2
			Send_serial2_1() {
				let _this = this

				axios.post('http://localhost:10866/suduanbaohudianliudingzhi').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial2_2() {
				let _this = this

				axios.post('http://localhost:10866/xianshisuduanbaohudianliudingzhi').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial2_3() {
				let _this = this

				axios.post('http://localhost:10866/xianshisuduanbaohushijiandingzhi').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial2_4() {
				let _this = this

				axios.post('http://localhost:10866/dingshixianguoliubaohudianliudingzhi').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial2_5() {
				let _this = this

				axios.post('http://localhost:10866/dingshixianguoliubaohushijiandingzhi').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial2_6() {
				let _this = this

				axios.post('http://localhost:10866/fanshixianguoliubaohudianliudingzhi').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial2_7() {
				let _this = this

				axios.post('http://localhost:10866/fanshixianguoliubaohushijianbeishu').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial2_8() {
				let _this = this

				axios.post('http://localhost:10866/fanshixianquxianzhonglei').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial2_9() {
				let _this = this

				axios.post('http://localhost:10866/lingxuguoliubaohudianliudingzhi').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial2_10() {
				let _this = this

				axios.post('http://localhost:10866/lingxuguoliubaohushijiandingzhi').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial2_11() {
				let _this = this

				axios.post('http://localhost:10866/NULL1').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial2_12() {
				let _this = this

				axios.post('http://localhost:10866/NULL2').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial2_13() {
				let _this = this

				axios.post('http://localhost:10866/gongluefangxianglingxuguoliubaohudingzhi').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial2_14() {
				let _this = this

				axios.post('http://localhost:10866/gongluefangxianglingxuguoliubaohushijian').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial2_15() {
				let _this = this

				axios.post('http://localhost:10866/didianyabaohudianyadingzhi').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial2_16() {
				let _this = this

				axios.post('http://localhost:10866/didianyabaohushijiandingzhi').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial2_17() {
				let _this = this

				axios.post('http://localhost:10866/guodianyabaohudianyadingzhi').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial2_18() {
				let _this = this

				axios.post('http://localhost:10866/guodianyabaohushijiandingzhi').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial2_19() {
				let _this = this

				axios.post('http://localhost:10866/lingxuguodianyabaohudianyadingzhi').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial2_20() {
				let _this = this

				axios.post('http://localhost:10866/jueyuandianzujiancedianzudidingzhi').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial2_21() {
				let _this = this

				axios.post('http://localhost:10866/jueyuandianzujiancedianzugaodingzhi').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial2_22() {
				let _this = this

				axios.post('http://localhost:10866/jueyuandianzujianceshijiandingzhi').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial2_23() {
				let _this = this

				axios.post('http://localhost:10866/PTduanxianbaojingyanshishijian').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial2_24() {
				let _this = this

				axios.post('http://localhost:10866/kairubaohuyanshidingzhi').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial2_25() {
				let _this = this

				axios.post('http://localhost:10866/fulu2NULL').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial2_26() {
				let _this = this

				axios.post('http://localhost:10866/gaowentiaozhabaohuwendudingzhi').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial2_27() {
				let _this = this

				axios.post('http://localhost:10866/gaowentiaozhabaohushijian').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial2_28() {
				let _this = this

				axios.post('http://localhost:10866/jiarechushibaohushidudingzhi').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial2_29() {
				let _this = this

				axios.post('http://localhost:10866/shiyabaohudianyadingzhi').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial2_30() {
				let _this = this

				axios.post('http://localhost:10866/shiyabaohushijiandingzhi').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial2_31() {
				let _this = this

				axios.post('http://localhost:10866/xianquanjiedilingxuguoliubaohudingzhi').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial2_32() {
				let _this = this

				axios.post('http://localhost:10866/xianquanjiedilingxuguoliubaohushijian').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial2_33() {
				let _this = this

				axios.post('http://localhost:10866/xianquanjiedilingxuguoyabaohudingzhi').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial2_34() {
				let _this = this

				axios.post('http://localhost:10866/gongluefangxiangbisuolingxu').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial2_35() {
				let _this = this

				axios.post('http://localhost:10866/fulu2beiyong').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial2_36() {
				let _this = this

				axios.post('http://localhost:10866/2cixiebobisuosuduan').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial2_37() {
				let _this = this

				axios.post('http://localhost:10866/2cixiebobisuoxianshisuduan').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial2_38() {
				let _this = this

				axios.post('http://localhost:10866/2cixiebobisuodingshixianguoliu').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial2_39() {
				let _this = this

				axios.post('http://localhost:10866/ercixiebobisuoxishu').then(function(response) {
					_this.resp = response.data
				})

			}
		},
	}
</script>

<style>
</style>
