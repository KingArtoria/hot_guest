<template>
  <view>
    <Head title="账号安全" />
    <view class="content">
      <!-- 选项 -->
      <view class="content_1" @click="goModifyPhoneNumber">
        <view class="content_1_1">修改手机号</view>
        <image class="content_1_2" src="http://39.106.208.234/pic/img/enter_jt.png" />
      </view>
      <view class="content_1" @click="goModifyPassword">
        <view class="content_1_1">修改密码</view>
        <image class="content_1_2" src="http://39.106.208.234/pic/img/enter_jt.png" />
      </view>
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head';
export default {
  data() {
    return {};
  },
  methods: {
    // 前往修改手机号
    goModifyPhoneNumber() {
      uni.navigateTo({
        url: '/pages/user/modifyPhoneNumber',
      });
    },
    // 前往修改密码
    goModifyPassword() {
      uni.navigateTo({
        url: '/pages/user/changePassword',
      });
    },
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import './accountSafety.scss';
</style>
