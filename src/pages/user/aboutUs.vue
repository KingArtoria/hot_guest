<template>
  <view>
    <Head title="关于我们" style="background: #f6f6f6" />
    <view class="content" id="content">
      <!-- logo -->
      <image class="content_1" src="../../static/logo.png" />
      <!-- 版本号 -->
      <view class="content_2">火客{{ _version }}</view>
      <!-- 公司名称 -->
      <view class="content_3">徐州星跃联动网络科技有限公司</view>
      <!-- 公司名称 -->
      <view class="content_4">Xuzhou Xingyueliandong</view>
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head';
export default {
  data() {
    return {};
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import './aboutUs.scss';
</style>
