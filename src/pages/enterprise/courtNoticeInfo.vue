<template>
  <view>
    <Head title="法院公告详细" />
    <view class="content">
      <!-- 信息框 -->
      <view class="content_1">
        <!-- 左侧信息 -->
        <view class="content_1_1">
          <!-- 标题 -->
          <view class="content_1_1_1">公开人</view>
          <!-- 文本 -->
          <view class="content_1_1_2">{{ item.court }}</view>
        </view>
        <!-- 分割线 -->
        <view class="content_1_2" />
        <!-- 右侧信息 -->
        <view class="content_1_1">
          <!-- 标题 -->
          <view class="content_1_1_1">公开时间</view>
          <!-- 文本 -->
          <view class="content_1_1_2">{{ item.publish_date }}</view>
        </view>
      </view>
      <!-- 标题 -->
      <view class="content_3">当事人</view>
      <!-- 内容 -->
      <view class="content_4" style="padding-bottom: 52rpx">{{ item.party_person }}</view>
      <!-- 分割块 -->
      <view class="content_2" />
      <!-- 标题 -->
      <view class="content_3">公告详情</view>
      <!-- 内容 -->
      <view class="content_4">{{ item.content }}</view>
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head';
export default {
  data() {
    return {
      item: '',
    };
  },
  methods: {
    // 初始化参数
    initParams() {
      // 缓存取值
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
@import './courtNoticeInfo.scss';
</style>
