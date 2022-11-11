<template>
  <view>
    <Head title="微信公众号" />
    <view class="content">
      <Document :data="data" />
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
      // 微信公众号参数
      params: {
        pageNo: 1,
        type: 13,
        url: '/api/company/getCompanyOtherList',
      },
      // 微信公众号数据
      data: [],
    };
  },
  methods: {
    // 初始化参数
    initParams(op) {
      this.params.company = op.company;
    },
    // 获取微信公众号数据
    getWeChatPublicAccount() {
      getQyApi(this.params).then(res => {
        res.data.list.forEach(item => {
          this.$set(item, 'kv', [
            { key: '公众号', value: item.wchar_i_d },
            { key: '介绍', value: item.recommend },
          ]);
        });
        this.data = res.data.list;
      });
    },
  },
  onLoad(op) {
    // 初始化参数
    this.initParams(op);
    // 获取微信公众号数据
    this.getWeChatPublicAccount();
  },
  components: { Head, Document },
};
</script>

<style lang="scss" scoped>
@import './weChatPublicAccount.scss';
</style>