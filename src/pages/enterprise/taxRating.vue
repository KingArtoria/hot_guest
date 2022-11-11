<template>
  <view>
    <Head title="税务评级" />
    <view class="content">
      <!-- 单个 -->
      <view class="content_1" v-for="(item, index) in taxRatingData" :key="index">
        <!-- 文本 -->
        <view class="content_1_1">{{ item.company }}</view>
        <!-- 信息块 -->
        <view class="content_1_2">
          <!-- 左侧 -->
          <view class="content_1_2_1">
            <!-- 标题 -->
            <view class="content_1_2_1_1">纳税人识别号</view>
            <!-- 文本 -->
            <view class="content_1_2_1_2">{{ item.identification_code }}</view>
          </view>
          <!-- 分割线 -->
          <view class="content_1_2_2" />
          <!-- 右侧 -->
          <view class="content_1_2_1">
            <!-- 标题 -->
            <view class="content_1_2_1_1">纳税信用级别</view>
            <!-- 文本 -->
            <view class="content_1_2_1_2" style="color:red">{{ item.tax_rating }}</view>
          </view>
        </view>
        <!-- 标题 -->
        <view class="content_1_3">评价年份</view>
        <!-- 文本 -->
        <view class="content_1_1">{{ item.year }}</view>
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
      // 税务评级参数
      taxRating: {
        pageNo: 1,
        type: 11,
        url: '/api/company/getCompanyOtherList',
      },
      // 税务评级数据
      taxRatingData: [],
    };
  },
  methods: {
    // 初始化参数
    initParams(op) {
      this.taxRating.company = op.company;
    },
    // 获取税务评级数据
    getTaxRatingData() {
      getQyApi(this.taxRating).then(res => {
        this.taxRatingData = res.data.list;
      });
    },
  },
  onLoad(op) {
    // 初始化参数
    this.initParams(op);
    // 获取税务评级数据
    this.getTaxRatingData();
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import './taxRating.scss';
</style>
