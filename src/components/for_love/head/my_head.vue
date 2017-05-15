<template>
  <div class="my_info" v-if="info_show">
    <div class="my_info_bg" :style="{background: 'url(' + my_info_bg + ') no-repeat',backgroundSize:'100% 100%'}">
      <div class="header_png"
           :style="{background: 'url(' + imgTitleInfo.user_img + ') no-repeat',backgroundSize:'100% 100%'}"></div>
      <div class="my_info_text">
        <p class="name" v-text="imgTitleInfo.username"></p>
        <p><span>收到赞：<span v-text="imgTitleInfo.likes"></span> </span>
          <span> 捐献：¥ <span v-text="imgTitleInfo.money"></span> </span>
          <span>排名：<span v-text="imgTitleInfo.ranking?imgTitleInfo.ranking:0"></span></span></p>
      </div>
    </div>
    <p class="my_go">我的益行</p>
    <div class="my_go_info" v-if="show_world">
      <p v-text="imgTitleInfo.title">与友骑行，在路上，欣赏沿途风景。</p>
      <img :src="imgTitleInfo.imageurl" alt="" class="img">
      <p>
        <img src="../../../assets/images/position.png" alt="" class="position">
        <span class="provice" v-text="imgTitleInfo.address">福建省</span>
        {{imgTitleInfo.add_time}}
        <span class="delete_my_info" @click="del(imgTitleInfo.img_id)">删除</span>
        <vue-star animate="animated rubberBand" color="#F05654" class="heart">
          <a slot="icon" class="iconfont icon-xin"  v-if="imgTitleInfo.is_likes==1" @click="open(imgTitleInfo.is_likes,imgTitleInfo.img_id)" :plain="true">&#xe605;</a>
          <a slot="icon" class="iconfont icon-xin" v-if="imgTitleInfo.is_likes==0" @click="open(imgTitleInfo.is_likes,imgTitleInfo.img_id)" :plain="true">&#xe678;</a>
        </vue-star>
        <span class="star_heart">点赞<span class="heart_num" v-text="imgTitleInfo.likes"></span></span>
      </p>
    </div>
    <!-- <div class="my_go_info info_mar_top" v-if="false">
       <p>您尚未参加集赞活动哦，快去参加吧</p>
       <button class="go_now">立即参加</button>
     </div>-->
    <div class="change_img_div" v-if="show_step">
      <img :src="step_src" class="step_img" alt="">
      <ul class="step_text">
        <li>提交成功</li>
        <li>审核中</li>
        <li v-text="state_img"></li>
      </ul>
      <p class="warn_false" v-text="warn_false=imgTitleInfo.content" v-if=" change_show"></p>
      <button class="edit-img" @click="changImg" v-if="change_show">修改照片</button>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import axios from 'axios';
  import VueStar from 'vue-star'
  import {Message} from 'element-ui'
  export default {
    name: 'header',
    components: {
      VueStar,
      Message
    },
    props: ["id_num"],
    data(){
      return {
        change_show:true,
        info_show:false,
        show_world: false,
        show_step: false,
        imgTitleInfo: "",
        state_img:"成功发布",
        warn_false: "您的照片太过模糊，请调整后重新上传",
        header_bg: require("../../../assets/images/520adbanner.png"),
        my_info_bg: require("../../../assets/images/my_info_bg.png"),
        header_png: require("../../../assets/images/my_info_bg.png"),
        step_src: require("../../../assets/images/step_two.png"),
      }
    },
    created(){
      if (this.id_num != null) {
        var now_this = this
        axios.get('http://192.168.1.25/gxw_mobile3/Shop/Loves/imgTitleInfo?query={"user_id":' + this.id_num + '}')
          .then(function (res) {
            if (res.data.result == false) {
              now_this.$emit("showMyhead")
            } else {
              now_this.info_show=true
              now_this.imgTitleInfo = res.data.list
              if (res.data.list.is_pass == 1) {
                now_this.show_world = true
              } else if (res.data.list.is_pass == 2) {
                now_this.step_src= require("../../../assets/images/success.png")
                now_this.state_img="审核不通过"
                now_this.show_step = true
                now_this.$emit("again")
              } else if (res.data.list.is_pass == 3) {
                now_this.change_show=false
                now_this.show_step = true
                now_this.warn_false = ""


              }
            }
          })
      } else {
        this.$emit("showMyhead")
      }

    },
    methods: {
      changImg() {
        this.$emit("img_change");
      },
      open(val,id) {

           if(this.id_num!=null){

             if(val==0){
               var now_this=this
               axios({
                 method: 'post',
                 url: 'http://192.168.1.25/gxw_mobile3/Shop/Loves/likesImgTitle',
                 data:'query={"user_id":' + '"'+ this.id_num +'"'+ ',"img_id":'+'"'+ id+'"'+ "}",
               }).then(function (res) {
                 if(res.data.result==true){
                   axios.get('http://192.168.1.25/gxw_mobile3/Shop/Loves/imgTitleInfo?query={"user_id":' +now_this.id_num + '}')
                     .then(function (respon){
                       now_this.imgTitleInfo =respon.data.list
                     })
                   Message({
                     message: '恭喜你，点赞成功',
                     type: 'success'
                   });
                 }else {
                   Message({
                     message: '您已经赞过了',
                     type: 'warning'
                   });
                 }
               })
             }else{
               Message({
                 message: '您已经赞过了',
                 type: 'warning'
               });
             }

           }else {
             top.location.href="http://www.gxw520.cc/user.php?back_act=http://www.gxw520.cc/subject.php?act=love&common_type=1"
           }



        /*
         Message({
         message: '您已赞过对方',
         type: 'warning'
         })*/
      },
      del(val){
          var now_this=this
        axios({
          method: 'post',
          url: 'http://192.168.1.25/gxw_mobile3/Shop/Loves/delImgTitle',
          data:'query={"user_id":' + '"'+ this.id_num +'"'+ ',"img_id":'+'"'+ val+'"'+ "}",
        }).then(function (res) {
                 if(res.data.result==true){
                   Message({
                     message: '删除成功',
                     type: 'success'
                   })
                     now_this.info_show=false
                     now_this.$emit("showMyhead")
                 }
          })
      }
    }

  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "my_head.scss";
</style>
