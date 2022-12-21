<template>
  <view>
    <!-- 头部 -->
    <view class="head">
      <view class="head_1">
        <view class="head_1_1" />
        <view class="head_1_2">人脉</view>
        <view class="head_1_3" @click="goAddFriend">
          <image
            class="head_1_3_1"
            src="http://39.106.208.234/pic/img_/tianjia2.png"
          />
        </view>
      </view>
    </view>
    <view class="content">
      <!-- 搜索框 -->
      <view class="content_1" @click="goSearch">
        <image
          class="content_1_1"
          src="http://39.106.208.234/pic/img_/sousuo_rm.png"
        />
        <u-input border="none" fontSize="28rpx" placeholder="搜索人脉" />
      </view>
      <!-- 好友列表 -->
      <view class="content_2" @click="goFriendList">
        <view class="content_2_1">
          <image
            class="content_2_1_1"
            src="http://39.106.208.234/pic/img_/hylb2.png"
          />
          <view class="content_2_1_2">好友列表（{{ friendNum }}）</view>
        </view>
        <image
          class="content_2_2"
          src="http://39.106.208.234/pic/img_/jinr.png"
        />
      </view>
      <!-- 开启通讯录 -->
      <view class="content_3">
        <view class="content_3_1">
          <view class="content_3_1_1">开启通讯录</view>
          <view class="content_3_1_2">
            <text class="content_3_1_2_1">80%</text>
            <text class="content_3_1_2_2">的用户都在这里快速拓展人脉</text>
          </view>
          <view class="content_3_1_3">看看你的好友都有哪些人脉资源</view>
        </view>
        <image
          class="content_3_2"
          src="http://39.106.208.234/pic/img_/kaiqitongxunl.png"
        />
      </view>
      <!-- 待处理请求 -->
      <view class="content_4" v-if="notice.length > 0">
        <view class="content_4_1">
          <view class="content_4_1_1">
            <view class="content_4_1_1_1">待处理请求</view>
            <view class="content_4_1_1_2">{{ notice.length }}</view>
          </view>
          <view class="content_4_1_2" @click="goFriendRequest">
            <view class="content_4_1_2_1">管理我的请求</view>
            <image
              class="content_4_1_2_2"
              src="http://39.106.208.234/pic/img_/jinr.png"
            />
          </view>
        </view>
        <FriendRequest
          @click="goPersonal(notice[0].member_id)"
          :data="notice[0]"
        />
      </view>
      <!-- Tabs -->
      <view class="content_5">
        <view class="content_5_1">
          <view class="content_5_1_1">
            <view
              class="content_5_1_1_1"
              :style="
                currentTab == 1 ? 'font-weight:bold' : 'font-weight: 400;'
              "
              @click="changeTab(1)"
              >推荐人脉</view
            >
            <view
              class="content_5_1_1_1"
              :style="
                currentTab == 2 ? 'font-weight:bold' : 'font-weight: 400;'
              "
              @click="changeTab(2)"
              >同行</view
            >
            <view
              class="content_5_1_1_1"
              :style="
                currentTab == 3 ? 'font-weight:bold' : 'font-weight: 400;'
              "
              @click="changeTab(3)"
              >同城</view
            >
            <view
              class="content_5_1_1_1"
              :style="
                currentTab == 4 ? 'font-weight:bold' : 'font-weight: 400;'
              "
              @click="changeTab(4)"
              >校友</view
            >
          </view>
          <view class="content_5_1_2" @click="getRecommend">刷新</view>
        </view>
        <Contacts :data="recommend" />
      </view>
    </view>
    <!-- 登录模态框 -->
    <u-modal
      showCancelButton
      :show="loginModal.show"
      :title="loginModal.title"
      :content="loginModal.content"
      @confirm="loginModal.confirm"
      @cancel="loginModal.cancel"
    />
  </view>
</template>

<script>
import FriendRequest from "@/components/FriendRequest";
import Contacts from "@/components/Contacts";
import { getMyFriend, getNotice, getRecommend } from "../../utils/api";
export default {
  data() {
    return {
      // 好友列表
      friendNum: 0,
      // 通知
      notice: [],
      // 当前选中的tab
      currentTab: 1,
      // 推荐人脉
      recommend: [],
      // 登录模态框
      loginModal: {
        title: "登录提示",
        content: "您还未登录，是否前往登录？",
        show: false,
        confirm: () => uni.navigateTo({ url: "/pages/user/login" }),
        cancel: () => uni.switchTab({ url: "/pages/index/index" }),
      },
    };
  },
  methods: {
    // 前往好友列表
    goFriendList() {
      uni.navigateTo({
        url: "/pages/contacts/buddyList",
      });
    },
    // 前往添加好友
    goAddFriend() {
      uni.navigateTo({
        url: "/pages/contacts/addFriend",
      });
    },
    // 前往好友个人页
    goPersonal(id) {
      uni.navigateTo({
        url: `/pages/contacts/personal?id=${id}`,
      });
    },
    // 前往搜索好友
    goSearch() {
      uni.navigateTo({
        url: "/pages/contacts/addFriendAction",
      });
    },
    // 我的好友
    getMyFriend() {
      // 我的好友API
      getMyFriend().then((res) => {
        // 赋值数量
        this.friendNum = res.data.num;
      });
    },
    // 通知
    getNotice() {
      // 通知API
      getNotice({ type: 1 }).then((res) => {
        res.data.forEach((item) => {
          // 初始化头像
          if (item.head.indexOf("http") === -1) {
            item.head = `${this._avatarUrl}${item.head}`;
          }
        });
        // 通知赋值
        this.notice = res.data;
      });
    },
    // 推荐人脉
    getRecommend() {
      // 推荐人脉API
      getRecommend({ type: this.currentTab }).then((res) => {
        // 初始化数据
        res.data.forEach((item) => {
          // 初始化头像
          if (item.head.indexOf("http") === -1) {
            item.head = `${this._avatarUrl}${item.head}`;
          }
        });
        // 赋值
        this.recommend = res.data;
      });
    },
    // 切换tab
    changeTab(e) {
      // 赋值
      this.currentTab = e;
      // 获取推荐人脉
      this.getRecommend();
    },
    // 前往好友请求
    goFriendRequest() {
      uni.navigateTo({
        url: "/pages/contacts/pendingRequest",
      });
    },
  },
  onLoad() {
    uni.$on("refresh", () => {
      // 我的好友
      this.getMyFriend();
      // 通知
      this.getNotice();
    });
    // 我的好友
    this.getMyFriend();
    // 通知
    this.getNotice();
    // 推荐人脉
    this.getRecommend();
  },
  onShow() {
    // 判断是否登录
    if (!uni.getStorageSync("token")) return (this.loginModal.show = true);
  },
  onUnload() {
    uni.$off("getUserInfo");
  },
  components: { FriendRequest, Contacts },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
