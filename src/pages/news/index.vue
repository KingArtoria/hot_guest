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
        <view class="content_2_1">
          <image
            class="content_2_1_1"
            src="http://39.106.208.234/pic/img_/zs.png"
          />
          <view class="content_2_1_2">
            <view class="content_2_1_2_1">
              <view class="content_2_1_2_1_1">火客小助手</view>
              <view class="content_2_1_2_1_2">昨天</view>
            </view>
            <view class="content_2_1_2_2">您的私人小助手</view>
          </view>
        </view>
        <view class="content_2_1">
          <image
            class="content_2_1_1"
            src="http://39.106.208.234/pic/img_/xxzs.png"
          />
          <view class="content_2_1_2">
            <view class="content_2_1_2_1">
              <view class="content_2_1_2_1_1">消息通知小助手</view>
              <view class="content_2_1_2_1_2">16:20</view>
            </view>
            <view class="content_2_1_2_2">有2条好友申请待处理</view>
          </view>
        </view>
      </view>
      <!-- 私聊信息 -->
      <view class="content_3">
        <view
          class="content_3_1"
          @click="goPrivateChat"
          v-for="(item, index) in chatList"
          :key="index"
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
    };
  },
  methods: {
    // 前往私聊
    goPrivateChat() {
      uni.navigateTo({
        url: "/pages/news/privateChat",
      });
    },
    // 获取会话列表
    getChatList() {
      console.log("1");
      var im = this.goeasy.im;
      im.latestConversations({
        onSuccess: (res) => {
          // 赋值
          this.chatList = res.content.conversations;
          console.log(this.chatList);
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
      var im = this.goeasy.im;
      var onConversationsUpdated = (res) => {
        console.log(res);
      };
      //监听会话列表更新
      im.on(GoEasy.IM_EVENT.CONVERSATIONS_UPDATED, onConversationsUpdated);
    },
  },
  onLoad() {
    // 监听会话列表
    this.onConversationList();
  },
  onShow() {
    // 获取会话列表
    this.getChatList();
    // 判断是否登录
    if (!uni.getStorageSync("token")) return (this.loginModal.show = true);
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
