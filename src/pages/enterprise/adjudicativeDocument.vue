<template>
  <view>
    <Head title="裁判文书" style="background: rgb(240, 242, 245)" />
    <view class="content">
      <Document :data="documentList" @document="documentClick" />
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
      // 裁判文书参数
      document: {
        type: 2,
        url: '/api/company/getCompanyOtherList',
        pageNo: 1,
      },
      // 裁判文书列表
      documentList: [],
    };
  },
  methods: {
    // 初始化参数
    initParams(op) {
      // 裁判文书赋值
      this.document.company = op.company;
    },
    // 获取裁判文书
    getDocument() {
      getQyApi(this.document).then(res => {
        res.data.list.forEach(item => {
          // 初始化时间格式
          item.judgement_date = formatTime(item.judgement_date * 1000);
          // 添加渲染用的key-value
          this.$set(item, 'kv', [
            { key: '日期', value: item.judgement_date },
            { key: '案号', value: item.case_no },
            { key: '案件类型', value: item.instrument_type },
            { key: '审批程序', value: item.trial_procedure },
          ]);
          this.documentList.push(item);
        });
      });
    },
    // 文书组件点击事件
    documentClick(item) {
      uni.setStorageSync('documentItem', item);
      uni.navigateTo({
        url: '/pages/enterprise/judgmentDocumentInfo',
      });
    },
  },
  onLoad(op) {
    // 初始化参数
    this.initParams(op);
    // 获取裁判文书
    this.getDocument();
  },
  // 滚动到底部监听
  onReachBottom() {
    // 页码加1
    this.document.pageNo += 1;
    // 搜索企业
    this.getDocument();
  },
  components: { Head, Document },
};
</script>

<style lang="scss" scoped>
@import './adjudicativeDocument.scss';
</style>
