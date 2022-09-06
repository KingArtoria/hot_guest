<template>
  <view>

    <Head title="名片模板">
      <view slot="head_3_1" :style="slotStyle" @click="goMyCard">我的名片</view>
    </Head>
    <view class="content">
      <!-- 名片选项 -->
      <view class="content_1">
        <view class="content_1_1">横板名片</view>
        <view class="content_1_1">竖版名片</view>
      </view>
      <!-- 名片列表 -->
      <view class="content_2">
        <image class="content_2_1" src="http://39.106.208.234/pic/img_/heng2.jpg" />
        <image class="content_2_1" src="http://39.106.208.234/pic/img_/heng2.jpg" />
        <image class="content_2_1" src="http://39.106.208.234/pic/img_/heng2.jpg" />
        <image class="content_2_1" src="http://39.106.208.234/pic/img_/heng2.jpg" />
        <image class="content_2_1" src="http://39.106.208.234/pic/img_/heng2.jpg" />
      </view>
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head'
export default {
  data() {
    return {
      slotStyle: 'font-size:28rpx;font-weight:500;color: #000;text-align:end;',
    }
  },
  methods: {
    goMyCard() {
      uni.navigateTo({
        url: '/pages/index/myCard'
      })
    }
  },
  components: { Head }
}
</script>

<style lang="scss" scoped>
@import './businessCard.scss';
</style>