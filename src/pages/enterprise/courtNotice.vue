<template>
  <view>
    <Head title="法院公告" />
    <view class="content">
      <Document color="#0d86ff" :data="courtNoticeData" @document="documentClick" />
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
      // 法院公告参数
      courtNoticeParams: {
        pageNo: 1,
        type: 3,
        url: '/api/company/getCompanyOtherList',
      },
      // 法院公告数据
      courtNoticeData: [],
    };
  },
  methods: {
    // 初始化参数
    initParams(op) {
      // 查询参数赋值
      this.courtNoticeParams.company = op.company;
    },
    // 获取法院公告数据
    getQyApi() {
      getQyApi(this.courtNoticeParams).then(res => {
        res.data.list.forEach(item => {
          this.$set(item, 'kv', [
            { key: '当事人', value: item.party_person },
            { key: '法院', value: item.court },
            { key: '公告时间', value: item.publish_date },
          ]);
          this.courtNoticeData.push(item);
        });
      });
    },
    // 文件组件单击事件
    documentClick(item) {
      uni.setStorageSync('item', item);
      uni.navigateTo({
        url: `/pages/enterprise/courtNoticeInfo`,
      });
    },
  },
  onLoad(op) {
    // 初始化参数
    this.initParams(op);
    // 获取法院公告数据
    this.getQyApi();
  },
  // 滚动到底部监听
  onReachBottom() {
    // 页码加1
    this.courtNoticeParams.pageNo += 1;
    // 搜索企业
    this.getQyApi();
  },
  components: { Head, Document },
};
</script>

<style lang="scss" scoped>
@import './courtNotice.scss';
</style>
