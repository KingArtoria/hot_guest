<template>
  <view>
    <Head title="网站备案" />
    <view class="content">
      <!-- 单个数据 -->
      <view class="content_1" v-for="(item, index) in data" :key="index">
        <!-- 标题 -->
        <view class="content_1_1">{{ item.web_name }}</view>
        <!-- 信息块 -->
        <view class="content_1_2">
          <!-- 单个盒子 -->
          <view class="content_1_2_1">
            <!-- 标题 -->
            <view class="content_1_2_1_1">网站首页</view>
            <!-- 文本 -->
            <view class="content_1_2_1_2">{{ item.web_head }}</view>
          </view>
          <!-- 分割线 -->
          <view class="content_1_2_2" />
          <!-- 单个盒子 -->
          <view class="content_1_2_1">
            <!-- 标题 -->
            <view class="content_1_2_1_1">备案号</view>
            <!-- 文本 -->
            <view class="content_1_2_1_2">{{ item.record }}</view>
          </view>
        </view>
        <!-- 信息块 -->
        <view class="content_1_2">
          <!-- 单个盒子 -->
          <view class="content_1_2_1">
            <!-- 标题 -->
            <view class="content_1_2_1_1">审核时间</view>
            <!-- 文本 -->
            <view class="content_1_2_1_2">{{ item.date }}</view>
          </view>
          <!-- 分割线 -->
          <view class="content_1_2_2" />
          <!-- 单个盒子 -->
          <view class="content_1_2_1">
            <!-- 标题 -->
            <view class="content_1_2_1_1">单位性质</view>
            <!-- 文本 -->
            <view class="content_1_2_1_2">{{ item.unit_property }}</view>
          </view>
        </view>
        <!-- 小标题 -->
        <view class="content_1_3">网站域名</view>
        <!-- 小文本 -->
        <view class="content_1_4">{{ item.domain }}</view>
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
      // 网站备案参数
      params: {
        pageNo: 1,
        type: 17,
        url: '/api/company/getCompanyOtherList',
      },
      // 网站备案数据
      data: [],
    };
  },
  methods: {
    // 初始化参数
    initParams(op) {
      this.params.company = op.company;
    },
    // 获取网站备案数据
    getData() {
      getQyApi(this.params).then(res => {
        this.data = res.data.list;
      });
    },
  },
  onLoad(op) {
    // 初始化参数
    this.initParams(op);
    // 获取网站备案数据
    this.getData();
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import './websiteFiling.scss';
</style>
