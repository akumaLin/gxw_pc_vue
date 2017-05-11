<template>
  <div class="my_info">
    <div class="my_info_bg" :style="{background: 'url(' + my_info_bg + ') no-repeat',backgroundSize:'100% 100%'}">
      <div class="header_png"
           :style="{background: 'url(' + imgTitleInfo.user_img + ') no-repeat',backgroundSize:'100% 100%'}"></div>
      <div class="my_info_text">
        <p class="name" v-text="imgTitleInfo.username"></p>
        <p><span>收到赞：<span v-text="imgTitleInfo.likes"></span> </span>
          <span> 捐献：¥ <span v-text="imgTitleInfo.money"></span> </span>
          <span>排名：<span v-text="imgTitleInfo.ranking"></span></span></p>
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
          <a slot="icon" class="iconfont icon-xin" @click="open" :plain="true">&#xe605;</a>
        </vue-star>
        <span class="star_heart">点赞<span class="heart_num" v-text="imgTitleInfo.likes">3131</span></span>
      </p>
    </div>
    <div class="my_go_info info_mar_top" v-if="false">
      <p>您尚未参加集赞活动哦，快去参加吧</p>
      <button class="go_now">立即参加</button>
    </div>
    <div class="change_img_div" v-if="show_step">
      <img src="../../../assets/images/step_two.png" class="step_img" alt="">
      <ul class="step_text">
        <li>提交成功</li>
        <li>审核中</li>
        <li>成功发布</li>
      </ul>
      <p class="warn_false">您的照片太过模糊，请调整后重新上传</p>
      <button class="edit-img" @click="changImg">修改照片</button>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import axios from 'axios';
  import VueStar from 'vue-star'
  import { Message } from 'element-ui'
  export default {
    name: 'header',
    components:{
      VueStar,
      Message
    },
    props:["id_num"],
    data(){
      return {
        show_world:false,
        show_step:false,
        imgTitleInfo:"",
        header_bg: require("../../../assets/images/520adbanner.png"),
        my_info_bg: require("../../../assets/images/my_info_bg.png"),
        header_png: require("../../../assets/images/my_info_bg.png")
      }
    },
    created(){

      if(this.id_num!=null){
        var now_this=this
        axios({
          method: 'get',
          /*url: 'http://192.168.1.25/gxw_mobile3/Shop/Loves/imgTitleInfo',*/
          url:"/api/forlove",
          data:'query={"user_id":' + '"'+ this.id_num +'"'+"}"
        }).then(function (res) {
            now_this.imgTitleInfo=res.data.data.list
          if(res.data.data.list.is_pass==1){
            now_this.show_world=true
          }else {

          }

        })


      }

    },
    methods: {
      changImg() {
        this.$emit("showupload1");
      },
      open() {

        Message({
          message: '恭喜你，点赞成功',
          type: 'success'
        });
        /*
         Message({
         message: '您已赞过对方',
         type: 'warning'
         })*/
      }
    }

  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "my_head.scss";
</style>
