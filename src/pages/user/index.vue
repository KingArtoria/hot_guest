<template>
  <view>
    <view class="content">
      <!-- 渐变层 -->
      <view class="content_1">
        <!-- 个人信息 -->
        <view class="content_1_1">
          <!-- 头像盒子 -->
          <view class="content_1_1_1" @click="goEditData" v-if="token">
            <image class="content_1_1_1_1" :src="userInfo.head" />
            <image
              class="content_1_1_1_2"
              src="http://39.106.208.234/pic/img_/xg.webp"
            />
          </view>
          <!-- 未登录盒子 -->
          <view class="content_1_1_1" v-if="!token">
            <image
              class="content_1_1_1_1"
              src="http://39.106.208.234/pic/img_/wdl.png"
          /></view>
          <view class="content_1_1_2">
            <!-- 去登录 -->
            <view class="content_1_1_2_1" v-if="!token" @click="toLogin">
              <!-- 登录提示 -->
              <view class="content_1_1_2_1_1">立即登录</view>
              <!-- 登录图标 -->
              <image
                style="height: 46rpx; width: 46rpx"
                src="http://39.106.208.234/pic/img_/tz_dl.png"
              />
            </view>
            <!-- 名字 -->
            <view class="content_1_1_2_1" v-if="token">
              <view class="content_1_1_2_1_1">{{ userInfo.nick_name }}</view>
              <HY :type="userInfo.maxvip" />
            </view>
            <!-- 职位 -->
            <view
              class="content_1_1_2_2"
              v-if="token"
              style="margin-bottom: 19rpx"
              >{{ userInfo.company }}&nbsp;&nbsp;&nbsp;{{
                userInfo.position
              }}</view
            >
            <!-- 邀请码 -->
            <view class="content_1_1_2_2" @click="copyCode" v-if="token"
              >我的邀请码：{{ userInfo.Invitation_code }}（点击复制）</view
            >
            <!-- 登录权益 -->
            <view class="content_1_1_2_2" v-if="!token"
              >登录畅享更多会员权益</view
            >
          </view>
        </view>
        <!-- 选项卡 -->
        <view class="content_1_2">
          <image
            class="content_1_2_1"
            :src="`${_url}daojshangc.webp`"
            @click="goProp"
          />
          <image
            class="content_1_2_1"
            :src="`${_url}wodeqianb.webp`"
            @click="goWaller"
          />
          <image
            class="content_1_2_1"
            :src="`${_url}heika.webp`"
            @click="goBlackCard"
          />
        </view>
        <!-- 开通会员 -->
        <view class="content_1_3" @click="goVip">
          <view class="content_1_3_1">开通会员立享超值特权</view>
          <view class="content_1_3_2">立即开通</view>
        </view>
      </view>
      <!-- 选项卡*4 -->
      <view class="content_2">
        <view class="content_2_1">
          <image
            class="content_2_1_1"
            :src="`${_url}wofabud.webp`"
            @click="goMyPost"
          />
          <image
            class="content_2_1_2"
            :src="`${_url}shoucang.webp`"
            @click="toCollection"
          />
          <image
            class="content_2_1_3"
            :src="`${_url}daoju.webp`"
            @click="toMyProp"
          />
          <image
            class="content_2_1_4"
            :src="`${_url}danbaojil.webp`"
            @click="goGuaranteeRecord"
          />
        </view>
        <view class="content_2_2">
          <view class="content_2_2_1">我发布的</view>
          <view class="content_2_2_1">我的收藏</view>
          <view class="content_2_2_1">我的道具</view>
          <view class="content_2_2_1">担保记录</view>
        </view>
      </view>
      <!-- 常用 -->
      <view class="content_3">
        <view class="content_3_1">常用</view>
        <view class="content_3_2">
          <view class="content_3_2_1">
            <image
              class="content_3_2_1_1"
              :src="`${_url}yewudy.webp`"
              @click="goBusinessSubscription"
            />
            <image
              class="content_3_2_1_3"
              :src="`${_url}yaoqing.webp`"
              @click="goInviteFriends"
            />
          </view>
          <view class="content_3_2_2">
            <view class="content_3_2_2_1">业务订阅</view>
            <view class="content_3_2_2_1">邀请有礼</view>
          </view>
        </view>
      </view>
      <!-- 其他 -->
      <view class="content_4">
        <view class="content_4_1">其他</view>
        <view class="content_4_2">
          <view class="content_4_2_1" @click="goVerified">
            <image class="content_4_2_1_1" :src="`${_url}shimrz.webp`" />
            <view class="content_4_2_1_6">实名认证</view>
          </view>
          <view class="content_4_2_1" @click="show = true">
            <image class="content_4_2_1_2" :src="`${_url}kefu.webp`" />
            <view class="content_4_2_1_6">联系客服</view>
          </view>
          <view class="content_4_2_1" @click="goFeedback">
            <image class="content_4_2_1_3" :src="`${_url}yijinfk.webp`" />
            <view class="content_4_2_1_6">意见反馈</view>
          </view>
          <view class="content_4_2_1" @click="goSettings">
            <image class="content_4_2_1_4" :src="`${_url}shezhi.webp`" />
            <view class="content_4_2_1_6">设置</view>
          </view>
          <view class="content_4_2_1" @click="loginOutShow = true">
            <image class="content_4_2_1_5" :src="`${_url}tuichu.webp`" />
            <view class="content_4_2_1_6">退出</view>
          </view>
        </view>
      </view>
    </view>
    <!-- 客服 -->
    <u-overlay :show="show" @click="show = false">
      <view class="show">
        <view class="show_1" style="margin-bottom: 90rpx">
          <text class="show_1_1">商务合作：</text>
          <text class="show_1_2">18511169119</text>
        </view>
        <image class="show_2" src="http://39.106.208.234/pic/img_/rwmsw.png" />
        <view class="show_3">火客客服</view>
      </view>
    </u-overlay>
    <!-- 退出登录 -->
    <u-modal
      :show="loginOutShow"
      content="确定要退出登录吗"
      showCancelButton
      @confirm="goLoginOut"
    />
    <!-- 登录模态框 -->
    <u-modal
      :show="loginModal.show"
      :title="loginModal.title"
      :content="loginModal.content"
      showCancelButton
      @confirm="loginModal.confirm"
      @cancel="loginModal.show = false"
    />
  </view>
