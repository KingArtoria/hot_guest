<template>
  <view>
    <!-- 返回 -->
    <image class="head" :src="`${_url}black_icon_w.png`" @click="back" />
    <!-- 内容 -->
    <view class="content">
      <!-- 图示 -->
      <image class="content_1" :src="`${_url}bg-xmhz.png`" />
      <!-- 标题 -->
      <view class="content_2">- 期待与您合作 -</view>
      <!-- 表单 -->
      <view class="content_3">
        <!-- key -->
        <view class="content_3_1">* 项目名称</view>
        <!-- value -->
        <u-input
          placeholder="请输入内容"
          fontSize="26rpx"
          style="padding: 0 14rpx; height: 90rpx; width: 690rpx"
          v-model="projectCooperationParams.title"
        />
        <!-- key -->
        <view class="content_3_1">* 项目详情</view>
        <!-- value -->
        <u--textarea
          placeholder="请输入内容"
          style="
            padding: 30rpx 14rpx;
            min-height: 90rpx;
            width: 690rpx;
            line-height: 38rpx;
          "
          maxlength="-1"
          autoHeight
          v-model="projectCooperationParams.content"
        />
        <!-- key -->
        <view class="content_3_1">* 姓名</view>
        <!-- value -->
        <u-input
          placeholder="请输入内容"
          fontSize="26rpx"
          style="padding: 0 14rpx; height: 90rpx; width: 690rpx"
          v-model="projectCooperationParams.name"
        />
        <!-- key -->
        <view class="content_3_1">* 联系方式</view>
        <!-- value -->
        <u-input
          placeholder="请输入内容"
          fontSize="26rpx"
          style="padding: 0 14rpx; height: 90rpx; width: 690rpx"
          v-model="projectCooperationParams.phone"
          type="number"
        />
        <!-- 提交按钮 -->
        <view class="content_3_2" @click="applyProjectCooperation"
          >提交合作</view
        >
      </view>
    </view>
    <!-- 申请成功模态框 -->
    <!-- 申请成功模态框 -->
    <u-modal
      :show="applySuccessModal.show"
      :title="applySuccessModal.title"
      :content="applySuccessModal.content"
      @confirm="applySuccessModal.confirm"
    />
  </view>
</template>

<script>
import { showToast } from "../../utils";
import { applyProjectCooperation } from "../../utils/api";
export default {
  data() {
    return {
      // 项目合作参数
      projectCooperationParams: {},
      // 申请成功模态框对象
      applySuccessModal: {
        // 是否显示
        show: false,
        // 标题
        title: "申请成功",
        // 内容
        content: "我们将尽快与您取得联系",
        // 按钮点击事件
        confirm: () => {
          // 关闭模态框
          this.applySuccessModal.show = false;
          // 返回上一页
          uni.navigateBack();
        },
      },
    };
  },
  methods: {
    // 项目合作
    applyProjectCooperation() {
      applyProjectCooperation(this.projectCooperationParams).then((res) => {
        // 抛出异常
        if (res.code != 1) return showToast(res.msg);
        // 申请成功
        this.applySuccessModal.show = true;
      });
    },
    // 返回上一页
    back() {
      uni.navigateBack();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./projectCooperation.scss";
</style>