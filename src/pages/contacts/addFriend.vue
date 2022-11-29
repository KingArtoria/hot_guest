<template>
  <view>
    <Head title="添加好友" style="background: #f6f6f6">
      <view slot="head_3_1" :style="slotStyle" @click="getRecommend">更新</view>
    </Head>
    <view class="content">
      <!-- 搜索框 -->
      <view class="content_1" @click="goAddFriendAction">
        <image
          class="content_1_1"
          src="http://39.106.208.234/pic/img_/sousuo_rm.png"
        />
        <view class="content_1_2">手机号/昵称</view>
      </view>
      <!-- 添加通讯录好友 -->
      <view class="content_2">
        <image
          class="content_2_1"
          src="http://39.106.208.234/pic/img_/shouji.png"
        />
        <view class="content_2_2">添加通讯录好友</view>
      </view>
      <!-- 人脉Tabs -->
      <view class="content_3">
        <view class="content_3_1">
          <view
            class="content_3_1_1"
            :style="currentTab == 1 ? 'font-weight: bold' : 'font-weight: 400'"
            @click="tabChange(1)"
            >推荐人脉</view
          >
          <view
            class="content_3_1_1"
            :style="currentTab == 2 ? 'font-weight: bold' : 'font-weight: 400'"
            @click="tabChange(2)"
            >同行</view
          >
          <view
            class="content_3_1_1"
            :style="currentTab == 3 ? 'font-weight: bold' : 'font-weight: 400'"
            @click="tabChange(3)"
            >同城</view
          >
          <view
            class="content_3_1_1"
            :style="currentTab == 4 ? 'font-weight: bold' : 'font-weight: 400'"
            @click="tabChange(4)"
            >校友</view
          >
        </view>
        <Contacts :data="contactsList" />
      </view>
    </view>
  </view>
</template>

<script>
import Head from "@/components/Head";
import Contacts from "@/components/Contacts";
import { getRecommend } from "../../utils/api";
export default {
  data() {
    return {
      // 头部插槽样式参数
      slotStyle: {
        width: "87px",
        height: "40px",
        background: "#0078FF",
        "border-radius": "5px",
        display: "inline-block",
        "font-size": "26px",
        "font-weight": 500,
        color: " #FFFFFF",
        "text-align": "center",
        "line-height": "40rpx",
      },
      // 当前选中的tab
      currentTab: 1,
      // 人脉列表
      contactsList: [],
    };
  },
  methods: {
    // 前往添加好友操作
    goAddFriendAction() {
      uni.navigateTo({
        url: "/pages/contacts/addFriendAction",
      });
    },
    // 推荐人脉
    getRecommend() {
      // 加载中
      uni.showLoading({ title: "加载中" });
      // 推荐人脉API
      getRecommend({ type: this.currentTab }).then((res) => {
        uni.hideLoading();
        // 初始化数据
        res.data.forEach((item) => {
          // 初始化头像
          if (item.head.indexOf("http") === -1) {
            item.head = `${this._avatarUrl}${item.head}`;
          }
        });
        // 数据赋值
        this.contactsList = res.data;
      });
    },
    // tab切换
    tabChange(e) {
      // 当前选中的tab
      this.currentTab = e;
      // 获取推荐人脉
      this.getRecommend();
    },
  },
  onLoad() {
    // 推荐人脉
    this.getRecommend();
  },
  components: { Head, Contacts },
};
</script>

<style lang="scss" scoped>
@import "./addFriend.scss";
</style>
