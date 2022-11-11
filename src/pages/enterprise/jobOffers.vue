<template>
  <view>
    <Head title="招聘信息" />
    <view class="content">
      <!-- 单个信息 -->
      <view class="content_1" v-for="(item, index) in jobOffers" :key="index">
        <!-- 标题 -->
        <view class="content_1_1">
          <text style="color: #333333;margin-right: 20rpx;">{{ item.post }}</text>
          <text style="color: #e24e30">{{ item.salary }}</text>
        </view>
        <!-- 信息块 -->
        <view class="content_1_2">
          <!-- 左侧 -->
          <view class="content_1_2_1">
            <!-- 标题 -->
            <view class="content_1_2_1_1">所在城市</view>
            <!-- 文本 -->
            <view class="content_1_2_1_2">{{ item.postal_address }}</view>
          </view>
          <!-- 分割线 -->
          <view class="content_1_2_2" />
          <!-- 右侧 -->
          <view class="content_1_2_1">
            <!-- 标题 -->
            <view class="content_1_2_1_1">发布时间</view>
            <!-- 文本 -->
            <view class="content_1_2_1_2">{{ item.create_at }}</view>
          </view>
        </view>
        <!-- 小标题 -->
        <view class="content_1_3">工作经验</view>
        <!-- 小文本 -->
        <view class="content_1_4">{{ item.experience }}</view>
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
      // 招聘信息参数
      params: {
        pageNo: 1,
        type: 10,
        url: '/api/company/getCompanyOtherList',
      },
      // 招聘信息
      jobOffers: [],
    };
  },
  methods: {
    // 初始化参数
    initParams(op) {
      this.params.company = op.company;
    },
    // 获取招聘信息
    getJobOffers() {
      getQyApi(this.params).then(res => {
        this.jobOffers = res.data.list;
      });
    },
  },
  onLoad(op) {
    // 初始化参数
    this.initParams(op);
    // 获取招聘信息
    this.getJobOffers();
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import './jobOffers.scss';
</style>
