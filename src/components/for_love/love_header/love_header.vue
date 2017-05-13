<template>
  <div id="love_header" :style="{background: 'url(' +forlove_bg + ') no-repeat',backgroundSize:'100% 100%'}">
    <ul class="love_num">
      <li class="">
        <p v-text="imgCount.sum"></p>
        <p>共享网收到赞</p>
      </li>
      <li class="">
        <p >¥<span v-text="imgCount.sum_money"></span></p>
        <p>共享网捐献金额</p>
      </li>
    </ul>

    <div class="love_rules">
      <div class="r_bg">活动规则</div>
      <div style="clear: both"></div>
      <p>1、用户上传一张体现“爱”的情景照，并配上文字说明参与评比。</p>

      <p>2、参与用户可邀请朋友为其点赞，每1个赞等同于0.1元，共享网将点赞值全部捐献给贫困山区留守失学儿童。</p>
      <p>3、获得点赞数最多的前十名“公益达人”共享网将另外赠送共享网100元无门槛优惠券。</p>
      <p> 4、游客可通过第三方授权登陆点赞，每位用户对每个照片发布者仅有一次点赞权。（注册既享188元新人红包）。</p>
      <p> 5、请遵守合理规则参与本活动，对于不合规手段进行恶意刷赞的共享网有权取消用户获奖资格。</p>
    </div>
    <button class="add_now" @click="showUp" v-if="go_now">立即参与</button>

  </div>
</template>
<script type="text/ecmascript-6">

  export default {
    name: '',
    props:["imgCount","go_now","id_num"],
    data(){
      return {

        forlove_bg: require("../../../assets/images/forlove_yx.png"),
      }
    },
  craeted(){
        var now_this=this

  },
    methods:{
      showUp(){
          if(this.id_num==null){
              window.location.href="https://www.gxw520.com/user.php?act=user_credit"
          }else {
            this.$emit('showupload')   //点击立即参与弹出上传框
          }
      }
    },

  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "love_header.scss";
</style>
