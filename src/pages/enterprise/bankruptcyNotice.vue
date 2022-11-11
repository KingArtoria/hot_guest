<template>
  <view>
    <Head title="破产公告" />
    <view class="content">
      <Document :data="bankruptcyList" color="#0d86ff" @document="toBankruptcyNoticeInfo" />
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
      // 破产公告参数
      bankruptcy: {
        pageNo: 1,
        url: '/api/company/getCompanyOtherList',
        type: 6,
      },
      // 破产公告列表
      bankruptcyList: [],
    };
  },
  methods: {
    // 初始化参数
    initParams(op) {
      this.bankruptcy.company = op.company;
    },
    // 获取破产公告
    getBankruptcyNotice() {
      getQyApi(this.bankruptcy).then(res => {
        res.data.list.forEach(item => {
          // 添加kv
          this.$set(item, 'kv', [
            { key: '公开时间', value: item.open_time },
            { key: '案件类型', value: item.case_type },
            { key: '公开人', value: item.open_human },
          ]);
        });
        this.bankruptcyList = res.data.list;
      });
    },
    // 前往破产公告详情
    toBankruptcyNoticeInfo(item) {
      uni.setStorageSync('item', item);
      uni.navigateTo({
        url: '/pages/enterprise/bankruptcyNoticeInfo',
      });
    },
  },
  onLoad(op) {
    // 初始化参数
    this.initParams(op);
    // 获取破产公告
    this.getBankruptcyNotice();
  },
  components: { Head, Document },
};
</script>

<style lang="scss" scoped>
@import './bankruptcyNotice.scss';
</style>
