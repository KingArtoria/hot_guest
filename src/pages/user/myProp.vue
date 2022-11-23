<template>
  <view>
    <!-- 头部 -->
    <view class="head">
      <!-- 左边盒子 -->
      <view class="head_1" @click="goBack">
        <!-- 返回图标 -->
        <image
          class="head_1_1"
          src="http://39.106.208.234/pic/img_/black_ss.png"
        />
      </view>
      <!-- 中间盒子 -->
      <view class="head_2">
        <!-- 待使用 -->
        <view class="head_2_1" :style="`color:${color[0]}`" @click="change(0)"
          >待使用</view
        >
        <!-- 已使用 -->
        <view
          class="head_2_1"
          :style="`color:${color[1]}`"
          @click="change('50%')"
          >已使用</view
        >
        <!-- 定位漂移层 -->
        <view class="head_2_2" :style="`left:${distance}`" />
      </view>
      <!-- 右边盒子(占位) -->
      <view class="head_3" />
    </view>
    <!-- 内容 -->
    <view class="content">
      <!-- 待使用 -->
      <view class="content_1">
        <!-- 道具 -->
        <Props
          v-for="(item, index) in myProps"
          :key="index"
          :item="item"
          :type="2"
          :status="distance == 0 ? 0 : 1"
        />
      </view>
    </view>
  </view>
</template>

<script>
import Head from "../../components/Head";
import Props from "../../components/Props";
import { getMyProps } from "../../utils/api";
export default {
  data() {
    return {
      // 我的道具
      myProps: [],
      // 定位距离
      distance: 0,
      // 头部字体颜色
      color: ["#fff", "#2a2a2a"],
    };
  },
  methods: {
    // 我的道具
    getMyProps(status = 0) {
      // 我的道具API
      getMyProps({ status }).then((res) => {
        // 格式化数据
        res.data.user_coupons.forEach((item) => {
          // 添加图片前缀
          item.image = `http://39.106.208.234/${item.image}`;
        });
        // 道具赋值
        this.myProps = res.data.user_coupons;
      });
    },
    // 切换
    change(e) {
      // 更改定位距离
      this.distance = e;
      // 数组每次调换位置
      this.color.push(this.color.shift());
      // 如果e=50%则为已使用
      if (e == "50%") {
        // 已使用
        this.getMyProps(1);
      } else {
        // 待使用
        this.getMyProps();
      }
    },
    // 返回上一页
    goBack() {
      // 返回上一页
      uni.navigateBack();
    },
  },
  onLoad() {
    // 我的道具
    this.getMyProps();
  },
  components: { Head, Props },
};
</script>

<style lang="scss" scoped>
@import "./myProp.scss";
</style>