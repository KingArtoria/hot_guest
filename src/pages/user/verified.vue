<template>
  <view>
    <Head title="实名认证" />
    <view class="content">
      <!-- 标题 -->
      <view class="content_1">请输入身份信息</view>
      <!-- 文案介绍 -->
      <view class="content_2">
        因国家政策要求，为营造诚信合作环境，保障合作信息真实有效，身份信息不会在火客app中展示，我们将严格保护您的个人信息。
      </view>
      <!-- 个人信息 -->
      <view class="content_3">
        <view class="content_3_1">真实姓名</view>
        <view class="content_3_2">
          <u--input
            placeholder="请输入您本人的真实姓名"
            fontSize="32rpx"
            border="none"
            v-model="realNameParams.name"
          />
        </view>
      </view>
      <!-- 个人信息 -->
      <view class="content_3">
        <view class="content_3_1">身份证号</view>
        <view class="content_3_2">
          <u--input
            placeholder="请输入您本人的身份证号码"
            fontSize="32rpx"
            border="none"
            v-model="realNameParams.card"
          />
        </view>
      </view>
      <!-- 按钮 -->
      <view class="content_5" @click="realName">提交</view>
    </view>
    <!-- 实名成功模态框 -->
    <u-modal
      :show="modal.show"
      :title="modal.title"
      :content="modal.content"
      @confirm="modal.confirm"
    />
  </view>
</template>

<script>
import Vue from "vue";
import Head from "../../components/Head";
import { showToast } from "../../utils";
import { realName } from "../../utils/api";
export default {
  data() {
    return {
      // 实名认证参数
      realNameParams: {},
      // 实名成功模态框
      modal: {
        show: false,
        title: "实名认证成功",
        content: "您已成功实名认证，可在个人中心查看",
        confirm: () => {
          // 关闭模态框
          this.modal.show = false;
          // 返回上一页
          uni.navigateBack();
        },
      },
    };
  },
  methods: {
    // 实名认证
    realName() {
      // 实名认证API
      realName(this.realNameParams).then((res) => {
        // 抛出异常
        if (res.code != 1) return showToast(res.msg);
        Vue.prototype._userInfo = res.data;
        // 实名成功
        this.modal.show = true;
      });
    },
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import "./verified.scss";
</style>
