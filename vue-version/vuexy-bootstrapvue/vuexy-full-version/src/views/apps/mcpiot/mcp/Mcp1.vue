<template>
	<b-tab>
		<template #title>
			<feather-icon icon="SettingsIcon" />
			<span>保护设置</span>
		</template>

		<!-- 附录1 -->

		<!-- gsm modified -->
		<b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary" v-on:click="Send_serial1_1()">
			电流互感器变比
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary" v-on:click="Send_serial1_2()">
			屏保参数设置
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success" v-on:click="Send_serial1_3()">
			电压互感器变比
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger" v-on:click="Send_serial1_4()">
			合闸继电器脉冲宽度
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning" v-on:click="Send_serial1_5()">
			跳闸继电器脉冲宽度
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info" v-on:click="Send_serial1_6()">
			开入量1滤波时间
		</b-button>
		&nbsp

		<b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark" v-on:click="Send_serial1_7()">
			开入量2滤波时间
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary" v-on:click="Send_serial1_8()">
			开入量3滤波时间
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary" v-on:click="Send_serial1_9()">
			开入量4滤波时间
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success" v-on:click="Send_serial1_10()">
			开入量5滤波时间
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger" v-on:click="Send_serial1_11()">
			开入量6滤波时间
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning" v-on:click="Send_serial1_12()">
			开入量7滤波时间
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info" v-on:click="Send_serial1_13()">
			开入量8滤波时间
		</b-button>
		&nbsp

		<!-- gsm modified -->
		<b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary" v-on:click="Send_serial1_14()">
			CAN通讯波特率
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary" v-on:click="Send_serial1_15()">
			CAN通讯地址
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success" v-on:click="Send_serial1_16()">
			电压互感器变比
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger" v-on:click="Send_serial1_17()">
			RS485波特率
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning" v-on:click="Send_serial1_18()">
			RS485通讯地址
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info" v-on:click="Send_serial1_19()">
			有功电度脉冲计数
		</b-button>
		&nbsp

		<b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark" v-on:click="Send_serial1_20()">
			无功电度脉冲计数
		</b-button>
		&nbsp

		<!-- gsm modified -->
		<b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary" v-on:click="Send_serial1_21()">
			CAN故障录波复归方式
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary" v-on:click="Send_serial1_22()">
			参数设定密码
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success" v-on:click="Send_serial1_23()">
			Main CPU版本
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger" v-on:click="Send_serial1_24()">
			Com CPU版本
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning" v-on:click="Send_serial1_25()">
			电机启动选择
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info" v-on:click="Send_serial1_26()">
			电机额定电流
		</b-button>
		&nbsp

		<b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark" v-on:click="Send_serial1_27()">
			漏电继电器脉冲时间
		</b-button>
		&nbsp

		<!-- gsm modified -->
		<b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary" v-on:click="Send_serial1_28()">
			绝缘继电器脉冲时间
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary" v-on:click="Send_serial1_29()">
			功率计算方式
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success" v-on:click="Send_serial1_30()">
			单位闭锁时间
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger" v-on:click="Send_serial1_31()">
			速断解锁电流
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning" v-on:click="Send_serial1_32()">
			加热除湿继电器脉冲时间
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info" v-on:click="Send_serial1_33()">
			失压延时继电器脉冲时间
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark" v-on:click="Send_serial1_34()">
			软复位次数
		</b-button>
		&nbsp
		<!-- gsm modified -->
		<b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary" v-on:click="Send_serial1_35()">
			硬复位次数
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary" v-on:click="Send_serial1_36()">
			备用1
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success" v-on:click="Send_serial1_37()">
			备用2
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger" v-on:click="Send_serial1_38()">
			故障标志信息
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning" v-on:click="Send_serial1_39()">
			Com Boot版本信息
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info" v-on:click="Send_serial1_40()">
			液晶对比度
		</b-button>
		&nbsp

		<b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark" v-on:click="Send_serial1_41()">
			故障标志信息2
		</b-button>
		&nbsp

		<!-- gsm 复制开始 -->
		<b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary" v-on:click="Send_serial1_42()">
			合闸次数统计
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary" v-on:click="Send_serial1_43()">
			分闸次数统计
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success" v-on:click="Send_serial1_44()">
			远程电子挂牌
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger" v-on:click="Send_serial1_45()">
			测量Ia极性取反
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning" v-on:click="Send_serial1_46()">
			测量Ic极性取反
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info" v-on:click="Send_serial1_47()">
			保护IA极性取反
		</b-button>
		&nbsp

		<b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark" v-on:click="Send_serial1_48()">
			保护IC极性取反
		</b-button>
		&nbsp
		<!-- gsm 复制停止 -->
		<!-- gsm 复制开始 -->
		<b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary" v-on:click="Send_serial1_49()">
			主动发送录波使能
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary" v-on:click="Send_serial1_50()">
			防越级闭锁持续时间
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success" v-on:click="Send_serial1_51()">
			SU31扩展继电器1出口脉冲
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger" v-on:click="Send_serial1_52()">
			SU31扩展继电器2出口脉冲
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning" v-on:click="Send_serial1_53()">
			SU31扩展继电器3出口脉冲
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info" v-on:click="Send_serial1_54()">
			SU31扩展继电器4出口脉冲
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark" v-on:click="Send_serial1_55()">
			测量Ib极性取反
		</b-button>
		&nbsp
		<!-- gsm 复制停止 -->

		<!-- gsm 复制开始 -->
		<b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary" v-on:click="Send_serial1_56()">
			保护IB极性取反
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary" v-on:click="Send_serial1_57()">
			本体扩展继电器1出口脉冲
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success" v-on:click="Send_serial1_58()">
			本体扩展继电器2出口脉冲
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger" v-on:click="Send_serial1_59()">
			本体扩展继电器3出口脉冲
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning" v-on:click="Send_serial1_60()">
			本体扩展继电器4出口脉冲
		</b-button>
		&nbsp

		<!-- gsm 复制停止 -->

		<br>
		<br>

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
			// 附录1
			Send_serial1_1() {
				let _this = this

				axios.post('http://localhost:10866/dianliuhuganqibianbi').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_2() {
				let _this = this

				axios.post('http://localhost:10866/pingbaocanshushezhi').then(function(response) {
					_this.resp = response.data
				})
				setTimeout(function() {

				}, 5000);
				axios.post('http://localhost:10866/pingbaocanshushezhi_refresh').then(function(response) {
					_this.resp = response.data
				})
			},
			Send_serial1_3() {
				let _this = this

				axios.post('http://localhost:10866/dianyahuganqibianbi').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_4() {
				let _this = this

				axios.post('http://localhost:10866/hezhajidianqimochongkuandu').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_5() {
				let _this = this

				axios.post('http://localhost:10866/tiaozhajidianqimochongkuandu').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_6() {
				let _this = this

				axios.post('http://localhost:10866/kairuliang1lueboshijian').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_7() {
				let _this = this

				axios.post('http://localhost:10866/kairuliang2lueboshijian').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_8() {
				let _this = this

				axios.post('http://localhost:10866/kairuliang3lueboshijian').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_9() {
				let _this = this

				axios.post('http://localhost:10866/kairuliang4lueboshijian').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_10() {
				let _this = this

				axios.post('http://localhost:10866/kairuliang5lueboshijian').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_11() {
				let _this = this

				axios.post('http://localhost:10866/kairuliang6lueboshijian').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_12() {
				let _this = this

				axios.post('http://localhost:10866/kairuliang7lueboshijian').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_13() {
				let _this = this

				axios.post('http://localhost:10866/kairuliang8lueboshijian').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_14() {
				let _this = this

				axios.post('http://localhost:10866/CANtongxunbotelue').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_15() {
				let _this = this

				axios.post('http://localhost:10866/CANtongxundizhi').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_16() {
				let _this = this

				axios.post('http://localhost:10866/RS485botelue').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_17() {
				let _this = this

				axios.post('http://localhost:10866/RS485tongxundizhi').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_18() {
				let _this = this

				axios.post('http://localhost:10866/yougongdiandumochongjishu').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_19() {
				let _this = this

				axios.post('http://localhost:10866/wugongdiandumochongjishu').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_20() {
				let _this = this

				axios.post('http://localhost:10866/guzhanglubofuguifangshi').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_21() {
				let _this = this

				axios.post('http://localhost:10866/canshushedingmima').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_22() {
				let _this = this

				axios.post('http://localhost:10866/MainCPUbanben').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_23() {
				let _this = this

				axios.post('http://localhost:10866/ComCPUbanben').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_24() {
				let _this = this

				axios.post('http://localhost:10866/dianjiqidongxuanze').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_25() {
				let _this = this

				axios.post('http://localhost:10866/dianjiedingdianliu').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_26() {
				let _this = this

				axios.post('http://localhost:10866/loudianjidianqimochongshijian').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_27() {
				let _this = this

				axios.post('http://localhost:10866/jueyuanjidianqimochongshijian').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_28() {
				let _this = this

				axios.post('http://localhost:10866/gongluejisuanfangshi').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_29() {
				let _this = this

				axios.post('http://localhost:10866/danweibisuoshijian').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_30() {
				let _this = this

				axios.post('http://localhost:10866/suduanjiesuodianliu').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_31() {
				let _this = this

				axios.post('http://localhost:10866/jiarechushijidianqimochongshijian').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_32() {
				let _this = this

				axios.post('http://localhost:10866/shiyayanshijidianqimochongshijian').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_33() {
				let _this = this

				axios.post('http://localhost:10866/ruanfuweicishu').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_34() {
				let _this = this

				axios.post('http://localhost:10866/yingfuweicishu').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_35() {
				let _this = this

				axios.post('http://localhost:10866/beiyong1').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_36() {
				let _this = this

				axios.post('http://localhost:10866/beiyong2').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_37() {
				let _this = this

				axios.post('http://localhost:10866/guzhangbiaozhixinxi').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_38() {
				let _this = this

				axios.post('http://localhost:10866/PDPbanbenxinxi').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_39() {
				let _this = this

				axios.post('http://localhost:10866/ComBootbanbenxinxi').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_40() {
				let _this = this

				axios.post('http://localhost:10866/yejingduibidu').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_41() {
				let _this = this

				axios.post('http://localhost:10866/guzhangbiaozhixinxi').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_42() {
				let _this = this

				axios.post('http://localhost:10866/hezhacishutongji').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_43() {
				let _this = this

				axios.post('http://localhost:10866/fenzhacishutongji').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_44() {
				let _this = this

				axios.post('http://localhost:10866/yuanchengdianziguapai').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_45() {
				let _this = this

				axios.post('http://localhost:10866/celiangIajixingqufan').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_46() {
				let _this = this

				axios.post('http://localhost:10866/celiangIcjixingqufan').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_47() {
				let _this = this

				axios.post('http://localhost:10866/baohuIAjixingqufan').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_48() {
				let _this = this

				axios.post('http://localhost:10866/baohuICjixingqufan').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_49() {
				let _this = this

				axios.post('http://localhost:10866/zhudongfasongluboshineng').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_50() {
				let _this = this

				axios.post('http://localhost:10866/fangyuejibisuochixushijian').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_51() {
				let _this = this

				axios.post('http://localhost:10866/SU31kuozhanjidianqi1chukoumochong').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_52() {
				let _this = this

				axios.post('http://localhost:10866/SU31kuozhanjidianqi2chukoumochong').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_53() {
				let _this = this

				axios.post('http://localhost:10866/SU31kuozhanjidianqi3chukoumochong').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_54() {
				let _this = this

				axios.post('http://localhost:10866/SU31kuozhanjidianqi4chukoumochong').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_55() {
				let _this = this

				axios.post('http://localhost:10866/celiangIbjixingqufan').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_56() {
				let _this = this

				axios.post('http://localhost:10866/baohuIBjixingqufan').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_57() {
				let _this = this

				axios.post('http://localhost:10866/bentikuozhanjidianqi1chukoumochong').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_58() {
				let _this = this

				axios.post('http://localhost:10866/bentikuozhanjidianqi2chukoumochong').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_59() {
				let _this = this

				axios.post('http://localhost:10866/bentikuozhanjidianqi3chukoumochong').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial1_60() {
				let _this = this

				axios.post('http://localhost:10866/bentikuozhanjidianqi4chukoumochong').then(function(response) {
					_this.resp = response.data
				})

			}

		},
	}
</script>

<style>
</style>
