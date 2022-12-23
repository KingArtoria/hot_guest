<template>
  <view>
    <view class="head">
      <view class="head_1" @click="toBack">
        <image
          class="head_1_1"
          src="http://39.106.208.234/pic/img_/black_icon_w.png"
        />
      </view>
      <view class="head_2">平台交易</view>
      <view class="head_3">
        <image
          class="head_3_1"
          src="http://39.106.208.234/pic/img_/yiwen_ptjy.png"
          @click="goTradingRules"
        />
      </view>
    </view>
    <view class="content">
      <!-- 介绍轮播 -->
      <u-swiper :list="list" height="273rpx" radius="0" circular />
      <!-- 选择对象 -->
      <view class="content_1">
        <u-input
          placeholder="请输入交易对方的手机号"
          fontSize="30rpx"
          color="#9e9e9e"
          border="none"
          v-model="params.to_id"
          style="font-weight: bold"
        />
      </view>
      <!-- 买卖关系 -->
      <view class="content_2">
        <Title title="买卖关系" />
        <view class="content_2_1">
          <view
            :class="isBuy ? 'content_2_1_1' : 'content_2_1_2'"
            @click="changeBuySell(true)"
            >我是付款方</view
          >
          <view
            :class="isBuy ? 'content_2_1_2' : 'content_2_1_1'"
            @click="changeBuySell(false)"
            >我是收款方</view
          >
        </view>
      </view>
      <!-- 担保内容 -->
      <view class="content_3">
        <Title title="担保内容" />
        <view class="content_3_1">
          <view class="content_3_1_1">
            <view class="content_3_1_1_1">合作内容：</view>
            <u--input
              placeholder="请输入内容"
              border="none"
              fontSize="28rpx"
              v-model="content"
            />
          </view>
          <view class="content_3_1_1">
            <view class="content_3_1_1_1">对方要求：</view>
            <u--input
              placeholder="请输入内容"
              border="none"
              fontSize="28rpx"
              v-model="request"
            />
          </view>
          <view class="content_3_1_1">
            <view class="content_3_1_1_1">结算条件：</view>
            <u--input
              placeholder="请输入内容"
              border="none"
              fontSize="28rpx"
              v-model="condition"
            />
          </view>
          <view class="content_3_1_1">
            <view class="content_3_1_1_1">其他补充：</view>
            <u--input
              placeholder="请输入内容"
              border="none"
              fontSize="28rpx"
              v-model="supplement"
            />
          </view>
        </view>
      </view>
      <!-- 担保金额 -->
      <view class="content_4">
        <Title title="担保金额" />
        <view class="content_4_1"
          >注：担保金不可以作为业务结算资金进行支付</view
        >
        <view class="content_4_2">
          <view class="content_4_2_1">￥</view>
          <view class="content_4_2_2" />
          <u--input
            placeholder="请输入金额"
            border="none"
            fontSize="30rpx"
            v-model="params.price"
            style="font-weight: bold"
          />
        </view>
      </view>
    </view>
    <!-- 提交按钮 -->
    <view class="btn">
      <view class="btn_1">
        <u-checkbox-group size="26rpx" @change="changeAgreement">
          <u-checkbox shape="circle" name="agreement" />
        </u-checkbox-group>
        <view class="btn_1_1">我已同意</view>
        <view class="btn_1_2" @click="goAgreement">《平台交易协议》</view>
      </view>
      <view class="btn_2" @click="guarantee">完成</view>
    </view>
    <!-- 申请成功 -->
    <u-modal
      :show="modal.show"
      :title="modal.title"
      :content="modal.content"
      @confirm="modal.confirm"
    />
  </view>
</template>

<script>
import Head from "../../components/Head";
import Title from "../../components/Title";
import { showToast } from "../../utils";
import { guarantee } from "../../utils/api";
export default {
  data() {
    return {
      slotData: "width:38rpx;height:38rpx;",
      list: [
        "http://39.106.208.234/pic/img_/ptjy_hzlc.png",
        "http://39.106.208.234/pic/img_/ptjy_banner.png",
      ],
      // 买卖关系
      isBuy: true,
      // 担保交易参数
      params: {},
      // 合作内容
      content: "",
      // 对方要求
      request: "",
      // 结算条件
      condition: "",
      // 其他补充
      supplement: "",
      // 申请成功
      modal: {
        show: false,
        title: "申请成功",
        content: "您的申请已提交，请耐心等待审核",
        confirm: () => {
          this.modal.show = false;
          uni.navigateBack();
        },
      },
      // 平台交易协议
      agreement: "",
    };
  },
  methods: {
    // 前往交易规则
    goTradingRules() {
      uni.navigateTo({
        url: "/pages/index/tradingRules",
      });
    },
    // 切换买卖关系
    changeBuySell(type) {
      // 赋值
      this.isBuy = type;
    },
    // 担保交易
    guarantee() {
      // 是否选中平台交易协议
      if (this.agreement == "") return showToast("请先阅读并选中平台交易协议");
      // 参数详细赋值
      this.params.details = `合作内容:${this.content};对方要求:${this.request};结算条件:${this.condition};其他补充:${this.supplement}`;
      // 担保交易API
      guarantee(this.params).then((res) => {
        // 抛出异常
        if (res.code != 1) return showToast(res.msg);
        // 申请成功
        this.modal.show = true;
      });
    },
    // 返回上一页
    toBack() {
      uni.navigateBack();
    },
    // 前往平台交易协议
    goAgreement() {
      plus.runtime.openURL("http://ptjyxy.bdhuoke.com/");
    },
    // 选中平台交易协议
    changeAgreement(e) {
      this.agreement = e[0];
    },
  },
  components: { Head, Title },
};
</script>

<style lang="scss" scoped>
@import "./platformTransaction.scss";
</style>
