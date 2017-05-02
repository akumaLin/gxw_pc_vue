<template>
   <div id="get_card">
     <div class="my-price-two">
       <p class="title"><span>集爱数字卡片</span> <span class="to_get_card">去集卡 >></span></p>
       <div class="s-card" v-for="(value, key, index) in wordNum">
         <img :src="value==0?slides[index].img_1:slides[index].img" alt="" width="100%" height="100%">
       </div>
       <div  :class="['s-card ','card_num',value==0?gray_color:red_color]" v-for="(value, key, index) in wordNum">
           <span v-if="value>0">x</span> <span v-text="value"></span>张
       </div>
     </div>

   </div>
</template>
<script type="text/ecmascript-6">

    export default {
        name: 'get_card',
      props:[
        "wordNum"
      ],
        data(){
            return {
              slides:[
                {img:require("../../../assets/images/520.png"),img_1:require("../../../assets/images/520_gray.png")},
                {img:require("../../../assets/images/13.png"),img_1:require("../../../assets/images/13_gray.png")},
                {img:require("../../../assets/images/14.png"),img_1:require("../../../assets/images/14_gray.png")},
                {img:require("../../../assets/images/hec.png"),img_1:require("../../../assets/images/hec_gray.png")}
              ],
              gray_color:"gray_color",
              red_color:"red_color"
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
@import "get-card.scss";
</style>
