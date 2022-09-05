<template>
  <view>

    <Head title="签到中心" />
    <view class="content">
      <!-- 签到信息 -->
      <view class="content_1">
        <view class="content_1_1">签到规则</view>
        <view class="content_1_2">2022年已连续签到</view>
        <view class="content_1_3">
          <view class="content_1_3_1">
            <view class="content_1_3_1_1">0</view>
            <view class="content_1_3_1_1">0</view>
            <view class="content_1_3_1_1">2</view>
          </view>
          <view class="content_1_3_2">天</view>
        </view>
        <view class="content_1_4">总积分：1200</view>
      </view>
      <!-- 签到天数 -->
      <view class="content_2">
        <view class="content_2_1">
          <view class="content_2_1_1">
            <view class="content_2_1_1_1">
              <image class="content_2_1_1_1_1" src="http://39.106.208.234/pic/img_/xz_w_g.png" />
            </view>
            <view class="content_2_1_1_2">第1天</view>
          </view>
          <view class="content_2_1_1">
            <view class="content_2_1_1_1">
              <image class="content_2_1_1_1_1" src="http://39.106.208.234/pic/img_/xz_w_g.png" />
            </view>
            <view class="content_2_1_1_2">第2天</view>
          </view>
          <view class="content_2_1_1">
            <view class="content_2_1_1_1">+100</view>
            <view class="content_2_1_1_2">第3天</view>
          </view>
          <view class="content_2_1_1">
            <view class="content_2_1_1_3">+88</view>
            <view class="content_2_1_1_2">第4天</view>
          </view>
          <view class="content_2_1_1">
            <view class="content_2_1_1_3">+88</view>
            <view class="content_2_1_1_2">第5天</view>
          </view>
          <view class="content_2_1_1">
            <view class="content_2_1_1_3">+88</view>
            <view class="content_2_1_1_2">第6天</view>
          </view>
          <view class="content_2_1_1">
            <view class="content_2_1_1_4">
              <image class="content_2_1_1_4_1" src="http://39.106.208.234/pic/img_/libao.png" />
            </view>
            <view class="content_2_1_1_2">第7天</view>
          </view>
        </view>
        <view class="content_2_2">签到</view>
      </view>
      <!-- 积分兑换 -->
      <view class="content_3">
        <view class="content_3_1">
          <view class="content_3_1_1">积分兑换</view>
          <view class="content_3_1_2" @click="goExchangeRecords">
            <view class="content_3_1_2_1">兑换记录</view>
            <image class="content_3_1_2_2" src="http://39.106.208.234/pic/img_/jinr.png" />
          </view>
        </view>
        <view class="content_3_2">
          <Props v-for="(item, index) in props" :key='index' :item="item" />
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head'
import Props from '../../components/Props'
import { PROPS_IMG } from '../../utils/const'
export default {
  data() {
    return {
      // 道具卡
      props: []
    }
  },
  methods: {
    // 初始化参数
    initParams() {
      this.props = PROPS_IMG
    },
    // 前往兑换记录
    goExchangeRecords() {
      uni.navigateTo({
        url: '/pages/index/exchangeRecords'
      })
    }
  },
  onLoad() {
    // 初始化参数
    this.initParams()
  },
  components: { Head, Props }
}
</script>
<style lang="scss" scoped>
@import './check.scss';
</style>