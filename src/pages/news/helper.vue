<template>
  <view>
    <!-- 头部标题 -->
    <Head title="火客小助手" />
    <!-- 内容 -->
    <view class="content">
      <!-- 通知列表 -->
      <view class="content_1">
        <!-- 单个信息 -->
        <view
          class="content_2"
          v-for="(item, index) in systemNotice"
          :key="index"
        >
          <!-- 头像 -->
          <image
            class="content_2_1"
            src="http://39.106.208.234/pic/img_/zs.png"
          />
          <!-- 内容 -->
          <view class="content_2_2">
            <!-- 标题 -->
            <view class="content_2_2_1">{{ item.content }}</view>
            <!-- 图片 -->
            <image class="content_2_2_2" :src="item.pic" mode="widthFix" />
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Head from "../../components/Head";
import { getSystemNotice } from "../../utils/api";
export default {
  data() {
    return {
      // 系统通知
      systemNotice: [],
    };
  },
  methods: {
    // 系统通知
    getSystemNotice() {
      // 系统通知API
      getSystemNotice().then((res) => {
        // 赋值
        this.systemNotice = res.data;
      });
    },
  },
  onLoad() {
    // 系统通知
    this.getSystemNotice();
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import "./helper.scss";
</style>