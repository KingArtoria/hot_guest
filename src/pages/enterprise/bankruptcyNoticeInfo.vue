<template>
  <view>
    <Head title="破产公告详情" />
    <view class="content">
      <!-- 大标题 -->
      <view class="content_1">{{ item.title }}</view>
      <!-- 文本 -->
      <view class="content_2">
        <text style="color: #999999">公开时间</text>
        <text style="color: #333333">{{ item.open_time }}</text>
      </view>
      <!-- 文本 -->
      <view class="content_2">
        <text style="color: #999999">公开人</text>
        <text style="color: #333333">{{ item.open_human }}</text>
      </view>
      <!-- 分割线 -->
      <view class="content_3" />
      <view v-html="item.content" />
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head';
export default {
  data() {
    return {
      // 破产公告详情
      item: {},
    };
  },
  methods: {
    // 初始化参数
    initParams() {
      this.item = uni.getStorageSync('item');
    },
  },
  onLoad() {
    // 初始化参数
    this.initParams();
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import './bankruptcyNoticeInfo.scss';
</style>
