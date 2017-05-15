<template>
    <div class="wrap-provice">
        <div class="provice-title clearfix">
            <div class="provice-pre-next">
                <span @click="previous" class="next_lyx" :class="{next1:pre_color}"><&nbsp;上一页</span>
                <span class="next_lyx" @click="next" :class="{next1:next_color}" >下一页&nbsp;></span>
            </div>
        </div>
        <div class="provice-list">
            <dl class="provice-item clearfix" v-for="(item, index) in listImgTitle"  @click="goSelf(item.address)">
                <dt>
                  <img  v-if="item.ranking==1" :src='src[0]'  alt="">
                  <img  v-if="item.ranking==2" :src='src[1]'  alt="">
                  <img  v-if="item.ranking==3" :src='src[2]'  alt="">
              <p v-if="item.ranking > 3" > {{item.ranking}}</p>
                </dt>
                <dd class="provice-name" v-text="item.address">

                </dd>
                <dd class="provice-join">
                    <p>参与人数:</p>
                     <img src="../../../assets/images/person.png" alt="">
                    <p class="person" v-text="item.num"></p>
                </dd>
                <dd class="provice-zan">
                    <p>集赞总数:</p>
                  <img src="../../../assets/images/xin.png" alt="">
                  <span v-text="item.likes"></span>
                </dd>
                <dd class="provice-donate">
                    <p>总捐献:</p>
                  <img src="../../../assets/images/money.png" alt="">
                    <p class="person" ><span v-text="item.money" class="provice_right_png"></span> </p>
                  <img src="../../../assets/images/right.png" alt=""  class="r_img_go">
                </dd>
            </dl>
        </div>
        <div class="provice-title clearfix">
            <div class="provice-pre-next">
              <span @click="previous" class="next_lyx" :class="{next1:pre_color}"><&nbsp;上一页</span>
              <span class="next_lyx" @click="next" :class="{next1:next_color}" >下一页&nbsp;></span>
            </div>
        </div>
      <p class="provice_info">说明：共享网本次公益活动款项将捐赠给集赞省份排行榜前三个地区。活动数据根据参与用户提交统计。</p>
    </div>
</template>
<script>
  import axios from 'axios';
  import { Message } from 'element-ui'
export default {
    data () {
        return {
          listImgTitle:[],
            next_color:false,
            pre_color:true,
            total:"",
            page:1,
            pageSize:10,

            src: [require('../../../assets/images/first.png'),require('../../../assets/images/second.png'),require('../../../assets/images/third.png')]
        }
    },
    props: [],
    created(){
        var now_this=this
      axios({
        method: 'get',
        url: 'http://192.168.1.25/gxw_mobile3/Shop/Loves/listImgTitle?query={"cate":"2"' + ',"page":'+'"'+ this.page+'"'+',"pageSize":'+'"'+this.pageSize+'"'+"}",
      }).then(function (res) {
        now_this.listImgTitle=res.data.list
        now_this.total=res.data.totalpage
          if(now_this.total==1){
            now_this.next_color=true
          }

      })
    },
    filters: {
        getdlb (val) {
            // console.log(val.toString().length)
            if (val.toString().length === 1) {
                return '0' + val
            }
        }
    },
  methods:{
    previous(){
        var now_this=this
        if(this.page==1){
          now_this.pre_color=true
        }else {
          axios({
            method: 'get',
            url: 'http://192.168.1.25/gxw_mobile3/Shop/Loves/listImgTitle?query={"cate":"2"' + ',"page":'+'"'+ (parseInt(this.page) - 1)+'"'+',"pageSize":'+'"'+this.pageSize+'"'+"}"
          }).then(function (res) {
            now_this.listImgTitle=res.data.list
            now_this.page=(parseInt(now_this.page)-1)
            now_this.next_color=false
            if(now_this.page==1){
              now_this.pre_color=true
            }

          })
        }
    },
    next(){
      var now_this=this
        if (this.page == this.total){
        } else {
          axios({
            method: 'get',
            url: 'http://192.168.1.25/gxw_mobile3/Shop/Loves/listImgTitle?query={"cate":"2"' + ',"page":'+'"'+ (parseInt(this.page) + 1)+'"'+',"pageSize":'+'"'+this.pageSize+'"'+"}"
          }).then(function (res) {
            now_this.listImgTitle = res.data.list
            now_this.page = (parseInt(now_this.page) + 1)
             now_this.pre_color=false
               if(now_this.page==now_this.total){
                 now_this.next_color=true
               }
          })
        }
      },
    goSelf(val){
      let nowThis = this
      let my_href = window.location.href
      let url_index = my_href.lastIndexOf("#")
      if (url_index > -1) {
        var href = my_href.substring(0,url_index +1)

      }
        var a= href+'/provice_page'+'?address='+val
   /*   this.$router.push({ path:'/provice_page', query: { address:val }})*/
       top.location.href= href+'/provice_page'+'?address='+val
    }
  }
}
</script>
<style lang='scss'>
@import './provice.scss';
</style>
