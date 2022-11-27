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
              ref="uCode1"
              @change="codeChange1"
              seconds="60"
              changeText="X秒重新获取"
            />
            <u--text
              type="primary"
              @tap="getVerificationCode(1)"
              :text="tips1"
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
          v-model="phone2"
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
              ref="uCode2"
              @change="codeChange2"
              seconds="60"
              changeText="X秒重新获取"
            />
            <u--text
              type="primary"
              @tap="getVerificationCode(2)"
              :text="tips2"
              size="28rpx"
            />
          </template>
        </u-input>
      </view>
      <!-- 提交按钮 -->
      <view class="content_2" @click="changePhone">提交</view>
    </view>
    <!-- 更改成功模态框 -->
    <u-modal
      :show="modal.show"
      :title="modal.title"
      :content="modal.content"
      @confirm="model.confirm"
    />
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
      phone1: "151****4662",
      // 新的手机号
      phone2: "",
      // 旧的验证码
      code1: "",
      // 新的验证码
      code2: "",
      // 更改成功模态框
      modal: {
        show: false,
        title: "更改成功",
        content: "您的手机号已更改成功,请重新登录",
        confirm: () => {
          uni.removeStorageSync("token");
          uni.reLaunch({
            url: "/pages/user/login",
          });
        },
      },
    };
  },
  methods: {
    // 更改手机号
    changePhone() {
      // 创建参数
      let params = {
        phone1: this._userInfo.account,
        code1: this.code1,
        phone2: this.phone2,
        code2: this.code2,
      };
      // 更改手机号API
      changePhone(params).then((res) => {
        // 抛出异常
        if (res.code != 1) return showToast(res.msg);
      });
    },
    // 获取验证码
    getVerificationCode(type) {
      let phone = this.phone2;
      if (type == 1) phone = this._userInfo.account;
      // 参数赋值
      let params = { phone, type: "changephone" };
      // 获取验证码
      getVerificationCode(params).then((res) => {
        // 抛出异常
        if (res.code != 1) return showToast(res.msg);
        // 提示
        uni.$u.toast("验证码已发送");
        // 倒计时
        this.$refs[`uCode${type}`].start();
      });
    },
    // 倒计时1
    codeChange1(text) {
      // 文本重新赋值
      this.tips1 = text;
    },
    // 倒计时2
    codeChange2(text) {
      // // 文本重新赋值
      this.tips2 = text;
    },
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import "./modifyPhoneNumber.scss";
</style>
