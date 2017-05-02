<template>
  <div id="my_head">
    <div class="my_header" :style="{background: 'url(' + header_bg + ') no-repeat',backgroundSize:'100% 100%'}">
      <div class="detail">查看详情</div>
    </div>
    <div class="my_info">
      <div class="my_info_bg" :style="{background: 'url(' + my_info_bg + ') no-repeat',backgroundSize:'100% 100%'}">
          <div class="header_png"  :style="{background: 'url(' +header_png + ') no-repeat',backgroundSize:'100% 100%'}"></div>
          <div class="my_info_text">
            <p class="name">Jason Ryan</p>
            <p><span>收到赞：56 </span><span> 捐献：¥6.5</span><span>排名：567</span></p>
          </div>
      </div>
      <p class="my_go">我的益行</p>
      <div class="my_go_info">
        <p>与友骑行，在路上，欣赏沿途风景。</p>
        <img src="../../../assets/images/my_info_bg.png" alt="">
        <p>2017-5-22   13:55:33</p>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">

  export default {
    name: 'header',
    data(){
      return {
        header_bg: require("../../../assets/images/520adbanner.png"),
       my_info_bg: require("../../../assets/images/my_info_bg.png"),
        header_png:require("../../../assets/images/my_info_bg.png")

      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "my_head.scss";
</style>
