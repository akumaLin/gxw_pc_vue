<template>
  <div id="for_love">
    <love_header @showupload="show=true" :imgCount="imgCount" :id_num="id_num" :go_now="go_now"></love_header>
    <uploadhead v-if="show" @myhead_not="show_myhead_modul=false" :not_pass="not_pass_img"  @closeupload="isShow" :id_num="id_num" @myhead="myheads" @closexxx="show=false" ></uploadhead>
    <!--<uploadhead v-if="show" @myhead_not="show_myhead_modul=false" :not_pass="not_pass_img" :isnt_pass="isnt_pass" @closeupload="isShow" :id_num="id_num" @myhead="myheads" @closexxx="show=false" ></uploadhead>-->
    <my_head @showMyhead="head_Show" :step3="step3" @img_change="my_headchange" :id_num="id_num" v-if="show_myhead_modul"></my_head>
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
                go_now:false,
                step3:false,
             /*   isnt_pass:"",*/
                imgCount:"",
                show_myhead_modul:true
            }
        },
      created(){
        this.id_num=this.getCookie("user_id")
            console.log(this.id_num)
            var now_this=this
            axios({
              method: 'get',
              url: 'http://192.168.1.25/gxw_mobile3/Shop/Loves/imgCount',
            }).then(function (res) {
                    now_this.imgCount=res.data.list
            })

        if (this.id_num != null) {
          var now_this = this
          axios.get('http://192.168.1.25/gxw_mobile3/Shop/Loves/imgTitleInfo?query={"user_id":' + this.id_num + '}')
            .then(function (respon) {
              if (respon.data.result == false){
                now_this.go_now=true
              }
            /*  if(respon.data.list.is_pass == 2){
                now_this.isnt_pass=respon.data.list
              }*/
            /*  if (respon.data.list.is_pass ==0){
                now_this.show_myhead_modul=true
              }*/
        })

        }else {
          now_this.go_now=true
        }

      },
      methods:{
        getCookie:function(user_id){
          if (document.cookie.length>0)
          {
            var c_start=document.cookie.indexOf(user_id + "=")
            if (c_start!=-1)
            {
              c_start=c_start + user_id.length+1
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
        myheads_step(){

        },
        not_pass_img(){
          this.step3=true


        }
      ,
        isShow(){
            this.show=!this.show //点击立即上传成功触发的上传框显示
          this.go_now=false //点击立即上传成功触发立即上传隐藏
        },
        head_Show(){
          this.show_myhead_modul=!this.show_myhead_modul//我的照片详情
          this.go_now=true
        },
        my_headchange(){
          this.show=!this.show
        },
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

</style>
