<template>
  <p class="clearfix mb-0">
<!--    ©-->
    <span class="float-md-left d-block d-md-inline-block mt-25">
      系统时间 ：   {{nowDate}}
      {{nowTime}}
<!--      {{ new Date().getMonth() }}-->
<!--      {{ new Date().getDay() }}-->
      <b-link
        class="ml-25"
        href="https://www.wuxixinyidai.com"
        target="_blank"
      >技术支持</b-link>
      <span class="d-none d-sm-inline-block"> &nbsp 高工: 17625000096</span>
    </span>

    <span class="float-md-right d-none d-md-block">无锡新一代
      <feather-icon
        icon="HomeIcon"
        size="21"
        class="text-danger stroke-current"
      />
    </span>
  </p>
</template>

<script>
import { BLink } from 'bootstrap-vue'

export default {
  components: {
    BLink,
  },
  data() {
    return {
      datex : null ,
      timer : null,
       nowDate: "",
      nowTime: "",
    }

  },
  created(){
    this.setNowTimes();
  },
  mounted(){
//自动刷新获取数据(1000*60*60=>毫秒*秒*分钟，此时表示为60分钟)
    this.timer=setInterval(()=>{
   //fcn
      this.setNowTimes();
    },5000*1*1);
  },
  //生命周期若已设置定时器，需清空定时器beforeDestroy()
  beforeDestroy(){
    clearInterval(this.timer);
    this.timer=null;
  },
  methods: {
      setNowTimes () {
  let myDate = new Date();
  // 星期
 // let wk = myDate.getDay();
  let yy = String(myDate.getFullYear());
  let mm = myDate.getMonth() + 1;
  let dd = String(myDate.getDate() < 10 ? "0" + myDate.getDate() : myDate.getDate());
  let hou = String(myDate.getHours() < 10 ? "0" + myDate.getHours() : myDate.getHours());
  let min = String(myDate.getMinutes() < 10 ? "0" + myDate.getMinutes(): myDate.getMinutes());
  let sec = String(myDate.getSeconds() < 10 ? "0" + myDate.getSeconds(): myDate.getSeconds());
  // 从0开始,周日就是0
  // let weeks = [
  //   "星期日",
  //   "星期一",
  //   "星期二",
  //   "星期三",
  //   "星期四",
  //   "星期五",
  //   "星期六",
  // ];
 // let week = weeks[wk];
  this.nowDate = yy + "年" + mm + "月" + dd + "日"
  this.nowTime = hou + ":" + min + ":" +sec
  //this.nowWeek = week;
      },
  },
}


</script>
