<template>
 
<!--	<div :class="{bgOne:isCheck,bgTwo:!isCheck}" >-->
<!--		<b-button @click= "submit">-->
<!--				切换背景-->
<!--		</b-button>		-->
<!--		-->
<!--		</div>-->
 <div>
<!--   苏ICP备05006520号-2-->
   <a href="https://beian.miit.gov.cn/" target="_blank">无锡市新一代</a>
   &nbsp;&nbsp;&nbsp;&nbsp;
   <a href="https://beian.miit.gov.cn/" target="_blank">苏ICP备05006520号-2</a>

   &nbsp;&nbsp;&nbsp;&nbsp;
   <a href="https://beian.miit.gov.cn/" target="_blank">技术咨询:17625000096</a>

 </div>


  <!-- <p class="clearfix mb-0"> -->
<!--    <span class="float-md-left d-block d-md-inline-block mt-25">
      COPYRIGHT  © {{ new Date().getFullYear() }}
      <b-link
        class="ml-25"
        target="_blank"
      >无锡新一代</b-link>
	   <!-- href="http://wxxyd.com" -->
<!--      <span class="d-none d-sm-inline-block">, All rights Reserved</span>
    </span> -->  

    <!-- <span class="float-md-right d-none d-md-block">Hand-crafted &amp; Made with
      <feather-icon
        icon="HeartIcon"
        size="21"
        class="text-danger stroke-current"
      />
    </span> -->
  <!-- </p> -->
</template>

<script>
import { BLink,BButton } from 'bootstrap-vue'

export default {
	   data () {
		 return{ 
			 isCheck:true
		 }
	       },
		methods:{
			submit(){
				this.isCheck = !this.isCheck
		    }
 
		},
		components:{
			BButton
		}
 
			
}
			
 
</script>
<style>
 /* 	.bgOne{
 		background : url('../../../assets/images/apple-logo-white2.jpg')  center no-repeat;
 		 height: 100%;
 			
 		width: 100%;
 		opacity: 20% ;
 		background-size: cover;
 			
 		position: absolute;
 	}
 
	.bgTwo{
	 background : url('../../../assets/images/apple-logo-white2.jpg')  center no-repeat;
	  height: 100%;
	 	
	 width: 100%;
	 opacity: 100% ;
	 background-size: cover;
	 	
	 position: absolute;
	} */
</style>
