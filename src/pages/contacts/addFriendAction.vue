<template>
  <view>
    <view class="head">
      <view class="head_1">
        <image
          class="head_1_1"
          src="http://39.106.208.234/pic/img_/black_ss.png"
          @click="back"
        />
        <view class="head_1_2">
          <image
            class="head_1_2_1"
            src="http://39.106.208.234/pic/img_/sousuo_rm.png"
          />
          <u-input
            border="none"
            placeholder="手机号/昵称"
            fontSize="26rpx"
            v-model="searchFriendParams.name"
          />
        </view>
        <view class="head_1_3" @click="searchFriend">搜索</view>
      </view>
    </view>
    <view class="content">
      <!-- 分割 -->
      <view class="content_1" />
      <Contacts :data="contactsList" />
    </view>
  </view>
</template>

<script>
import Contacts from "@/components/Contacts";
import { getRecommend, searchFriend } from "../../utils/api";
export default {
  data() {
    return {
      // 人脉列表
      contactsList: [],
      // 搜索人脉参数
      searchFriendParams: {},
    };
  },
  methods: {
    // 推荐人脉
    getRecommend() {
      // 推荐人脉API
      getRecommend().then((res) => {
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
    // 搜索人脉
    searchFriend() {
      searchFriend(this.searchFriendParams).then((res) => {
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
    // 返回上一页
    back() {
      uni.navigateBack();
    },
  },
  onLoad() {
    // 推荐人脉
    this.getRecommend();
  },
  components: { Contacts },
};
</script>

<style lang="scss" scoped>
@import "./addFriendAction.scss";
</style>
