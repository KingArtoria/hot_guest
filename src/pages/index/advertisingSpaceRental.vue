<template>
  <view>
    <view class="content">
      <!-- 头部 -->
      <view class="content_1">
        <image class="content_1_1" src="http://39.106.208.234/pic/img_/back_bs.png" @click="goBack" />
      </view>
      <!-- 表单 -->
      <view class="content_2">
        <view class="content_2_1">
          <view class="content_2_1_1">企业名称：</view>
          <view class="content_2_1_2">
            <u--input placeholder="请输入企业名称" fontSize="26rpx" />
          </view>
        </view>
        <view class="content_2_1">
          <view class="content_2_1_1">企业名称：</view>
          <view class="content_2_1_2">
            <u--input placeholder="请输入企业名称" fontSize="26rpx" />
          </view>
        </view>
        <view class="content_2_1">
          <view class="content_2_1_1">企业名称：</view>
          <view class="content_2_1_2">
            <u--input placeholder="请输入企业名称" fontSize="26rpx" />
          </view>
        </view>
        <view class="content_2_1">
          <view class="content_2_1_1">企业名称：</view>
          <view class="content_2_1_2">
            <u--input placeholder="请输入企业名称" fontSize="26rpx" />
          </view>
        </view>
        <view class="content_2_1">
          <view class="content_2_1_1">企业名称：</view>
          <view class="content_2_1_2">
            <u--input placeholder="请输入企业名称" fontSize="26rpx" />
          </view>
        </view>
        <view class="content_2_1">
          <view class="content_2_1_1">企业名称：</view>
          <view class="content_2_1_2">
            <u--input placeholder="请输入企业名称" fontSize="26rpx" />
          </view>
        </view>
      </view>
      <!-- 提交按钮 -->
      <view class="content_3">提交</view>
      <!-- 友情提示 -->
      <view class="content_4">提交完成后请耐心等待客服与您联系</view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    goBack() {
      uni.navigateBack();
    },
  },
};
</script>

<style lang="scss" scoped>
@import './advertisingSpaceRental.scss';
</style>
