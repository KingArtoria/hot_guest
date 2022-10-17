<template>
  <view>
    <Head title="修改手机号" />
    <view class="content">
      <!-- 输入框 -->
      <view class="content_1">
        <view class="content_1_1">旧手机号</view>
        <u-input value="15190664662" border="none" :disabled="true" fontSize="28rpx" disabledColor="#fff" inputAlign="end" color="#317AF6" />
      </view>
      <view class="content_1">
        <view class="content_1_1">验证码</view>
        <u-input placeholder="请输入验证码" border="none" inputAlign="end" color="#317AF6" fontSize="28rpx">
          <template slot="suffix">
            <u-code ref="uCode" @change="codeChange" seconds="20" changeText="X秒重新获取" />
            <u-button @tap="getCode" :text="tips" type="primary" />
          </template>
        </u-input>
      </view>
      <view class="content_1">
        <view class="content_1_1">新手机号</view>
        <u-input border="none" fontSize="28rpx" disabledColor="#fff" inputAlign="end" color="#317AF6" placeholder="请输入新手机号" />
      </view>
      <!-- 提交按钮 -->
      <view class="content_2">提交</view>
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head';
export default {
  data() {
    return {
      tips: '获取验证码',
    };
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import './modifyPhoneNumber.scss';
</style>
