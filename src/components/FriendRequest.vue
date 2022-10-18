<template>
  <view class="fr">
    <view class="fr_1">
      <image class="fr_1_1" src="https://admin.bdhuoke.com//upload/20220808/687f5fda3f9928dd941c0409dad7270a.png" />
      <view class="fr_1_2">
        <view class="fr_1_2_1">好友请求：entity</view>
        <view class="fr_1_2_2">杭州阿里巴巴网络科技有限公司&nbsp;&nbsp;&nbsp;&nbsp;商务经理</view>
        <view class="fr_1_2_2">同行3个共同好友</view>
      </view>
    </view>
    <view class="fr_2">
      <view class="fr_2_1" style="margin-right: 32rpx">
        <image class="fr_2_1_1" src="http://39.106.208.234/pic/img_/jujue.png" />
      </view>
      <view class="fr_2_1">
        <image class="fr_2_1_2" src="http://39.106.208.234/pic/img_/tongyi.png" />
      </view>
    </view>
  </view>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.fr {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 170rpx;
  background: #ffffff;
  border-radius: 10rpx;
  padding: 0 32rpx;
  .fr_1 {
    display: flex;
    .fr_1_1 {
      width: 90rpx;
      height: 90rpx;
      border-radius: 45rpx;
      margin-right: 21rpx;
    }
    .fr_1_2 {
      .fr_1_2_1 {
        font-size: 28rpx;
        font-family: PingFang SC;
        font-weight: 500;
        color: #212121;
        line-height: 1;
        margin-bottom: 18rpx;
      }
      .fr_1_2_2 {
        font-size: 24rpx;
        font-family: PingFang SC;
        font-weight: 500;
        color: #8d8d8d;
        line-height: 35rpx;
        width: 286rpx;
      }
    }
  }
  .fr_2 {
    display: flex;
    .fr_2_1 {
      width: 79rpx;
      height: 52rpx;
      background: #f6f6f6;
      border-radius: 26rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      .fr_2_1_1 {
        width: 20rpx;
        height: 20rpx;
      }
      .fr_2_1_2 {
        width: 26rpx;
        height: 20rpx;
      }
    }
  }
}
</style>
