<template>
  <view>
    <Head title="人员证书详情" />
    <view class="content">
      <!-- 大标题 -->
      <view class="content_1">
        <!-- 图标 -->
        <image class="content_1_1" src="http://39.106.208.234/pic/img/people.png" />
        <!-- 文本 -->
        <view class="content_1_2">{{ item.name }}-{{ item.company }}</view>
      </view>
      <!-- 信息块 -->
      <view class="content_2">
        <!-- 左侧 -->
        <view class="content_2_1">
          <!-- 标题 -->
          <view class="content_2_1_1">地区</view>
          <!-- 文本 -->
          <view class="content_2_1_2">{{ item.province }}</view>
        </view>
        <!-- 分割线 -->
        <view class="content_2_2" />
        <!-- 右侧 -->
        <view class="content_2_1">
          <!-- 标题 -->
          <view class="content_2_1_1">等级</view>
          <!-- 文本 -->
          <view class="content_2_1_2">{{ item.grade }}</view>
        </view>
      </view>
      <!-- 小标题 -->
      <view class="content_4">企业名称</view>
      <!-- 内容 -->
      <view class="content_5" style="padding-bottom: 40rpx">{{ item.company }}</view>
      <!-- 分割块 -->
      <view class="content_3" />
      <!-- 信息块 -->
      <view class="content_2" style="padding-top: 40rpx">
        <!-- 左侧 -->
        <view class="content_2_1">
          <!-- 标题 -->
          <view class="content_2_1_1">注册号</view>
          <!-- 文本 -->
          <view class="content_2_1_2">{{ item.certificateof_registration }}</view>
        </view>
        <!-- 分割线 -->
        <view class="content_2_2" />
        <!-- 右侧 -->
        <view class="content_2_1">
          <!-- 标题 -->
          <view class="content_2_1_1">注册证书编号</view>
          <!-- 文本 -->
          <view class="content_2_1_2">{{ item.code }}</view>
        </view>
      </view>
      <!-- 小标题 -->
      <view class="content_4">执业资格证书编号</view>
      <!-- 内容 -->
      <view class="content_5" style="padding-bottom: 40rpx">{{ item.code }}</view>
      <!-- 分割块 -->
      <view class="content_3" />
      <!-- 小标题 -->
      <view class="content_4" style="padding-top: 40rpx">注册专业</view>
      <!-- 内容 -->
      <view class="content_5">{{ item.registered_major }}</view>
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head';
export default {
  data() {
    return {
      // 数据
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
@import './personnelCertificateInfo.scss';
</style>
