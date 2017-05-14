<template>
  <div class="wrap-solorank">
    <div class="honor":style="{background: 'url(' + honor_bg + ') no-repeat',backgroundSize:'100% 100%'}">福建省用户爱心排行</div>
    <div class="solorank-title clearfix">
      <div class="input-box">
        <img src="../../assets/images/search.png" alt="" class="search">
        <input type="text" placeholder="输入用户编码" v-model="user_code">
        <img src="../../assets/images/close.png" alt="" class="close" @click="clearValue">
        <button class="search_btn" @click="search">搜索</button>
      </div>
      <div class="pre-next">
        <span @click="previous" class="next" :class="{next1:pre_color}"><&nbsp;上一页</span>
        <span class="next" @click="next" :class="{next1:next_color}">下一页&nbsp;></span>
      </div>
    </div>
    <div class="solorank-list" >
      <dl class="solorank-item clearfix" v-for="(item, index) in listImgTitle"   >
        <dt>
          <img  v-if="item.ranking==1" :src='src[0]'  alt="">
          <img  v-if="item.ranking==2" :src='src[1]'  alt="">
          <img  v-if="item.ranking==3" :src='src[2]'  alt="">
        <p v-if="item.ranking > 3" > {{item.ranking}}</p>
        </dt>
        <dd class="header-img">
          <img :src="item.user_img" alt="">
        </dd>
        <dd class="solorank-name" v-text="item.username">

        </dd>
        <dd class="solorank-num">
          编号：<span v-text="item.user_code"></span>
        </dd>
        <dd class="solorank-work">
          <img :src="item.imageurl" alt="" @click="show_big(item.imageurl,item.title)">
        </dd>
        <dd class="solorank-money">
          捐献：¥<span v-text="item.money"></span>
        </dd>
        <dd class="solorank-xin">
          <!--  <img src="" alt="">-->
          <vue-star animate="animated rubberBand" color="#F05654" >
            <a slot="icon" class="iconfont icon-xin" @click="open1(item.is_likes,item.img_id)"  v-if="item.is_likes==0">&#xe678;</a>
            <a slot="icon" class="iconfont icon-xin" @click="open1(item.is_likes,item.img_id)" v-if="item.is_likes==1" :plain="true">&#xe605;</a>
          </vue-star>
        </dd>
        <dd class="solorank-xin-num" v-text="item.likes">

        </dd>
      </dl>
    </div>
    <div class="pre-next bot_btn">
      <span @click="previous" class="next" :class="{next1:pre_color}"><&nbsp;上一页</span>
      <span class="next" @click="next" :class="{next1:next_color}">下一页&nbsp;></span>
    </div>
    <div  class="detail_img" v-if="detail_img">
      <div class="cover"></div>
      <h1 class="img-title" v-text="detail_title"></h1>
      <img :src="bigSrc">
      <img src="../../assets/images/close.png" alt="" class="close_detail_img" @click="detail_img=false">
    </div>
  </div>
