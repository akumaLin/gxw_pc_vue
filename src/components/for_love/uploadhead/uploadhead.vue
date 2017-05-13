<template>
  <div class="wrap-uploadhead" v-loading.body="loading2"
       :element-loading-text="up_text_info">
    <span class="close" @click="close">X</span>
    <textarea name="" v-model="text" placeholder="输入您的标题，不超过20个字..." maxlength="20" class="text" ></textarea>
    <span v-text="`${length}/20`" class="word-num"></span>
    <h2>上传照片</h2>
    <!-- <div class="img-box clearfix">
         <div class="img-item">

         </div>
     </div>-->
    <el-upload
      class="avatar-uploader up_img"
      action="#"
      :show-file-list="false"
      :file-list="fileList"
      :auto-upload="false"
      :on-change="onChange"
      ref="upload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar up_img">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>


    <div class="upload-area clearfix">
      <p class="pro_my">所在省份></p>
      <v-distpicker only-province  :placeholders="placeholders"  @selected="onSelected"></v-distpicker>
      <!--<div class="null-div_pro"></div>-->
    </div>
    <div class="uploadnow" @click="submitUpload">
      立即上传
    </div>


    <span class="lizi">范例</span>
    <carousel-3d :autoplay="true" :space="400" :border="0" :width="266" :height="198">
      <slide :index="index" :key="index" v-for="(item, index) in src">
        <img :src="item" width="100%" height="100%">
      </slide>
      <!-- <slide :index="1">
        <img src="../assets/02.png" >
      </slide>
      <slide :index="2">
        <img src="../assets/03.png" >
      </slide>
      <slide :index="3">
        <img src="../assets/04.png" >
      </slide> -->
    </carousel-3d>
  </div>
</template>
<script>
  import {Carousel3d, Slide} from 'vue-carousel-3d';
  import VDistpicker from 'v-distpicker'
  import axios from 'axios';
  export default {
    data () {
      return {
        /*  action:"https://jsonplaceholder.typicode.com/posts/",*/
        province: "请选择省份",
        up_text_info: "图片上传中",
        fileList: [],
        placeholders: {
          province: '请选择省份',

        },
        imageUrl: 0,
        outUrl:"",
        loading2: false,
        text: '',
        src: [require('../../../assets/images/01.png'), require('../../../assets/images/02.png'), require('../../../assets/images/03.png'), require('../../../assets/images/04.png')]
      }
    },
    props: ["id_num"],
    created(){


    },


    methods: {
      onSelected(val){
        this.provinces=val.province
      }
      ,
      onChange(file, fileList){
        var now_this=this
        this.convertImgToBase64(file.url, function(base64Img){
          now_this.imageUrl=base64Img
          now_this.outUrl=encodeURIComponent(now_this.imageUrl)
       /*   alert(now_this.outUrl)*/
        });

      },
      submitUpload() {
          if(this.imageUrl==0){
              return 0
          }else {
            this.loading2 = true
            var now_this=this
            axios({
              method: 'post',
              url: 'http://192.168.1.25/gxw_mobile3/Shop/Loves/addImgTitle',
              data:'query={"user_id":' + '"'+ this.id_num +'"'+ ',"image":'+'"'+ this.outUrl+'"'+',"address":'+'"'+this.provinces+'"'+',"title":'+'"'+this.text+'"'+ "}",
            }).then(function (res) {
                  now_this.up_text_info = res.data.message
                  setTimeout(function () {
                    now_this.loading2 = false
                    now_this.$emit('closeupload')
                    now_this.$emit("myhead")
                  }, 2000)
            })
          }


      },
      close () {
        this.$emit('closexxx')
      },
      convertImgToBase64(url, callback, outputFormat){
        var canvas = document.createElement('CANVAS'),
          ctx = canvas.getContext('2d'),
          img = new Image;
        img.crossOrigin = 'Anonymous';
        img.onload = function () {
          canvas.height = img.height;
          canvas.width = img.width;
          ctx.drawImage(img, 0, 0);
          var dataURL = canvas.toDataURL(outputFormat || 'image/png');
          callback.call(this, dataURL);
          canvas = null;
        };
        img.src = url;
      }
    },
    computed: {
      length () {
        return 20 - this.text.length
      }
    },
    components: {
      Carousel3d,
      Slide,
      VDistpicker
    }
  }
</script>
<style lang="scss" scoped>
  @import './uploadhead.scss';
</style>
