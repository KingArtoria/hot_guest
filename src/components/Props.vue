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
        <view class="props_2_1_4" v-if="type == 2">数量：{{ item.num }}张</view>
        <view class="props_2_1_5" v-if="type == 3"
          >{{ item.integral }}积分</view
        >
      </view>
      <!-- 购买 -->
      <view class="props_2_2" v-if="type == 1" @click="createOrder">购买</view>
      <!-- 使用 -->
      <view
        class="props_2_3"
        v-if="type == 2 && status == 0"
        @click="usePropsOne(item.id)"
        >使用</view
      >
      <!-- 已使用 -->
      <view class="props_2_4" v-if="type == 2 && status == 1">已使用</view>
      <!-- 兑换 -->
      <view class="props_2_5" v-if="type == 3" @click="exchange(item.id)"
        >兑换</view
      >
      <!-- 兑换时间 -->
      <view class="props_2_6" v-if="type == 2 && status == 2"
        >兑换时间:{{ item.create_time }}</view
      >
    </view>
  </view>
</template>

<script>
import { showToast } from "../utils";
import { createOrder, exchange, usePropsOne, wxPay } from "../utils/api";
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
    status: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      // sn
      order_sn: "",
    };
  },
  methods: {
    // 创建订单
    createOrder() {
      // 加载中
      uni.showLoading({ title: "加载中" });
      // 创建订单API
      createOrder({ goods_id: this.item.id, paytype: "wx" }).then((res) => {
        // sn赋值
        this.order_sn = res.data.sn;
        // 微信支付
        this.wxPay();
      });
    },
    // 一级使用道具
    usePropsOne(coupons) {
      // 加载中
      uni.showLoading({ title: "加载中" });
      // 一级使用道具API
      usePropsOne({ coupons }).then((res) => {
        uni.hideLoading();
        // 判断返回的是否是数组格式(数组格式为变色和置顶卡)
        if (Array.isArray(res.data)) {
          uni.setStorageSync("props", res.data);
          // 前往使用道具
          uni.navigateTo({
            url: `/pages/user/useProps?coupons=${coupons}`,
          });
        }
      });
    },
    // 兑换道具
    exchange(coupons_id) {
      // 兑换道具API
      exchange({ coupons_id }).then((res) => {
        // 抛出异常
        if (res.code != 1) return showToast(res.msg);
        // 兑换成功
        showToast("兑换成功");
      });
    },
    // 微信支付
    wxPay() {
      // 微信支付API
      wxPay({ order_sn: this.order_sn }).then((res) => {
        uni.hideLoading();
        uni.requestPayment({
          provider: "wxpay",
          orderInfo: res,
          success: () => {
            showToast("购买成功");
          },
        });
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
        font-size: 36rpx;
        font-family: PingFang SC;
        font-weight: bold;
        color: #1f73f1;
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
    .props_2_3 {
      width: 142rpx;
      height: 52rpx;
      background: #1f73f1;
      border-radius: 26rpx;
      text-align: center;
      line-height: 52rpx;
      font-size: 30rpx;
      font-family: PingFang SC;
      font-weight: 500;
      color: #ffffff;
      flex-shrink: 0;
    }
    .props_2_4 {
      width: 142rpx;
      height: 52rpx;
      background: #9ec3f9;
      border-radius: 26rpx;
      text-align: center;
      line-height: 52rpx;
      font-size: 30rpx;
      font-family: PingFang SC;
      font-weight: 500;
      color: #ffffff;
      flex-shrink: 0;
    }
    .props_2_5 {
      width: 142rpx;
      height: 52rpx;
      background: #1f73f1;
      border-radius: 26rpx;
      text-align: center;
      line-height: 52rpx;
      font-size: 30rpx;
      font-family: PingFang SC;
      font-weight: 500;
      color: #ffffff;
      flex-shrink: 0;
    }
    .props_2_6 {
      font-size: 24rpx;
      font-family: PingFang SC;
      font-weight: 400;
      color: #1f73f1;
    }
  }
}
</style>
