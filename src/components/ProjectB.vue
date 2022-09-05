<template>
  <view>
    <view class="content">
      <view class="content_1">
        12312311111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</view>
      <view class="content_2">08-18 13:21&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;山东菏泽曹县</view>
      <view class="content_3">
        <view class="content_3_1">日结</view>
        <view class="content_3_1">结算方式：CPC</view>
        <view class="content_3_1">网推</view>
      </view>
      <view class="content_4">
        <view class="content_4_1">
          <image class="content_4_1_1"
            src="https://admin.bdhuoke.com//upload/20220808/687f5fda3f9928dd941c0409dad7270a.png" />
          <view class="content_4_1_2">不挑食的张可爱</view>
          <view class="content_4_1_3" />
          <view class="content_4_1_4">运营经理</view>
        </view>
        <view class="content_4_2">广告甲方</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.content {
  width: 710rpx;
  background: #FFFFFF;
  border-radius: 10rpx;
  padding: 24rpx 11rpx 16rpx 25rpx;
  margin: 0 auto;
  margin-bottom: 15rpx;

  .content_1 {
    font-size: 30rpx;
    font-family: PingFang SC;
    font-weight: 500;
    color: #1A1A1A;
    line-height: 40rpx;
    margin-bottom: 24rpx;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .content_2 {
    font-size: 22rpx;
    font-family: PingFang SC;
    font-weight: 500;
    color: #A4A4A4;
    line-height: 1;
  }

  .content_3 {
    margin-top: 20rpx;
    display: flex;
    margin-bottom: 15rpx;

    .content_3_1 {
      height: 31rpx;
      border: 1rpx solid #7C7C7C;
      border-radius: 3rpx;
      padding: 0 18rpx;
      font-size: 22rpx;
      font-family: PingFang SC;
      font-weight: 500;
      color: #7C7C7C;
      display: flex;
      align-items: center;
      margin-right: 22rpx;
    }
  }

  .content_4 {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .content_4_1 {
      display: flex;
      align-items: center;

      .content_4_1_1 {
        width: 40rpx;
        height: 40rpx;
        border-radius: 20rpx;
        margin-right: 11rpx;
      }

      .content_4_1_2 {
        font-size: 24rpx;
        font-family: PingFang SC;
        font-weight: 500;
        color: #3B3B3B;
        line-height: 1;
      }

      .content_4_1_3 {
        width: 1rpx;
        height: 20rpx;
        background: #CFCFCF;
        margin: 0 12rpx;
      }

      .content_4_1_4 {
        font-size: 24rpx;
        font-family: PingFang SC;
        font-weight: 500;
        color: #A4A4A4;
        line-height: 1;
      }
    }

    .content_4_2 {
      width: 113rpx;
      height: 38rpx;
      background: #ECF3FE;
      border: 1rpx solid #3875E9;
      border-radius: 5rpx;
      font-size: 22rpx;
      font-family: PingFang SC;
      font-weight: 500;
      color: #3875E9;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>