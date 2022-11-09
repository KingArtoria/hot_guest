<template>
  <view>
    <Head title="税务违法详情" />
    <view class="content">
      <!-- 标题 -->
      <view class="content_1">纳税人名称</view>
      <!-- 内容 -->
      <view class="content_2" style="color: #0d86ff">{{ taxInfo.tax_name }}</view>
      <!-- 信息块 -->
      <view class="content_3">
        <!-- 左侧 -->
        <view class="content_3_1">
          <!-- 标题 -->
          <view class="content_3_1_1">纳税人识别号</view>
          <!-- 内容 -->
          <view class="content_3_1_2">{{ taxInfo.tax_number }}</view>
        </view>
        <!-- 分割线 -->
        <view class="content_3_2" />
        <!-- 右侧 -->
        <view class="content_3_1">
          <!-- 标题 -->
          <view class="content_3_1_1">组织机构代码</view>
          <!-- 内容 -->
          <view class="content_3_1_2">{{ taxInfo.organization_code }}</view>
        </view>
      </view>
      <!-- 标题 -->
      <view class="content_1">注册地址</view>
      <!-- 内容 -->
      <view class="content_2" style="padding-bottom: 40rpx">{{ taxInfo.registered_address }}</view>
      <!-- 分割块 -->
      <view class="content_4" />
      <!-- 标题 -->
      <view class="content_1" style="padding-top: 40rpx">法定负责人或者负责人</view>
      <!-- 内容 -->
      <view class="content_2">{{ taxInfo.id_legal_person[0] }}</view>
      <!-- 标题 -->
      <view class="content_1">性别</view>
      <!-- 内容 -->
      <view class="content_2">{{ taxInfo.id_legal_person[1] }}</view>
      <!-- 标题 -->
      <view class="content_1">证件号码</view>
      <!-- 内容 -->
      <view class="content_2" style="padding-bottom: 40rpx">{{ taxInfo.id_legal_person[2] }}</view>
      <!-- 分割块 -->
      <view class="content_4" />
      <!-- 标题 -->
      <view class="content_1" style="padding-top: 40rpx">案件性质</view>
      <!-- 内容 -->
      <view class="content_2">{{ taxInfo.nature }}</view>
      <!-- 标题 -->
      <view class="content_1">主要违法事实、相关法律依据及税务处理处罚情况</view>
      <!-- 内容 -->
      <view class="content_2" style="padding-bottom: 40rpx">{{ taxInfo.punishments }}</view>
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head';
export default {
  data() {
    return {
      // 税务违法详情数据
      taxInfo: {},
    };
  },
  methods: {
    // 初始化参数
    initParams() {
      this.taxInfo = uni.getStorageSync('item');
      this.taxInfo.id_legal_person = this.taxInfo.id_legal_person.split(',');
    },
  },
  onLoad() {
    // 初始化参数
    this.initParams();
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import './taxViolationInfo.scss';
</style>
