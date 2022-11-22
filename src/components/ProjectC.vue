<template>
  <view style="background: #f6f6f6">
    <view class="content" v-for="(item, index) in data" :key="index" @click="goProjectDetail(item.id)">
      <view class="content_1">{{ item.title }}</view>
      <!-- 分割线 -->
      <view class="content_2" />
      <view class="content_3">{{ item.addtime }}</view>
    </view>
  </view>
</template>

<script>
import { addFriend } from '../utils/api';
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    // 前往项目详情
    goProjectDetail(id) {
      uni.navigateTo({
        url: `/pages/index/info?id=${id}`,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  padding: 21rpx 31rpx 21rpx 21rpx;
  background: #fff;
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
    height: 1rpx;
    background: #f6f6f6;
    margin: 22rpx 0;
  }
  .content_3 {
    font-size: 22rpx;
    font-family: PingFang SC;
    font-weight: 400;
    color: #929292;
    line-height: 1;
    text-align: right;
  }
}
</style>
