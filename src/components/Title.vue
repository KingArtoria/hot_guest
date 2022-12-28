<template>
  <view class="title">
    <view class="title_1" />
    <view class="title_2">{{ title }}</view>
  </view>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  align-items: center;
  padding-left: 11rpx;
  padding-top: 24rpx;
  padding-bottom: 24rpx;
  background: #fff;
  .title_1 {
    margin-right: 11rpx;
    width: 6rpx;
    height: 25rpx;
    background: #1f73f1;
  }
  .title_2 {
    font-size: 30rpx;
    font-family: PingFang SC;
    font-weight: 500;
    color: #414141;
  }
}
</style>
