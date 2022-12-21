<template>
  <view>
    <!-- 头部 -->
    <view class="head">
      <view class="head_1">
        <view class="head_1_1">
          <image
            class="head_1_1_1"
            src="http://39.106.208.234/pic/img_/hylb.png"
          />
        </view>
        <view class="head_1_2">人脉</view>
        <view class="head_1_3">
          <image
            class="head_1_3_1"
            src="http://39.106.208.234/pic/img_/tianjia.png"
          />
        </view>
      </view>
    </view>
    <!-- 内容 -->
    <view class="content">
      <!-- 搜素框 -->
      <view class="content_1">
        <image
          class="content_1_1"
          src="http://39.106.208.234/pic/img_/sousuo_rm.png"
        />
        <u-input placeholder="好友昵称/备注" fontSize="28rpx" border="none" />
      </view>
      <!-- 提示助手 -->
      <view class="content_2">
        <view class="content_2_1" @click="goAssistant">
          <image
            class="content_2_1_1"
            src="http://39.106.208.234/pic/img_/zs.png"
          />
          <view class="content_2_1_2">
            <view class="content_2_1_2_1">
              <view class="content_2_1_2_1_1">火客小助手</view>
            </view>
            <view class="content_2_1_2_2">您的私人小助手</view>
          </view>
        </view>
        <view class="content_2_1" @click="goFriendRequest">
          <image
            class="content_2_1_1"
            src="http://39.106.208.234/pic/img_/xxzs.png"
          />
          <view class="content_2_1_2">
            <view class="content_2_1_2_1">
              <view class="content_2_1_2_1_1">消息通知小助手</view>
            </view>
            <view class="content_2_1_2_2">有{{ notice }}条好友申请待处理</view>
          </view>
        </view>
      </view>
      <!-- 私聊信息 -->
      <view class="content_3">
        <view
          class="content_3_1"
          v-for="(item, index) in chatList"
          :key="index"
          @click="goPrivateChat(item)"
        >
          <view class="content_3_1_1">
            <image class="content_3_1_1_1" :src="item.data.head" />
            <view class="content_3_1_1_2" v-if="item.unread != 0">{{
              item.unread
            }}</view>
          </view>
          <view class="content_3_1_2">
            <view class="content_3_1_2_1">
              <view class="content_3_1_2_1_1">
                <view class="content_3_1_2_1_1_1">{{
                  item.data.nickName
                }}</view>
                <view class="content_3_1_2_1_1_2"
                  >{{ item.data.company }}&nbsp;&nbsp;{{
                    item.data.position
                  }}</view
                >
              </view>
              <view class="content_3_1_2_1_2">{{
                item.lastMessage.timestamp
              }}</view>
            </view>
            <view class="content_3_1_2_2">{{
              item.lastMessage.payload.text
            }}</view>
          </view>
        </view>
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
import GoEasy from "goeasy";
import { formatTime } from "../../utils";
import { getNotice } from "../../utils/api";
export default {
  data() {
    return {
      // 登录模态框
      loginModal: {
        title: "登录提示",
        content: "您还未登录，是否前往登录？",
        show: false,
        confirm: () => uni.navigateTo({ url: "/pages/user/login" }),
        cancel: () => uni.switchTab({ url: "/pages/index/index" }),
      },
      // 会话列表
      chatList: [],
      // 好友请求
      notice: 0,
    };
  },
  methods: {
    // 前往私聊
    goPrivateChat(item) {
      // 路由跳转
      uni.navigateTo({
        url: `/pages/news/privateChat?id=${item.userId}`,
      });
    },
    // 获取会话列表
    getChatList() {
      console.log("获取会话列表");
      var im = this.goeasy.im;
      im.latestConversations({
        onSuccess: (res) => {
          // 赋值
          this.chatList = res.content.conversations;
          // 初始化值
          this.chatList.forEach((item) => {
            // 时间格式化
            item.lastMessage.timestamp = formatTime(item.lastMessage.timestamp);
          });
        },
        onFailed: (error) => console.log(`获取会话列表失败：${error}`),
      });
    },
    // 监听会话列表
    onConversationList() {
      console.log("会话列表发生变化");
      var im = this.goeasy.im;
      var onConversationsUpdated = (res) => {
        // 赋值
        this.chatList = res.conversations;
        // 初始化值
        this.chatList.forEach((item) => {
          // 时间格式化
          item.lastMessage.timestamp = formatTime(item.lastMessage.timestamp);
        });
      };
      //监听会话列表更新
      im.on(GoEasy.IM_EVENT.CONVERSATIONS_UPDATED, onConversationsUpdated);
    },
    // 好友请求
    getNotice() {
      // 好友请求API
      getNotice({ type: 1 }).then((res) => {
        // 赋值
        this.notice = res.data.length;
      });
    },
    // 前往好友请求
    goFriendRequest() {
      uni.navigateTo({
        url: "/pages/contacts/pendingRequest",
      });
    },
    // 前往助手
    goAssistant() {
      uni.navigateTo({
        url: "/pages/news/helper",
      });
    },
  },
  onLoad() {
    // 监听会话列表
    this.onConversationList();
    // 获取会话列表
    this.getChatList();
    // 好友请求
    this.getNotice();
  },
  onShow() {
    // 判断是否登录
    if (!uni.getStorageSync("token")) return (this.loginModal.show = true);
    // 获取会话列表
    this.getChatList();
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
