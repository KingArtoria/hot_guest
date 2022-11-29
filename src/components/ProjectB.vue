<template>
  <view>
    <view class="content" @click="goProjectDetail">
      <view class="content_1"> {{ item.title }}</view>
      <view class="content_2"
        >{{ item.addtime }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{
          item.company
        }}</view
      >
      <view class="content_3">
        <view
          class="content_3_1"
          v-for="(item2, index2) in item.k"
          :key="index2"
          >{{ item2 }}</view
        >
      </view>
      <view class="content_4">
        <view class="content_4_1">
          <image class="content_4_1_1" :src="item.head" />
          <view class="content_4_1_2">{{ item.nick_name }}</view>
          <view class="content_4_1_3" />
          <view class="content_4_1_4">{{ item.position }}</view>
        </view>
        <view class="content_4_2">{{ item.typeName }}</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    // 前往项目详细
    goProjectDetail() {
      // 跳转
      uni.navigateTo({
        url: `/pages/index/info?id=${this.item.id}`,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 710rpx;
  background: #ffffff;
  border-radius: 10rpx;
  padding: 24rpx 11rpx 16rpx 25rpx;
  margin: 0 auto;
  margin-bottom: 15rpx;

  .content_1 {
    font-size: 30rpx;
    font-family: PingFang SC;
    font-weight: 500;
    color: #1a1a1a;
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
    color: #a4a4a4;
    line-height: 1;
  }

  .content_3 {
    margin-top: 20rpx;
    display: flex;
    margin-bottom: 15rpx;

    .content_3_1 {
      height: 31rpx;
      border: 1rpx solid #7c7c7c;
      border-radius: 3rpx;
      padding: 0 18rpx;
      font-size: 22rpx;
      font-family: PingFang SC;
      font-weight: 500;
      color: #7c7c7c;
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
        color: #3b3b3b;
        line-height: 1;
      }

      .content_4_1_3 {
        width: 1rpx;
        height: 20rpx;
        background: #cfcfcf;
        margin: 0 12rpx;
      }

      .content_4_1_4 {
        font-size: 24rpx;
        font-family: PingFang SC;
        font-weight: 500;
        color: #a4a4a4;
        line-height: 1;
      }
    }

    .content_4_2 {
      width: 113rpx;
      height: 38rpx;
      background: #ecf3fe;
      border: 1rpx solid #3875e9;
      border-radius: 5rpx;
      font-size: 22rpx;
      font-family: PingFang SC;
      font-weight: 500;
      color: #3875e9;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
