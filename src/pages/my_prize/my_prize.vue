<template>
  <div id="my_prize">
    <my_head></my_head>
    <get_card :wordNum="wordNum"></get_card>
    <right_navbar></right_navbar>
    <scores :pointCode="pointCode"></scores>
    <people :shareUser="shareUser"></people>
    <real_prize :prize="prize"></real_prize>
    <coupon :coupon="coupon,timeout"></coupon>
  </div>
</template>
<script type="text/ecmascript-6">
  import axios from 'axios';
  import my_head from "@/components/my_prize/head/my_head.vue"
  import get_card from "@/components/my_prize/get_card/get_card.vue"
  import right_navbar from "@/components/my_prize/right_navbar/right_navbar.vue"
  import scores from "@/components/my_prize/scores/scores.vue"
  import people from "@/components/my_prize/people/people.vue"
  import real_prize from "@/components/my_prize/real_prize/real_prize.vue"
  import coupon from "@/components/my_prize/coupon/coupon.vue"
  export default {
    name: 'my_prize',
    data(){
      return {
        wordNum: "",
        pointCode: "",
        prize: [],
        shareUser: [
          {
            "avatar": "",
            "username": "暂时没有用户"
          }
        ],
        coupon:[],
        timeout:[]
      }
    },
    components: {
      my_head,
      get_card,
      right_navbar,
      scores,
      people,
      real_prize,
      coupon
    },
    created(){
      var nowThis = this
      axios.get('/api/prizes').then(function (response) {
        nowThis.wordNum = response.data.data.list.wordNum
        nowThis.pointCode = response.data.data.list.pointCode.pointNum
        if (response.data.data.list.shareUser.length > 0) {
          nowThis.shareUser = response.data.data.list.shareUser
        }
        if (response.data.data.list.prize.length > 0) {
          nowThis.prize = response.data.data.list.prize;

        }
        nowThis.coupon = response.data.data.list.coupon
        let timestamp = Date.parse(new Date());
        timestamp = timestamp / 1000;
        for (let i = 0; i < nowThis.coupon.length; i++) {
          var endtime = nowThis.coupon[i].use_end_date;
          endtime = endtime.replace(/\-/g, "/");
          endtime = Date.parse(endtime);
          endtime = endtime / 1000;
          let boolean = (timestamp < endtime)
          nowThis.timeout.push(boolean)
        }

      })
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  #my_prize {
    width: 1190px;
    height: auto;
    margin: auto;
  }
</style>
