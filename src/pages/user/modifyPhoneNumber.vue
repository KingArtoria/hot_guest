<template>
  <view>
    <Head title="修改手机号" />
    <view class="content">
      <!-- 输入框 -->
      <view class="content_1">
        <view class="content_1_1">旧手机号</view>
        <u-input
          value="15190664662"
          border="none"
          :disabled="true"
          fontSize="28rpx"
          disabledColor="#fff"
          inputAlign="end"
          color="#317AF6"
          v-model="phone1"
        />
      </view>
      <view class="content_1">
        <view class="content_1_1">验证码</view>
        <u-input
          placeholder="请输入验证码"
          clearable
          border="none"
          fontSize="28rpx"
          v-model="code1"
          inputAlign="end"
        >
          <template slot="suffix">
            <u-code
              ref="uCode"
              @change="codeChange"
              seconds="60"
              changeText="X秒重新获取"
            />
            <u--text
              type="primary"
              @tap="getVerificationCode"
              :text="tips"
              size="28rpx"
            />
          </template>
        </u-input>
      </view>
      <view class="content_1">
        <view class="content_1_1">新手机号</view>
        <u-input
          border="none"
          fontSize="28rpx"
          disabledColor="#fff"
          inputAlign="end"
          color="#317AF6"
          placeholder="请输入新手机号"
        />
      </view>
      <view class="content_1">
        <view class="content_1_1">验证码</view>
        <u-input
          placeholder="请输入验证码"
          clearable
          border="none"
          fontSize="28rpx"
          v-model="code1"
          inputAlign="end"
        >
          <template slot="suffix">
            <u-code
              ref="uCode"
              @change="codeChange"
              seconds="60"
              changeText="X秒重新获取"
            />
            <u--text
              type="primary"
              @tap="getVerificationCode"
              :text="tips2"
              size="28rpx"
            />
          </template>
        </u-input>
      </view>
      <!-- 提交按钮 -->
      <view class="content_2">提交</view>
    </view>
  </view>
</template>

<script>
import Head from "../../components/Head";
import { showToast } from "../../utils";
import { changePhone, getVerificationCode } from "../../utils/api";
export default {
  data() {
    return {
      // 文本提示1
      tips1: "获取验证码",
      // 文本提示2
      tips2: "获取验证码",
      // 旧的手机号
      phone1: "",
      // 新的手机号
      phone2: "",
      // 旧的验证码
      code1: "",
      // 新的验证码
      code2: "",
    };
  },
  methods: {
    // 更改手机号
    changePhone() {
      // 更改手机号API
      changePhone().then((res) => {
        // 抛出异常
        if (res.code != 1) return showToast(res.msg);
      });
    },
    // 获取验证码
    getVerificationCode() {
      // 参数赋值
      let params = { phone: this.phone, type: "changephone" };
      // 获取验证码
      getVerificationCode(params).then((res) => {
        // 抛出异常
        if (res.code != 1) return showToast(res.msg);
        // 提示
        uni.$u.toast("验证码已发送");
        // 倒计时
        this.$refs.uCode.start();
      });
    },
    // 倒计时
    codeChange(text) {
      // 文本重新赋值
      this.tips = text;
    },
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import "./modifyPhoneNumber.scss";
</style>