</template>
<script>
  import VueStar from 'vue-star'
  import { Message } from 'element-ui'
  import axios from 'axios';
  export default {
    data () {
      return {
        pre_color:true,
        detail_img:false,
        next_color:false,
        total:"",
        detail_title:"",
        user_code:"",
        page:"1",
        id_num:"",
        pageSize:"4",
        issearch:false,
        honor_bg:require("../../assets/images/honor.png"),
        listImgTitle:[],
        src: [require('../../assets/images/first.png'),require('../../assets/images/second.png'),require('../../assets/images/third.png')]
      }
    },
    components: {
      VueStar,
      Message
    },
    created(){
      var now_this=this

      console.log(this.$route.query.address)
      this.id_num=this.getCookie("user_id")
      axios({
        method: 'get',
        url: 'http://192.168.1.25/gxw_mobile3/Shop/Loves/listImgTitleAddRank?query={"user_id":' + '"'+ this.id_num +'"'+ ',"address":'+'"'+ this.$route.query.address+'"' +',"page":'+'"'+ this.page+'"'+',"pageSize":'+'"'+this.pageSize+'"'+"}",
      }).then(function (res) {
        now_this.listImgTitle=res.data.list
        now_this.total=res.data.totalpage
        if(res.data.totalpage==1){
          now_this.next_color=true
        }
      })

    }

    ,
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
      //清除
      clearValue(){
        if(this.issearch==true){
          var now_this=this
          axios.get('http://192.168.1.25/gxw_mobile3/Shop/Loves/listImgTitleAddRank?query={"user_id":' + '"'+ this.id_num +'"'+ ',"address":'+'"'+ this.$route.query.address+'"' +',"page":'+'"'+ this.page+'"'+',"pageSize":'+'"'+this.pageSize+'"'+"}")
            .then(function (res) {
              now_this.listImgTitle=res.data.list
              now_this.issearch=false
              if(res.data.totalpage==1){
                now_this.next_color=true
              }
            })
        }
        this.user_code=""
      },

      //点赞
      open1(val,id) {
        if(val==0){
          var now_this=this
          axios({
            method: 'post',
            url: 'http://192.168.1.25/gxw_mobile3/Shop/Loves/likesImgTitle',
            data:'query={"user_id":' + '"'+ this.id_num +'"'+ ',"img_id":'+'"'+ id+'"'+ "}",
          }).then(function (res) {
            if(res.data.result==true){
              axios.get('http://192.168.1.25/gxw_mobile3/Shop/Loves/imgTitleInfo?query={"user_id":' +now_this.id_num + '}')
                .then(function (respond){
                  now_this.listImgTitle =respond.data.list
                })
              Message({
                message: '恭喜你，点赞成功',
                type: 'success'
              });
            }else{
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
      },

      //搜索
      search(){
        var now_this=this
        if(this.user_code!=""){
          axios.get('http://192.168.1.25/gxw_mobile3/Shop/Loves/listImgTitleAddRank?query={"user_id":'+'"'+ this.id_num+'"' + ',"search":'+'"'+ this.user_code+'"'+ ',"address":'+'"'+ this.$route.query.address +'"'+ '}')
            .then(function (res) {
              if(res.data.result==true){
                now_this.listImgTitle=res.data.list
                now_this.issearch=true
              }else {
                now_this.listImgTitle=""
                now_this.issearch=true
                Message({
                  message: '暂无数据',
                  type: 'warning'
                });
              }
            })
        }else {
          Message({
            message: '请输入用户编码',
            type: 'warning'
          });
        }
      },
      //上一页
      previous(){
        if(this.issearch!=true){
          var now_this=this
          if(this.page==1){
            this.pre_color=true
          }else {
            axios({
              method: 'get',
              url: 'http://192.168.1.25/gxw_mobile3/Shop/Loves/listImgTitleAddRank?query={"user_id":' + '"'+ this.id_num +'"'+ ',"address":'+'"'+ this.$route.query.address+'"' + ',"page":'+'"'+(parseInt(this.page)-1)+'"'+',"pageSize":'+'"'+this.pageSize+'"'+"}",
            }).then(function (res) {
              now_this.listImgTitle=res.data.list
              now_this.page=(parseInt(now_this.page)-1)
              if(now_this.page==1){
                now_this.pre_color=true
              }
              now_this.next_color=false
            })
          }
        }else {
          this.pre_color=true
        }

      },
      //下一页
      next(){
        var now_this=this
        if(this.issearch!=true) {
          if (this.page == this.total) {
          } else {
            axios({
              method: 'get',
              url: 'http://192.168.1.25/gxw_mobile3/Shop/Loves/listImgTitleAddRank?query={"user_id":' + '"' + this.id_num+'"'+ ',"address":'+'"'+ this.$route.query.address+'"' + ',"page":' + '"' + (parseInt(this.page) + 1) + '"' + ',"pageSize":' + '"' + this.pageSize + '"' + "}",
            }).then(function (res) {
              now_this.listImgTitle = res.data.list
              now_this.page = (parseInt(now_this.page) + 1)
              if(now_this.page==now_this.total){
                now_this.next_color=true
              }
                now_this.pre_color=false
            })
          }
        }else {
          Message({
            message: '内容已显示无下一页',
            type: 'warning'
          })
        }

      },
      //看大图
      show_big(val,title){
        this.bigSrc=val
        this.detail_title=title
        this.detail_img=true

      }




    },
    props: [],
    filters: {
      getdlb (val) {
        // console.log(val.toString().length)
        if (val.toString().length === 1) {
          return '0' + val
        }
      }
    }
  }
</script>
<style lang="scss" >
  @import 'provice_page.scss';
  @font-face {
    font-family: 'iconfont';  /* project id 297323 */
    src: url('//at.alicdn.com/t/font_xdxczsl8kgshsemi.eot');
    src: url('//at.alicdn.com/t/font_xdxczsl8kgshsemi.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_xdxczsl8kgshsemi.woff') format('woff'),
    url('//at.alicdn.com/t/font_xdxczsl8kgshsemi.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_xdxczsl8kgshsemi.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:28px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    color: #D83333}
</style>
