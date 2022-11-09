<template>
  <view>
    <Head title="税务违法" />
    <view class="content">
      <Document :data="taxList" color="#0d86ff" @document="toTaxViolationInfo" />
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head';
import Document from '../../components/Document';
import { getQyApi } from '../../utils/api';
export default {
  data() {
    return {
      // 税务违法参数
      tax: {
        pageNo: 1,
        type: 5,
        url: '/api/company/getCompanyOtherList',
      },
      // 税务违法数据
      taxList: [],
    };
  },
  methods: {
    // 初始化参数
    initParams(op) {
      this.tax.company = op.company;
    },
    // 获取税务违法数据
    getTax() {
      getQyApi(this.tax).then(res => {
        res.data.list.forEach(item => {
          // 添加kv
          this.$set(item, 'kv', [
            { key: '负责人', value: item.id_legal_person },
            { key: '案件性质', value: item.nature },
          ]);
        });
        this.taxList = res.data.list;
      });
    },
    // 前往税务违法详情
    toTaxViolationInfo(item) {
      uni.setStorageSync('item', item);
      uni.navigateTo({
        url: '/pages/enterprise/taxViolationInfo',
      });
    },
  },
  onLoad(op) {
    // 初始化参数
    this.initParams(op);
    // 获取税务违法数据
    this.getTax();
  },
  components: { Head, Document },
};
</script>

<style lang="scss" scoped>
@import './taxViolation.scss';
</style>
