<template>
  <div id="self">
    <div class="search_div">
      <input type="text" class="search" placeholder="输入用户编号">
      <img class="search_icon" src="../../../assets/images/search_icon.png">
      <img src="../../../assets/images/self_x.png" alt="" class="self_x">
    </div>
   <span class="page_change next_page">下一页 ></span>
    <span class="page_change"> < 上一页</span>


     <ul class="self_people_info">
            <li></li>
     </ul>



  </div>
</template>
<script type="text/ecmascript-6">

  export default {
    name: 'self',
    data(){
      return {}
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "self.scss";

</style>
