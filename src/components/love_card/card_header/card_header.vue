<template>
  <div id="love_card">
    <div id="card_header" :style="{background: 'url(' + love_card_bg + ') no-repeat',backgroundSize:'100% 100%'}">
      <p class="love_rule">集爱活动规则：</p>
      <div class="rule_text">
        <p> 集齐“520（我爱你）”、“13（一生）”、“14（一世）”三组数字卡片可获得一张积分卡（60积分）并赠送3次抽奖机会。</p>
        <p>1、活动时间：2017年5月20日-2017年5月31日。</p>
        <p> 2、活动中获得的数字卡片及奖品，用户可在“我的奖品”中进行查看确认。</p>
        <p> 3、请遵守合理规则参与本活动，对于不合规手段达成赠卡奖励的共享网有权取消用户获奖资格，必要时追究法律责任。</p>
        <p> 4、本活动最终解释权归共享网所有。</p>
      </div>
    </div>
    <div class="card_520 margin_520" :style="{background: 'url(' + bg_520 + ') no-repeat',backgroundSize:'100% 100%'}">
      <img src="../../../assets/images/520.png" alt="">
      <div class="text_520 ">
        <h1>一、520卡</h1>
        <p> 1、用户上传一张“爱”主题的照片，（亲情、友情、爱情等）。</p>
        <p>2、审核通过后，可邀请好友点赞。</p>
        <p>3、当点赞数达到52时，将自动发放“520”数字卡片。</p>
        <div class="href_520 ">
          获得方式>> <a href="#" class="href_btn">为爱益行</a>
        </div>
      </div>
    </div>


    <div class="card_520 margin_13" :style="{background: 'url(' + bg_13 + ') no-repeat',backgroundSize:'100% 100%'}">

      <div class="text_520 text-13">
        <h1>二、13卡</h1>
        <p> 1、邀请九位新用户注册，即可获得一张“13”数字卡片。</p>
        <p> 2、购买一张积分卡即可获得“13”数字卡片。。</p>
        <p> 3、购物抽奖有机会获得“13”数字卡片。</p>
        <div class="href_520 href_13">
          获得方式>> <a href="#" class="href_btn">立即推荐</a>
          <a href="#" class="href_btn">购买积分卡</a>
          <a href="#" class="href_btn">去购物</a>
        </div>
      </div>
      <img src="../../../assets/images/13.png" alt="">
    </div>


    <div class="card_520 margin_520" :style="{background: 'url(' + bg_14 + ') no-repeat',backgroundSize:'100% 100%'}">
      <img src="../../../assets/images/14.png" alt="">
      <div class="text_520 ">
        <h1>三、14卡</h1>
        <p> 1、在商品详情页寻爱心，有机会随机获取一张“14”数字卡片。</p>
        <p> 2、购买十张积分卡即可获得“14”数字卡片。</p>
        <p> 3、购物抽奖有机会获得“14”数字卡片。</p>
        <div class="href_520 ">
          获得方式>> <a href="#" class="href_btn">购买积分卡</a>
          <a href="#" class="href_btn">去购物</a>
        </div>
      </div>
    </div>

    <div class="card_520 margin_13" :style="{background: 'url(' + bg_hec + ') no-repeat',backgroundSize:'100% 100%'}">

      <div class="text_520 text-13  text-hec">
        <h1>四、合成卡</h1>
        <p>1、集齐“520”、“13”、“14”三张数字卡片后，系统自动合成卡片，同时可获得一张积分卡并赠送3次抽奖机会。</p>
        <p> 2、集卡不设上限，多集多得多赠。</p>

      </div>
      <img src="../../../assets/images/hec.png" alt="">
    </div>
<p class="last_text">为爱益行：“为爱益行”点赞数最多的前十名“公益达人”共享网将另外赠送共享网商城100元无门槛优惠券。</p>
    <img src="../../../assets/images/520adbanner.png" alt="" class="last_img">
  </div>
</template>
<script type="text/ecmascript-6">

  export default {
    name: 'card_header',
    data(){
      return {
        love_card_bg: require("../../../assets/images/love_card_bg.png"),
        bg_520: require("../../../assets/images/bg_520.png"),
        bg_13: require("../../../assets/images/bg_13.png"),
        bg_14: require("../../../assets/images/bg_14.png"),
        bg_hec: require("../../../assets/images/bg_hec.png"),

      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "card_header.scss";
</style>
