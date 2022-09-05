<template>
  <view>
    <!-- Head头 -->
    <view class="head">
      <Fh_b />
      <view class="head_2">
        <u--input placeholder="输入关键词进行搜索" border="none" prefixIcon="search"
          prefixIconStyle="font-size: 22px;color: #BCBCBC" clearable />
      </view>
      <view class="head_3">搜索</view>
    </view>
    <view class="content">
      <!-- 历史搜索 -->
      <view class="content_1">
        <view class="content_1_1">
          <view class="content_1_1_1">历史搜索</view>
          <image class="content_1_1_2" src="http://39.106.208.234/pic/img_/shanchu2.png" />
        </view>
        <view class="content_1_2">
          <view class="content_1_2_1">地推</view>
          <view class="content_1_2_1">拉新</view>
          <view class="content_1_2_1">淘口令</view>
          <view class="content_1_2_1">阅读激励量</view>
          <view class="content_1_2_1">地推</view>
          <view class="content_1_2_1">PC-阅读量</view>
        </view>
      </view>
      <!-- 标签 -->
      <u-sticky bgColor="#fff" style="padding:0 20rpx" :customNavHeight="0" :offsetTop="0">
        <u-tabs :list="labelImg" :activeStyle="{ color: '#303133', fontWeight: 'bold', transform: 'scale(1.05)' }"
          :inactiveStyle="{ color: '#606266', transform: 'scale(1)' }" />
      </u-sticky>
      <!-- 内容列表 -->
      <view class="content_2">
        <ProjectB />
      </view>
    </view>
  </view>
</template>

<script>
import Fh_b from '../../components/Fh_b'
import ProjectB from '../../components/ProjectB'
import { LABEL_IMG } from '../../utils/const'
export default {
  data() {
    return {
      labelImg: [],
    }
  },
  onLoad() {
    this.labelImg = LABEL_IMG
  },
  components: { Fh_b, ProjectB, ProjectB }
}
</script>

<style lang="scss" scoped>
@import './search.scss';
</style>