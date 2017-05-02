<template>
  <div id="right_navbar">
    <div class="ad" :style="{background: 'url(' + ad_bg + ') no-repeat',backgroundSize:'100% 100%'}"></div>
    <ul class="nav_right">
      <li><a href="">我的奖品 <span class="j_right"> ></span></a></li>
      <li><a href="">抽奖专区<span class="j_right"> ></span></a></li>
      <li><a href="">领取优惠卷<span class="j_right"> ></span></a></li>
      <li><a href="">集爱赠卡<span class="j_right"> ></span></a></li>
      <li><a href="">为爱益行<span class="j_right"> ></span></a></li>
      <li><a href="">小时抢购<span class="j_right"> ></span></a></li>
      <li><a href="">购物节会场<span class="j_right"> ></span></a></li>
      <li><a href="#">top</a></li>
    </ul>
    <div class="QR_code">
      <p>扫码下载移动端</p>
      <div class="q_code" :style="{background: 'url(' + qr_code + ') no-repeat',backgroundSize:'100% 100%'}"></div>
      <p>随时随地参与活动</p>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">

    export default {
        name: 'right_navbar',
        data(){
            return {
              ad_bg:require("../../../assets/images/ad_bg.png"),
              qr_code:require("../../../assets/images/qr_code.png")

            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
@import "right_navbar.scss";
</style>
