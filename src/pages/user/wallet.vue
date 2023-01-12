<template>
  <view>
    <Head title="钱包" />
    <view class="content">
      <!-- 卡片 -->
      <view class="content_1">
        <view class="content_1_1">
          <view class="content_1_1_1">可提现收益（元）</view>
          <image
            class="content_1_1_2"
            src="http://39.106.208.234/pic/img_/tishi.png"
          />
        </view>
        <view class="content_1_2">￥{{ walletBalance.income }}</view>
        <view class="content_1_3">
          <view class="content_1_3_1">
            <view class="content_1_3_1_1">本月预估收益</view>
            <view class="content_1_3_1_2">
              ￥{{ walletBalance.month_income }}
            </view>
          </view>
          <view class="content_1_3_1">
            <view class="content_1_3_1_1">累计收益</view>
            <view class="content_1_3_1_2">
              ￥{{ walletBalance.all_income }}
            </view>
          </view>
        </view>
        <view class="content_1_4">
          <view class="content_1_4_1" @click="goInvite">
            <image
              class="content_1_4_1_1"
              src="http://39.106.208.234/pic/img_/shouyi.png"
            />
            <view class="content_1_4_1_2">收益明细</view>
          </view>
          <view class="content_1_4_2" />
          <view class="content_1_4_1" @click="goWithdraw">
            <image
              class="content_1_4_1_1"
              src="http://39.106.208.234/pic/img_/tixian.png"
            />
            <view class="content_1_4_1_2">去提现</view>
          </view>
        </view>
        <view class="content_1_5">
          <view class="content_1_5_1"
            >好友充值返现金额需要等7天才可以提现哦</view
          >
        </view>
      </view>
      <!-- 注意事项 -->
      <view class="content_2">
        <view class="content_2_1">注意事项</view>
        <view class="content_2_1">
          1.提现申请将在1-3个工作日内审批到账，请耐心等待。</view
        >
        <view class="content_2_1">
          2.我的--我的订单--正在处理/全部订单，查看兑换记录状态。</view
        >
        <view class="content_2_1">
          3.查询提现到账：微信-我-钱包-零钱-零钱明细，支付宝-我的-账单，
          如果有名称为“xxxx提现成功”的文字，即提现成功到账！</view
        >
      </view>
    </view>
  </view>
</template>

<script>
import Head from "../../components/Head";
import { showToast } from "../../utils";
import { getWalletBalance } from "../../utils/api";
export default {
  data() {
    return {
      // 钱包余额对象
      walletBalance: {},
    };
  },
  methods: {
    // 钱包余额
    getWalletBalance() {
      // 钱包余额API
      getWalletBalance().then((res) => {
        // 抛出异常
        if (res.code != 1) return showToast(res.msg);
        // 如果值为null则赋值为0
        if (res.data.income == null) res.data.income = 0;
        if (res.data.month_income == null) res.data.month_income = 0;
        if (res.data.all_income == null) res.data.all_income = 0;
        // 对象赋值
        this.walletBalance = res.data;
      });
    },
    // 前往邀请好友
    goInvite() {
      uni.navigateTo({
        url: "/pages/user/makeMoney",
      });
    },
    // 去提现
    goWithdraw() {
      uni.navigateTo({
        url: "/pages/index/commissionRanking",
      });
    },
  },
  onLoad() {
    // 钱包余额
    this.getWalletBalance();
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import "./wallet.scss";
</style>
