<template>
	<!-- 	<b-tab>
		<template #title>
			<feather-icon icon="InfoIcon" />
			<span>内部测试信息</span>
		</template>

		<b-card-text>

		</b-card-text>
		<b-card-text>

		</b-card-text>
	</b-tab> -->

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
