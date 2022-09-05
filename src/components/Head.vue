<template>
  <view class="head">
    <view class="head_1">
      <image class="head_1_1" src="http://39.106.208.234/pic/img_/black_ss.png" @click="goBack" />
    </view>
    <view class="head_2">{{ title }}</view>
    <view class="head_3">
      <slot name="head_3_1" />
    </view>
  </view>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    }
  },
  methods: {
    goBack() {
      uni.navigateBack();
    },
  },
}
</script>

<style lang="scss" scoped>
.head {
  display: flex;
  justify-content: space-between;
  padding: 0 19rpx;
  align-items: center;
  padding-top: 100rpx;
  padding-bottom: 80rpx;
  position: fixed;
  width: 100%;
  background: #fff;
  z-index: 5;

  .head_1,
  .head_2,
  .head_3 {
    flex: 1;

    .head_1_1 {
      width: 16rpx;
      height: 32rpx;
    }
  }

  .head_2 {
    text-align: center;
    font-size: 36rpx;
    font-family: PingFang SC;
    font-weight: 500;
    color: #2A2A2A;
    line-height: 1;
  }
}
</style>