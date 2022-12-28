<template>
  <view>
    <view class="content">
      <!-- 头部 -->
      <view class="content_1">
        <image class="content_1_1" src="http://39.106.208.234/pic/img_/back_bs.png" @click="goBack" />
      </view>
      <!-- 表单 -->
      <view class="content_2">
        <view class="content_2_1">
          <view class="content_2_1_1">企业名称：</view>
          <view class="content_2_1_2">
            <u--input placeholder="请输入企业名称" fontSize="26rpx" v-model="advertisingSpaceRental.company" />
          </view>
        </view>
        <view class="content_2_1">
          <view class="content_2_1_1">联系人：</view>
          <view class="content_2_1_2">
            <u--input placeholder="请输入联系人" fontSize="26rpx" v-model="advertisingSpaceRental.contact" />
          </view>
        </view>
        <view class="content_2_1">
          <view class="content_2_1_1">联系方式：</view>
          <view class="content_2_1_2">
            <u--input placeholder="请输入联系方式" fontSize="26rpx" v-model="advertisingSpaceRental.mobile" disabled />
          </view>
        </view>
        <view class="content_2_1">
          <view class="content_2_1_1">投放位置：</view>
          <view class="content_2_1_2" @click="place.show = true">
            <u--input placeholder="请选择投放位置" fontSize="26rpx" v-model="advertisingSpaceRental.place_name" disabled />
          </view>
        </view>
        <view class="content_2_1">
          <view class="content_2_1_1">投放周期：</view>
          <view class="content_2_1_2" @click="cycle.show = true">
            <u--input placeholder="请选择投放周期" fontSize="26rpx" v-model="advertisingSpaceRental.cycle_name" disabled />
          </view>
        </view>
        <view class="content_2_1">
          <view class="content_2_1_1">预算(元)：</view>
          <view class="content_2_1_2">
            <u--input placeholder="请输入预算" fontSize="26rpx" v-model="advertisingSpaceRental.budget" />
          </view>
        </view>
      </view>
      <!-- 提交按钮 -->
      <view class="content_3" @click="applyAd">提交</view>
      <!-- 友情提示 -->
      <view class="content_4">提交完成后请耐心等待客服与您联系</view>
    </view>
    <!-- 投放位置选择器 -->
    <u-picker :show="place.show" :columns="place.columns" keyName="name" @confirm="place.confirm"
      @cancel="place.cancel" />
    <!-- 投放周期选择器 -->
    <u-picker :show="cycle.show" :columns="cycle.columns" keyName="name" @confirm="cycle.confirm"
      @cancel="cycle.cancel" />
    <!-- 申请成功模态框 -->
    <u-modal :show="success.show" :title="success.title" :content="success.content" @confirm="success.confirm" />
  </view>
</template>

<script>
import { showToast } from "../../utils";
import { applyAd } from "../../utils/api";
export default {
  data() {
    return {
      // 广告投放参数
      advertisingSpaceRental: {},
      // 投放位置选择器
      place: {
        // 是否显示
        show: false,
        // 数据
        columns: [
          [
            { id: 1, name: "APP首页轮播图" },
            { id: 2, name: "APP首页置顶" },
            { id: 3, name: "APP咨询信息流广告" },
            { id: 4, name: "PCWEB站首页轮播图" },
            { id: 5, name: "PCWEB站左侧广告位" },
            { id: 6, name: "PCWEB站右侧广告位" },
          ],
        ],
        // 成功回调
        confirm: (res) => {
          // 参数赋值
          this.advertisingSpaceRental.place_id = res.value[0].id;
          // 展示赋值
          this.advertisingSpaceRental.place_name = res.value[0].name;
          // 关闭选择器
          this.place.show = false;
        },
        // 关闭回调
        cancel: () => {
          this.place.show = false;
        },
      },
      // 投放周期选择器
      cycle: {
        // 是否显示
        show: false,
        // 数据
        columns: [
          [
            { id: 1, name: "一周" },
            { id: 2, name: "一月" },
            { id: 3, name: "一季" },
            { id: 4, name: "半年" },
            { id: 5, name: "一年" },
          ],
        ],
        // 成功回调
        confirm: (res) => {
          // 参数赋值
          this.advertisingSpaceRental.cycle_id = res.value[0].id;
          // 展示赋值
          this.advertisingSpaceRental.cycle_name = res.value[0].name;
          // 关闭选择器
          this.cycle.show = false;
        },
        // 关闭回调
        cancel: () => {
          this.cycle.show = false;
        },
      },
      // 申请成功模态框
      success: {
        show: false,
        title: "申请成功",
        content: "请耐心等待客服与您联系",
        confirm: () => {
          // 关闭模态框
          this.success.show = false;
          // 返回上一页
          uni.navigateBack();
        },
      },
    };
  },
  methods: {
    // 返回上一页
    goBack() {
      // 跳转
      uni.navigateBack();
    },
    // 提交
    applyAd() {
      // 申请广告API
      applyAd(this.advertisingSpaceRental).then((res) => {
        // 抛出异常
        if (res.code != 1) return showToast(res.msg);
        // 显示模态框
        this.success.show = true;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./advertisingSpaceRental.scss";
</style>
