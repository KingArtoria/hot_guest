<template>
  <view>
    <Head title="行政处罚详细" />
    <view class="content">
      <!-- 标题 -->
      <view class="content_1">标题</view>
      <!-- 内容 -->
      <view class="content_2">{{ data.name }}</view>
      <!-- 标题 -->
      <view class="content_1">案号</view>
      <!-- 内容 -->
      <view class="content_2">{{ data.document_no }}</view>
      <!-- 分割线 -->
      <view class="content_3" />
      <!-- 标题 -->
      <view class="content_1">公司或相关人员</view>
      <!-- 内容 -->
      <view class="content_2">{{ data.company_name }}</view>
      <!-- 标题 -->
      <view class="content_1">决定机关</view>
      <!-- 内容 -->
      <view class="content_2">{{ data.office_no }}</view>
      <!-- 标题 -->
      <view class="content_1">违法类型</view>
      <!-- 内容 -->
      <view class="content_2">{{ data.type_one }}</view>
      <!-- 标题 -->
      <view class="content_1">原因</view>
      <!-- 内容 -->
      <view class="content_2">{{ data.reason }}</view>
      <!-- 标题 -->
      <view class="content_1">法律依据</view>
      <!-- 内容 -->
      <view class="content_2">{{ data.according }}</view>
      <!-- 标题 -->
      <view class="content_1">处罚内容</view>
      <!-- 内容 -->
      <view class="content_2">{{ data.content }}</view>
      <!-- 标题 -->
      <view class="content_1">决定日期</view>
      <!-- 内容 -->
      <view class="content_2">{{ data.decide_date }}</view>
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head';
export default {
  data() {
    return {
      data: '',
    };
  },
  methods: {
    // 初始化参数
    initParams() {
      this.data = uni.getStorageSync('documentItem');
    },
  },
  mounted() {
    // 初始化参数
    this.initParams();
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import './administrativePenaltyInfo.scss';
</style>
