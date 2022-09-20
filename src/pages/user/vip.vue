<template>
  <view>
    <view class="head">
      <image class="head_1" src="http://39.106.208.234/pic/img_/black_icon_w.png" @click="_back" />
      <view class="head_2">
        <u-tabs :list="memberType" lineColor="#FFDA92" lineWidth="23rpx" lineHeight="5rpx" :inactiveStyle="{ 'font-size': '30rpx', 'font-weight': bold, color: '#FFF', padding: '0 20rpx' }" :activeStyle="{ 'font-size': '30rpx', 'font-weight': bold, color: '#FFD587', padding: '0 20rpx' }" :itemStyle="{ height: '80rpx' }" />
      </view>
    </view>
    <view class="content">
      <view class="content_1">
        <view class="content_1_1">
          <view class="content_1_1_1">NO.1526789456756132</view>
          <view class="content_1_1_2">
            <view class="content_1_1_2_1">
              <image class="content_1_1_2_1_1" />
              <view class="content_1_1_2_1_2">
                <view class="content_1_1_2_1_2_1">慌慌张张</view>
                <view class="content_1_1_2_1_2_1">2021-12-53到期</view>
              </view>
            </view>
            <view class="content_1_1_2_2">续费</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { MEMBER_TYPE } from '../../utils/const';
export default {
  data() {
    return {
      // 会员类型
      memberType: [],
    };
  },
  methods: {
    // 初始化参数
    initParams() {
      this.memberType = MEMBER_TYPE;
    },
  },
  onLoad() {
    // 初始化参数
    this.initParams();
  },
};
</script>

<style lang="scss" scoped>
@import './vip.scss';
</style>
