<template>
  <div id="scores">
    <div style="position:relative">
      <p class="title"><span>集爱数字卡片</span> <span class="to_get_card">去集卡 >></span></p>
      <ul class="my-tb">
        <li class="card_num_c"><span v-text="pointCode>0?pointCode:0" ></span>张
          <button class="btn" v-if="pointCode >=10" @touchstart="isTrue" >兑换14卡</button>
        </li>
        <li>Tips：10张13卡可以兑换一张14卡，不含抽奖抽中的13卡</li>
      </ul>
    </div>

  </div>
</template>
<script type="text/ecmascript-6">

    export default {
        name: 'scores',
        props:["pointCode"],
        data(){
            return {}
        },
      methods:{
        isTrue(){

        }
      }
    }
</script>
<style lang="scss" rel="stylesheet/scss" >
@import "scores.scss";
</style>
