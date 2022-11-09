<template>
  <view>
    <Head title="行政处罚" style="background: rgb(240, 242, 245)" />
    <view class="content">
      <Document :data="administrativePenaltyData" @document="documentClick" />
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head';
import Document from '../../components/Document';
import { getQyApi } from '../../utils/api';
import { formatTime } from '../../utils/index';
export default {
  data() {
    return {
      // 行政处罚查询参数
      administrativePenaltyParams: {
        pageNo: 1,
        type: 4,
        url: '/api/company/getCompanyOtherList',
      },
      // 行政处罚数据
      administrativePenaltyData: [],
    };
  },
  methods: {
    // 初始化参数
    initParams(op) {
      this.administrativePenaltyParams.company = op.company;
    },
    // 获取行政处罚
    getQyApi() {
      getQyApi(this.administrativePenaltyParams).then(res => {
        res.data.list.forEach(item => {
          // 添加渲染用的key-value
          this.$set(item, 'kv', [
            { key: '决定日期', value: formatTime(item.decide_date * 1000) },
            { key: '决定机关', value: item.office_no },
            { key: '违法类型', value: item.type_one },
          ]);
        });
        this.administrativePenaltyData = res.data.list;
      });
    },
    // 文书组件点击事件
    documentClick(item) {
      uni.setStorageSync('documentItem', item);
      uni.navigateTo({
        url: '/pages/enterprise/administrativePenaltyInfo',
      });
    },
  },
  onLoad(op) {
    // 初始化参数
    this.initParams(op);
    // 获取行政处罚
    this.getQyApi();
  },
  // 滚动到底部监听
  onReachBottom() {},
  components: { Head, Document },
};
</script>

<style lang="scss" scoped>
@import './administrativePenalty.scss';
</style>
