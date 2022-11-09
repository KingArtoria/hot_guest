<template>
  <view>
    <Head title="开庭公告" />
    <view class="content">
      <Document :data="data" @document="document" />
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
      // 开庭公告参数
      params: {
        pageNo: 1,
        type: 1,
        url: '/api/company/getCompanyOtherList',
      },
      // 开庭公告数据
      data: [],
    };
  },
  methods: {
    // 初始化参数
    initParams(op) {
      // 赋值公司名称
      this.params.company = op.company;
    },
    // 获取开庭公告数据
    getTrialAnnouncement() {
      getQyApi(this.params).then(res => {
        res.data.list.forEach(item => {
          // 添加kv
          this.$set(item, 'kv', [
            { key: '开庭日期', value: item.opening_at },
            { key: '原告/上诉人', value: item.plaintiff },
            { key: '被告/被上诉人', value: item.defendant },
          ]);
          this.data.push(item);
        });
      });
    },
    // 文本组件点击事件
    document(item) {
      uni.setStorageSync('item', item);
      uni.navigateTo({
        url: '/pages/enterprise/trialAnnouncementInfo',
      });
    },
  },
  onLoad(op) {
    // 初始化参数
    this.initParams(op);
    // 获取开庭公告数据
    this.getTrialAnnouncement();
  },
  // 监听滚动到底部
  onReachBottom() {
    this.params.pageNo++;
    this.getTrialAnnouncement();
  },
  components: { Head, Document },
};
</script>

<style lang="scss" scoped>
@import './trialAnnouncement.scss';
</style>
