<template>
	<b-tab>

		<template #title>
			<feather-icon icon="ActivityIcon" />
			<span>故障录波</span>
		</template>
		<!-- gsm 复制开始 -->
		<b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary" v-on:click="Send_serial1_x()">
			改中文
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary" v-on:click="Send_serial1_x()">
			改中文
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success" v-on:click="Send_serial1_x()">
			改中文
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger" v-on:click="Send_serial1_x()">
			改中文
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning" v-on:click="Send_serial1_x()">
			改中文
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info" v-on:click="Send_serial1_x()">
			改中文
		</b-button>
		&nbsp
		<b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark" v-on:click="Send_serial1_x()">
			改中文
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

		methods: {},
	}
</script>

<style>
</style>
