<template>
  <view>
    <Head title="股东信息" />
    <view class="content">
      <!-- 单个数据 -->
      <view class="content_1" v-for="(item, index) in data" :key="index">
        <!-- 标题 -->
        <view class="content_1_1">{{ item.name }}</view>
        <!-- 信息块 -->
        <view class="content_1_2">
          <!-- 出资比例 -->
          <view class="content_1_2_1">
            <text style="color: #999;margin-right: 10rpx;">出资比例</text>
            <text style="color: #35ae6a">{{ item.money_bilv }}</text>
          </view>
          <!-- 分割线 -->
          <view class="content_1_2_2" />
          <!-- 出资比例 -->
          <view class="content_1_2_1">
            <text style="color: #999;margin-right: 10rpx;">出资金额</text>
            <text style="color: #ef6a2c">{{ item.money_renjiao }}</text>
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
      // 股东信息参数
      params: {
        pageNo: 1,
        url: '/api/company/getCompanyOtherList',
        type: 23,
      },
      // 股东信息数据
      data: [],
    };
  },
  methods: {
    // 初始化参数
    initParams(op) {
      this.params.company = op.company;
    },
    // 获取股东信息
    getShareholderInfo() {
      getQyApi(this.params).then(res => {
        this.data = res.data.list;
      });
    },
  },
  onLoad(op) {
    // 初始化参数
    this.initParams(op);
    // 获取股东信息
    this.getShareholderInfo();
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import './shareholderInfo.scss';
</style>
