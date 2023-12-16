<template>
	<b-tab>
		<template #title>
			<feather-icon icon="WifiIcon" />
			<span>以太网参数</span>
		</template>

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
			Send_serial14_1() {
				let _this = this

				axios.post('http://localhost:10866/benjiIP-H').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial14_2() {
				let _this = this

				axios.post('http://localhost:10866/benjiIP-L').then(function(response) {
					_this.resp = response.data
				})

			},

			Send_serial14_3() {
				let _this = this

				axios.post('http://localhost:10866/benjiziwangyanma-H').then(function(response) {
					_this.resp = response.data
				})

			},

			Send_serial14_4() {
				let _this = this

				axios.post('http://localhost:10866/benjiziwangyanma-L').then(function(response) {
					_this.resp = response.data
				})

			},

			Send_serial14_5() {
				let _this = this

				axios.post('http://localhost:10866/benjiwangguan-H').then(function(response) {
					_this.resp = response.data
				})

			},

			Send_serial14_6() {
				let _this = this

				axios.post('http://localhost:10866/benjiwangguan-L').then(function(response) {
					_this.resp = response.data
				})

			},

			Send_serial14_7() {
				let _this = this

				axios.post('http://localhost:10866/zhengxiangfasongshumu').then(function(response) {
					_this.resp = response.data
				})

			},

			Send_serial14_8() {
				let _this = this

				axios.post('http://localhost:10866/fanxiangfasongshumu').then(function(response) {
					_this.resp = response.data
				})

			},

			Send_serial14_9() {
				let _this = this

				axios.post('http://localhost:10866/zhengxiangfasongIP1-H').then(function(response) {
					_this.resp = response.data
				})

			},

			Send_serial14_10() {
				let _this = this

				axios.post('http://localhost:10866/zhengxiangfasongIP1-L').then(function(response) {
					_this.resp = response.data
				})

			},

			Send_serial14_11() {
				let _this = this

				axios.post('http://localhost:10866/zhengxiangfasongIP2-H').then(function(response) {
					_this.resp = response.data
				})

			},

			Send_serial14_12() {
				let _this = this

				axios.post('http://localhost:10866/zhengxiangfasongIP2-L').then(function(response) {
					_this.resp = response.data
				})

			},

			Send_serial14_13() {
				let _this = this

				axios.post('http://localhost:10866/zhengxiangfasongIP3-H').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial14_14() {
				let _this = this

				axios.post('http://localhost:10866/zhengxiangfasongIP3-L').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial14_15() {
				let _this = this

				axios.post('http://localhost:10866/zhengxiangfasongIP4-H').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial14_16() {
				let _this = this

				axios.post('http://localhost:10866/zhengxiangfasongIP4-L').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial14_17() {
				let _this = this

				axios.post('http://localhost:10866/zhengxiangfasongIP5-H').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial14_18() {
				let _this = this

				axios.post('http://localhost:10866/zhengxiangfasongIP5-L').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial14_19() {
				let _this = this

				axios.post('http://localhost:10866/zhengxiangfasongIP6-H').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial14_20() {
				let _this = this

				axios.post('http://localhost:10866/zhengxiangfasongIP6-L').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial14_21() {
				let _this = this

				axios.post('http://localhost:10866/fanxiangfasongIP1-H').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial14_22() {
				let _this = this

				axios.post('http://localhost:10866/fanxiangfasongIP1-L').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial14_23() {
				let _this = this

				axios.post('http://localhost:10866/fanxiangfasongIP2-H').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial14_24() {
				let _this = this

				axios.post('http://localhost:10866/fanxiangfasongIP2-L').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial14_25() {
				let _this = this

				axios.post('http://localhost:10866/fanxiangfasongIP3-H').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial14_26() {
				let _this = this

				axios.post('http://localhost:10866/fanxiangfasongIP3-L').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial14_27() {
				let _this = this

				axios.post('http://localhost:10866/fanxiangfasongIP4-H').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial14_28() {
				let _this = this

				axios.post('http://localhost:10866/fanxiangfasongIP4-L').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial14_29() {
				let _this = this

				axios.post('http://localhost:10866/fanxiangfasongIP5-H').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial14_30() {
				let _this = this

				axios.post('http://localhost:10866/fanxiangfasongIP5-L').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial14_31() {
				let _this = this

				axios.post('http://localhost:10866/fanxiangfasongIP6-H').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial14_32() {
				let _this = this

				axios.post('http://localhost:10866/fanxiangfasongIP6-L').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial14_33() {
				let _this = this

				axios.post('http://localhost:10866/benjiwangkouduankouhao').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial14_34() {
				let _this = this

				axios.post('http://localhost:10866/fulu14beiyong1').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial14_35() {
				let _this = this

				axios.post('http://localhost:10866/shangjishibenjixinghao').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial14_36() {
				let _this = this

				axios.post('http://localhost:10866/fulu14beiyong2').then(function(response) {
					_this.resp = response.data
				})

			},
		},
	}
</script>

<style>
</style>
