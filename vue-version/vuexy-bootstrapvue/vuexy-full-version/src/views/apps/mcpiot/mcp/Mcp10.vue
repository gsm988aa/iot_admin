<template>
	<b-tab active>
		<template #title>
			<feather-icon icon="ToolIcon" />
			<span>控制命令</span>
		</template>
		<div class="accordion" role="tablist">

			<b-card no-body class="mb-1">
				<b-card-header header-tag="header" class="p-1" role="tab">
					<b-button block v-b-toggle.accordion-1 v-ripple.400="'rgba(113, 102, 240, 0.15)'"
						variant="outline-primary" v-on:click="Send_serial10_1()">遥控合闸</b-button>
				</b-card-header>
				<b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
					<b-card>
						<b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
							v-on:click="Send_serial10_1()">读取</b-button>
						<b-card-body>
							<b-card-text>读取值为:{{ resp }}</b-card-text>
						</b-card-body>
					</b-card>
				</b-collapse>
			</b-card>

			<b-card no-body class="mb-1">
				<b-card-header header-tag="header" class="p-1" role="tab">
					<b-button block v-b-toggle.accordion-2 v-ripple.400="'rgba(186, 191, 199, 0.15)'"
						variant="outline-secondary" v-on:click="Send_serial10_2()">遥控分闸</b-button>
				</b-card-header>
				<b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
					<b-card>
						<b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
							v-on:click="Send_serial10_2()">读取</b-button>
						<b-card-body>
							<b-card-text>读取值为:{{ resp }}</b-card-text>
						</b-card-body>
					</b-card>
				</b-collapse>
			</b-card>

			<b-card no-body class="mb-1">
				<b-card-header header-tag="header" class="p-1" role="tab">
					<b-button block v-b-toggle.accordion-3 v-ripple.400="'rgba(40, 199, 111, 0.15)'"
						variant="outline-success" v-on:click="Send_serial10_3()">遥控复归</b-button>
				</b-card-header>
				<b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
					<b-card>
						<b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
							v-on:click="Send_serial10_3()">读取</b-button>
						<b-card-body>
							<b-card-text>读取值为:{{ resp }}</b-card-text>
						</b-card-body>
					</b-card>
				</b-collapse>
			</b-card>

		</div>

		<b-card-text>{{resp}}</b-card-text>
	</b-tab>

</template>

<script>
	import axios from 'axios'

	import Ripple from 'vue-ripple-directive'

	import BCardCode from '@core/components/b-card-code'
	import {
		BButtonGroup,
		BButton,
		BCard,
		BCardHeader,
		BCardText,
		BTabs,
		BTab,
		VBToggle,
		BSidebar,
		VBTogglePlugin,
		BRow,
		BCol,
		BCardGroup,
		BCollapse,
		BCardFooter,
		BCardBody,

		BCardTitle
	} from 'bootstrap-vue'


	export default {
		components: {
			BCardBody,
			VBTogglePlugin,
			BSidebar,
			VBToggle,
			BCollapse,
			BCardHeader,
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
			'b-toggle': VBToggle
		},

		data() {
			return {
				resp: '',
				text: `etwas`

			}
		},

		methods: {
			Send_serial10_1() {
				let _this = this
				axios.post('http://localhost:10866/yaokonghezha').then(function(response) {
					_this.resp = response.data
				})

			},
			Send_serial10_2() {
				let _this = this
				axios.post('http://localhost:10866/yaokongfenzha').then(function(response) {
					_this.resp = response.data
				})
			},
			Send_serial10_3() {
				let _this = this
				axios.post('http://localhost:10866/yaokongfugui').then(function(response) {
					_this.resp = response.data
				})
			},

			Send_serial10_4() {
				let _this = this
				axios.post('http://localhost:10866/yaokongguzhanglubozhongqi').then(function(response) {
					_this.resp = response.data
				})
			},
			Send_serial10_5() {
				let _this = this
				axios.post('http://localhost:10866/jiarechushichukoumingling').then(function(response) {
					_this.resp = response.data
				})
			},
			Send_serial10_6() {
				let _this = this
				axios.post('http://localhost:10866/shiyayanshichukoumingling').then(function(response) {
					_this.resp = response.data
				})
			},
			Send_serial10_7() {
				let _this = this
				axios.post('http://localhost:10866/guoliushiyanmingling').then(function(response) {
					_this.resp = response.data
				})
			},
			Send_serial10_8() {
				let _this = this
				axios.post('http://localhost:10866/loudianshiyanmingling').then(function(response) {
					_this.resp = response.data
				})
			},
			Send_serial10_9() {
				let _this = this
				axios.post('http://localhost:10866/jueyuanshiyanmingling').then(function(response) {
					_this.resp = response.data
				})
			},
			Send_serial10_10() {
				let _this = this
				axios.post('http://localhost:10866/qingdiandumingling').then(function(response) {
					_this.resp = response.data
				})
			},
			Send_serial10_11() {
				let _this = this
				axios.post('http://localhost:10866/fangyuejifangzhenshiyanmingling').then(function(response) {
					_this.resp = response.data
				})
			},
			Send_serial10_12() {
				let _this = this
				axios.post('http://localhost:10866/GSEgaojingfuguimingling').then(function(response) {
					_this.resp = response.data
				})
			},
			Send_serial10_13() {
				let _this = this
				axios.post('http://localhost:10866/SU31kaichu1').then(function(response) {
					_this.resp = response.data
				})
			},
			Send_serial10_14() {
				let _this = this
				axios.post('http://localhost:10866/SU31kaichu2').then(function(response) {
					_this.resp = response.data
				})
			},
			Send_serial10_15() {
				let _this = this
				axios.post('http://localhost:10866/SU31kaichu3').then(function(response) {
					_this.resp = response.data
				})
			},
			Send_serial10_16() {
				let _this = this
				axios.post('http://localhost:10866/SU31kaichu4').then(function(response) {
					_this.resp = response.data
				})
			},
			Send_serial10_17() {
				let _this = this
				axios.post('http://localhost:10866/suoyoulubozhongchuanmingling').then(function(response) {
					_this.resp = response.data
				})
			}
		},
	}
</script>

<style>
	::-webkit-scrollbar {
		width: 26px;
		height: 26px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
		-webkit-border-radius: 16px;
		border-radius: 16px;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		-webkit-border-radius: 16px;
		border-radius: 16px;
		background: rgba(255, 0, 0, 0.8);
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
	}

	::-webkit-scrollbar-thumb:window-inactive {
		background: rgba(255, 0, 0, 0.4);
	}
</style>
