<template>
  <view class="props">
    <view class="props_1">
      <image class="props_1_1" :src="item.src" />
    </view>
    <view class="props_2">
      <view class="props_2_1">
        <view class="props_2_1_1">{{ item.name }}</view>
        <view class="props_2_1_2">{{ item.info }}</view>
        <view class="props_2_1_3" v-if="type == 1">{{ item.num }}</view>
        <view class="props_2_1_4" v-if="type == 2">{{ item.num }}</view>
        <view class="props_2_1_5" v-if="type == 3">{{ item.num }}</view>
      </view>
      <view class="props_2_2" v-if="type == 1">兑换</view>
      <view class="props_2_2" v-if="type == 2" @click="goUseProps">去使用</view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: {}
    },
    type: {
      type: Number,
      default: 1
    }
  },
  methods: {
    goUseProps() {
      uni.navigateTo({
        url: '/pages/index/useProps'
      });
    },
  },
}
</script>

<style lang="scss" scoped>
.props {
  display: flex;
  justify-content: space-between;
  border-bottom: 1rpx solid #F6F6F6;
  padding-top: 19rpx;
  padding-bottom: 36rpx;

  .props_1 {
    width: 157rpx;
    height: 157rpx;
    background: #F6F6F6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 24rpx;

    .props_1_1 {
      width: 120rpx;
      height: 72rpx;
    }
  }

  .props_2 {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .props_2_1 {
      .props_2_1_1 {
        font-size: 28rpx;
        font-family: PingFang SC;
        font-weight: 500;
        color: #323232;
        line-height: 1;
        margin-bottom: 15rpx;
      }

      .props_2_1_2 {
        font-size: 26rpx;
        font-family: PingFang SC;
        font-weight: 500;
        color: #848484;
        margin-bottom: 42rpx;
      }

      .props_2_1_3 {
        font-size: 36rpx;
        font-family: PingFang SC;
        font-weight: bold;
        color: #1F73F1;
        line-height: 1;
      }

      .props_2_1_4 {
        font-size: 24rpx;
        font-family: PingFang SC;
        font-weight: 400;
        color: #1F73F1;
        line-height: 1;
      }

      .props_2_1_5 {
        font-size: 24rpx;
        font-family: PingFang SC;
        font-weight: 400;
        color: #848484;
        line-height: 1;
      }
    }

    .props_2_2 {
      width: 142rpx;
      height: 52rpx;
      background: #1F73F1;
      border-radius: 26rpx;
      text-align: center;
      line-height: 52rpx;
      font-size: 30rpx;
      font-family: PingFang SC;
      font-weight: 500;
      color: #FFFFFF;
    }
  }
}
</style>