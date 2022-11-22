<template>
  <view class="props">
    <view class="props_1">
      <image class="props_1_1" :src="item.image" />
    </view>
    <view class="props_2">
      <view class="props_2_1">
        <view class="props_2_1_1">{{ item.title }}</view>
        <view class="props_2_1_2">{{ item.remark }}</view>
        <!-- 购买 -->
        <view class="props_2_1_3" v-if="type == 1">￥{{ item.price }}</view>
        <view class="props_2_1_4" v-if="type == 2">{{ item.price }}</view>
        <view class="props_2_1_5" v-if="type == 3">{{ item.price }}</view>
      </view>
      <!-- 购买 -->
      <view class="props_2_2" v-if="type == 1" @click="createOrder">购买</view>
    </view>
  </view>
</template>

<script>
import { createOrder } from '../utils/api';
export default {
  props: {
    item: {
      type: Object,
      default: {},
    },
    type: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    // 创建订单
    createOrder() {
      // 创建订单API
      createOrder({ id: this.item.id, paytype: 'wx' }).then(res => {
        console.log(res.data);
        // 调用支付
        // this.pay(res.data);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.props {
  display: flex;
  justify-content: space-between;
  border-bottom: 1rpx solid #f6f6f6;
  padding-top: 19rpx;
  padding-bottom: 36rpx;

  .props_1 {
    width: 157rpx;
    height: 157rpx;
    background: #f6f6f6;
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
        color: #ff4e00;
      }

      .props_2_1_4 {
        font-size: 24rpx;
        font-family: PingFang SC;
        font-weight: 400;
        color: #1f73f1;
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
      background: #fb7321;
      border-radius: 26rpx;
      text-align: center;
      line-height: 52rpx;
      font-size: 30rpx;
      font-family: PingFang SC;
      font-weight: 500;
      color: #ffffff;
      flex-shrink: 0;
    }
  }
}
</style>
