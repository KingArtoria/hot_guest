<template>
  <view>
    <view class="content">
      <!-- 渐变层 -->
      <view class="content_1">
        <!-- 个人信息 -->
        <view class="content_1_1">
          <view class="content_1_1_1" @click="goEditData">
            <image class="content_1_1_1_1" src="https://admin.bdhuoke.com//upload/20220808/687f5fda3f9928dd941c0409dad7270a.png" />
            <image class="content_1_1_1_2" src="http://39.106.208.234/pic/img_/xg.webp" />
          </view>
          <view class="content_1_1_2">
            <view class="content_1_1_2_1">
              <view class="content_1_1_2_1_1">我是名字</view>
              <HY :type="1" />
            </view>
            <view class="content_1_1_2_2" style="margin-bottom: 19rpx">BD火客&nbsp;&nbsp;&nbsp;产品经理</view>
            <view class="content_1_1_2_2">我的邀请码：152645964（点击复制）</view>
          </view>
        </view>
        <!-- 选项卡 -->
        <view class="content_1_2">
          <image class="content_1_2_1" :src="`${_url}daojshangc.webp`" @click="goProp" />
          <image class="content_1_2_1" :src="`${_url}wodeqianb.webp`" @click="goWaller" />
          <image class="content_1_2_1" :src="`${_url}heika.webp`" @click="goBlackCard" />
        </view>
        <!-- 开通会员 -->
        <view class="content_1_3" @click="goVip">
          <view class="content_1_3_1">开通会员立享超值特权</view>
          <view class="content_1_3_2">立即开通</view>
        </view>
      </view>
      <!-- 选项卡*4 -->
      <view class="content_2">
        <view class="content_2_1">
          <image class="content_2_1_1" :src="`${_url}wofabud.webp`" @click="goMyPost" />
          <image class="content_2_1_2" :src="`${_url}shoucang.webp`" />
          <image class="content_2_1_3" :src="`${_url}daoju.webp`" />
          <image class="content_2_1_4" :src="`${_url}danbaojil.webp`" @click="goGuaranteeRecord" />
        </view>
        <view class="content_2_2">
          <view class="content_2_2_1">我发布的</view>
          <view class="content_2_2_1">我的收藏</view>
          <view class="content_2_2_1">我的道具</view>
          <view class="content_2_2_1">担保记录</view>
        </view>
      </view>
      <!-- 常用 -->
      <view class="content_3">
        <view class="content_3_1">常用</view>
        <view class="content_3_2">
          <view class="content_3_2_1">
            <image class="content_3_2_1_1" :src="`${_url}yewudy.webp`" @click="goBusinessSubscription" />
            <image class="content_3_2_1_2" :src="`${_url}mingpian.webp`" />
            <image class="content_3_2_1_3" :src="`${_url}yaoqing.webp`" @click="goInviteFriends" />
          </view>
          <view class="content_3_2_2">
            <view class="content_3_2_2_1">业务订阅</view>
            <view class="content_3_2_2_1">名片夹</view>
            <view class="content_3_2_2_1">邀请有礼</view>
          </view>
        </view>
      </view>
      <!-- 其他 -->
      <view class="content_4">
        <view class="content_4_1">其他</view>
        <view class="content_4_2">
          <view class="content_4_2_1" @click="goVerified">
            <image class="content_4_2_1_1" :src="`${_url}shimrz.webp`" />
            <view class="content_4_2_1_6">实名认证</view>
          </view>
          <view class="content_4_2_1" @click="show = true">
            <image class="content_4_2_1_2" :src="`${_url}kefu.webp`" />
            <view class="content_4_2_1_6">联系客服</view>
          </view>
          <view class="content_4_2_1">
            <image class="content_4_2_1_3" :src="`${_url}yijinfk.webp`" />
            <view class="content_4_2_1_6">意见反馈</view>
          </view>
          <view class="content_4_2_1">
            <image class="content_4_2_1_4" :src="`${_url}shezhi.webp`" />
            <view class="content_4_2_1_6">设置</view>
          </view>
          <view class="content_4_2_1">
            <image class="content_4_2_1_5" :src="`${_url}tuichu.webp`" />
            <view class="content_4_2_1_6">退出</view>
          </view>
        </view>
      </view>
    </view>
    <!-- 客服 -->
    <u-overlay :show="show" @click="show = false">
      <view class="show">
        <view class="show_1">
          <text class="show_1_1">商务合作：</text>
          <text class="show_1_2">18511169119</text>
        </view>
        <image class="show_2" src="http://39.106.208.234/pic/img_/rwmsw.png" />
        <view class="show_3">商务合作</view>
      </view>
    </u-overlay>
  </view>
</template>

<script>
import HY from '../../components/HY';
export default {
  data() {
    return {
      /* 展示客服 */ show: false,
    };
  },
  methods: {
    // 前往修改信息
    goEditData() {
      uni.navigateTo({
        url: '/pages/user/editData',
      });
    },
    // 前往道具商城
    goProp() {
      uni.navigateTo({
        url: '/pages/user/prop',
      });
    },
    // 前往钱包
    goWaller() {
      uni.navigateTo({
        url: '/pages/user/wallet',
      });
    },
    // 前往黑卡
    goBlackCard() {
      uni.navigateTo({
        url: '/pages/user/blackCard',
      });
    },
    // 前往会员
    goVip() {
      uni.navigateTo({
        url: '/pages/user/vip',
      });
    },
    // 前往我的发布
    goMyPost() {
      uni.navigateTo({
        url: '/pages/user/myPost',
      });
    },
    // 前往担保记录
    goGuaranteeRecord() {
      uni.navigateTo({
        url: '/pages/user/guaranteeRecord',
      });
    },
    // 前往业务订阅
    goBusinessSubscription() {
      uni.navigateTo({
        url: '/pages/user/businessSubscription',
      });
    },
    // 前往邀请好友
    goInviteFriends() {
      uni.navigateTo({
        url: '/pages/user/inviteFriends',
      });
    },
    // 前往实名认证
    goVerified() {
      uni.navigateTo({
        url: '/pages/user/verified',
      });
    },
  },
  components: { HY },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
