<template>
  <view>
    <Head title="裁判文书详情" />
    <view class="content">
      <!-- 案件名称 -->
      <view class="content_1">
        <!-- 标题 -->
        <view class="content_1_1">案件名称</view>
        <!-- 文本 -->
        <view class="content_1_2">{{ documentItem.title }}</view>
      </view>
      <!-- 案号&&判决日期 -->
      <view class="content_2">
        <!-- 案号 -->
        <view class="content_2_1">
          <!-- 标题 -->
          <view class="content_2_1_1">案号</view>
          <!-- 文本 -->
          <view class="content_2_1_2">{{ documentItem.case_no }}</view>
        </view>
        <!-- 分割线 -->
        <view class="content_2_2" />
        <!-- 判决日期 -->
        <view class="content_2_1">
          <!-- 标题 -->
          <view class="content_2_1_1">判决日期</view>
          <!-- 文本 -->
          <view class="content_2_1_2">{{ documentItem.judgement_date }}</view>
        </view>
      </view>
      <!-- 法院 -->
      <view class="content_1">
        <!-- 标题 -->
        <view class="content_1_1">法院</view>
        <!-- 文本 -->
        <view class="content_1_2">{{ documentItem.court_name }}</view>
      </view>
      <!-- 相关记录 -->
      <view class="content_1">
        <!-- 标题 -->
        <view class="content_1_1">相关记录</view>
        <!-- 文本 -->
        <view class="content_1_2" v-html="documentItem.the_original_text_of_the_proceedings_record_paragraph" />
      </view>
      <!-- 分割线 -->
      <view class="content_3" />
      <!-- 内容 -->
      <view class="content_4">
        <!-- 内容标题 -->
        <view class="content_4_1">内容</view>
        <!-- 当事人信息小标题 -->
        <view class="content_4_2">
          <!-- 修饰线 -->
          <view class="content_4_2_1" />
          <!-- 标题 -->
          <view class="content_4_2_2">案件基本情况</view>
        </view>
        <!-- 案件基本情况 -->
        <view class="content_4_3" v-html="documentItem.the_basic_situation_of_the_case_paragraph" />
        <!-- 裁定结果小标题 -->
        <view class="content_4_2">
          <!-- 修饰线 -->
          <view class="content_4_2_1" />
          <!-- 标题 -->
          <view class="content_4_2_2">裁定结果</view>
        </view>
        <!-- 裁定结果 -->
        <view class="content_4_3" v-html="documentItem.the_basic_situation_of_the_case_paragraph" />
        <!-- 合议庭小标题 -->
        <view class="content_4_2">
          <!-- 修饰线 -->
          <view class="content_4_2_1" />
          <!-- 标题 -->
          <view class="content_4_2_2">合议庭</view>
        </view>
        <!-- 合议庭 -->
        <view class="content_4_3" v-html="documentItem.text_end_original" />
      </view>
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head';
export default {
  data() {
    return {
      // 文书详情
      documentItem: {},
    };
  },
  methods: {
    // 初始化参数
    initParams() {
      // 文书详情赋值
      this.documentItem = uni.getStorageSync('documentItem');
      this.documentItem.judgement_date = this.documentItem.judgement_date.substring(0, 10);
      console.log(this.documentItem);
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
@import './judgmentDocumentInfo.scss';
</style>
