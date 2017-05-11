<template>
  <div id="for_love">
    <love_header @showupload="show=true" :imgCount="imgCount" :go_now="go_now"></love_header>
    <uploadhead v-if="show" @closeupload="isShow" :id_num="id_num" @myhead="myheads" ></uploadhead>
    <my_head @showupload1="show=true" :id_num="id_num" v-if="show_myhead_modul"></my_head>
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
                show:false,
                id_num:"",
                go_now:true,
                imgCount:"",
              show_myhead_modul:false
            }
        },
      created(){
        this.id_num=this.getCookie("GXW_user_id")
        if(this.id_num!=null){
            var now_this=this
            axios({
              method: 'get',
              url: 'http://192.168.1.25/gxw_mobile3/Shop/Loves/imgCount',
            }).then(function (res) {
                    now_this.imgCount=res.data.list
            })


        }


      },
      methods:{
        getCookie:function(GXW_user_id){
          if (document.cookie.length>0)
          {
            var c_start=document.cookie.indexOf(GXW_user_id + "=")
            if (c_start!=-1)
            {
              c_start=c_start + GXW_user_id.length+1
              var c_end=document.cookie.indexOf(";",c_start)
              if (c_end==-1) c_end=document.cookie.length
              return unescape(document.cookie.substring(c_start,c_end))
            }
          }
          return null
        },
        myheads(){
          this.show_myhead_modul=true
        },
        isShow(){
            this.show=!this.show
          this.go_now=!this.go_now
        }
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
