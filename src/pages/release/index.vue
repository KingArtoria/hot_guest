<template>
  <view>
    <!-- 头部背景 -->
    <view class="head" />
    <!-- 内容 -->
    <view class="content">
      <!-- 标题 -->
      <view class="content_1">发布合作信息</view>
      <!-- 列表 -->
      <view class="content_2">
        <!-- 单个列表 -->
        <view
          class="content_2_1"
          @click="release(item)"
          v-for="(item, index) in themeIcon"
          :key="index"
        >
          <!-- 左侧盒子 -->
          <view class="content_2_1_1">
            <!-- logo -->
            <image class="content_2_1_1_1" :src="item.img" />
            <!-- 信息 -->
            <view class="content_2_1_1_2">
              <!-- 标题 -->
              <view class="content_2_1_1_2_1">{{ item.title }}</view>
              <!-- 文本 -->
              <view class="content_2_1_1_2_2">{{ item.info }}</view>
            </view>
          </view>
          <!-- 图标 -->
          <image
            class="content_2_1_2"
            src="http://39.106.208.234/pic/img_/xaiyy@2x.png"
          />
        </view>
      </view>
    </view>
    <!-- 关闭按钮 -->
    <image
      class="close"
      src="http://39.106.208.234/pic/img_/fabu@2x.png"
      @click="back"
    />
  </view>
</template>
<script>
import { getThemeIcon } from "../../utils/api";
export default {
  data() {
    return {
      // 主题图标
      themeIcon: [],
    };
  },
  methods: {
    // 返回上一页
    back() {
      uni.navigateBack();
    },
    // 获取主题图标
    getThemeIcon() {
      // 主题图标API
      getThemeIcon({ themeType: 2 }).then((res) => {
        // 赋值
        this.themeIcon = res.data;
      });
    },
    // 发布内容
    release(item) {
      // 跳转到发布页面
      uni.navigateTo({
        url: `/pages/release/edit?title=${item.title}&type=${item.type}`,
      });
    },
  },
  onLoad() {
    // 获取主题图标
    this.getThemeIcon();
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>