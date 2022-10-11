<template>
  <view>
    <Head title="合作信息" style="background: #f6f6f6">
      <image slot="head_3_1" :style="slotStyle" src="http://39.106.208.234/pic/img_/xiaoxi@2x.png" />
    </Head>
    <view class="content">
      <u-tabs :list="labelImg" :activeStyle="tabsStyle[0]" :inactiveStyle="tabsStyle[1]" :itemStyle="tabsStyle[2]" lineColor="#3875E9" lineWidth="92rpx" lineHeight="4rpx" />
      <view class="content_1">
        <ProjectB />
        <ProjectB />
        <ProjectB />
        <ProjectB />
      </view>
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head';
import ProjectB from '../../components/ProjectB';
import { LABEL_IMG } from '../../utils/const';
export default {
  data() {
    return {
      // 插槽样式
      slotStyle: { width: '80rpx', height: '80rpx' },
      // tabs数值
      labelImg: [],
      // tabs样式
      tabsStyle: [{ color: '#1A1A1A', fontWeight: 'bold', 'font-size': '28rpx', padding: '0 20rpx' }, { color: '#1A1A1A', fontSize: '28rpx', padding: '0 20rpx' }, { height: '80rpx' }],
    };
  },
  methods: {
    // 初始化参数
    initParams() {
      this.labelImg = LABEL_IMG;
      // 删除第一个
      this.labelImg.shift();
    },
  },
  onLoad() {
    // 初始化参数
    this.initParams();
  },
  components: { Head, ProjectB },
};
</script>

<style lang="scss" scoped>
@import './myPost.scss';
</style>
