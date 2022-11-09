<template>
  <view>
    <Head title="企业业绩" />
    <view class="content">
      <!-- 单个中标 -->
      <view class="content_1" v-for="(item, index) in qyList" :key="index">
        <!-- 标题 -->
        <view class="content_1_1">
          <!-- 标题图片 -->
          <image class="content_1_1_1" src="http://39.106.208.234/pic/img/zbqy_.png" />
          <!-- 文本 -->
          <view class="content_1_1_2">{{ item.company_name }}</view>
        </view>
        <!-- 文本 -->
        <view class="content_1_2">{{ item.winning_title }}</view>
        <!-- 底部 -->
        <view class="content_1_3">
          <!-- 地区 -->
          <view class="content_1_3_1">
            <!-- 图标 -->
            <image class="content_1_3_1_1" src="http://39.106.208.234/pic/img/dingwei_.png" />
            <!-- 文本 -->
            <view class="content_1_3_1_2">{{ item.winning_area }}</view>
          </view>
          <!-- 时间 -->
          <view class="content_1_3_2">{{ item.winning_time }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head';
import { formatTime } from '../../utils';
import { getQyApi } from '../../utils/api';
export default {
  data() {
    return {
      // 查询中标参数
      params: {
        pageNo: 1,
        url: '/api/company/getWinningBidByCondition',
      },
      // 查询中标企业
      qyList: [],
    };
  },
  methods: {
    // 初始化参数
    initParams(op) {
      // 参数赋值企业名称
      this.params.company = op.company;
    },
    // 查询企业中标
    getQyApi() {
      getQyApi(this.params).then(res => {
        res.data.list.forEach(item => {
          item.winning_time = formatTime(item.winning_time * 1000, 'yyyy-MM-dd');
          this.qyList.push(item);
        });
      });
    },
  },
  onLoad(op) {
    // 初始化参数
    this.initParams(op);
    // 查询企业中标
    this.getQyApi();
  },
  // 监听滚动到底部
  onReachBottom() {
    // 页码加1
    this.params.pageNo += 1;
    // 查询企业中标
    this.getQyApi();
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import './enterprisePerformance.scss';
</style>
