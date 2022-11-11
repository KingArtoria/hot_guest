<template>
  <view>
    <Head title="进出口信用" />
    <view class="content">
      <!-- 单个 -->
      <view class="content_1" v-for="(item, index) in data" :key="index">
        <!-- 标题 -->
        <view class="content_1_1">注册信息</view>
        <!-- 信息块 -->
        <view class="content_1_2">
          <!-- 左侧盒子 -->
          <view class="content_1_2_1">
            <!-- 标题 -->
            <view class="content_1_2_1_1">海关注册编号</view>
            <!-- 文本 -->
            <view class="content_1_2_1_2">{{ item.social_code }}</view>
          </view>
          <!-- 分割线 -->
          <view class="content_1_2_2" />
          <!-- 右侧盒子 -->
          <view class="content_1_2_1">
            <!-- 标题 -->
            <view class="content_1_2_1_1">注册海关</view>
            <!-- 文本 -->
            <view class="content_1_2_1_2">{{ item.reg_customs }}</view>
          </view>
        </view>
        <!-- 信息块 -->
        <view class="content_1_2">
          <!-- 左侧盒子 -->
          <view class="content_1_2_1">
            <!-- 标题 -->
            <view class="content_1_2_1_1">行政区划</view>
            <!-- 文本 -->
            <view class="content_1_2_1_2">{{ item.xz_area }}</view>
          </view>
          <!-- 分割线 -->
          <view class="content_1_2_2" />
          <!-- 右侧盒子 -->
          <view class="content_1_2_1">
            <!-- 标题 -->
            <view class="content_1_2_1_1">经济区划</view>
            <!-- 文本 -->
            <view class="content_1_2_1_2">{{ item.jj_area }}</view>
          </view>
        </view>
        <!-- 小标题 -->
        <view class="content_1_3">经营类型</view>
        <!-- 小文本 -->
        <view class="content_1_4">{{ item.business_cat }}</view>
        <!-- 信息块 -->
        <view class="content_1_2">
          <!-- 左侧盒子 -->
          <view class="content_1_2_1">
            <!-- 标题 -->
            <view class="content_1_2_1_1">海关注销标志</view>
            <!-- 文本 -->
            <view class="content_1_2_1_2">{{ item.revoke_flag }}</view>
          </view>
          <!-- 分割线 -->
          <view class="content_1_2_2" />
          <!-- 右侧盒子 -->
          <view class="content_1_2_1">
            <!-- 标题 -->
            <view class="content_1_2_1_1">年报情况</view>
            <!-- 文本 -->
            <view class="content_1_2_1_2">{{ item.year_info }}</view>
          </view>
        </view>
        <!-- 信息块 -->
        <view class="content_1_2">
          <!-- 左侧盒子 -->
          <view class="content_1_2_1">
            <!-- 标题 -->
            <view class="content_1_2_1_1">注册日期</view>
            <!-- 文本 -->
            <view class="content_1_2_1_2">{{ item.reg_date }}</view>
          </view>
          <!-- 分割线 -->
          <view class="content_1_2_2" />
          <!-- 右侧盒子 -->
          <view class="content_1_2_1">
            <!-- 标题 -->
            <view class="content_1_2_1_1">报关有效期</view>
            <!-- 文本 -->
            <view class="content_1_2_1_2">{{ item.expire_time }}</view>
          </view>
        </view>
        <!-- 信息块 -->
        <view class="content_1_2">
          <!-- 左侧盒子 -->
          <view class="content_1_2_1">
            <!-- 标题 -->
            <view class="content_1_2_1_1">行业种类</view>
            <!-- 文本 -->
            <view class="content_1_2_1_2">{{ item.pro_kind }}</view>
          </view>
          <!-- 分割线 -->
          <view class="content_1_2_2" />
          <!-- 右侧盒子 -->
          <view class="content_1_2_1">
            <!-- 标题 -->
            <view class="content_1_2_1_1">跨境贸易电子商务类型</view>
            <!-- 文本 -->
            <view class="content_1_2_1_2">{{ item.trade_type }}</view>
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
      // 进出口信用参数
      params: {
        pageNo: 1,
        url: '/api/company/getCompanyOtherList',
        type: 12,
      },
      // 进出口信用数据
      data: [],
    };
  },
  methods: {
    // 初始化参数
    initParams(op) {
      this.params.company = op.company;
    },
    // 获取进出口信用数据
    getImportAndExportCredit() {
      getQyApi(this.params).then(res => {
        this.data = res.data.list;
      });
    },
  },
  onLoad(op) {
    // 初始化参数
    this.initParams(op);
    // 获取进出口信用数据
    this.getImportAndExportCredit();
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import './importAndExportCredit.scss';
</style>
