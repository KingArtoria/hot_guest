<template>
  <view>
    <Head title="企业资质" />
    <view class="content">
      <view class="content_1" v-for="(item, index) in qyList" :key="index">
        <!-- 标题 -->
        <view class="content_1_1">{{ item.book_name }}</view>
        <!-- 信息块 -->
        <view class="content_1_2">
          <!-- 左侧 -->
          <view class="content_1_2_1">
            <!-- 标题 -->
            <view class="content_1_2_1_1">证书编号</view>
            <!-- 文本 -->
            <view class="content_1_2_1_2">{{ item.code }}</view>
          </view>
          <!-- 分割线 -->
          <view class="content_1_2_2" />
          <!-- 右侧 -->
          <view class="content_1_2_1">
            <!-- 标题 -->
            <view class="content_1_2_1_1">级别</view>
            <!-- 文本 -->
            <view class="content_1_2_1_2">{{ item.level }}</view>
          </view>
        </view>
        <!-- 信息块 -->
        <view class="content_1_2">
          <!-- 左侧 -->
          <view class="content_1_2_1">
            <!-- 标题 -->
            <view class="content_1_2_1_1">发证日期</view>
            <!-- 文本 -->
            <view class="content_1_2_1_2">{{ item.opening_date }}</view>
          </view>
          <!-- 分割线 -->
          <view class="content_1_2_2" />
          <!-- 右侧 -->
          <view class="content_1_2_1">
            <!-- 标题 -->
            <view class="content_1_2_1_1">截至日期</view>
            <!-- 文本 -->
            <view class="content_1_2_1_2">{{ item.effective_at }}</view>
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
      // 企业资质参数
      params: {
        pageNo: 1,
        url: '/api/company/getQualificationAllByCondition',
      },
      // 企业资质数据
      qyList: [],
    };
  },
  methods: {
    // 初始化参数
    initParams(op) {
      // 参数赋值企业名称
      this.params.company = op.company;
    },
    // 查询企业资质
    getQyApi() {
      getQyApi(this.params).then(res => {
        res.data.list.forEach(item => {
          this.qyList.push(item);
        });
      });
    },
  },
  onLoad(op) {
    // 初始化参数
    this.initParams(op);
    // 查询企业资质
    this.getQyApi();
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import './qualification.scss';
</style>
