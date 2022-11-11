<template>
  <view>
    <Head title="对外投资" />
    <view class="content">
      <!-- 单个数据 -->
      <view class="content_1" v-for="(item, index) in data" :key="index">
        <!-- 名称 -->
        <view class="content_1_1">{{ item.company }}</view>
        <!-- 小标题 -->
        <view class="content_1_2">投资比例</view>
        <!-- 小文本 -->
        <view class="content_1_3">{{ item.money_bilv }}</view>
        <!-- 信息块 -->
        <view class="content_1_4">
          <!-- 单个 -->
          <view class="content_1_4_1">
            <!-- 标题 -->
            <view class="content_1_4_1_1">注册时间</view>
            <!-- 文本 -->
            <view class="content_1_4_1_2">{{ item.create_at.substring(0, 10) }}</view>
          </view>
          <!-- 分割线 -->
          <view class="content_1_4_2" />
          <!-- 单个 -->
          <view class="content_1_4_1">
            <!-- 标题 -->
            <view class="content_1_4_1_1">注册资金</view>
            <!-- 文本 -->
            <view class="content_1_4_1_2">{{ item.money_renjiao }}</view>
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
      // 对外投资参数
      params: {
        pageNo: 1,
        type: 24,
        url: '/api/company/getCompanyOtherList',
      },
      // 对外投资数据
      data: [],
    };
  },
  methods: {
    // 初始化参数
    initParams(op) {
      this.params.company = op.company;
    },
    // 获取对外投资数据
    getForeignInvestment() {
      getQyApi(this.params).then(res => {
        this.data = res.data.list;
      });
    },
  },
  onLoad(op) {
    // 初始化参数
    this.initParams(op);
    // 获取对外投资数据
    this.getForeignInvestment();
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import './foreignInvestment.scss';
</style>
