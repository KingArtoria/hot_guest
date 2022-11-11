<template>
  <view>
    <Head title="软件著作权" />
    <view class="content">
      <!-- 单个数据 -->
      <view class="content_1" v-for="(item, index) in data" :key="index">
        <!-- 标题 -->
        <view class="content_1_1">{{ item.full_name }}</view>
        <!-- 信息块 -->
        <view class="content_1_2">
          <!-- 单个盒子 -->
          <view class="content_1_2_1">
            <!-- 标题 -->
            <view class="content_1_2_1_1">登记号</view>
            <!-- 文本 -->
            <view class="content_1_2_1_2">{{ item.register }}</view>
          </view>
          <!-- 分割线 -->
          <view class="content_1_2_2" />
          <!-- 单个盒子 -->
          <view class="content_1_2_1">
            <!-- 标题 -->
            <view class="content_1_2_1_1">软件简称</view>
            <!-- 文本 -->
            <view class="content_1_2_1_2">{{ item.abbreviation }}</view>
          </view>
        </view>
        <!-- 信息块 -->
        <view class="content_1_2">
          <!-- 单个盒子 -->
          <view class="content_1_2_1">
            <!-- 标题 -->
            <view class="content_1_2_1_1">分类号</view>
            <!-- 文本 -->
            <view class="content_1_2_1_2">{{ item.classification }}</view>
          </view>
          <!-- 分割线 -->
          <view class="content_1_2_2" />
          <!-- 单个盒子 -->
          <view class="content_1_2_1">
            <!-- 标题 -->
            <view class="content_1_2_1_1">版本号</view>
            <!-- 文本 -->
            <view class="content_1_2_1_2">{{ item.version }}</view>
          </view>
        </view>
        <!-- 小标题 -->
        <view class="content_1_3">批准日期</view>
        <!-- 小文本 -->
        <view class="content_1_4">{{ item.publish_date }}</view>
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
      // 软件著作权参数
      params: {
        pageNo: 1,
        url: '/api/company/getCompanyOtherList',
        type: 19,
      },
      // 软件著作权数据
      data: [],
    };
  },
  methods: {
    // 初始化参数
    initParams(op) {
      this.params.company = op.company;
    },
    // 获取软件著作权数据
    getSoftwareCopyright() {
      getQyApi(this.params).then(res => {
        this.data = res.data.list;
      });
    },
  },
  onLoad(op) {
    // 初始化参数
    this.initParams(op);
    // 获取软件著作权数据
    this.getSoftwareCopyright();
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import './softwareCopyright.scss';
</style>
