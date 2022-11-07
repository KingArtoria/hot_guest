<template>
  <view>
    <view class="lattice">
      <!-- 标题 -->
      <view class="lattice_1">{{ title }}</view>
      <!-- 宫格 -->
      <view class="lattice_2">
        <!-- 单个 -->
        <view class="lattice_2_1" v-for="(item, index) in latticeArray" :key="index">
          <!-- 宫格数量 -->
          <view class="lattice_2_1_1" :style="`color:${labelColor}`">{{ item.num }}</view>
          <!-- 宫格图标 -->
          <image class="lattice_2_1_2" :src="item.src" />
          <!-- 宫格标题 -->
          <view class="lattice_2_1_3">{{ item.title }}</view>
        </view>
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
    latticeArray: {
      type: Array,
      default: () => [],
    },
    labelColor: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.lattice {
  background: #fff;
  .lattice_1 {
    height: 88rpx;
    line-height: 88rpx;
    border-bottom: 1rpx solid #e8e8ed;
    padding-left: 31rpx;
    font-size: 34rpx;
    font-family: PingFang SC;
    font-weight: bold;
    color: #333333;
  }
  .lattice_2 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    .lattice_2_1 {
      height: 190rpx;
      width: 187rpx;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-right: 1rpx solid #ededed;
      border-bottom: 1rpx solid #ededed;
      position: relative;
      .lattice_2_1_1 {
        font-size: 24rpx;
        font-family: PingFang SC;
        font-weight: 500;
        line-height: 1;
        position: absolute;
        right: 16rpx;
        top: 19rpx;
      }
      .lattice_2_1_2 {
        width: 60rpx;
        height: 60rpx;
        margin-bottom: 27rpx;
      }
      .lattice_2_1_3 {
        font-size: 28rpx;
        font-family: PingFang SC;
        font-weight: 500;
        color: #333333;
        line-height: 1;
      }
    }
  }
}
</style>
