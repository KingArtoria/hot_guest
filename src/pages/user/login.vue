<template>
  <view>
    <view class="content">
      <!-- 关闭按钮 -->
      <image
        class="content_1"
        src="http://39.106.208.234/pic/img_/close_dl.png"
        @click="back"
      />
      <!-- 微信登录 -->
      <view class="content_2" v-show="currentLogin.type == 1">
        <!-- logo -->
        <image
          class="content_2_1"
          src="http://39.106.208.234/pic/img_/logo.png"
        />
        <!-- 小标题 -->
        <view class="content_2_2">找资源更容易</view>
        <!-- 微信登录按钮 -->
        <view class="content_2_3">
          <!-- 微信登录图标 -->
          <image
            class="content_2_3_1"
            src="http://39.106.208.234/pic/img_/wechat2.png"
          />
          <!-- 登录文案 -->
          <text>微信一键登录</text>
        </view>
      </view>
      <!-- 手机号登录 -->
      <view class="content_4" v-show="currentLogin.type != 1">
        <!-- 标题 -->
        <view class="content_4_1" v-show="currentLogin.type == 2"
          >手机号码登录</view
        >
        <view class="content_4_1" v-show="currentLogin.type == 3"
          >密码登录</view
        >
        <view class="content_4_1" v-show="currentLogin.type == 4"
          >注册账号</view
        >
        <!-- 表单 -->
        <view class="content_4_2">
          <!-- 手机号盒子 -->
          <view class="content_4_2_1">
            <!-- 表单icon -->
            <image
              class="content_4_2_1_1"
              src="http://39.106.208.234/pic/img_/shouji2.png"
            />
            <!-- 分割线 -->
            <view class="content_4_2_1_2" />
            <!-- 手机号 -->
            <u-input
              placeholder="请输入手机号"
              clearable
              border="none"
              fontSize="28rpx"
              v-model="phone"
            />
          </view>
          <!-- 验证码盒子 -->
          <view class="content_4_2_1" v-show="currentLogin.type != 3">
            <!-- 表单icon -->
            <image
              class="content_4_2_1_1"
              src="http://39.106.208.234/pic/img_/fangyu.png"
            />
            <!-- 分割线 -->
            <view class="content_4_2_1_2" />
            <!-- 验证码 -->
            <view>
              <u-input
                placeholder="请输入验证码"
                clearable
                border="none"
                fontSize="28rpx"
                v-model="code"
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
                  />
                </template>
              </u-input>
            </view>
          </view>
          <!-- 密码盒子 -->
          <view class="content_4_2_1" v-show="currentLogin.type != 2">
            <!-- 表单icon -->
            <image
              class="content_4_2_1_1"
              src="http://39.106.208.234/pic/img_/mima.png"
            />
            <!-- 分割线 -->
            <view class="content_4_2_1_2" />
            <!-- 密码 -->
            <u-input
              placeholder="请输入密码"
              password
              clearable
              border="none"
              fontSize="28rpx"
              v-model="pass"
            />
          </view>
          <!-- 确认密码盒子-->
          <view class="content_4_2_1" v-show="currentLogin.type == 4">
            <!-- 表单icon -->
            <image
              class="content_4_2_1_1"
              src="http://39.106.208.234/pic/img_/mima.png"
            />
            <!-- 分割线 -->
            <view class="content_4_2_1_2" />
            <!-- 手机号 -->
            <u-input
              placeholder="请确认密码"
              clearable
              border="none"
              fontSize="28rpx"
              password
              v-model="againpass"
            />
          </view>
          <!-- 邀请码盒子 -->
          <view class="content_4_2_1" v-show="currentLogin.type == 4">
            <!-- 表单icon -->
            <image
              class="content_4_2_1_1"
              src="http://39.106.208.234/pic/img_/mima.png"
            />
            <!-- 分割线 -->
            <view class="content_4_2_1_2" />
            <!-- 手机号 -->
            <u-input
              placeholder="请输入邀请码"
              clearable
              border="none"
              fontSize="28rpx"
              v-model="Invitation_code"
            />
          </view>
          <!-- 登录按钮 -->
          <view
            class="content_4_2_2"
            v-show="currentLogin.type != 4"
            @click="loginFn"
            >登录</view
          >
          <!-- 注册按钮 -->
          <view
            class="content_4_2_2"
            v-show="currentLogin.type == 4"
            @click="register"
            >注册</view
          >
        </view>
      </view>
      <!-- 其他登录选项 -->
      <view class="content_3">
        <!-- 标题 -->
        <view class="content_3_1">其他登录方式</view>
        <!-- 登录选项 -->
        <view class="content_3_2">
          <!-- 选项盒子 -->
          <view
            class="content_3_2_1"
            v-for="(item, index) in loginOptions"
            :key="index"
            @click="changeLogin(item)"
          >
            <!-- 图标 -->
            <image class="content_3_2_1_1" :src="item.icon" />
            <!-- 文案 -->
            <view class="content_3_2_1_2">{{ item.name }}</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Vue from "vue";
