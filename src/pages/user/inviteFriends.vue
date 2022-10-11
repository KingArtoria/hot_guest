<template>
  <view>
    <view class="head">
      <view class="head_1">
        <image class="head_1_1" src="http://39.106.208.234/pic/img_/black_icon_w.png" />
      </view>
      <view class="head_2">邀请好友</view>
      <view class="head_3" />
    </view>
    <view class="content">
      <!-- 通告 -->
      <view class="content_1">用户xxx已累计获得好友返现金额100元</view>
      <!-- 邀请码 -->
      <view class="content_2">15190664662</view>
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
      <view class="content_4">
        
      </view>
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head';
export default {
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import './inviteFriends.scss';
</style>
