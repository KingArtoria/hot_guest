<template>
  <view>
    <view class="head">
      <image class="head_1" src="http://39.106.208.234/pic/img_/black_icon_w.png" @click="_back" />
      <view class="head_2">
        <u-tabs :list="memberType" lineColor="#FFDA92" lineWidth="23rpx" lineHeight="5rpx" :inactiveStyle="{ 'font-size': '30rpx', 'font-weight': 'bold', color: '#FFF', padding: '0 20rpx' }" :activeStyle="{ 'font-size': '30rpx', 'font-weight': 'bold', color: '#FFD587', padding: '0 20rpx' }" :itemStyle="{ height: '80rpx' }" />
      </view>
    </view>
    <view class="content">
      <!-- 会员卡 -->
      <view class="content_1">
        <view class="content_1_1" :style="`background:url('${memberCard[0].url}') no-repeat`">
          <view class="content_1_1_1">NO.1526789456756132</view>
          <view class="content_1_1_2">
            <view class="content_1_1_2_1">
              <image class="content_1_1_2_1_1" src="https://admin.bdhuoke.com/upload/20220808/687f5fda3f9928dd941c0409dad7270a.png" />
              <view class="content_1_1_2_1_2">
                <view class="content_1_1_2_1_2_1">慌慌张张</view>
                <view class="content_1_1_2_1_2_1">2021-12-53到期</view>
              </view>
            </view>
            <view class="content_1_1_2_2">续费</view>
          </view>
        </view>
      </view>
      <!-- 分界线 -->
      <image class="content_2" src="http://39.106.208.234/pic/img_/fengx@2x.png" />
      <!-- 价格 -->
      <view class="content_3">
        <view class="content_3_1">{{ memberCard[0].tagText }}</view>
        <view class="content_3_2">
          <view class="content_3_2_1">{{ memberCard[0].name }}</view>
          <view class="content_3_2_2">
            <view class="content_3_2_2_1">{{ memberCard[0].price }}</view>
            <view class="content_3_2_2_2">元</view>
          </view>
        </view>
        <view class="content_3_3">{{ memberCard[0].info }}</view>
      </view>
      <!-- 支付方式 -->
      <view class="content_4">
        <view class="content_4_1">选择支付方式</view>
        <view class="content_4_2">
          <view class="content_4_2_1">
            <image class="content_4_2_1_1" src="http://39.106.208.234/pic/img_/wechat_pay.png" />
            <view class="content_4_2_1_2">微信支付</view>
          </view>
          <image class="content_4_2_2" src="http://39.106.208.234/pic/img_/bq_xz_b.png" />
        </view>
        <view class="content_4_2">
          <view class="content_4_2_1">
            <image class="content_4_2_1_1" src="http://39.106.208.234/pic/img_/wechat_pay.png" />
            <view class="content_4_2_1_2">微信支付</view>
          </view>
          <image class="content_4_2_2" src="http://39.106.208.234/pic/img_/bq_xz_b.png" />
        </view>
        <view class="content_4_3">到期后自动续费，可随时取消</view>
        <view class="content_4_4">限时特惠98元开通</view>
        <view class="content_4_5">
          <u-checkbox-group activeColor="#C38E5B" inactiveColor="#C38E5B">
            <u-checkbox />
          </u-checkbox-group>
          <view class="content_4_5_1">
            <view class="content_4_5_1_1">我已阅读开通VIP的</view>
            <view class="content_4_5_1_2">相关协议</view>
          </view>
        </view>
      </view>
      <!-- 灰色分界线 -->
      <view class="content_5" />
    </view>
  </view>
</template>

<script>
import { MEMBER_CARD, MEMBER_TYPE } from '../../utils/const';
export default {
  data() {
    return {
      // 会员类型
      memberType: [],
      // 会员卡片
      memberCard: [],
    };
  },
  methods: {
    // 初始化参数
    initParams() {
      this.memberType = MEMBER_TYPE;
      this.memberCard = MEMBER_CARD;
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
