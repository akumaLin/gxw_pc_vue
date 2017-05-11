<template>
  <div id="for_love">
    <love_header @showupload="show=true"></love_header>
    <uploadhead v-if="show" @closeupload="show=false"></uploadhead>
    <my_head @showupload1="show=true"></my_head>
    <sort_num></sort_num>
    <img src="../../assets/images/520adbanner.png" alt="" class="last_img">
  </div>

</template>
<script type="text/ecmascript-6">
  import axios from 'axios';
  import love_header from "@/components/for_love/love_header/love_header.vue"
  import my_head from "@/components/for_love/head/my_head.vue"
  import sort_num from "@/components/for_love/sort_num/sort_num.vue"
  import uploadhead from "@/components/for_love/uploadhead/uploadhead.vue"
    export default {
        name: 'for_love',
        data(){
            return {
                show:false
            }
        },
      methods:{

      },
      components:{
        love_header,
        my_head,
        sort_num,
        uploadhead
      }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
#for_love{
  width: 1190px;
  height: auto;
  margin: auto;
}
.last_img{
  margin-top: 40px;
}
</style>
