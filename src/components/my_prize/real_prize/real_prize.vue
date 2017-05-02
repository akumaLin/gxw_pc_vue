<template>
  <div id="real_prize">
    <p class="title"><span>我的奖品</span> <a class="to_get_card">去抽奖 >></a></p>
    <div class="wrap_swipe">
      <swiper :options="swiperOption" >
        <swiper-slide v-for="(item,index) in  prize" v-if="prize.length>0" :key="index">
          <div class="prize-center">
            <div class="item_prize" style="background-size: 100% 100%"
                 :style="{backgroundImage: 'url(' + item.image + ')'}">
            </div>
            <p class="prize_text">{{item.prize_name}} x{{item.num}}</p>
          </div>
        </swiper-slide>
        <swiper-slide v-if="prize.length<=0">
          <p class="kk">啊哦～空空如也，<span style="color: red">快去抽奖吧！</span></p>
        </swiper-slide>
      </swiper>
    </div>

  </div>
</template>
<script type="text/ecmascript-6">
  import {swiper, swiperSlide, swiperPlugins} from 'vue-awesome-swiper'
  export default {
    name: 'real_priz',
    props: ["prize"],
    data(){
      return {
        swiperOption: {
          slidesPerView: 4,
          paginationClickable: true,
          spaceBetween: 30,
          loop: true,autoplay: 1500,

        }
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "real_prize.scss";
</style>
