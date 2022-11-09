<template>
  <view>
    <Head title="荣誉奖项" />
    <view class="content">
      <!-- 文本组件 -->
      <Document :data="honorAwardList" />
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
      // 荣誉奖项参数
      honorAward: {
        pageNo: 1,
        type: 26,
        url: '/api/company/getCompanyOtherList',
      },
      // 荣誉奖项
      honorAwardList: [],
    };
  },
  methods: {
    // 初始化参数
    initParams(op) {
      // 赋值公司名称
      this.honorAward.company = op.company;
    },
    // 获取荣誉奖项
    getHonorAward() {
      getQyApi(this.honorAward).then(res => {
        res.data.list.forEach(item => {
          this.$set(item, 'kv', [
            { key: '实施部门', value: item.company },
            { key: '发布时间', value: item.honor_time },
          ]);
        });
        this.honorAwardList = res.data.list;
      });
    },
  },
  onLoad(op) {
    // 初始化参数
    this.initParams(op);
    this.getHonorAward();
  },
  components: { Head, Document },
};
</script>

<style lang="scss" scoped>
@import './honorAward.scss';
</style>
