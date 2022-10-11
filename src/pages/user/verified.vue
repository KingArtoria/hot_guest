<template>
  <view>
    <Head title="实名认证" />
    <view class="content">
      <!-- 标题 -->
      <view class="content_1">请输入身份信息</view>
      <!-- 文案介绍 -->
      <view class="content_2">为营造诚信合作环境，保障合作信息真实有效，我们已接入阿里云实名认证服务；身份信息不会在火客app中展示，我们将严格保护您的个人信息。</view>
      <!-- 个人信息 -->
      <view class="content_3">
        <view class="content_3_1">真实姓名</view>
        <view class="content_3_2">
          <u--input placeholder="请输入您本人的真实姓名" fontSize="32rpx" border="none" />
        </view>
      </view>
      <!-- 个人信息 -->
      <view class="content_3">
        <view class="content_3_1">身份证号</view>
        <view class="content_3_2">
          <u--input placeholder="请输入您本人的身份证号码" fontSize="32rpx" border="none" />
        </view>
      </view>
      <!-- 按钮 -->
      <view class="content_5">下一步</view>
      <!-- 技术介绍 -->
      <view class="content_6">实名认证服务由阿里云提供</view>
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
@import './verified.scss';
</style>
