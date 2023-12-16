<template>
  <layout-vertical >

    <router-view  />

<!--    <app-customizer-->
<!--      v-if="showCustomizer"-->
<!--      slot="customizer"-->
<!--    />-->

  </layout-vertical>
</template>

<script>
import LayoutVertical from '@core/layouts/layout-vertical/LayoutVertical.vue'
// import AppCustomizer from '@core/layouts/components/app-customizer/AppCustomizer.vue'
import { $themeConfig } from '@themeConfig'

export default {
  components: {
    // AppCustomizer,
    LayoutVertical,
  },
  data() {
    return {
      showCustomizer: $themeConfig.layout.customizer,
    }
  },
}
</script>
<style>
	/* class="gsm-card" */
	.gsm-card {
	  background: rgba( 255, 255, 255, 0.15 );
	  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.17 );
	  backdrop-filter: blur( 4px );
	  -webkit-backdrop-filter: blur( 4px );
	 
	  border-radius: 20px;
	  border: 1px solid rgba( 255, 255, 255, 0.18 );
	}
</style>
