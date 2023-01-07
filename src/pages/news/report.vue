<template>
  <view>
    <!-- 头部 -->
    <Head title="投诉" style="background: #f6f6f6" />
    <!-- 内容 -->
    <view class="content">
      <!-- 提示 -->
      <view class="content_1">(必选)请选择投诉该账号的原因</view>
      <!-- 选项 -->
      <view
        class="content_2"
        v-for="(item, index) in type"
        :key="index"
        @click="item.isSelect = !item.isSelect"
      >
        <!-- 空选项 -->
        <view class="content_2_1" v-if="!item.isSelect" />
        <!-- 选中 -->
        <image
          class="content_2_1"
          src="http://39.106.208.234/pic/img_/xuanzhong.png"
          v-if="item.isSelect"
        />
        <!-- 文本 -->
        <view class="content_2_2">{{ item.text }}</view>
      </view>
    </view>
    <!-- 按钮 -->
    <view class="btn" @click="submit">提交</view>
  </view>
</template>

<script>
import Head from "../../components/Head";
import { showToast } from "../../utils";
export default {
  data() {
    return {
      // 选中的投诉类型
      type: [
        { text: "发布不适当内容对我造成骚扰", isSelect: false },
        { text: "存在欺诈骗钱行为", isSelect: false },
        { text: "发布仿冒品信息", isSelect: false },
        { text: "冒充他人", isSelect: false },
        { text: "其他问题", isSelect: false },
      ],
    };
  },
  methods: {
    // 提交投诉
    submit() {
      // 信息打印
      showToast("提交成功,我们会尽快处理");
    },
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import "./report.scss";
</style>