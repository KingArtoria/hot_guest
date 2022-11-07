<template>
  <view>
    <view class="corporate" @click="goInfo(item)" :style="`margin-bottom:${marginBottom};${border ? 'border-bottom:1rpx solid #e8e8ed' : ''}`" v-for="(item, index) in corporate" :key="index">
      <view class="corporate_1">
        <view class="corporate_1_1">{{ item.logo }}</view>
        <view class="corporate_1_2">
          <view class="corporate_1_2_1" v-html="item.companyName" />
          <view class="corporate_1_2_2">
            <text class="corporate_1_2_2_1">{{ item.com_state }}</text>
            <text class="corporate_1_2_2_2">{{ item.com_type }}</text>
            <text class="corporate_1_2_2_3">{{ item.industry }}</text>
          </view>
        </view>
      </view>
      <view class="corporate_2">
        <view class="corporate_2_1">
          <view class="corporate_2_1_1">{{ item.com_legal }}</view>
          <view class="corporate_2_1_2">法定代表人</view>
        </view>
        <view class="corporate_2_1">
          <view class="corporate_2_1_3">{{ item.registered_capital }}</view>
          <view class="corporate_2_1_2">注册资本</view>
        </view>
        <view class="corporate_2_1">
          <view class="corporate_2_1_3">{{ item.regist_date || item.regis_date }}</view>
          <view class="corporate_2_1_2">成立时间</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    marginBottom: {
      type: String,
      default: '11rpx',
    },
    border: {
      type: Boolean,
      default: false,
    },
    corporate: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    goInfo(item) {
      uni.navigateTo({
        url: `/pages/enterprise/info?company=${item.company}`,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.corporate {
  background: #fff;
  .corporate_1 {
    width: 750rpx;
    display: flex;
    padding: 36rpx 0 0 30rpx;
    .corporate_1_1 {
      border-radius: 10rpx;
      width: 88rpx;
      height: 88rpx;
      background: #6ab68b;
      font-size: 28rpx;
      font-family: PingFang SC;
      font-weight: 500;
      color: #ffffff;
      line-height: 44rpx;
      padding-left: 8rpx;
      padding-right: 8rpx;
      box-sizing: border-box;
      text-align: center;
      margin-right: 25rpx;
      flex-shrink: 0;
    }
    .corporate_1_2 {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      .corporate_1_2_1 {
        font-size: 36rpx;
        font-family: PingFang SC;
        font-weight: 500;
        color: #333333;
        line-height: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .corporate_1_2_2 {
        display: flex;
        margin-top: 20rpx;
        .corporate_1_2_2_1 {
          padding: 0 11rpx;
          height: 40rpx;
          background: #eef8ff;
          border-radius: 4rpx;
          font-size: 24rpx;
          font-family: PingFang SC;
          font-weight: 500;
          color: #0d86ff;
          line-height: 40rpx;
          text-align: center;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          width: 70rpx;
        }
        .corporate_1_2_2_2 {
          max-width: 350rpx;
          padding: 0 11rpx;
          height: 40rpx;
          background: #e6fff3;
          border-radius: 4rpx;
          font-size: 24rpx;
          font-family: PingFang SC;
          font-weight: 500;
          color: #35ae6a;
          line-height: 40rpx;
          text-align: center;
          margin: 0 16rpx;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .corporate_1_2_2_3 {
          max-width: 116rpx;
          padding: 0 11rpx;
          height: 40rpx;
          background: #fff1ea;
          border-radius: 4rpx;
          font-size: 24rpx;
          font-family: PingFang SC;
          font-weight: 500;
          color: #ef6a2c;
          line-height: 40rpx;
          text-align: center;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
  .corporate_2 {
    height: 136rpx;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .corporate_2_1 {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: calc(750rpx / 3);
      .corporate_2_1_1 {
        font-size: 28rpx;
        font-family: PingFang SC;
        font-weight: 500;
        color: #e24e30;
        line-height: 1;
        margin-bottom: 20rpx;
      }
      .corporate_2_1_2 {
        font-size: 24rpx;
        font-family: PingFang SC;
        font-weight: 500;
        color: #999999;
        line-height: 1;
      }
      .corporate_2_1_3 {
        text-align: center;
        font-size: 28rpx;
        margin-bottom: 20rpx;
        font-family: PingFang SC;
        font-weight: 500;
        color: #333333;
        width: calc(750rpx / 3);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
