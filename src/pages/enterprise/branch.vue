<template>
  <view>
    <Head title="分支机构" />
    <view class="content">
      <!-- 单个数据 -->
      <view class="content_1" v-for="(item, index) in data" :key="index">
        <!-- 公司名称 -->
        <view class="content_1_1">{{ item.company }}</view>
        <!-- 标签 -->
        <view class="content_1_2">{{ item.com_state }}</view>
        <!-- 信息块 -->
        <view class="content_1_3">
          <!-- 单个数据盒子 -->
          <view class="content_1_3_1">
            <!-- 标题 -->
            <view class="content_1_3_1_1">负责人</view>
            <!-- 内容 -->
            <view class="content_1_3_1_2">{{ item.com_legal }}</view>
          </view>
          <!-- 分割线 -->
          <view class="content_1_3_2" />
          <!-- 单个数据盒子 -->
          <view class="content_1_3_1">
            <!-- 标题 -->
            <view class="content_1_3_1_1">注册时间</view>
            <!-- 内容 -->
            <view class="content_1_3_1_2">{{ item.registDate }}</view>
          </view>
        </view>
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
      // 分支机构参数
      params: {
        pageNo: 1,
        url: '/api/company/getCompanyBranch',
      },
      // 分支机构数据
      data: [],
    };
  },
  methods: {
    // 初始化参数
    initParams(op) {
      this.params.keyWord = op.company;
    },
    // 获取分支机构数据
    getBranch() {
      getQyApi(this.params).then(res => {
        this.data = res.data.list;
      });
    },
  },
  onLoad(op) {
    // 初始化参数
    this.initParams(op);
    // 获取分支机构数据
    this.getBranch();
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import './branch.scss';
</style>
