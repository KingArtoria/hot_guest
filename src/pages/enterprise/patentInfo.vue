<template>
  <view>
    <Head title="专利信息" />
    <view class="content">
      <!-- 单个数据 -->
      <view class="content_1" v-for="(item, index) in data" :key="index">
        <!-- 标题 -->
        <view class="content_1_1">{{ item.name }}</view>
        <!-- 信息块 -->
        <view class="content_1_2">
          <!-- 单个盒子 -->
          <view class="content_1_2_1">
            <!-- 标题 -->
            <view class="content_1_2_1_1">申请公布日</view>
            <!-- 内容 -->
            <view class="content_1_2_1_2">{{ item.state_at }}</view>
          </view>
          <!-- 分割线 -->
          <view class="content_1_2_2" />
          <!-- 单个盒子 -->
          <view class="content_1_2_1">
            <!-- 标题 -->
            <view class="content_1_2_1_1">专利类型</view>
            <!-- 内容 -->
            <view class="content_1_2_1_2">{{ item.patent_type }}</view>
          </view>
        </view>
        <!-- 信息块 -->
        <view class="content_1_2">
          <!-- 单个盒子 -->
          <view class="content_1_2_1">
            <!-- 标题 -->
            <view class="content_1_2_1_1">申请公布号</view>
            <!-- 内容 -->
            <view class="content_1_2_1_2">{{ item.code }}</view>
          </view>
          <!-- 分割线 -->
          <view class="content_1_2_2" />
          <!-- 单个盒子 -->
          <view class="content_1_2_1">
            <!-- 标题 -->
            <view class="content_1_2_1_1">申请号</view>
            <!-- 内容 -->
            <view class="content_1_2_1_2">{{ item.publication }}</view>
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
      // 专利信息参数
      params: {
        pageNo: 1,
        type: 20,
        url: '/api/company/getCompanyOtherList',
      },
      // 专利信息数据
      data: [],
    };
  },
  methods: {
    // 初始化参数
    initParams(op) {
      this.params.company = op.company;
    },
    // 获取专利信息数据
    getPatentInfo() {
      getQyApi(this.params).then(res => {
        this.data = res.data.list;
      });
    },
  },
  onLoad(op) {
    // 初始化参数
    this.initParams(op);
    // 获取专利信息数据
    this.getPatentInfo();
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import './patentInfo.scss';
</style>
