<template>
  <view>
    <Head title="设置" />
    <view class="content">
      <!-- 分割层 -->
      <view class="content_1" />
      <!-- 选项 -->
      <view class="content_2" @click="goAccountSecurity">
        <view class="content_2_1">账号安全</view>
        <image class="content_2_2" src="http://39.106.208.234/pic/img/enter_jt.png" />
      </view>
      <view class="content_2">
        <view class="content_2_1">关于火客</view>
        <image class="content_2_2" src="http://39.106.208.234/pic/img/enter_jt.png" />
      </view>
      <view class="content_2">
        <view class="content_2_1">服务协议</view>
        <image class="content_2_2" src="http://39.106.208.234/pic/img/enter_jt.png" />
      </view>
      <view class="content_2">
        <view class="content_2_1">隐私政策</view>
        <image class="content_2_2" src="http://39.106.208.234/pic/img/enter_jt.png" />
      </view>
      <!-- 账号注销 -->
      <view class="content_3">账号注销</view>
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head';
export default {
  methods: {
    // 前往账号安全
    goAccountSecurity() {
      uni.navigateTo({
        url: '/pages/user/accountSafety',
      });
    },
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import './settings.scss';
</style>