import { isNull, showToast } from "../../utils/index";
import {
  getUserInfo,
  getVerificationCode,
  passwordLogin,
  phoneLogin,
  register,
} from "../../utils/api";
export default {
  data() {
    return {
      // 登录选项
      loginOptions: [
        {
          type: 2,
          name: "手机登录",
          icon: "http://39.106.208.234/pic/img_/yanzhengma.png",
        },
        {
          type: 3,
          name: "密码登录",
          icon: "http://39.106.208.234/pic/img_/mima_.png",
        },
        {
          type: 4,
          name: "注册账号",
          icon: "http://39.106.208.234/pic/img_/zhuce.png",
        },
      ],
      // 当前登录方式
      currentLogin: {
        type: 1,
        name: "微信登录",
        icon: "http://39.106.208.234/pic/img_/wechat_icon.png",
      },
      // 密码
      pass: "",
      // 手机号
      phone: "",
      // 验证码提示
      tips: "获取验证码",
      // 验证码
      code: "",
      // 邀请码
      Invitation_code: "",
      // 确认密码
      againpass: "",
    };
  },
  methods: {
    // 切换登录方式
    changeLogin(item) {
      // 讲currentLogin赋值给loginOptions中当前的item
      this.loginOptions.forEach((i, index) => {
        if (i.type === item.type) {
          this.loginOptions[index] = this.currentLogin;
        }
      });
      // 将item赋值给currentLogin
      this.currentLogin = item;
    },
    // 预登录
    preLogin() {
      uni.preLogin({
        provider: "univerify",
        success: (res) => {
          this.login();
        },
      });
    },
    // 登录授权
    login() {
      uni.login({
        provider: "univerify",
        success(loginRes) {
          let e = loginRes.authResult;
          console.log(e, "e");
          uniCloud.callFunction({
            name: "getPhoneNumber",
            data: {
              access_token: e.access_token,
              openid: e.openid,
            },
            success: (res) => {
              uni.closeAuthView();
              // 获取用户信息
              this.getUserInfo();
            },
          });
        },
      });
    },
    // 密码登录
    passwordLogin() {
      // 参数赋值
      let params = { pass: this.pass, phone: this.phone };
      // 密码登录
      passwordLogin(params).then((res) => {
        // 抛出异常
        if (res.code != 1) return showToast(res.msg);
        // 保存token
        uni.setStorageSync("token", res.data.token);
        // 获取用户信息
        this.getUserInfo();
      });
    },
    // 登录
    loginFn() {
      switch (this.currentLogin.type) {
        case 3:
          this.passwordLogin();
          break;
        case 2:
          this.phoneLogin();
          break;
      }
    },
    // 获取验证码
    getVerificationCode() {
      let type = this.currentLogin.type == 2 ? "login" : "sign";
      // 参数赋值
      let params = { phone: this.phone, type };
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
      this.tips = text;
    },
    // 手机号登录
    phoneLogin() {
      // 参数赋值
      let params = { phone: this.phone, code: this.code };
      // 手机号登录
      phoneLogin(params).then((res) => {
        // 抛出异常
        if (res.code != 1) return showToast(res.msg);
        // 保存token
        uni.setStorageSync("token", res.data.token);
        // 获取用户信息
        this.getUserInfo();
      });
    },
    // 注册账号
    register() {
      // 参数赋值
      let params = {
        phone: this.phone,
        pass: this.pass,
        againpass: this.againpass,
        code: this.code,
        source: this._source,
        Invitation_code: this.Invitation_code,
      };
      // 校验参数完整性
      if (isNull(params)) return showToast("请将表单填写完整");
      // 注册账号
      register(params).then((res) => {
        // 抛出异常
        if (res.code != 1) return showToast(res.msg);
        // 调用密码登录实现注册完成静默登录
        this.passwordLogin();
      });
    },
    // 返回上一级
    back() {
      console.log("返回上一级");
      // 返回上一级
      uni.navigateBack();
    },
    // 获取用户信息
    getUserInfo() {
      // 获取用户信息API
      getUserInfo().then((res) => {
        // head是否包含http
        if (res.data.head.indexOf("http") === -1) {
          res.data.head = `${this._avatarUrl}${res.data.head}`;
        }
        Vue.prototype._userInfo = res.data;
        // 建立连接;
        this.goeasy.connect({
          // id标识
          id: this._userInfo.id,
          // 自定义数据
          data: {
            // 头像
            head: this._userInfo.head,
            // 名字
            nickName: this._userInfo.nick_name,
            // 公司
            company: this._userInfo.company,
            // 职位
            position: this._userInfo.position,
          },
          // 成功回调
          onSuccess: () => console.log("链接成功"),
          // 失败回调
          onFailed: (error) => console.log(`链接失败${error.content}`),
          // 重连
          onProgress: (attempts) => console.log(`重连中${attempts}`),
        });
        // 返回上一级
        this.back();
      });
    },
  },
  onLoad() {
    // 预登录
    this.preLogin();
  },
};
</script>

<style lang="scss" scoped>
@import "./login.scss";
</style>
