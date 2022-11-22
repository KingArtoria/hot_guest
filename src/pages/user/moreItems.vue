<template>
  <view>
    <Head title="更多项目" style="background: #f6f6f6" />
    <view class="content">
      <view class="content_1">
        <ProjectC :data="otherRelease" />
      </view>
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head';
import ProjectC from '../../components/ProjectC';
import { getOtherRelease } from '../../utils/api';
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
      // 他人发布的项目参数
      otherReleaseParams: { type: 1 },
      // 他人发布的项目
      otherRelease: [],
    };
  },
  methods: {
    // 初始化参数
    initParams(op) {
      // 参数赋值id
      this.otherReleaseParams.id = op.id;
    },
    // 他人发布的项目
    getOtherRelease() {
      // 获取他人发布的项目API
      getOtherRelease(this.otherReleaseParams).then(res => {
        // 数据赋值
        this.otherRelease = res.data;
      });
    },
  },
  onLoad(op) {
    // 初始化参数
    this.initParams(op);
    // 他人发布的项目
    this.getOtherRelease();
  },
  components: { Head, ProjectC },
};
</script>

<style lang="scss" scoped>
@import './myPost.scss';
</style>
