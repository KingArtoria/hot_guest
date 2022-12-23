<template>
  <view>
    <!-- 头部 -->
    <Head title="管理常用语" />
    <!-- 内容 -->
    <view class="content">
      <!-- 列表 -->
      <view class="content_1">
        <!-- 单个信息 -->
        <view class="content_1_1" v-for="(item, index) in common" :key="index">
          <!-- 内容 -->
          <view class="content_1_1_1">{{ item }}</view>
          <!-- 编辑 -->
          <view class="content_1_1_2" @click="edit(item, index)">
            <!-- 图标 -->
            <image
              class="content_1_1_2_1"
              src="http://39.106.208.234/pic/img_/bianji@2x.png"
            />
            <!-- 文本 -->
            <view class="content_1_1_2_2">编辑</view>
          </view>
        </view>
      </view>
    </view>
    <!-- 添加按钮盒子 -->
    <view class="ok">
      <!-- 按钮 -->
      <view class="ok_1" @click="add">添加常用语</view>
    </view>
  </view>
</template>

<script>
import Head from "../../components/Head";
export default {
  data() {
    return {
      // 常用语
      common: [],
    };
  },
  methods: {
    // 添加常用语
    add() {
      // 跳转添加常用语页面
      uni.navigateTo({
        url: "/pages/news/addPhrases",
      });
    },
    // 编辑常用语
    edit(item, index) {
      // 跳转编辑常用语页面
      uni.navigateTo({
        url: `/pages/news/addPhrases?index=${index + 1}&text=${item}`,
      });
    },
  },
  onShow() {
    // 获取常用语
    this.common = uni.getStorageSync("common");
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import "./managementIdioms.scss";
</style>