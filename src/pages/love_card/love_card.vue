<template>
  <div id="love_card">
    <card_header></card_header>
  </div>

</template>
<script type="text/ecmascript-6">
  import card_header from "@/components/love_card/card_header/card_header.vue"
    export default {
        name: 'love_card',
        data(){
            return {}
        },
      components:{
        card_header
      }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
  #love_card{
    width: 1190px;
    height: auto;
    margin: auto;
  }
</style>
