<template>
  <view>
    <Head title="修改密码" />
    <view class="content">
      <!-- 输入框 -->
      <view class="content_1">
        <view class="content_1_1">手机号</view>
        <u-input
          value="15190664662"
          border="none"
          :disabled="true"
          fontSize="28rpx"
          disabledColor="#fff"
          inputAlign="end"
          color="#317AF6"
          v-model="changePasswordParams.phone"
        />
      </view>
      <view class="content_1">
        <view class="content_1_1">验证码</view>
        <u-input
          placeholder="请输入验证码"
          border="none"
          inputAlign="end"
          color="#317AF6"
          fontSize="28rpx"
          v-model="changePasswordParams.code"
        >
          <template slot="suffix">
            <u-code
              ref="uCode"
              @change="codeChange"
              seconds="60"
              changeText="X秒重新获取"
            />
            <u--text type="primary" @tap="getCode" :text="tips" size="28rpx" />
          </template>
        </u-input>
      </view>
      <view class="content_1">
        <view class="content_1_1">新密码</view>
        <u-input
          border="none"
          fontSize="28rpx"
          disabledColor="#fff"
          inputAlign="end"
          color="#317AF6"
          placeholder="请输入新密码"
          v-model="changePasswordParams.pass"
          type="password"
        />
      </view>
      <view class="content_1">
        <view class="content_1_1">确认密码</view>
        <u-input
          border="none"
          fontSize="28rpx"
          disabledColor="#fff"
          inputAlign="end"
          color="#317AF6"
          placeholder="请确认密码"
          type="password"
          v-model="changePasswordParams.againpass"
        />
      </view>
      <!-- 提交按钮 -->
      <view class="content_2" @click="changePassword">提交</view>
    </view>
    <!-- 修改成功模态框 -->
    <u-modal
      :show="modal.show"
      :title="modal.title"
      :content="modal.content"
      @confirm="modal.confirm"
    />
  </view>
</template>

<script>
import Head from "../../components/Head";
import { showToast } from "../../utils";
import { changePassword, getVerificationCode } from "../../utils/api";
export default {
  data() {
    return {
      // 验证码
      tips: "获取验证码",
      // 修改密码参数
      changePasswordParams: {},
      // 修改成功模态框
      modal: {
        show: false,
        title: "修改成功",
        content: "您的密码已修改成功",
        confirm: () => {
          // 关闭模态框
          this.modal.show = false;
          // 删除token
          uni.removeStorageSync("token");
          // 跳转到登录页面
          uni.reLaunch({
            url: "/pages/user/login",
          });
        },
      },
    };
  },
  methods: {
    // 修改密码
    changePassword() {
      // 修改密码API
      changePassword(this.changePasswordParams).then((res) => {
        // 抛出异常
        if (res.code != 1) return showToast(res.msg);
        // 修改成功
        this.modal.show = true;
      });
    },
    // 获取验证码
    getCode() {
      // 赋值参数
      let params = {
        phone: this.changePasswordParams.phone,
        type: "uppass",
      };
      // 获取验证码API
      getVerificationCode(params).then((res) => {
        // 抛出异常
        if (res.code != 1) return showToast(res.msg);
        // 倒计时
        this.$refs.uCode.start();
      });
    },
    // 验证码改变
    codeChange(text) {
      this.tips = text;
    },
  },
  onLoad() {
    // 手机号赋值
    this.changePasswordParams.phone = this._userInfo.account;
  },
  components: {
    Head,
  },
};
</script>

<style lang="scss" scoped>
@import "./changePassword.scss";
</style>
