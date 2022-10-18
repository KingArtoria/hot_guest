<template>
  <view class="head">
    <view class="head__">
      <view class="head_1" @click="goBack">
        <image class="head_1_1" src="http://39.106.208.234/pic/img_/black_ss.png" />
      </view>
      <view class="head_2">{{ title }}</view>
      <view class="head_3">
        <slot name="head_3_1" />
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  methods: {
    goBack() {
      uni.navigateBack();
    },
  },
};
</script>

<style lang="scss" scoped>
.head {
  position: fixed;
  height: 180rpx;
  width: 100%;
  padding: 0 26rpx;
  padding-top: 85rpx;
  background: #fff;
  z-index: 5;
  .head__ {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80rpx;
    .head_1,
    .head_2,
    .head_3 {
      flex: 1;

      .head_1_1 {
        width: 16rpx;
        height: 32rpx;
      }
    }
    .head_3 {
      text-align: end;
    }
    .head_2 {
      text-align: center;
      font-size: 36rpx;
      font-family: PingFang SC;
      font-weight: 500;
      color: #2a2a2a;
      line-height: 1;
    }
  }
}
</style>
