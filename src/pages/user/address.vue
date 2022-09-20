<template>
  <view>
    <Head title="选择地区">
      <view slot="head_3_1" :style="slotStyle">确定</view>
    </Head>
    <view class="content">
      <view class="content_1">
        <view class="content_1_1">全国</view>
        <view class="content_1_1">上海</view>
        <view class="content_1_1">广东</view>
        <view class="content_1_1">浙江</view>
        <view class="content_1_1">湖北</view>
        <view class="content_1_1">重庆</view>
        <view class="content_1_1">四川</view>
      </view>
      <view class="content_2">
        <view class="content_2_1">朝阳区</view>
        <view class="content_2_1">东城区</view>
        <view class="content_2_1">东城区</view>
        <view class="content_2_1">东城区</view>
        <view class="content_2_1">东城区</view>
        <view class="content_2_1">东城区</view>
        <view class="content_2_1">东城区</view>
        <view class="content_2_1">东城区</view>
        <view class="content_2_1">东城区</view>
        <view class="content_2_1">东城区</view>
        <view class="content_2_1">东城区</view>
      </view>
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head';
export default {
  data() {
    return {
      slotStyle: { width: '86rpx', height: '40rpx', background: '#317af6', 'border-radius': '4rpx', 'text-align': 'center', 'font-size': '26rpx', 'font-weight': 500, color: '#fff', 'line-height': '40rpx', display: 'inline-block' },
    };
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import './address.scss';
</style>
