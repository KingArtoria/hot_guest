<template>
  <view>
    <Head title="业务订阅" />
    <view class="content">
      <!-- 头部介绍 -->
      <view class="content_1">
        <view class="content_1_1">
          <view class="content_1_1_1" />
          <view class="content_1_1_2">用户添加业务词，平台会第一时间根据您的业务词进行业务精准推送。会员用户更有每月免费短信推送服务，保障用户高效率合作。</view>
        </view>
        <view class="content_1_2">可添加1个业务词</view>
      </view>
      <!-- 已添加业务词 -->
      <view class="content_2">
        <Title title="已添加业务词" />
        <view class="content_2_1">
          <view class="content_2_1_1">
            <view class="content_2_1_1_1">#快应用</view>
            <image class="content_2_1_1_2" :src="`${_url}sahnchu.png`" />
          </view>
          <view class="content_2_1_1">
            <view class="content_2_1_1_1">#快应用</view>
            <image class="content_2_1_1_2" :src="`${_url}sahnchu.png`" />
          </view>
        </view>
      </view>
      <!-- 权益对比 -->
      <view class="content_3">
        <image class="content_3_1" src="http://39.106.208.234/pic/img_/dyqy.png" />
        <image class="content_3_2" src="http://39.106.208.234/pic/img_/huiyuanyh.png" />
        <image class="content_3_3" src="http://39.106.208.234/pic/img_/putongyonghu.png" />
        <view class="content_3_4">去开通</view>
        <view class="content_3_5">去购买</view>
      </view>
    </view>
  </view>
</template>

<script>
import Title from '../../components/Title.vue';
import Head from '../../components/Head';
export default {
  components: { Head, Title },
};
</script>

<style lang="scss" scoped>
@import './businessSubscription.scss';
</style>
