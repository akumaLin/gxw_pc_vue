<template>
    <div id="sort_num">
      <div class="honor":style="{background: 'url(' + honor_bg + ') no-repeat',backgroundSize:'100% 100%'}">公益集赞排行榜</div>
      <ul class="sort_panel">
        <li><router-link to="/for_love/self">个人爱心排行榜</router-link></li>
        <li><router-link to="/for_love/pro">省份爱心PK榜</router-link></li>
      </ul>
   <router-view></router-view>
    </div>
</template>
<script type="text/ecmascript-6">

    export default {
        name: 'sort_num',
        data(){
            return {
              honor_bg:require("../../../assets/images/honor.png")
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
@import "sort_num.scss";
</style>
