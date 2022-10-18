<template>
  <view>
    <!-- 头部 -->
    <view class="head">
      <view class="head_1">
        <view class="head_1_1" />
        <view class="head_1_2">人脉</view>
        <view class="head_1_3">
          <image class="head_1_3_1" src="http://39.106.208.234/pic/img_/tianjia2.png" />
        </view>
      </view>
    </view>
    <view class="content">
      <!-- 搜索框 -->
      <view class="content_1">
        <image class="content_1_1" src="http://39.106.208.234/pic/img_/sousuo_rm.png" />
        <u-input border="none" fontSize="28rpx" placeholder="搜索人脉" />
      </view>
      <!-- 好友列表 -->
      <view class="content_2" @click="goFriendList">
        <view class="content_2_1">
          <image class="content_2_1_1" src="http://39.106.208.234/pic/img_/hylb2.png" />
          <view class="content_2_1_2">好友列表（30）</view>
        </view>
        <image class="content_2_2" src="http://39.106.208.234/pic/img_/jinr.png" />
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
        <image class="content_3_2" src="http://39.106.208.234/pic/img_/kaiqitongxunl.png" />
      </view>
      <!-- 待处理请求 -->
      <view class="content_4">
        <view class="content_4_1">
          <view class="content_4_1_1">
            <view class="content_4_1_1_1">待处理请求</view>
            <view class="content_4_1_1_2">3</view>
          </view>
          <view class="content_4_1_2">
            <view class="content_4_1_2_1">管理我的请求</view>
            <image class="content_4_1_2_2" src="http://39.106.208.234/pic/img_/jinr.png" />
          </view>
        </view>
        <FriendRequest />
      </view>
      <!-- Tabs -->
      <view class="content_5">
        <view class="content_5_1">
          <view class="content_5_1_1">
            <view class="content_5_1_1_1">推荐人脉</view>
            <view class="content_5_1_1_1">同行</view>
            <view class="content_5_1_1_1">同城</view>
            <view class="content_5_1_1_1">校友</view>
          </view>
          <view class="content_5_1_2">刷新</view>
        </view>
        <Contacts />
      </view>
    </view>
  </view>
</template>

<script>
import FriendRequest from '@/components/FriendRequest';
import Contacts from '@/components/Contacts';
export default {
  methods: {
    // 前往好友列表
    goFriendList() {
      uni.navigateTo({
        url: '/pages/contacts/buddyList',
      });
    },
  },
  components: { FriendRequest, Contacts },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
