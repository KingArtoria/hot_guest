<template>
  <view>
    <!-- 头部 -->
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
    <!-- 内容 -->
    <view class="content">
      <!-- 轮播 -->
      <view class="content_1">
        <!-- 轮播组件 -->
        <u-notice-bar
          :text="backCashList"
          direction="column"
          color="#FFEC93"
          bgColor="rgba(171,0,19,0.34)"
          fontSize="20rpx"
          style="border-radius: 24rpx"
          icon=""
        />
      </view>
      <!-- 邀请码 -->
      <view class="content_2">我的邀请码：{{ inviteCode.code }}</view>
      <!-- 立即邀请按钮 -->
      <view class="content_3" @click="goPoster">立即邀请</view>
      <!-- 立即赚取 -->
      <image
        :src="`${_url}lijizhuanq.png`"
        class="content_4"
        @click="goPoster"
      />
      <!-- 统计 -->
      <view class="content_5">
        <!-- 累计收益 -->
        <view class="content_5_1">
          <!-- 收益金额 -->
          <view class="content_5_1_1">
            <text style="font-size: 80rpx; margin-right: 14rpx">
              {{ inviteCode.count }}
            </text>
            <text style="font-size: 24rpx">元</text>
          </view>
          <!-- 标题 -->
          <view class="content_5_1_2">累计收益</view>
        </view>
        <!-- 成功邀请 -->
        <view class="content_5_1">
          <!-- 邀请总数 -->
          <view class="content_5_1_1">
            <text style="font-size: 80rpx; margin-right: 14rpx">
              {{ inviteCode.apply }}
            </text>
            <text style="font-size: 24rpx">人</text>
          </view>
          <!-- 标题 -->
          <view class="content_5_1_2">成功邀请</view>
        </view>
      </view>
      <!-- 提示 -->
      <view class="content_6">累计收益金额可在个人中心—钱包页面提现</view>
      <!-- 去体现 -->
      <image class="content_7" :src="`${_url}qutixian.png`" />
      <!-- 充值列表 -->
      <view class="content_8">
        <!-- 单个列表 -->
        <view
          class="content_8_1"
          v-for="(item, index) in inviteCode.list"
          :key="index"
        >
          <!-- 排名-图标 -->
          <image
            :src="`http://39.106.208.234/pic/img_/pm${index + 1}.png`"
            class="content_8_1_1"
            v-if="index < 3"
          />
          <!-- 排名-数字 -->
          <view class="content_8_1_2" v-if="index > 2">{{ index + 1 }}</view>
          <!-- 信息盒子 -->
          <view class="content_8_1_3">
            <!-- 头像 -->
            <image :src="item.head" class="content_8_1_3_1" />
            <view class="content_8_1_3_2">{{ item.phone }}</view>
          </view>
          <!-- 返现金额 -->
          <view class="content_8_1_4">{{ item.price }}元</view>
        </view>
      </view>
      <!-- 活动规则 -->
      <view class="content_9">
        <!-- 单条规则 -->
        <view class="content_9_1">
          1、您邀请的好友为火客新用户，即可获得奖励（特别提醒：如您邀请的好友已经在火客注册，则不属于新用户）
        </view>
        <view class="content_9_1">
          2、您邀请的新用户只要注册并输入您的邀请码即为邀成功，您最高可获得10次免费查看机会。
        </view>
        <view class="content_9_1">
          3、邀请好友开通一年普通会员您会获得99元现金返现；好友开通一年超级会员您会获得299元现金返现；好友开通一年企业会员您会获得799元现金返现；好友开通一年黑卡会员您会获得5999元现金返现；
        </view>
        <view class="content_9_1">
          4、若出现不正当手段获取奖励，经核实火客有权取消用户参与本次活动的资格，并对其账号进行封禁；同时保留拒绝赋予其今后参加本公司任何优惠活动的权利，追究相关法律责任；
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { showToast } from "../../utils";
import { getBackCashList, getInviteCode } from "../../utils/api";
export default {
  data() {
    return {
      // 邀请码对象
      inviteCode: {},
      // 返现列表
      backCashList: [],
    };
  },
  methods: {
    // 返回上一级
    back() {
      uni.navigateBack();
    },
    // 获取邀请码
    getInviteCode() {
      // 获取邀请码API
      getInviteCode().then((res) => {
        // 抛出异常
        if (res.code != 1) return showToast(res.msg);
        // 初始化数据
        res.data.list.forEach((item) => {
          // 初始化头像
          if (item.head.indexOf("http") === -1) {
            item.head = `${this._avatarUrl}${item.head}`;
          }
        });
        // 赋值
        this.inviteCode = res.data;
        this.inviteCode.list = this.inviteCode.list.slice(0, 8);
      });
    },
    // 获取返现列表
    getBackCashList() {
      // 获取返现列表API
      getBackCashList().then((res) => {
        // 抛出异常
        if (res.code != 1) return showToast(res.msg);
        // 赋值
        this.backCashList = res.data;
      });
    },
    // 前往海报拉新
    goPoster() {
      uni.navigateTo({
        url: "/pages/user/poster",
      });
    },
  },
  onLoad() {
    // 获取邀请码
    this.getInviteCode();
    // 获取返现列表
    this.getBackCashList();
  },
};
</script>

<style lang="scss" scoped>
@import "./makeMoney.scss";
</style>