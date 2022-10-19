<template>
  <view>
    <view class="head">
      <view class="head_1">
        <image class="head_1_1" src="http://39.106.208.234/pic/img_/black_ss.png" />
        <view class="head_1_2">
          <image class="head_1_2_1" src="http://39.106.208.234/pic/img_/sousuo_rm.png" />
          <u-input border="none" placeholder="手机号/昵称" fontSize="26rpx" />
        </view>
        <view class="head_1_3">搜索</view>
      </view>
    </view>
    <view class="content">
      <!-- 分割 -->
      <view class="content_1" />
      <Contacts />
    </view>
  </view>
</template>

<script>
import Contacts from '@/components/Contacts';
export default {
  components: { Contacts },
};
</script>

<style lang="scss" scoped>
@import './addFriendAction.scss';
</style>
