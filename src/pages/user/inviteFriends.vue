<template>
  <view>
    <view class="head">
      <view class="head_1" @click="back">
        <image
          class="head_1_1"
          src="http://39.106.208.234/pic/img_/black_icon_w.png"
        />
      </view>
      <view class="head_2">邀请好友</view>
      <view class="head_3" />
    </view>
    <view class="content">
      <!-- 通告 -->
      <view class="content_1">
        <u-notice-bar
          :text="backCashList"
          direction="column"
          color="#FFEC93"
          bgColor="rgba(171,0,19,0.34)"
          fontSize="20rpx"
          style="border-radius: 24rpx"
        />
      </view>
      <!-- 邀请码 -->
      <view class="content_2"
        >我的邀请码：<text style="font-size: 34rpx">{{
          inviteCode
        }}</text></view
      >
      <!-- 邀请收益 -->
      <view class="content_3">
        <view class="content_3_1">
          <view class="content_3_1_1">10</view>
          <view class="content_3_1_2">元</view>
        </view>
        <view class="content_3_2">
          <view class="content_3_1_1">2</view>
          <view class="content_3_1_2">人</view>
        </view>
      </view>
      <!-- 充值列表 -->
      <view class="content_4"> </view>
    </view>
  </view>
</template>

<script>
import Head from "../../components/Head";
import { getBackCashList, getInviteCode } from "../../utils/api";
export default {
  data() {
    return {
      // 邀请码
      inviteCode: "",
      // 返现列表
      backCashList: [],
    };
  },
  methods: {
    // 获取邀请码
    getInviteCode() {
      // 获取邀请码API
      getInviteCode().then((res) => {
        // 邀请码赋值
        this.inviteCode = res.data.code;
      });
    },
    // 获取返现列表
    getBackCashList() {
      // 返现列表API
      getBackCashList().then((res) => {
        this.backCashList = [
          "用户MR.吴已累计获得好友返现金额45.00元",
          "用户MR.吴已累计获得好友返现金额45.00元",
          "用户MR.吴已累计获得好友返现金额45.00元",
          "用户MR.吴已累计获得好友返现金额45.00元",
          "用户MR.吴已累计获得好友返现金额45.00元",
          "用户MR.吴已累计获得好友返现金额45.00元",
        ];
        // 数据赋值
        // this.backCashList = res.data;
      });
    },
    // 返回上一页
    back() {
      // 返回上一页
      uni.navigateBack();
    },
  },
  onLoad() {
    // 获取邀请码
    this.getInviteCode();
    // 获取返现列表
    this.getBackCashList();
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import "./inviteFriends.scss";
</style>
