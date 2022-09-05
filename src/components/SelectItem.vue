<template>
  <view class="selectItem">
    <view class="selectItem_1" />
    <view class="selectItem_2">
      <view class="selectItem_2_1">我是一个标题哈哈哈哈哈哈哈我是一个标题哈哈哈哈哈哈哈我是一个标题哈哈哈哈哈哈哈我是一个标题哈哈哈哈哈哈哈</view>
      <view class="selectItem_2_2">
        <view class="selectItem_2_2_1">
          <view class="selectItem_2_2_1_1">日结</view>
          <view class="selectItem_2_2_1_1">结算方式：CPS</view>
          <view class="selectItem_2_2_1_1">地推</view>
        </view>
        <view class="selectItem_2_2_2">2020-03-12-24:13:22</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.selectItem {
  width: 710rpx;
  background: #FFFFFF;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding-left: 24rpx;
  padding-right: 41rpx;
  padding-top: 27rpx;
  padding-bottom: 31rpx;

  .selectItem_1 {
    width: 40rpx;
    height: 40rpx;
    border: 2rpx solid #B2B2B2;
    border-radius: 50%;
    margin-right: 31rpx;
  }

  .selectItem_2 {
    flex: 1;

    .selectItem_2_1 {
      font-size: 30rpx;
      font-family: PingFang SC;
      font-weight: 500;
      color: #303030;
      line-height: 40rpx;
      padding-bottom: 15rpx;
      border-bottom: 1rpx solid #f6f6f6;
      margin-bottom: 22rpx;
    }

    .selectItem_2_2 {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .selectItem_2_2_1 {
        display: flex;

        .selectItem_2_2_1_1 {
          height: 41rpx;
          background: #F7F7F7;
          border-radius: 3rpx;
          line-height: 41rpx;
          padding: 0 12rpx;
          font-size: 22rpx;
          font-family: PingFang SC;
          font-weight: 500;
          color: #56689B;
          margin-right: 22rpx;
        }

        .selectItem_2_2_1_1:last-child {
          margin-right: 0;
        }
      }

      .selectItem_2_2_2 {
        font-size: 20rpx;
        font-family: PingFang SC;
        font-weight: 400;
        color: #929292;
      }
    }
  }
}
</style>