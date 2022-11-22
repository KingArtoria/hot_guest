<template>
  <view>
    <Head title="平台交易" />
    <view class="content">
      <image class="content_1" src="http://39.106.208.234/pic/img_/zijinjybz.webp" mode="widthFix" />
    </view>
    <!-- 提交按钮 -->
    <view class="btn">
      <view class="btn_1" @click="contactPopupShow = true">联系客服</view>
      <view class="btn_2" @click="toPlatformTransaction">我要担保</view>
    </view>
    <!-- 客服弹窗 -->
    <u-popup mode="center" :show="contactPopupShow" round="20rpx" @close="contactPopupShow = false">
      <!-- 弹窗盒子 -->
      <view class="contactPopup">
        <!-- 电话 -->
        <view class="contactPopup_1">
          <!-- 客服电话 -->
          <text style="color: #212121">客服电话：</text>
          <!-- 电话号码 -->
          <text style="color: #005eff">18511169119</text>
        </view>
        <!-- 微信 -->
        <view class="contactPopup_1">
          <!-- 客服微信 -->
          <text style="color: #212121">客服微信：</text>
          <!-- 微信号码 -->
          <text style="color: #005eff">lingjiangkeji003</text>
        </view>
        <!-- 客服二维码 -->
        <image class="contactPopup_3" src="http://39.106.208.234/pic/img_/rwmsw.png" />
        <!-- 小提示 -->
        <view class="contactPopup_4">（客服微信）</view>
      </view>
    </u-popup>
  </view>
</template>

<script>
import Head from '../../components/Head';
export default {
  data() {
    return {
      // 客服弹窗
      contactPopupShow: false,
    };
  },
  methods: {
    // 前往平台担保
    toPlatformTransaction() {
      uni.navigateTo({
        url: '/pages/index/platformTransaction',
      });
    },
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import './tradingRules.scss';
</style>
