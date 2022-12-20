<template>
  <view>
    <!-- 头部 -->
    <Head title="实名认证" />
    <!-- 内容 -->
    <view class="content">
      <!-- 图标 -->
      <image
        class="content_1"
        src="http://39.106.208.234/pic/img_/wanhchengsmrz.png"
      />
      <!-- 提示 -->
      <view class="content_2">您已通过实名认证</view>
      <!-- 表单 -->
      <view class="content_3">
        <!-- key -->
        <view class="content_3_1">真实姓名</view>
        <!-- value -->
        <view class="content_3_2">{{ _userInfo.name }}</view>
      </view>
      <!-- 表单 -->
      <view class="content_3">
        <!-- key -->
        <view class="content_3_1">身份证号</view>
        <!-- value -->
        <view class="content_3_2">{{ _userInfo.card }}</view>
      </view>
    </view>
  </view>
</template>

<script>
import Head from "../../components/Head";
export default {
  onLoad() {
    // 模糊展示姓名
    this._userInfo.name = this._userInfo.name.replace(
      /(\S{1})\S*(\S{1})/,
      "$1*"
    );
    // 模糊展示身份证号
    this._userInfo.card = this._userInfo.card.replace(
      /(\S{4})\S*(\S{4})/,
      "$1********$2"
    );
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import "./verifiedOk.scss";
</style>