<template>
  <view>
    <Head title="商标信息" />
    <view class="content">
      <Document :data="data" />
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head';
import Document from '../../components/Document.vue';
import { getQyApi } from '../../utils/api';
export default {
  data() {
    return {
      // 商标信息参数
      params: {
        pageNo: 1,
        type: 16,
        url: '/api/company/getCompanyOtherList',
      },
      // 商标信息数据
      data: [],
    };
  },
  methods: {
    // 初始化参数
    initParams(op) {
      this.params.company = op.company;
    },
    // 获取商标信息
    getTrademarkInfo() {
      getQyApi(this.params).then(res => {
        res.data.list.forEach(item => {
          this.$set(item, 'kv', [
            { key: '注册号', value: item.registration_number },
            { key: '申请日期', value: item.apply_at },
            { key: '类别', value: item.type },
          ]);
        });
        this.data = res.data.list;
      });
    },
  },
  onLoad(op) {
    // 初始化参数
    this.initParams(op);
    // 获取商标信息
    this.getTrademarkInfo();
  },
  components: { Head, Document },
};
</script>

<style lang="scss" scoped>
@import './trademarkInfo.scss';
</style>
