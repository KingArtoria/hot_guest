<template>
  <view>
    <Head title="学校名称" style="background: #f6f6f6">
      <view slot="head_3_1" :style="slotStyle">确定</view>
    </Head>
    <view class="content">
      <view class="content_1">
        <image class="content_1_1" src="http://39.106.208.234/pic/img_/sousuo_rm.png" />
        <u--input placeholder="输入学校名称" fontSize="28px" border="none" clearable/>
      </view>
      <view class="content_2">2</view>
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head';
export default {
  data() {
    return {
      slotStyle: { 'font-size': '30rpx', color: '#1f73f1', 'text-align': 'end' },
    };
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import './school.scss';
</style>
