<template>
    <div class="wrap-provice">
        <div class="provice-title clearfix">
            <div class="provice-pre-next">
                <span><&nbsp;上一页</span>
                <span class="next">下一页&nbsp;></span>
            </div>
        </div>
        <div class="provice-list">
            <dl class="provice-item clearfix" v-for="(item, index) in provicelist">
                <dt>
                    <img  v-if="index <= 2" :src='src[index]' alt="">
                    <p v-if="index > 2" >{{ (index + 1) | getdlb}}</p>
                </dt>
                <dd class="provice-name">
                    福建省
                </dd>
                <dd class="provice-join">
                    <p>参与人数:</p>
                    <p class="person">87848484</p>
                </dd>
                <dd class="provice-zan">
                    <p>集赞总数:</p>
                    <p class="person">87848484111</p>
                </dd>
                <dd class="provice-donate">
                    <p>集赞总数:</p>
                    <p class="person">87848484111</p>
                </dd>
            </dl>
        </div>
        <div class="provice-title clearfix">
            <div class="provice-pre-next">
                <span><&nbsp;上一页</span>
                <span class="next">下一页&nbsp;></span>
            </div>
        </div>
      <p class="provice_info">说明：共享网本次公益活动款项将捐赠给集赞省份排行榜前三个地区。活动数据根据参与用户提交统计。</p>
    </div>
</template>
<script>
export default {
    data () {
        return {
            provicelist: [
                {xin: true},
                {xin: false},
                {xin: false},
                {xin: false},
                {xin: false}
            ],
            src: [require('../../../assets/images/first.png'),require('../../../assets/images/second.png'),require('../../../assets/images/third.png')]
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
<style lang='scss'>
@import './provice.scss';
</style>
