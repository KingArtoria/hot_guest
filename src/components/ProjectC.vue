<template>
  <view>
    <view class="content">
      <view class="content_1">自行车自行车自行车自行车自行车自行车自行车自行车自行车自行车自行车自行车自行车自行车自行车自行车自行车自行车自行车自行车自行车自行车自行车自行车自行车自行车自行车自行车自行车自行车自行车自行车自行车自行车自行车自行车自行车自行车自行车自行车自行车自行车自行车自行车自行车自行车自行车自行车自行车自行车</view>
      <view class="content_3" />
      <view class="content_2">
        <view class="content_2_1">
          <view class="content_2_1_1">日结</view>
          <view class="content_2_1_1" style="margin: 0 22rpx">结算方式：CPS</view>
          <view class="content_2_1_1">地推</view>
        </view>
        <view class="content_2_2">2020-12-25 12:22:11</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.content {
  padding: 44rpx 31rpx 21rpx 21rpx;
  .content_1 {
    font-size: 30rpx;
    font-family: PingFang SC;
    font-weight: 500;
    color: #303030;
    line-height: 40rpx;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .content_2 {
    margin-top: 22rpx;
    display: flex;
    justify-content: space-between;
    .content_2_1 {
      display: flex;
      .content_2_1_1 {
        padding: 10rpx 12rpx;
        font-size: 22rpx;
        font-family: PingFang SC;
        font-weight: 500;
        color: #56689b;
        line-height: 1;
        border-radius: 3rpx;
        background: #f7f7f7;
      }
    }
    .content_2_2 {
      font-size: 22rpx;
      font-family: PingFang SC;
      font-weight: 400;
      color: #929292;
      line-height: 1;
    }
  }
  .content_3 {
    height: 1rpx;
    background: #f6f6f6;
    margin-top: 28rpx;
  }
}
</style>
