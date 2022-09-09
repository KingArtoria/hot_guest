<template>
  <view>
    <view class="head">
      <view class="head_1">
        <image class="head_1_1" src="http://39.106.208.234/pic/img_/black_icon_w.png" />
      </view>
      <view class="head_2">平台交易</view>
      <view class="head_3">
        <image class="head_3_1" src="http://39.106.208.234/pic/img_/yiwen_ptjy.png" @click="goTradingRules" />
      </view>
    </view>
    <view class="content">
      <!-- 介绍轮播 -->
      <u-swiper :list="list" height="273rpx" radius="0" circular />
      <!-- 选择对象 -->
      <view class="content_1">
        <view class="content_1_1">请选择交易对象</view>
        <image class="content_1_2" src="http://39.106.208.234/pic/img_/xiayiy.png" />
      </view>
      <!-- 买卖关系 -->
      <view class="content_2">
        <Title title="买卖关系" />
        <view class="content_2_1">
          <view class="content_2_1_1">我是付款方</view>
          <view class="content_2_1_2">我是收款方</view>
        </view>
      </view>
      <!-- 担保内容 -->
      <view class="content_3">
        <Title title="担保内容" />
        <view class="content_3_1">
          <view class="content_3_1_1">
            <view class="content_3_1_1_1">合作内容：</view>
            <u--input placeholder="请输入内容" border="none" fontSize="28rpx" />
          </view>
          <view class="content_3_1_1">
            <view class="content_3_1_1_1">对方要求：</view>
            <u--input placeholder="请输入内容" border="none" fontSize="28rpx" />
          </view>
          <view class="content_3_1_1">
            <view class="content_3_1_1_1">结算条件：</view>
            <u--input placeholder="请输入内容" border="none" fontSize="28rpx" />
          </view>
          <view class="content_3_1_1">
            <view class="content_3_1_1_1">其他补充：</view>
            <u--input placeholder="请输入内容" border="none" fontSize="28rpx" />
          </view>
        </view>
      </view>
      <!-- 担保金额 -->
      <view class="content_4">
        <Title title="担保金额" />
        <view class="content_4_1">注：担保金不可以作为业务结算资金进行支付</view>
        <view class="content_4_2">
          <view class="content_4_2_1">￥</view>
          <view class="content_4_2_2" />
          <u--input placeholder="请输入金额" border="none" fontSize="30rpx" />
        </view>
      </view>
    </view>
    <!-- 提交按钮 -->
    <view class="btn">
      <view class="btn_1">
        <u-checkbox-group size="26rpx">
          <u-checkbox shape="circle" />
        </u-checkbox-group>
        <view class="btn_1_1">我已同意</view>
        <view class="btn_1_2">《平台交易协议》</view>
      </view>
      <view class="btn_2">完成</view>
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head';
import Title from '../../components/Title';
export default {
  data() {
    return {
      slotData: 'width:38rpx;height:38rpx;',
      list: ['http://39.106.208.234/pic/img_/ptjy_hzlc.png', 'http://39.106.208.234/pic/img_/ptjy_banner.png'],
    };
  },
  methods: {
    // 前往交易规则
    goTradingRules() {
      uni.navigateTo({
        url: '/pages/index/tradingRules',
      });
    },
  },
  components: { Head, Title },
};
</script>

<style lang="scss" scoped>
@import './platformTransaction.scss';
</style>
