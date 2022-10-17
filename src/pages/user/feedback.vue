<template>
  <view>
    <Head title="意见反馈">
      <view slot="head_3_1" :style="slotStyle">提交</view>
    </Head>
    <view class="content">
      <!-- 内容 -->
      <view class="content_1">
        <u--textarea placeholder="请描述您遇到的问题或意见" border="none" autoHeight count :maxlength="500" />
        <u-upload style="margin-top: 50rpx; padding-left: 14rpx" />
      </view>
      <!-- 联系方式 -->
      <view class="content_2">
        <view class="content_2_1">联系方式</view>
        <u--input border="none" placeholder="QQ、邮箱或手机号码" />
      </view>
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head';
export default {
  data() {
    return {
      /* 头部样式 */ slotStyle: { 'font-size': '28rpx' },
    };
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import './feedback.scss';
</style>
