<template>
  <div id="coupon">
    <p class="title"><span>我的优惠券</span>
      <a class="sort-more" v-if="coupon.length>0">更多>></a>
      <a class="sort-more" v-if="coupon.length<=0">去领取>></a>
    </p>
    <div  class="wrap_coupon">
      <div class="coupon get" v-for="(item,index) in coupon" v-if="coupon.length>0" :style="{background: 'url(' + get_bg + ') no-repeat',backgroundSize:'100% 100%'}">
        <div class="money">
          ¥<span>{{item.type_money|int_f}}</span>
        </div>
        <div class="m-text">
          <p style="color: #000000">{{item.cate}}</p>
          <p>满{{item.min_goods_amount|int_f}}可用</p>
          <p>有效期：{{item.use_start_date|time_f}}-{{item.use_end_date|time_f}} </p>
        </div>
        <span class="use" v-if="timeout[index]&&(item.order_id==0)">立即使用</span>
        <div class="coupon_icon"
             :class="[{already:item.order_id>0},{gone:((!timeout[index])&&(item.order_id==0))}]"></div>
      </div>
      <div class="coupon no_things" v-if="coupon.length<=0">
        没有优惠券，<span style="color: red">快去领取吧！</span>
      </div>
    </div>

  </div>
</template>
<script type="text/ecmascript-6">

  export default {
    name: '',
    props: ["coupon", "timeout"],
    data(){
      return {
        get_bg: require("../../../assets/images/yhj.png"),
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "coupon.scss";
</style>
