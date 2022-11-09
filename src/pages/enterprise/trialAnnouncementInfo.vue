<template>
  <view>
    <Head title="开庭公告详细" />
    <view class="content">
      <!-- 标题 -->
      <view class="content_1">案件类型</view>
      <!-- 内容 -->
      <view class="content_2">{{ item.case_type }}</view>
      <!-- 标题 -->
      <view class="content_1">案号</view>
      <!-- 内容 -->
      <view class="content_2" style="padding-bottom: 40rpx">{{ item.case_number }}</view>
      <!-- 分割块 -->
      <view class="content_3" />
      <!-- 标题 -->
      <view class="content_1">原告/上诉人</view>
      <!-- 内容 -->
      <view class="content_2">{{ item.plaintiff }}</view>
      <!-- 标题 -->
      <view class="content_1">被告/被上诉人</view>
      <!-- 内容 -->
      <view class="content_2">{{ item.defendant }}</view>
      <!-- 信息块 -->
      <view class="content_4">
        <!-- 左侧 -->
        <view class="content_4_1">
          <!-- 标题 -->
          <view class="content_4_1_1">开庭日期</view>
          <!-- 内容 -->
          <view class="content_4_1_2">{{ item.opening_at }}</view>
        </view>
        <!-- 分割线 -->
        <view class="content_4_2" />
        <!-- 右侧 -->
        <view class="content_4_1">
          <!-- 标题 -->
          <view class="content_4_1_1">发布日期</view>
          <!-- 内容 -->
          <view class="content_4_1_2">{{ item.publish_at }}</view>
        </view>
      </view>
      <!-- 分割块 -->
      <view class="content_3" />
      <!-- 标题 -->
      <view class="content_1">法院</view>
      <!-- 内容 -->
      <view class="content_2">{{ item.court }}</view>
      <!-- 标题 -->
      <view class="content_1">法院辖区</view>
      <!-- 内容 -->
      <view class="content_2">{{ item.jurisdiction }}</view>
      <!-- 标题 -->
      <view class="content_1">法庭</view>
      <!-- 内容 -->
      <view class="content_2" style="padding-bottom: 40rpx;">{{ item.court_court_numb }}</view>
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
@import './trialAnnouncementInfo.scss';
</style>
