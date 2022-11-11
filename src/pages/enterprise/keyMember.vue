<template>
  <view>
    <Head title="主要成员" />
    <view class="content">
      <!-- 单个数据 -->
      <view class="content_1" v-for="(item, index) in data" :key="index">
        <!-- 名字 -->
        <view class="content_1_1">{{ item.name }}</view>
        <!-- 职位 -->
        <view class="content_1_2">{{ item.job }}</view>
      </view>
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head';
import { getQyApi } from '../../utils/api';
export default {
  data() {
    return {
      // 主要成员参数
      params: {
        pageNo: 1,
        url: '/api/company/getCompanyOtherList',
        type: 22,
      },
      // 主要成员数据
      data: [],
    };
  },
  methods: {
    // 初始化数据
    initParams(op) {
      this.params.company = op.company;
    },
    // 获取主要成员
    getMember() {
      getQyApi(this.params).then(res => {
        this.data = res.data.list;
      });
    },
  },
  onLoad(op) {
    // 初始化数据
    this.initParams(op);
    // 获取主要成员
    this.getMember();
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import './keyMember.scss';
</style>
