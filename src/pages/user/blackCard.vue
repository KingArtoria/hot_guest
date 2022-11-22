<template>
  <view>
    <view class="head" />
    <view class="content">
      <view class="content_1">
        <view class="content_1_1">
          <view class="content_1_1_1">
            <image class="content_1_1_1_1" src="http://39.106.208.234/pic/img_/black_icon_w.png" />
          </view>
          <view class="content_1_1_2">黑卡</view>
          <view class="content_1_1_3" />
        </view>
        <view class="content_1_2">
          <view class="content_1_2_1">未解锁</view>
          <view class="content_1_2_2">
            <view class="content_1_2_2_1">19,999</view>
            <view class="content_1_2_2_2">元/年</view>
          </view>
        </view>
        <image class="content_1_3" src="http://39.106.208.234/pic/img_/shenqingheika.png" />
      </view>
      <view class="content_2">
        <view class="content_2_1">
          <u--input placeholder="请输入您的称呼" border="none" fontSize="26rpx" clearable v-model="applyBlackCardParams.name" />
        </view>
        <view class="content_2_1">
          <u--input placeholder="请输入您的联系方式" border="none" fontSize="26rpx" clearable v-model="applyBlackCardParams.mobile" />
        </view>
        <view class="content_2_2" @click="applyBlackCard">提交申请</view>
      </view>
      <image class="content_3" src="http://39.106.208.234/pic/img_/heikaquanyi.png" />
      <image class="content_4" src="http://39.106.208.234/pic/img_/fuwuliucheng.png" />
    </view>
    <!-- 申请成功 -->
    <u-modal :show="applyBlackCardModal.show" :title="applyBlackCardModal.title" :content="applyBlackCardModal.content" @confirm="applyBlackCardModal.confirm" />
  </view>
</template>

<script>
import { showToast } from '../../utils';
import { applyBlackCard } from '../../utils/api';
export default {
  data() {
    return {
      // 申请黑卡参数
      applyBlackCardParams: {},
      // 申请成功模态框对象
      applyBlackCardModal: {
        show: false,
        title: '申请成功',
        content: '我们将在1-3个工作日内与您联系，请保持电话畅通',
        confirm: () => {
          // 返回上一页
          uni.navigateBack();
        },
      },
    };
  },
  methods: {
    // 黑卡申请
    applyBlackCard() {
      // 黑卡申请API
      applyBlackCard(this.applyBlackCardParams).then(res => {
        // 弹出异常
        if (res.code != 1) return showToast(res.msg);
        // 弹出申请成功模态框
        this.applyBlackCardModal.show = true;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import './blackCard.scss';
</style>
