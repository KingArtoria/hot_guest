<template>
  <view>
    <view class="content">
      <view class="content_1">
        <view class="content_1_2">
          <image class="content_1_2_1" src="http://39.106.208.234/pic/img_/cjzd.png" />
        </view>
        <view class="content_1_1">
          <view class="content_1_1_1">
            <image class="content_1_1_1_1"
              src="https://admin.bdhuoke.com//upload/20220808/687f5fda3f9928dd941c0409dad7270a.png" />
            <view class="content_1_1_1_2">不挑食的张可爱</view>
            <view class="content_1_1_1_3" />
            <view class="content_1_1_1_4">运营经理</view>
          </view>
          <view class="content_1_1_2">
            12312312312333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
          </view>
          <view class="content_1_1_3">时间&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我是公司名字</view>
          <view class="content_1_1_4">
            <view class="content_1_1_4_1">
              <view class="content_1_1_4_1_1">日结</view>
              <view class="content_1_1_4_1_1">结算方式：CPC</view>
              <view class="content_1_1_4_1_1">网推</view>
            </view>
            <view class="content_1_1_4_2">广告甲方</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.content {
  width: 710rpx;
  margin: 0 auto;
  margin-bottom: 15rpx;
  background: #fff;

  .content_1_2 {
    height: 57rpx;
    background: #E1EDFF;
    border-radius: 9rpx 9rpx 0px 0px;
    padding-left: 22rpx;
    display: flex;
    align-items: center;

    .content_1_2_1 {
      width: 100rpx;
      height: 23rpx;
    }
  }

  .content_1_1 {
    padding: 13rpx 17rpx 18rpx 25rpx;

    .content_1_1_1 {
      display: flex;
      align-items: center;

      .content_1_1_1_1 {
        width: 40rpx;
        height: 40rpx;
        border-radius: 20rpx;
        margin-right: 11rpx;
      }

      .content_1_1_1_2 {
        font-size: 24rpx;
        font-family: PingFang SC;
        font-weight: 500;
        color: #B957FD;
        line-height: 1;
      }

      .content_1_1_1_3 {
        margin: 0 14rpx;
        width: 1rpx;
        height: 20rpx;
        background: #CFCFCF;
      }

      .content_1_1_1_4 {
        font-size: 24rpx;
        font-family: PingFang SC;
        font-weight: 500;
        color: #A4A4A4;
        line-height: 1;
      }
    }

    .content_1_1_2 {
      margin-top: 15rpx;
      font-size: 30rpx;
      font-family: PingFang SC;
      font-weight: 500;
      color: #1A1A1A;
      line-height: 40rpx;
      word-break: break-all;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }

    .content_1_1_3 {
      margin-top: 24rpx;
      font-size: 22rpx;
      font-family: PingFang SC;
      font-weight: 500;
      color: #A4A4A4;
      line-height: 1;
    }

    .content_1_1_4 {
      margin-top: 20rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .content_1_1_4_1 {
        display: flex;

        .content_1_1_4_1_1 {
          height: 31rpx;
          border: 1rpx solid #7C7C7C;
          border-radius: 3rpx;
          padding: 0 18rpx;
          font-size: 22rpx;
          font-family: PingFang SC;
          font-weight: 500;
          color: #7C7C7C;
          margin-right: 22rpx;
          display: flex;
          align-items: center;
          juccy-content: center;
        }
      }

      .content_1_1_4_2 {
        width: 113rpx;
        height: 38rpx;
        background: #EBF3FF;
        border: 1rpx solid #1F73F1;
        border-radius: 5rpx;
        text-align: center;
        line-height: 38rpx;
        font-size: 22rpx;
        font-family: PingFang SC;
        font-weight: 500;
        color: #1F73F1;
      }
    }
  }
}
</style>