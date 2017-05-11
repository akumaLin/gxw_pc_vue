<template>
    <div class="wrap-solorank">
        <div class="solorank-title clearfix">
            <div class="input-box">
                <img src="../../../assets/images/search.png" alt="" class="search">
                <input type="text" placeholder="输入用户编码" v-model="user_code">
                <img src="../../../assets/images/close.png" alt="" class="close" @click="clearValue">
                <button class="search_btn">搜索</button>
            </div>
            <div class="pre-next">
                <span><&nbsp;上一页</span>
                <span class="next">下一页&nbsp;></span>
            </div>
        </div>
        <div class="solorank-list" >
            <dl class="solorank-item clearfix" v-for="(item, index) in soloranklist">
                <dt>
                    <img  v-if="index <= 2" :src='src[index]'  alt="">
                    <p v-if="index > 2" >{{ (index + 1) | getdlb}}</p>
                </dt>
                <dd class="header-img">
                    <img src="" alt="">
                </dd>
                <dd class="solorank-name">
                    Rosalie Romero
                </dd>
                <dd class="solorank-num">
                    编号：848474
                </dd>
                <dd class="solorank-work">
                    <img src="" alt="">
                </dd>
                <dd class="solorank-money">
                    捐献：¥3.5
                </dd>
                <dd class="solorank-xin">
                  <!--  <img src="" alt="">-->
                  <vue-star animate="animated rubberBand" color="#F05654" v-if="false">
                    <a slot="icon" class="iconfont icon-xin" @click="handleClick">&#xe678;</a>
                  </vue-star>
                  <vue-star animate="animated rubberBand" color="#F05654">
                    <a slot="icon" class="iconfont icon-xin" @click="open" :plain="true">&#xe605;</a>
                  </vue-star>
                </dd>
                <dd class="solorank-xin-num">
                    250
                </dd>
            </dl>
        </div>
    </div>
</template>
<script>
  import VueStar from 'vue-star'
  import { Message } from 'element-ui'
export default {
    data () {
        return {
            user_code:"",
            soloranklist: [
                {xin: true},
                {xin: false},
                {xin: false},
                {xin: false},
                {xin: false}
            ],
            src: [require('../../../assets/images/first.png'),require('../../../assets/images/second.png'),require('../../../assets/images/third.png')]
        }
    },
  components: {
    VueStar,
    Message
  },
     methods:{
       clearValue(){
       this.user_code=""
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
,
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
@import './solorank.scss';
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
