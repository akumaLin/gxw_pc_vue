<template>
  <div id="people">
    <p class="title"><span>我邀请的用户</span>
      <a class="to_get_card" v-if="!shareUser[0].new_user_id" style="display: inline-block" @touchstart="toShare">去分享>></a>
      <a class="to_get_card"  v-else @touchstart="more" style="display: inline-block" >更多>></a>
    </p>
      <ul class="my-user">
        <li v-for="item in  shareUser" :class="{bigwidh:!shareUser[0].new_user_id}">
          <div class="user-head" style="background-size: 100% 100%" :style="{backgroundImage: 'url(' + item.avatar + ')'}" v-if="item.avatar"></div>
          <div class="user-head null_people" v-if="!item.avatar"></div>
          <span class="name">{{item.username}}</span>
        </li>
      </ul>

  </div>
</template>
<script type="text/ecmascript-6">

    export default {
        name: 'people',
        props:["shareUser"],
         data(){
            return {}
        },
      methods:{
        toShare(){},
        more(){

        }
      }
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
@import "people.scss";
</style>