</template>

<script>
import Vue from "vue";
import HY from "../../components/HY";
import { showToast } from "../../utils";
import { getUserInfo } from "../../utils/api";
export default {
  data() {
    return {
      /* 展示客服 */ show: false,
      // 退出登录模态框展示/隐藏
      loginOutShow: false,
      // 用户信息
      userInfo: {},
      // token
      token: "",
      // 登录模态框
      loginModal: {
        show: false,
        title: "提示",
        content: "请先进行登录",
        confirm: () => {
          // 跳转登录
          uni.navigateTo({
            url: "/pages/user/login",
          });
        },
      },
    };
  },
  methods: {
    // 前往修改信息
    goEditData() {
      // 判断是否登录
      if (!this.token) return (this.loginModal.show = true);
      uni.navigateTo({
        url: "/pages/user/editData",
      });
    },
    // 前往道具商城
    goProp() {
      // 判断是否登录
      if (!this.token) return (this.loginModal.show = true);
      // 路由跳转
      uni.navigateTo({
        url: "/pages/user/prop",
      });
    },
    // 前往钱包
    goWaller() {
      // 判断是否登录
      if (!this.token) return (this.loginModal.show = true);
      uni.navigateTo({
        url: "/pages/user/wallet",
      });
    },
    // 前往黑卡
    goBlackCard() {
      // 判断是否登录
      if (!this.token) return (this.loginModal.show = true);
      uni.navigateTo({
        url: "/pages/user/blackCard",
      });
    },
    // 前往会员
    goVip() {
      // 判断是否登录
      if (!this.token) return (this.loginModal.show = true);
      uni.navigateTo({
        url: "/pages/user/vip",
      });
    },
    // 前往我的发布
    goMyPost() {
      // 判断是否登录
      if (!this.token) return (this.loginModal.show = true);
      uni.navigateTo({
        url: "/pages/user/myPost",
      });
    },
    // 前往担保记录
    goGuaranteeRecord() {
      // 判断是否登录
      if (!this.token) return (this.loginModal.show = true);
      uni.navigateTo({
        url: "/pages/user/guaranteeRecord",
      });
    },
    // 前往业务订阅
    goBusinessSubscription() {
      // 判断是否登录
      if (!this.token) return (this.loginModal.show = true);
      uni.navigateTo({
        url: "/pages/user/businessSubscription",
      });
    },
    // 前往邀请好友
    goInviteFriends() {
      // 判断是否登录
      if (!this.token) return (this.loginModal.show = true);
      uni.navigateTo({
        url: "/pages/user/inviteFriends",
      });
    },
    // 前往实名认证
    goVerified() {
      // 判断是否登录
      if (!this.token) return (this.loginModal.show = true);
      uni.navigateTo({
        url: "/pages/user/verified",
      });
    },
    // 前往意见反馈
    goFeedback() {
      // 判断是否登录
      if (!this.token) return (this.loginModal.show = true);
      uni.navigateTo({
        url: "/pages/user/feedback",
      });
    },
    // 前往设置
    goSettings() {
      // 判断是否登录
      if (!this.token) return (this.loginModal.show = true);
      uni.navigateTo({
        url: "/pages/user/settings",
      });
    },
    // 退出登录
    goLoginOut() {
      uni.removeStorageSync("token");
      uni.reLaunch({
        url: "/pages/user/login",
      });
    },
    // 获取个人信息
    getUserInfo() {
      getUserInfo().then((res) => {
        // head是否包含http
        if (res.data.head.indexOf("http") === -1) {
          res.data.head = `${this._avatarUrl}${res.data.head}`;
        }
        this.userInfo = res.data;
        Vue.prototype._userInfo = res.data;
      });
    },
    // 复制邀请码
    copyCode() {
      uni.setClipboardData({
        data: this.userInfo.Invitation_code,
        success: () => showToast("复制成功"),
      });
    },
    // 前往我的收藏
    toCollection() {
      // 判断是否登录
      if (!this.token) return (this.loginModal.show = true);
      uni.navigateTo({
        url: "/pages/user/collection",
      });
    },
    // 前往我的道具
    toMyProp() {
      // 判断是否登录
      if (!this.token) return (this.loginModal.show = true);
      uni.navigateTo({
        url: "/pages/user/myProp",
      });
    },
    // 前往登录
    toLogin() {
      // 路由跳转
      uni.navigateTo({
        url: "/pages/user/login",
      });
    },
  },
  onLoad() {
    // 获取个人信息
    this.getUserInfo();
    // 获取token
    this.token = uni.getStorageSync("token");
  },
  onUnload() {
    uni.$off("getUserInfo");
  },
  components: { HY },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
