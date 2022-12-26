<template>
  <view>
    <!-- 头部内容 -->
    <Head :title="title">
      <view slot="head_3_1" :style="slotStyle" @click="feedback">完成</view>
    </Head>
    <!-- 内容 -->
    <view class="content">
      <!-- 文本域 -->
      <view class="content_1">
        <u--textarea
          v-model="text"
          placeholder="请输入您的常用回复"
          border="none"
          confirmType="done"
        />
      </view>
    </view>
    <!-- 添加完成模态框 -->
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
export default {
  data() {
    return {
      // 头部插槽样式
      slotStyle: {
        "font-size": "34rpx",
        "font-family": "PingFang SC",
        " font-weight": 500,
        color: "#2a2a2a",
      },
      // 文本域内容
      text: "",
      // 添加完成模态框对象
      modal: {
        show: false,
        title: "操作完成",
        content: "您已完成编辑",
        confirm: () => {
          // 返回上一级
          uni.navigateBack();
        },
      },
      // 头部标题
      title: "",
      // op
      op: "",
    };
  },
  methods: {
    // 添加常用语
    feedback() {
      // 取当前常用语
      let common = uni.getStorageSync("common");
      // 编辑常用语
      if (this.op.index > 0) {
        // 修改
        common[this.op.index - 1] = this.text;
        // 存储常用语
        uni.setStorageSync("common", common);
        // 修改完成
        this.modal.show = true;
      } else {
        // 添加
        common.push(this.text);
        // 存储常用语
        uni.setStorageSync("common", common);
        // 添加完成
        this.modal.show = true;
      }
    },
  },
  onLoad(op) {
    this.op = op;
    // 初始化文本域内容
    if (op.index > 0) {
      // 编辑常用语
      this.text = op.text;
      // 初始化标题
      this.title = "编辑常用语";
    } else {
      // 初始化标题
      this.title = "添加常用语";
    }
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import "./addPhrases.scss";
</style>