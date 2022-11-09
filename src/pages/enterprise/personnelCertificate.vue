<template>
  <view>
    <Head title="人员证书" />
    <view class="content">
      <!-- 单个  -->
      <view class="content_1" v-for="(item, index) in personnelCertificateList" :key="index" @click="toPersonnelCertificateInfo(item)">
        <!-- 标题 -->
        <view class="content_1_1">
          <!-- 图标 -->
          <image class="content_1_1_1" src="http://39.106.208.234/pic/img/people.png" />
          <!-- 标题 -->
          <view class="content_1_1_2">{{ item.name }}-{{ item.company }}</view>
        </view>
        <!-- 底部 -->
        <view class="content_1_2">
          <!-- 单个 -->
          <view class="content_1_2_1">
            <!-- 标题 -->
            <view class="content_1_2_1_1">地区</view>
            <!-- 内容 -->
            <view class="content_1_2_1_2">{{ item.province }}</view>
          </view>
          <!-- 单个 -->
          <view class="content_1_2_1">
            <!-- 标题 -->
            <view class="content_1_2_1_1">专业</view>
            <!-- 内容 -->
            <view class="content_1_2_1_2">{{ item.registered_major }}</view>
          </view>
          <!-- 单个 -->
          <view class="content_1_2_1">
            <!-- 标题 -->
            <view class="content_1_2_1_1">等级</view>
            <!-- 内容 -->
            <view class="content_1_2_1_2">{{ item.grade.substring(0, 2) }}</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head';
import { getQyApi } from '../../utils/api';
export default {
  data() {
    return {
      // 人员证书参数
      personnelCertificate: {
        url: '/api/company/getArchitectAllByCondition',
        pageNo: 1,
      },
      // 人员证书列表
      personnelCertificateList: [],
    };
  },
  methods: {
    // 初始化参数
    initParams(op) {
      this.personnelCertificate.company = op.company;
    },
    // 获取人员证书
    getPersonnelCertificate() {
      // 请求
      getQyApi(this.personnelCertificate).then(res => {
        this.personnelCertificateList = res.data.list;
      });
    },
    // 前往人员证书详情
    toPersonnelCertificateInfo(item) {
      uni.setStorageSync('item', item);
      uni.navigateTo({
        url: '/pages/enterprise/personnelCertificateInfo',
      });
    },
  },
  onLoad(op) {
    // 初始化参数
    this.initParams(op);
    // 获取人员证书
    this.getPersonnelCertificate();
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import './personnelCertificate.scss';
</style>
