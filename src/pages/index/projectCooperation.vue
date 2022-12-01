<template>
  <view>
    <!-- 返回 -->
    <image class="head" :src="`${_url}black_icon_w.png`" />
    <!-- 内容 -->
    <view class="content">
      <!-- 图示 -->
      <image class="content_1" :src="`${_url}bg-xmhz.png`" />
      <!-- 标题 -->
      <view class="content_2">- 期待与您合作 -</view>
      <!-- 表单 -->
      <view class="content_3">
        <!-- key -->
        <view class="content_3_1">* 项目名称</view>
        <!-- value -->
        <u-input
          placeholder="请输入内容"
          fontSize="26rpx"
          style="padding: 0 14rpx; height: 90rpx; width: 690rpx"
        />
        <!-- key -->
        <view class="content_3_1">* 项目详情</view>
        <!-- value -->
        <u--textarea
          placeholder="请输入内容"
          style="
            padding: 30rpx 14rpx;
            min-height: 90rpx;
            width: 690rpx;
            line-height: 38rpx;
          "
          maxlength="-1"
          autoHeight
        />
        <!-- key -->
        <view class="content_3_1">* 姓名</view>
        <!-- value -->
        <u-input
          placeholder="请输入内容"
          fontSize="26rpx"
          style="padding: 0 14rpx; height: 90rpx; width: 690rpx"
        />
        <!-- key -->
        <view class="content_3_1">* 联系方式</view>
        <!-- value -->
        <u-input
          placeholder="请输入内容"
          fontSize="26rpx"
          style="padding: 0 14rpx; height: 90rpx; width: 690rpx"
        />
        <!-- 提交按钮 -->
        <view class="content_3_2">提交合作</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "./projectCooperation.scss";
</style>